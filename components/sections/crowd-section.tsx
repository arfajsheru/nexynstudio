"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { CrowdCanvas } from "@/components/ui/crowd-canvas";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function CrowdSection() {
  return (
    <section className="relative min-h-[480px] lg:min-h-[560px] w-full overflow-hidden bg-background py-16 lg:py-24 border-t border-border/20">
      {/* Background radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 65%)",
        }}
      />

      <div className={cn("relative z-10 mx-auto w-full text-center", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-md">
              <Users className="h-3.5 w-3.5 text-indigo-500" />
              <span>Growing Together</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mb-4 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Building Software for <br />
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 bg-clip-text text-transparent italic font-serif">
              Real People & Growing Businesses
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]"
          >
            Join 25+ enterprises, startups, and teams across India that rely on
            Nexyn Studios for custom CRM, ERP, and high-performance applications.
          </motion.p>

          {/* Action button */}
          <motion.div variants={fadeUp} className="mb-12">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-xs sm:text-sm font-semibold text-background transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-foreground/10"
            >
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span>Start Your Custom Build</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Walking Crowd Canvas Layer */}
      <div className="absolute inset-x-0 bottom-0 h-[280px] sm:h-[340px] md:h-[400px] w-full pointer-events-none overflow-hidden">
        <CrowdCanvas
          src="/images/peeps/all-peeps.png"
          rows={15}
          cols={7}
          className="absolute bottom-0 h-full w-full pointer-events-none opacity-85 dark:invert dark:opacity-65 transition-opacity duration-300"
        />
        {/* Soft bottom-to-top gradient fade so figures walk cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
