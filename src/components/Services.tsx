"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { number: "01", title: "BUSINESS WEBSITES", description: "Professional websites designed around your business and customers." },
  { number: "02", title: "E-COMMERCE", description: "Online stores that make it easy for customers to browse and purchase." },
  { number: "03", title: "MEDICAL WEBSITES", description: "Modern websites for clinics, doctors, dentists and healthcare businesses." },
  { number: "04", title: "RESTAURANT WEBSITES", description: "Beautiful menus, contact information, location and online ordering." },
  { number: "05", title: "LANDING PAGES", description: "High-converting landing pages for campaigns and businesses." },
  { number: "06", title: "CUSTOM WEB APPLICATIONS", description: "Custom web solutions built around specific business requirements." },
  { number: "07", title: "WEBSITE REDESIGN", description: "Transform outdated websites into modern digital experiences." },
];

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
              <div
                className="group border-b border-white/[0.06] py-6 sm:py-8 cursor-pointer transition-all duration-300"
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
                        ? "text-white/60 translate-x-0.5 -translate-y-0.5"
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
