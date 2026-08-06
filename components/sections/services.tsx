"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Palette,
  Globe,
  Smartphone,
  Cloud,
  TrendingUp,
  ArrowUpRight,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
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
import imgMarketing from "@/assets/service/Digital-Marketing.png";

const SERVICES = [
  {
    key: "software",
    icon: Layers,
    tag: "Custom Development",
    title: "Custom Software",
    desc: "Custom CRM, ERP, and bespoke portal systems engineered precisely around your internal business workflows to eliminate manual overhead, improve data integrity, and scale operations.",
    features: [
      "Custom CRM & ERP platforms tailored entirely to your sales pipelines and inventory rules.",
      "End-to-end workflow automation to streamline operations and eliminate human errors.",
      "High-security multi-tenant Admin Portals and Client dashboards with role-based access.",
      "Seamless integration with third-party APIs (payment gateways, logistics, SMS, WhatsApp).",
      "Legacy application migration and modernization with zero downtime to guarantee business continuity.",
      "Comprehensive database performance tuning and optimization for maximum efficiency.",
    ],
    caps: ["CRM & ERP", "Workflow Automation", "Admin Portals"],
    img: imgSoftware,
    imgAlt: "Custom Software Development",
  },
  {
    key: "design",
    icon: Palette,
    tag: "Design First",
    title: "UI/UX Design",
    desc: "Conversion-optimized, modern user interfaces designed after extensive research to match your company's branding, improve retention, and create a premium experience.",
    features: [
      "User research, user personas mapping, and detailed competitor analysis.",
      "Interactive wireframing, high-fidelity mockups, and clickable prototypes.",
      "Modern, responsive UI design tailored to your global brand identity.",
      "Scalable, production-ready Design Systems & Component Sheets for fast engineering.",
      "Conversion Rate Optimization (CRO) to maximize customer registrations and sales.",
      "A/B testing guidelines, user flow audits, and accessibility compliance checks.",
    ],
    caps: ["UI/UX Design", "Wireframes", "Design Systems"],
    img: imgDesign,
    imgAlt: "UI/UX Design",
  },
  {
    key: "web",
    icon: Globe,
    tag: "Performance Focused",
    title: "Web Development",
    desc: "SEO-optimized, lighting-fast websites and custom web applications powered by modern frontend frameworks to deliver seamless performance on all devices.",
    features: [
      "High-performance React & Next.js applications with Server-Side Rendering (SSR).",
      "Headless CMS integration (Sanity, Strapi) for easy, real-time content management.",
      "Fully responsive mobile-first layouts with smooth, physics-based micro-animations.",
      "Robust e-commerce storefronts, secure payment processors, and custom cart flows.",
      "Advanced Technical SEO configuration to rank higher on search engines from day one.",
      "W3C standards compliance, security hardening, and Vercel/AWS cloud optimization.",
    ],
    caps: ["Web Apps", "Corporate Sites", "Customer Portals"],
    img: imgWeb,
    imgAlt: "Web Development",
  },
  {
    key: "mobile",
    icon: Smartphone,
    tag: "Cross Platform",
    title: "Mobile Apps",
    desc: "Premium iOS and Android mobile applications engineered with native components to deliver exceptional performance, high-speed interactions, and offline capability.",
    features: [
      "Cross-platform mobile application development using React Native framework.",
      "Native iOS (Swift/Objective-C) and Android (Kotlin/Java) app engineering.",
      "Mobile-first UX design, haptic feedback integration, and modern gesture controls.",
      "Secure server-side API development, offline synchronization, and caching.",
      "App Store (Apple) and Google Play Store submission, compliance guidelines, and ASO.",
      "Real-time push notifications, chat relay integration, and geo-location tracking.",
    ],
    caps: ["iOS & Android", "React Native", "API Integration"],
    img: imgMobile,
    imgAlt: "Mobile App Development",
  },
  {
    key: "cloud",
    icon: Cloud,
    tag: "Production Ready",
    title: "Cloud & DevOps",
    desc: "High-availability, enterprise-grade cloud systems configured with automated pipelines, continuous monitoring, and container security to prevent any downtime.",
    features: [
      "AWS, Google Cloud (GCP), and Azure cloud infrastructure provisioning & security.",
      "Fully automated CI/CD pipelines (GitHub Actions) for fast, risk-free code deployments.",
      "Microservices containerization using Docker engines and Kubernetes orchestration.",
      "24/7 server health monitoring, automatic failover setups, and CPU load balancing.",
      "Automated encrypted database backups, cloud migration, and recovery drills.",
      "SSL/TLS management, firewall configurations, and server security hardening.",
    ],
    caps: ["AWS & GCP", "CI/CD Pipelines", "24/7 Monitoring"],
    img: imgCloud,
    imgAlt: "Cloud and DevOps",
  },
  {
    key: "marketing",
    icon: TrendingUp,
    tag: "Growth Driven",
    title: "Digital Marketing",
    desc: "Data-driven, ROI-focused lead generation campaigns and SEO strategies designed to target high-intent search queries and acquire qualified clients consistently.",
    features: [
      "Technical SEO auditing, keyword optimization, and content authority strategies.",
      "High-converting Google PPC, Meta (Facebook/Instagram), and LinkedIn Ads campaigns.",
      "Landing page conversion audits and lead capture funnel optimizations.",
      "Automated email sequences, client nurturing drip flows, and newsletter engines.",
      "Google Analytics 4 (GA4) configuration, tag manager triggers, and event tracking.",
      "Detailed monthly ROI dashboards, campaign analytics, and strategic review calls.",
    ],
    caps: ["SEO", "Paid Ads", "Lead Generation"],
    img: imgMarketing,
    imgAlt: "Digital Marketing",
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

function ServiceCard({ s, onClick }: { s: (typeof SERVICES)[0], onClick: () => void }) {
  const Icon = s.icon;

  return (
    <motion.article
      variants={fadeUp}
      onClick={onClick}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-foreground/[0.01] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:bg-foreground/[0.02] hover:shadow-xl"
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
        <h3 className="mb-2 text-[19px] font-bold leading-snug tracking-tight text-foreground">
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
    </motion.article>
  );
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof SERVICES)[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  const closeModal = () => {
    setSelectedService(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("service");
      window.history.pushState({}, "", url.pathname + url.search);
    }
  };

  // Open modal if "service" query param is present in URL
  useEffect(() => {
    const handleUrlQuery = () => {
      const params = new URLSearchParams(window.location.search);
      const serviceKey = params.get("service");
      if (serviceKey) {
        const match = SERVICES.find((s) => s.key === serviceKey);
        if (match) {
          setSelectedService(match);
        }
      }
    };

    handleUrlQuery();
    window.addEventListener("popstate", handleUrlQuery);
    const interval = setInterval(handleUrlQuery, 500);

    return () => {
      window.removeEventListener("popstate", handleUrlQuery);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="services" className="relative overflow-hidden py-16 lg:py-24">
      <ServicesBg />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-50px" }}
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
              Custom software, scalable web platforms, and mobile apps built to solve your unique operational bottlenecks.
            </p>
            <div className="mx-auto mt-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
          </motion.div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.key}
                s={s}
                onClick={() => setSelectedService(s)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Service Details Modal ── */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                className="relative flex w-full max-w-xl lg:max-w-[1120px] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl pointer-events-auto lg:flex-row lg:h-[620px]"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 backdrop-blur-md border border-border text-foreground transition-colors hover:bg-muted lg:right-6 lg:top-6"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Image */}
                <div className="relative h-[220px] w-full shrink-0 bg-muted/10 lg:h-full lg:w-[42%]">
                  <Image
                    src={selectedService.img}
                    alt={selectedService.imgAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 lg:bg-gradient-to-r" />

                  {/* Floating badge on image */}
                  <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-border/20 bg-background/50 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur-md">
                    <selectedService.icon className="h-4 w-4" />
                    {selectedService.tag}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-12 overflow-y-auto scrollbar-hide h-[400px] lg:h-full">
                  <h3 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {selectedService.title}
                  </h3>

                  <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">
                    {selectedService.desc}
                  </p>

                  <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.15em] text-foreground">
                    Core Capabilities & Features
                  </h4>

                  <ul className="mb-10 flex flex-col gap-4">
                    {selectedService.features.map((feature, i) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.04 }}
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                        <span className="text-[14px] leading-relaxed text-muted-foreground">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-border/30">
                    <a
                      href="/contact"
                      onClick={closeModal}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-[14px] font-semibold text-background transition-all hover:bg-foreground/90 hover:shadow-lg"
                    >
                      Discuss Your Project
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
