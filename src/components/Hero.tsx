"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ─── Mini Website UIs ─── */

function MedicalUI() {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-2.5 flex flex-col">
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-[4px] text-white font-bold">+</span>
        </div>
        <span className="text-[7px] font-bold tracking-wide">MEDCARE</span>
        <div className="ml-auto flex gap-2">
          <span className="text-[5px] text-gray-400">Services</span>
          <span className="text-[5px] text-gray-400">Doctors</span>
          <span className="text-[5px] text-gray-400">Contact</span>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-md p-2 flex gap-2">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[6px] text-blue-500 font-semibold mb-0.5">WELLNESS CLINIC</p>
          <p className="text-[9px] font-bold leading-tight mb-1">Your Health,<br/>Our Priority</p>
          <p className="text-[5px] text-gray-400 mb-1.5 leading-relaxed">Expert care with a personal touch. Book your visit today.</p>
          <div className="h-3.5 w-16 bg-blue-500 rounded-full text-[5px] text-white flex items-center justify-center font-semibold">Book Appointment</div>
        </div>
        <div className="w-[70px] flex flex-col gap-1">
          <div className="bg-white rounded p-1 shadow-sm">
            <div className="flex items-center gap-1 mb-0.5">
              <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-[5px]">👨‍⚕</span>
              </div>
              <div>
                <p className="text-[5px] font-semibold">Dr. Sharma</p>
                <p className="text-[4px] text-gray-400">Cardiology</p>
              </div>
            </div>
            <div className="h-2 w-full bg-blue-50 rounded text-[4px] text-blue-500 flex items-center justify-center">Available</div>
          </div>
          <div className="bg-white rounded p-1 shadow-sm">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-cyan-100 flex items-center justify-center">
                <span className="text-[5px]">👩‍⚕</span>
              </div>
              <div>
                <p className="text-[5px] font-semibold">Dr. Patel</p>
                <p className="text-[4px] text-gray-400">Pediatrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 mt-1.5">
        <div className="flex-1 bg-blue-50 rounded p-1 text-center">
          <p className="text-[8px] font-bold text-blue-600">150+</p>
          <p className="text-[4px] text-gray-400">Patients</p>
        </div>
        <div className="flex-1 bg-cyan-50 rounded p-1 text-center">
          <p className="text-[8px] font-bold text-cyan-600">12</p>
          <p className="text-[4px] text-gray-400">Doctors</p>
        </div>
        <div className="flex-1 bg-teal-50 rounded p-1 text-center">
          <p className="text-[8px] font-bold text-teal-600">4.9★</p>
          <p className="text-[4px] text-gray-400">Rating</p>
        </div>
      </div>
    </div>
  );
}

function RestaurantUI() {
  return (
    <div className="w-full h-full bg-[#1a1612] text-white p-2.5 flex flex-col">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[7px] font-serif tracking-[0.15em] text-amber-200">URBAN BREW</span>
        <div className="flex gap-2">
          <span className="text-[5px] text-amber-200/40">Menu</span>
          <span className="text-[5px] text-amber-200/40">Locations</span>
          <span className="text-[5px] text-amber-200/40">Order</span>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-amber-900/40 to-orange-900/30 rounded-md p-2 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-1 right-1 w-10 h-10 rounded-full bg-amber-700/30 blur-sm" />
        <p className="text-[5px] text-amber-400/70 font-medium tracking-widest mb-0.5">ARTISAN COFFEE</p>
        <p className="text-[9px] font-serif leading-tight mb-1">Crafted for<br/>Your Everyday</p>
        <p className="text-[4.5px] text-amber-100/30 mb-1.5">Single-origin beans, roasted fresh daily.</p>
        <div className="flex gap-1.5">
          <div className="h-3 px-2 bg-amber-600 rounded-full text-[5px] text-white flex items-center justify-center font-medium">View Menu</div>
          <div className="h-3 px-2 bg-amber-200/10 rounded-full text-[5px] text-amber-200/60 flex items-center justify-center">Order Now</div>
        </div>
      </div>
      <div className="flex gap-1 mt-1.5">
        <div className="flex-1 bg-amber-900/30 rounded p-1">
          <div className="w-full h-5 bg-amber-800/40 rounded mb-1" />
          <p className="text-[5px] text-amber-200/70 font-medium">Espresso</p>
          <p className="text-[4px] text-amber-200/30">₹180</p>
        </div>
        <div className="flex-1 bg-amber-900/30 rounded p-1">
          <div className="w-full h-5 bg-orange-800/40 rounded mb-1" />
          <p className="text-[5px] text-amber-200/70 font-medium">Cold Brew</p>
          <p className="text-[4px] text-amber-200/30">₹220</p>
        </div>
        <div className="flex-1 bg-amber-900/30 rounded p-1">
          <div className="w-full h-5 bg-yellow-800/40 rounded mb-1" />
          <p className="text-[5px] text-amber-200/70 font-medium">Latte</p>
          <p className="text-[4px] text-amber-200/30">₹200</p>
        </div>
      </div>
    </div>
  );
}

function RetailUI() {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-2.5 flex flex-col">
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-[7px] font-bold tracking-wide text-emerald-700">FRESHMART</span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-2 w-12 bg-gray-100 rounded-full" />
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 flex items-center justify-center">
            <span className="text-[5px]">🛒</span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-md p-1.5 mb-1.5 flex items-center gap-2">
        <div className="flex-1">
          <p className="text-[5px] text-emerald-600 font-semibold mb-0.5">FRESH DEALS</p>
          <p className="text-[7px] font-bold leading-tight">Farm Fresh<br/>Delivered Daily</p>
          <div className="h-2.5 w-10 bg-emerald-500 rounded-full text-[4px] text-white flex items-center justify-center font-medium mt-1">Shop Now</div>
        </div>
        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-[14px]">🥬</div>
      </div>
      <div className="grid grid-cols-3 gap-1 flex-1">
        <div className="bg-orange-50 rounded p-1 flex flex-col items-center">
          <div className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-[10px] mb-0.5">🍊</div>
          <p className="text-[5px] font-medium">Oranges</p>
          <p className="text-[5px] text-emerald-600 font-bold">₹80/kg</p>
        </div>
        <div className="bg-red-50 rounded p-1 flex flex-col items-center">
          <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-[10px] mb-0.5">🍅</div>
          <p className="text-[5px] font-medium">Tomatoes</p>
          <p className="text-[5px] text-emerald-600 font-bold">₹40/kg</p>
        </div>
        <div className="bg-yellow-50 rounded p-1 flex flex-col items-center">
          <div className="w-6 h-6 rounded bg-yellow-100 flex items-center justify-center text-[10px] mb-0.5">🍌</div>
          <p className="text-[5px] font-medium">Bananas</p>
          <p className="text-[5px] text-emerald-600 font-bold">₹50/dz</p>
        </div>
      </div>
    </div>
  );
}

function RealEstateUI() {
  return (
    <div className="w-full h-full bg-[#0d1117] text-white p-2.5 flex flex-col">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[7px] font-semibold tracking-[0.1em] text-emerald-300">PRIME</span>
        <div className="flex gap-2">
          <span className="text-[5px] text-white/30">Dashboard</span>
          <span className="text-[5px] text-white/30">Analytics</span>
          <span className="text-[5px] text-white/30">Reports</span>
        </div>
      </div>
      <div className="flex gap-1 mb-1.5">
        <div className="flex-1 bg-emerald-900/30 rounded p-1.5">
          <p className="text-[4px] text-emerald-400/50 mb-0.5">REVENUE</p>
          <p className="text-[9px] font-bold text-emerald-300">₹24.5L</p>
          <p className="text-[4px] text-emerald-400/60">↑ 12.5%</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded p-1.5">
          <p className="text-[4px] text-white/30 mb-0.5">CLIENTS</p>
          <p className="text-[9px] font-bold">1,248</p>
          <p className="text-[4px] text-emerald-400/60">↑ 8.3%</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded p-1.5">
          <p className="text-[4px] text-white/30 mb-0.5">GROWTH</p>
          <p className="text-[9px] font-bold">94%</p>
          <p className="text-[4px] text-emerald-400/60">↑ 3.1%</p>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-emerald-900/20 to-green-900/10 rounded-md p-2 flex flex-col justify-center">
        <p className="text-[9px] font-bold leading-tight mb-1">Scale Your<br/>Business Forward</p>
        <p className="text-[4.5px] text-white/25 mb-1.5">Data-driven insights for modern enterprises.</p>
        <div className="flex gap-1">
          <div className="h-2.5 px-2 bg-emerald-500 rounded-full text-[4.5px] text-white flex items-center justify-center font-medium">Get Started</div>
          <div className="h-2.5 px-2 bg-white/[0.06] rounded-full text-[4.5px] text-white/40 flex items-center justify-center">Learn More</div>
        </div>
      </div>
    </div>
  );
}

function FitnessUI() {
  return (
    <div className="w-full h-full bg-[#111] text-white p-2.5 flex flex-col">
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="w-3 h-3 rounded bg-red-500 flex items-center justify-center">
          <span className="text-[5px] font-black">F</span>
        </div>
        <span className="text-[7px] font-black tracking-wider">FITZONE</span>
        <div className="ml-auto flex gap-2">
          <span className="text-[5px] text-white/30">Programs</span>
          <span className="text-[5px] text-white/30">Trainers</span>
          <span className="text-[5px] text-white/30">Join</span>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-md p-2 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-14 h-14 bg-red-500/10 rounded-full blur-md" />
        <p className="text-[5px] text-red-400/60 font-bold tracking-widest mb-0.5">TRANSFORM YOUR BODY</p>
        <p className="text-[10px] font-black leading-none mb-0.5">Train. Move.</p>
        <p className="text-[10px] font-black leading-none text-red-400 mb-1.5">Transform.</p>
        <div className="flex gap-1.5">
          <div className="h-3 px-2 bg-red-600 rounded-full text-[5px] text-white flex items-center justify-center font-bold">Start Training</div>
          <div className="h-3 px-2 bg-white/[0.06] rounded-full text-[5px] text-white/40 flex items-center justify-center">View Plans</div>
        </div>
      </div>
      <div className="flex gap-1 mt-1.5">
        <div className="flex-1 bg-white/[0.04] rounded p-1">
          <p className="text-[5px] text-red-400 font-bold">HIIT</p>
          <p className="text-[4px] text-white/20">45 min</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded p-1">
          <p className="text-[5px] text-orange-400 font-bold">Strength</p>
          <p className="text-[4px] text-white/20">60 min</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded p-1">
          <p className="text-[5px] text-yellow-400 font-bold">Yoga</p>
          <p className="text-[4px] text-white/20">30 min</p>
        </div>
      </div>
    </div>
  );
}

function StudioUI() {
  return (
    <div className="w-full h-full bg-[#faf8f5] text-gray-900 p-2.5 flex flex-col">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[7px] font-light tracking-[0.2em] text-gray-800">ELITE STUDIO</span>
        <div className="flex gap-2">
          <span className="text-[5px] text-gray-400">Work</span>
          <span className="text-[5px] text-gray-400">About</span>
          <span className="text-[5px] text-gray-400">Contact</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex gap-1 mb-1">
          <p className="text-[5px] text-gray-400 tracking-widest">SELECTED WORKS</p>
        </div>
        <div className="grid grid-cols-3 gap-1 flex-1">
          <div className="bg-gradient-to-br from-rose-100 to-pink-50 rounded overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-1">
              <p className="text-[4px] font-medium text-gray-600">Branding</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-violet-100 to-indigo-50 rounded overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-1">
              <p className="text-[4px] font-medium text-gray-600">Web</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-orange-50 rounded overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-1">
              <p className="text-[4px] font-medium text-gray-600">Identity</p>
            </div>
          </div>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <div>
            <p className="text-[7px] font-semibold">We Create Bold</p>
            <p className="text-[7px] font-semibold text-gray-400">Digital Experiences</p>
          </div>
          <div className="h-3 px-2 bg-gray-900 rounded-full text-[4.5px] text-white flex items-center justify-center font-medium">Explore Work</div>
        </div>
      </div>
    </div>
  );
}

function CitylifeUI() {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-2.5 flex flex-col">
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-[7px] font-bold tracking-wide text-gray-800">CITYLIFE</span>
        <div className="ml-auto flex gap-2">
          <span className="text-[5px] text-gray-400">Explore</span>
          <span className="text-[5px] text-gray-400">Events</span>
          <span className="text-[5px] text-gray-400">Stays</span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-md p-1.5 mb-1.5 flex items-center gap-2">
        <div className="flex-1">
          <p className="text-[5px] text-indigo-500 font-semibold">DISCOVER</p>
          <p className="text-[8px] font-bold leading-tight">Your City,<br/>Reimagined</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-[12px]">🏙️</div>
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-amber-50 rounded p-1 flex flex-col">
          <div className="w-full h-5 bg-amber-100 rounded mb-0.5 flex items-center justify-center text-[8px]">🍽️</div>
          <p className="text-[5px] font-semibold">Top Dining</p>
          <p className="text-[4px] text-gray-400">24 places</p>
        </div>
        <div className="bg-sky-50 rounded p-1 flex flex-col">
          <div className="w-full h-5 bg-sky-100 rounded mb-0.5 flex items-center justify-center text-[8px]">🎭</div>
          <p className="text-[5px] font-semibold">Events</p>
          <p className="text-[4px] text-gray-400">12 this week</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen definitions ─── */

interface ScreenDef {
  id: string;
  label: string;
  x: number; // % offset from center
  y: number; // % offset from center
  z: number; // px depth
  rotateY: number;
  rotateX: number;
  scale: number;
  content: React.ReactNode;
}

const screens: ScreenDef[] = [
  // Closest — bottom-left of the right area
  { id: "medical",    label: "Healthcare",  x: -8,  y: 18,  z: 90,   rotateY: 25,  rotateX: -5,  scale: 1.3,  content: <MedicalUI /> },
  { id: "restaurant", label: "Restaurant",  x: -2,  y: 6,   z: 45,   rotateY: 22,  rotateX: -4,  scale: 1.15, content: <RestaurantUI /> },
  { id: "retail",     label: "Retail",      x: 4,   y: -4,  z: 5,    rotateY: 20,  rotateX: -3,  scale: 1.02, content: <RetailUI /> },
  // Mid
  { id: "realestate", label: "Real Estate", x: 10,  y: -13, z: -30,  rotateY: 18,  rotateX: -6,  scale: 0.9,  content: <RealEstateUI /> },
  { id: "fitness",    label: "Fitness",     x: 16,  y: -21, z: -60,  rotateY: 22,  rotateX: -4,  scale: 0.8,  content: <FitnessUI /> },
  // Far — top-right
  { id: "studio",     label: "Design Studio", x: 21,  y: -28, z: -85,  rotateY: 24,  rotateX: -5,  scale: 0.7,  content: <StudioUI /> },
  { id: "citylife",   label: "Lifestyle",     x: 26,  y: -34, z: -110, rotateY: 26,  rotateX: -3,  scale: 0.6,  content: <CitylifeUI /> },
];

const CARD_W = 280;
const CARD_H = 200;

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animMouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animate = useCallback(() => {
    const lerp = 0.08;
    animMouse.current.x += (mouseRef.current.x - animMouse.current.x) * lerp;
    animMouse.current.y += (mouseRef.current.y - animMouse.current.y) * lerp;

    const scene = sceneRef.current;
    if (scene) {
      scene.style.transform =
        `rotateY(${animMouse.current.x * 5}deg) rotateX(${animMouse.current.y * -3}deg)`;
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-white/[0.01] blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/[0.015] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-32 lg:py-0">
          {/* Left — Copy */}
          <div
            className={`lg:col-span-4 relative z-10 transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.92] tracking-tight mb-6">
              <span className="block text-white">WE BUILD</span>
              <span className="block text-white">WEBSITES</span>
              <span className="block text-white/25">FOR BUSINESS.</span>
            </h1>
            <p className="text-white/30 text-sm leading-relaxed max-w-[280px] mb-10">
              Modern digital experiences designed around your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium text-black bg-white rounded-full hover:bg-white/90 transition-all"
              >
                START A PROJECT
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium text-white/40 hover:text-white/70 transition-colors"
              >
                VIEW OUR WORK
              </Link>
            </div>
          </div>

          {/* Desktop 3D Scene */}
          <div
            className="hidden lg:block lg:col-span-8 relative h-[650px]"
            style={{ perspective: "900px", perspectiveOrigin: "30% 50%" }}
          >
            <div
              ref={sceneRef}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              {screens.map((screen, i) => {
                const isHovered = hoveredId === screen.id;
                return (
                  <div
                    key={screen.id}
                    className="absolute cursor-pointer"
                    style={{
                      width: `${CARD_W}px`,
                      height: `${CARD_H}px`,
                      left: `calc(45% + ${screen.x}%)`,
                      top: `calc(50% + ${screen.y}%)`,
                      marginLeft: `${-CARD_W / 2}px`,
                      marginTop: `${-CARD_H / 2}px`,
                      transform: `
                        translate3d(0, 0, ${screen.z + (isHovered ? 50 : 0)}px)
                        rotateY(${screen.rotateY}deg)
                        rotateX(${screen.rotateX}deg)
                        scale(${screen.scale * (isHovered ? 1.08 : 1)})
                      `,
                      transformStyle: "preserve-3d",
                      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s ease-out",
                      opacity: mounted ? 1 : 0,
                      transitionDelay: mounted ? `${i * 120}ms` : "0ms",
                      zIndex: isHovered ? 50 : screens.length - i,
                    }}
                    onMouseEnter={() => setHoveredId(screen.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className={`w-full h-full rounded-lg overflow-hidden transition-all duration-500 ${
                      isHovered
                        ? "shadow-2xl shadow-white/[0.08] ring-1 ring-white/20"
                        : "shadow-xl shadow-black/40 ring-1 ring-white/[0.06]"
                    }`}>
                      <div className="flex items-center gap-1 px-2.5 py-1.5 bg-black/20 backdrop-blur-sm border-b border-white/[0.04]">
                        <div className="w-1 h-1 rounded-full bg-white/15" />
                        <div className="w-1 h-1 rounded-full bg-white/15" />
                        <div className="w-1 h-1 rounded-full bg-white/15" />
                        <div className="mx-auto h-[3px] w-12 bg-white/[0.04] rounded" />
                      </div>
                      <div className="w-full h-[calc(100%-22px)] overflow-hidden">
                        {screen.content}
                      </div>
                    </div>
                    <div className={`absolute -bottom-6 left-0 right-0 text-center transition-all duration-300 ${
                      isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                    }`}>
                      <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase font-medium">
                        {screen.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
                      background: `linear-gradient(120deg, rgba(255,255,255,${isHovered ? 0.07 : 0.03}) 0%, transparent 50%)`,
                    }} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile 3D Scene — simplified cascade */}
          <div
            className="lg:hidden relative h-[420px] sm:h-[480px] mt-4"
            style={{ perspective: "800px", perspectiveOrigin: "50% 40%" }}
          >
            {screens.slice(0, 5).map((screen, i) => (
              <div
                key={screen.id}
                className="absolute"
                style={{
                  width: `${CARD_W * 0.85}px`,
                  height: `${CARD_H * 0.85}px`,
                  left: `calc(30% + ${i * 8}%)`,
                  top: `calc(70% - ${i * 14}%)`,
                  transform: `
                    rotateY(${screen.rotateY * 0.8}deg)
                    rotateX(${screen.rotateX * 0.6}deg)
                    scale(${1.1 - i * 0.1})
                  `,
                  transformStyle: "preserve-3d",
                  transition: "opacity 0.8s ease-out",
                  opacity: mounted ? 1 : 0,
                  transitionDelay: `${i * 150}ms`,
                  zIndex: 10 - i,
                }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-xl shadow-black/40 ring-1 ring-white/[0.06]">
                  <div className="flex items-center gap-1 px-2.5 py-1.5 bg-black/20 border-b border-white/[0.04]">
                    <div className="w-1 h-1 rounded-full bg-white/15" />
                    <div className="w-1 h-1 rounded-full bg-white/15" />
                    <div className="w-1 h-1 rounded-full bg-white/15" />
                  </div>
                  <div className="w-full h-[calc(100%-22px)] overflow-hidden">
                    {screen.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[1.2s] ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[9px] tracking-[0.25em] text-white/15 uppercase">Scroll</span>
        <div className="w-px h-6 bg-gradient-to-b from-white/15 to-transparent" />
      </div>
    </section>
  );
}
