"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, Sparkles, RefreshCw } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SERVICES_OPTIONS = [
  { id: "crm", name: "Custom CRM / ERP System", baseEst: "₹1.5L - ₹3.5L", timeline: "3-5 Weeks" },
  { id: "webapp", name: "Web App / Enterprise Portal", baseEst: "₹1.2L - ₹2.8L", timeline: "2-4 Weeks" },
  { id: "mobile", name: "iOS / Android Mobile App", baseEst: "₹1.8L - ₹4.0L", timeline: "4-6 Weeks" },
  { id: "ai", name: "AI & Business Automation", baseEst: "₹80K - ₹2.2L", timeline: "2-3 Weeks" },
];

const SCOPE_OPTIONS = [
  { id: "mvp", name: "MVP / Startup Launch", multiplier: 1 },
  { id: "growth", name: "Growing Business / SMB", multiplier: 1.4 },
  { id: "enterprise", name: "Enterprise Scale Solution", multiplier: 2.2 },
];

export function ProjectEstimator() {
  const [selectedService, setSelectedService] = useState(SERVICES_OPTIONS[0]);
  const [selectedScope, setSelectedScope] = useState(SCOPE_OPTIONS[1]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-t border-border/40 bg-foreground/[0.01]">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              <Calculator className="h-3.5 w-3.5 text-foreground/50" />
              Interactive Project Estimator
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="mb-4 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Calculate Your Custom Software{" "}
            <span className="font-serif italic text-foreground/50">Estimate in Seconds</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            Select your requirements below for an instant rough estimate &amp; delivery timeline.
          </motion.p>

          {/* Interactive Calculator Box */}
          <motion.div
            variants={fadeUp}
            className="w-full max-w-3xl rounded-3xl border border-border/80 bg-background/95 p-6 shadow-xl backdrop-blur-xl dark:border-border/60 text-left sm:p-8"
          >
            {/* Step 1: Select Service */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                1. Select Solution Type
              </label>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {SERVICES_OPTIONS.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={cn(
                      "flex items-center justify-between rounded-xl border p-3.5 text-left text-sm font-medium transition-all",
                      selectedService.id === service.id
                        ? "border-foreground bg-foreground/5 text-foreground shadow-sm"
                        : "border-border/60 bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                    )}
                  >
                    <span>{service.name}</span>
                    {selectedService.id === service.id && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Scale */}
            <div className="mb-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                2. Select Project Scale
              </label>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {SCOPE_OPTIONS.map((scope) => (
                  <button
                    key={scope.id}
                    onClick={() => setSelectedScope(scope)}
                    className={cn(
                      "flex flex-col items-start rounded-xl border p-3.5 text-left text-sm font-medium transition-all",
                      selectedScope.id === scope.id
                        ? "border-foreground bg-foreground/5 text-foreground shadow-sm"
                        : "border-border/60 bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                    )}
                  >
                    <span>{scope.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Output Bar */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/80 bg-muted/40 p-5 sm:flex-row sm:p-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block">
                  Estimated Range &amp; Timeline
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {selectedService.baseEst}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    ({selectedService.timeline})
                  </span>
                </div>
              </div>

              <a
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-md transition-all hover:opacity-90 active:scale-[0.98] w-full sm:w-auto whitespace-nowrap"
              >
                Get Detailed Proposal
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
