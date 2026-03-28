"use client";

import { useState, useEffect, useCallback } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(30px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(30px)" : "none",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white font-outfit font-bold text-xl tracking-tight cursor-pointer bg-transparent border-none"
          style={{ fontSize: "1.15rem", fontWeight: 700 }}
        >
          PropErgy
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", id: "services" },
            { label: "About", id: "why" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="bg-transparent border-none cursor-pointer text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-[0.08em] font-medium"
              style={{ fontSize: "0.78rem", fontWeight: 500 }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="cursor-pointer bg-transparent text-white/90 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-[0.08em] font-medium rounded-full px-5 py-2"
            style={{
              fontSize: "0.78rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className="block w-5 h-[1.5px] bg-white transition-all duration-300"
              style={{
                transform: mobileOpen
                  ? "rotate(45deg) translate(2px, 2px)"
                  : "none",
              }}
            />
            <span
              className="block w-5 h-[1.5px] bg-white transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[1.5px] bg-white transition-all duration-300"
              style={{
                transform: mobileOpen
                  ? "rotate(-45deg) translate(2px, -2px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? "300px" : "0",
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {[
            { label: "Services", id: "services" },
            { label: "About", id: "why" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="bg-transparent border-none cursor-pointer text-white/70 hover:text-white transition-colors duration-300 uppercase tracking-[0.08em] font-medium text-left"
              style={{ fontSize: "0.85rem", fontWeight: 500 }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="cursor-pointer bg-transparent text-white/90 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-[0.08em] font-medium rounded-full px-5 py-2.5 self-start"
            style={{
              fontSize: "0.78rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
