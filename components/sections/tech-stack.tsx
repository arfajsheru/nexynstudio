"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  GitBranch,
  Layers,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const STACK_LAYERS = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "User Interface Layer",
    icon: Monitor,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    color: "from-foreground/10 to-foreground/5",
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Business Logic Layer",
    icon: Server,
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL"],
    color: "from-foreground/8 to-foreground/3",
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Data Persistence Layer",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
    color: "from-foreground/6 to-foreground/2",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Infrastructure Layer",
    icon: Cloud,
    technologies: ["AWS", "Docker", "CI/CD", "Vercel"],
    color: "from-foreground/5 to-foreground/[0.01]",
  },
];

const CAPABILITIES = [
  { icon: Shield, label: "Enterprise Security" },
  { icon: Zap, label: "High Performance" },
  { icon: GitBranch, label: "Version Control" },
  { icon: Layers, label: "Micro-Services" },
];

export function TechStackSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-foreground/[0.02]">
      {/* Subtle blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.015,
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
          className="flex flex-col items-center"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-20 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              Engineering Foundation
            </div>
            <h2 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Technology{" "}
              <span className="text-foreground/50">Architecture</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
              We leverage a battle-tested, modern stack designed for
              performance, security, and long-term maintainability across every
              layer of your application.
            </p>
          </motion.div>

          {/* ── Architecture Blueprint ─────────────────────────────── */}
          <motion.div variants={fadeUp} className="w-full max-w-4xl">
            <div className="relative flex flex-col gap-4">
              {/* Connecting line */}
              <div className="absolute left-8 top-12 bottom-12 hidden w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/5 lg:block" />

              {STACK_LAYERS.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  variants={fadeUp}
                  className="group relative"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 transition-all duration-300 hover:border-foreground/20",
                      "lg:ml-16",
                    )}
                  >
                    {/* Top gradient line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                      {/* Left: Layer Info */}
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-foreground/5 transition-transform duration-300 group-hover:scale-110">
                          <layer.icon className="h-5 w-5 text-foreground/70" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
                            Layer 0{index + 1}
                          </div>
                          <h3 className="text-[16px] font-bold text-foreground">
                            {layer.title}
                          </h3>
                          <p className="text-[12px] text-muted-foreground">
                            {layer.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Right: Tech Tags */}
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        {layer.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full border border-border/50 bg-foreground/[0.03] px-3 py-1 text-[11px] font-medium text-muted-foreground transition-colors duration-200 hover:border-foreground/20 hover:text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Node on the vertical line */}
                  <div className="absolute left-[26px] top-1/2 hidden h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border/50 bg-background transition-all duration-300 group-hover:border-foreground group-hover:scale-110 lg:flex">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/30 transition-colors duration-300 group-hover:bg-foreground" />
                  </div>

                  {/* Connection to card */}
                  <div className="absolute left-[34px] top-1/2 hidden h-px w-[calc(4rem-34px)] bg-border/40 lg:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Bottom Capabilities Row ─────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-background p-5 text-center transition-colors duration-200 hover:border-foreground/20"
              >
                <cap.icon className="h-4 w-4 text-foreground/50" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {cap.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
