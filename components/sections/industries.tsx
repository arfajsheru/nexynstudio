"use client";

import { motion } from "framer-motion";
import { 
  Factory, 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  ShoppingCart, 
  Truck, 
  Landmark, 
  Rocket,
  Layers,
  Network
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  { id: "re", name: "Real Estate", icon: Building2, pos: { x: 50, y: 15 }, mobilePos: { x: 20, y: 15 }, desc: "Property management platforms & high-performance CRMs." },
  { id: "mfg", name: "Manufacturing", icon: Factory, pos: { x: 15, y: 25 }, mobilePos: { x: 80, y: 15 }, desc: "Real-time production tracking and automated inventory." },
  { id: "health", name: "Healthcare", icon: Stethoscope, pos: { x: 85, y: 25 }, mobilePos: { x: 20, y: 32 }, desc: "HIPAA-compliant portals and secure clinic management." },
  { id: "start", name: "Startups", icon: Rocket, pos: { x: 15, y: 50 }, mobilePos: { x: 80, y: 32 }, desc: "Rapid MVP development and cloud scaling architectures." },
  { id: "edu", name: "Education", icon: GraduationCap, pos: { x: 85, y: 50 }, mobilePos: { x: 20, y: 68 }, desc: "Scalable virtual classrooms and complete LMS solutions." },
  { id: "fin", name: "Finance", icon: Landmark, pos: { x: 15, y: 75 }, mobilePos: { x: 80, y: 68 }, desc: "Bank-grade secure dashboards, ledgers, and fintech apps." },
  { id: "ecom", name: "E-Commerce", icon: ShoppingCart, pos: { x: 85, y: 75 }, mobilePos: { x: 20, y: 85 }, desc: "Headless storefronts handling massive traffic spikes." },
  { id: "log", name: "Logistics", icon: Truck, pos: { x: 50, y: 85 }, mobilePos: { x: 80, y: 85 }, desc: "Complete supply chain visibility and fleet management." },
];

export function IndustriesSection() {

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-background">
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        .animate-line-flow {
          stroke-dasharray: 4 4;
          animation: drawLine 2s linear infinite;
        }
      `}</style>
      
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
      </div>

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-10 lg:mb-14 text-center relative z-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
              <Network className="h-3.5 w-3.5" />
              Ecosystem
            </div>
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Industries We <span className="text-foreground/40">Serve</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              A unified software ecosystem connecting diverse industries. We architect secure, scalable, and tailored solutions for modern enterprises.
            </p>
          </motion.div>

          {/* ── Architectural Map ──────────────────────────────────── */}
          <motion.div 
            variants={fadeUp}
            className="relative w-full max-w-5xl mx-auto h-[600px] md:h-[700px]"
          >
            {/* SVG Lines - Desktop */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0">
              {[
                {x1: "50%", y1: "15%", x2: "50%", y2: "85%"},
                {x1: "15%", y1: "25%", x2: "85%", y2: "25%"},
                {x1: "15%", y1: "50%", x2: "85%", y2: "50%"},
                {x1: "15%", y1: "75%", x2: "85%", y2: "75%"},
              ].map((line, i) => (
                <g key={`desk-line-${i}`}>
                  <line {...line} className="stroke-border/30" strokeWidth="1" />
                  <line {...line} className="stroke-foreground/20 animate-line-flow" strokeWidth="1" />
                </g>
              ))}
              <circle cx="50%" cy="25%" r="3" className="fill-border" />
              <circle cx="50%" cy="50%" r="3" className="fill-border" />
              <circle cx="50%" cy="75%" r="3" className="fill-border" />
            </svg>

            {/* SVG Lines - Mobile */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden z-0">
              {[
                {x1: "50%", y1: "15%", x2: "50%", y2: "85%"},
                {x1: "20%", y1: "15%", x2: "80%", y2: "15%"},
                {x1: "20%", y1: "32%", x2: "80%", y2: "32%"},
                {x1: "20%", y1: "68%", x2: "80%", y2: "68%"},
                {x1: "20%", y1: "85%", x2: "80%", y2: "85%"},
              ].map((line, i) => (
                <g key={`mob-line-${i}`}>
                  <line {...line} className="stroke-border/30" strokeWidth="1" />
                  <line {...line} className="stroke-foreground/20 animate-line-flow" strokeWidth="1" />
                </g>
              ))}
              <circle cx="50%" cy="15%" r="2.5" className="fill-border" />
              <circle cx="50%" cy="32%" r="2.5" className="fill-border" />
              <circle cx="50%" cy="68%" r="2.5" className="fill-border" />
              <circle cx="50%" cy="85%" r="2.5" className="fill-border" />
            </svg>

            {/* Center Core Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-foreground text-background rounded-full shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] ring-[8px] ring-background cursor-pointer group hover:scale-105 transition-all duration-500">
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border border-foreground/20 animate-ping [animation-duration:3s]" />
                <div className="absolute inset-[-20px] rounded-full border border-foreground/10 animate-ping [animation-duration:3s] [animation-delay:1s]" />
                
                <Layers className="w-8 h-8 md:w-10 md:h-10 mb-1.5 opacity-90" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Core</span>
              </div>
            </div>

            {/* Industry Nodes */}
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className={cn(
                  "absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer",
                  "left-[var(--x-mobile)] top-[var(--y-mobile)]",
                  "md:left-[var(--x-desktop)] md:top-[var(--y-desktop)]"
                )}
                style={{
                  "--x-desktop": `${ind.pos.x}%`,
                  "--y-desktop": `${ind.pos.y}%`,
                  "--x-mobile": `${ind.mobilePos.x}%`,
                  "--y-mobile": `${ind.mobilePos.y}%`,
                } as React.CSSProperties}
              >
                {/* Node Icon */}
                <div className="relative p-3 md:p-4 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl md:rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.03)] dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:border-foreground/40 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] group-hover:scale-110 transition-all duration-500 ease-out">
                  <ind.icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                {/* Always-visible Label */}
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 bg-background/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-border/10">
                  {ind.name}
                </span>

                {/* Hover Tooltip (Vercel Style) */}
                <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 w-48 p-4 rounded-xl bg-foreground text-background shadow-2xl left-1/2 -translate-x-1/2 bottom-full mb-3 scale-95 group-hover:scale-100 origin-bottom">
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  
                  <span className="block text-sm font-semibold mb-1.5">{ind.name}</span>
                  <p className="text-[11px] leading-relaxed opacity-80">{ind.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
