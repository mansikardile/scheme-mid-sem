import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

interface SplineSceneProps {
  className?: string;
}

export const SplineScene: React.FC<SplineSceneProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-performance interactive 3D particle and floating holographic geometry canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic 3D Floating Node System
    const nodes: {
      x: number;
      y: number;
      z: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      speedZ: number;
    }[] = [];

    const colors = ['#FF772A', '#10B981', '#38BDF8', '#818CF8', '#F59E0B'];

    for (let i = 0; i < 45; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 0.8,
        y: (Math.random() - 0.5) * height * 0.8,
        z: Math.random() * 400 - 200,
        radius: Math.random() * 3.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        speedZ: (Math.random() - 0.5) * 0.8,
      });
    }

    let angle = 0;
    const focalLength = 320;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      angle += 0.006;

      // Draw subtle glowing background radial aura
      const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, width * 0.45);
      grad.addColorStop(0, 'rgba(255, 119, 42, 0.12)');
      grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.06)');
      grad.addColorStop(1, 'rgba(11, 15, 23, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Rotate and project 3D points
      const projectedNodes = nodes.map(node => {
        node.x += node.speedX;
        node.y += node.speedY;
        node.z += node.speedZ;

        if (node.x > width * 0.4) node.x = -width * 0.4;
        if (node.x < -width * 0.4) node.x = width * 0.4;
        if (node.y > height * 0.4) node.y = -height * 0.4;
        if (node.y < -height * 0.4) node.y = height * 0.4;
        if (node.z > 200) node.z = -200;
        if (node.z < -200) node.z = 200;

        // Y-axis rotation
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const rotX = node.x * cos - node.z * sin;
        const rotZ = node.z * cos + node.x * sin + 300;

        const scale = focalLength / rotZ;
        const px = rotX * scale + centerX;
        const py = node.y * scale + centerY;

        return {
          px,
          py,
          scale,
          radius: node.radius * scale,
          color: node.color,
          rotZ,
        };
      });

      // Sort by depth
      projectedNodes.sort((a, b) => b.rotZ - a.rotZ);

      // Draw connecting lines between close points
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].px - projectedNodes[j].px;
          const dy = projectedNodes[i].py - projectedNodes[j].py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.15 * (1 - dist / 85)})`;
            ctx.beginPath();
            ctx.moveTo(projectedNodes[i].px, projectedNodes[i].py);
            ctx.lineTo(projectedNodes[j].px, projectedNodes[j].py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glowing gradient
      projectedNodes.forEach(node => {
        if (node.px < 0 || node.px > width || node.py < 0 || node.py > height) return;
        ctx.beginPath();
        ctx.arc(node.px, node.py, Math.max(1, node.radius), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10 * node.scale;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-[450px] md:h-[540px] flex items-center justify-center overflow-hidden rounded-3xl ${className}`}>
      {/* Background Interactive 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Spline iframe for dynamic 3D asset */}
      <div className="absolute inset-0 z-0 opacity-80 hover:opacity-100 transition-opacity">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-d9ca00bfddb7e3e8178c1a657e2a912c/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full pointer-events-auto"
          title="Interactive 3D Scheme Sathi AI Model"
          style={{ transform: 'scale(1.05)', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
        />
      </div>

      {/* Floating Holographic Glass Cards with dynamic micro-animations */}
      <div className="absolute top-6 left-6 z-10 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel border border-brand-accent/30 shadow-2xl animate-float">
        <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent border border-brand-accent/40">
          <ShieldCheck className="w-5 h-5 text-brand-accent" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-300">100% Verified Eligibility</div>
          <div className="text-sm font-bold text-white flex items-center gap-1.5">
            <span>Direct Benefit Transfer (DBT)</span>
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-6 right-6 z-10 hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl glass-panel border border-emerald-500/30 shadow-2xl animate-float"
        style={{ animationDelay: '2.5s' }}
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/40">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-300">Total Available Corpus</div>
          <div className="text-sm font-bold text-emerald-400">₹14.8 Lakh Crores+</div>
        </div>
      </div>

      <div 
        className="absolute top-20 right-8 z-10 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-medium shadow-lg animate-float"
        style={{ animationDelay: '1.2s' }}
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>Live Matching Algorithm v3.4</span>
      </div>
    </div>
  );
};
