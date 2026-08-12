"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ── Image imports ─────────────────────────────────────────────────────────────
import imgSoftware from "@/assets/service/Custom-Software.png";
import imgDesign from "@/assets/service/UI&UX-Design.png";
import imgWeb from "@/assets/service/Web-Development.png";
import imgMobile from "@/assets/service/Mobile-Apps.png";
import imgCloud from "@/assets/service/Cloud-DevOps.png";
import imgAI from "@/assets/service/AI-Automation.png";

const SERVICES = [
  {
    key: "custom-development",
    slug: "custom-development",
    icon: Layers,
    tag: "Custom Development",
    title: "Custom Software",
    desc: "Custom CRM, ERP, and bespoke portal systems engineered precisely around your internal business workflows to eliminate manual overhead, improve data integrity, and scale operations.",
    caps: ["CRM & ERP", "Workflow Automation", "Admin Portals"],
    img: imgSoftware,
    imgAlt: "Custom Software Development",
  },
  {
    key: "ui-ux-design",
    slug: "ui-ux-design",
    icon: Palette,
    tag: "Design First",
    title: "UI/UX Design",
    desc: "Conversion-optimized, modern user interfaces designed after extensive research to match your company's branding, improve retention, and create a premium experience.",
    caps: ["UI/UX Design", "Wireframes", "Design Systems"],
    img: imgDesign,
    imgAlt: "UI/UX Design",
  },
  {
    key: "web-development",
    slug: "web-development",
    icon: Globe,
    tag: "Performance Focused",
    title: "Web Development",
    desc: "SEO-optimized, lighting-fast websites and custom web applications powered by modern frontend frameworks to deliver seamless performance on all devices.",
    caps: ["Web Apps", "Corporate Sites", "Customer Portals"],
    img: imgWeb,
    imgAlt: "Web Development",
  },
  {
    key: "mobile-app-development",
    slug: "mobile-app-development",
    icon: Smartphone,
    tag: "Cross Platform",
    title: "Mobile Apps",
    desc: "Premium iOS and Android mobile applications engineered with native components to deliver exceptional performance, high-speed interactions, and offline capability.",
    caps: ["iOS & Android", "React Native", "API Integration"],
    img: imgMobile,
    imgAlt: "Mobile App Development",
  },
  {
    key: "cloud-devops",
    slug: "cloud-devops",
    icon: Cloud,
    tag: "Production Ready",
    title: "Cloud & DevOps",
    desc: "High-availability, enterprise-grade cloud systems configured with automated pipelines, continuous monitoring, and container security to prevent any downtime.",
    caps: ["AWS & GCP", "CI/CD Pipelines", "24/7 Monitoring"],
    img: imgCloud,
    imgAlt: "Cloud and DevOps",
  },
  {
    key: "ai-automation",
    slug: "ai-automation",
    icon: Sparkles,
    tag: "Intelligent Workflows",
    title: "AI & Automation",
    desc: "AI-powered business automation, intelligent workflows, custom AI integrations, and productivity systems designed to reduce repetitive work and improve operational efficiency.",
    caps: ["AI Workflows", "Custom Agents", "Process Automation"],
    img: imgAI,
    imgAlt: "AI & Automation",
  },
];

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

function ServiceCard({ s }: { s: (typeof SERVICES)[0] }) {
  const Icon = s.icon;

  return (
    <motion.article variants={fadeUp} className="h-full">
      <Link
        href={`/services/${s.slug}`}
        aria-label={`Explore ${s.title} Services`}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-foreground/[0.01] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:bg-foreground/[0.02] hover:shadow-xl"
      >
        {/* ── Image ── */}
        <div className="relative h-[220px] w-full overflow-hidden bg-muted/10">
          <Image
            src={s.img}
            alt={s.imgAlt}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        </div>

        {/* ── Content ── */}
        <div className="flex flex-1 flex-col p-6">
          {/* Icon + tag */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05]">
                <Icon className="h-4 w-4 text-foreground/80" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {s.tag}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-[19px] font-bold leading-snug tracking-tight text-foreground group-hover:text-foreground/90 transition-colors">
            {s.title}
          </h3>

          {/* Description */}
          <p className="mb-6 text-[13px] leading-[1.6] text-muted-foreground line-clamp-3">
            {s.desc}
          </p>

          {/* Bottom Area: Pills & Arrow Button */}
          <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {s.caps.slice(0, 2).map((cap) => (
                <span
                  key={cap}
                  className="rounded-md bg-foreground/[0.03] px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                >
                  {cap}
                </span>
              ))}
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-16 lg:py-24">
      <ServicesBg />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* ── Header ── */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <div className="flex justify-center mb-3">
              <Sparkles className="w-5 h-5 text-foreground/80 animate-[spin_8s_linear_infinite] drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
            </div>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Services We <span className="font-serif italic text-foreground">Engineer</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground">
              Custom software, scalable web platforms, mobile apps, and AI workflow automation built to solve your operational bottlenecks.
            </p>
            <div className="mx-auto mt-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
          </motion.div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.key} s={s} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

