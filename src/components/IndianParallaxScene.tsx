import React from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Zap, Award, Landmark, IndianRupee } from 'lucide-react';

interface IndianParallaxSceneProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

// 3D Interactive Tilt Card Component
const Interactive3DCard = ({
  children,
  className = '',
  style = {}
}: {
  children: React.ReactNode;
  className?: string;
  style?: any;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 24 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['14deg', '-14deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-14deg', '14deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className={`relative group cursor-pointer transition-all duration-200 ${className}`}
    >
      {/* Dynamic 3D Glare Lighting */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.18) 0%, transparent 65%)`
        }}
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
      />
      <div style={{ transform: 'translateZ(25px)' }} className="relative z-20">
        {children}
      </div>
    </motion.div>
  );
};

export const IndianParallaxScene: React.FC<IndianParallaxSceneProps> = ({ onOpenAuth }) => {
  // Mouse hover parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 90, damping: 28 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 35);
    mouseY.set((clientY / innerHeight - 0.5) * 35);
  };

  // Smooth window scroll progress with Lenis
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  // Layered Parallax Scroll Transforms
  const bgImageY = useTransform(smoothScroll, [0, 0.45], ['0%', '15%']);
  const bgImageScale = useTransform(smoothScroll, [0, 0.45], [1, 1.06]);

  const bigTextY = useTransform(smoothScroll, [0, 0.45], ['0%', '35%']);
  const bigTextOpacity = useTransform(smoothScroll, [0, 0.3], [0.85, 0.05]);

  const sealRotate = useTransform(smoothScroll, [0, 1], [0, 90]);

  // Floating Glass DBT Badges (Staggered elevations)
  const badge1Y = useTransform(smoothScroll, [0, 0.45], ['0px', '-40px']);
  const badge2Y = useTransform(smoothScroll, [0, 0.45], ['0px', '-65px']);
  const badge3Y = useTransform(smoothScroll, [0, 0.45], ['0px', '-35px']);
  const badge4Y = useTransform(smoothScroll, [0, 0.45], ['0px', '-55px']);

  const heroCopyY = useTransform(smoothScroll, [0, 0.3], ['0px', '-25px']);
  const heroCopyOpacity = useTransform(smoothScroll, [0, 0.25], [1, 0]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[820px] lg:min-h-[920px] overflow-hidden select-none bg-slate-900 flex flex-col justify-between"
    >
      {/* =========================================================================
          LAYER 1: FULL-BLEED REAL INDIA GATE PHOTOGRAPHY BACKGROUND
          ========================================================================= */}
      <motion.div
        style={{
          y: bgImageY,
          scale: bgImageScale,
          x: useTransform(smoothMouseX, val => val * 0.2)
        }}
        className="absolute inset-0 w-full h-[115%] pointer-events-none z-0"
      >
        <img
          src="/india_gate.jpg"
          alt="India Gate Monument Sunset"
          className="w-full h-full object-cover object-center filter brightness-[0.88] dark:brightness-[0.48] contrast-[1.08] saturate-[1.15]"
        />

        {/* Ambient Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60 dark:from-[#0B0F17] dark:via-[#0B0F17]/70 dark:to-[#0B0F17]/80" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-brand-accent/20 via-amber-500/10 to-transparent rounded-full blur-[140px]" />
      </motion.div>

      {/* =========================================================================
          LAYER 2: MASSIVE TYPOGRAPHY WATERMARK WITH 3D DEPTH
          ========================================================================= */}
      <motion.div
        style={{
          y: bigTextY,
          opacity: bigTextOpacity,
          x: smoothMouseX
        }}
        className="absolute inset-x-0 top-36 sm:top-44 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4"
      >
        <span className="text-[70px] sm:text-[130px] md:text-[170px] lg:text-[210px] font-black tracking-tighter uppercase font-display leading-none select-none text-white/[0.08] dark:text-white/[0.06] drop-shadow-sm">
          SCHEME SATHI
        </span>
        <span className="text-xs sm:text-sm font-extrabold tracking-[0.4em] uppercase text-brand-accent/70 -mt-2 sm:-mt-6">
          Direct Benefit Transfer • Central & 28 States
        </span>
      </motion.div>

      {/* =========================================================================
          LAYER 3: TOP HERO HEADLINE & CTAS
          ========================================================================= */}
      <motion.div
        style={{
          y: heroCopyY,
          opacity: heroCopyOpacity,
        }}
        className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-18 lg:pt-20 text-center space-y-6"
      >
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 text-xs font-semibold text-white shadow-2xl">
          <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-ping" />
          <span className="text-brand-accent font-bold">Bharat Citizen Welfare Portal</span>
          <span className="text-white/40">•</span>
          <span className="text-slate-200">350+ Verified Central & State Schemes</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.08] drop-shadow-xl">
          Unlock Every <span className="gradient-text-saffron">Govt & Private</span> Scheme You Deserve.
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow-md">
          Empowering Indian farmers, students, MSME entrepreneurs, women, and healthcare beneficiaries with direct bank transfer matching.
        </p>

        {/* Action Buttons with 3D Elevation */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenAuth('signup')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-accent via-amber-500 to-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-2xl shadow-brand-accent/40 hover:shadow-brand-accent/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
            <span>Check Your Eligibility (Free)</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => onOpenAuth('login')}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer backdrop-blur-xl"
          >
            <span>Log In to Dashboard</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium drop-shadow-sm">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct DBT Integration</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Central & All 28 States</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Free Public Initiative</span>
          </div>
        </div>
      </motion.div>

      {/* =========================================================================
          LAYER 4: 3D INTERACTIVE TILT GLASS BENEFIT BADGES (Tactile 3D Depth)
          ========================================================================= */}
      <div className="relative w-full max-w-6xl mx-auto px-4 pb-16 sm:pb-24 z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* 3D Floating Badge 1: PM-KISAN */}
          <motion.div
            style={{
              y: badge1Y,
              x: useTransform(smoothMouseX, val => val * 0.4)
            }}
            className="animate-float"
          >
            <Interactive3DCard className="p-4 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-amber-500/40 shadow-2xl hover:border-amber-400/80 hover:shadow-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/40 shrink-0 shadow-inner">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-amber-400">
                    Annadata Kisan DBT
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5">
                    <span>₹6,000 / Year</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </Interactive3DCard>
          </motion.div>

          {/* 3D Floating Badge 2: NSP Scholarships */}
          <motion.div
            style={{
              y: badge2Y,
              x: useTransform(smoothMouseX, val => -val * 0.35)
            }}
            className="animate-float"
          >
            <Interactive3DCard className="p-4 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-blue-500/40 shadow-2xl hover:border-blue-400/80 hover:shadow-blue-500/20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/40 shrink-0 shadow-inner">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-blue-400">
                    Scholarships
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">
                    100% Tuition Waiver
                  </div>
                </div>
              </div>
            </Interactive3DCard>
          </motion.div>

          {/* 3D Floating Badge 3: Ayushman Health Shield */}
          <motion.div
            style={{
              y: badge3Y,
              x: useTransform(smoothMouseX, val => -val * 0.4)
            }}
            className="animate-float"
          >
            <Interactive3DCard className="p-4 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-emerald-500/40 shadow-2xl hover:border-emerald-400/80 hover:shadow-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/40 shrink-0 shadow-inner">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                    PM-JAY Health
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">
                    ₹5 Lakhs Free Cover
                  </div>
                </div>
              </div>
            </Interactive3DCard>
          </motion.div>

          {/* 3D Floating Badge 4: MUDRA & PMEGP */}
          <motion.div
            style={{
              y: badge4Y,
              x: useTransform(smoothMouseX, val => val * 0.35)
            }}
            className="animate-float"
          >
            <Interactive3DCard className="p-4 sm:p-5 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-cyan-500/40 shadow-2xl hover:border-cyan-400/80 hover:shadow-cyan-500/20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/40 shrink-0 shadow-inner">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-cyan-400">
                    MUDRA Loan
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-white">
                    ₹20 Lakhs Collateral-Free
                  </div>
                </div>
              </div>
            </Interactive3DCard>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
