import type { Metadata } from "next";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development services by GLOBAL — business websites, e-commerce, medical websites, restaurant websites, landing pages, redesigns and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-sm text-white/30 max-w-md">
            From business websites to custom web applications — everything your
            business needs to succeed online.
          </p>
        </div>
      </section>
      <Services />
      <CTA
        heading="Ready to take your business online?"
        buttonText="Start a Project"
        variant="dark"
      />
    </>
  );
}
