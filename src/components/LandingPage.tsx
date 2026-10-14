import React, { useState } from 'react';
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue 
} from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Wheat, 
  GraduationCap, 
  Briefcase, 
  HeartHandshake, 
  Users, 
  Accessibility, 
  ChevronRight, 
  ChevronDown,
  Building,
  ShieldCheck,
  CheckCircle2,
  Coins
} from 'lucide-react';
import { IndianParallaxScene } from './IndianParallaxScene';
import { schemeService } from '../services/schemeService';
import type { CategoryType } from '../types';

interface LandingPageProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onExploreCategory: (category: CategoryType) => void;
}

// 3D Interactive Mouse Parallax Tilt Card with Dynamic Glare & Elevation
const ParallaxCard = ({ 
  children, 
  onClick, 
  className = '' 
}: { 
  children: React.ReactNode; 
  onClick?: () => void; 
  className?: string; 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 240, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 240, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative group ${className}`}
    >
      {/* 3D Specular Glare Reflection */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`
        }}
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
      />
      <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
};

export const LandingPage: React.FC<LandingPageProps> = ({
  onOpenAuth,
  onExploreCategory
}) => {
  // Global Viewport Scroll Parallax Hook
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Multi-layer parallax scroll transforms
  const backgroundY1 = useTransform(smoothScrollProgress, [0, 1], ['0%', '35%']);
  const backgroundY2 = useTransform(smoothScrollProgress, [0, 1], ['0%', '-25%']);
  const statsY = useTransform(smoothScrollProgress, [0.05, 0.35], ['40px', '0px']);
  const calculatorY = useTransform(smoothScrollProgress, [0.25, 0.55], ['50px', '0px']);

  // Quick Interactive Live Calculator State
  const [calcCategory, setCalcCategory] = useState<CategoryType>('farmer');
  const [calcAge, setCalcAge] = useState<number>(32);
  const [calcIncome, setCalcIncome] = useState<number>(180000);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculate live estimation
  const estimatedMatches = schemeService.getAllSchemes().filter(s => {
    if (s.category.includes(calcCategory)) return true;
    if (s.eligibilityCriteria.maxAnnualIncome && calcIncome <= s.eligibilityCriteria.maxAnnualIncome) return true;
    return false;
  });

  const estimatedCorpus = estimatedMatches.reduce((acc, s) => acc + s.financialBenefitMax, 0);

  const categories = [
    {
      id: 'farmer' as CategoryType,
      title: 'Farmers & Cultivators',
      icon: Wheat,
      color: 'from-amber-500/10 to-emerald-500/10 dark:from-amber-500/20 dark:to-emerald-500/20',
      badgeColor: 'text-amber-600 dark:text-amber-400 border-amber-500/30 bg-amber-50 dark:bg-transparent',
      schemesCount: '170+ Schemes',
      highlight: 'PM-KISAN ₹6k, PMFBY, 90% Solar Pump Subsidy'
    },
    {
      id: 'student' as CategoryType,
      title: 'Students & Scholars',
      icon: GraduationCap,
      color: 'from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20',
      badgeColor: 'text-cyan-600 dark:text-cyan-400 border-cyan-500/30 bg-cyan-50 dark:bg-transparent',
      schemesCount: '560+ Schemes',
      highlight: 'NSP Grants, AICTE Pragati, State Fellowships & Scholarships'
    },
    {
      id: 'msme' as CategoryType,
      title: 'MSME & Entrepreneurs',
      icon: Briefcase,
      color: 'from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20',
      badgeColor: 'text-indigo-600 dark:text-indigo-400 border-indigo-500/30 bg-indigo-50 dark:bg-transparent',
      schemesCount: '245+ Schemes',
      highlight: 'PMEGP 35% Subsidy, MUDRA ₹20L Collateral Free'
    },
    {
      id: 'women' as CategoryType,
      title: 'Women & Child Welfare',
      icon: HeartHandshake,
      color: 'from-rose-500/10 to-pink-500/10 dark:from-rose-500/20 dark:to-pink-500/20',
      badgeColor: 'text-rose-600 dark:text-rose-400 border-rose-500/30 bg-rose-50 dark:bg-transparent',
      schemesCount: '265+ Schemes',
      highlight: 'Sukanya Samriddhi 8.2%, PMMVY ₹6,000 Maternity'
    },
    {
      id: 'healthcare' as CategoryType,
      title: 'Healthcare & Seniors',
      icon: Users,
      color: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20',
      badgeColor: 'text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-50 dark:bg-transparent',
      schemesCount: '340+ Schemes',
      highlight: 'Ayushman Bharat ₹5 Lakh Free, APY Pension'
    },
    {
      id: 'disability' as CategoryType,
      title: 'Differently-Abled (UDID)',
      icon: Accessibility,
      color: 'from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/20 dark:to-fuchsia-500/20',
      badgeColor: 'text-violet-600 dark:text-violet-400 border-violet-500/30 bg-violet-50 dark:bg-transparent',
      schemesCount: '175+ Schemes',
      highlight: 'Divyangjan Swavalamban Soft Loans & Assistive Aid'
    },
  ];

  const faqs = [
    {
      q: 'What is Scheme Sathi and how does it work?',
      a: 'Scheme Sathi is India’s intelligent citizen welfare matching platform. By answering 20-30 personalized questions about your age, landholding, income, trade, or education, our rule-based engine cross-references 350+ Central, State, and Private CSR schemes to present you with 100% verified schemes you are eligible for.'
    },
    {
      q: 'Are private and CSR grants also included besides government schemes?',
      a: 'Yes! Along with major central initiatives like PM-KISAN, Ayushman Bharat, and PMEGP, Scheme Sathi indexes leading private philanthropic grants and corporate CSR initiatives (e.g., Tata Trusts, Reliance Foundation, NSDL Vidyasaarathi).'
    },
    {
      q: 'Is my data secure and private?',
      a: 'Absolutely. We do not sell or share citizen data. All demographic and financial information is encrypted and strictly used to calculate eligibility matching.'
    },
    {
      q: 'Can I change my answers later if my income or landholding changes?',
      a: 'Yes! You can log in anytime to modify any of your 25+ parameters. Your matched schemes and estimated benefits will recalculate automatically in real-time.'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#070A12] text-white">
      {/* Dynamic Background Parallax Glowing Orbs */}
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute top-12 left-10 w-96 h-96 bg-brand-accent/15 blur-[150px] pointer-events-none rounded-full" 
      />
      <motion.div 
        style={{ y: backgroundY2 }}
        className="absolute top-[800px] right-5 w-96 h-96 bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" 
      />
      <motion.div 
        style={{ y: backgroundY1 }}
        className="absolute top-[1600px] left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" 
      />

      {/* =========================================================================
          HERO SECTION: INDIAN SOVEREIGN & CITIZEN WELFARE PARALLAX SCENE
          ========================================================================= */}
      <IndianParallaxScene onOpenAuth={onOpenAuth} />

      {/* DOWNSTREAM SECTIONS */}
      <div className="space-y-24 sm:space-y-32 pt-10 sm:pt-16 pb-24">
        {/* SECTION 2: LIVE STATS TICKER WITH 3D TILT CARDS */}
        <motion.section 
          style={{ y: statsY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <ParallaxCard className="p-6 rounded-3xl bg-[#0C1222]/85 border border-white/10 shadow-2xl backdrop-blur-xl text-center hover:border-amber-500/40">
              <div className="text-2xl sm:text-4xl font-extrabold text-brand-accent font-display">₹14.8L Cr</div>
              <div className="text-xs text-slate-400 font-medium mt-1">National Welfare Corpus</div>
            </ParallaxCard>
            
            <ParallaxCard className="p-6 rounded-3xl bg-[#0C1222]/85 border border-white/10 shadow-2xl backdrop-blur-xl text-center hover:border-emerald-500/40">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-display">3,280+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Active Verified Schemes</div>
            </ParallaxCard>

            <ParallaxCard className="p-6 rounded-3xl bg-[#0C1222]/85 border border-white/10 shadow-2xl backdrop-blur-xl text-center hover:border-cyan-500/40">
              <div className="text-2xl sm:text-4xl font-extrabold text-cyan-400 font-display">28 States</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Central & State Coverage</div>
            </ParallaxCard>

            <ParallaxCard className="p-6 rounded-3xl bg-[#0C1222]/85 border border-white/10 shadow-2xl backdrop-blur-xl text-center hover:border-indigo-500/40">
              <div className="text-2xl sm:text-4xl font-extrabold text-indigo-400 font-display">100% DBT</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Direct Bank Account Transfer</div>
            </ParallaxCard>
          </div>
        </motion.section>

      {/* SECTION 3: CITIZEN CATEGORIES EXPLORER WITH 3D TILT PARALLAX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-20">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="badge-pill bg-brand-accent/20 text-brand-accent border border-brand-accent/40">
            Citizen Segments
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Tailored For Every Indian Citizen
          </h2>
          <p className="text-sm text-slate-300">
            Select your category to explore dedicated schemes, subsidies, and scholarships designed for your livelihood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <ParallaxCard
                key={cat.id}
                onClick={() => onExploreCategory(cat.id)}
                className="group relative p-6 rounded-3xl bg-[#0C1222]/85 border border-white/10 cursor-pointer overflow-hidden flex flex-col justify-between hover:border-brand-accent/50 shadow-2xl transition-all"
              >
                {/* Ambient Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/15 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-6 h-6 text-brand-accent" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${cat.badgeColor}`}>
                      {cat.schemesCount}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {cat.highlight}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>Explore Schemes</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </ParallaxCard>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE LIVE ELIGIBILITY CALCULATOR WITH PARALLAX */}
      <motion.section 
        style={{ y: calculatorY }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
      >
        <div className="p-8 sm:p-12 rounded-3xl bg-[#090D1A]/95 border border-brand-accent/35 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-accent" />
                <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                  Live Instant Estimation
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Try a Quick Calculation Before Signing Up
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Adjust the sliders and see how our engine estimates your eligible schemes in real time.
              </p>

              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>Category</span>
                    <span className="text-brand-accent font-bold capitalize">{calcCategory}</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {(['farmer', 'student', 'msme', 'women', 'healthcare', 'disability'] as CategoryType[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => setCalcCategory(c)}
                        className={`py-2 text-[11px] font-bold rounded-xl border capitalize transition-all cursor-pointer ${
                          calcCategory === c 
                            ? 'bg-brand-accent/25 border-brand-accent text-white shadow-md' 
                            : 'bg-slate-900 border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>Applicant Age</span>
                    <span className="text-cyan-400 font-bold">{calcAge} Years</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={80}
                    value={calcAge}
                    onChange={(e) => setCalcAge(Number(e.target.value))}
                    className="w-full accent-brand-accent h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>Annual Family Income</span>
                    <span className="text-emerald-400 font-bold">₹{calcIncome.toLocaleString('en-IN')} / yr</span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={1200000}
                    step={25000}
                    value={calcIncome}
                    onChange={(e) => setCalcIncome(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Calculation Result Box with 3D Organic Tilt */}
            <div className="lg:col-span-5">
              <ParallaxCard className="p-6 rounded-3xl bg-[#0F162A]/95 border border-white/15 text-center space-y-5 shadow-2xl">
                <div className="text-xs font-semibold text-slate-400">Estimated Match Summary</div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                  <div className="text-4xl font-extrabold text-emerald-400 font-display">
                    {estimatedMatches.length} Schemes
                  </div>
                  <div className="text-xs text-slate-300 mt-1">High Probability Match</div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-accent/15 border border-brand-accent/40">
                  <div className="text-xs font-semibold text-brand-accent">Potential Value</div>
                  <div className="text-2xl font-extrabold text-white font-display mt-0.5">
                    ₹{(estimatedCorpus / 100000).toFixed(2)} Lakhs
                  </div>
                </div>

                <button
                  onClick={() => onOpenAuth('signup')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-emerald-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Unlock Full 28+ Question Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </ParallaxCard>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 5: HOW IT WORKS (4 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-20">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="badge-pill bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
            Streamlined Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            How Scheme Sathi Works
          </h2>
          <p className="text-sm text-slate-300">
            4 simple steps from initial questionnaire to direct bank transfer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Create Citizen Profile',
              desc: 'Sign up with your email and select your primary category (Farmer, Student, MSME, Women, etc.).'
            },
            {
              step: '02',
              title: 'Answer 20–30 Questions',
              desc: 'Provide details on landholding, family income, caste, state domicile, and business scale.'
            },
            {
              step: '03',
              title: 'AI Eligibility Engine',
              desc: 'Our rule-based engine cross-references requirements and gives you a verified match score.'
            },
            {
              step: '04',
              title: 'Direct Portal Apply',
              desc: 'Get direct official portal links, document checklists, and offline helpline numbers.'
            }
          ].map((item, idx) => (
            <ParallaxCard key={idx} className="p-6 rounded-3xl bg-[#0C1222]/85 border border-white/10 relative space-y-3 shadow-2xl hover:border-brand-accent/40">
              <div className="text-3xl font-extrabold text-brand-accent/80 font-display">{item.step}</div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </ParallaxCard>
          ))}
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-20">
        <div className="text-center space-y-3">
          <span className="badge-pill bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
            Citizen Support
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0C1222]/85 border border-white/10 overflow-hidden transition-all shadow-xl"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-brand-accent transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-brand-accent' : 'text-slate-400'}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-tr from-[#141C2E] via-[#0E1524] to-[#122019] border border-brand-accent/40 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              Ready to Claim Your Rightful Welfare Benefits?
            </h2>
            <p className="text-sm text-slate-300">
              Join thousands of Indian farmers, students, entrepreneurs, and families finding verified government and private schemes every day.
            </p>

            <div className="pt-4">
              <button
                onClick={() => onOpenAuth('signup')}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-accent via-amber-500 to-emerald-500 text-white font-extrabold text-base shadow-2xl shadow-brand-accent/40 hover:shadow-brand-accent/60 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start 20–30 Question Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
