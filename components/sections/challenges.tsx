"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const CHALLENGES = [
  {
    problem: "Manual Operations",
    problemDesc: "Teams waste hours on repetitive data entry, copy-pasting, and manual syncing across different software tools.",
    solution: "Automated Workflows",
    solutionDesc: "We build custom scripts and API integrations that eliminate manual work, allowing your team to focus on high-value tasks.",
  },
  {
    problem: "Poor Lead Tracking",
    problemDesc: "Valuable leads slip through the cracks because sales teams rely on fragmented spreadsheets and sticky notes.",
    solution: "Centralized Lead Management",
    solutionDesc: "Custom CRM systems designed exactly for your sales process, ensuring every lead is tracked, nurtured, and closed.",
  },
  {
    problem: "Scattered Data",
    problemDesc: "Business intelligence is impossible when customer data, inventory, and financials live in disconnected systems.",
    solution: "Unified Data Architecture",
    solutionDesc: "We connect your disparate systems into a single source of truth, providing real-time visibility into your entire operation.",
  },
  {
    problem: "Lack Of Automation",
    problemDesc: "Scaling is bottlenecked by human dependency for sending emails, generating invoices, and updating statuses.",
    solution: "End-to-End Automation",
    solutionDesc: "Intelligent triggers that automatically handle communications, billing, and operational updates based on specific business rules.",
  },
  {
    problem: "Inefficient Workflows",
    problemDesc: "Generic off-the-shelf software forces your team to change how they work to fit the software's limitations.",
    solution: "Bespoke Business Software",
    solutionDesc: "Software engineered precisely around your existing, proven business processes—enhancing them rather than breaking them.",
  },
  {
    problem: "Limited Business Visibility",
    problemDesc: "Leadership makes decisions based on outdated reports, gut feelings, and incomplete performance metrics.",
    solution: "Real-Time Custom Dashboards",
    solutionDesc: "Live analytics and KPI tracking tailored to the metrics that actually matter for your specific business goals.",
  },
];

export function ChallengesSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-foreground/[0.02]">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start"
        >
          {/* ── Left Side: Sticky Header ────────────────────── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div variants={fadeUp}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                The Problems We Solve
              </div>
              <h2 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
                Software Built To Remove{" "}
                <span className="text-foreground/50">Business Bottlenecks</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-muted-foreground max-w-md">
                Off-the-shelf software rarely fits perfectly. We identify the operational friction slowing down your growth and architect custom solutions to solve it permanently.
              </p>
            </motion.div>
          </div>

          {/* ── Right Side: Challenges List ────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {CHALLENGES.map((item, index) => (
              <motion.div
                key={item.problem}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 transition-colors duration-300 hover:border-foreground/20"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Problem */}
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
                      <AlertCircle className="h-4 w-4 text-foreground/40" />
                      Before
                    </div>
                    <h3 className="mb-2 text-[16px] font-bold text-foreground">
                      {item.problem}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {item.problemDesc}
                    </p>
                  </div>

                  {/* Desktop Divider / Arrow */}
                  <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background z-10 group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-3.5 w-3.5 text-foreground/40" />
                  </div>

                  {/* Solution */}
                  <div className="relative sm:pl-6 sm:border-l border-border/40">
                    <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-foreground" />
                      After
                    </div>
                    <h3 className="mb-2 text-[16px] font-bold text-foreground">
                      {item.solution}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {item.solutionDesc}
                    </p>
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
