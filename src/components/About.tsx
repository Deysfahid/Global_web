"use client";

import { Globe, ShoppingBag, Megaphone, Search, Share2, Receipt, Calculator, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const capabilities = [
  { icon: Globe, label: "Websites" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Search, label: "SEO" },
  { icon: Share2, label: "Social Media" },
  { icon: Receipt, label: "Tax & GST" },
  { icon: Calculator, label: "Accounting" },
  { icon: Building2, label: "Business Registration" },
];

export default function About() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative" id="about">
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.03] blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Headline & description */}
          <ScrollReveal>
            <div>
              <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">About</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1] mb-8">
                <span className="block">WE BUILD</span>
                <span className="block">BUSINESSES</span>
                <span className="block text-white/30">FOR THE</span>
                <span className="block text-white/30">DIGITAL WORLD.</span>
              </h2>
              <div className="space-y-4 text-sm text-white/30 leading-relaxed max-w-md">
                <p>
                  GLOBAL is a full-service digital business agency. We help businesses establish their online presence, grow their reach, and manage the operational side of running a business.
                </p>
                <p>
                  From building modern websites and e-commerce stores to running marketing campaigns, managing tax compliance, and handling business registration — we provide the tools and services businesses need to succeed.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Capabilities grid */}
          <ScrollReveal delay={1}>
            <div>
              <h3 className="text-[11px] font-medium text-white/15 tracking-[0.2em] uppercase mb-6">
                WHAT WE COVER
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={cap.label}
                      className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-yellow-500/15 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                        <Icon className="h-4 w-4 text-yellow-400/50 group-hover:text-yellow-300 transition-colors" />
                      </div>
                      <span className="text-xs font-medium text-white/50 group-hover:text-white/70 transition-colors">
                        {cap.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
