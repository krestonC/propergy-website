"use client";

import { useState, useEffect, useCallback } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
        background: scrolled ? "rgba(0,0,0,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-transparent border-none cursor-pointer"
        >
          <img
            src="https://propergymanagement.co.za/wp-content/uploads/2026/02/Propergy-Logo-1.png"
            alt="PropErgy"
            className="h-8 object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </button>

        {/* Desktop: just CTA */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="bg-transparent border-none cursor-pointer text-white/50 hover:text-white transition-colors duration-300 uppercase tracking-[0.1em] font-medium"
              style={{ fontSize: "0.72rem", fontWeight: 500 }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="cursor-pointer bg-transparent text-white/80 hover:bg-white hover:text-black transition-all duration-400 uppercase tracking-[0.1em] font-medium rounded-full px-6 py-2"
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Contact Us
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
              className="block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
              }}
            />
            <span
              className="block w-5 h-[1.5px] bg-white transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: mobileOpen ? "320px" : "0",
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="bg-transparent border-none cursor-pointer text-white/60 hover:text-white transition-colors duration-300 uppercase tracking-[0.1em] font-medium text-left"
              style={{ fontSize: "0.8rem", fontWeight: 500 }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+27210201572"
            className="text-white/40 hover:text-white transition-colors duration-300"
            style={{ fontSize: "0.8rem", fontWeight: 300 }}
          >
            021 020 1572
          </a>
        </div>
      </div>
    </nav>
  );
}
