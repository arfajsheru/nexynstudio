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
              <div className="mx-4 overflow-hidden rounded-3xl border border-border bg-white shadow-2xl shadow-black/10 md:mx-6 dark:bg-neutral-900">
                <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-2">
                  {/* ── LEFT: MacBook Pro Mockup Showcase ─────────────────────────── */}
                  <div className="group relative flex min-h-[460px] flex-col items-center justify-center overflow-hidden border-b border-border/40 bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-8 md:p-12 lg:min-h-[560px] lg:border-r lg:border-b-0 lg:p-16">
                    {/* Glowing aesthetic background orbs */}
                    <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/[0.02] blur-[120px]" />
                    <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/[0.02] blur-[120px]" />

                    {/* Soft spotlight behind the laptop */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.045)_0%,_transparent_65%)]" />

                    {/* Web Platform label at the top */}
                    <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-extrabold tracking-[0.35em] text-white/40 uppercase select-none">
                      Web Platform
                    </div>

                    {/* Realistic MacBook Mockup Wrapper */}
                    <Link
                      href={`/projects/${uwf.slug}`}
                      className="relative w-full max-w-[480px] sm:max-w-[500px] block transition-transform hover:-translate-y-2 duration-500 group/laptop z-10"
                    >
                      {/* Top Ribbon Tooltip */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/laptop:opacity-100 group-hover/laptop:-translate-y-full transition-all duration-500 ease-[0.16,1,0.3,1] z-0 flex justify-center pointer-events-none">
                        <div 
                          className="flex items-center gap-2 px-6 py-2.5 rounded-t-xl bg-neutral-900 text-white text-[11px] font-bold tracking-widest uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.3)] border-t border-x border-white/10 whitespace-nowrap"
                        >
                          <span>United Welfare Foundation</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* MacBook Mockup container */}
                      <div className="relative z-10 w-full mx-auto shadow-2xl">
                        {/* MacBook Screen / Lid */}
                        <div className="relative w-full rounded-t-[14px] rounded-b-[4px] bg-gradient-to-b from-[#e5e5e5] to-[#b5b5b5] p-[2px] ring-1 ring-black/10">
                          <div className="relative w-full aspect-[16/10] bg-black rounded-t-[12px] rounded-b-[2px] p-[6px] md:p-[8px] flex flex-col shadow-inner overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[18%] h-[12px] md:h-[14px] bg-black rounded-b-[6px] z-30 flex justify-center items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-[#222]" />
                            </div>
                            
                            {/* Screen Content */}
                            <div className="relative w-full h-full bg-neutral-900 overflow-hidden rounded-[2px]">
                              <Image
                                src={uwf.featuredImage}
                                alt={uwf.name}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                priority
                              />
                            </div>
                            
                            {/* MacBook Pro text */}
                            <div className="h-[12px] md:h-[16px] w-full flex items-center justify-center -mb-1 mt-1 z-20">
                              <span className="text-[6px] md:text-[7px] text-[#444] font-semibold tracking-[0.3em] uppercase">MacBook Pro</span>
                            </div>
                          </div>
                        </div>

                        {/* MacBook Base */}
                        <div className="relative w-[114%] -ml-[7%] h-3 md:h-4 bg-gradient-to-b from-[#e0e0e0] to-[#999999] rounded-t-[1px] rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex justify-center items-start border-b-[2px] border-[#666666]">
                          {/* Trackpad Indentation */}
                          <div className="w-[18%] h-1 md:h-1.5 bg-[#c2c2c2] rounded-b-[4px] shadow-inner" />
                        </div>
                      </div>
                    </Link>

                    {/* Bottom background text shadow effect for depth */}
                    <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-extrabold tracking-[0.35em] text-white/40 uppercase select-none">
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
                            className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-600 dark:border-neutral-800/80 dark:bg-neutral-900 dark:text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mb-8 grid grid-cols-2 gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800/80">
                      {STATS.map((s) => (
                        <div key={s.label} className="flex flex-col gap-0.5">
                          <span className="text-xl font-extrabold tracking-tight text-foreground">
                            {s.value}
                          </span>
                          <span className="text-[10px] font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
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
