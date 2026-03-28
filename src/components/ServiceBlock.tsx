"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceBlockProps {
  number: string;
  title: string;
  description: string;
  variant: "light" | "dark";
  fromDirection?: "left" | "right";
}

export default function ServiceBlock({
  number,
  title,
  description,
  variant,
  fromDirection = "left",
}: ServiceBlockProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: fromDirection === "left" ? -60 : 60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [fromDirection]);

  const isLight = variant === "light";

  return (
    <section
      ref={sectionRef}
      className={isLight ? "section-white" : "section-black"}
      style={{ minHeight: "60vh" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28 flex items-center">
        <div ref={contentRef} className="max-w-[700px]" style={{ opacity: 0 }}>
          {/* Number */}
          <span
            className="block mb-5 font-medium tracking-[0.2em]"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#C9A84C",
              lineHeight: 1,
            }}
          >
            {number}
          </span>

          {/* Title */}
          <h3
            className="font-outfit mb-4"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 700,
              color: isLight ? "#1a1a1a" : "#ffffff",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "0.95rem",
              fontWeight: 300,
              color: isLight ? "#666666" : "rgba(255,255,255,0.45)",
              lineHeight: 1.75,
              maxWidth: "540px",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
