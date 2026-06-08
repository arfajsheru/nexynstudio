"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  HelpCircle,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Shield,
  BookOpen,
  Headphones,
  Zap,
} from "lucide-react";
import { LAYOUT, NAV_CTA } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

// ── Contact Methods ───────────────────────────────────────────────────────────

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours on business days.",
    action: "hello@nexynstudios.com",
    href: "mailto:hello@nexynstudios.com",
    badge: "Recommended",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses for urgent queries and project updates.",
    action: "Chat on WhatsApp",
    href: NAV_CTA.href,
    badge: "Instant",
  },
  {
    icon: Phone,
    title: "Schedule a Call",
    description: "Book a 30-min free consultation with our team.",
    action: "Book a Call",
    href: "/#contact",
    badge: "Free",
  },
];

// ── Popular Topics ────────────────────────────────────────────────────────────

const POPULAR_TOPICS = [
  {
    icon: HelpCircle,
    title: "General Questions",
    description: "Pricing, process, and project timelines.",
    href: "/faq",
  },
  {
    icon: FileText,
    title: "Technical Docs",
    description: "API guides, integration details, and architecture docs.",
    href: "/faq",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Data protection, compliance, and security practices.",
    href: "/privacy-policy",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "See how we've helped businesses like yours.",
    href: "/case-studies",
  },
];

// ── Quick Links ───────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Technical guides and API references",
    href: "/faq",
  },
  {
    icon: Zap,
    title: "Status Page",
    description: "Check system uptime and incidents",
    href: "/support",
  },
  {
    icon: BookOpen,
    title: "Blog & Articles",
    description: "Latest insights and tutorials",
    href: "/blog",
  },
  {
    icon: Headphones,
    title: "Contact Support",
    description: "Reach our support team directly",
    href: "/#contact",
  },
];

// ── Support Client Component ──────────────────────────────────────────────────

export function SupportClient() {

  return (
    <div
      className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}
    >
      {/* Header */}
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="py-16 md:py-24 text-center max-w-3xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          <span className="h-1 w-1 rounded-full bg-foreground/40" />
          Help & Support
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          How Can We{" "}
          <span className="text-muted-foreground">Help You?</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Whether you need technical support, have a billing question, or want
          to discuss a new project — we&apos;re here for you.
        </motion.p>
      </motion.header>

      {/* Contact Method Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      >
        {CONTACT_METHODS.map((method) => (
          <motion.a
            key={method.title}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.01] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.02] hover:shadow-xl"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="mb-1 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/[0.05]">
                <method.icon className="h-5 w-5 text-foreground/60" />
              </div>
              {method.badge && (
                <span className="rounded-full bg-foreground/[0.06] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {method.badge}
                </span>
              )}
            </div>

            <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
              {method.title}
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
              {method.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-foreground transition-colors group-hover:text-foreground/70">
              {method.action}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Popular Topics */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="mb-20"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
            Browse by topic
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Popular Topics
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {POPULAR_TOPICS.map((topic) => (
            <motion.div key={topic.title} variants={fadeUp}>
              <Link
                href={topic.href}
                className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-foreground/[0.01] p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.03]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.05]">
                  <topic.icon className="h-5 w-5 text-foreground/60" />
                </div>
                <h3 className="text-[15px] font-bold text-foreground">
                  {topic.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
                <div className="flex items-center gap-1 text-[12px] font-semibold text-muted-foreground/60 transition-colors group-hover:text-foreground">
                  Learn More
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
        className="mb-20"
      >
        <motion.div variants={fadeUp} className="mb-10">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
            Resources
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Quick Links
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_LINKS.map((link) => (
            <motion.div key={link.title} variants={fadeUp}>
              <Link
                href={link.href}
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-foreground/[0.01] p-5 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.03]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05]">
                  <link.icon className="h-5 w-5 text-foreground/60" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-foreground">
                    {link.title}
                  </h3>
                  <p className="text-[12px] text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Support Hours */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible" viewport={{ once: true, margin: "-50px" }}
      >
        <div className="rounded-2xl border border-border/50 bg-foreground/[0.01] p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05]">
                <Clock className="h-5 w-5 text-foreground/60" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-foreground">
                  Business Hours
                </h3>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  Mon – Sat, 9:00 AM – 7:00 PM IST
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05]">
                <Zap className="h-5 w-5 text-foreground/60" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-foreground">
                  Response Time
                </h3>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  Email: Within 24 hours
                  <br />
                  WhatsApp: Within 2 hours
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05]">
                <Shield className="h-5 w-5 text-foreground/60" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-foreground">
                  Emergency Support
                </h3>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  Available for premium support clients with dedicated SLA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
