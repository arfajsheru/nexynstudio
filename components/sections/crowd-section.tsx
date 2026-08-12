"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import { CrowdCanvas } from "@/components/ui/crowd-canvas";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer, fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

export function CrowdSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 lg:py-28">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] opacity-30 dark:opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.35) 0%, rgba(139,92,246,0.2) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        {/* Main Floating Glass Container */}
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-background/95 via-muted/15 to-background/80 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-2xl dark:border-border/30 dark:from-card/40 dark:via-card/20 dark:to-background/60">
          
          {/* Top Hairline Beam Accent */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-[60%] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Live Indicator Pill Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/[0.06] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                <span>Active Client & Team Eco-System</span>
              </div>
            </motion.div>

            {/* Headline with Gradient & Serif Emphasis */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Built for People, <br />
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/50 bg-clip-text text-transparent font-serif italic">
                Engineered for Infinite Growth
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="mb-10 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
            >
              From ambitious startups to scaling enterprises, we partner with teams
              across India to engineer high-velocity software, custom CRMs, and robust ERP systems.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="mb-14 flex flex-col items-center gap-4 sm:flex-row">
              <MagneticWrapper range={50} strength={0.4}>
                <a
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-foreground px-8 text-sm font-semibold text-background shadow-xl transition-all duration-300 hover:opacity-90 hover:shadow-2xl active:scale-[0.98]"
                >
                  <Sparkles className="h-4 w-4 text-indigo-400" />
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </MagneticWrapper>

              <MagneticWrapper range={50} strength={0.4}>
                <a
                  href="/portfolio"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background/60 px-8 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:bg-muted/80 active:scale-[0.98] dark:border-border/50 dark:bg-card/40"
                >
                  <span>Explore Case Studies</span>
                </a>
              </MagneticWrapper>
            </motion.div>

            {/* Feature Highlights Row */}
            <motion.div
              variants={fadeUp}
              className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 mb-20"
            >
              <div className="flex items-center justify-center gap-2.5 rounded-xl border border-border/30 bg-background/40 px-4 py-3 text-xs font-medium text-muted-foreground backdrop-blur-sm dark:bg-card/20">
                <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 rounded-xl border border-border/30 bg-background/40 px-4 py-3 text-xs font-medium text-muted-foreground backdrop-blur-sm dark:bg-card/20">
                <Zap className="h-4 w-4 text-amber-500 shrink-0" />
                <span>High Performance</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 rounded-xl border border-border/30 bg-background/40 px-4 py-3 text-xs font-medium text-muted-foreground backdrop-blur-sm dark:bg-card/20">
                <HeartHandshake className="h-4 w-4 text-indigo-500 shrink-0" />
                <span>Dedicated Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Glowing Ground Baseline Beam where people walk */}
          <div className="absolute inset-x-0 bottom-[140px] sm:bottom-[170px] h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 via-purple-500/30 to-transparent z-10 pointer-events-none" />

          {/* Animated Walking Crowd Stage Container */}
          <div className="relative h-[240px] sm:h-[300px] lg:h-[340px] w-full overflow-hidden rounded-b-2xl">
            {/* Side Fades for Smooth Entry & Exit */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
            
            {/* Crowd Canvas */}
            <CrowdCanvas
              src="/images/peeps/all-peeps.png"
              rows={15}
              cols={7}
              className="absolute bottom-0 h-full w-full pointer-events-none opacity-90 dark:invert dark:opacity-75 transition-opacity duration-300"
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background via-background/60 to-transparent z-20 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
