"use client";

import { motion } from "framer-motion";
import {
  HeadphonesIcon,
  TrendingUp,
  RefreshCcw,
  BarChart3,
  Shield,
  Clock,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const AFTER_LAUNCH_ITEMS = [
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "A dedicated point of contact for all technical issues, available within hours — not days.",
  },
  {
    icon: TrendingUp,
    title: "Performance Monitoring",
    desc: "Real-time uptime monitoring, error tracking, and performance alerts so issues are caught before your users notice.",
  },
  {
    icon: RefreshCcw,
    title: "Continuous Updates",
    desc: "Regular security patches, framework upgrades, and dependency updates to keep your software current and secure.",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    desc: "Ongoing analysis of user behaviour and system performance to identify optimization and expansion opportunities.",
  },
  {
    icon: Shield,
    title: "Security Audits",
    desc: "Periodic vulnerability assessments and penetration testing to ensure your platform remains impenetrable.",
  },
  {
    icon: Clock,
    title: "Feature Roadmap",
    desc: "Collaborative planning for new features and enhancements aligned with your evolving business goals.",
  },
];

export function AfterLaunchSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
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
          className="flex flex-col"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <div className="mb-20 flex flex-col justify-between gap-8 border-b border-border/40 pb-12 lg:flex-row lg:items-end">
            <motion.div variants={fadeUp} className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-foreground/40" />
                Long-Term Partnership
              </div>
              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                What Happens{" "}
                <span className="text-foreground/50">After Launch</span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="max-w-sm text-[14px] leading-relaxed text-muted-foreground lg:text-right"
            >
              Launch day is just the beginning. We stay by your side to ensure
              your software continues to perform, scale, and evolve.
            </motion.p>
          </div>

          {/* ── Content Grid ───────────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AFTER_LAUNCH_ITEMS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-background p-7 transition-all duration-300 hover:border-foreground/20"
              >
                {/* Subtle top gradient */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-foreground/5 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-4 w-4 text-foreground/60" />
                </div>

                <h3 className="mb-2 text-[16px] font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
