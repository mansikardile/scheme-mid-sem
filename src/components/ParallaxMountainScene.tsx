import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Sparkles, ShieldCheck, TrendingUp, CheckCircle, ArrowRight, Coins } from 'lucide-react';
import { SplineScene } from './SplineScene';

interface ParallaxMountainSceneProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

export const ParallaxMountainScene: React.FC<ParallaxMountainSceneProps> = ({ onOpenAuth }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Mouse hover parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 35);
    mouseY.set((clientY / innerHeight - 0.5) * 35);
  };

  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  // Layer Velocities (Simulating multi-plane depth like Parallax Mountain)
  // Layer 1: Sun / Aura (slowest, background)
  const sunY = useTransform(smoothScroll, [0, 1], ['0%', '65%']);
  const sunScale = useTransform(smoothScroll, [0, 1], [1, 1.25]);

  // Layer 2: Distant High Mountain Peaks
  const distantPeaksY = useTransform(smoothScroll, [0, 1], ['0%', '42%']);

  // Layer 3: Massive Midground Typography (slides in depth behind midground mountains)
  const bigTextY = useTransform(smoothScroll, [0, 1], ['0%', '75%']);
  const bigTextOpacity = useTransform(smoothScroll, [0, 0.7], [0.85, 0]);
  const bigTextScale = useTransform(smoothScroll, [0, 1], [1, 0.88]);

  // Layer 4: Midground Mountain Ridge
  const midgroundPeaksY = useTransform(smoothScroll, [0, 1], ['0%', '24%']);

  // Layer 5: Mist & Fog Layer (drifts horizontally + vertically)
  const mistY = useTransform(smoothScroll, [0, 1], ['0%', '15%']);
  const mistOpacity = useTransform(smoothScroll, [0, 0.5, 1], [0.7, 0.9, 0.4]);

  // Layer 6: Foreground Terrain Ridge
  const foregroundRidgeY = useTransform(smoothScroll, [0, 1], ['0%', '-5%']);

  // Floating Hero Cards (fastest parallax with dynamic floating elevation)
  const floatingBadgeLeftY = useTransform(smoothScroll, [0, 1], ['0px', '-90px']);
  const floatingBadgeRightY = useTransform(smoothScroll, [0, 1], ['0px', '-130px']);
  const heroContentY = useTransform(smoothScroll, [0, 0.8], ['0px', '-60px']);
  const heroContentOpacity = useTransform(smoothScroll, [0, 0.6], [1, 0]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[920px] lg:min-h-[1050px] overflow-hidden select-none"
    >
      {/* =========================================================================
          LAYER 1: CELESTIAL SKY, SUN / MOON & AMBIENT AURA (Furthest Back)
          ========================================================================= */}
      <motion.div
        style={{ y: sunY, scale: sunScale }}
        className="absolute inset-x-0 top-0 h-[650px] flex items-center justify-center pointer-events-none z-0"
      >
        {/* Radiant Sunrise / Glow Sphere */}
        <div className="w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] rounded-full bg-gradient-to-b from-brand-accent/35 via-amber-500/20 to-transparent blur-[90px] dark:blur-[110px]" />
        
        {/* Subtle geometric star/orbit circle */}
        <div className="absolute w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full border border-brand-accent/15 dark:border-brand-accent/20 animate-pulse-slow" />
        <div className="absolute w-[700px] sm:w-[1000px] h-[700px] sm:h-[1000px] rounded-full border border-emerald-500/10 dark:border-emerald-500/15" />
      </motion.div>

      {/* =========================================================================
          LAYER 2: DISTANT HIGH MOUNTAIN PEAKS (20% Speed)
          ========================================================================= */}
      <motion.div
        style={{ 
          y: distantPeaksY,
          x: smoothMouseX
        }}
        className="absolute inset-x-0 bottom-36 sm:bottom-48 h-[420px] pointer-events-none z-10 flex items-end justify-center"
      >
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-60 dark:opacity-40 text-slate-300 dark:text-slate-800"
        >
          <path
            d="M0 380L140 210L320 290L510 140L680 260L890 120L1080 250L1260 170L1440 310V380H0Z"
            fill="currentColor"
          />
          <path
            d="M510 140L550 200L470 230L510 140Z"
            fill="rgba(255, 119, 42, 0.25)"
          />
          <path
            d="M890 120L940 190L850 210L890 120Z"
            fill="rgba(16, 185, 129, 0.2)"
          />
        </svg>
      </motion.div>

      {/* =========================================================================
          LAYER 3: MASSIVE 3D PARALLAX TYPOGRAPHY (Sitting between mountain depth)
          ========================================================================= */}
      <motion.div
        style={{ 
          y: bigTextY, 
          opacity: bigTextOpacity,
          scale: bigTextScale,
          x: smoothMouseX
        }}
        className="absolute inset-x-0 top-32 sm:top-40 flex flex-col items-center justify-center pointer-events-none z-15 text-center px-4"
      >
        <span className="text-[64px] sm:text-[110px] md:text-[145px] lg:text-[175px] font-black tracking-tighter uppercase font-display leading-none select-none text-slate-200/70 dark:text-white/[0.07] drop-shadow-sm">
          SCHEME SATHI
        </span>
        <span className="text-xs sm:text-sm font-extrabold tracking-[0.35em] uppercase text-brand-accent/60 dark:text-brand-accent/50 -mt-2 sm:-mt-6">
          National Citizen Welfare Engine
        </span>
      </motion.div>

      {/* =========================================================================
          LAYER 4: MIDGROUND MOUNTAIN RIDGES & CONTOURS (45% Speed)
          ========================================================================= */}
      <motion.div
        style={{ 
          y: midgroundPeaksY,
          x: useTransform(smoothMouseX, val => -val * 0.7)
        }}
        className="absolute inset-x-0 bottom-16 sm:bottom-28 h-[400px] pointer-events-none z-20 flex items-end justify-center"
      >
        <svg
          viewBox="0 0 1440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover text-slate-200 dark:text-[#121B2D]"
        >
          <path
            d="M0 360L0 230L190 150L410 270L630 110L860 260L1090 140L1310 280L1440 190V360H0Z"
            fill="currentColor"
          />
          {/* Subtle gradient light streak on the ridge edge */}
          <path
            d="M190 150L410 270L630 110L860 260L1090 140L1310 280"
            stroke="url(#ridgeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="ridgeGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF772A" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="1" stopColor="#10B981" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* =========================================================================
          LAYER 5: ATMOSPHERIC MIST & HORIZON CLOUD GRADIENT
          ========================================================================= */}
      <motion.div
        style={{ 
          y: mistY,
          opacity: mistOpacity
        }}
        className="absolute inset-x-0 bottom-10 h-64 bg-gradient-to-t from-slate-50 via-slate-100/60 to-transparent dark:from-[#0B0F17] dark:via-[#0B0F17]/80 dark:to-transparent pointer-events-none z-25"
      />

      {/* =========================================================================
          LAYER 6: FOREGROUND MOUNTAIN & TERRAIN RIDGES (Foreground plane)
          ========================================================================= */}
      <motion.div
        style={{ y: foregroundRidgeY }}
        className="absolute inset-x-0 bottom-0 h-[260px] pointer-events-none z-30 flex items-end justify-center"
      >
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover text-slate-50 dark:text-[#0B0F17]"
        >
          <path
            d="M0 220L0 120L280 60L590 150L920 40L1230 130L1440 80V220H0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* =========================================================================
          LAYER 7: HERO INTERACTIVE FOREGROUND CONTENT (Cards, CTAs, 3D Spline Scene)
          ========================================================================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16 z-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Card Content */}
          <motion.div
            style={{ 
              y: heroContentY, 
              opacity: heroContentOpacity,
              rotateX: useTransform(smoothMouseY, val => -val * 0.15),
              rotateY: useTransform(smoothMouseX, val => val * 0.15)
            }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Citizen Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-accent/30 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xl backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-ping" />
              <span className="text-brand-accent font-bold">Bharat Citizen Welfare Portal</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span>350+ Live Verified Schemes</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-[1.12]">
              Unlock Every <span className="gradient-text-saffron">Govt & Private</span> Scheme You Deserve.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Don’t leave thousands of rupees in grants, subsidies, and scholarships unclaimed. 
              Answer our tailored 20–30 question eligibility engine and get matched instantly with 100% verified DBT schemes.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenAuth('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-accent via-amber-500 to-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-2xl shadow-brand-accent/30 hover:shadow-brand-accent/50 active:scale-95 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                <span>Check Your Eligibility (Free)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onOpenAuth('login')}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer backdrop-blur-md"
              >
                <span>Log In to Dashboard</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-700 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Direct DBT Integration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Central & All 28 States</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>100% Free Public Initiative</span>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Spline Scene & Floating Parallax Badges */}
          <div className="lg:col-span-5 relative">
            <SplineScene />

            {/* Floating Parallax Badge 1 */}
            <motion.div
              style={{ y: floatingBadgeLeftY }}
              className="absolute -top-4 -left-6 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel border border-brand-accent/30 shadow-2xl backdrop-blur-xl z-50 animate-float"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent border border-brand-accent/40">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">100% Verified Eligibility</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>Direct Benefit Transfer</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                </div>
              </div>
            </motion.div>

            {/* Floating Parallax Badge 2 */}
            <motion.div
              style={{ y: floatingBadgeRightY }}
              className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel border border-emerald-500/30 shadow-2xl backdrop-blur-xl z-50 animate-float"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/40">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">National Welfare Corpus</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">₹14.8 Lakh Crores+</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
