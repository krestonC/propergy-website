"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.4, ease: "power4.out" },
        "-=0.8"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <motion.section
      id="hero"
      className="relative h-screen flex flex-col justify-end overflow-hidden"
      initial={{ scale: 1.05, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ambient background */}
      <div className="hero-ambient" />

      {/* Dark gradient overlay from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)",
        }}
      />

      {/* Content — bottom left */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-24 md:pb-32">
        <p
          ref={eyebrowRef}
          className="uppercase font-medium tracking-[0.25em] mb-5"
          style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.3)",
            opacity: 0,
          }}
        >
          Specialist Building Consultancy
        </p>

        <h1
          ref={headlineRef}
          className="font-outfit max-w-[700px] leading-[1.1]"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
            opacity: 0,
          }}
        >
          Turning complex property challenges into confident outcomes.
        </h1>
      </div>

      {/* Scroll to discover */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator"
        style={{ opacity: 0 }}
      >
        <span
          className="uppercase tracking-[0.2em]"
          style={{
            fontSize: "0.55rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.2)",
          }}
        >
          Scroll to discover
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 6L8 11L13 6"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.section>
  );
}
