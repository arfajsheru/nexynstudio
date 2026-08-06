"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ─── Words to cycle through ───────────────────────────────────────────────────
// Each word appears letter by letter, then exits with a curved path wipe
const WORDS = [
  "Innovate",
  "Create",
  "Engineer",
  "Disrupt",
  "Design",
  "Launch",
];

// ─── Letter Animation ─────────────────────────────────────────────────────────

function AnimatedWord({ word }: { word: string }) {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      {word.split("").map((letter, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{
            duration: 0.45,
            delay: i * 0.04,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block leading-none"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}

// ─── Counter component ────────────────────────────────────────────────────────

function Counter({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="inline-block tabular-nums"
    >
      {value}
    </motion.span>
  );
}

// ─── Preloader ────────────────────────────────────────────────────────────────

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const totalDuration = 1800; // total preloader time in ms (down from 2600)
  const wordInterval = 260;   // how long each word shows (down from 380)

  // Check sessionStorage on mount to bypass preloader for returning visits in same session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shown = sessionStorage.getItem("nexyn-preloader-shown");
      if (shown) {
        setVisible(false);
        document.body.style.overflow = "unset";
      } else {
        document.body.style.overflow = "hidden";
      }
    }
  }, []);

  // Progress counter
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("nexyn-preloader-shown")) {
      return;
    }
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(Math.round((elapsed / totalDuration) * 100), 100);
      setProgress(pct);
      if (elapsed < totalDuration) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Cycle words
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("nexyn-preloader-shown")) {
      return;
    }
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, wordInterval);
    return () => clearInterval(interval);
  }, []);

  // Exit sequence
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("nexyn-preloader-shown")) {
      return;
    }
    const exitTimer = setTimeout(() => {
      setExiting(true);
      document.body.style.overflow = "unset";
    }, totalDuration - 500);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("nexyn-preloader-shown", "true");
    }, totalDuration + 100);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence mode="wait">
      {!exiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-background"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {/* ── Subtle grid BG ─────────────────────────────────────── */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* ── Main content ───────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">

            {/* Brand name — static, revealed on mount */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
            >
              Nexyn Studios
            </motion.p>

            {/* Cycling word */}
            <div
              className="overflow-hidden text-[52px] font-extrabold leading-[1] tracking-[-0.04em] text-foreground sm:text-[72px] md:text-[88px]"
              style={{ height: "1.05em" }}
              aria-live="polite"
            >
              <AnimatePresence mode="wait">
                <AnimatedWord key={WORDS[wordIndex]} word={WORDS[wordIndex]} />
              </AnimatePresence>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60"
            >
              Engineering Excellence
            </motion.p>
          </div>

          {/* ── Bottom bar — progress ──────────────────────────────── */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8 sm:px-12">
            {/* Progress bar */}
            <div className="h-px flex-1 max-w-[180px] overflow-hidden rounded-full bg-foreground/10">
              <motion.div
                className="h-full rounded-full bg-foreground/50"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            {/* Counter */}
            <div className="text-[11px] font-semibold tabular-nums text-muted-foreground">
              <AnimatePresence mode="popLayout">
                <Counter value={progress} />
              </AnimatePresence>
              <span>%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
