"use client";

import Link from "next/link";
import { ArrowUpRight, Globe, ShoppingBag, Megaphone, Search, Share2, Receipt, Calculator, Building2 } from "lucide-react";
import { services } from "@/data/services-data";
import ScrollReveal from "./ScrollReveal";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe, ShoppingBag, Megaphone, Search, Share2, Receipt, Calculator, Building2,
};

export default function Services() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative" id="services">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.03] blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">What we do</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              OUR SERVICES.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <ScrollReveal key={service.slug} delay={i}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-6 hover:bg-white/[0.06] hover:border-yellow-500/15 hover:shadow-lg hover:shadow-yellow-500/[0.05] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 blur-[40px] transition-all duration-700" />

                    <span className="text-[10px] font-mono text-white/15 mb-4 block relative">{service.number}</span>

                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/10 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/20 transition-all relative">
                      <Icon className="h-4.5 w-4.5 text-yellow-400/60 group-hover:text-yellow-300 transition-colors" />
                    </div>

                    <h3 className="text-sm font-semibold text-white/80 tracking-tight mb-2 group-hover:text-white transition-colors relative">
                      {service.title}
                    </h3>
                    <p className="text-[12px] text-white/25 leading-relaxed mb-4 group-hover:text-white/35 transition-colors relative">
                      {service.description}
                    </p>

                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/20 group-hover:text-yellow-400/60 transition-colors relative">
                      EXPLORE
                      <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
