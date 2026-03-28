"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const QUOTE_TEXT =
  "Many property risks don't come from poor intentions — they come from misalignment between governance, law, and day-to-day building operations.";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const citeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current?.querySelectorAll(".quote-word");
    if (!words || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(words, {
        opacity: 0.5,
        stagger: 0.03,
        duration: 0.5,
        ease: "none",
      });

      tl.fromTo(
        citeRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
        "-=0.15"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = QUOTE_TEXT.split(" ");

  return (
    <section
      ref={sectionRef}
      className="section-black relative min-h-screen flex items-center justify-center px-6 md:px-10"
    >
      <div className="max-w-[900px] mx-auto">
        <blockquote
          className="relative pl-6 md:pl-8"
          style={{
            borderLeft: "2px solid rgba(255,255,255,0.08)",
          }}
        >
          <div ref={textRef}>
            <span
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.15)",
                lineHeight: 1,
                position: "absolute",
                left: "0.5rem",
                top: "-0.5rem",
              }}
            >
              &ldquo;
            </span>
            {words.map((word, i) => (
              <span
                key={i}
                className="quote-word inline-block mr-[0.3em]"
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  opacity: 0.12,
                }}
              >
                {word}
              </span>
            ))}
          </div>

          <cite
            ref={citeRef}
            className="block mt-8 not-italic uppercase tracking-[0.15em]"
            style={{
              fontSize: "0.6rem",
              fontWeight: 600,
              color: "#C9A84C",
              opacity: 0,
            }}
          >
            &mdash; Kreston Cloete, Founder
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
