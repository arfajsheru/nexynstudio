"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Database, 
  Target, 
  Package, 
  Factory, 
  LayoutDashboard,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  {
    id: "crm",
    title: "CRM Systems",
    icon: Users,
    desc: "Custom Customer Relationship Management systems built exactly for your sales pipeline.",
    impact: "Increase conversion rates and eliminate lost leads through automated follow-ups.",
    benefits: ["Custom Sales Pipelines", "Automated Outreach", "Performance Tracking"],
    visual: (
      <div className="flex h-full flex-col gap-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {["Total Deals", "Win Rate", "Active Leads"].map((l) => (
            <div key={l} className="rounded-md border border-border/50 bg-background/50 p-2">
              <div className="text-[9px] text-muted-foreground">{l}</div>
              <div className="mt-1 h-3 w-1/2 rounded bg-foreground/20" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-md border border-border/50 bg-background/30 p-3">
          <div className="mb-2 h-2 w-1/4 rounded bg-foreground/10" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-5 w-5 shrink-0 rounded-full bg-foreground/10" />
                <div className="h-2 flex-1 rounded bg-foreground/5" />
                <div className="h-3 w-8 rounded bg-foreground/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "erp",
    title: "ERP Systems",
    icon: Database,
    desc: "Enterprise Resource Planning software that unites your entire business operation.",
    impact: "Reduce operational overhead by connecting HR, finance, and operations in one hub.",
    benefits: ["Unified Database", "Real-Time Reporting", "Department Integration"],
    visual: (
      <div className="flex h-full p-4 gap-3">
        <div className="w-1/3 rounded-md border border-border/50 bg-background/50 p-2 space-y-2">
          {[1, 2, 3, 4].map(i => <div key={i} className="h-4 rounded-sm bg-foreground/5" />)}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-16 rounded-md border border-border/50 bg-background/30 p-2">
            <div className="h-2 w-1/3 rounded bg-foreground/10 mb-2" />
            <div className="h-2 w-full rounded bg-foreground/5" />
          </div>
          <div className="flex-1 rounded-md border border-border/50 bg-background/30" />
        </div>
      </div>
    )
  },
  {
    id: "lead",
    title: "Lead Management",
    icon: Target,
    desc: "Intelligent lead scoring and distribution platforms for high-volume sales teams.",
    impact: "Prioritize high-value prospects and route leads to the right agents instantly.",
    benefits: ["Automated Lead Scoring", "Smart Routing", "Multi-channel Intake"],
    visual: (
      <div className="flex h-full flex-col justify-center p-6 gap-4">
        <div className="flex justify-between items-end gap-2">
          {[40, 70, 45, 90, 65].map((h, i) => (
            <div key={i} className="w-full bg-foreground/10 rounded-t-sm relative" style={{ height: `${h}%` }}>
              {h > 80 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-foreground/40" />}
            </div>
          ))}
        </div>
        <div className="h-px w-full bg-border/50" />
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1 w-4 rounded bg-foreground/10" />)}
        </div>
      </div>
    )
  },
  {
    id: "inventory",
    title: "Inventory Management",
    icon: Package,
    desc: "Real-time stock tracking and order fulfillment systems for growing commerce.",
    impact: "Prevent stockouts, reduce carrying costs, and automate purchase orders.",
    benefits: ["Barcode Scanning", "Low Stock Alerts", "Supplier Portal"],
    visual: (
      <div className="flex h-full flex-col gap-2 p-4">
        <div className="flex gap-2 mb-2">
          <div className="h-6 w-1/3 rounded border border-border/50 bg-background/50" />
          <div className="h-6 flex-1 rounded border border-border/50 bg-background/30" />
        </div>
        <div className="flex-1 rounded-md border border-border/50 bg-background/30 overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between p-2 border-b border-border/40 last:border-0">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-foreground/10" />
                <div className="h-1.5 w-16 rounded bg-foreground/20" />
              </div>
              <div className="h-1.5 w-8 rounded bg-foreground/40" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "manufacturing",
    title: "Manufacturing Software",
    icon: Factory,
    desc: "Production tracking and quality control systems for modern factory floors.",
    impact: "Increase yield, track raw materials, and monitor machine performance.",
    benefits: ["Production Scheduling", "Quality Checklists", "Machine Integration"],
    visual: (
      <div className="flex h-full items-center justify-center p-6">
        <div className="relative h-24 w-24 rounded-full border-4 border-foreground/10 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-foreground/30 border-t-transparent border-r-transparent -rotate-45" />
          <div className="text-[10px] font-bold text-foreground/40">78% OEE</div>
        </div>
        <div className="ml-6 space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-foreground/20" />
              <div className="h-1.5 w-12 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "dashboards",
    title: "Custom Dashboards",
    icon: LayoutDashboard,
    desc: "Executive business intelligence dashboards compiling data from multiple sources.",
    impact: "Make confident, data-driven leadership decisions with real-time metrics.",
    benefits: ["Data Visualization", "Custom Reports", "Automated Exports"],
    visual: (
      <div className="grid grid-cols-2 grid-rows-2 h-full gap-2 p-4">
        <div className="rounded-md border border-border/50 bg-background/30 p-2">
          <div className="h-12 w-12 rounded-full border-2 border-foreground/20 mx-auto mt-1" />
        </div>
        <div className="rounded-md border border-border/50 bg-background/30 p-2 flex flex-col justify-end gap-1">
          {[30, 50, 80, 40].map((h, i) => <div key={i} className="w-full bg-foreground/10 rounded-sm" style={{ height: `${h}%` }} />)}
        </div>
        <div className="col-span-2 rounded-md border border-border/50 bg-background/30 p-2">
          <div className="h-full w-full bg-[linear-gradient(to_right,transparent_10%,var(--foreground)_50%,transparent_90%)] opacity-10" />
        </div>
      </div>
    )
  },
];

export function SolutionsSection() {
  const { ref, isInView } = useInView(0.05);
  const [activeTab, setActiveTab] = useState(SOLUTIONS[0]);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              Core Capabilities
            </div>
            <h2 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Solutions We <span className="text-foreground/50">Build</span>
            </h2>
            <p className="mx-auto text-[14px] leading-relaxed text-muted-foreground max-w-2xl">
              We engineer scalable platforms tailored to your specific industry requirements. From manufacturing floors to global sales teams.
            </p>
          </motion.div>

          {/* ── Interactive Tab Layout ─────────────────────────────── */}
          <motion.div variants={fadeUp} className="w-full max-w-5xl rounded-3xl border border-border/50 bg-background/30 p-2 sm:p-4 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* Tabs List (Left) */}
              <div className="flex flex-col gap-1 lg:col-span-4 max-h-[400px] overflow-y-auto hide-scrollbar pr-1">
                {SOLUTIONS.map((solution) => {
                  const isActive = activeTab.id === solution.id;
                  const Icon = solution.icon;
                  
                  return (
                    <button
                      key={solution.id}
                      onClick={() => setActiveTab(solution)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-300",
                        isActive 
                          ? "bg-foreground/5 border border-border/60" 
                          : "hover:bg-foreground/[0.02] border border-transparent"
                      )}
                    >
                      <Icon className={cn("h-4 w-4 transition-colors", isActive ? "text-foreground" : "text-muted-foreground")} />
                      <span className={cn("text-[13px] font-semibold", isActive ? "text-foreground" : "text-muted-foreground")}>
                        {solution.title}
                      </span>
                      {isActive && (
                        <ArrowRight className="ml-auto h-3.5 w-3.5 text-foreground/40" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content (Right) */}
              <div className="lg:col-span-8 rounded-2xl border border-border/50 bg-background p-6 sm:p-8 relative overflow-hidden h-[400px]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-foreground/5">
                      <activeTab.icon className="h-5 w-5 text-foreground/70" />
                    </div>
                    
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
                      {activeTab.title}
                    </h3>
                    <p className="mb-4 text-[14px] leading-relaxed text-muted-foreground max-w-lg">
                      {activeTab.desc}
                    </p>

                    <div className="mb-6 rounded-lg border border-border/40 bg-muted/10 p-4">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/50 mb-1.5">
                        Business Impact
                      </div>
                      <div className="text-[13px] font-medium text-foreground">
                        {activeTab.impact}
                      </div>
                    </div>

                    {/* Split Layout inside Tab */}
                    <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                          Key Features
                        </div>
                        <ul className="space-y-2.5">
                          {activeTab.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-foreground/30" />
                              <span className="text-[12px] text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="h-32 rounded-xl border border-border/50 bg-foreground/[0.02] overflow-hidden hidden sm:block">
                        {activeTab.visual}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
