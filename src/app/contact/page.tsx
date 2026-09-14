import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GLOBAL to discuss your website project. We build professional websites for businesses, clinics, shops and organizations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-sm text-white/30 max-w-md">
            Ready to build your website? Tell us about your business and
            we&apos;ll get back to you with a plan.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}
