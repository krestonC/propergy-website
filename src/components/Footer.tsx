export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.2)",
          }}
        >
          PropErgy Management &copy; {new Date().getFullYear()}. All rights
          reserved.
        </p>

        <p
          style={{
            fontSize: "0.65rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.05em",
          }}
        >
          PPRA FFC: 202503031000745
        </p>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/20 hover:text-white/50 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
