"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/services-data";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#050505]" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              WHAT WE BUILD.
            </h2>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/[0.06]">
          {services.map((service, i) => (
            <ScrollReveal key={service.number}>
              <Link
                href={`/services/${service.slug}`}
                className="group block border-b border-white/[0.06] py-6 sm:py-8 transition-all duration-300 hover:bg-white/[0.02]"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <span className="text-xs font-mono text-white/20 w-6">
                    {service.number}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight transition-colors duration-300 flex-1 ${
                      hoveredIndex === i ? "text-white" : "text-white/40"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-all duration-300 ${
                      hoveredIndex === i
                        ? "text-white/60 translate-x-1 -translate-y-1"
                        : "text-white/10"
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    hoveredIndex === i ? "max-h-16 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-white/30 pl-12 sm:pl-16 max-w-lg">
                    {service.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
