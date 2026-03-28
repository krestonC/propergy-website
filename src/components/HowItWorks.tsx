"use client";

import ScrollReveal from "./ScrollReveal";
import ChapterMarker from "./ChapterMarker";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We walk your building. Meet the trustees. Review financials. Understand every system.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "A tailored management plan with transparent pricing. No hidden fees. No lock-in longer than 12 months.",
  },
  {
    number: "03",
    title: "Transition",
    description:
      "We handle the full changeover. Bank accounts, contracts, service providers, access systems. Seamless.",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "Monthly reporting. 24/7 security operations. Proactive maintenance. Direct access to your managing agent.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative px-6 md:px-10 py-28 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <ChapterMarker number="05" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-outfit mt-6 mb-16 md:mb-24"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            From introduction to
            <br />
            full management in 30 days.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.12}>
              <div>
                <span
                  className="text-gold font-medium tracking-[0.2em] block mb-5"
                  style={{ fontSize: "0.6rem" }}
                >
                  {step.number}
                </span>

                <h3
                  className="font-outfit mb-3"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 700,
                    lineHeight: 1.15,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
