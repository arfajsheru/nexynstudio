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
import { fadeUp, staggerContainer } from "@/lib/motion";
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

function ServiceCard({ s, onClick, index }: { s: (typeof SERVICES)[0], onClick: () => void, index: number }) {
  const Icon = s.icon;
  // Create an asymmetric bento grid layout
  const isLarge = index === 0 || index === 3 || index === 4;
  const isReversed = index === 3; // Flip the layout of one of the large cards for visual variety

  return (
    <motion.article
      variants={fadeUp}
      onClick={onClick}
      className={cn(
        "group relative flex cursor-pointer overflow-hidden rounded-[2.5rem] border border-border/40 bg-foreground/[0.01] transition-all duration-500 hover:-translate-y-1 hover:border-border/80 hover:bg-foreground/[0.02] hover:shadow-2xl",
        isLarge ? "md:col-span-2 flex-col md:flex-row" : "col-span-1 flex-col",
        isReversed && isLarge ? "md:flex-row-reverse" : ""
      )}
    >
      {/* ── Image Container ── */}
      <div className={cn(
        "relative shrink-0 overflow-hidden bg-muted/10 flex items-center justify-center",
        isLarge ? "h-[300px] md:h-auto md:w-1/2" : "h-[280px] w-full"
      )}>
        {/* Subtle glow behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-50" />
        <Image
          src={s.img}
          alt={s.imgAlt}
          fill
          className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110"
          sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>

      {/* ── Content Container ─────────────────────────────────────────── */}
      <div className={cn(
        "flex flex-1 flex-col p-8 sm:p-10",
        isLarge ? "justify-center" : ""
      )}>

        {/* Icon + tag */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-background border border-border/40 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-foreground/20">
            <Icon className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-foreground" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground/80">
            {s.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
          {s.title}
        </h3>

        {/* Description */}
        <p className="mb-8 text-[15px] leading-[1.6] text-muted-foreground line-clamp-3">
          {s.desc}
        </p>

        {/* Bottom Area: Pills & Arrow Button */}
        <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-6">
          <div className="flex flex-wrap gap-2">
            {s.caps.slice(0, isLarge ? 3 : 2).map((cap) => (
              <span
                key={cap}
                className="rounded-lg bg-foreground/[0.03] border border-border/40 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors group-hover:border-foreground/20 group-hover:text-foreground"
              >
                {cap}
              </span>
            ))}
          </div>
          
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:shadow-md">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
    }
  }, [selectedService]);

  return (
    <section id="services" ref={ref} className="relative overflow-hidden py-16 lg:py-24">
      <ServicesBg />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ── Header ──────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              What We Build
            </div>

            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[48px]">
              Technology Solutions Designed{" "}
              <span className="text-foreground/50">For Business Growth</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              We help businesses automate operations, improve productivity,
              strengthen customer relationships, and accelerate growth through
              modern software solutions and digital experiences.
            </p>
          </motion.div>

          {/* ── Bento Grid, all 6 services ───────────────────── */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard 
                key={s.key} 
                s={s} 
                index={i}
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
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-border/40 bg-background shadow-2xl pointer-events-auto lg:flex-row"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/60 backdrop-blur-md border border-border text-foreground transition-colors hover:bg-muted lg:right-6 lg:top-6"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Image */}
                <div className="relative h-[320px] w-full shrink-0 bg-muted/10 lg:h-auto lg:w-[45%]">
                  <Image
                    src={selectedService.img}
                    alt={selectedService.imgAlt}
                    fill
                    className="object-contain p-4 lg:p-6"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80 lg:bg-gradient-to-r" />

                  {/* Floating badge on image */}
                  <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-border/20 bg-background/50 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur-md">
                    <selectedService.icon className="h-4 w-4" />
                    {selectedService.tag}
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-12 max-h-[60vh] lg:max-h-[85vh] overflow-y-auto scrollbar-hide">
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
                        transition={{ delay: 0.2 + i * 0.05 }}
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
                      href="#contact"
                      onClick={() => setSelectedService(null)}
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

