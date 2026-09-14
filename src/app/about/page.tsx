import type { Metadata } from "next";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "GLOBAL helps businesses create modern, effective websites that make them easier to discover online and communicate with customers.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">
            About GLOBAL
          </h1>
          <p className="mt-4 text-sm text-white/30 max-w-md">
            We help businesses build their digital presence with modern,
            professional websites.
          </p>
        </div>
      </section>
      <About />
      <Process />
      <CTA
        heading="Your customers are already online. Make sure they find you."
        buttonText="Contact GLOBAL"
        variant="dark"
      />
    </>
  );
}
