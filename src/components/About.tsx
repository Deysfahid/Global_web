"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="py-32 bg-[#050505]" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <ScrollReveal>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1] mb-12">
              <span className="block">BUILT FOR</span>
              <span className="block text-white/30">REAL BUSINESSES.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 max-w-2xl">
              <p className="text-lg sm:text-xl text-white/40 leading-relaxed">
                GLOBAL designs and develops modern websites that help businesses
                establish a stronger presence online.
              </p>
              <p className="text-sm text-white/25 leading-relaxed">
                We work with shops, clinics, restaurants, salons and businesses of
                all sizes to build websites that genuinely represent what they do
                — and help them reach more people.
              </p>
              <p className="text-sm text-white/25 leading-relaxed">
                Our approach is straightforward: we listen to what your business
                needs, design something that fits, build it with modern technology,
                and make sure it works beautifully on every device.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
