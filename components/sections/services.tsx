"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

// ── Image imports ─────────────────────────────────────────────────────────────
import imgSoftware  from "@/assets/service/Custom-Software-Development.png";
import imgDesign    from "@/assets/service/UI-UX-Design.png";
import imgWeb       from "@/assets/service/Web-Development.png";
import imgMobile    from "@/assets/service/Mobile-App-Development.png";
import imgCloud     from "@/assets/service/Cloud-DevOps.png";
import imgMarketing from "@/assets/service/Digital-Marketing.png";

const ACCENT = {
  software:  "#6366f1",
  design:    "#a855f7",
  web:       "#06b6d4",
  mobile:    "#10b981",
  cloud:     "#3b82f6",
  marketing: "#f97316",
} as const;

const SERVICES = [
  {
    key: "software"  as const,
    icon: Layers,
    tag:  "Custom Development",
    title: "Custom Software",
    desc: "Business software built precisely around your workflows — CRM, ERP, portals, and automation tools engineered for how your team actually works.",
    caps: ["CRM & ERP", "Workflow Automation", "Admin Portals"],
    img: imgSoftware,
    imgAlt: "Custom Software Development",
  },
  {
    key: "design"    as const,
    icon: Palette,
    tag:  "Design First",
    title: "UI/UX Design",
    desc: "Research-driven interfaces that are intuitive, beautiful, and optimised to turn every visitor into a loyal, paying customer for your business.",
    caps: ["Design Systems", "Prototyping", "User Research"],
    img: imgDesign,
    imgAlt: "UI/UX Design",
  },
  {
    key: "web"       as const,
    icon: Globe,
    tag:  "Performance Focused",
    title: "Web Development",
    desc: "Modern, fast, and scalable websites and web applications built for growth — from marketing sites to complex customer-facing platforms.",
    caps: ["Web Apps", "Corporate Sites", "Customer Portals"],
    img: imgWeb,
    imgAlt: "Web Development",
  },
  {
    key: "mobile"    as const,
    icon: Smartphone,
    tag:  "Cross Platform",
    title: "Mobile Apps",
    desc: "Native and cross-platform apps for iOS and Android, built around your users' needs to drive engagement and measurable business results.",
    caps: ["iOS & Android", "React Native", "API Integration"],
    img: imgMobile,
    imgAlt: "Mobile App Development",
  },
  {
    key: "cloud"     as const,
    icon: Cloud,
    tag:  "Production Ready",
    title: "Cloud & DevOps",
    desc: "Reliable cloud infrastructure with automated deployments, continuous monitoring, and scalable architecture that keeps your systems always online.",
    caps: ["AWS & GCP", "CI/CD Pipelines", "24/7 Monitoring"],
    img: imgCloud,
    imgAlt: "Cloud and DevOps",
  },
  {
    key: "marketing" as const,
    icon: TrendingUp,
    tag:  "Growth Driven",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that attract qualified traffic, generate high-intent leads, and deliver consistent growth with maximum ROI on every budget.",
    caps: ["SEO", "Paid Ads", "Lead Generation"],
    img: imgMarketing,
    imgAlt: "Digital Marketing",
  },
] as const;

function ServicesBg() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.025] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

function ServiceCard({ s }: { s: (typeof SERVICES)[number] }) {
  const Icon = s.icon;
  const color = ACCENT[s.key];

  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-300 hover:border-border hover:shadow-lg"
    >
      {/* ── Image: fixed 220px height, object-cover, no overlay ── */}
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={s.img}
          alt={s.imgAlt}
          fill
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* ── Thin accent divider line ─────────────────────────── */}
      <div className="h-[3px] w-full" style={{ background: color, opacity: 0.7 }} />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5">

        {/* Icon + tag + arrow */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5">
              <Icon className="h-4 w-4 text-foreground/60" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {s.tag}
            </span>
          </div>
          <ArrowUpRight className="h-3.5 w-3.5 text-foreground/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground/50" />
        </div>

        {/* Title */}
        <h3 className="mb-2 text-[18px] font-bold leading-snug tracking-tight text-foreground">
          {s.title}
        </h3>

        {/* Description — same 2-line text for all cards */}
        <p className="mb-4 text-[13px] leading-[1.65] text-muted-foreground">
          {s.desc}
        </p>

        {/* Pills */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {s.caps.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-border/60 bg-foreground/[0.02] px-3 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <ServicesBg />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Header ──────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              What We Build
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[48px]">
              Technology Solutions Designed{" "}
              <span className="text-foreground/50">For Business Growth</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              We help businesses automate operations, improve productivity,
              strengthen customer relationships, and accelerate growth through
              modern software solutions and digital experiences.
            </p>
          </motion.div>

          {/* ── 3-column grid, all 6 services ───────────────────── */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.key} s={s} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
