"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Users,
  IndianRupee,
  TrendingUp,
  X,
} from "lucide-react"
import { PROJECTS } from "@/lib/data/projects"
import { LAYOUT } from "@/lib/constants"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"

// // Featured Project = UWF 
const uwf = PROJECTS.find((p) => p.slug === "united-welfare-foundation")!

const STATS = [
  { icon: Users, label: "Students Aided", value: "49+" },
  { icon: IndianRupee, label: "Amount Disbursed", value: "₹6.87L+" },
  { icon: Layers, label: "Requests Processed", value: "77+" },
  { icon: TrendingUp, label: "Processing Time Saved", value: "−70%" },
]

export function FeaturedProjectSection() {
  if (!uwf) return null

  return (
    <>
      {/*  Full-width Featured Section  */}
      <section
        id="featured-project"
        className="relative w-full overflow-hidden border-t border-border/10 bg-gradient-to-b from-background via-muted/30 to-background"
      >
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.013,
          }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10"
        >
          {/*  Section label  */}
          <div
            className={cn(
              "mx-auto w-full pt-16 pb-10 text-center",
              LAYOUT.maxWidth,
              LAYOUT.paddingX
            )}
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
              Featured Case Study
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl leading-[1.1] font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Our Latest{" "}
              <span className="font-serif text-foreground/60 italic">Work</span>
            </motion.h2>
          </div>

          {/*  HERO CARD: full-width, image left + content right  */}
          <motion.div variants={fadeUp} className="w-full pb-16">
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="mx-4 overflow-hidden rounded-3xl border border-border bg-white dark:bg-neutral-900 shadow-2xl shadow-black/10 md:mx-6">
                <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[58%_42%]">
                  {/* ── LEFT: MacBook Pro Mockup Showcase ─────────────────────────── */}
                  <div className="group relative flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 bg-neutral-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-border/40 min-h-[460px] lg:min-h-[560px]">
                    {/* Glowing aesthetic background orbs */}
                    <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />
                    
                    {/* Subtle grid pattern for texture */}
                    <div 
                      className="pointer-events-none absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "24px 24px"
                      }}
                    />

                    {/* Web Platform label at the top */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase select-none pointer-events-none">
                      Web Platform
                    </div>

                    {/* Floating pill badge from the image */}
                    <Link
                      href={`/projects/${uwf.slug}`}
                      className="group/btn relative z-20 mb-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-2.5 text-[11px] font-extrabold tracking-wider uppercase transition-all duration-500 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 hover:scale-[1.02] hover:opacity-90"
                    >
                      United Welfare Foundation
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>

                    {/* Realistic MacBook Pro Mockup */}
                    <div className="relative w-full max-w-[480px] sm:max-w-[500px] transform-gpu transition-all duration-500 hover:scale-[1.02] z-10">
                      {/* MacBook Screen Lid */}
                      <div className="relative w-full rounded-t-[16px] rounded-b-[3px] bg-gradient-to-b from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] p-[2px] shadow-[0_8px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
                        {/* Screen Outer Bezel */}
                        <div className="relative w-full aspect-[16/10] bg-[#0c0c0c] rounded-t-[14px] rounded-b-[2px] p-[5px] md:p-[7px] flex flex-col shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]">
                          {/* Notch / Camera */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16%] h-[8px] md:h-[10px] bg-[#0d0d0d] rounded-b-[4px] z-30 flex justify-center items-center">
                            <div className="w-1 h-1 rounded-full bg-[#1e293b] border border-[#334155]/60 shadow-[0_0_2px_rgba(0,0,0,0.5)]" />
                          </div>
                          
                          {/* Screen Content Container with Glossy overlay */}
                          <div className="relative w-full h-full overflow-hidden rounded-[2px] bg-neutral-900">
                            <Image
                              src={uwf.featuredImage}
                              alt={uwf.name}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 1024px) 100vw, 55vw"
                              priority
                            />
                            {/* Screen glass reflection overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none mix-blend-overlay" />
                            <div className="absolute top-0 right-0 left-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.01] to-transparent pointer-events-none transform -skew-x-12" />
                          </div>

                          {/* Display bottom logo stripe */}
                          <div className="h-[10px] md:h-[12px] w-full flex items-center justify-center -mb-0.5 mt-0.5 z-20">
                            <span className="text-[5px] md:text-[6px] text-[#555] font-bold tracking-[0.35em] uppercase opacity-95">MacBook Pro</span>
                          </div>
                        </div>
                      </div>

                      {/* MacBook Keyboard Deck / Base */}
                      <div className="relative w-[114%] -ml-[7%] h-2.5 md:h-3.5 bg-gradient-to-b from-[#e8e8e8] via-[#dedede] to-[#8c8c8c] rounded-t-[1px] rounded-b-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex justify-center items-start border-b-[2px] border-[#555555]">
                        {/* Hinge groove */}
                        <div className="absolute top-0 inset-x-0 h-[1px] bg-[#111] opacity-75" />
                        {/* Display opening notch/lip */}
                        <div className="w-[18%] h-0.5 md:h-1 bg-[#b8b8b8] rounded-b-[4px] shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.3)]" />
                      </div>
                    </div>

                    {/* Bottom background text shadow effect for depth */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.3em] text-white/20 uppercase select-none pointer-events-none">
                      Custom Software
                    </div>
                  </div>

                  {/*  RIGHT: Project Content  */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    {/* Header */}
                    <div>
                      <div className="mb-2 text-[11px] font-bold tracking-[0.15em] text-foreground/60 uppercase">
                        {uwf.industry}
                      </div>
                      <h3 className="mb-4 text-2xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-3xl">
                        {uwf.name}
                      </h3>
                      <p className="mb-6 text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {uwf.shortDescription}
                      </p>

                      {/* Key Features (first 4) */}
                      <div className="mb-6 flex flex-col gap-2">
                        {uwf.features.slice(0, 4).map((f) => (
                          <div key={f.title} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70" />
                            <span className="text-[13px] leading-snug font-medium text-neutral-800 dark:text-neutral-200">
                              {f.title}
                            </span>
                          </div>
                        ))}
                        <div className="mt-1 pl-6 text-[12px] text-neutral-500 dark:text-neutral-400">
                          + {uwf.features.length - 4} more features
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="mb-6 flex flex-wrap gap-1.5">
                        {uwf.techStack.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-neutral-200 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 text-[10px] font-semibold text-neutral-600 dark:text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mb-8 grid grid-cols-2 gap-3 border-t border-neutral-200 dark:border-neutral-800/80 pt-5">
                      {STATS.map((s) => (
                        <div key={s.label} className="flex flex-col gap-0.5">
                          <span className="text-xl font-extrabold tracking-tight text-foreground">
                            {s.value}
                          </span>
                          <span className="text-[10px] font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/projects/${uwf.slug}`}
                        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-[13px] font-semibold text-background transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-foreground/10"
                      >
                        View Full Case Study
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      {uwf.liveUrl && (
                        <a
                          href={uwf.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 rounded-xl border border-foreground/20 px-5 py-3.5 text-[13px] font-semibold text-foreground transition-all duration-300 hover:bg-foreground/10"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visit Portal
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
