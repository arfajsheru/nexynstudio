"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const REASONS = [
  {
    num: "01",
    title: "Custom Solutions",
    tag: "Tailored Code",
    desc: "We don't force your business into generic templates. Every line of code is written specifically to solve your unique operational bottlenecks.",
  },
  {
    num: "02",
    title: "Scalable Architecture",
    tag: "Built to Grow",
    desc: "Enterprise-grade cloud infrastructure that handles 10 users just as flawlessly as 10,000. Your software grows with you.",
  },
  {
    num: "03",
    title: "Fast Delivery",
    tag: "Weeks, Not Years",
    desc: "Modern frameworks and agile methodologies to ship functional software rapidly, ensuring a fast return on investment.",
  },
  {
    num: "04",
    title: "Business-Focused",
    tag: "Strategy First",
    desc: "We are business strategists first, developers second. Every decision is guided by how it grows your revenue and reduces costs.",
  },
  {
    num: "05",
    title: "Modern Tech Stack",
    tag: "Future-Ready",
    desc: "Leveraging Next.js, React, and Node.js to ensure your product is lightning fast, highly secure, and easy to maintain.",
  },
  {
    num: "06",
    title: "Dedicated Support",
    tag: "Always Here",
    desc: "Our partnership doesn't end at launch. We provide ongoing monitoring, updates, and technical support indefinitely.",
  },
];

export function WhyChooseUsSection() {

  return (
    <section className="relative w-full bg-background py-16 lg:py-24 overflow-hidden">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-12 lg:mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
              The Nexyn Standard
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Why Companies <span className="text-foreground/40">Choose Nexyn</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Deep technical expertise combined with a relentless focus on business outcomes. Software that actually moves the needle.
            </p>
          </motion.div>

          {/* ── Premium List ───────────────────────────────────────── */}
          <div className="flex flex-col border-t border-border/20">
            {REASONS.map((reason, i) => (
              <motion.div
                key={reason.num}
                variants={fadeUp}
                className="group relative border-b border-border/20 py-10 lg:py-14 cursor-default overflow-hidden"
              >
                {/* Full-width swipe background on hover */}
                <div className="absolute inset-0 bg-foreground/[0.015] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-12 items-center">

                  {/* Number */}
                  <div className="flex items-center gap-4">
                    <span className="text-[64px] lg:text-[80px] font-bold tracking-tighter leading-none text-foreground/[0.06] group-hover:text-foreground/20 transition-colors duration-700 select-none">
                      {reason.num}
                    </span>
                  </div>

                  {/* Title + Desc */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-foreground/40 group-hover:text-foreground transition-colors duration-700 leading-none whitespace-nowrap lg:w-64 shrink-0">
                      {reason.title}
                    </h3>
                    {/* Animated line between title and desc */}
                    <div className="hidden lg:flex items-center flex-1">
                      <div className="h-px w-0 group-hover:w-full bg-border/50 transition-all duration-700 ease-[0.16,1,0.3,1]" />
                    </div>
                    <p className="text-[14px] lg:text-[15px] leading-relaxed text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-700 max-w-md">
                      {reason.desc}
                    </p>
                  </div>

                  {/* Tag + Arrow */}
                  <div className="hidden lg:flex items-center gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/40 whitespace-nowrap">
                      {reason.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-foreground/30 shrink-0" />
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

