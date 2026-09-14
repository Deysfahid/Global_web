import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See demo projects showcasing the types of websites GLOBAL builds — healthcare, restaurant, retail, salon, real estate and fitness websites.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">
            Our Work
          </h1>
          <p className="mt-4 text-sm text-white/30 max-w-md">
            Explore demo projects that showcase the quality of websites we
            build for businesses.
          </p>
        </div>
      </section>
      <Portfolio />
      <CTA
        heading="Want a website like this for your business?"
        buttonText="Get in Touch"
        variant="dark"
      />
    </>
  );
}
