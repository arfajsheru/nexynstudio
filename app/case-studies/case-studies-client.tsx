"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Zap,
  BarChart3,
  ImageIcon,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/data/projects";

// ── Case Studies Data (Dynamic from projects) ──────────────────────────────────

const CASE_STUDIES = PROJECTS.map((project) => {
  const results = project.results.slice(0, 3).map((res) => {
    let icon = TrendingUp;
    const metricLower = res.metric.toLowerCase();
    if (metricLower.includes("time") || metricLower.includes("latency") || metricLower.includes("compatibility")) {
      icon = Clock;
    } else if (
      metricLower.includes("student") ||
      metricLower.includes("user") ||
      metricLower.includes("connection") ||
      metricLower.includes("session") ||
      metricLower.includes("active")
    ) {
      icon = Users;
    } else if (
      metricLower.includes("amount") ||
      metricLower.includes("usage") ||
      metricLower.includes("revenue") ||
      metricLower.includes("growth") ||
      metricLower.includes("volume") ||
      metricLower.includes("sharing") ||
      metricLower.includes("saved")
    ) {
      icon = BarChart3;
    } else if (
      metricLower.includes("request") ||
      metricLower.includes("delivery") ||
      metricLower.includes("load") ||
      metricLower.includes("speed") ||
      metricLower.includes("offline")
    ) {
      icon = Zap;
    }

    return {
      icon,
      value: res.value,
      label: res.metric,
    };
  });

  return {
    slug: project.slug,
    client: project.shortName || project.clientType,
    industry: project.industry.includes("/") ? project.industry.split("/")[0].trim() : project.industry,
    category: project.category,
    aspectRatio: project.aspectRatio,
    title: project.name,
    challenge: project.challenge,
    solution: project.solution,
    featuredImage: project.featuredImage,
    results,
    imageWidth: 700,
    imageHeight: 400,
  };
});



// ── Image Placeholder ─────────────────────────────────────────────────────────

function ImagePlaceholder({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-muted/20 transition-colors group-hover:border-foreground/20 group-hover:bg-muted/30",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
        <ImageIcon className="h-8 w-8" />
        <span className="text-[11px] font-mono font-semibold tracking-wide">
          {width} × {height}
        </span>
      </div>
    </div>
  );
}

// ── Case Study Card ───────────────────────────────────────────────────────────

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof CASE_STUDIES)[0];
  index: number;
}) {
  const isReversed = index % 2 !== 0;
  const isMobile = study.category === "Mobile App";

  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.01] transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-0"
      >
        <Link
          href={`/projects/${study.slug}`}
          className={cn(
            "relative flex min-h-[380px] lg:min-h-[460px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#020617] p-8 lg:p-12",
            isReversed && "lg:order-2"
          )}
        >
          {/* Glowing background orbs */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/[0.015] blur-[80px]" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/[0.015] blur-[80px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.035)_0%,_transparent_70%)]" />

          {study.featuredImage ? (
            isMobile ? (
              /* Realistic iPhone Mockup Wrapper */
              <div
                className="relative z-10 mx-auto block w-[180px] transition-transform duration-500 group-hover:scale-[1.03] sm:w-[200px]"
              >
                <div className="relative z-10 aspect-[9/19] w-full rounded-[2.5rem] bg-gradient-to-b from-[#e5e5e5] via-[#fdfdfd] to-[#888888] p-[2.5px] shadow-2xl ring-1 ring-black/20">
                  <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-black p-[5px] md:p-[6px]">
                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 z-20 flex h-[16px] w-[35%] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-1.5">
                      <div className="h-1.5 w-1.5 rounded-full border border-[#222] bg-[#111]" />
                    </div>

                    {/* Screen Content */}
                    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-neutral-900">
                      <Image
                        src={study.featuredImage}
                        alt={study.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                        priority={index < 2}
                      />
                    </div>
                  </div>

                  {/* Physical Buttons */}
                  <div className="absolute top-[80px] -left-[3px] h-[22px] w-[3px] rounded-l-[2px] bg-[#a3a3a3]" />
                  <div className="absolute top-[115px] -left-[3px] h-[38px] w-[3px] rounded-l-[2px] bg-[#a3a3a3]" />
                  <div className="absolute top-[165px] -left-[3px] h-[38px] w-[3px] rounded-l-[2px] bg-[#a3a3a3]" />
                  <div className="absolute top-[120px] -right-[3px] h-[50px] w-[3px] rounded-r-[2px] bg-[#a3a3a3]" />
                </div>
              </div>
            ) : (
              /* Realistic MacBook Mockup Wrapper */
              <div
                className="relative z-10 mx-auto block w-full max-w-[420px] transition-transform duration-500 group-hover:scale-[1.02] sm:max-w-[460px] lg:max-w-[480px]"
              >
                <div className="relative z-10 mx-auto w-full shadow-2xl">
                  {/* MacBook Screen / Lid */}
                  <div className="relative w-full rounded-t-[12px] rounded-b-[4px] bg-gradient-to-b from-[#e5e5e5] to-[#b5b5b5] p-[2px] ring-1 ring-black/10">
                    <div className="relative flex w-full flex-col overflow-hidden rounded-t-[10px] rounded-b-[2px] bg-black p-[5px] shadow-inner md:p-[6px]">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 z-30 flex h-[10px] w-[18%] -translate-x-1/2 items-center justify-center rounded-b-[5px] bg-black md:h-[12px]">
                        <div className="h-1 w-1 rounded-full border border-[#222] bg-[#111]" />
                      </div>

                      {/* Screen Content */}
                      <div 
                        className="relative w-full overflow-hidden rounded-[1.5px] bg-neutral-950"
                        style={{ aspectRatio: study.aspectRatio || "16/10" }}
                      >
                        <Image
                          src={study.featuredImage}
                          alt={study.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={index < 2}
                        />
                      </div>

                      {/* MacBook Pro text */}
                      <div className="z-20 mt-0.5 -mb-0.5 flex h-[10px] w-full items-center justify-center md:h-[12px]">
                        <span className="text-[5px] font-semibold tracking-[0.3em] text-[#444] uppercase">
                          MacBook Pro
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* MacBook Base */}
                  <div className="relative -ml-[7%] flex h-2.5 w-[114%] items-start justify-center rounded-t-[1px] rounded-b-xl border-b-[1.5px] border-[#555555] bg-gradient-to-b from-[#e0e0e0] to-[#999999] shadow-[0_15px_30px_rgba(0,0,0,0.3)] md:h-3.5">
                    {/* Trackpad Indentation */}
                    <div className="h-0.5 w-[18%] rounded-b-[3px] bg-[#c2c2c2] shadow-inner md:h-1" />
                  </div>
                </div>
              </div>
            )
          ) : (
            <ImagePlaceholder
              width={study.imageWidth}
              height={study.imageHeight}
              className="w-full h-full rounded-none"
            />
          )}
        </Link>
        <div
          className={cn(
            "flex flex-col justify-center p-8 lg:p-10",
            isReversed && "lg:order-1"
          )}
        >
          {/* Industry + Client */}
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-foreground/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {study.industry}
            </span>
            <span className="text-[11px] font-medium text-muted-foreground/60">
              {study.client}
            </span>
          </div>

          {/* Title */}
          <Link href={`/projects/${study.slug}`}>
            <h2 className="mb-4 text-xl font-bold leading-snug tracking-tight text-foreground lg:text-2xl hover:text-foreground/80 transition-colors">
              {study.title}
            </h2>
          </Link>

          {/* Challenge & Solution */}
          <div className="mb-6 space-y-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/80">
                Challenge
              </span>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground line-clamp-3">
                {study.challenge}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/80">
                Solution
              </span>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground line-clamp-3">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="flex items-center gap-6 border-t border-border/30 pt-5">
            {study.results.map((result) => (
              <div key={result.label} className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.05]">
                  <result.icon className="h-4 w-4 text-foreground/60" />
                </div>
                <div>
                  <div className="text-[15px] font-bold tracking-tight text-foreground">
                    {result.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground/60">
                    {result.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/projects/${study.slug}`}
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-foreground transition-colors hover:text-foreground/70"
          >
            Read Full Case Study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}


// ── Case Studies Client ───────────────────────────────────────────────────────

export function CaseStudiesClient() {
  return (
    <div
      className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}
    >
      {/* Header */}
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="py-16 md:py-24 max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          <span className="h-1 w-1 rounded-full bg-foreground/40" />
          Client Success Stories
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Case <span className="text-muted-foreground">Studies</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Real problems. Real solutions. Measurable results. See how we help
          businesses in Mumbai and globally transform their operations through
          custom software.
        </motion.p>
      </motion.header>

      {/* Case Study Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-8"
      >
        {CASE_STUDIES.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
