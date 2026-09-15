"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "DISCOVER", description: "Understand the business and goals." },
  { number: "02", title: "PLAN", description: "Define the right strategy and direction." },
  { number: "03", title: "BUILD", description: "Design and develop the solution." },
  { number: "04", title: "LAUNCH", description: "Launch, optimize and help the business move forward." },
];

export default function Process() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative" id="process">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-yellow-500/[0.03] blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-[11px] font-medium text-yellow-400/60 tracking-[0.2em] uppercase mb-4 block">How we work</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
              PROCESS.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/15 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i}>
                <div className="relative group h-full">
                  <div className="h-full rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-7 hover:bg-white/[0.06] hover:border-yellow-500/15 hover:shadow-lg hover:shadow-yellow-500/[0.05] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 blur-[40px] transition-all duration-700" />

                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/10 flex items-center justify-center mb-5 group-hover:bg-yellow-500/20 group-hover:border-yellow-500/20 transition-all">
                      <span className="text-sm font-bold text-yellow-400/70 group-hover:text-yellow-300 transition-colors">{step.number}</span>
                    </div>

                    <h3 className="text-base font-semibold text-white/80 tracking-tight mb-3 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-white/25 leading-relaxed group-hover:text-white/35 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
