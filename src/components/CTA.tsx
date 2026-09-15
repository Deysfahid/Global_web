"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CTAProps {
  heading: string;
  buttonText: string;
  variant?: "light" | "dark";
}

export default function CTA({ heading, buttonText }: CTAProps) {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-12 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-yellow-500/[0.06] blur-[80px]" />

            <h2 className="text-xl sm:text-2xl font-semibold text-white/60 tracking-tight max-w-md relative">
              {heading}
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full hover:from-yellow-300 hover:to-amber-300 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 shrink-0 relative"
            >
              {buttonText}
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
