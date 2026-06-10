"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 500px, but hide if near the bottom (optional)
      // Let's just show it after 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm sm:max-w-md -translate-x-1/2"
        >
          <div className="flex items-center justify-between gap-4 rounded-full border border-border/50 bg-background/70 px-3 py-2 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
            <div className="flex items-center gap-3 pl-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10">
                <Sparkles className="h-4 w-4 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold leading-tight text-foreground">
                  Ready to scale?
                </span>
                <span className="hidden sm:inline-block text-[11px] font-medium text-muted-foreground">
                  Let's discuss your project.
                </span>
              </div>
            </div>
            
            <a
              href="#contact"
              className="group flex h-9 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-[12px] font-semibold text-background transition-all hover:bg-foreground/90 hover:scale-[1.02] active:scale-95"
            >
              Start Building
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
