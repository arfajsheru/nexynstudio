"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  ArrowRight,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  FileText,
  UserCheck,
  Code2,
} from "lucide-react";
import { LAYOUT, NAV_CTA } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ── Client FAQs (Plain English & Simple) ──────────────────────────────────────

const CLIENT_FAQS = [
  {
    question: "I found a bug or issue in my system. How do I report it?",
    answer: "Simply send us a message on WhatsApp or email us with a quick screenshot or description of the issue. Our developers will inspect it immediately and provide an estimate on when it will be resolved (typically within a few hours for critical items).",
  },
  {
    question: "I want to add a new feature or change text. How do I request it?",
    answer: "Reach out to us via email or WhatsApp outlining the changes you need. For minor changes (like updating text or changing a color), we usually deploy it within 24 hours. For major features, we will provide a quick timeline and cost estimate.",
  },
  {
    question: "Will you train my team to use our custom CRM / software dashboard?",
    answer: "Yes, absolutely! Once your software is ready, we conduct 1-on-1 walkthrough sessions over Google Meet or Zoom for your team, and we also provide simple recorded video tutorials that you can refer to anytime.",
  },
  {
    question: "What happens after my application or website is launched?",
    answer: "We provide 30 days of free post-launch support to ensure everything runs smoothly. After that, we offer optional monthly maintenance plans that cover regular updates, backups, server monitoring, and priority support.",
  },
];

// ── Support Workflow Steps ───────────────────────────────────────────────────

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Report Issue",
    description: "Send us a message on WhatsApp or email us with the details of your request.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Developer Review",
    description: "Our engineers inspect the code and start working on the solution within 2 hours.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Live Deployment",
    description: "We deploy the fix, verify it with you, and push the update live instantly.",
    icon: UserCheck,
  },
];

// ── Support Client Component ──────────────────────────────────────────────────

export function SupportClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div
      className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}
    >
      {/* Header */}
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="py-12 md:py-16 text-center max-w-3xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/60 animate-pulse" />
          Client Support Hub
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Nexyn <span className="text-muted-foreground">Support</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Get direct help from our development team, request new updates, or read our simple post-launch guides.
        </motion.p>
      </motion.header>

      {/* Workflow Section (Unique Simple Process Chart) */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mb-24"
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Workflow</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-foreground">How Support Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {WORKFLOW_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="relative p-6 rounded-2xl border border-border bg-foreground/[0.01] hover:border-foreground/20 hover:bg-foreground/[0.015] transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-foreground/15 font-mono">
                  {item.step}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/80">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Grid: Contact Channels & FAQs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
        
        {/* Left Column: Direct Contact Channels (5 Cols) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-border bg-foreground/[0.01] hover:border-foreground/20 transition-all p-8 lg:p-10 relative overflow-hidden shadow-lg min-h-[440px] text-foreground"
        >
          <div className="space-y-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Direct Channels</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Connect directly with the developers working on your project.
              </p>
            </div>

            {/* Channels */}
            <div className="space-y-4">
              <a
                href={NAV_CTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-foreground/[0.005] hover:bg-foreground/[0.02] hover:border-foreground/20 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.05] text-foreground/80 group-hover:scale-105 transition-transform shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-xs sm:text-sm">WhatsApp Chat Support</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">Fast responses for updates & queries</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/60 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="mailto:nexynstudios@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-foreground/[0.005] hover:bg-foreground/[0.02] hover:border-foreground/20 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.05] text-foreground/80 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-xs sm:text-sm">Email Helpdesk</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">nexynstudios@gmail.com</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/60 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="/#contact"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-foreground/[0.005] hover:bg-foreground/[0.02] hover:border-foreground/20 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.05] text-foreground/80 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-bold text-xs sm:text-sm">Schedule a Call</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5 truncate">Book a project review session</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/60 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>
          </div>

          {/* Support availability info */}
          <div className="relative z-10 mt-8 pt-6 border-t border-border/30 grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                <Clock className="h-3.5 w-3.5" />
                <span>Support Hours</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">Mon – Sat, 9AM – 7PM</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                <Shield className="h-3.5 w-3.5" />
                <span>Emergency Help</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-foreground">24/7 Priority SLA</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Client FAQs (7 Cols) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:col-span-7 rounded-3xl border border-border bg-foreground/[0.01] p-8 lg:p-10 shadow-lg relative flex flex-col justify-center"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight mb-1 text-foreground">Quick Reference</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Find instant answers to common questions about bug fixes, modifications, and training.
            </p>
          </div>

          <div className="space-y-3">
            {CLIENT_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-border bg-foreground/[0.005] hover:border-foreground/20 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <span className="font-bold text-xs sm:text-sm text-foreground pr-3">
                      {faq.question}
                    </span>
                    <div className="h-7 w-7 rounded bg-foreground/[0.03] flex items-center justify-center text-foreground/60 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="p-4 pt-0 border-t border-border/20 text-xs leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Support Availability Overview */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="rounded-2xl border border-border bg-foreground/[0.01] p-8 sm:p-10">
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
                  Response SLA
                </h3>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  Active projects: WhatsApp 2h / Email 24h
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.05]">
                <Shield className="h-5 w-5 text-foreground/60" />
              </div>
              <div>
                <h3 className="text-[14px] font-bold text-foreground">
                  Maintenance Plans
                </h3>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  Backup management, domain audits, and active monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
