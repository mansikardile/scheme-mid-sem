import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Shield, 
  Wheat, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Users, 
  Accessibility, 
  CheckCircle2, 
  Coins, 
  Layers, 
  Save, 
  ArrowRight, 
  Calendar,
  Sparkles,
  Home
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUESTIONNAIRE_FIELDS } from '../data/questionnaireData';
import { schemeService } from '../services/schemeService';
import { evaluateSchemeEligibility, calculateTotalPotentialBenefit } from '../utils/matchingEngine';
import type { CategoryType, UserProfile } from '../types';
import { storageService } from '../lib/supabase';

interface ProfileSectionProps {
  user: UserProfile;
  onUpdateUser: (updatedUser: UserProfile) => void;
  onNavigate: (view: 'landing' | 'dashboard' | 'saved' | 'profile') => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  user,
  onUpdateUser,
  onNavigate
}) => {
  const [fullName, setFullName] = useState(user.fullName || '');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(user.selectedCategory || 'student');
  const [answers, setAnswers] = useState<Record<string, any>>(user.answers || {});
  const [activeTab, setActiveTab] = useState<'demographics' | 'economic' | 'domain' | 'housing_health'>('demographics');
  const [isSavedRecently, setIsSavedRecently] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Live calculations with current profile answers
  const liveMatches = schemeService.getAllSchemes().map(scheme => evaluateSchemeEligibility(scheme, answers, selectedCategory));
  const eligibleCount = liveMatches.filter(m => m.isEligible).length;
  const potentialBenefit = calculateTotalPotentialBenefit(liveMatches);

  const handleInputChange = (fieldId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [fieldId]: value
    }));
    setIsSavedRecently(false);
  };

  const handleCategoryChange = (cat: CategoryType) => {
    setSelectedCategory(cat);
    setAnswers(prev => ({
      ...prev,
      category: cat,
      defenceStatus: cat === 'defence' && (!prev.defenceStatus || prev.defenceStatus === 'None')
        ? 'ExServiceman'
        : prev.defenceStatus
    }));
    setIsSavedRecently(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    const updatedProfile: UserProfile = {
      ...user,
      fullName: fullName.trim() || user.fullName,
      selectedCategory,
      answers: {
        ...answers,
        category: selectedCategory,
      },
      hasCompletedQuestionnaire: true,
      updatedAt: new Date().toISOString()
    };

    await storageService.saveUserProfile(user.id, updatedProfile);
    onUpdateUser(updatedProfile);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }

    setIsSaving(false);
    setIsSavedRecently(true);
    setTimeout(() => setIsSavedRecently(false), 4000);
  };

  const categoryOptions = [
    { id: 'farmer' as CategoryType, label: 'Farmer & Agriculture', icon: Wheat },
    { id: 'student' as CategoryType, label: 'Student & Youth', icon: GraduationCap },
    { id: 'msme' as CategoryType, label: 'MSME & Business', icon: Briefcase },
    { id: 'women' as CategoryType, label: 'Women & Child', icon: HeartHandshake },
    { id: 'healthcare' as CategoryType, label: 'Healthcare & Seniors', icon: Users },
    { id: 'disability' as CategoryType, label: 'Differently Abled', icon: Accessibility },
    { id: 'defence' as CategoryType, label: 'Defence & Veterans', icon: Shield },
  ];

  // Filter questions according to active tab and active domain
  const isDefenceActive = selectedCategory === 'defence' || (answers.defenceStatus && answers.defenceStatus !== 'None');

  const demographicFields = QUESTIONNAIRE_FIELDS.filter(f => f.section === 'demographics');
  const economicFields = QUESTIONNAIRE_FIELDS.filter(f => f.section === 'economic');
  const housingHealthFields = QUESTIONNAIRE_FIELDS.filter(f => f.section === 'housing_health');

  const domainFields = QUESTIONNAIRE_FIELDS.filter(f => {
    if (['category_specific', 'education', 'enterprise', 'defence'].includes(f.section)) {
      if (!f.categoryFilter) return true;
      if (isDefenceActive && f.categoryFilter.includes('defence')) return true;
      return f.categoryFilter.includes(selectedCategory);
    }
    return false;
  });

  const getActiveTabFields = () => {
    switch (activeTab) {
      case 'demographics':
        return demographicFields;
      case 'economic':
        return economicFields;
      case 'domain':
        return domainFields;
      case 'housing_health':
        return housingHealthFields;
      default:
        return demographicFields;
    }
  };

  const currentTabFields = getActiveTabFields();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in">
      {/* 1. CITIZEN PROFILE HERO CARD */}
      <div className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-slate-200/80 dark:border-white/10 shadow-xl overflow-hidden bg-gradient-to-br from-white/90 via-slate-50/70 to-emerald-500/5 dark:from-[#0F1523]/90 dark:via-slate-900/60 dark:to-emerald-500/5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-brand-accent via-amber-500 to-emerald-500 p-[3px] shadow-lg shadow-brand-accent/20">
              <div className="w-full h-full rounded-[14px] bg-white dark:bg-slate-950 flex items-center justify-center text-brand-accent font-extrabold text-2xl sm:text-3xl font-display">
                {fullName ? fullName[0].toUpperCase() : user.email[0].toUpperCase()}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                  {fullName || 'Citizen User'}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Citizen
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {user.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Registered Citizen Profile
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex-1 md:flex-none p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-center min-w-[130px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Matched Schemes
              </div>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-display mt-0.5">
                {eligibleCount}
              </div>
            </div>

            <div className="flex-1 md:flex-none p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-center min-w-[140px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Est. Benefit
              </div>
              <div className="text-xl sm:text-2xl font-black text-brand-accent font-display mt-0.5">
                ₹{(potentialBenefit / 100000).toFixed(2)}L
              </div>
            </div>

            <button
              onClick={() => onNavigate('dashboard')}
              className="px-4 py-3.5 rounded-2xl bg-gradient-to-r from-brand-accent to-emerald-500 hover:from-brand-accent/90 hover:to-emerald-500/90 text-white font-bold text-xs shadow-lg shadow-brand-accent/25 flex items-center gap-1.5 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>View Schemes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Primary Category Selector */}
        <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10">
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
            <span>Primary Beneficiary Category</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-brand-accent/15 text-brand-accent font-bold">
              Tailors domain questions
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {categoryOptions.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  type="button"
                  className={`p-2.5 rounded-2xl text-left border transition-all flex flex-col gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-accent/15 dark:bg-brand-accent/25 border-brand-accent text-brand-accent dark:text-white shadow-md'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-brand-accent/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-accent' : 'text-slate-400'}`} />
                  <span className="text-xs font-bold truncate">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. QUESTIONS & PARAMETERS SECTION */}
      <div className="rounded-3xl glass-panel border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-xl bg-white dark:bg-[#0F1523]">
        {/* Navigation Tabs */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-accent" />
              Citizen Eligibility Parameters & Questions
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Answer these questions to automatically unlock verified Central, State & CSR schemes.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {isSavedRecently && (
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 bg-emerald-500/15 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Changes Saved!
              </span>
            )}

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-emerald-500 text-white font-bold text-xs shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 flex items-center gap-2 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save & Update Matches'}</span>
            </button>
          </div>
        </div>

        {/* Section Sub-Tabs */}
        <div className="px-6 pt-4 border-b border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('demographics')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'demographics'
                ? 'bg-brand-accent text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            1. Demographics & Defence ({demographicFields.length})
          </button>

          <button
            onClick={() => setActiveTab('economic')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'economic'
                ? 'bg-brand-accent text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900'
            }`}
          >
            <Coins className="w-4 h-4" />
            2. Economic Profile ({economicFields.length})
          </button>

          <button
            onClick={() => setActiveTab('domain')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'domain'
                ? 'bg-brand-accent text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            3. {selectedCategory.toUpperCase()} & Domain Questions ({domainFields.length})
          </button>

          <button
            onClick={() => setActiveTab('housing_health')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'housing_health'
                ? 'bg-brand-accent text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900'
            }`}
          >
            <Home className="w-4 h-4" />
            4. Housing & Health ({housingHealthFields.length})
          </button>
        </div>

        {/* Questions Grid Form */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentTabFields.map((field) => {
              const value = answers[field.id] !== undefined ? answers[field.id] : field.defaultValue;

              return (
                <div 
                  key={field.id}
                  className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-2 hover:border-brand-accent/40 transition-colors"
                >
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                    <span>{field.label}</span>
                    {field.unit && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-brand-accent/15 dark:bg-brand-accent/20 text-brand-accent font-semibold">
                        {field.unit}
                      </span>
                    )}
                  </label>

                  {field.description && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      {field.description}
                    </p>
                  )}

                  {/* Input Types */}
                  {field.type === 'number' && (
                    <input
                      type="number"
                      min={field.min}
                      max={field.max}
                      placeholder={field.placeholder}
                      value={value !== undefined ? value : ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white font-medium"
                    />
                  )}

                  {field.type === 'text' && (
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={value || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white"
                    />
                  )}

                  {field.type === 'select' && field.options && (
                    <select
                      value={value || ''}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10"
                    >
                      {field.options.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  )}

                  {field.type === 'radio' && field.options && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {field.options.map((opt) => {
                        const isChecked = value === opt.value;
                        return (
                          <button
                            type="button"
                            key={opt.value}
                            onClick={() => handleInputChange(field.id, opt.value)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                              isChecked
                                ? 'bg-brand-accent/20 border-brand-accent text-brand-accent dark:text-white shadow-sm'
                                : 'bg-white dark:bg-slate-950/70 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {field.type === 'boolean' && (
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => handleInputChange(field.id, true)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                          value === true
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-700 dark:text-emerald-300 shadow-sm'
                            : 'bg-white dark:bg-slate-950/70 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange(field.id, false)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                          value === false
                            ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-white/30 text-slate-800 dark:text-white'
                            : 'bg-white dark:bg-slate-950/70 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        No
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Save Bar */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 dark:text-slate-400">Current Eligibility:</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              {eligibleCount} Matching Schemes
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs font-bold text-brand-accent">
              ~₹{(potentialBenefit / 100000).toFixed(2)} Lakhs Benefit
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-emerald-500 text-white font-bold text-xs shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save Profile Changes'}</span>
            </button>

            <button
              onClick={() => onNavigate('dashboard')}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
