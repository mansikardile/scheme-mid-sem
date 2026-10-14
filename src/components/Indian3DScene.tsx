import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ShieldCheck, TrendingUp, CheckCircle2, Sparkles, ArrowUpRight, Award, Zap } from 'lucide-react';

interface Indian3DSceneProps {
  className?: string;
}

export const Indian3DScene: React.FC<Indian3DSceneProps> = ({ className = '' }) => {
  // 3D Mouse Parallax Tilt for the realistic citizen showcase
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center p-2 sm:p-4 perspective-1000 ${className}`}
    >
      {/* Dynamic 3D Floating Tilt Showcase Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-lg rounded-3xl overflow-visible shadow-2xl transition-all duration-200"
      >
        {/* Main Citizen Photography Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-slate-900 group">
          {/* Real Photo of Indian Citizens */}
          <img
            src="/hero_citizens.jpg"
            alt="Empowered Indian Citizens: Farmer, Student, Artisan Entrepreneur, and Doctor"
            className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
          />

          {/* Cinematic Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

          {/* Interactive Dynamic Glare Effect */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 65%)`
            }}
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          {/* Bottom Photo Overlay Caption Bar */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                  National DBT Network Active
                </span>
              </div>
              <span className="text-[11px] font-semibold text-slate-300 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/15">
                350+ Live Grants
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display leading-tight text-white drop-shadow-md">
              Empowering India's 1.4 Billion Citizens
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Direct Bank Transfers verified across Agriculture, Education, Health & MSME.
            </p>
          </div>
        </div>

        {/* =========================================================================
            3D FLOATING HOLOGRAPHIC BENEFIT BADGES (Elevated in 3D Z-Space)
            ========================================================================= */}

        {/* 3D Floating Badge 1: PM-KISAN (Top Left) */}
        <motion.div
          style={{ transform: 'translateZ(50px)' }}
          className="absolute -top-4 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-amber-500/40 shadow-xl flex items-center gap-3 animate-float z-30 pointer-events-none"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <Zap className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-amber-600 dark:text-amber-400">
              Annadata Kisan DBT
            </div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-1">
              <span>₹6,000 / Year</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </div>
        </motion.div>

        {/* 3D Floating Badge 2: Ayushman Health Card (Top Right) */}
        <motion.div
          style={{ transform: 'translateZ(45px)', animationDelay: '1.5s' }}
          className="absolute top-12 -right-3 sm:-right-6 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 shadow-xl flex items-center gap-3 animate-float z-30 pointer-events-none"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400">
              PM-JAY Health Cover
            </div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">
              ₹5 Lakhs Free
            </div>
          </div>
        </motion.div>

        {/* 3D Floating Badge 3: MUDRA & Corpus (Bottom Right) */}
        <motion.div
          style={{ transform: 'translateZ(55px)', animationDelay: '3s' }}
          className="absolute -bottom-5 -right-2 sm:-right-4 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-cyan-500/40 shadow-xl flex items-center gap-3 animate-float z-30 pointer-events-none"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
            <TrendingUp className="w-5 h-5 text-cyan-500" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-400">
              MUDRA Entrepreneur
            </div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">
              Up to ₹20 Lakhs
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
