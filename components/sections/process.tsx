"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Map, PenTool, Code2, ShieldCheck, Rocket, Headphones } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const PROCESS_STAGES = [
  { 
    id: "discovery", 
    title: "Discovery", 
    icon: Search, 
    x: 15, y: 25, 
    explanation: "Deep dive into your business operations and market landscape to identify exact bottlenecks.", 
    deliverables: ["Product Roadmap", "Technical Scope", "User Personas"], 
    outcome: "Clear project definition" 
  },
  { 
    id: "planning", 
    title: "Planning", 
    icon: Map, 
    x: 38, y: 25, 
    explanation: "System architecture and data modeling to ensure scalable foundations.", 
    deliverables: ["Database Schema", "Architecture Diagram", "Sprint Schedule"], 
    outcome: "Scalable foundation" 
  },
  { 
    id: "design", 
    title: "Design", 
    icon: PenTool, 
    x: 61, y: 25, 
    explanation: "Creating intuitive, high-fidelity prototypes centered around user experience.", 
    deliverables: ["Wireframes", "UI Prototypes", "Design System"], 
    outcome: "Pixel-perfect blueprints" 
  },
  { 
    id: "development", 
    title: "Development", 
    icon: Code2, 
    x: 85, y: 25, 
    explanation: "Agile engineering sprints transforming design into robust, scalable code.", 
    deliverables: ["Frontend App", "Backend API", "Admin Dashboard"], 
    outcome: "Functional software" 
  },
  { 
    id: "testing", 
    title: "Testing", 
    icon: ShieldCheck, 
    x: 85, y: 75, 
    explanation: "Rigorous QA testing, security audits, and edge-case simulations.", 
    deliverables: ["Test Reports", "Security Audit", "Performance Metrics"], 
    outcome: "Bulletproof system" 
  },
  { 
    id: "deployment", 
    title: "Deployment", 
    icon: Rocket, 
    x: 50, y: 75, 
    explanation: "Seamless cloud infrastructure setup and zero-downtime launch.", 
    deliverables: ["Cloud Architecture", "CI/CD Pipeline", "Production Launch"], 
    outcome: "Live product" 
  },
  { 
    id: "support", 
    title: "Support", 
    icon: Headphones, 
    x: 15, y: 75, 
    explanation: "Continuous monitoring, maintenance, and iteration as you scale.", 
    deliverables: ["Uptime Monitoring", "Monthly Updates", "Feature Scaling"], 
    outcome: "Long-term partnership" 
  },
];

const DESKTOP_PATH = "M -100 100 L 850 100 A 100 100 0 0 1 850 300 L -100 300";

export function ProcessSection() {
  const { ref, isInView } = useInView(0.1);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-background py-16 lg:py-24 border-t border-border/40 z-20">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-12 lg:mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
              Software Delivery Journey
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              From Idea to{" "}
              <span className="text-foreground/40">Production</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Watch how we systematically transform business bottlenecks into robust, scalable digital products through our connected architecture pipeline.
            </p>
          </motion.div>

          {/* ── Interactive Architecture Diagram (Desktop) ───────── */}
          <motion.div variants={fadeUp} className="hidden lg:block relative w-full max-w-5xl mx-auto h-[400px]">
            
            {/* Background SVG Path & Animations */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pathGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--foreground)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
                </linearGradient>
                <filter id="particleGlow">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Substantial base track */}
              <path d={DESKTOP_PATH} stroke="currentColor" strokeOpacity="0.1" strokeWidth="6" fill="none" strokeLinecap="round" />
              
              {/* Dashed data track overlay */}
              <path d={DESKTOP_PATH} stroke="url(#pathGlow)" strokeWidth="2" strokeDasharray="6 12" fill="none" strokeLinecap="round" />
              
              {/* Animated drawing line */}
              <path 
                d={DESKTOP_PATH} 
                stroke="currentColor" 
                strokeOpacity="0.4" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="2000" 
                strokeDashoffset="2000"
              >
                <animate attributeName="stroke-dashoffset" values="2000;0" dur="12s" repeatCount="indefinite" />
              </path>

              {/* Traveling Glowing Particle */}
              <circle r="6" className="fill-foreground" filter="url(#particleGlow)">
                <animateMotion dur="12s" repeatCount="indefinite" path={DESKTOP_PATH} />
              </circle>
              <circle r="3" className="fill-background">
                <animateMotion dur="12s" repeatCount="indefinite" path={DESKTOP_PATH} />
              </circle>
            </svg>

            {/* Interactive Nodes */}
            {PROCESS_STAGES.map((stage) => {
              const isHovered = hoveredNode === stage.id;
              
              return (
                <div 
                  key={stage.id}
                  className={cn(
                    "absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300",
                    isHovered ? "z-50" : "z-10"
                  )}
                  style={{ left: `${stage.x}%`, top: `${stage.y}%` }}
                  onMouseEnter={() => setHoveredNode(stage.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className="relative group flex flex-col items-center justify-center cursor-pointer">
                    <div className={cn(
                      "w-16 h-16 rounded-full border-[3px] bg-background flex items-center justify-center transition-all duration-500 relative z-20", 
                      isHovered ? "border-foreground scale-110 shadow-[0_0_40px_rgba(var(--foreground-rgb),0.2)]" : "border-border/60"
                    )}>
                      <stage.icon className={cn(
                        "w-6 h-6 transition-colors duration-500", 
                        isHovered ? "text-foreground" : "text-muted-foreground/40"
                      )} strokeWidth={1.5} />
                    </div>
                    
                    {/* Node pulsing background when active */}
                    <div className={cn(
                      "absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-foreground/10 transition-all duration-500 z-10 pointer-events-none",
                      isHovered ? "scale-[2] opacity-100 animate-pulse" : "scale-100 opacity-0"
                    )} />

                    <span className={cn(
                      "absolute -bottom-10 font-bold text-[14px] tracking-tight transition-colors duration-300 whitespace-nowrap", 
                      isHovered ? "text-foreground" : "text-muted-foreground/50"
                    )}>
                      {stage.title}
                    </span>
                  </div>

                  {/* Professional Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <Tooltip stage={stage} position={stage.y < 50 ? 'bottom' : 'top'} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* ── Horizontal Scroll Workflow (Mobile) ──────────────── */}
          <motion.div variants={fadeUp} className="block lg:hidden w-full overflow-x-auto snap-x snap-mandatory pb-12 mt-4 no-scrollbar">
            <div className="flex gap-6 w-max relative pt-6 px-6">
              
              {/* Connecting Line */}
              <div className="absolute top-[56px] left-6 right-6 h-[3px] bg-border/40 z-0" />

              {PROCESS_STAGES.map((stage) => (
                <div key={stage.id} className="snap-center w-[280px] sm:w-[320px] relative z-10 flex flex-col items-center">
                  
                  {/* Node Circle */}
                  <div className="w-16 h-16 rounded-full border-[3px] border-border bg-background flex items-center justify-center mb-6 relative z-10 shadow-sm">
                    <stage.icon className="w-6 h-6 text-foreground/80" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-foreground/[0.02] border border-border/40 rounded-2xl p-6 text-left w-full shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-foreground/5 rounded-lg border border-border/50">
                        <stage.icon className="w-4 h-4 text-foreground" />
                      </div>
                      <h4 className="font-bold text-foreground text-lg">{stage.title}</h4>
                    </div>
                    
                    <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                      {stage.explanation}
                    </p>
                    
                    <div className="mb-5">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/40 mb-2 block">
                        Deliverables
                      </span>
                      <ul className="flex flex-wrap gap-2">
                        {stage.deliverables.map(d => (
                          <li key={d} className="px-2 py-1 bg-background border border-border/40 rounded-md text-[11px] font-medium text-foreground/70">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/30">
                      <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/40 block mb-1">
                        Outcome
                      </span>
                      <span className="text-[13px] font-semibold text-foreground">
                        {stage.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function Tooltip({ stage, position }: { stage: any, position: 'top' | 'bottom' }) {
  // Prevent tooltip from overflowing screen edges
  const xOffset = stage.x <= 20 ? 100 : stage.x >= 80 ? -100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        x: `calc(-50% + ${xOffset}px)`, 
        scale: 1 
      }}
      exit={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "absolute left-1/2 w-[340px] bg-background/95 backdrop-blur-xl border border-border/40 rounded-2xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)] z-[100] pointer-events-none text-left",
        position === 'top' ? "bottom-full mb-10" : "top-full mt-10"
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-foreground/5 rounded-lg border border-border/50">
          <stage.icon className="w-4 h-4 text-foreground" />
        </div>
        <h4 className="font-bold text-foreground text-lg">{stage.title}</h4>
      </div>
      
      <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
        {stage.explanation}
      </p>
      
      <div className="mb-5">
        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/40 mb-2 block">
          Deliverables
        </span>
        <ul className="flex flex-wrap gap-2">
          {stage.deliverables.map((d: string) => (
            <li key={d} className="px-2 py-1 bg-foreground/[0.03] border border-border/40 rounded-md text-[11px] font-medium text-foreground/70">
              {d}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-border/30">
        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-foreground/40 block mb-1">
          Expected Outcome
        </span>
        <span className="text-[13px] font-semibold text-foreground">
          {stage.outcome}
        </span>
      </div>
    </motion.div>
  );
}




