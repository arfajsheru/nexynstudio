"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { HERO_CONTENT, LAYOUT, TRUST_ROW, STATS } from "@/lib/constants";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/motion";
import { useCountUp } from "@/hooks/use-interactions";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// ─── Hero Background & Visuals ──────────────────────────────────────────────

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-background" aria-hidden="true">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 mix-blend-luminosity dark:opacity-40"
        style={{ backgroundImage: 'url(/herobackground.png)' }}
      />

      {/* Fine grid — radially masked so it stays center-focused */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_10%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Dark-mode grid */}
      <div
        className="absolute inset-0 hidden dark:block [mask-image:radial-gradient(ellipse_70%_55%_at_50%_10%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Tight centered top glow — contained, not bleeding to sides */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-[360px] w-[600px] dark:opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.04) 50%, transparent 75%)",
          filter: "blur(2px)",
          opacity: 0.85,
        }}
      />

      {/* Hairline beam from the top */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-[180px]"
        style={{
          background: "linear-gradient(to bottom, rgba(99,102,241,0.30), transparent)",
        }}
      />

      {/* Strong edge fades — pure background, no color bleed */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

// ─── Stat Card Component ────────────────────────────────────────────────────

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(value, isInView, 1500);

  return (
    <div ref={ref} className="group relative overflow-hidden rounded-xl border border-border/40 bg-background/30 p-5 text-left backdrop-blur-sm transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/30 dark:border-border/30 dark:bg-card/20 dark:hover:border-foreground/30 dark:hover:bg-card/40">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative flex flex-col gap-1">
        <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {count}
          <span className="text-foreground/70">{suffix}</span>
        </span>
        <span className="text-[13px] font-medium text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}

// ─── Scroll Indicator ───────────────────────────────────────────────────────

function ScrollIndicator() {
  return (
    <motion.div
      variants={fadeIn}
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
    >
      <button
        onClick={() => {
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
        }}
        className="flex flex-col items-center gap-1.5 text-muted-foreground/40 transition-colors duration-300 hover:text-muted-foreground"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="h-3.5 w-3.5 animate-[bounce_2s_infinite]" />
      </button>
    </motion.div>
  );
}

// ─── Hero Section (Main Export) ──────────────────────────────────────────────

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden pt-12 pb-16"
    >
      <HeroBackground />

      <div className={cn("relative z-10 mx-auto w-full flex-1 flex flex-col justify-center", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Animated Trust Badge */}
          <motion.div variants={fadeUp} className="mb-6 relative flex overflow-hidden rounded-full p-[1px]">
            {/* Spinning gradient border - Optimized inset and will-change */}
            <div className="absolute inset-[-200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(var(--foreground))_50%,transparent_100%)] opacity-30 will-change-transform dark:opacity-40" />
            
            {/* Inner badge content */}
            <div className="relative inline-flex items-center gap-2 rounded-full bg-background/90 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground backdrop-blur-xl">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {HERO_CONTENT.badge}
            </div>
          </motion.div>

          {/* Headline - Guaranteed to fit 2 lines perfectly */}
          <motion.h1
            variants={fadeUp}
            className="mx-auto w-full max-w-[1440px] text-[36px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-[48px] md:text-[60px] lg:text-[72px]"
          >
            {HERO_CONTENT.headlinePart1}
            <br />
            <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent dark:from-foreground dark:to-foreground/60">
              {HERO_CONTENT.headlinePart2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
          >
            {HERO_CONTENT.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-7 text-sm font-semibold text-background shadow-lg shadow-foreground/5 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:opacity-90 active:scale-[0.98] sm:h-12"
            >
              {HERO_CONTENT.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={HERO_CONTENT.secondaryCta.href}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted active:scale-[0.98] sm:h-12 dark:border-input dark:bg-card/30 dark:hover:bg-card/50"
            >
              {HERO_CONTENT.secondaryCta.label}
            </a>
          </motion.div>

          {/* Trust Strip */}
          <motion.div 
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 px-4 sm:mt-16 sm:gap-x-8"
          >
            {TRUST_ROW.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-foreground/50" />
                <span className="text-[13px] font-medium text-muted-foreground">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Integrated Stats Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid w-full max-w-[1200px] grid-cols-2 gap-3 px-2 sm:mt-10 sm:grid-cols-4 sm:gap-4 sm:px-0"
          >
            {STATS.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
