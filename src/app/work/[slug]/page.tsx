import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { getProjectPreview } from "@/components/ProjectPreviews";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Work`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Back nav */}
      <div className="pt-28 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[13px] text-white/30 hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-20 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.04] blur-[130px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-12">
            <span className="text-xs font-mono text-yellow-400/40 mb-3 block">
              {project.number}
            </span>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-white tracking-tight leading-[1.1] mb-3">
              {project.name}
            </h1>
            <p className="text-sm font-medium tracking-[0.15em] uppercase text-white/30">
              {project.industry}
            </p>
          </div>

          {/* Large Preview */}
          <div
            className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl border border-white/[0.08] overflow-hidden aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center p-6 sm:p-10 lg:p-16 shadow-2xl shadow-yellow-500/[0.05]`}
          >
            <div className="w-full max-w-2xl bg-white/[0.95] rounded-xl shadow-2xl shadow-black/20 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50/80 border-b border-gray-100">
                <div className="w-2 h-2 rounded-full bg-red-300/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-300/60" />
                <div className="w-2 h-2 rounded-full bg-green-300/60" />
                <div className="mx-auto h-2 w-32 bg-gray-100 rounded-full" />
              </div>
              <div className="w-full aspect-[5/3.5] overflow-hidden">
                {getProjectPreview(slug)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <h2 className="text-xl font-semibold text-white mb-6">
                About this project
              </h2>
              <p className="text-sm text-white/40 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="lg:col-span-5">
              <h2 className="text-xl font-semibold text-white mb-6">
                What we built
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/40"
                  >
                    <Check className="h-3.5 w-3.5 text-yellow-400/40 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-12 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-yellow-500/[0.06] blur-[80px]" />
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-semibold text-white/60 tracking-tight mb-2">
                Want something like this for your business?
              </h2>
              <p className="text-sm text-white/25">
                Let&apos;s build a website that works for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-semibold text-black bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full hover:from-yellow-300 hover:to-amber-300 transition-all shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 shrink-0 relative"
            >
              START A PROJECT
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
