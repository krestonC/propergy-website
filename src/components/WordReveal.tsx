"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REVEAL_TEXT =
  "We sit at the intersection of property law, construction, governance, and operational reality — bridging the gap between what legislation requires and what buildings actually need.";

export default function WordReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current?.querySelectorAll(".word-reveal-word");
    if (!words || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin and scrub word reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(words, {
        opacity: 1,
        stagger: 0.03,
        duration: 0.5,
        ease: "none",
      });

      // Footer fade in at end
      tl.fromTo(
        footerRef.current,
        { opacity: 0, y: 15 },
        { opacity: 0.4, y: 0, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = REVEAL_TEXT.split(" ");

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-white relative min-h-screen flex items-center justify-center px-6 md:px-10"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <div ref={textRef}>
          {words.map((word, i) => (
            <span
              key={i}
              className="word-reveal-word"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2.4rem)",
                fontWeight: 300,
                color: "#1a1a1a",
                lineHeight: 1.6,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        <p
          ref={footerRef}
          className="mt-12 uppercase tracking-[0.2em]"
          style={{
            fontSize: "0.6rem",
            fontWeight: 600,
            color: "rgba(0,0,0,0.25)",
            opacity: 0,
          }}
        >
          Founded 2022 by Kreston Cloete
        </p>
      </div>
    </section>
  );
}
