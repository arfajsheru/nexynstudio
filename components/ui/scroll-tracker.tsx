"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ScrollTracker() {
  const pathname = usePathname();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset tracked depths on page change
    trackedDepths.current.clear();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;

      if (documentHeight <= 0) return;

      const scrollTop = window.scrollY;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      const thresholds = [25, 50, 75, 90];

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !trackedDepths.current.has(threshold)) {
          trackedDepths.current.add(threshold);

          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "scroll_depth", {
              percent_scrolled: threshold,
              page_path: pathname,
              event_category: "Engagement",
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
