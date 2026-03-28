"use client";

import ScrollReveal from "./ScrollReveal";
import ChapterMarker from "./ChapterMarker";

const differentiators = [
  {
    number: "01",
    title: "DPM Model",
    description:
      "Every building gets its own bank account. Your money never touches ours.",
  },
  {
    number: "02",
    title: "Technology-First",
    description:
      "AI-powered operations from day one. Not bolted on later.",
  },
  {
    number: "03",
    title: "Cape Town Focus",
    description:
      "We manage buildings in Cape Town. That\u2019s it. No spread-thin national footprint.",
  },
];

export default function WhyPropergy() {
  return (
    <section
      id="why"
      className="relative px-6 md:px-10 py-28 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <ChapterMarker number="03" />
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-16 lg:gap-20">
          {/* Left column — headline + quote */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2
                className="font-outfit mb-12"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                9 years. Hundreds of units. One standard.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <blockquote
                className="pl-5 relative"
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  className="leading-relaxed mb-4"
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.45)",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;I built PropErgy because building owners deserve a
                  managing agent who treats their investment like their
                  own.&rdquo;
                </p>
                <cite
                  className="not-italic block"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.05em",
                  }}
                >
                  &mdash; Kreston Cloete, Managing Principal
                </cite>
              </blockquote>
            </ScrollReveal>
          </div>

          {/* Right column — differentiators */}
          <div className="space-y-8 lg:pt-2">
            {differentiators.map((item, i) => (
              <ScrollReveal key={i} delay={0.15 + i * 0.12}>
                <div
                  className="p-6 md:p-8 rounded-sm"
                  style={{
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "rgba(255,255,255,0.01)",
                  }}
                >
                  <span
                    className="text-gold font-medium tracking-[0.2em] block mb-3"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {item.number}
                  </span>
                  <h3
                    className="font-outfit mb-2"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.35)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
