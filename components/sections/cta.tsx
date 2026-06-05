"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, var(--foreground), transparent)",
          opacity: 0.03,
        }}
      />

      <div
        className={cn(
          "relative z-10 mx-auto w-full",
          LAYOUT.maxWidth,
          LAYOUT.paddingX,
        )}
      >
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <Sparkles className="h-3 w-3 text-foreground/40" />
              Start Your Project
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mb-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Ready To Build Software{" "}
            <span className="text-foreground/50">That Actually Works?</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mb-12 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            Tell us about your business challenges. We&apos;ll show you exactly
            how custom software can solve them — with a free consultation and
            project estimate.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-[13px] font-semibold text-background transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-foreground/10"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-8 py-3.5 text-[13px] font-semibold text-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-foreground/5"
            >
              View Services
            </a>
          </motion.div>

          {/* Bottom trust line */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-6 text-[11px] text-muted-foreground/60"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-foreground/30" />
              Free Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-foreground/30" />
              No Commitment
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-foreground/30" />
              Fast Response
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
