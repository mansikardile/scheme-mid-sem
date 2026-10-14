import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle, 
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
  Loader2
} from 'lucide-react';
import type { MatchResult } from '../types';
import { schemeService, type LiveSchemeEnrichment } from '../services/schemeService';

interface SchemeDetailModalProps {
  schemeMatch: MatchResult | null;
  isSaved: boolean;
  onToggleSave: (schemeId: string) => void;
  onClose: () => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  schemeMatch,
  isSaved,
  onToggleSave,
  onClose,
}) => {
  const [liveData, setLiveData] = useState<LiveSchemeEnrichment | null>(null);
  const [loadingLive, setLoadingLive] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!schemeMatch) {
      setLiveData(null);
      return;
    }
    const targetSlug = schemeMatch.scheme.slug || schemeMatch.scheme.id;
    setLoadingLive(true);
    schemeService.fetchLiveSchemeDetails(targetSlug)
      .then(res => setLiveData(res))
      .catch(() => setLiveData(null))
      .finally(() => setLoadingLive(false));
  }, [schemeMatch]);

  if (!schemeMatch) return null;

  const { scheme, matchScore, isEligible, matchedPoints, unmetPoints } = schemeMatch;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-lg overflow-y-auto animate-in fade-in">
      <div 
        data-lenis-prevent
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#0E1422] border border-slate-200 dark:border-white/15 shadow-2xl shadow-slate-900/30 dark:shadow-black overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Hero Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-orange-50/70 via-slate-100 to-emerald-50/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-white/10 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge-pill bg-brand-accent/15 dark:bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
                  {scheme.type}
                </span>
                <span className="badge-pill bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  {scheme.benefitType}
                </span>
                {scheme.isPopular && (
                  <span className="badge-pill bg-amber-500/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> High Demand
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                {scheme.title}
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                {scheme.ministryOrOrganization}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleSave(scheme.id)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isSaved
                    ? 'bg-emerald-500/15 dark:bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-sm'
                    : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
                title={isSaved ? 'Remove from Saved' : 'Save Scheme'}
              >
                {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Direct Financial Benefit</div>
              <div className="text-base font-extrabold text-brand-accent mt-0.5">
                {scheme.financialBenefitText}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Your Eligibility Match</div>
              <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                <span>{matchScore}% Match</span>
                <span className="text-xs font-normal text-slate-500 dark:text-slate-400">({isEligible ? 'Eligible' : 'Check Criteria'})</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Application Deadline</div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span>{scheme.deadline || 'Continuous Enrollment'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              Scheme Overview & Impact
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-200 dark:border-white/5">
              {scheme.detailedDescription}
            </p>
          </div>

          {/* Personalized Eligibility Breakdown */}
          <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200 dark:border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center justify-between">
              <span>Why You Match This Scheme</span>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-md border border-emerald-500/30">
                Verified from your answers
              </span>
            </h3>

            <div className="space-y-2">
              {matchedPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
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

          {/* Mandatory Documents Checklist */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Required Document Checklist
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scheme.requiredDocuments.map((doc, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 flex items-start gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>{doc.name}</span>
                      {doc.mandatory ? (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-600 dark:text-rose-300 border border-rose-500/30">
                          Mandatory
                        </span>
                      ) : (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{doc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Application Roadmap */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-brand-accent" />
              Step-by-Step Application Guide
            </h3>

            <div className="space-y-2.5">
              {scheme.applicationSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/15 dark:bg-brand-accent/20 border border-brand-accent/40 text-brand-accent text-xs font-extrabold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Official Verification & API Enrichment */}
          {loadingLive && (
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 text-xs text-brand-accent">
              <Loader2 className="w-4 h-4 animate-spin shrink-0" />
              <span>Verifying and loading live details from official MyScheme government registry...</span>
            </div>
          )}

          {/* Official Direct Application Channels (UMANG, Jan Samarth, Direct Portal) */}
          {liveData?.applicationChannels && liveData.applicationChannels.length > 0 && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/25 space-y-3">
              <h3 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Verified Digital Application Channels
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {liveData.applicationChannels.map((ch, idx) => (
                  <a
                    key={idx}
                    href={ch.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/30 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-emerald-500 hover:scale-[1.02] transition-all shadow-sm"
                  >
                    <span>{ch.applicationName}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Official FAQs Accordion */}
          {liveData?.faqs && liveData.faqs.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-accent" />
                Official FAQs ({liveData.faqs.length})
              </h3>
              <div className="space-y-2">
                {liveData.faqs.slice(0, 6).map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3.5 text-left text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between gap-3 hover:text-brand-accent transition-colors"
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
          )}

          {/* Official Helpline */}
          {scheme.helplinePhone && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-800 dark:text-indigo-200">
              <PhoneCall className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Official Citizen Toll-Free Helpline: </span>
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-300">{scheme.helplinePhone}</span>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => onToggleSave(scheme.id)}
            className={`w-full sm:w-auto px-5 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              isSaved
                ? 'bg-emerald-500/15 dark:bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white shadow-sm'
            }`}
          >
            {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            <span>{isSaved ? 'Saved in Your Dashboard' : 'Bookmark Scheme'}</span>
          </button>

          <a
            href={scheme.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent via-amber-500 to-emerald-500 text-white font-bold text-xs shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Apply Directly on Official Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
