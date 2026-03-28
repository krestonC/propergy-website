"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import ChapterMarker from "./ChapterMarker";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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

  const inputStyles = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "2px",
    padding: "14px 16px",
    fontSize: "0.88rem",
    fontWeight: 300 as const,
    color: "#ffffff",
    width: "100%",
    transition: "border-color 0.3s ease",
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center px-6 md:px-10 py-28 md:py-36"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="max-w-[640px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <ChapterMarker number="06" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-outfit text-center mb-4"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Let&apos;s talk about your building.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="text-center mb-14"
              style={{
                fontSize: "0.92rem",
                fontWeight: 300,
                color: "rgba(255,255,255,0.35)",
                maxWidth: "460px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Whether you&apos;re a trustee exploring new management, or an
              owner asking better questions &mdash; we&apos;re here.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            {status === "sent" ? (
              <div className="text-center py-16">
                <p
                  className="text-gold mb-2"
                  style={{ fontSize: "1.1rem", fontWeight: 500 }}
                >
                  Message sent.
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    style={inputStyles}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    style={inputStyles}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="building"
                    placeholder="Building Name"
                    style={inputStyles}
                  />
                  <select
                    name="role"
                    defaultValue=""
                    required
                    style={{
                      ...inputStyles,
                      color: "rgba(255,255,255,0.25)",
                      appearance: "none" as const,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='rgba(255,255,255,0.3)' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                    }}
                  >
                    <option value="" disabled>
                      Your Role
                    </option>
                    <option value="Trustee" style={{ color: "#000" }}>
                      Trustee
                    </option>
                    <option value="Owner" style={{ color: "#000" }}>
                      Owner
                    </option>
                    <option value="Developer" style={{ color: "#000" }}>
                      Developer
                    </option>
                    <option value="Other" style={{ color: "#000" }}>
                      Other
                    </option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  style={{
                    ...inputStyles,
                    resize: "vertical" as const,
                    minHeight: "120px",
                  }}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full cursor-pointer font-medium uppercase tracking-[0.1em] transition-all duration-300 rounded-sm"
                  style={{
                    background: status === "sending" ? "#a8893d" : "#C9A84C",
                    color: "#000000",
                    border: "none",
                    padding: "16px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p
                    className="text-center mt-2"
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,80,80,0.7)",
                    }}
                  >
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </ScrollReveal>

          {/* Contact details */}
          <ScrollReveal delay={0.4}>
            <div
              className="mt-16 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div>
                <p
                  className="uppercase tracking-[0.15em] mb-2"
                  style={{
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  Phone
                </p>
                <a
                  href="tel:+27823286525"
                  className="text-white/50 hover:text-white transition-colors duration-300"
                  style={{ fontSize: "0.85rem", fontWeight: 300 }}
                >
                  082 328 6525
                </a>
              </div>
              <div>
                <p
                  className="uppercase tracking-[0.15em] mb-2"
                  style={{
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@propergy.co.za"
                  className="text-white/50 hover:text-white transition-colors duration-300"
                  style={{ fontSize: "0.85rem", fontWeight: 300 }}
                >
                  info@propergy.co.za
                </a>
              </div>
              <div>
                <p
                  className="uppercase tracking-[0.15em] mb-2"
                  style={{
                    fontSize: "0.55rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  Address
                </p>
                <p
                  className="text-white/50"
                  style={{ fontSize: "0.85rem", fontWeight: 300 }}
                >
                  Suite G06, 90 Kloof Road
                  <br />
                  Sea Point, Cape Town 8005
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
