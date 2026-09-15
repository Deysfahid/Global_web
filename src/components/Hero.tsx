"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, TrendingUp, Shield, Briefcase } from "lucide-react";

const valueCards = [
  { icon: Globe, label: "WEBSITES", desc: "Built for your business", x: 62, y: 12, delay: 0 },
  { icon: TrendingUp, label: "MARKETING", desc: "Built to get discovered", x: 72, y: 42, delay: 150 },
  { icon: Shield, label: "TAX & GST", desc: "Built to keep you compliant", x: 58, y: 72, delay: 300 },
  { icon: Briefcase, label: "BUSINESS", desc: "Built to help you grow", x: 78, y: 78, delay: 450 },
];

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animMouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const animate = useCallback(() => {
    const lerp = 0.06;
    animMouse.current.x += (mouseRef.current.x - animMouse.current.x) * lerp;
    animMouse.current.y += (mouseRef.current.y - animMouse.current.y) * lerp;
    const scene = sceneRef.current;
    if (scene) {
      scene.style.transform =
        `rotateY(${animMouse.current.x * 8}deg) rotateX(${animMouse.current.y * -5}deg)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-yellow-500/[0.06] blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-500/[0.04] blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-yellow-600/[0.03] blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-32 lg:py-0">
          {/* Left — Copy */}
          <div
            className={`relative z-10 transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-[11px] font-medium text-yellow-300/80 tracking-wide">GLOBAL®</span>
            </div>

            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight mb-8">
              <span className="block text-white">BUILD.</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">GROW.</span>
              <span className="block text-white">SCALE.</span>
            </h1>

            <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-[420px] mb-10">
              Everything your business needs to build a stronger digital presence and grow with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full hover:from-yellow-300 hover:to-amber-300 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40"
              >
                START A PROJECT
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-medium text-white/50 bg-white/[0.04] border border-white/[0.08] rounded-full hover:bg-white/[0.08] hover:text-white/70 transition-all backdrop-blur-sm"
              >
                VIEW OUR WORK
              </Link>
            </div>
          </div>

          {/* Right — 3D Scene */}
          <div className="hidden lg:block relative h-[650px]">
            {/* 3D Object */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]"
              style={{ perspective: "1000px" }}
            >
              <div
                ref={sceneRef}
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow behind */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-yellow-500/30 blur-[80px]"
                  style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
                />

                {/* Crystal planes */}
                {[
                  { rotateY: 0, rotateX: 25, rotateZ: 0, size: 200, opacity: 0.15, gradient: "from-yellow-500/40 to-amber-600/20" },
                  { rotateY: 60, rotateX: -15, rotateZ: 10, size: 180, opacity: 0.12, gradient: "from-amber-500/35 to-yellow-600/15" },
                  { rotateY: 120, rotateX: 10, rotateZ: -8, size: 190, opacity: 0.1, gradient: "from-yellow-600/30 to-amber-600/10" },
                  { rotateY: 45, rotateX: -30, rotateZ: 15, size: 170, opacity: 0.08, gradient: "from-yellow-400/25 to-amber-500/10" },
                ].map((plane, i) => (
                  <div
                    key={i}
                    className={`absolute top-1/2 left-1/2 bg-gradient-to-br ${plane.gradient} backdrop-blur-sm border border-yellow-400/[${plane.opacity}] rounded-2xl`}
                    style={{
                      width: `${plane.size}px`,
                      height: `${plane.size}px`,
                      transform: `translate(-50%, -50%) rotateY(${plane.rotateY}deg) rotateX(${plane.rotateX}deg) rotateZ(${plane.rotateZ}deg)`,
                      transformStyle: "preserve-3d",
                      animationName: "float-rotate",
                      animationDuration: `${20 + i * 5}s`,
                      animationTimingFunction: "linear",
                      animationIterationCount: "infinite",
                      animationDelay: `${i * -5}s`,
                    }}
                  />
                ))}

                {/* Orbital rings */}
                {[
                  { size: 300, rotateX: 70, rotateY: 20 },
                  { size: 260, rotateX: 50, rotateY: -30 },
                  { size: 340, rotateX: 85, rotateY: 45 },
                ].map((ring, i) => (
                  <div
                    key={`ring-${i}`}
                    className="absolute top-1/2 left-1/2 rounded-full border border-yellow-500/10"
                    style={{
                      width: `${ring.size}px`,
                      height: `${ring.size}px`,
                      transform: `translate(-50%, -50%) rotateX(${ring.rotateX}deg) rotateY(${ring.rotateY}deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  />
                ))}

                {/* Central glow point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-400 blur-[2px] shadow-lg shadow-yellow-400/50" />
              </div>
            </div>

            {/* Value cards */}
            {valueCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className={`absolute transition-all duration-1000 ease-out ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    left: `${card.x}%`,
                    top: `${card.y}%`,
                    transform: "translate(-50%, -50%)",
                    transitionDelay: `${600 + card.delay}ms`,
                    animationName: mounted ? "float-card" : "none",
                    animationDuration: `${3 + i * 0.5}s`,
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: `${i * 0.7}s`,
                  }}
                >
                  <div className="px-4 py-3 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-yellow-500/[0.05] hover:bg-white/[0.07] hover:border-yellow-500/20 transition-all duration-300 cursor-default">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-yellow-500/15 flex items-center justify-center">
                        <Icon className="h-3.5 w-3.5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-white/70 tracking-wide">{card.label}</p>
                        <p className="text-[9px] text-white/30">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile — simplified */}
          <div className="lg:hidden flex flex-col items-center gap-6 mt-8">
            {/* Mobile 3D glow */}
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-[60px]" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/10 backdrop-blur-sm border border-yellow-400/10 rotate-12" />
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-amber-500/15 to-yellow-600/5 backdrop-blur-sm border border-amber-400/10 -rotate-6" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-400 blur-[2px]" />
            </div>

            {/* Mobile value cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {valueCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="px-3 py-2.5 rounded-xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-yellow-500/15 flex items-center justify-center">
                        <Icon className="h-3 w-3 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-[9px] font-semibold text-white/70 tracking-wide">{card.label}</p>
                        <p className="text-[8px] text-white/30">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white/15 tracking-[0.3em]">
        SCROLL
      </div>
    </section>
  );
}
