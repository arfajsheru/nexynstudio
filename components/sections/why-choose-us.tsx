"use client";

import { motion } from "framer-motion";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    num: "01",
    title: "Custom Solutions",
    desc: "We don't force your business into generic templates. Every line of code is written specifically to solve your unique operational bottlenecks.",
  },
  {
    num: "02",
    title: "Scalable Architecture",
    desc: "Built on enterprise-grade cloud infrastructure that handles 10 users just as flawlessly as 10,000. Your software grows with you.",
  },
  {
    num: "03",
    title: "Fast Delivery",
    desc: "We utilize modern frameworks and agile methodologies to ship functional software in weeks, not years, ensuring rapid ROI.",
  },
  {
    num: "04",
    title: "Business-Focused",
    desc: "We are business strategists first, developers second. We focus on how the software will increase your revenue and decrease costs.",
  },
  {
    num: "05",
    title: "Modern Tech Stack",
    desc: "Leveraging Next.js, React, and Node.js to ensure your product is lightning fast, highly secure, and easy to maintain long-term.",
  },
  {
    num: "06",
    title: "Dedicated Support",
    desc: "Our partnership doesn't end at launch. We provide ongoing monitoring, updates, and technical support to keep your systems perfect.",
  },
];

export function WhyChooseUsSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 border-t border-border/40">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        opacity: 0.02,
        maskImage: "radial-gradient(circle at center, black, transparent 80%)"
      }} />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 border-b border-border/40 pb-12">
            <motion.div variants={fadeUp} className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                The Nexyn Standard
              </div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                Why Leading Companies{" "}
                <span className="text-foreground/50">Choose Us</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="max-w-sm text-[14px] leading-relaxed text-muted-foreground lg:text-right">
              We combine deep technical expertise with a relentless focus on business outcomes to deliver software that actually matters.
            </motion.p>
          </div>

          {/* ── Editorial Grid ──────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {REASONS.map((reason, i) => (
              <motion.div key={reason.num} variants={fadeUp} className="group relative flex flex-col">
                <div className="mb-4 flex items-end gap-4">
                  <span className="text-5xl font-light tracking-tighter text-foreground/20 transition-colors duration-500 group-hover:text-foreground">
                    {reason.num}
                  </span>
                  <div className="h-px flex-1 bg-border/40 mb-3" />
                </div>
                <h3 className="mb-3 text-[18px] font-bold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground max-w-sm">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
