"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    number: "01",
    name: "MEDCARE",
    industry: "Healthcare",
    description: "A modern clinic website with appointment scheduling, doctor profiles and patient resources.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    accentColor: "bg-blue-500",
    uiColor: "bg-blue-50",
    textColor: "text-blue-300",
  },
  {
    number: "02",
    name: "URBAN BREW",
    industry: "Restaurant",
    description: "A warm, inviting café website with menus, location details and online ordering.",
    gradient: "from-amber-500/10 to-orange-500/10",
    accentColor: "bg-amber-500",
    uiColor: "bg-amber-50",
    textColor: "text-amber-300",
  },
  {
    number: "03",
    name: "FRESHMART",
    industry: "Retail",
    description: "A clean e-commerce storefront with product browsing, filtering and checkout.",
    gradient: "from-violet-500/10 to-purple-500/10",
    accentColor: "bg-violet-500",
    uiColor: "bg-violet-50",
    textColor: "text-violet-300",
  },
  {
    number: "04",
    name: "PRIME",
    industry: "Real Estate",
    description: "A professional property website with listings, search and agent profiles.",
    gradient: "from-emerald-500/10 to-green-500/10",
    accentColor: "bg-emerald-500",
    uiColor: "bg-emerald-50",
    textColor: "text-emerald-300",
  },
  {
    number: "05",
    name: "FITZONE",
    industry: "Fitness",
    description: "A dynamic fitness website with class schedules, memberships and trainer bios.",
    gradient: "from-red-500/10 to-orange-500/10",
    accentColor: "bg-red-500",
    uiColor: "bg-red-50",
    textColor: "text-red-300",
  },
  {
    number: "06",
    name: "STYLE STUDIO",
    industry: "Beauty",
    description: "An elegant salon website with service menus, booking and a gallery of work.",
    gradient: "from-pink-500/10 to-rose-500/10",
    accentColor: "bg-pink-500",
    uiColor: "bg-pink-50",
    textColor: "text-pink-300",
  },
];

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#050505]" id="portfolio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-24">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              OUR WORK
            </h2>
            <p className="mt-4 text-white/30 text-sm max-w-md">
              Digital experiences built for different businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name}>
              <div
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Preview */}
                <div className={`${i % 2 === 1 ? "lg:col-start-7 lg:col-span-6" : "lg:col-span-6"} relative group`}>
                  <div
                    className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl border border-white/[0.06] overflow-hidden aspect-[4/3] flex items-center justify-center p-8 hover:border-white/10 transition-all duration-500`}
                  >
                    {/* Mock website preview */}
                    <div className="w-full max-w-sm bg-white/[0.95] rounded-xl shadow-2xl shadow-black/20 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                      <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 border-b border-gray-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        <div className="mx-auto h-1 w-20 bg-gray-100 rounded" />
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded ${project.accentColor}`} />
                          <div className="h-1.5 w-16 bg-gray-200 rounded" />
                        </div>
                        <div className={`h-20 ${project.uiColor} rounded-lg`} />
                        <div className="space-y-1.5">
                          <div className="h-1.5 w-3/4 bg-gray-100 rounded" />
                          <div className="h-1.5 w-1/2 bg-gray-100 rounded" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className={`h-8 ${project.uiColor} rounded`} />
                          <div className={`h-8 ${project.uiColor} rounded`} />
                          <div className={`h-8 ${project.uiColor} rounded`} />
                        </div>
                      </div>
                    </div>

                    {/* Demo badge */}
                    <span className="absolute top-4 right-4 px-2.5 py-1 text-[9px] font-medium tracking-[0.15em] uppercase text-white/40 border border-white/10 rounded-full">
                      Demo Concept
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:col-span-5 lg:row-start-1" : "lg:col-span-5 lg:col-start-8"} flex flex-col justify-center`}>
                  <span className={`text-xs font-mono ${project.textColor} mb-4`}>
                    {project.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-4">
                    {project.industry}
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-sm">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-medium text-white/20 tracking-wide">
                    VIEW PROJECT <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
