"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const items = [
  {
    number: "01",
    title: "Truly Independent",
    description:
      "No commission bias. No contractor agendas. No managing agent conflicts.",
  },
  {
    number: "02",
    title: "Multi-Disciplinary Expertise",
    description:
      "Legal, construction, governance, finance and property management combined.",
  },
  {
    number: "03",
    title: "Stakeholder-First Approach",
    description:
      "Aligned outcomes for trustees, agents, owners, and developers.",
  },
  {
    number: "04",
    title: "Risk-Aware, Outcome-Driven",
    description:
      "We focus on preventing problems, not just reacting to them.",
  },
];

export default function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      const cards = sectionRef.current?.querySelectorAll(".diff-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-white px-6 md:px-10 py-28 md:py-36"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-[1400px] mx-auto">
        <h2
          ref={headlineRef}
          className="font-outfit mb-16 md:mb-24"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.1,
            opacity: 0,
          }}
        >
          Why PropErgy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="diff-card py-8 lg:px-6 first:lg:pl-0 last:lg:pr-0"
              style={{
                opacity: 0,
                borderLeft:
                  i > 0 ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}
            >
              <span
                className="block mb-4 font-medium tracking-[0.15em]"
                style={{
                  fontSize: "0.65rem",
                  color: "#C9A84C",
                  fontWeight: 600,
                }}
              >
                {item.number}
              </span>
              <h3
                className="font-outfit mb-3"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  color: "#666666",
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
