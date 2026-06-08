"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowDown } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ── Challenge Data ────────────────────────────────────────────────────────────

const CHALLENGES = [
  {
    problem: "Manual Operations",
    problemDesc: "Teams waste hours on repetitive data entry, copy-pasting, and manual syncing across different tools.",
    solution: "Automated Workflows",
    solutionDesc: "Custom scripts & API integrations that eliminate manual work, letting your team focus on high-value tasks.",
    index: "01",
  },
  {
    problem: "Poor Lead Tracking",
    problemDesc: "Valuable leads slip through the cracks because sales teams rely on fragmented spreadsheets and sticky notes.",
    solution: "Centralized Lead Management",
    solutionDesc: "Custom CRM systems designed for your sales process — every lead tracked, nurtured, and closed.",
    index: "02",
  },
  {
    problem: "Scattered Data",
    problemDesc: "Business intelligence is impossible when customer data, inventory, and financials live in disconnected systems.",
    solution: "Unified Data Architecture",
    solutionDesc: "We connect your disparate systems into a single source of truth with real-time visibility.",
    index: "03",
  },
  {
    problem: "Lack Of Automation",
    problemDesc: "Scaling is bottlenecked by human dependency for sending emails, generating invoices, and updating statuses.",
    solution: "End-to-End Automation",
    solutionDesc: "Intelligent triggers that automatically handle communications, billing, and updates based on business rules.",
    index: "04",
  },
  {
    problem: "Inefficient Workflows",
    problemDesc: "Generic off-the-shelf software forces your team to change how they work to fit the software's limitations.",
    solution: "Bespoke Business Software",
    solutionDesc: "Software engineered precisely around your existing business processes — enhancing them, not breaking them.",
    index: "05",
  },
  {
    problem: "Limited Visibility",
    problemDesc: "Leadership makes decisions based on outdated reports, gut feelings, and incomplete performance metrics.",
    solution: "Real-Time Dashboards",
    solutionDesc: "Live analytics and KPI tracking tailored to the metrics that actually matter for your business goals.",
    index: "06",
  },
];

// ── Card width + gap constants ────────────────────────────────────────────────
const CARD_W = 360;  // px
const CARD_GAP = 20; // px

// ── Single Challenge Card ─────────────────────────────────────────────────────

function ChallengeCard({ item }: { item: (typeof CHALLENGES)[0] }) {
  return (
    <div
      className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-border/50 bg-background transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_8px_40px_rgba(255,255,255,0.04)]"
      style={{ width: CARD_W }}
    >
      {/* Top shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />

      {/* Watermark number */}
      <div className="absolute right-5 top-4 text-[52px] font-black text-foreground/[0.04] select-none leading-none">
        {item.index}
      </div>

      <div className="flex h-full flex-col p-7">
        {/* BEFORE */}
        <div className="mb-5">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-foreground/[0.03] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
            <AlertCircle className="h-3 w-3" />
            Before
          </div>
          <h3 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-foreground">
            {item.problem}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {item.problemDesc}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-border/50" />
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border/50 bg-foreground/[0.04] transition-transform duration-300 group-hover:scale-110 group-hover:border-foreground/20">
            <ArrowDown className="h-3 w-3 text-foreground/40" />
          </div>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        {/* AFTER */}
        <div className="flex-1 rounded-xl border border-border/40 bg-foreground/[0.02] p-4">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-foreground/[0.03] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/70">
            <CheckCircle2 className="h-3 w-3" />
            After
          </div>
          <h3 className="mb-2 text-[15px] font-bold leading-tight text-foreground">
            {item.solution}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {item.solutionDesc}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Challenges Section ────────────────────────────────────────────────────────

export function ChallengesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = useState(1200);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewportW(window.innerWidth);
      const handleResize = () => setViewportW(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Track scroll progress relative to the tall outer container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Total track width = (card + gap) × count - gap + paddingLeft(60) + paddingRight(60)
  const totalTrack = (CARD_W + CARD_GAP) * CHALLENGES.length - CARD_GAP + 120;
  
  // Max translate should only go as far as the remaining width outside the viewport.
  // This prevents scrolling past the last card and leaving blank space on the right.
  const maxTranslate = -Math.max(0, totalTrack - viewportW);

  const rawX = useTransform(scrollYProgress, [0, 1], [0, maxTranslate]);
  // Spring smoothing so motion feels natural
  const x = useSpring(rawX, { stiffness: 80, damping: 20, restDelta: 0.001 });

  // Progress dot index (0-5)
  const dotIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, CHALLENGES.length - 1]
  );

  return (
    /*
     * Outer tall container:
     * height = 100vh (sticky viewport) + scroll distance per card × count
     * This makes the page "tall enough" so scrolling through it
     * drives the horizontal translate fully.
     */
    <div
      ref={containerRef}
      style={{ height: `calc(100vh + ${CHALLENGES.length * 500}px)` }}
      className="relative bg-foreground/[0.02]"
    >
      {/* Sticky viewport — stays fixed while outer container scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className={cn("relative z-10 mx-auto w-full flex-shrink-0 pt-12 pb-10", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
            >
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              The Problems We Solve
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mx-auto max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[44px]"
            >
              Software Built To Remove{" "}
              <span className="text-foreground/50">Business Bottlenecks</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-muted-foreground"
            >
              Scroll down to explore how we eliminate the friction
              slowing your business — one challenge at a time.
            </motion.p>
          </motion.div>
        </div>

        {/* ── Horizontal Track ────────────────────────────────── */}
        <div className="relative flex flex-1 items-center overflow-hidden">
          {/* Left fade mask */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          {/* Right fade mask */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex"
            style={{
              x,
              gap: CARD_GAP,
              paddingLeft: 60,
              paddingRight: 60,
            }}
          >
            {CHALLENGES.map((item) => (
              <ChallengeCard key={item.problem} item={item} />
            ))}
          </motion.div>
        </div>

        {/* ── Progress bar + dots ─────────────────────────────── */}
        <div className="flex-shrink-0 pb-8 flex flex-col items-center gap-3">
          {/* Thin progress bar */}
          <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-foreground/40"
              style={{
                width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </div>

          {/* Dots */}
          <div className="flex gap-1.5">
            {CHALLENGES.map((_, i) => {
              const step = 1 / (CHALLENGES.length - 1);
              const center = i * step;

              return (
                <motion.div
                  key={i}
                  className="h-1 rounded-full bg-foreground/20"
                  style={{
                    width: useTransform(scrollYProgress, (v) => {
                      const dist = Math.abs(v - center);
                      const factor = Math.max(0, 1 - dist / step);
                      return `${6 + 18 * factor}px`; // 6px to 24px
                    }),
                    opacity: useTransform(scrollYProgress, (v) => {
                      const dist = Math.abs(v - center);
                      const factor = Math.max(0, 1 - dist / step);
                      return 0.3 + 0.7 * factor; // 0.3 to 1.0
                    }),
                    background: useTransform(scrollYProgress, (v) => {
                      const dist = Math.abs(v - center);
                      const factor = Math.max(0, 1 - dist / step);
                      // from rgba(0,0,0,0.15) to rgba(0,0,0,0.7)
                      const alpha = 0.15 + 0.55 * factor;
                      return `rgba(0,0,0,${alpha})`;
                    }),
                  }}
                />
              );
            })}
          </div>

          <div className="text-[10px] font-medium text-muted-foreground/50 uppercase tracking-[0.12em]">
            Scroll to explore
          </div>
        </div>

      </div>
    </div>
  );
}
