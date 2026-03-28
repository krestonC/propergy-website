"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChapterMarker from "./ChapterMarker";

const buildings = [
  {
    name: "The Ivory",
    location: "Sea Point",
    gradient: "linear-gradient(160deg, #0a2e2e 0%, #000000 100%)",
    isCta: false,
  },
  {
    name: "Bordeaux",
    location: "Sea Point",
    gradient: "linear-gradient(160deg, #1a1a2e 0%, #000000 100%)",
    isCta: false,
  },
  {
    name: "Rondebosch Court",
    location: "Rondebosch",
    gradient: "linear-gradient(160deg, #2e1a0a 0%, #000000 100%)",
    isCta: false,
  },
  {
    name: "Durham Square",
    location: "Salt River",
    gradient: "linear-gradient(160deg, #0a1a2e 0%, #000000 100%)",
    isCta: false,
  },
  {
    name: "Your Building?",
    location: "Get in Touch",
    gradient: "none",
    isCta: true,
  },
];

export default function Buildings() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const container = scrollContainerRef.current;
      if (!container) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const scroll = useCallback((direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = direction === "left" ? -360 : 360;
    container.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="buildings"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div ref={headlineRef} className="mb-12 md:mb-16 flex items-end justify-between" style={{ opacity: 0 }}>
          <div>
            <ChapterMarker number="04" />
            <h2
              className="font-outfit mt-6"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              The buildings we serve.
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-transparent transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Scroll left"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7L9 11" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-transparent transition-all duration-300 hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              aria-label="Scroll right"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollContainerRef}
        className="carousel-scroll flex gap-5 px-6 md:px-10 overflow-x-auto cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Left spacer for centering on large screens */}
        <div className="hidden xl:block flex-shrink-0" style={{ width: "calc((100vw - 1400px) / 2)" }} />

        {buildings.map((building, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative rounded-sm overflow-hidden group transition-transform duration-500"
            style={{
              width: "clamp(260px, 28vw, 340px)",
              aspectRatio: "3/4",
              background: building.isCta ? "#000000" : building.gradient,
              border: building.isCta
                ? "1px solid rgba(201,168,76,0.3)"
                : "1px solid rgba(255,255,255,0.04)",
            }}
          >
            {building.isCta ? (
              <button
                onClick={scrollToContact}
                className="w-full h-full flex flex-col items-center justify-center gap-4 bg-transparent border-none cursor-pointer p-8"
              >
                <span
                  className="text-gold font-medium"
                  style={{ fontSize: "1.1rem" }}
                >
                  {building.name}
                </span>
                <span
                  className="uppercase tracking-[0.15em] font-medium text-gold/60"
                  style={{ fontSize: "0.65rem" }}
                >
                  {building.location}
                </span>
              </button>
            ) : (
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3
                  className="font-outfit mb-1"
                  style={{ fontSize: "1.15rem", fontWeight: 600 }}
                >
                  {building.name}
                </h3>
                <p
                  className="uppercase tracking-[0.15em] mb-4"
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {building.location}
                </p>
                <span
                  className="text-white/30 group-hover:text-white/60 transition-colors duration-300"
                  style={{ fontSize: "0.78rem", fontWeight: 400 }}
                >
                  View details &rarr;
                </span>
              </div>
            )}
          </div>
        ))}

        {/* Right spacer */}
        <div className="flex-shrink-0 w-6 md:w-10" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
