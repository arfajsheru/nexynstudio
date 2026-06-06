"use client";

import { motion } from "framer-motion";
import { Search, Map, PenTool, Code2, ShieldCheck, Rocket, Headphones, ArrowRight } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const PROCESS_STAGES = [
  { 
    id: "discovery", 
    title: "Discovery", 
    icon: Search, 
    explanation: "Deep dive into your business operations and market landscape to identify exact bottlenecks.", 
    deliverables: ["Product Roadmap", "Technical Scope", "User Personas"], 
    outcome: "Clear project definition" 
  },
  { 
    id: "planning", 
    title: "Planning", 
    icon: Map, 
    explanation: "System architecture and data modeling to ensure scalable foundations.", 
    deliverables: ["Database Schema", "Architecture Diagram", "Sprint Schedule"], 
    outcome: "Scalable foundation" 
  },
  { 
    id: "design", 
    title: "Design", 
    icon: PenTool, 
    explanation: "Creating intuitive, high-fidelity prototypes centered around user experience.", 
    deliverables: ["Wireframes", "UI Prototypes", "Design System"], 
    outcome: "Pixel-perfect blueprints" 
  },
  { 
    id: "development", 
    title: "Development", 
    icon: Code2, 
    explanation: "Agile engineering sprints transforming design into robust, scalable code.", 
    deliverables: ["Frontend App", "Backend API", "Admin Dashboard"], 
    outcome: "Functional software" 
  },
  { 
    id: "testing", 
    title: "Testing", 
    icon: ShieldCheck, 
    explanation: "Rigorous QA testing, security audits, and edge-case simulations.", 
    deliverables: ["Test Reports", "Security Audit", "Performance Metrics"], 
    outcome: "Bulletproof system" 
  },
  { 
    id: "deployment", 
    title: "Deployment", 
    icon: Rocket, 
    explanation: "Seamless cloud infrastructure setup and zero-downtime launch.", 
    deliverables: ["Cloud Architecture", "CI/CD Pipeline", "Production Launch"], 
    outcome: "Live product" 
  },
  { 
    id: "support", 
    title: "Support", 
    icon: Headphones, 
    explanation: "Continuous monitoring, maintenance, and iteration as you scale.", 
    deliverables: ["Uptime Monitoring", "Monthly Updates", "Feature Scaling"], 
    outcome: "Long-term partnership" 
  },
];

export function ProcessSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section id="process" className="relative overflow-hidden py-20 lg:py-28 border-t border-border/40 bg-background">
      {/* Subtle Background Glows */}
      <div className="absolute left-1/4 top-1/3 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-foreground/[0.01] blur-[100px] dark:bg-foreground/[0.02]" />
      <div className="absolute right-1/4 bottom-1/3 -z-10 h-[300px] w-[600px] translate-x-1/2 rounded-full bg-foreground/[0.01] blur-[100px] dark:bg-foreground/[0.02]" />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 lg:mb-20 text-center flex flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
              Software Delivery Journey
            </div>
            <h2 className="mx-auto text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl max-w-3xl">
              From Idea to <span className="text-foreground/50">Production</span>
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-base leading-relaxed text-muted-foreground">
              We systematically transform complex business bottlenecks into robust, scalable digital products through a refined development pipeline.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_STAGES.map((stage, index) => {
              const Icon = stage.icon;
              const stepNumber = String(index + 1).padStart(2, "0");
              const isSupport = stage.id === "support";

              return (
                <motion.div
                  key={stage.id}
                  variants={fadeUp}
                  className={cn(
                    "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-foreground/[0.01] p-5 lg:p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.03] dark:border-border dark:bg-card/10 dark:hover:bg-card/20",
                    isSupport && "lg:col-span-2"
                  )}
                >
                  {/* Premium watermarked step number */}
                  <span className="absolute top-4 right-6 font-mono text-5xl lg:text-6xl font-extrabold text-foreground/10 select-none transition-colors duration-300 group-hover:text-foreground/20 dark:text-white/5 dark:group-hover:text-white/10">
                    {stepNumber}
                  </span>

                  <div>
                    {/* Icon Container */}
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.03] border border-border transition-all duration-500 group-hover:scale-105 group-hover:bg-foreground/5 dark:bg-card/30 dark:border-border">
                      <Icon className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-foreground" strokeWidth={1.5} />
                    </div>

                    {/* Title & Description */}
                    <h3 className="mb-2 text-base font-bold tracking-tight text-foreground">
                      {stage.title}
                    </h3>
                    <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground pr-8">
                      {stage.explanation}
                    </p>

                    {/* Deliverables */}
                    <div className="mb-4">
                      <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-muted-foreground block mb-2">
                        Deliverables
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stage.deliverables.map((deliverable) => (
                          <span 
                            key={deliverable}
                            className="px-2 py-0.5 text-[10.5px] font-medium rounded-md border border-border bg-foreground/[0.02] text-foreground/80 dark:border-border"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Outcome Highlight Footer */}
                  <div className="pt-3.5 border-t border-border flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-muted-foreground">
                      Outcome
                    </span>
                    <span className="text-xs font-bold text-foreground">
                      {stage.outcome}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Custom CTA Card to balance the layout */}
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-border bg-foreground/[0.01] p-5 lg:p-6 transition-all duration-300 hover:border-solid hover:border-foreground/20 hover:bg-foreground/[0.02] dark:border-border dark:bg-card/5 dark:hover:bg-card/10"
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.03] border border-border dark:bg-card/30 dark:border-border">
                  <Rocket className="h-5 w-5 text-foreground/60 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                </div>

                <h3 className="mb-2 text-base font-bold tracking-tight text-foreground">
                  Ready to start?
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  Let's discuss how our structured engineering process can turn your ideas into a robust, scaling product.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-foreground hover:opacity-85 transition-opacity"
                >
                  Schedule a discovery call
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





