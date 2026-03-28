"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterMarker from "./ChapterMarker";

const services = [
  {
    number: "01",
    title: "Financial Governance",
    description:
      "Standalone body corporate bank accounts. Full transparency. Monthly owner-accessible reporting. No pooled trust accounts.",
  },
  {
    number: "02",
    title: "Facilities Management",
    description:
      "Proactive, scheduled, and data-driven. Every repair logged, tracked, and closed.",
  },
  {
    number: "03",
    title: "Security Integration",
    description:
      "AI-powered workforce management, biometric access control, and real-time incident response. Powered by proprietary technology.",
  },
  {
    number: "04",
    title: "Owner Communication",
    description:
      "Digital-first. Real-time updates, document access, and direct lines to your managing agent \u2014 not a call centre.",
  },
  {
    number: "05",
    title: "Compliance & Legal",
    description:
      "CSOS, PPRA, and Sectional Title Act alignment. We handle the red tape so you don\u2019t have to.",
  },
  {
    number: "06",
    title: "Building Maintenance",
    description:
      "Preventive, not reactive. IoT-ready infrastructure monitoring and scheduled maintenance cycles.",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const rows = sectionRef.current?.querySelectorAll(".service-row-wrap");
      if (rows) {
        rows.forEach((row, i) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: i * 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative px-6 md:px-10 py-28 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto">
        <div ref={headlineRef} className="mb-16 md:mb-24" style={{ opacity: 0 }}>
          <ChapterMarker number="02" />
          <h2
            className="font-outfit mt-6"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            Proper management.{" "}
            <em
              className="not-italic"
              style={{ fontWeight: 200, fontStyle: "italic" }}
            >
              Intelligent.
            </em>
          </h2>
        </div>

        {/* Service rows */}
        <div>
          {services.map((service, i) => (
            <div
              key={i}
              className="service-row-wrap"
              style={{ opacity: 0 }}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                onMouseEnter={() => setExpanded(i)}
                className="service-row w-full text-left bg-transparent border-none cursor-pointer py-6 md:py-7 px-0 md:px-4 flex items-center justify-between gap-4"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex items-center gap-5 md:gap-8 flex-1">
                  <span
                    className="font-medium tracking-[0.2em] transition-colors duration-500"
                    style={{
                      fontSize: "0.65rem",
                      color:
                        expanded === i
                          ? "#C9A84C"
                          : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {service.number}
                  </span>
                  <span
                    className="text-white font-medium transition-colors duration-300"
                    style={{
                      fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)",
                      fontWeight: 500,
                    }}
                  >
                    {service.title}
                  </span>
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="flex-shrink-0 transition-transform duration-500"
                  style={{
                    transform:
                      expanded === i ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M7 4L13 10L7 16"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Expanded description */}
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: expanded === i ? "120px" : "0",
                  opacity: expanded === i ? 1 : 0,
                }}
              >
                <p
                  className="pb-6 pl-0 md:pl-[calc(0.65rem+2rem+2rem)]"
                  style={{
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                    maxWidth: "520px",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
