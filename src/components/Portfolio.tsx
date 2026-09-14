"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/data/projects";
import { getProjectPreview } from "./ProjectPreviews";

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
              <Link
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div
                  className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Preview */}
                  <div className={`${i % 2 === 1 ? "lg:col-start-7 lg:col-span-6" : "lg:col-span-6"} relative`}>
                    <div
                      className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl border border-white/[0.06] overflow-hidden aspect-[4/3] flex items-center justify-center p-6 sm:p-8 group-hover:border-white/[0.12] transition-all duration-500`}
                    >
                      <div className="w-full max-w-md bg-white/[0.95] rounded-xl shadow-2xl shadow-black/20 overflow-hidden group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                        <div className="flex items-center gap-1 px-3 py-2 bg-gray-50/80 border-b border-gray-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-300/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-300/60" />
                          <div className="w-1.5 h-1.5 rounded-full bg-green-300/60" />
                          <div className="mx-auto h-1.5 w-24 bg-gray-100 rounded-full" />
                        </div>
                        <div className="w-full aspect-[5/3.5] overflow-hidden">
                          {getProjectPreview(project.slug)}
                        </div>
                      </div>
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
                    <span className="inline-flex items-center gap-2 text-[12px] font-medium text-white/20 tracking-wide group-hover:text-white/50 transition-colors duration-300">
                      VIEW PROJECT
                      <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
