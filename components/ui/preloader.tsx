"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after animation sequence completes
    const timer = setTimeout(() => {
      setLoading(false);
      // Re-enable scroll once loading completes
      document.body.style.overflow = "unset";
    }, 2200);

    // Disable scroll while loading
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
        >
          {/* Main Logo Reveal */}
          <div className="relative flex flex-col items-center overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-extrabold tracking-[0.25em] text-foreground sm:text-6xl"
            >
              NEXYN
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1.0, ease: "easeInOut" }}
              className="mt-4 h-0.5 w-full bg-foreground/30"
            />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-3 text-[10px] uppercase tracking-[0.2em] font-medium text-muted-foreground"
            >
              Engineering Excellence
            </motion.span>
          </div>

          {/* Loading Percentage indicator at bottom */}
          <div className="absolute bottom-16 flex flex-col items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/40 font-semibold animate-pulse">
              Initializing Experience
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
