import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Layers, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  Sparkles, 
  FileEdit, 
  Coins, 
  ShieldCheck, 
  CheckCircle, 
  ArrowUpRight,
  FileText,
  UserCheck,
  Building,
  CheckCircle2,
  FolderLock,
  ChevronDown,
  User,
  BadgeCheck,
  Award,
  GraduationCap,
  Clock
} from 'lucide-react';
import { schemeService } from '../services/schemeService';
import { evaluateSchemeEligibility, calculateTotalPotentialBenefit } from '../utils/matchingEngine';
import type { CategoryType, MatchResult, UserProfile } from '../types';
import { storageService } from '../lib/supabase';
import { SchemeDetailModal } from './SchemeDetailModal';

interface DashboardProps {
  user: UserProfile;
  initialTab?: 'matched' | 'saved' | 'profile_answers' | 'document_locker';
  onOpenQuestionnaire: () => void;
  onUpdateUser: (updatedUser: UserProfile) => void;
  onNavigate?: (view: 'landing' | 'dashboard' | 'saved' | 'profile') => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  user,
  initialTab,
  onOpenQuestionnaire,
  onUpdateUser: _onUpdateUser,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'matched' | 'saved' | 'profile_answers' | 'document_locker'>(initialTab || 'matched');

  // Keep activeTab in sync with initialTab when navigated from Navbar
  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tab: 'matched' | 'saved' | 'profile_answers' | 'document_locker') => {
    setActiveTab(tab);
    if (onNavigate) {
      if (tab === 'saved') onNavigate('saved');
      else if (tab === 'matched') onNavigate('dashboard');
    }
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedSchemeType, setSelectedSchemeType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'match' | 'benefit_desc' | 'benefit_asc' | 'title_asc' | 'title_desc' | 'popular'>('match');
  const [savedSchemeIds, setSavedSchemeIds] = useState<string[]>([]);
  const [selectedSchemeForModal, setSelectedSchemeForModal] = useState<MatchResult | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const [matchViewMode, setMatchViewMode] = useState<'strictly_eligible' | 'all'>('strictly_eligible');

  // Load saved schemes on mount
  React.useEffect(() => {
    storageService.getSavedSchemes(user.id).then(saved => {
      setSavedSchemeIds(saved);
    });
  }, [user.id]);

  // Reset visible pagination count whenever search or filters change
  React.useEffect(() => {
    setVisibleCount(24);
  }, [searchQuery, selectedCategoryFilter, selectedSchemeType, sortBy, activeTab, matchViewMode]);

  // Evaluate all 3,280+ schemes with user answers
  const allEvaluations: MatchResult[] = useMemo(() => {
    return schemeService.getAllSchemes().map(scheme => 
      evaluateSchemeEligibility(scheme, user.answers || {}, user.selectedCategory)
    );
  }, [user.answers, user.selectedCategory]);

  // Metrics
  const eligibleSchemes = allEvaluations.filter(e => e.isEligible);
  const totalPotentialBenefit = calculateTotalPotentialBenefit(allEvaluations);
  const savedSchemesCount = savedSchemeIds.length;

  // Filtered & Sorted schemes
  const filteredSchemes = useMemo(() => {
    let list: MatchResult[];
    if (activeTab === 'saved') {
      list = allEvaluations.filter(e => savedSchemeIds.includes(e.scheme.id));
    } else if (matchViewMode === 'strictly_eligible') {
      list = eligibleSchemes;
    } else {
      list = allEvaluations;
    }

    // Search query filter (multi-token search)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const tokens = q.split(/\s+/);
      list = list.filter(e => {
        const fullText = (
          e.scheme.title + ' ' +
          e.scheme.shortDescription + ' ' +
          e.scheme.ministryOrOrganization + ' ' +
          (e.scheme.tags || []).join(' ') + ' ' +
          (e.scheme.type || '')
        ).toLowerCase();
        return tokens.every(token => fullText.includes(token));
      });
    }

    // Category filter
    if (selectedCategoryFilter !== 'all') {
      if (selectedCategoryFilter === 'healthcare') {
        list = list.filter(e => 
          e.scheme.category.includes('healthcare') || 
          e.scheme.category.includes('senior_citizen')
        );
      } else {
        list = list.filter(e => 
          e.scheme.category.includes(selectedCategoryFilter as CategoryType)
        );
      }
    }

    // Scheme type filter (Central, State, Private & CSR, Banking)
    if (selectedSchemeType !== 'all') {
      list = list.filter(e => e.scheme.type === selectedSchemeType);
    }

    // Non-mutating Sort
    const sorted = [...list].sort((a, b) => {
      if (sortBy === 'benefit_desc') {
        const diff = (b.scheme.financialBenefitMax || 0) - (a.scheme.financialBenefitMax || 0);
        if (diff !== 0) return diff;
        return b.matchScore - a.matchScore;
      }
      if (sortBy === 'benefit_asc') {
        const diff = (a.scheme.financialBenefitMax || 0) - (b.scheme.financialBenefitMax || 0);
        if (diff !== 0) return diff;
        return b.matchScore - a.matchScore;
      }
      if (sortBy === 'title_asc') {
        return a.scheme.title.localeCompare(b.scheme.title, undefined, { sensitivity: 'base' });
      }
      if (sortBy === 'title_desc') {
        return b.scheme.title.localeCompare(a.scheme.title, undefined, { sensitivity: 'base' });
      }
      if (sortBy === 'popular') {
        const popA = a.scheme.isPopular ? 1 : 0;
        const popB = b.scheme.isPopular ? 1 : 0;
        if (popB !== popA) return popB - popA;
        return b.matchScore - a.matchScore;
      }

      // Default: 'match' (Highest Match Score First)
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore;
      }
      // Tie breaker 1: Higher benefit
      const benefitDiff = (b.scheme.financialBenefitMax || 0) - (a.scheme.financialBenefitMax || 0);
      if (benefitDiff !== 0) return benefitDiff;
      // Tie breaker 2: Popular
      const popA = a.scheme.isPopular ? 1 : 0;
      const popB = b.scheme.isPopular ? 1 : 0;
      if (popB !== popA) return popB - popA;
      // Tie breaker 3: Title
      return a.scheme.title.localeCompare(b.scheme.title);
    });

    return sorted;
  }, [allEvaluations, eligibleSchemes, matchViewMode, activeTab, savedSchemeIds, searchQuery, selectedCategoryFilter, selectedSchemeType, sortBy]);

  const handleToggleSave = async (schemeId: string) => {
    let updated: string[];
    if (savedSchemeIds.includes(schemeId)) {
      updated = savedSchemeIds.filter(id => id !== schemeId);
    } else {
      updated = [...savedSchemeIds, schemeId];
    }
    setSavedSchemeIds(updated);
    await storageService.saveSavedSchemes(user.id, updated);
  };

  // Extract unique documents needed across eligible schemes
  const consolidatedDocuments = useMemo(() => {
    const docMap = new Map<string, { name: string; description: string; mandatoryCount: number; usedInSchemes: string[] }>();
    
    eligibleSchemes.forEach(match => {
      match.scheme.requiredDocuments.forEach(doc => {
        const key = doc.name.toLowerCase().trim();
        if (!docMap.has(key)) {
          docMap.set(key, {
            name: doc.name,
            description: doc.description,
            mandatoryCount: doc.mandatory ? 1 : 0,
            usedInSchemes: [match.scheme.title]
          });
        } else {
          const item = docMap.get(key)!;
          if (doc.mandatory) item.mandatoryCount += 1;
          if (!item.usedInSchemes.includes(match.scheme.title)) {
            item.usedInSchemes.push(match.scheme.title);
          }
        }
      });
    });

    return Array.from(docMap.values());
  }, [eligibleSchemes]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] pb-24 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Banner / Welcome Ribbon */}
      <div className="bg-gradient-to-r from-orange-50/80 via-amber-50/40 to-emerald-50/80 dark:from-slate-900 dark:via-[#131C2E] dark:to-slate-900 border-b border-slate-200 dark:border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" /> Citizen Profile Active
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium capitalize">
                • Category: <strong className="text-slate-800 dark:text-white">{user.selectedCategory}</strong>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              Namaste, {user.fullName || user.email.split('@')[0]}
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
              Here are all verified Central, State, and CSR welfare schemes matching your 25+ profile answers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuestionnaire}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
            >
              <User className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              My Profile & Questions
            </button>

            <button
              onClick={() => setActiveTab('matched')}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-amber-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Recalculate Matches
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            onClick={() => handleTabChange('matched')}
            className="p-5 rounded-3xl glass-card border border-slate-200/80 dark:border-white/10 relative overflow-hidden cursor-pointer hover:border-emerald-500/50 hover:scale-[1.02] active:scale-95 transition-all select-none group"
            title="Click to view eligible schemes"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-emerald-500 transition-colors">Eligible Schemes</span>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">{eligibleSchemes.length}</span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">High Match Score</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Directly eligible to apply immediately</p>
          </div>

          <div className="p-5 rounded-3xl glass-card border border-slate-200/80 dark:border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estimated Benefit</span>
              <div className="w-10 h-10 rounded-2xl bg-brand-accent/15 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center border border-brand-accent/30">
                <Coins className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-brand-accent font-display">
                ₹{(totalPotentialBenefit / 100000).toFixed(2)}L
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Value</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Direct DBT, grants & subsidized loans</p>
          </div>

          <div 
            onClick={() => handleTabChange('saved')}
            className="p-5 rounded-3xl glass-card border border-slate-200/80 dark:border-white/10 relative overflow-hidden cursor-pointer hover:border-cyan-500/50 hover:scale-[1.02] active:scale-95 transition-all select-none group"
            title="Click to view all saved schemes"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider group-hover:text-cyan-500 transition-colors">Saved Schemes</span>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                <Bookmark className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">{savedSchemesCount}</span>
              <span className="text-xs font-medium text-cyan-600 dark:text-cyan-400">In My Locker</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Bookmarked for offline review / application</p>
          </div>

          <div className="p-5 rounded-3xl glass-card border border-slate-200/80 dark:border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Profile Accuracy</span>
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <UserCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">96%</span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">28 Factors</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">High accuracy matching confidence</p>
          </div>
        </div>

        {/* Sub Navigation Bar Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/60 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-white/10">
            <button
              onClick={() => handleTabChange('matched')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'matched'
                  ? 'bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              Eligible For You ({eligibleSchemes.length})
            </button>

            <button
              onClick={() => handleTabChange('saved')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'saved'
                  ? 'bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              Saved Schemes ({savedSchemesCount})
            </button>

            <button
              onClick={() => handleTabChange('document_locker')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'document_locker'
                  ? 'bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FolderLock className="w-4 h-4" />
              Document Locker ({consolidatedDocuments.length})
            </button>

            <button
              onClick={() => handleTabChange('profile_answers')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'profile_answers'
                  ? 'bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileEdit className="w-4 h-4" />
              My Answers & Domicile
            </button>
          </div>

          {/* Quick Search & Sort Filters */}
          {(activeTab === 'matched' || activeTab === 'saved') && (
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Match Mode Toggle */}
              {activeTab === 'matched' && (
                <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setMatchViewMode('strictly_eligible')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      matchViewMode === 'strictly_eligible'
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    🎯 100% Eligible ({eligibleSchemes.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setMatchViewMode('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      matchViewMode === 'all'
                        ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    🌐 All ({allEvaluations.length})
                  </button>
                </div>
              )}

              {/* Search */}
              <div className="relative flex-1 sm:w-60">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search schemes, keywords, ministry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl glass-input text-xs text-slate-900 dark:text-white placeholder-slate-400"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl glass-input text-xs font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm cursor-pointer hover:border-brand-accent/50 focus:border-brand-accent transition-all"
              >
                <option value="all">All Categories</option>
                <option value="farmer">🌾 Farmers & Agriculture</option>
                <option value="student">🎓 Students & Education</option>
                <option value="msme">💼 MSME & Business</option>
                <option value="women">🌸 Women & Child</option>
                <option value="healthcare">🏥 Healthcare & Seniors</option>
                <option value="disability">♿ Differently Abled</option>
                <option value="housing">🏠 Housing (PMAY)</option>
                <option value="unemployed">⚡ Skills & Employment</option>
                <option value="defence">🛡️ Defence & Veterans</option>
              </select>

              {/* Scheme Type Filter */}
              <select
                value={selectedSchemeType}
                onChange={(e) => setSelectedSchemeType(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl glass-input text-xs font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm cursor-pointer hover:border-brand-accent/50 focus:border-brand-accent transition-all"
              >
                <option value="all">All Types</option>
                <option value="Central Government">🏛️ Central Govt</option>
                <option value="State Government">📍 State Govt</option>
                <option value="Private & CSR">🤝 Private & CSR</option>
                <option value="Banking & Subsidized Loan">🏦 Subsidized Loans</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3.5 py-2.5 rounded-xl glass-input text-xs font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm cursor-pointer hover:border-brand-accent/50 focus:border-brand-accent transition-all"
              >
                <option value="match">🎯 Sort by Match Score</option>
                <option value="benefit_desc">💰 Benefit (High to Low)</option>
                <option value="benefit_asc">🪙 Benefit (Low to High)</option>
                <option value="title_asc">🔤 Alphabetical (A to Z)</option>
                <option value="title_desc">🔤 Alphabetical (Z to A)</option>
                <option value="popular">⭐ Most Popular</option>
              </select>
            </div>
          )}
        </div>

        {/* TAB 1 & 2: SCHEME CARDS GRID */}
        {(activeTab === 'matched' || activeTab === 'saved') && (
          <div>
            {filteredSchemes.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-600 dark:text-cyan-400">
                  <BookmarkCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {activeTab === 'saved' ? 'No Saved Schemes Yet' : 'No Schemes Found'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  {activeTab === 'saved' 
                    ? 'Click the bookmark icon (🔖) on any scheme card to save it to your personal locker for quick access.' 
                    : 'No matching schemes found with the current filter criteria. Try adjusting filters or expanding questionnaire answers.'}
                </p>
                {activeTab === 'saved' && (
                  <button
                    onClick={() => handleTabChange('matched')}
                    className="mt-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-amber-500 text-white font-bold text-xs shadow-md shadow-brand-accent/20 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Browse Eligible Schemes</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                  <div>
                    Showing <span className="font-bold text-slate-900 dark:text-white">{Math.min(visibleCount, filteredSchemes.length)}</span> of <span className="font-bold text-slate-900 dark:text-white">{filteredSchemes.length}</span> schemes ({allEvaluations.length} total indexed)
                  </div>
                  {filteredSchemes.length > 24 && (
                    <div className="text-[11px] text-brand-accent font-semibold">
                      Page 1 of {Math.ceil(filteredSchemes.length / 24)}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSchemes.slice(0, visibleCount).map((item) => {
                    const isSaved = savedSchemeIds.includes(item.scheme.id);
                    return (
                      <div 
                        key={item.scheme.id}
                        className="rounded-3xl bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-white/10 p-5 sm:p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group shadow-sm"
                      >
                        <div className="space-y-3.5">
                          {/* Buddy4Study Provider & Verification Header */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="space-y-1 max-w-[80%]">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20 px-2 py-0.5 rounded-full border border-blue-500/25">
                                  <BadgeCheck className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                  Verified
                                </span>
                                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10">
                                  {item.scheme.type}
                                </span>
                              </div>
                              <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate flex items-center gap-1">
                                <Building className="w-3 h-3 text-slate-400 shrink-0" />
                                <span className="truncate">{item.scheme.ministryOrOrganization}</span>
                              </p>
                            </div>

                            {/* Bookmark Action */}
                            <button
                              onClick={() => handleToggleSave(item.scheme.id)}
                              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                                isSaved 
                                  ? 'bg-emerald-500/15 dark:bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-sm' 
                                  : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-400 hover:text-slate-900 dark:hover:text-white'
                              }`}
                              title={isSaved ? 'Shortlisted' : 'Shortlist Scheme'}
                            >
                              {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                            </button>
                          </div>

                          {/* Scheme Title */}
                          <h3 
                            onClick={() => setSelectedSchemeForModal(item)}
                            className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
                          >
                            {item.scheme.title}
                          </h3>

                          {/* Buddy4Study 3-Point Highlight Box */}
                          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121b30] border border-slate-200/80 dark:border-white/5 space-y-2.5">
                            {/* 1. Award / Benefit */}
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                Scholarship Award:
                              </span>
                              <span className="font-extrabold text-emerald-700 dark:text-emerald-400 truncate max-w-[60%] text-right">
                                {item.scheme.financialBenefitText}
                              </span>
                            </div>

                            {/* 2. Eligibility */}
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                                Target Level:
                              </span>
                              <span className="font-semibold text-slate-700 dark:text-slate-300 capitalize truncate max-w-[55%] text-right">
                                {item.scheme.category.slice(0, 2).join(', ')}
                              </span>
                            </div>

                            {/* 3. Deadline */}
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-amber-500" />
                                Deadline:
                              </span>
                              <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] truncate">
                                {item.scheme.deadline || 'Continuous / Open'}
                              </span>
                            </div>
                          </div>

                          {/* Match Score & Checked Points */}
                          <div className="flex items-center justify-between gap-2 pt-1">
                            <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold flex items-center gap-1.5 border ${
                              item.matchScore >= 80 
                                ? 'bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/30' 
                                : item.matchScore >= 60 
                                ? 'bg-brand-accent/15 dark:bg-brand-accent/20 text-brand-accent border-brand-accent/30' 
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-white/10'
                            }`}>
                              <Sparkles className="w-3 h-3" />
                              {item.matchScore}% Match
                            </span>

                            {item.matchedPoints.length > 0 && (
                              <span className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1 truncate max-w-[60%]">
                                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                                <span className="truncate">{item.matchedPoints[0]}</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Buddy4Study Card Footer Actions */}
                        <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-white/10 flex items-center gap-2">
                          <button
                            onClick={() => setSelectedSchemeForModal(item)}
                            className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>View Detail</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                          </button>

                          <a
                            href={item.scheme.officialPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 cursor-pointer"
                            title="Apply on Official Portal"
                          >
                            <span>Apply Now</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Load More Controller */}
                {visibleCount < filteredSchemes.length && (
                  <div className="pt-4 flex flex-col items-center justify-center gap-3">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 24)}
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-accent to-amber-500 hover:from-brand-accent/90 hover:to-amber-500/90 text-white font-bold text-xs shadow-xl shadow-brand-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Load More Schemes ({filteredSchemes.length - visibleCount} remaining)</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-slate-400">
                      Loaded {visibleCount} of {filteredSchemes.length} schemes
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CONSOLIDATED DOCUMENT LOCKER */}
        {activeTab === 'document_locker' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <FolderLock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    Citizen Master Document Checklist
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Keep these certificates ready to complete direct application on official portals with zero delays.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {consolidatedDocuments.map((doc, idx) => (
                <div key={idx} className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">{doc.name}</h3>
                    </div>
                    {doc.mandatoryCount > 0 ? (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/15 text-rose-600 dark:text-rose-300 border border-rose-500/30 font-bold">
                        Mandatory
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        Supporting
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.description}
                  </p>

                  <div className="border-t border-slate-200 dark:border-white/5 pt-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Required by: </span>
                    <span>{doc.usedInSchemes.slice(0, 2).join(', ')}{doc.usedInSchemes.length > 2 ? ` + ${doc.usedInSchemes.length - 2} more` : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MY CITIZEN PROFILE & 25+ ANSWERS */}
        {activeTab === 'profile_answers' && (
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Your Answered Eligibility Parameters
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  You can update any of your answers anytime. The system will automatically recalculate matching schemes.
                </p>
              </div>

              <button
                onClick={onOpenQuestionnaire}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-emerald-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <User className="w-4 h-4" />
                Open Profile & Edit Questions
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(user.answers || {}).map(([key, val]) => (
                <div key={key} className="p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {typeof val === 'boolean' ? (val ? 'Yes / Applicable' : 'No') : String(val)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scheme Detail Modal */}
      <SchemeDetailModal
        schemeMatch={selectedSchemeForModal}
        isSaved={selectedSchemeForModal ? savedSchemeIds.includes(selectedSchemeForModal.scheme.id) : false}
        onToggleSave={handleToggleSave}
        onClose={() => setSelectedSchemeForModal(null)}
      />
    </div>
  );
};
