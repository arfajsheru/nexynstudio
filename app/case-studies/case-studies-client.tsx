"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

// ── Case Studies Data ─────────────────────────────────────────────────────────

const INDUSTRIES = [
  "All",
  "E-Commerce",
  "Healthcare",
  "Real Estate",
  "FinTech",
];

const CASE_STUDIES = [
  {
    slug: "ecommerce-platform-scalability",
    client: "ShopNest India",
    industry: "E-Commerce",
    title: "Scaling an E-Commerce Platform to Handle 10x Traffic Growth",
    challenge:
      "ShopNest was experiencing severe slowdowns during sale events, losing lakhs in revenue due to crashes and abandoned carts. Their legacy PHP monolith couldn't handle peak loads.",
    solution:
      "We rebuilt their entire stack with Next.js for the storefront and Node.js microservices for the backend. Implemented auto-scaling on AWS, Redis caching, and a custom order management system.",
    results: [
      { icon: TrendingUp, value: "3x", label: "Revenue Growth" },
      { icon: Zap, value: "200ms", label: "Page Load Time" },
      { icon: Users, value: "10x", label: "Concurrent Users" },
    ],
    imageWidth: 700,
    imageHeight: 400,
  },
  {
    slug: "healthcare-patient-management",
    client: "MedConnect Clinic Network",
    industry: "Healthcare",
    title: "Building a Custom Patient Management System for 50+ Clinics",
    challenge:
      "MedConnect operated across 50+ clinics in Maharashtra with no unified system. Patient records were scattered, appointment scheduling was manual, and billing was inconsistent.",
    solution:
      "We developed a cloud-based Patient Management System with role-based access, automated appointment scheduling, digital prescriptions, and integrated billing with Razorpay for online payments.",
    results: [
      { icon: Clock, value: "60%", label: "Faster Operations" },
      { icon: BarChart3, value: "45%", label: "Revenue Increase" },
      { icon: Users, value: "50+", label: "Clinics Onboarded" },
    ],
    imageWidth: 700,
    imageHeight: 400,
  },
  {
    slug: "real-estate-crm-platform",
    client: "PropVault Realty",
    industry: "Real Estate",
    title: "Custom CRM That Increased Lead Conversions by 85%",
    challenge:
      "PropVault's sales team relied on spreadsheets and WhatsApp groups to manage leads. They were losing 40% of their leads due to poor follow-up tracking and no visibility into the sales pipeline.",
    solution:
      "We built a custom CRM with automated lead capture from 12+ sources, intelligent follow-up scheduling, WhatsApp integration for instant responses, and real-time analytics dashboards.",
    results: [
      { icon: TrendingUp, value: "85%", label: "Better Conversion" },
      { icon: Zap, value: "12+", label: "Lead Sources Integrated" },
      { icon: Clock, value: "50%", label: "Faster Follow-up" },
    ],
    imageWidth: 700,
    imageHeight: 400,
  },
  {
    slug: "fintech-payment-dashboard",
    client: "PayScale Solutions",
    industry: "FinTech",
    title: "Enterprise Payment Dashboard Processing ₹50Cr+ Monthly",
    challenge:
      "PayScale needed a real-time dashboard to monitor transactions across multiple payment gateways. Their existing tools were fragmented and lacked the compliance features required by RBI regulations.",
    solution:
      "We engineered a unified payment analytics dashboard with real-time transaction monitoring, automated reconciliation, fraud detection alerts, and compliance reporting — all built on a secure, encrypted infrastructure.",
    results: [
      { icon: BarChart3, value: "₹50Cr+", label: "Monthly Volume" },
      { icon: Zap, value: "99.99%", label: "Uptime" },
      { icon: Clock, value: "Real-time", label: "Monitoring" },
    ],
    imageWidth: 700,
    imageHeight: 400,
  },
];

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

  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.01] transition-all duration-300 hover:border-foreground/20 hover:shadow-xl"
    >
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-0",
          isReversed && "lg:[direction:rtl]",
        )}
      >
        <ImagePlaceholder
          width={study.imageWidth}
          height={study.imageHeight}
          className="aspect-[16/10] lg:aspect-auto lg:min-h-[400px] rounded-none"
        />
        <div
          className={cn(
            "flex flex-col justify-center p-8 lg:p-10",
            isReversed && "lg:[direction:ltr]",
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
          <h2 className="mb-4 text-xl font-bold leading-snug tracking-tight text-foreground lg:text-2xl">
            {study.title}
          </h2>

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
          <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-foreground transition-colors group-hover:text-foreground/70">
            Read Full Case Study
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ── Case Studies Client ───────────────────────────────────────────────────────

export function CaseStudiesClient() {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered = CASE_STUDIES.filter((s) => {
    if (activeIndustry === "All") return true;
    return s.industry === activeIndustry;
  });

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

      {/* Industry Filters */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap items-center gap-2 mb-12"
      >
        {INDUSTRIES.map((industry) => (
          <button
            key={industry}
            onClick={() => setActiveIndustry(industry)}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200",
              activeIndustry === industry
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground border-border/40 hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {industry}
          </button>
        ))}
      </motion.div>

      {/* Case Study Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-8"
      >
        {filtered.map((study, index) => (
          <CaseStudyCard key={study.slug} study={study} index={index} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-lg text-muted-foreground">
            No case studies found in this industry.
          </p>
        </div>
      )}
    </div>
  );
}
