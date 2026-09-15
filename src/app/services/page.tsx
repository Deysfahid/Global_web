import type { Metadata } from "next";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, e-commerce, digital marketing, SEO, social media, tax & GST, accounting, and business registration services by GLOBAL.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#0a0a0a] relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-yellow-500/[0.04] blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">What we do</span>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">
              Our Services
            </h1>
            <p className="mt-4 text-sm text-white/30 max-w-md">
              From business websites to digital marketing and tax filing — everything your
              business needs to grow.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <Services />
      <CTA
        heading="Ready to take your business to the next level?"
        buttonText="Start a Project"
      />
    </>
  );
}
