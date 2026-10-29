import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  AlertCircle, 
  PhoneCall, 
  FileText, 
  Building, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  HelpCircle,
  Globe,
  Loader2,
  GraduationCap,
  Award,
  CheckSquare,
  Square,
  BadgeCheck,
  Send,
  Info
} from 'lucide-react';
import type { MatchResult } from '../types';
import { schemeService, type LiveSchemeEnrichment } from '../services/schemeService';

interface SchemeDetailModalProps {
  schemeMatch: MatchResult | null;
  isSaved: boolean;
  onToggleSave: (schemeId: string) => void;
  onClose: () => void;
}

type TabType = 'overview' | 'eligibility' | 'benefits' | 'documents' | 'how_to_apply' | 'selection' | 'contact_faqs';

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  schemeMatch,
  isSaved,
  onToggleSave,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [liveData, setLiveData] = useState<LiveSchemeEnrichment | null>(null);
  const [loadingLive, setLoadingLive] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!schemeMatch) {
      setLiveData(null);
      return;
    }
    setActiveTab('overview');
    const targetSlug = schemeMatch.scheme.slug || schemeMatch.scheme.id;
    setLoadingLive(true);
    schemeService.fetchLiveSchemeDetails(targetSlug)
      .then(res => setLiveData(res))
      .catch(() => setLiveData(null))
      .finally(() => setLoadingLive(false));

    // Load locally saved ready documents checklist for this scheme
    const savedDocs = localStorage.getItem(`ready_docs_${schemeMatch.scheme.id}`);
    if (savedDocs) {
      try {
        setCheckedDocs(JSON.parse(savedDocs));
      } catch {
        setCheckedDocs({});
      }
    } else {
      setCheckedDocs({});
    }
  }, [schemeMatch]);

  const toggleDocumentCheck = (docName: string) => {
    if (!schemeMatch) return;
    const next = { ...checkedDocs, [docName]: !checkedDocs[docName] };
    setCheckedDocs(next);
    localStorage.setItem(`ready_docs_${schemeMatch.scheme.id}`, JSON.stringify(next));
  };

  if (!schemeMatch) return null;

  const { scheme, matchScore, isEligible, matchedPoints, unmetPoints } = schemeMatch;

  // Tabs configuration (Buddy4Study format)
  const tabs: { id: TabType; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'overview', label: 'About Program', icon: <Info className="w-3.5 h-3.5" /> },
    { id: 'eligibility', label: 'Eligibility', icon: <GraduationCap className="w-3.5 h-3.5" />, badge: `${matchScore}% Match` },
    { id: 'benefits', label: 'Benefits & Awards', icon: <Award className="w-3.5 h-3.5" /> },
    { id: 'documents', label: 'Documents Required', icon: <FileText className="w-3.5 h-3.5" />, badge: `${scheme.requiredDocuments.length}` },
    { id: 'how_to_apply', label: 'How to Apply', icon: <Send className="w-3.5 h-3.5" /> },
    { id: 'selection', label: 'Selection Process', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { id: 'contact_faqs', label: 'FAQs & Helpline', icon: <HelpCircle className="w-3.5 h-3.5" /> },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 dark:bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in"
      onClick={onClose}
    >
      <div 
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-900/40 dark:shadow-black overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================================================================= */}
        {/* TOP BUDDY4STUDY HERO HEADER                                       */}
        {/* ================================================================= */}
        <div className="relative p-5 sm:p-7 bg-gradient-to-br from-blue-50/70 via-slate-50 to-emerald-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-[#0d1627] border-b border-slate-200 dark:border-white/10 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              {/* Provider / Authority with Verified Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border border-blue-500/30">
                  <BadgeCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Verified Scheme
                </span>

                <span className="badge-pill bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 text-[11px]">
                  {scheme.type}
                </span>

                <span className="badge-pill bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-[11px]">
                  {scheme.benefitType}
                </span>

                {scheme.isPopular && (
                  <span className="badge-pill bg-amber-500/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1 text-[11px]">
                    <Sparkles className="w-3 h-3" /> High Demand
                  </span>
                )}
              </div>

              {/* Scheme Title */}
              <h1 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white font-display leading-tight tracking-tight">
                {scheme.title}
              </h1>

              {/* Organization / Ministry */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                <Building className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{scheme.ministryOrOrganization}</span>
              </p>
            </div>

            {/* Quick Actions (Save & Close) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSave(scheme.id)}
                className={`p-2.5 sm:px-3 sm:py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSaved
                    ? 'bg-emerald-500/15 dark:bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
                title={isSaved ? 'Saved in My Bookmarks' : 'Save Scheme'}
              >
                {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                <span className="hidden sm:inline">{isSaved ? 'Shortlisted' : 'Shortlist'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* =============================================================== */}
          {/* BUDDY4STUDY QUICK SNAPSHOT STRIP                                */}
          {/* =============================================================== */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
            {/* Award Amount */}
            <div className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Award className="w-3 h-3 text-brand-accent" />
                <span>Scholarship Award</span>
              </div>
              <div className="text-sm sm:text-base font-black text-brand-accent mt-0.5 truncate">
                {scheme.financialBenefitText}
              </div>
            </div>

            {/* Eligibility Match */}
            <div className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <GraduationCap className="w-3 h-3 text-emerald-500" />
                <span>Eligibility Match</span>
              </div>
              <div className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                <span>{matchScore}%</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-emerald-500/15 border border-emerald-500/30">
                  {isEligible ? 'Eligible' : 'Review'}
                </span>
              </div>
            </div>

            {/* Application Deadline */}
            <div className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-500" />
                <span>Application Deadline</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                {scheme.deadline || 'Always Open'}
              </div>
            </div>

            {/* Application Mode */}
            <div className="p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Globe className="w-3 h-3 text-blue-500" />
                <span>Application Mode</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>100% Online Portal</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* BUDDY4STUDY SEGMENTED NAVIGATION TABS                            */}
        {/* ================================================================= */}
        <div className="px-4 sm:px-7 bg-slate-100/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-white/10 overflow-x-auto no-scrollbar shrink-0">
          <div className="flex items-center gap-1 sm:gap-2 py-2 min-w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-brand-accent dark:text-white shadow-sm border border-slate-200 dark:border-white/15'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isActive 
                        ? 'bg-brand-accent/15 text-brand-accent' 
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* TAB CONTENT BODY                                                  */}
        {/* ================================================================= */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">

          {/* TAB 1: ABOUT PROGRAM / OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  About the Scheme / Scholarship Program
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {scheme.detailedDescription || scheme.shortDescription}
                </p>
              </div>

              {/* Highlights & Scope Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Target Level</span>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {scheme.category.map(c => c.toUpperCase()).join(' • ')}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Funding Sponsor</span>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                    {scheme.ministryOrOrganization}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Disbursement Mode</span>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    Direct Benefit Transfer (DBT)
                  </div>
                </div>
              </div>

              {/* Tag Badges */}
              {scheme.tags && scheme.tags.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Related Keywords</div>
                  <div className="flex flex-wrap gap-1.5">
                    {scheme.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ELIGIBILITY CRITERIA */}
          {activeTab === 'eligibility' && (
            <div className="space-y-5 animate-in fade-in">
              {/* Personalized Eligibility Evaluation */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Your Eligibility Status: {matchScore}% Match
                  </h3>
                  <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    {isEligible ? 'High Qualification' : 'Review Criteria'}
                  </span>
                </div>

                <div className="space-y-2">
                  {matchedPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}

                  {unmetPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-amber-700 dark:text-amber-300">
                      <AlertCircle className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buddy4Study Standard Eligibility Checklist */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-accent" />
                  Key Eligibility Parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">Education & Academic Record</div>
                    <div className="text-slate-500 dark:text-slate-400">
                      Enrolled in recognized school, college, ITI, diploma, or university program.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">Annual Family Income</div>
                    <div className="text-slate-500 dark:text-slate-400">
                      Typically under ₹2.5 Lakh – ₹6.0 Lakh/year (as per government/CSR guidelines).
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">Domicile / Citizenship</div>
                    <div className="text-slate-500 dark:text-slate-400">
                      Must be an Indian Citizen with valid Aadhaar and residential address proof.
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">Bank Account Requirement</div>
                    <div className="text-slate-500 dark:text-slate-400">
                      Must have an active bank account linked with Aadhaar for Direct Benefit Transfer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BENEFITS & AWARDS */}
          {activeTab === 'benefits' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/15 via-emerald-500/10 to-transparent border border-brand-accent/25 space-y-3">
                <span className="text-[11px] font-bold text-brand-accent uppercase tracking-wider">
                  Total Financial Assistance
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-display">
                  {scheme.financialBenefitText}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Transferred directly into the applicant's Aadhaar-seeded bank account via PFMS / DBT gateway.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-500" />
                    Monetary Aid Coverage
                  </h4>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Tuition & admission fee reimbursement</li>
                    <li>Monthly student maintenance / living allowance</li>
                    <li>Book allowance & study material subsidy</li>
                    <li>Examination & lab fees grant</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-accent" />
                    Additional Perks & Support
                  </h4>
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 list-disc list-inside">
                    <li>Free career counseling & mentorship sessions</li>
                    <li>Digital skills & soft-skill training webinars</li>
                    <li>Certificate of merit & fellowship alumni network</li>
                    <li>Preferential admission & internship opportunities</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DOCUMENTS REQUIRED */}
          {activeTab === 'documents' && (
            <div className="space-y-5 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    Buddy4Study Document Checklist
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Mark documents you have ready to speed up your portal application.
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {Object.values(checkedDocs).filter(Boolean).length} / {scheme.requiredDocuments.length} Ready
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheme.requiredDocuments.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc.name];
                  return (
                    <div 
                      key={idx} 
                      onClick={() => toggleDocumentCheck(doc.name)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/40'
                          : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                      }`}
                    >
                      <button className="mt-0.5 text-slate-400 hover:text-emerald-500 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <span className={isChecked ? 'line-through text-slate-500 dark:text-slate-400' : ''}>
                            {doc.name}
                          </span>
                          {doc.mandatory ? (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                              Mandatory
                            </span>
                          ) : (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                              Optional
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                          {doc.description || 'Scanned PDF/JPG under 200 KB for online verification.'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: HOW TO APPLY (STEP-BY-STEP) */}
          {activeTab === 'how_to_apply' && (
            <div className="space-y-5 animate-in fade-in">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Send className="w-4 h-4 text-brand-accent" />
                Step-by-Step Application Roadmap
              </h3>

              <div className="space-y-3">
                {scheme.applicationSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5"
                  >
                    <div className="w-7 h-7 rounded-xl bg-brand-accent/15 dark:bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div className="space-y-0.5 pt-0.5">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Stage {idx + 1}
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Application Channels */}
              {liveData?.applicationChannels && liveData.applicationChannels.length > 0 && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/25 space-y-2.5">
                  <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Official Direct Digital Portals
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {liveData.applicationChannels.map((ch, idx) => (
                      <a
                        key={idx}
                        href={ch.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/30 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:scale-[1.02] transition-all shadow-sm"
                      >
                        <span>{ch.applicationName}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: SELECTION PROCESS */}
          {activeTab === 'selection' && (
            <div className="space-y-5 animate-in fade-in">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Scholarship Selection & Evaluation Procedure
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-xs">
                    01
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Initial Screening</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    Filtering candidates based on academic percentage and family income limits.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-xs">
                    02
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Doc Verification</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    Validation of uploaded marksheets, income certificates, and bonafide letters.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xs">
                    03
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Interview / Merit List</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    Telephonic interaction / final state-level merit list preparation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xs">
                    04
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Direct DBT Disbursal</div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    Scholarship funds credited directly to recipient's Aadhaar-linked bank account.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: FAQS & CONTACT HELPLINE */}
          {activeTab === 'contact_faqs' && (
            <div className="space-y-5 animate-in fade-in">
              {/* Official Toll-Free Contact Helpline */}
              {scheme.helplinePhone && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-800 dark:text-blue-200">
                  <PhoneCall className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-900 dark:text-white">Citizen Toll-Free Helpline: </span>
                    <span className="font-mono font-bold text-blue-700 dark:text-blue-300">{scheme.helplinePhone}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                      Operational 9:30 AM to 6:00 PM (Monday through Saturday, except national holidays)
                    </span>
                  </div>
                </div>
              )}

              {/* FAQs Accordion */}
              {liveData?.faqs && liveData.faqs.length > 0 ? (
                <div className="space-y-3">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-accent" />
                    Frequently Asked Questions ({liveData.faqs.length})
                  </h3>
                  <div className="space-y-2">
                    {liveData.faqs.slice(0, 8).map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div 
                          key={idx} 
                          className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 overflow-hidden"
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            className="w-full p-3.5 text-left text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between gap-3 hover:text-brand-accent transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-90 text-brand-accent' : 'text-slate-400'}`} />
                          </button>
                          {isOpen && (
                            <div className="px-3.5 pb-3.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5 pt-2 whitespace-pre-line">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 space-y-1">
                      <div className="font-bold text-slate-800 dark:text-slate-200">Can I apply for more than one scholarship?</div>
                      <p className="text-slate-600 dark:text-slate-400">Yes, you can apply for multiple scholarships, but you may only be permitted to receive tuition assistance from one government scheme at a time as per UGC/state rules.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 space-y-1">
                      <div className="font-bold text-slate-800 dark:text-slate-200">How do I track my application status?</div>
                      <p className="text-slate-600 dark:text-slate-400">Use your Application Reference ID received via SMS/Email to log in to the official portal anytime and view progress under "Track Status".</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Live Data Fetch Indicator */}
          {loadingLive && (
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-xs text-brand-accent">
              <Loader2 className="w-4 h-4 animate-spin shrink-0" />
              <span>Verifying and syncing live details from official scheme registry...</span>
            </div>
          )}
        </div>

        {/* ================================================================= */}
        {/* STICKY BUDDY4STUDY ACTION FOOTER                                  */}
        {/* ================================================================= */}
        <div className="px-4 sm:px-7 py-3.5 sm:py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50/95 dark:bg-slate-950/95 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onToggleSave(scheme.id)}
              className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                isSaved
                  ? 'bg-emerald-500/15 dark:bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span>{isSaved ? 'Shortlisted' : 'Shortlist Scholarship'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={scheme.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-black text-xs shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply Now on Official Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
