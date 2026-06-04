"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Server,
  GitBranch,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

// ── Section Background ───────────────────────────────────────────────────────

function ServicesBg() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

// ── CRM Dashboard Visual (now for Custom Software) ───────────────────────────

function SoftwareDashboard() {
  const pipeline = [
    { label: "Active", count: 48, pct: 100, bg: "bg-foreground/70" },
    { label: "Review", count: 31, pct: 65, bg: "bg-foreground/50" },
    { label: "Testing", count: 18, pct: 38, bg: "bg-foreground/35" },
    { label: "Deployed", count: 9, pct: 19, bg: "bg-foreground/20" },
  ];
  const items = [
    { initials: "SM", name: "Sarah Mitchell", status: "Active", value: "$24k" },
    { initials: "JC", name: "James Chen", status: "Follow Up", value: "$18k" },
    { initials: "AP", name: "Aria Patel", status: "Proposal", value: "$41k" },
  ];

  return (
    <div className="flex h-full flex-col gap-3">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Total Deals", value: "$283K", delta: "+12%" },
          { label: "Win Rate", value: "64%", delta: "+4%" },
          { label: "Active", value: "31", delta: "+7" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border/50 bg-background/60 px-3 py-2.5"
          >
            <div className="text-[10px] font-medium text-muted-foreground">{s.label}</div>
            <div className="mt-1 text-sm font-bold text-foreground">{s.value}</div>
            <div className="text-[10px] font-semibold text-foreground/60">{s.delta}</div>
          </div>
        ))}
      </div>

      {/* Pipeline */}
      <div className="rounded-lg border border-border/50 bg-background/40 p-3.5">
        <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          Pipeline
        </div>
        <div className="space-y-2.5">
          {pipeline.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5">
              <div className="w-14 shrink-0 text-[10px] font-medium text-muted-foreground">{s.label}</div>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted/60">
                <div
                  className={cn("h-full rounded-full", s.bg)}
                  style={{ width: `${s.pct}%` }}
                />
              </div>
              <div className="w-6 shrink-0 text-right text-[10px] font-bold text-foreground">
                {s.count}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="flex-1 rounded-lg border border-border/50 bg-background/40 p-3.5">
        <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          Recent
        </div>
        <div className="space-y-2.5">
          {items.map((c) => (
            <div key={c.name} className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-[9px] font-bold text-foreground">
                {c.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[11px] font-semibold text-foreground">{c.name}</div>
                <div className="text-[10px] text-muted-foreground">{c.status}</div>
              </div>
              <div className="shrink-0 text-[11px] font-bold text-foreground">{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── UI/UX Design Visual ──────────────────────────────────────────────────────

function DesignVisual() {
  return (
    <div className="flex h-full flex-col gap-2.5 py-1">
      {/* Color palette */}
      <div className="flex items-center gap-2">
        {["bg-foreground", "bg-foreground/60", "bg-foreground/30", "bg-foreground/15", "bg-foreground/5"].map(
          (c, i) => (
            <div key={i} className={cn("h-6 flex-1 rounded-md", c)} />
          )
        )}
      </div>
      {/* Typography scale */}
      <div className="rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="text-[16px] font-bold text-foreground">Heading One</div>
        <div className="mt-1 text-[12px] font-semibold text-foreground/70">Subtitle text here</div>
        <div className="mt-1.5 text-[10px] leading-relaxed text-muted-foreground">
          Body text demonstrating clean typography hierarchy and spacing.
        </div>
      </div>
      {/* Component grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border/50 bg-background/40 p-2.5">
          <div className="h-2 w-2/3 rounded bg-foreground/15" />
          <div className="mt-1.5 h-5 rounded bg-foreground text-center text-[8px] font-medium leading-5 text-background">
            Button
          </div>
        </div>
        <div className="rounded-lg border border-border/50 bg-background/40 p-2.5">
          <div className="h-2 w-1/2 rounded bg-foreground/15" />
          <div className="mt-1.5 h-5 rounded border border-border bg-background text-center text-[8px] font-medium leading-5 text-foreground">
            Input
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Browser Preview Visual ───────────────────────────────────────────────────

function BrowserPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-border/50">
      <div className="flex items-center gap-1.5 border-b border-border/40 bg-muted/20 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-foreground/15" />
        <div className="h-2 w-2 rounded-full bg-foreground/15" />
        <div className="h-2 w-2 rounded-full bg-foreground/15" />
        <div className="ml-2 flex h-4 flex-1 items-center rounded border border-border/40 bg-background/60 px-2">
          <span className="text-[8px] text-muted-foreground">nexynstudios.com</span>
        </div>
      </div>
      <div className="space-y-2 p-3">
        <div className="h-2.5 w-3/4 rounded bg-foreground/10" />
        <div className="h-1.5 w-full rounded bg-foreground/5" />
        <div className="h-1.5 w-5/6 rounded bg-foreground/5" />
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          <div className="h-12 rounded border border-border/30 bg-foreground/[0.03]" />
          <div className="h-12 rounded border border-border/30 bg-foreground/[0.03]" />
          <div className="h-12 rounded border border-border/30 bg-foreground/[0.03]" />
        </div>
      </div>
    </div>
  );
}

// ── Phone Mockup ─────────────────────────────────────────────────────────────

function PhoneMockup() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="relative h-[110px] w-[56px] overflow-hidden rounded-[14px] border-2 border-foreground/20 bg-background">
        <div className="absolute left-1/2 top-1.5 h-[5px] w-[16px] -translate-x-1/2 rounded-full bg-foreground/20" />
        <div className="absolute inset-0 top-5 flex flex-col gap-1 p-1.5">
          <div className="h-3 w-full rounded bg-foreground/10" />
          <div className="grid flex-1 grid-cols-2 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded border border-border/30 bg-foreground/[0.04]" />
            ))}
          </div>
          <div className="h-2.5 w-3/4 rounded bg-foreground/10" />
        </div>
      </div>
    </div>
  );
}

// ── Cloud Architecture ───────────────────────────────────────────────────────

function CloudDiagram() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-foreground/5">
        <Cloud className="h-5 w-5 text-foreground/60" />
      </div>
      <div className="flex w-full items-start justify-between px-3">
        {[
          { label: "AWS", icon: Server },
          { label: "Docker", icon: GitBranch },
          { label: "CI/CD", icon: Zap },
        ].map((n) => (
          <div key={n.label} className="flex flex-col items-center gap-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-foreground/5">
              <n.icon className="h-4 w-4 text-foreground/50" />
            </div>
            <span className="text-[9px] font-medium text-muted-foreground">{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Analytics Chart ──────────────────────────────────────────────────────────

function AnalyticsChart() {
  const bars = [22, 35, 28, 50, 42, 65, 58, 80];
  return (
    <div className="space-y-2.5">
      <div className="flex gap-2">
        {[
          { label: "Traffic", value: "+124%" },
          { label: "Leads", value: "+89%" },
        ].map((m) => (
          <div key={m.label} className="flex-1 rounded-lg border border-border/50 bg-background/50 px-3 py-2.5">
            <div className="text-[10px] text-muted-foreground">{m.label}</div>
            <div className="mt-0.5 text-sm font-bold text-foreground">{m.value}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 text-[10px] text-muted-foreground">Monthly Growth</div>
        <div className="flex h-14 items-end gap-1">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col justify-end">
              <div
                className="w-full rounded-sm bg-foreground/20"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Services Section ─────────────────────────────────────────────────────────

export function ServicesSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <ServicesBg />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>

        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-foreground/40" />
            What We Build
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[48px]"
          >
            Technology Solutions Designed{" "}
            <span className="text-foreground/50">For Business Growth</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground"
          >
            We help businesses automate operations, improve productivity,
            strengthen customer relationships, and accelerate growth through
            modern software solutions and digital experiences.
          </motion.p>
        </motion.div>

        {/* ── Bento Grid ─────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12"
        >

          {/* ── FEATURED: Custom Software Development ─────────────── */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-6 sm:p-8 md:col-span-2 lg:col-span-7 lg:row-span-2 transition-colors duration-300 hover:border-foreground/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-foreground/5">
                    <Layers className="h-5 w-5 text-foreground/70" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Enterprise Ready
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40" />
              </div>

              <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-[26px]">
                Custom Software Development
              </h3>
              <p className="mb-5 max-w-lg text-[14px] leading-relaxed text-muted-foreground">
                Custom-built systems designed around your sales process,
                team workflows and business operations — not a generic tool,
                but software built exactly for how you work.
              </p>

              {/* Capabilities */}
              <div className="mb-6 flex flex-wrap gap-2">
                {[
                  "Lead Management",
                  "Sales Pipeline Tracking",
                  "Task Management",
                  "Team Collaboration",
                  "Workflow Automation",
                ].map((cap) => (
                  <span
                    key={cap}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/50 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3 w-3 text-foreground/30" />
                    {cap}
                  </span>
                ))}
              </div>

              {/* Dashboard visual */}
              <div className="min-h-[220px] flex-1 overflow-hidden rounded-xl border border-border/40 bg-muted/10 p-3.5">
                <SoftwareDashboard />
              </div>

              {/* Impact */}
              <div className="mt-5 rounded-xl border border-border/50 bg-foreground/[0.02] px-5 py-3.5">
                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/50">
                  Business Impact
                </div>
                <div className="text-[13px] leading-relaxed text-muted-foreground">
                  Increase conversions, improve pipeline visibility and
                  streamline customer management across your entire team.
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── MEDIUM: UI/UX Design ──────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-5 sm:p-6 lg:col-span-5 transition-colors duration-300 hover:border-foreground/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-foreground/5">
                    <Palette className="h-4 w-4 text-foreground/60" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Design First
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40" />
              </div>

              <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                UI/UX Design
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                Research-driven design that creates intuitive, beautiful
                interfaces — from design systems to full product design.
              </p>

              <div className="mb-4 overflow-hidden rounded-xl border border-border/40 bg-muted/10 p-3">
                <DesignVisual />
              </div>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {["Design Systems", "Prototyping", "User Research", "Brand Identity"].map(
                  (cap) => (
                    <span
                      key={cap}
                      className="rounded-full border border-border/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {cap}
                    </span>
                  )
                )}
              </div>

              <div className="mt-auto text-[12px] font-medium text-foreground/50">
                Beautiful interfaces that convert visitors into customers.
              </div>
            </div>
          </motion.div>

          {/* ── MEDIUM: Web Development ───────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-5 sm:p-6 lg:col-span-5 transition-colors duration-300 hover:border-foreground/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-foreground/5">
                    <Globe className="h-4 w-4 text-foreground/60" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Scalable Architecture
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40" />
              </div>

              <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                Web Development
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
                Modern websites and web applications built for performance,
                scalability and long-term business growth.
              </p>

              <div className="mb-4 overflow-hidden rounded-xl border border-border/40 bg-muted/10 p-2.5">
                <BrowserPreview />
              </div>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {["Corporate Sites", "Web Apps", "Customer Portals", "Admin Panels"].map(
                  (cap) => (
                    <span
                      key={cap}
                      className="rounded-full border border-border/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {cap}
                    </span>
                  )
                )}
              </div>

              <div className="mt-auto text-[12px] font-medium text-foreground/50">
                Stronger digital experiences, better customer engagement.
              </div>
            </div>
          </motion.div>

          {/* ── SUPPORTING: Mobile App Development ─────────────────── */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-5 sm:p-6 lg:col-span-4 transition-colors duration-300 hover:border-foreground/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-foreground/5">
                    <Smartphone className="h-4 w-4 text-foreground/60" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Business Focused
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40" />
              </div>

              <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                Mobile App Development
              </h3>
              <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                Native and cross-platform apps that deliver seamless
                experiences on every device.
              </p>

              <div className="mb-4 overflow-hidden rounded-xl border border-border/40 bg-muted/10">
                <PhoneMockup />
              </div>

              <div className="mb-3 flex flex-wrap gap-1.5">
                {["Android", "iOS", "Cross Platform"].map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-border/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="mt-auto text-[12px] font-medium text-foreground/50">
                Reach customers everywhere.
              </div>
            </div>
          </motion.div>

          {/* ── SUPPORTING: Cloud & DevOps ─────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-5 sm:p-6 lg:col-span-4 transition-colors duration-300 hover:border-foreground/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-foreground/5">
                    <Cloud className="h-4 w-4 text-foreground/60" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Production Ready
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40" />
              </div>

              <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                Cloud & DevOps
              </h3>
              <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                Reliable infrastructure, automated deployments and scalable
                cloud architecture for production workloads.
              </p>

              <div className="mb-4 min-h-[100px] overflow-hidden rounded-xl border border-border/40 bg-muted/10 p-3">
                <CloudDiagram />
              </div>

              <div className="mb-3 flex flex-wrap gap-1.5">
                {["AWS", "Docker", "CI/CD Pipelines"].map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-border/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="mt-auto text-[12px] font-medium text-foreground/50">
                Reliable deployments, scalable infrastructure.
              </div>
            </div>
          </motion.div>

          {/* ── SUPPORTING: Digital Marketing ──────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background p-5 sm:p-6 lg:col-span-4 transition-colors duration-300 hover:border-foreground/15"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="relative flex h-full flex-col">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-foreground/5">
                    <TrendingUp className="h-4 w-4 text-foreground/60" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Growth Driven
                  </span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-foreground/15 transition-colors duration-300 group-hover:text-foreground/40" />
              </div>

              <h3 className="mb-2 text-lg font-bold tracking-tight text-foreground">
                Digital Marketing
              </h3>
              <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                Data-driven marketing strategies that generate qualified
                traffic, leads and measurable business growth.
              </p>

              <div className="mb-4 overflow-hidden rounded-xl border border-border/40 bg-muted/10 p-3">
                <AnalyticsChart />
              </div>

              <div className="mb-3 flex flex-wrap gap-1.5">
                {["SEO", "Paid Advertising", "Lead Generation"].map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-border/50 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="mt-auto text-[12px] font-medium text-foreground/50">
                Generate traffic, leads and business growth.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
