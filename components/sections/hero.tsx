"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { HERO_CONTENT, LAYOUT, TRUST_ROW, STATS } from "@/lib/constants";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/motion";
import { useCountUp } from "@/hooks/use-interactions";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

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
    <div
      ref={ref}
      className="group relative flex flex-col justify-center p-4 sm:p-5 text-left transition-colors duration-200 hover:bg-foreground/[0.02]"
    >
      <div className="flex items-baseline gap-0.5">
        <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl tabular-nums">
          {count}
        </span>
        <span className="text-sm font-bold text-foreground/75 sm:text-base">
          {suffix}
        </span>
      </div>
      <span className="mt-1 text-[11px] sm:text-[12px] font-medium text-muted-foreground tracking-tight">
        {label}
      </span>
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
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
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
          {/* Authentic Studio Status Badge */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 py-1 text-[11px] sm:text-xs font-medium tracking-tight text-muted-foreground shadow-sm backdrop-blur-md transition-colors hover:border-foreground/30 hover:text-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="font-semibold text-foreground/90">{HERO_CONTENT.badge}</span>
              <span className="text-border">/</span>
              <span>{HERO_CONTENT.status}</span>
            </div>
          </motion.div>

          {/* Headline with balanced, high-impact studio typography */}
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-[95%] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl text-balance text-3xl font-extrabold tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-[72px] xl:text-[84px] lg:leading-[1.05]"
          >
            {HERO_CONTENT.headlinePrefix}{" "}
            <span className="font-serif italic font-normal text-foreground/75">
              {HERO_CONTENT.headlineAccent}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[90%] md:max-w-3xl lg:max-w-4xl text-balance text-sm leading-relaxed text-muted-foreground sm:text-base md:text-[19px] md:mt-6"
          >
            {HERO_CONTENT.description}
            <span className="hidden sm:inline">{HERO_CONTENT.descriptionSuffix}</span>
          </motion.p>

          {/* Compact, Refined CTAs (Sleek, Not Oversized) */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            <MagneticWrapper range={35} strength={0.25}>
              <a
                href={HERO_CONTENT.primaryCta.href}
                className="group inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-4 sm:px-5 text-xs sm:text-[13px] font-medium text-background shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200 hover:opacity-90 active:scale-[0.98] whitespace-nowrap"
              >
                <span>{HERO_CONTENT.primaryCta.label}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0" />
              </a>
            </MagneticWrapper>

            <MagneticWrapper range={35} strength={0.25}>
              <a
                href={HERO_CONTENT.secondaryCta.href}
                className="inline-flex h-9 sm:h-10 items-center justify-center rounded-lg border border-border/80 bg-background/70 px-4 sm:px-5 text-xs sm:text-[13px] font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-muted/70 hover:border-foreground/30 active:scale-[0.98] whitespace-nowrap"
              >
                {HERO_CONTENT.secondaryCta.label}
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Minimalist Trust & Credibility Strip */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground/80 sm:mt-10 sm:gap-x-7"
          >
            {TRUST_ROW.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-foreground/35" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Sleek Hairline Stats Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-px border-y border-border/40 bg-border/40 sm:grid-cols-4 sm:border-x sm:rounded-xl sm:shadow-lg overflow-hidden"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-background sm:bg-background/40 sm:backdrop-blur-md">
                <StatCard
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
