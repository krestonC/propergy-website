"use client";

import ScrollReveal from "./ScrollReveal";
import ChapterMarker from "./ChapterMarker";

const problems = [
  "Managing agents who manage 200+ buildings and give yours zero attention.",
  "Opaque financials and no owner visibility into where your levies go.",
  "Security that\u2019s reactive, not intelligent \u2014 guards without systems, cameras without monitoring.",
  "Maintenance by spreadsheet, not by system. Breakdowns instead of prevention.",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-10 py-24"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <ChapterMarker number="01" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-outfit mt-6 mb-14"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Buildings are underserved.
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {problems.map((text, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.12}>
              <p
                className="leading-relaxed"
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.38)",
                  maxWidth: "540px",
                  margin: "0 auto",
                }}
              >
                {text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
