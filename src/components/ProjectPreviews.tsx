import type { ReactNode } from "react";

function MedcarePreview() {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-4 flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">+</span>
        </div>
        <span className="text-[11px] font-bold tracking-wide">MEDCARE</span>
        <div className="ml-auto flex gap-3">
          <span className="text-[9px] text-gray-400">Services</span>
          <span className="text-[9px] text-gray-400">Doctors</span>
          <span className="text-[9px] text-gray-400">Contact</span>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 flex gap-3">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[9px] text-blue-500 font-semibold mb-1">WELLNESS CLINIC</p>
          <p className="text-[14px] font-bold leading-tight mb-1.5">Your Health,<br/>Our Priority</p>
          <p className="text-[8px] text-gray-400 mb-2 leading-relaxed">Expert care with a personal touch. Book your appointment today.</p>
          <div className="h-5 w-24 bg-blue-500 rounded-full text-[8px] text-white flex items-center justify-center font-semibold">Book Appointment</div>
        </div>
        <div className="w-[100px] flex flex-col gap-1.5">
          <div className="bg-white rounded-md p-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">👨‍⚕</div>
              <div>
                <p className="text-[8px] font-semibold">Dr. Sharma</p>
                <p className="text-[7px] text-gray-400">Cardiology</p>
              </div>
            </div>
            <div className="h-3 w-full bg-blue-50 rounded text-[7px] text-blue-500 flex items-center justify-center">Available</div>
          </div>
          <div className="bg-white rounded-md p-1.5 shadow-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-[10px]">👩‍⚕</div>
              <div>
                <p className="text-[8px] font-semibold">Dr. Patel</p>
                <p className="text-[7px] text-gray-400">Pediatrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 mt-2">
        <div className="flex-1 bg-blue-50 rounded-md p-1.5 text-center">
          <p className="text-[12px] font-bold text-blue-600">150+</p>
          <p className="text-[7px] text-gray-400">Patients</p>
        </div>
        <div className="flex-1 bg-cyan-50 rounded-md p-1.5 text-center">
          <p className="text-[12px] font-bold text-cyan-600">12</p>
          <p className="text-[7px] text-gray-400">Doctors</p>
        </div>
        <div className="flex-1 bg-teal-50 rounded-md p-1.5 text-center">
          <p className="text-[12px] font-bold text-teal-600">4.9★</p>
          <p className="text-[7px] text-gray-400">Rating</p>
        </div>
      </div>
    </div>
  );
}

function SkylineRealtyPreview() {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-4 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold tracking-wide text-indigo-700">SKYLINE REALTY</span>
        <div className="flex gap-3">
          <span className="text-[9px] text-gray-400">Listings</span>
          <span className="text-[9px] text-gray-400">Agents</span>
          <span className="text-[9px] text-gray-400">Contact</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-slate-100 to-indigo-50 rounded-lg p-3 mb-2 flex-1 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-1 right-1 w-14 h-14 rounded-lg bg-indigo-100 flex items-center justify-center text-[20px]">🏢</div>
        <p className="text-[9px] text-indigo-500 font-semibold tracking-widest mb-1">FEATURED</p>
        <p className="text-[14px] font-bold leading-tight mb-1">Find Your<br/>Dream Home</p>
        <p className="text-[8px] text-gray-400 mb-2">Premium properties across prime locations.</p>
        <div className="flex gap-2">
          <div className="h-5 px-3 bg-indigo-600 rounded-full text-[8px] text-white flex items-center justify-center font-semibold">Browse Listings</div>
          <div className="h-5 px-3 bg-indigo-50 border border-indigo-200 rounded-full text-[8px] text-indigo-600 flex items-center justify-center">Virtual Tour</div>
        </div>
      </div>
      <div className="flex gap-1.5 mt-1">
        <div className="flex-1 bg-slate-50 rounded-md p-1.5 text-center">
          <p className="text-[11px] font-bold text-indigo-600">3 BHK</p>
          <p className="text-[7px] text-gray-400">₹85L</p>
        </div>
        <div className="flex-1 bg-slate-50 rounded-md p-1.5 text-center">
          <p className="text-[11px] font-bold text-slate-600">2 BHK</p>
          <p className="text-[7px] text-gray-400">₹52L</p>
        </div>
        <div className="flex-1 bg-slate-50 rounded-md p-1.5 text-center">
          <p className="text-[11px] font-bold text-slate-600">Villa</p>
          <p className="text-[7px] text-gray-400">₹1.2Cr</p>
        </div>
      </div>
    </div>
  );
}

function FreshmartPreview() {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-4 flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[11px] font-bold tracking-wide text-emerald-700">FRESHMART</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="h-3.5 w-20 bg-gray-100 rounded-full" />
          <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-[10px]">🛒</div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2.5 mb-2 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-[9px] text-emerald-600 font-semibold mb-0.5">FRESH DEALS</p>
          <p className="text-[12px] font-bold leading-tight">Farm Fresh<br/>Delivered Daily</p>
          <div className="h-4 w-16 bg-emerald-500 rounded-full text-[7px] text-white flex items-center justify-center font-medium mt-1.5">Shop Now</div>
        </div>
        <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center text-[22px]">🥬</div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        <div className="bg-orange-50 rounded-md p-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-[16px] mb-1">🍊</div>
          <p className="text-[8px] font-medium">Oranges</p>
          <p className="text-[8px] text-emerald-600 font-bold">₹80/kg</p>
        </div>
        <div className="bg-red-50 rounded-md p-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-[16px] mb-1">🍅</div>
          <p className="text-[8px] font-medium">Tomatoes</p>
          <p className="text-[8px] text-emerald-600 font-bold">₹40/kg</p>
        </div>
        <div className="bg-yellow-50 rounded-md p-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center text-[16px] mb-1">🍌</div>
          <p className="text-[8px] font-medium">Bananas</p>
          <p className="text-[8px] text-emerald-600 font-bold">₹50/dz</p>
        </div>
      </div>
    </div>
  );
}

function PrimePreview() {
  return (
    <div className="w-full h-full bg-[#0d1117] text-white p-4 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-semibold tracking-[0.1em] text-emerald-300">PRIME</span>
        <div className="flex gap-3">
          <span className="text-[9px] text-white/30">Dashboard</span>
          <span className="text-[9px] text-white/30">Analytics</span>
          <span className="text-[9px] text-white/30">Reports</span>
        </div>
      </div>
      <div className="flex gap-1.5 mb-2">
        <div className="flex-1 bg-emerald-900/30 rounded-md p-2">
          <p className="text-[7px] text-emerald-400/50 mb-0.5">REVENUE</p>
          <p className="text-[14px] font-bold text-emerald-300">₹24.5L</p>
          <p className="text-[7px] text-emerald-400/60">↑ 12.5%</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded-md p-2">
          <p className="text-[7px] text-white/30 mb-0.5">CLIENTS</p>
          <p className="text-[14px] font-bold">1,248</p>
          <p className="text-[7px] text-emerald-400/60">↑ 8.3%</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded-md p-2">
          <p className="text-[7px] text-white/30 mb-0.5">GROWTH</p>
          <p className="text-[14px] font-bold">94%</p>
          <p className="text-[7px] text-emerald-400/60">↑ 3.1%</p>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-emerald-900/20 to-green-900/10 rounded-lg p-3 flex flex-col justify-center">
        <p className="text-[14px] font-bold leading-tight mb-1.5">Scale Your<br/>Business Forward</p>
        <p className="text-[8px] text-white/25 mb-2">Data-driven insights for modern enterprises.</p>
        <div className="flex gap-2">
          <div className="h-4.5 px-3 bg-emerald-500 rounded-full text-[8px] text-white flex items-center justify-center font-medium">Get Started</div>
          <div className="h-4.5 px-3 bg-white/[0.06] rounded-full text-[8px] text-white/40 flex items-center justify-center">Learn More</div>
        </div>
      </div>
    </div>
  );
}

function FitzonePreview() {
  return (
    <div className="w-full h-full bg-[#111] text-white p-4 flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-red-500 flex items-center justify-center">
          <span className="text-[9px] font-black">F</span>
        </div>
        <span className="text-[11px] font-black tracking-wider">FITZONE</span>
        <div className="ml-auto flex gap-3">
          <span className="text-[9px] text-white/30">Programs</span>
          <span className="text-[9px] text-white/30">Trainers</span>
          <span className="text-[9px] text-white/30">Join</span>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-lg p-3 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-lg" />
        <p className="text-[9px] text-red-400/60 font-bold tracking-widest mb-1">TRANSFORM YOUR BODY</p>
        <p className="text-[16px] font-black leading-none mb-0.5">Train. Move.</p>
        <p className="text-[16px] font-black leading-none text-red-400 mb-2">Transform.</p>
        <div className="flex gap-2">
          <div className="h-5 px-3 bg-red-600 rounded-full text-[8px] text-white flex items-center justify-center font-bold">Start Training</div>
          <div className="h-5 px-3 bg-white/[0.06] rounded-full text-[8px] text-white/40 flex items-center justify-center">View Plans</div>
        </div>
      </div>
      <div className="flex gap-1.5 mt-2">
        <div className="flex-1 bg-white/[0.04] rounded-md p-1.5">
          <p className="text-[9px] text-red-400 font-bold">HIIT</p>
          <p className="text-[7px] text-white/20">45 min</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded-md p-1.5">
          <p className="text-[9px] text-orange-400 font-bold">Strength</p>
          <p className="text-[7px] text-white/20">60 min</p>
        </div>
        <div className="flex-1 bg-white/[0.04] rounded-md p-1.5">
          <p className="text-[9px] text-yellow-400 font-bold">Yoga</p>
          <p className="text-[7px] text-white/20">30 min</p>
        </div>
      </div>
    </div>
  );
}

function EliteStudioPreview() {
  return (
    <div className="w-full h-full bg-[#faf8f5] text-gray-900 p-4 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-light tracking-[0.2em] text-gray-800">ELITE STUDIO</span>
        <div className="flex gap-3">
          <span className="text-[9px] text-gray-400">Work</span>
          <span className="text-[9px] text-gray-400">About</span>
          <span className="text-[9px] text-gray-400">Contact</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-[9px] text-gray-400 tracking-widest mb-2">SELECTED WORKS</p>
        <div className="grid grid-cols-3 gap-1.5 flex-1">
          <div className="bg-gradient-to-br from-rose-100 to-pink-50 rounded-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-2">
              <p className="text-[8px] font-medium text-gray-600">Branding</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-violet-100 to-indigo-50 rounded-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-2">
              <p className="text-[8px] font-medium text-gray-600">Web</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-100 to-orange-50 rounded-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-2">
              <p className="text-[8px] font-medium text-gray-600">Identity</p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-[12px] font-semibold">We Create Bold</p>
            <p className="text-[12px] font-semibold text-gray-400">Digital Experiences</p>
          </div>
          <div className="h-5 px-3 bg-gray-900 rounded-full text-[8px] text-white flex items-center justify-center font-medium">Explore Work</div>
        </div>
      </div>
    </div>
  );
}

function CitylifePreview() {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-4 flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[11px] font-bold tracking-wide text-gray-800">CITYLIFE</span>
        <div className="ml-auto flex gap-3">
          <span className="text-[9px] text-gray-400">Explore</span>
          <span className="text-[9px] text-gray-400">Events</span>
          <span className="text-[9px] text-gray-400">Stays</span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-lg p-2.5 mb-2 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-[9px] text-indigo-500 font-semibold">DISCOVER</p>
          <p className="text-[13px] font-bold leading-tight">Your City,<br/>Reimagined</p>
        </div>
        <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-[18px]">🏙️</div>
      </div>
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        <div className="bg-amber-50 rounded-md p-2 flex flex-col">
          <div className="w-full h-8 bg-amber-100 rounded mb-1 flex items-center justify-center text-[14px]">🍽️</div>
          <p className="text-[9px] font-semibold">Top Dining</p>
          <p className="text-[7px] text-gray-400">24 places</p>
        </div>
        <div className="bg-sky-50 rounded-md p-2 flex flex-col">
          <div className="w-full h-8 bg-sky-100 rounded mb-1 flex items-center justify-center text-[14px]">🎭</div>
          <p className="text-[9px] font-semibold">Events</p>
          <p className="text-[7px] text-gray-400">12 this week</p>
        </div>
      </div>
    </div>
  );
}

const previewMap: Record<string, () => ReactNode> = {
  medcare: () => <MedcarePreview />,
  "skyline-realty": () => <SkylineRealtyPreview />,
  freshmart: () => <FreshmartPreview />,
  prime: () => <PrimePreview />,
  fitzone: () => <FitzonePreview />,
  "elite-studio": () => <EliteStudioPreview />,
  citylife: () => <CitylifePreview />,
};

export function getProjectPreview(slug: string): ReactNode {
  const factory = previewMap[slug];
  return factory ? factory() : null;
}
