export default function Footer() {
  return (
    <footer
      className="section-black px-6 md:px-10 py-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top row: logo + social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <img
            src="https://propergymanagement.co.za/wp-content/uploads/2026/02/Propergy-Logo-1.png"
            alt="PropErgy Management"
            className="h-8 object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {[
              {
                label: "Facebook",
                href: "https://facebook.com",
                path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              },
              {
                label: "Instagram",
                href: "https://instagram.com",
                path: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-7.5a.75.75 0 110-1.5.75.75 0 010 1.5z",
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                label: "TikTok",
                href: "https://tiktok.com",
                path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.74a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.17z",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/15 hover:text-white/40 transition-colors duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* PPRA */}
        <p
          className="text-center mb-6"
          style={{
            fontSize: "0.6rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.1em",
          }}
        >
          Registered with the PPRA (FFC: 202503031000745)
        </p>

        {/* Contact row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8"
          style={{ fontSize: "0.75rem", fontWeight: 300 }}
        >
          <a
            href="mailto:Info@propergymanagement.co.za"
            className="text-white/25 hover:text-white/50 transition-colors duration-300"
          >
            Info@propergymanagement.co.za
          </a>
          <a
            href="tel:+27210201572"
            className="text-white/25 hover:text-white/50 transition-colors duration-300"
          >
            021 020 1572
          </a>
          <span className="text-white/15">
            Suite G06, 90 Kloof Road, Sea Point, 8060
          </span>
        </div>

        {/* Legal links */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6"
          style={{ fontSize: "0.65rem", fontWeight: 400 }}
        >
          <span className="text-white/15 hover:text-white/30 cursor-pointer transition-colors duration-300">
            Privacy Policy
          </span>
          <span className="text-white/08 hidden sm:inline">|</span>
          <span className="text-white/15 hover:text-white/30 cursor-pointer transition-colors duration-300">
            Terms &amp; Conditions
          </span>
          <span className="text-white/08 hidden sm:inline">|</span>
          <span className="text-white/15 hover:text-white/30 cursor-pointer transition-colors duration-300">
            Disclaimer
          </span>
        </div>

        {/* Copyright */}
        <p
          className="text-center"
          style={{
            fontSize: "0.6rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.1)",
          }}
        >
          Copyright PropErgy Management 2022 &mdash; All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
