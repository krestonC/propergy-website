"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GiantText() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax on giant text
      gsap.to(bgTextRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Staggered word reveal
      const words = wordsRef.current?.children;
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: wordsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // SVG drawing animation
      const paths = sectionRef.current?.querySelectorAll(".building-line");
      if (paths) {
        paths.forEach((path) => {
          const el = path as SVGPathElement;
          const length = el.getTotalLength();
          el.style.strokeDasharray = `${length}`;
          el.style.strokeDashoffset = `${length}`;

          gsap.to(el, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-black relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Giant background text with parallax */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="giant-text font-outfit">PROPERGY</span>
      </div>

      {/* Architectural SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 600 500"
          fill="none"
          className="w-[60vw] max-w-[500px] opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Modern building - flat roof, glass facade */}
          <path
            className="building-line"
            d="M150 420 L150 120 L450 120 L450 420"
            stroke="white"
            strokeWidth="1"
          />
          {/* Roof line */}
          <path
            className="building-line"
            d="M130 120 L470 120"
            stroke="white"
            strokeWidth="1"
          />
          {/* Glass facade horizontals */}
          <path className="building-line" d="M150 180 L450 180" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M150 240 L450 240" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M150 300 L450 300" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M150 360 L450 360" stroke="white" strokeWidth="0.5" />
          {/* Vertical mullions */}
          <path className="building-line" d="M225 120 L225 420" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M300 120 L300 420" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M375 120 L375 420" stroke="white" strokeWidth="0.5" />
          {/* Balcony lines */}
          <path className="building-line" d="M140 180 L150 180 L150 175" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M140 240 L150 240 L150 235" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M140 300 L150 300 L150 295" stroke="white" strokeWidth="0.5" />
          <path className="building-line" d="M140 360 L150 360 L150 355" stroke="white" strokeWidth="0.5" />
          {/* Ground line */}
          <path className="building-line" d="M100 420 L500 420" stroke="white" strokeWidth="1" />
          {/* Entrance */}
          <path className="building-line" d="M275 420 L275 380 L325 380 L325 420" stroke="white" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Overlaid text — left aligned */}
      <div
        ref={wordsRef}
        className="relative z-10 px-6 md:px-10 max-w-[1400px] mx-auto w-full"
      >
        {["Independent.", "Experienced.", "Outcome-driven."].map((word, i) => (
          <div
            key={i}
            className="font-outfit"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.3,
              opacity: 0,
            }}
          >
            {word}
          </div>
        ))}
      </div>
    </section>
  );
}
