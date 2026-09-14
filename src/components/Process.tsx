"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "DISCOVER", description: "We learn about your business, customers and goals." },
  { number: "02", title: "DESIGN", description: "We create a visual concept tailored to your brand." },
  { number: "03", title: "DEVELOP", description: "We build with modern technology for speed and reliability." },
  { number: "04", title: "LAUNCH", description: "We test everything and launch your website to the world." },
];

export default function Process() {
  return (
    <section className="py-32 bg-[#050505]" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              PROCESS.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number}>
              <div className="bg-[#050505] p-8 sm:p-10 group hover:bg-white/[0.02] transition-colors duration-500 h-full">
                <span className="text-xs font-mono text-white/15 block mb-6">{step.number}</span>
                <h3 className="text-lg font-semibold text-white tracking-tight mb-3 group-hover:text-white/90 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-white/25 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
