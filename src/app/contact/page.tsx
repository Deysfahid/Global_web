import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GLOBAL to discuss your website, marketing, or business project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-4 bg-[#0a0a0a] relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-yellow-500/[0.04] blur-[120px] pointer-events-none" />
      </section>
      <Contact />
    </>
  );
}
