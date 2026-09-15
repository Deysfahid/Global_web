import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services-data";
import { getProjectBySlug } from "@/data/projects";
import { getProjectPreview } from "@/components/ProjectPreviews";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Services`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = service.relatedProjectSlugs
    .map(getProjectBySlug)
    .filter(Boolean);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Back nav */}
      <div className="pt-28 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[13px] text-white/30 hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-20 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.04] blur-[130px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-yellow-400/40 mb-3 block">
              {service.number}
            </span>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-white tracking-tight leading-[1.1] mb-6">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-white/40 leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-white mb-10">
            What&apos;s included
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-5 rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-yellow-500/15 transition-all duration-300"
              >
                <Check className="h-4 w-4 text-yellow-400/40 shrink-0 mt-0.5" />
                <span className="text-sm text-white/50">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-white mb-10">
              Related projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => project && (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className={`relative bg-gradient-to-br ${project.gradient} rounded-xl border border-white/[0.06] overflow-hidden aspect-[4/3] flex items-center justify-center p-4 group-hover:border-yellow-500/20 transition-all duration-500`}>
                    <div className="w-full bg-white/[0.95] rounded-lg shadow-xl shadow-black/20 overflow-hidden group-hover:scale-[1.03] transition-transform duration-700">
                      <div className="flex items-center gap-0.5 px-2 py-1.5 bg-gray-50/80 border-b border-gray-100">
                        <div className="w-1 h-1 rounded-full bg-red-300/60" />
                        <div className="w-1 h-1 rounded-full bg-yellow-300/60" />
                        <div className="w-1 h-1 rounded-full bg-green-300/60" />
                        <div className="mx-auto h-1 w-14 bg-gray-100 rounded-full" />
                      </div>
                      <div className="w-full aspect-[5/3.5] overflow-hidden">
                        {getProjectPreview(project.slug)}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-white/60 group-hover:text-yellow-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-white/25 mt-1">
                      {project.industry}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-12 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-yellow-500/[0.06] blur-[80px]" />
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-semibold text-white/60 tracking-tight mb-2">
                Ready to get started?
              </h2>
              <p className="text-sm text-white/25">
                Tell us about your project and we&apos;ll get back to you.
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
