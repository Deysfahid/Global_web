"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectPreview } from "./ProjectPreviews";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative" id="work">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.03] blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              OUR WORK
            </h2>
            <p className="mt-4 text-white/30 text-sm max-w-md">
              Digital experiences built for real businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i}>
              <Link href={`/work/${project.slug}`} className="group block">
                {/* Preview */}
                <div className="rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-4 sm:p-6 hover:border-yellow-500/15 hover:shadow-lg hover:shadow-yellow-500/[0.03] transition-all duration-700 overflow-hidden">
                  <div
                    className={`relative bg-gradient-to-br ${project.gradient} rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-4 sm:p-8 lg:p-12`}
                  >
                    <div className="w-full max-w-lg bg-white/[0.95] rounded-xl shadow-2xl shadow-black/20 overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50/80 border-b border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-red-300/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-300/60" />
                        <div className="w-2 h-2 rounded-full bg-green-300/60" />
                        <div className="mx-auto h-2 w-32 bg-gray-100 rounded-full" />
                      </div>
                      <div className="w-full aspect-[5/3.5] overflow-hidden">
                        {getProjectPreview(project.slug)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <span className={`text-xs font-mono ${project.textColor} mb-2 block`}>
                      {project.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-white/70 tracking-tight group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25 mt-1">
                      {project.industry}
                    </p>
                  </div>
                  <span className="text-xs text-white/20 group-hover:text-yellow-400/60 transition-colors flex items-center gap-1 mt-2 shrink-0">
                    VIEW PROJECT
                    <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-white/25 max-w-xl leading-relaxed">
                  {project.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
