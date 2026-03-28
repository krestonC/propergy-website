"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const children = contentRef.current?.children;
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
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwdkjql", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-white min-h-screen flex items-center px-6 md:px-10 py-28 md:py-36"
    >
      <div ref={contentRef} className="max-w-[600px] mx-auto w-full">
        <h2
          className="font-outfit text-center mb-3"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.15,
            opacity: 0,
          }}
        >
          Ready To Make Confident Property Decisions?
        </h2>

        <p
          className="text-center mb-12"
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#666",
            opacity: 0,
          }}
        >
          Let&apos;s Connect!
        </p>

        <div style={{ opacity: 0 }}>
          {status === "sent" ? (
            <div className="text-center py-16">
              <p
                className="mb-2"
                style={{ fontSize: "1.1rem", fontWeight: 500, color: "#1a1a1a" }}
              >
                Message sent.
              </p>
              <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "#999" }}>
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form-light space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                required
                style={{ resize: "vertical", minHeight: "120px" }}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full cursor-pointer font-medium uppercase tracking-[0.1em] transition-all duration-300 rounded-sm"
                style={{
                  background: status === "sending" ? "#333" : "#1a1a1a",
                  color: "#ffffff",
                  border: "none",
                  padding: "16px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending")
                    e.currentTarget.style.background = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending")
                    e.currentTarget.style.background = "#1a1a1a";
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p
                  className="text-center mt-2"
                  style={{ fontSize: "0.8rem", color: "#c0392b" }}
                >
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Contact details */}
        <div
          className="mt-14 pt-10 flex flex-col sm:flex-row justify-center gap-8 text-center"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            opacity: 0,
          }}
        >
          <div>
            <a
              href="tel:+27210201572"
              className="hover:text-gold transition-colors duration-300"
              style={{ fontSize: "0.85rem", fontWeight: 400, color: "#1a1a1a" }}
            >
              021 020 1572
            </a>
          </div>
          <div>
            <a
              href="mailto:Info@propergymanagement.co.za"
              className="hover:text-gold transition-colors duration-300"
              style={{ fontSize: "0.85rem", fontWeight: 400, color: "#1a1a1a" }}
            >
              Info@propergymanagement.co.za
            </a>
          </div>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: 300, color: "#999" }}>
              Suite G06, 90 Kloof Road, Sea Point, 8060
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
