import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#070A10] text-slate-600 dark:text-slate-400 text-xs mt-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-accent to-emerald-400 p-[2px]">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                </div>
              </div>
              <span className="text-base font-extrabold text-slate-900 dark:text-white font-display">
                Scheme<span className="text-brand-accent">Sathi</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              India’s universal welfare discovery platform mapping 350+ central, state, and private CSR grant schemes to eligible citizens through a 25+ parameter dynamic matching engine.
            </p>
          </div>

          {/* Quick Helpline Numbers */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Citizen Helplines</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-center gap-1.5">
                <span className="text-brand-accent font-semibold">Kisan Call Centre:</span> 1551 / 1800-180-1551
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Ayushman Bharat:</span> 14555 / 1800-111-565
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">PM Mudra Helpline:</span> 1800-180-1111
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-pink-600 dark:text-pink-400 font-semibold">Women Helpline:</span> 1091 / 181
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Welfare Segments</h4>
            <ul className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
              <li>Farmers & Agriculture (PM-KISAN, PMFBY, KUSUM)</li>
              <li>Students & Scholars (NSP, Pragati, Tata Grants)</li>
              <li>MSME & Startups (MUDRA, PMEGP, Stand-Up India)</li>
              <li>Women & Child Development (SSY, PMMVY)</li>
              <li>Healthcare & Social Security (PMJAY, APY)</li>
            </ul>
          </div>

          {/* Government Portals */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Direct Portals</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent flex items-center gap-1">
                  PM Kisan Portal <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent flex items-center gap-1">
                  National Scholarship Portal <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent flex items-center gap-1">
                  NHA PM-JAY Ayushman <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://udyamregistration.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent flex items-center gap-1">
                  MSME Udyam Registration <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} Scheme Sathi • Developed for Indian Citizens & Public Good
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by Direct Benefit Transfer (DBT) matching engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
