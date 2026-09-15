import type { Metadata } from "next";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "GLOBAL helps businesses build their digital presence with websites, marketing, and business services.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#0a0a0a] relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-yellow-500/[0.04] blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">About us</span>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">
              About GLOBAL
            </h1>
            <p className="mt-4 text-sm text-white/30 max-w-md">
              We help businesses build their digital presence with modern,
              professional solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <About />
      <Process />
      <CTA
        heading="Your customers are already online. Make sure they find you."
        buttonText="Contact GLOBAL"
      />
    </>
  );
}
