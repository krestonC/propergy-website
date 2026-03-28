"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EntryGateProps {
  onEnter: () => void;
}

export default function EntryGate({ onEnter }: EntryGateProps) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <motion.img
            src="https://propergymanagement.co.za/wp-content/uploads/2026/02/Propergy-Logo-1.png"
            alt="PropErgy Management"
            className="h-14 md:h-18 mb-8 object-contain"
            style={{ maxHeight: "72px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = "block";
            }}
          />
          <motion.span
            className="hidden text-white font-outfit text-2xl tracking-tight"
            style={{ fontWeight: 700, display: "none" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            PropErgy
          </motion.span>

          {/* Tagline */}
          <motion.p
            className="text-center px-6 mb-12 max-w-md"
            style={{
              fontSize: "0.95rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.4)",
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Bringing Proper Energy to Property Management
          </motion.p>

          {/* Enter CTA */}
          <motion.button
            onClick={handleEnter}
            className="cursor-pointer bg-transparent text-white/80 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.15em] font-medium rounded-full px-10 py-3.5"
            style={{
              fontSize: "0.72rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Enter
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[100] bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
