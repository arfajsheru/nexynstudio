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
    <section className="relative overflow-hidden py-16 lg:py-24">
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
          <motion.div variants={fadeUp} className="mb-16 lg:mb-24 flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
              Long-Term Partnership
            </div>
            <h2 className="mx-auto text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl max-w-3xl">
              What Happens <br className="hidden sm:block" />
              <span className="text-foreground/50">After Launch</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Launch day is just the beginning. We stay by your side to ensure your software continues to perform, scale, and evolve.
            </p>
          </motion.div>

          {/* ── Content Grid ───────────────────────────────────────── */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24 lg:gap-y-20">
            {/* Subtle background glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-[120px]" />

            {AFTER_LAUNCH_ITEMS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group flex flex-col items-start gap-5 sm:flex-row sm:gap-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-all duration-500 group-hover:scale-105 group-hover:bg-foreground/10">
                  <item.icon className="h-6 w-6 text-foreground/80 transition-colors group-hover:text-foreground" />
                </div>
                <div>
                  <h3 className="mb-2.5 text-xl font-bold tracking-tight text-foreground transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
