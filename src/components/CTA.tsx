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
    <section className="py-24 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border border-white/[0.06] rounded-2xl p-12 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-white/60 tracking-tight max-w-md">
              {heading}
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium text-black bg-white rounded-full hover:bg-white/90 transition-all shrink-0"
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
