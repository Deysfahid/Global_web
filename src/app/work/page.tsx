import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See demo projects showcasing the types of websites GLOBAL builds — healthcare, restaurant and e-commerce websites.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#0a0a0a] relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-yellow-500/[0.04] blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">Portfolio</span>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">
              Our Work
            </h1>
            <p className="mt-4 text-sm text-white/30 max-w-md">
              Explore demo projects that showcase the quality of websites we
              build for businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <Portfolio />
      <CTA
        heading="Want a website like this for your business?"
        buttonText="Get in Touch"
      />
    </>
  );
}
