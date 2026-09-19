"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Plus,
  Minus,
  CheckCircle2,
  Layers,
  Smartphone,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/data/projects";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ─── Portfolio FAQs (Aligned 1:1 with JSON-LD FAQPage Schema) ────────────────

const PORTFOLIO_FAQS = [
  {
    question: "What types of software projects does Nexyn Studios build?",
    answer:
      "Nexyn Studios engineers custom software applications, role-based enterprise portals, CRM platforms, real-time web applications, and cross-platform mobile apps for iOS and Android. Every project is custom-architected around the client's operational rules, security requirements, and data structures.",
  },
  {
    question: "Are the projects in this portfolio live in production?",
    answer:
      "Yes. Our portfolio highlights real-world systems delivered to organizations and businesses, such as the United Welfare Foundation scholarship management portal (processing over 77 requests and ₹6.87L+ in disbursements) and Nexyn Chat real-time messaging clients supporting sub-100ms WebSocket delivery.",
  },
  {
    question: "Do clients retain full ownership of the source code and intellectual property?",
    answer:
      "Yes. Upon completion and handover, our clients retain 100% ownership of all source code, database schemas, API architecture, and intellectual property. We build without per-seat licensing fees or proprietary vendor lock-in.",
  },
  {
    question: "Can Nexyn Studios develop both web platforms and mobile applications?",
    answer:
      "Yes. Our engineering capabilities span full-stack web applications built with Next.js, TypeScript, and PostgreSQL, as well as cross-platform mobile applications built with React Native, SQLite offline caching, and Firebase push notifications.",
  },
  {
    question: "How can prospective clients evaluate case studies and start a project?",
    answer:
      "You can explore in-depth architectural breakdowns, challenges, and results on our individual project case study pages or contact our engineering team directly to schedule a technical discovery call.",
  },
];

export function PortfolioClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const webProjects = PROJECTS.filter((p) => p.category !== "Mobile App");
  const mobileProjects = PROJECTS.filter((p) => p.category === "Mobile App");

  return (
    <div className={cn("mx-auto w-full pb-20", LAYOUT.maxWidth, LAYOUT.paddingX)}>
      {/* ── Section 1: Featured Software Projects ────────────────────────── */}
      <section className="pt-8 pb-20 border-b border-border/30">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-foreground/[0.02] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Production Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Featured Software <span className="font-serif italic text-foreground/60">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Explore production applications, custom enterprise platforms, and cross-platform mobile systems engineered and delivered by Nexyn Studios.
          </p>
        </div>

        {/* Web Projects Sub-Section */}
        {webProjects.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-[1px] w-12 bg-border" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground/80">
                Web Platforms &amp; Enterprise Portals
              </span>
              <div className="h-[1px] w-12 bg-border" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              {webProjects.map((project, idx) => (
                <article
                  key={project.slug}
                  className="group flex flex-col gap-8 items-center w-full max-w-[620px] mx-auto rounded-3xl border border-border/40 bg-foreground/[0.01] p-6 sm:p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative w-full block transition-transform hover:-translate-y-2 duration-500"
                    style={{ "--project-accent": project.accentColor || "#3b82f6" } as React.CSSProperties}
                  >
                    {/* Top Ribbon Tooltip */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-500 ease-[0.16,1,0.3,1] z-0 flex justify-center pointer-events-none">
                      <div
                        className="flex items-center gap-2 px-6 py-2 rounded-t-xl text-white text-[11px] font-bold tracking-widest uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.3)] border-t border-x border-white/20 whitespace-nowrap"
                        style={{ backgroundColor: "color-mix(in srgb, var(--project-accent) 90%, black)" }}
                      >
                        <span>{project.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Realistic MacBook Mockup */}
                    <div className="relative z-10 w-full mx-auto shadow-2xl">
                      <div className="relative w-full rounded-t-[14px] rounded-b-[4px] bg-gradient-to-b from-[#e5e5e5] to-[#b5b5b5] p-[2px] ring-1 ring-black/10">
                        <div className="relative w-full bg-black rounded-t-[12px] rounded-b-[2px] p-[6px] md:p-[8px] flex flex-col shadow-inner overflow-hidden">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[18%] h-[12px] md:h-[14px] bg-black rounded-b-[6px] z-30 flex justify-center items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-[#222]" />
                          </div>

                          {/* Screen Content Container */}
                          <div
                            className="relative w-full bg-neutral-950 overflow-hidden rounded-[2px]"
                            style={{ aspectRatio: project.aspectRatio || "16/10" }}
                          >
                            <Image
                              src={project.featuredImage}
                              alt={`${project.name} - ${project.category} interface for ${project.industry}`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              priority={idx === 0}
                              loading={idx === 0 ? "eager" : "lazy"}
                            />
                          </div>

                          {/* MacBook Pro branding */}
                          <div className="h-[12px] md:h-[16px] w-full flex items-center justify-center -mb-1 mt-1 z-20">
                            <span className="text-[6px] md:text-[7px] text-[#444] font-semibold tracking-[0.3em] uppercase">
                              MacBook Pro
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* MacBook Base */}
                      <div className="relative w-[114%] -ml-[7%] h-3 md:h-4 bg-gradient-to-b from-[#e0e0e0] to-[#999999] rounded-t-[1px] rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex justify-center items-start border-b-[2px] border-[#666666]">
                        <div className="w-[18%] h-1 md:h-1.5 bg-[#c2c2c2] rounded-b-[4px] shadow-inner" />
                      </div>
                    </div>
                  </Link>

                  {/* Project Info & Metadata */}
                  <div className="flex flex-col items-center text-center gap-3 px-2 w-full">
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--project-accent) 15%, transparent)",
                          color: "var(--project-accent)",
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="rounded-full bg-foreground/[0.05] px-3 py-1 text-[10px] font-medium text-muted-foreground uppercase tracking-[0.14em]">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {project.name}
                    </h3>

                    <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed max-w-[500px]">
                      {project.shortDescription}
                    </p>

                    {/* Verified Results Grid */}
                    {project.results && project.results.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full py-4 my-2 border-y border-border/30">
                        {project.results.map((res) => (
                          <div key={res.metric} className="flex flex-col items-center">
                            <span className="text-lg sm:text-xl font-extrabold text-foreground">
                              {res.value}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground/80 font-medium text-center">
                              {res.metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/60 bg-foreground/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all hover:-translate-y-0.5 shadow-sm"
                        style={{
                          backgroundColor: "var(--project-accent)",
                          color: "#ffffff",
                        }}
                      >
                        Read Full Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-border/80 text-foreground hover:bg-muted/40 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                          Visit Live Portal
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Projects Sub-Section */}
        {mobileProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-[1px] w-12 bg-border" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground/80">
                Cross-Platform Mobile Applications
              </span>
              <div className="h-[1px] w-12 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {mobileProjects.map((project) => (
                <article
                  key={project.slug}
                  className="group flex flex-col gap-8 items-center w-full max-w-[360px] mx-auto rounded-3xl border border-border/40 bg-foreground/[0.01] p-6 sm:p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative w-full block transition-transform hover:-translate-y-2 duration-500"
                    style={{ "--project-accent": project.accentColor || "#10b981" } as React.CSSProperties}
                  >
                    {/* Top Ribbon Tooltip */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-500 ease-[0.16,1,0.3,1] z-0 flex justify-center pointer-events-none">
                      <div
                        className="flex items-center gap-2 px-5 py-2 rounded-t-xl text-white text-[10px] font-bold tracking-widest uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.3)] border-t border-x border-white/20 whitespace-nowrap"
                        style={{ backgroundColor: "color-mix(in srgb, var(--project-accent) 90%, black)" }}
                      >
                        <span>{project.name}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Realistic iPhone Mockup */}
                    <div className="relative z-10 w-[240px] md:w-[260px] mx-auto shadow-2xl">
                      <div className="relative w-full rounded-[2.8rem] bg-gradient-to-b from-[#e5e5e5] via-[#fdfdfd] to-[#888888] p-[3px] aspect-[9/19] ring-1 ring-black/20">
                        <div className="relative w-full h-full rounded-[2.6rem] bg-black p-[6px] md:p-[8px] overflow-hidden">
                          {/* Dynamic Island */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-[18px] bg-black rounded-full z-20 flex items-center justify-end pr-2">
                            <div className="w-2 h-2 bg-[#111] rounded-full border border-[#222]" />
                          </div>

                          {/* Screen Content Container */}
                          <div className="relative w-full h-full bg-background overflow-hidden rounded-[2.2rem]">
                            <Image
                              src={project.featuredImage}
                              alt="Nexyn Chat Mobile React Native iOS and Android messaging application interface"
                              fill
                              sizes="(max-width: 768px) 100vw, 30vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Physical Buttons */}
                        <div className="absolute top-[80px] -left-[3px] w-[3px] h-[24px] bg-[#a3a3a3] rounded-l-[2px]" />
                        <div className="absolute top-[115px] -left-[3px] w-[3px] h-[40px] bg-[#a3a3a3] rounded-l-[2px]" />
                        <div className="absolute top-[165px] -left-[3px] w-[3px] h-[40px] bg-[#a3a3a3] rounded-l-[2px]" />
                        <div className="absolute top-[125px] -right-[3px] w-[3px] h-[55px] bg-[#a3a3a3] rounded-r-[2px]" />
                      </div>
                    </div>
                  </Link>

                  {/* Project Info & Metadata */}
                  <div className="flex flex-col items-center text-center gap-3 px-2 w-full">
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--project-accent) 15%, transparent)",
                          color: "var(--project-accent)",
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="rounded-full bg-foreground/[0.05] px-3 py-1 text-[10px] font-medium text-muted-foreground uppercase tracking-[0.14em]">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                      {project.shortDescription}
                    </p>

                    {/* Verified Results Grid */}
                    {project.results && project.results.length > 0 && (
                      <div className="grid grid-cols-2 gap-2.5 w-full py-3 my-1 border-y border-border/30">
                        {project.results.map((res) => (
                          <div key={res.metric} className="flex flex-col items-center">
                            <span className="text-base sm:text-lg font-extrabold text-foreground">
                              {res.value}
                            </span>
                            <span className="text-[9px] uppercase tracking-wider text-muted-foreground/80 font-medium text-center">
                              {res.metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-1 mb-2">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/60 bg-foreground/[0.03] px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:-translate-y-0.5 shadow-sm mt-1"
                      style={{
                        backgroundColor: "var(--project-accent)",
                        color: "#ffffff",
                      }}
                    >
                      Read Full Case Study
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── Section 2: Engineering Capabilities Across Web & Mobile ──────── */}
      <section className="py-20 border-b border-border/30">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-foreground/[0.02] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Demonstrated Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Engineering Capabilities <span className="font-serif italic text-foreground/60">Across Platforms</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every project delivered in our portfolio demonstrates production-grade system architecture, multi-tier security, and real-time responsiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Enterprise Portals & CRM */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/50 bg-foreground/[0.015] p-6 sm:p-8 transition-all hover:border-foreground/20 hover:shadow-lg">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground mb-6">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                Enterprise Portals &amp; Custom CRMs
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Demonstrated in our work with United Welfare Foundation: multi-tier approval workflows, role-based access controls (RBAC), bank documentation generation, and real-time administrative dashboards.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Custom workflow engines &amp; approval stages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Dynamic PDF generation &amp; bank letters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Full data security &amp; audit trails</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-border/30 flex flex-wrap gap-2">
              <Link
                href="/services/custom-development"
                className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                Custom Development <ArrowUpRight className="h-3 w-3" />
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/solutions/custom-crm-development"
                className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                Custom CRMs <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 2: Real-Time Web Apps */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/50 bg-foreground/[0.015] p-6 sm:p-8 transition-all hover:border-foreground/20 hover:shadow-lg">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground mb-6">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                Real-Time Web Applications &amp; SaaS
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Demonstrated in Nexyn Chat Web: high-concurrency WebSocket messaging with sub-100ms latency, client-side state synchronization with Zustand, responsive multi-pane layout, and media drag-and-drop.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Sub-100ms WebSocket message delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Instant media compression &amp; transfer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Responsive desktop &amp; tablet interfaces</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-border/30 flex flex-wrap gap-2">
              <Link
                href="/services/web-development"
                className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                Web Development <ArrowUpRight className="h-3 w-3" />
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/solutions/saas-product-development"
                className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                SaaS Products <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Card 3: Mobile Apps */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/50 bg-foreground/[0.015] p-6 sm:p-8 transition-all hover:border-foreground/20 hover:shadow-lg">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground mb-6">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                Cross-Platform Mobile &amp; Offline Sync
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Demonstrated in Nexyn Chat Mobile: cross-platform iOS and Android builds with React Native, local SQLite offline caching, Firebase background push alerts, and network data optimization.
              </p>
              <ul className="space-y-2 mb-6 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Local SQLite cache with instant load</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>Firebase Cloud Messaging push alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground/70" />
                  <span>40% network usage reduction via low-data mode</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-border/30 flex flex-wrap gap-2">
              <Link
                href="/services/mobile-app-development"
                className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                Mobile Development <ArrowUpRight className="h-3 w-3" />
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/technologies/react-native-development"
                className="text-xs font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                React Native <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Industries & Domains Represented ──────────────────── */}
      <section className="py-20 border-b border-border/30">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-foreground/[0.02] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Industry Applications
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Industries &amp; Domains <span className="font-serif italic text-foreground/60">We Have Built For</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Our portfolio proves that complex organizational problems require custom-tailored software rather than rigid, one-size-fits-all SaaS packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Non-Profit & Education */}
          <div className="rounded-2xl border border-border/50 bg-foreground/[0.015] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Non-Profit &amp; Education Sector
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Non-profit foundations and educational trusts frequently face spreadsheet sprawl and fragmented communication channels. For the United Welfare Foundation, we engineered an end-to-end scholarship management portal that automated student intake, multi-tier approvals, and treasury disbursement records.
            </p>
            <div className="flex items-center gap-3 text-xs">
              <Link
                href="/industries/education"
                className="font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                Education Industry Solutions <ArrowUpRight className="h-3 w-3" />
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/projects/united-welfare-foundation"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                View UWF Case Study <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Communication & SaaS */}
          <div className="rounded-2xl border border-border/50 bg-foreground/[0.015] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Communication &amp; Collaboration Platforms
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Modern digital products demand high-frequency state updates, offline reliability, and instant message delivery. Through our Nexyn Chat ecosystem (web and mobile), we validated architectures capable of handling 10,000+ active connections, sub-100ms WebSocket sync, and persistent SQLite local databases.
            </p>
            <div className="flex items-center gap-3 text-xs">
              <Link
                href="/solutions/saas-product-development"
                className="font-semibold text-foreground hover:underline inline-flex items-center gap-1"
              >
                SaaS Product Development <ArrowUpRight className="h-3 w-3" />
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/projects/nexyn-chat-web"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
              >
                View Chat Web Case Study <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Technology Stacks Demonstrated in Production ──────── */}
      <section className="py-20 border-b border-border/30">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-foreground/[0.02] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Engineering Stacks
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Technology Stacks <span className="font-serif italic text-foreground/60">Demonstrated in Production</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            We use modern, battle-tested technologies that deliver fast load times, robust data security, and long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Full-Stack & Frontend */}
          <div className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
              Frontend &amp; Full-Stack
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Link
                href="/technologies/nextjs-development"
                className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors"
              >
                Next.js
              </Link>
              <Link
                href="/technologies/typescript-development"
                className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors"
              >
                TypeScript
              </Link>
              <Link
                href="/technologies/react-native-development"
                className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors"
              >
                React Native
              </Link>
              <span className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground">
                Tailwind CSS
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Server-side rendered (SSR), type-safe React and Next.js applications engineered for high Lighthouse scores and fast interactions.
            </p>
          </div>

          {/* Backend & Real-Time */}
          <div className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
              Backend &amp; Real-Time
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Link
                href="/technologies/nodejs-development"
                className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors"
              >
                Node.js
              </Link>
              <span className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground">
                Socket.io
              </span>
              <span className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground">
                Express.js
              </span>
              <span className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground">
                NextAuth.js
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Low-latency WebSocket servers, secure token-based authentication, and RESTful APIs capable of handling concurrent client sessions.
            </p>
          </div>

          {/* Databases & Storage */}
          <div className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
              Databases &amp; Infrastructure
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Link
                href="/technologies/postgresql-development"
                className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors"
              >
                PostgreSQL
              </Link>
              <span className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground">
                Prisma ORM
              </span>
              <span className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground">
                SQLite
              </span>
              <span className="rounded-lg border border-border/60 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground">
                Vercel / Supabase
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Relational schemas with indexed queries, automated backups, local mobile caching, and cloud deployments on Vercel and Supabase.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5: Frequently Asked Questions ────────────────────────── */}
      <section className="pt-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-foreground/[0.02] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Client Evaluation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked <span className="font-serif italic text-foreground/60">Questions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Answers to common questions about evaluating our delivered software projects, engineering standards, and working with Nexyn Studios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-border/40 border-y border-border/40">
          {PORTFOLIO_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div
                key={faq.question}
                className={cn(
                  "transition-colors",
                  isOpen ? "bg-foreground/[0.02] px-4 py-2" : "py-4 px-2"
                )}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between text-left py-2 gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/60 text-muted-foreground">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 pt-1 text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
