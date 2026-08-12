"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Play, Gauge, Shield, RefreshCw } from "lucide-react";
import { CrowdCanvas } from "@/components/ui/crowd-canvas";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

// Speech / Thought Bubbles floating above the walking crowd
const THOUGHT_BUBBLES = [
  { id: 1, text: "🚀 Deploying Next.js 16 App", x: "12%", y: "45%", delay: 0 },
  { id: 2, text: "⚡ Custom CRM Automation", x: "32%", y: "25%", delay: 1.5 },
  { id: 3, text: "🔒 Enterprise Security Built-in", x: "55%", y: "50%", delay: 3 },
  { id: 4, text: "📈 99.9% Uptime Guarantee", x: "74%", y: "30%", delay: 4.5 },
  { id: 5, text: "💡 Tailored ERP Systems", x: "86%", y: "60%", delay: 2 },
];

export function CrowdSection() {
  const [crowdSpeed, setCrowdSpeed] = useState<number>(1);
  const [activeBubble, setActiveBubble] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-background py-20 lg:py-32">
      {/* Background Radial Spotlights */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-25 dark:opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 translate-x-1/2 h-[500px] w-[500px] opacity-20 dark:opacity-10 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        {/* Main Section Header Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end"
        >
          {/* Left Column: Headline & Subtitle */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-md">
              <Activity className="h-3 w-3 text-foreground/40" />
              <span>Interactive Crowd Experience</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Software Built for{" "}
              <span className="font-serif italic text-foreground/50">
                Real Humans
              </span>{" "}
              <br className="hidden sm:inline" />
              & Growing Businesses
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
            >
              We don&apos;t just write code; we design seamless digital experiences for thousands of daily active users across custom CRM, ERP, and web applications.
            </motion.p>
          </div>

          {/* Right Column: Interactive Radar Controls */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <motion.div
              variants={fadeUp}
              className="w-full lg:w-auto rounded-2xl border border-border/60 bg-background/80 p-4 shadow-xl backdrop-blur-xl dark:border-border/30 dark:bg-card/40"
            >
              <div className="mb-3 flex items-center justify-between gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5 text-indigo-500" />
                  Pace Control
                </span>
                <span className="text-[10px] text-indigo-500 font-mono">
                  {crowdSpeed === 0.5 ? "Slow" : crowdSpeed === 1 ? "Normal" : "Rush Hour"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {[
                  { label: "Relaxed", speed: 0.5 },
                  { label: "Normal", speed: 1.0 },
                  { label: "Rush", speed: 1.8 },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setCrowdSpeed(item.speed)}
                    className={cn(
                      "flex-1 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200",
                      crowdSpeed === item.speed
                        ? "bg-foreground text-background shadow-md font-semibold"
                        : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Unique Stage Card with Canvas & Floating Thought Bubbles */}
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-background/90 via-muted/20 to-background/95 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl dark:border-border/30 dark:from-card/50 dark:to-background/80">
          
          {/* Top Hairline Light Accent */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Interactive Floating Thought Bubbles Layer */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {THOUGHT_BUBBLES.map((bubble) => (
              <motion.div
                key={bubble.id}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{
                  opacity: [0, 0.9, 0.9, 0],
                  y: [15, 0, -10, -25],
                  scale: [0.9, 1, 1, 0.95],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: bubble.delay,
                  ease: "easeInOut",
                }}
                className="absolute hidden sm:inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md dark:border-border/40 dark:bg-card/90"
                style={{ left: bubble.x, top: bubble.y }}
              >
                <span>{bubble.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Main Stage Walking Canvas */}
          <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] w-full overflow-hidden rounded-2xl">
            
            {/* Left & Right Smooth Entry Fades */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

            {/* Crowd Canvas */}
            <CrowdCanvas
              key={crowdSpeed}
              src="/images/peeps/all-peeps.png"
              rows={15}
              cols={7}
              className="absolute bottom-0 h-full w-full pointer-events-none opacity-90 dark:invert dark:opacity-75 transition-opacity duration-300"
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />
          </div>

          {/* Bottom Callout Row */}
          <div className="relative z-30 mt-8 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-6 sm:flex-row">
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Ready To Build Your Custom Solution?
                </div>
                <div className="text-xs text-muted-foreground">
                  Get a free tech audit & architecture consultation today.
                </div>
              </div>
            </div>

            <MagneticWrapper range={50} strength={0.4}>
              <a
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-7 text-sm font-semibold text-background shadow-lg shadow-foreground/5 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:opacity-90 active:scale-[0.98] sm:h-12"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </MagneticWrapper>
          </div>

        </div>
      </div>
    </section>
  );
}
