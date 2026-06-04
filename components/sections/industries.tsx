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
  Rocket
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const INDUSTRIES = [
  { name: "Manufacturing", icon: Factory, desc: "Production tracking, inventory, and ERP systems." },
  { name: "Real Estate", icon: Building2, desc: "Property management and CRM platforms." },
  { name: "Healthcare", icon: Stethoscope, desc: "Secure patient portals and clinic management." },
  { name: "Education", icon: GraduationCap, desc: "LMS, student portals, and virtual classrooms." },
  { name: "E-Commerce", icon: ShoppingCart, desc: "High-conversion storefronts and backend scaling." },
  { name: "Logistics", icon: Truck, desc: "Fleet management and supply chain tracking." },
  { name: "Finance", icon: Landmark, desc: "Fintech apps, secure dashboards, and ledgers." },
  { name: "Startups", icon: Rocket, desc: "Rapid MVPs and scalable SaaS architectures." },
];

export function IndustriesSection() {
  const { ref, isInView } = useInView(0.05);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-foreground/[0.01]">
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
              Domain Expertise
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Industries We <span className="text-foreground/50">Serve</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
              We leverage deep industry knowledge to build software that complies with regulations, integrates with standard tools, and solves sector-specific challenges.
            </p>
          </motion.div>

          {/* ── Grid ───────────────────────────────────────────────── */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 transition-colors hover:border-foreground/20 hover:bg-background"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative z-10 flex h-full flex-col items-start text-left">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-foreground/5 transition-transform duration-300 group-hover:scale-110">
                    <ind.icon className="h-4 w-4 text-foreground/70" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-foreground">
                    {ind.name}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-muted-foreground">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
