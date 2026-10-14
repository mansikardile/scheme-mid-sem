import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Wheat, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Users, 
  Accessibility, 
  Coins,
  Shield
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUESTIONNAIRE_FIELDS } from '../data/questionnaireData';
import { schemeService } from '../services/schemeService';
import { evaluateSchemeEligibility, calculateTotalPotentialBenefit } from '../utils/matchingEngine';
import type { CategoryType, UserProfile } from '../types';
import { storageService } from '../lib/supabase';

interface QuestionnaireModalProps {
  isOpen: boolean;
  user: UserProfile;
  onClose: () => void;
  onCompleted: (updatedUser: UserProfile) => void;
}

export const QuestionnaireModal: React.FC<QuestionnaireModalProps> = ({
  isOpen,
  user,
  onClose,
  onCompleted
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(user.selectedCategory || 'farmer');
  const [answers, setAnswers] = useState<Record<string, any>>(user.answers || {});
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (user) {
      setSelectedCategory(user.selectedCategory || 'farmer');
      setAnswers(prev => ({
        ...prev,
        ...user.answers,
        category: user.selectedCategory || 'farmer'
      }));
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  // Filter questions according to selected category and current step
  const getRelevantFields = () => {
    return QUESTIONNAIRE_FIELDS.filter(field => {
      if (!field.categoryFilter) return true;
      return field.categoryFilter.includes(selectedCategory);
    });
  };

  const allRelevantFields = getRelevantFields();

  // Define 4 organized step buckets
  const steps = [
    {
      id: 'demographics',
      title: 'Demographics & Identity',
      desc: 'Basic citizen age, state of domicile, and social category',
      fields: allRelevantFields.filter(f => f.section === 'demographics')
    },
    {
      id: 'economic',
      title: 'Economic & Income Profile',
      desc: 'Annual household earnings, ration card, and DBT status',
      fields: allRelevantFields.filter(f => f.section === 'economic')
    },
    {
      id: 'category_specific',
      title: `${selectedCategory.toUpperCase()} Specific Parameters`,
      desc: `Detailed questions specific to your chosen category (${selectedCategory})`,
      fields: allRelevantFields.filter(f => ['category_specific', 'education', 'enterprise', 'defence'].includes(f.section))
    },
    {
      id: 'housing_health',
      title: 'Housing, Health & Social Benefits',
      desc: 'House condition, PM-JAY health cards, family dependents & disability',
      fields: allRelevantFields.filter(f => f.section === 'housing_health')
    }
  ].filter(s => s.fields.length > 0);

  const activeStep = steps[currentStep] || steps[0];
  const progressPercent = Math.round(((currentStep + 1) / steps.length) * 100);

  // Live matching preview calculations
  const liveMatches = schemeService.getAllSchemes().map(scheme => evaluateSchemeEligibility(scheme, answers, selectedCategory));
  const eligibleCount = liveMatches.filter(m => m.isEligible).length;
  const potentialBenefit = calculateTotalPotentialBenefit(liveMatches);

  const handleInputChange = (fieldId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleCategoryChange = (newCat: CategoryType) => {
    setSelectedCategory(newCat);
    setAnswers(prev => ({
      ...prev,
      category: newCat
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalSubmit = async () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    const updatedProfile: UserProfile = {
      ...user,
      selectedCategory,
      answers: {
        ...answers,
        category: selectedCategory,
      },
      hasCompletedQuestionnaire: true,
      updatedAt: new Date().toISOString()
    };

    await storageService.saveUserProfile(user.id, updatedProfile);
    onCompleted(updatedProfile);
    onClose();
  };

  const categoryOptions = [
    { id: 'farmer' as CategoryType, label: 'Farmer / Agri', icon: Wheat },
    { id: 'student' as CategoryType, label: 'Student / Youth', icon: GraduationCap },
    { id: 'msme' as CategoryType, label: 'MSME / Business', icon: Briefcase },
    { id: 'women' as CategoryType, label: 'Women & Child', icon: HeartHandshake },
    { id: 'healthcare' as CategoryType, label: 'Healthcare & Seniors', icon: Users },
    { id: 'disability' as CategoryType, label: 'Differently Abled', icon: Accessibility },
    { id: 'defence' as CategoryType, label: 'Defence & Veterans', icon: Shield },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-lg overflow-y-auto animate-in fade-in">
      <div 
        data-lenis-prevent
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0F1523] border border-slate-200 dark:border-white/15 shadow-2xl shadow-slate-900/30 dark:shadow-black overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-5 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-accent to-emerald-500 p-[2px]">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center text-brand-accent">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                Citizen Welfare Questionnaire
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  {allRelevantFields.length} Data Points
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Step {currentStep + 1} of {steps.length}: {activeStep.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800/80 h-1.5 shrink-0">
          <div 
            className="bg-gradient-to-r from-brand-accent via-amber-400 to-emerald-400 h-1.5 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Category Switcher Pill Header */}
        <div className="px-6 py-3 bg-slate-100/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-white/5 flex items-center gap-2 overflow-x-auto shrink-0">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 shrink-0">Category:</span>
          {categoryOptions.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all border ${
                  isSelected
                    ? 'bg-brand-accent/20 border-brand-accent text-brand-accent dark:text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-accent' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Questions Form Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="border-b border-slate-200 dark:border-white/10 pb-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{activeStep.title}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{activeStep.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeStep.fields.map((field) => {
              const value = answers[field.id] !== undefined ? answers[field.id] : field.defaultValue;

              return (
                <div 
                  key={field.id} 
                  className={`p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-2 hover:border-brand-accent/30 transition-colors ${
                    field.type === 'multiselect' ? 'md:col-span-2' : ''
                  }`}
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

                  {/* Input Type Renderers */}
                  {field.type === 'number' && (
                    <div className="relative">
                      <input
                        type="number"
                        min={field.min}
                        max={field.max}
                        placeholder={field.placeholder}
                        value={value !== undefined ? value : ''}
                        onChange={(e) => handleInputChange(field.id, e.target.value === '' ? '' : Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white font-medium"
                      />
                    </div>
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
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-slate-900 dark:text-white bg-white dark:bg-slate-900"
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
                                ? 'bg-brand-accent/15 dark:bg-brand-accent/25 border-brand-accent text-brand-accent dark:text-white shadow-sm'
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

        {/* Bottom Action Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/90 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Live Eligibility Estimation</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{eligibleCount} Schemes Matched</span>
                <span className="text-slate-400">•</span>
                <span className="text-brand-accent">~₹{(potentialBenefit / 100000).toFixed(2)} Lakhs Benefit</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent via-amber-500 to-emerald-500 text-white font-bold text-xs shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{currentStep === steps.length - 1 ? 'Calculate Schemes & View Results' : 'Next Step'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
