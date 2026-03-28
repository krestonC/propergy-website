"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesHeader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const children = ref.current?.children;
      if (children) {
        gsap.fromTo(
          children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="services"
      className="section-black px-6 md:px-10 py-28 md:py-36"
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <p
          className="font-outfit mb-4"
          style={{
            fontSize: "1rem",
            fontWeight: 200,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.4)",
            opacity: 0,
          }}
        >
          We Solve Real Problems
        </p>
        <h2
          className="font-outfit"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            opacity: 0,
          }}
        >
          What can we do for you?
        </h2>
      </div>
    </div>
  );
}
