"use client";

import { motion } from "framer-motion";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Discovery",
    desc: "We analyze your business processes, identify bottlenecks, and define the exact scope of the software needed to solve them.",
  },
  {
    title: "Planning",
    desc: "We architect the system data models, user flows, and technical stack, providing you with a transparent roadmap and timeline.",
  },
  {
    title: "Design",
    desc: "Our UI/UX team creates high-fidelity prototypes, ensuring the software is intuitive and requires minimal training for your team.",
  },
  {
    title: "Development",
    desc: "Our engineers build the core application using agile methodology, giving you access to staging environments to see progress live.",
  },
  {
    title: "Testing",
    desc: "Rigorous QA testing, security audits, and edge-case simulations ensure the platform is bulletproof before it touches production data.",
  },
  {
    title: "Deployment",
    desc: "We handle the infrastructure setup, data migration, and seamless launch, ensuring zero downtime for your existing operations.",
  },
  {
    title: "Support",
    desc: "Post-launch, we provide continuous monitoring, server maintenance, and feature enhancements as your business scales.",
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="relative py-24 lg:py-32">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-20 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              How We Work
            </div>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Development <span className="text-foreground/50">Process</span>
            </h2>
          </motion.div>

          {/* ── Vertical Timeline ──────────────────────────────────── */}
          <div className="relative mx-auto w-full max-w-2xl">
            {/* The Line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border/40 md:left-1/2 md:-translate-x-1/2" />

            {STEPS.map((step, index) => (
              <TimelineItem 
                key={step.title} 
                step={step} 
                index={index} 
                total={STEPS.length}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({ step, index, total }: { step: any, index: number, total: number }) {
  const { ref, isInView } = useInView(0.5); // trigger when 50% in view
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative mb-12 flex items-center md:justify-center w-full last:mb-0 group">
      
      {/* Node indicator */}
      <div 
        className={cn(
          "absolute left-5 z-10 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-background transition-all duration-700 md:left-1/2 md:-translate-x-1/2",
          isInView ? "border-foreground scale-110" : "border-border/50 scale-100",
          index === 0 && "top-0 translate-y-0",
          index === total - 1 && "bottom-0 translate-y-0",
          index !== 0 && index !== total - 1 && "top-1/2"
        )}
      >
        <div className={cn(
          "h-1.5 w-1.5 rounded-full transition-all duration-700",
          isInView ? "bg-foreground scale-100" : "bg-transparent scale-0"
        )} />
      </div>

      {/* Content Box */}
      <div className={cn(
        "ml-14 w-full md:w-[45%] md:ml-0",
        isEven ? "md:pr-14 md:text-right" : "md:pl-14 md:ml-auto"
      )}>
        <div className={cn(
          "transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-40 translate-y-4"
        )}>
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 mb-2">
            Phase 0{index + 1}
          </div>
          <h3 className={cn(
            "mb-2 text-[18px] font-bold transition-colors duration-700",
            isInView ? "text-foreground" : "text-foreground/50"
          )}>
            {step.title}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
