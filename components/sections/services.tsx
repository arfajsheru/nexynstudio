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
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { useInView } from "@/hooks/use-interactions";
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
    desc: "Business software built precisely around your workflows — CRM, ERP, portals, and automation tools engineered for how your team actually works.",
    features: [
      "Custom CRM & ERP Systems tailored to your business operations",
      "End-to-end Workflow Automation to reduce manual tasks",
      "Scalable Admin & Customer Portals for better data management",
      "Third-party API Integrations to connect your existing tools",
      "Legacy System Modernization with zero downtime",
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
    desc: "Research-driven interfaces that are intuitive, beautiful, and optimised to turn every visitor into a loyal, paying customer for your business.",
    features: [
      "Comprehensive User Research & Competitor Analysis",
      "Wireframing & Interactive Prototyping",
      "High-fidelity UI Design tailored to your brand identity",
      "Scalable Design Systems for consistent future development",
      "Conversion Rate Optimization (CRO) driven design",
    ],
    caps: ["Design Systems", "Prototyping", "User Research"],
    img: imgDesign,
    imgAlt: "UI/UX Design",
  },
  {
    key: "web",
    icon: Globe,
    tag: "Performance Focused",
    title: "Web Development",
    desc: "Modern, fast, and scalable websites and web applications built for growth — from marketing sites to complex customer-facing platforms.",
    features: [
      "High-performance Next.js and React applications",
      "Headless CMS integration for easy content management",
      "SEO-optimized architecture and server-side rendering",
      "Responsive, mobile-first layouts and smooth animations",
      "Robust e-commerce platforms and secure payment gateways",
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
    desc: "Native and cross-platform apps for iOS and Android, built around your users' needs to drive engagement and measurable business results.",
    features: [
      "Cross-platform development using React Native",
      "Native iOS (Swift) and Android (Kotlin) development",
      "Intuitive mobile-first UX and engaging micro-interactions",
      "Secure backend API development and real-time database integration",
      "App Store and Google Play Store deployment & ASO",
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
    desc: "Reliable cloud infrastructure with automated deployments, continuous monitoring, and scalable architecture that keeps your systems always online.",
    features: [
      "AWS, Google Cloud (GCP), and Azure architecture setup",
      "Automated CI/CD Pipelines for seamless deployments",
      "Containerization using Docker and Kubernetes",
      "24/7 Server Monitoring and automated alert systems",
      "Database scaling, migration, and backup solutions",
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
    desc: "Data-driven campaigns that attract qualified traffic, generate high-intent leads, and deliver consistent growth with maximum ROI on every budget.",
    features: [
      "Search Engine Optimization (SEO) to drive organic traffic",
      "High-converting Pay-Per-Click (PPC) and Social Media ad campaigns",
      "Comprehensive Lead Generation funnels and landing pages",
      "Email Marketing automation and drip campaigns",
      "Advanced Analytics setup and ROI tracking dashboards",
    ],
    caps: ["SEO", "Paid Ads", "Lead Generation"],
    img: imgMarketing,
    imgAlt: "Digital Marketing",
  },
];

const customStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const customFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function ServicesBg() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Subtle Aurora Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(99,102,241,0.08),transparent)]" />
      
      {/* Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

function ServiceCard({ s, index, onClick }: { s: (typeof SERVICES)[0], index: number, onClick: () => void }) {
  const Icon = s.icon;
  const indexStr = (index + 1).toString().padStart(2, "0");

  return (
    <motion.article
      variants={customFadeUp}
      onClick={onClick}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118] transition-all duration-400 ease-out hover:-translate-y-2 hover:border-white/[0.12] hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] will-change-transform"
      aria-label={`View details for ${s.title}`}
    >
      {/* Floating Index Number */}
      <div className="absolute right-6 top-4 z-20 pointer-events-none select-none text-[48px] font-bold text-white/[0.03]">
        {indexStr}
      </div>

      {/* ── Image ── */}
      <div className="relative h-[220px] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={s.img}
          alt={s.imgAlt}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent opacity-80" />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col p-6">
        {/* Icon + tag */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-violet-500/10">
            <Icon className="h-4 w-4 text-indigo-400" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-400">
            {s.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-[20px] font-bold leading-[1.1] tracking-tight text-white">
          {s.title}
        </h3>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-[13px] leading-[1.65] text-white/50">
          {s.desc}
        </p>

        {/* Bottom Area: Pills & Arrow Button */}
        <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
          <div className="flex flex-wrap gap-1.5">
            {s.caps.slice(0, 2).map((cap) => (
              <span
                key={cap}
                className="rounded-md bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/40"
              >
                {cap}
              </span>
            ))}
          </div>

          {/* Prominent Arrow Button */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/60 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-violet-500 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  const { ref, isInView } = useInView(0.05);
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

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-[#0A0A0F] py-16 lg:py-24">
      <ServicesBg />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={customStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Header ──────────────────────────────────────────── */}
          <motion.div variants={customFadeUp} className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                What We Build
              </span>
            </div>

            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[52px]">
              Technology Solutions Designed{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                For Business Growth
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/40">
              We help businesses automate operations, improve productivity,
              strengthen customer relationships, and accelerate growth through
              modern software solutions and digital experiences.
            </p>
          </motion.div>

          {/* ── 3-column grid, all 6 services ───────────────────── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, index) => (
              <ServiceCard
                key={s.key}
                s={s}
                index={index}
                onClick={() => setSelectedService(s)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Service Details Modal ─────────────────────────────── */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.92 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                className="pointer-events-auto relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111118] shadow-2xl lg:flex-row will-change-transform"
              >
                {/* Close Button */}
                <button
                  aria-label="Close modal"
                  onClick={() => setSelectedService(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white/60 backdrop-blur-md transition-colors hover:bg-white/[0.08] hover:text-white lg:right-6 lg:top-6 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Image */}
                <div className="relative h-[250px] w-full shrink-0 overflow-hidden rounded-t-3xl bg-[#0A0A0F] lg:h-auto lg:w-[45%] lg:rounded-l-3xl lg:rounded-tr-none">
                  <Image
                    src={selectedService.img}
                    alt={selectedService.imgAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-90 lg:bg-gradient-to-r" />

                  {/* Floating badge on image */}
                  <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-[#111118]/80 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-indigo-400 backdrop-blur-md">
                    <selectedService.icon className="h-4 w-4" />
                    {selectedService.tag}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="scrollbar-hide flex max-h-[60vh] flex-1 flex-col overflow-y-auto p-8 lg:max-h-[85vh] lg:p-12">
                  <h3 className="mb-4 text-3xl font-bold leading-[1.1] tracking-tight text-white">
                    {selectedService.title}
                  </h3>

                  <p className="mb-8 text-[15px] leading-[1.65] text-white/50">
                    {selectedService.desc}
                  </p>

                  <h4 className="mb-5 text-[12px] font-bold uppercase tracking-[0.16em] text-indigo-400">
                    Core Capabilities & Features
                  </h4>

                  <ul className="mb-10 flex flex-col gap-4">
                    {selectedService.features.map((feature, i) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06 }}
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                        <span className="text-[14px] leading-[1.65] text-white/60">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-white/[0.06] pt-6">
                    <a
                      href="#contact"
                      onClick={() => setSelectedService(null)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-3.5 text-[14px] font-semibold text-white transition-shadow hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
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
