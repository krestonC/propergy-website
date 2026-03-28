"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 0.35, y: 0, duration: 1, ease: "power4.out" },
        "-=0.7"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        "-=0.5"
      );

    return () => { tl.kill(); };
  }, []);

  const scrollToDiscover = () => {
    const el = document.getElementById("problem");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col justify-end px-6 md:px-10 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="hero-ambient" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <p
          ref={eyebrowRef}
          className="uppercase font-semibold tracking-[0.3em] mb-6"
          style={{
            fontSize: "0.55rem",
            color: "rgba(255,255,255,0.2)",
            opacity: 0,
          }}
        >
          Independent Property Governance
        </p>

        <h1
          ref={headlineRef}
          className="font-outfit leading-[1.05] mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            opacity: 0,
          }}
        >
          Your building
          <br />
          deserves better.
        </h1>

        <p
          ref={subtextRef}
          className="font-light max-w-[520px] mb-10 leading-relaxed"
          style={{
            fontSize: "0.95rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.35)",
            opacity: 0,
          }}
        >
          PropErgy is an independent managing agent redefining how Cape Town
          buildings are governed, maintained, and protected.
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToDiscover}
          className="cursor-pointer bg-transparent text-white/90 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-[0.08em] font-medium rounded-full px-7 py-3 inline-flex items-center gap-3"
          style={{
            fontSize: "0.78rem",
            fontWeight: 500,
            border: "1px solid rgba(255,255,255,0.2)",
            opacity: 0,
          }}
        >
          Discover How
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-300"
          >
            <path
              d="M6 2L6 10M6 10L2 6M6 10L10 6"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="opacity-40"
        >
          <path
            d="M4 8L10 14L16 8"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
