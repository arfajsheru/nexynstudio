"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/data/projects"
import { LAYOUT } from "@/lib/constants"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"

export function FeaturedProjectSection() {
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
              Featured Case Studies
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl leading-[1.1] font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Our Latest{" "}
              <span className="font-serif text-foreground/60 italic">Work</span>
            </motion.h2>
          </div>

          {/*  HERO CARDS STACK  */}
          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col gap-12 pb-20 sm:gap-16"
          >
            {PROJECTS.map((project) => {
              const isMobile = project.category === "Mobile App"

              return (
                <div
                  key={project.slug}
                  className="mx-auto w-full max-w-[1440px]"
                >
                  <div className="mx-4 overflow-hidden rounded-3xl border border-border bg-white shadow-2xl shadow-black/10 md:mx-6 dark:bg-neutral-900">
                    <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-2">
                      {/* ── LEFT: Device Mockup Showcase ─────────────────────────── */}
                      <div className="group relative flex min-h-[460px] flex-col items-center justify-center overflow-hidden border-b border-border/40 bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-8 md:p-12 lg:min-h-[560px] lg:border-r lg:border-b-0 lg:p-16">
                        {/* Glowing aesthetic background orbs */}
                        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/[0.02] blur-[120px]" />
                        <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-white/[0.02] blur-[120px]" />

                        {/* Soft spotlight behind the device */}
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.045)_0%,_transparent_65%)]" />

                        {/* Top Category Label */}
                        <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-extrabold tracking-[0.35em] text-white/40 uppercase select-none">
                          {project.category}
                        </div>

                        {isMobile ? (
                          /* Realistic iPhone Mockup Wrapper */
                          <Link
                            href={`/projects/${project.slug}`}
                            className="group/laptop relative z-10 mx-auto block w-[230px] transition-transform duration-500 hover:-translate-y-2 sm:w-[250px]"
                          >
                            {/* Top Ribbon Tooltip */}
                            <div className="pointer-events-none absolute top-1 left-1/2 z-0 flex -translate-x-1/2 justify-center opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover/laptop:-translate-y-full group-hover/laptop:opacity-100">
                              <div className="flex items-center gap-2 rounded-t-xl border-x border-t border-white/10 bg-neutral-900 px-5 py-2 text-[10px] font-bold tracking-widest whitespace-nowrap text-white uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
                                <span>{project.name}</span>
                                <ArrowUpRight className="h-3 w-3" />
                              </div>
                            </div>

                            {/* iPhone Mockup */}
                            <div className="relative z-10 aspect-[9/19] w-full rounded-[2.8rem] bg-gradient-to-b from-[#e5e5e5] via-[#fdfdfd] to-[#888888] p-[3px] shadow-2xl ring-1 ring-black/20">
                              {/* Black Bezel */}
                              <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-black p-[6px] md:p-[8px]">
                                {/* Dynamic Island */}
                                <div className="absolute top-3 left-1/2 z-20 flex h-[20px] w-[35%] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2">
                                  <div className="h-2.5 w-2.5 rounded-full border border-[#222] bg-[#111]" />
                                </div>

                                {/* Screen Content */}
                                <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-neutral-900">
                                  <Image
                                    src={project.featuredImage}
                                    alt={project.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 30vw"
                                    priority
                                  />
                                </div>
                              </div>

                              {/* Physical Buttons */}
                              <div className="absolute top-[90px] -left-[3px] h-[26px] w-[3px] rounded-l-[2px] bg-[#a3a3a3]" />
                              <div className="absolute top-[130px] -left-[3px] h-[45px] w-[3px] rounded-l-[2px] bg-[#a3a3a3]" />
                              <div className="absolute top-[185px] -left-[3px] h-[45px] w-[3px] rounded-l-[2px] bg-[#a3a3a3]" />
                              <div className="absolute top-[140px] -right-[3px] h-[60px] w-[3px] rounded-r-[2px] bg-[#a3a3a3]" />
                            </div>
                          </Link>
                        ) : (
                          /* Realistic MacBook Mockup Wrapper */
                          <Link
                            href={`/projects/${project.slug}`}
                            className="group/laptop relative z-10 block w-full max-w-[480px] transition-transform duration-500 hover:-translate-y-2 sm:max-w-[500px]"
                          >
                            {/* Top Ribbon Tooltip */}
                            <div className="pointer-events-none absolute top-1 left-1/2 z-0 flex -translate-x-1/2 justify-center opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover/laptop:-translate-y-full group-hover/laptop:opacity-100">
                              <div className="flex items-center gap-2 rounded-t-xl border-x border-t border-white/10 bg-neutral-900 px-6 py-2.5 text-[11px] font-bold tracking-widest whitespace-nowrap text-white uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
                                <span>{project.name}</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </div>
                            </div>

                            {/* MacBook Mockup container */}
                            <div className="relative z-10 mx-auto w-full shadow-2xl">
                              {/* MacBook Screen / Lid */}
                              <div className="relative w-full rounded-t-[14px] rounded-b-[4px] bg-gradient-to-b from-[#e5e5e5] to-[#b5b5b5] p-[2px] ring-1 ring-black/10">
                                <div className="relative flex aspect-[16/10] w-full flex-col overflow-hidden rounded-t-[12px] rounded-b-[2px] bg-black p-[6px] shadow-inner md:p-[8px]">
                                  {/* Notch */}
                                  <div className="absolute top-0 left-1/2 z-30 flex h-[12px] w-[18%] -translate-x-1/2 items-center justify-center rounded-b-[6px] bg-black md:h-[14px]">
                                    <div className="h-1.5 w-1.5 rounded-full border border-[#222] bg-[#111]" />
                                  </div>

                                  {/* Screen Content */}
                                  <div className="relative h-full w-full overflow-hidden rounded-[2px] bg-neutral-900">
                                    <Image
                                      src={project.featuredImage}
                                      alt={project.name}
                                      fill
                                      className="object-cover object-top"
                                      sizes="(max-width: 1024px) 100vw, 55vw"
                                      priority
                                    />
                                  </div>

                                  {/* MacBook Pro text */}
                                  <div className="z-20 mt-1 -mb-1 flex h-[12px] w-full items-center justify-center md:h-[16px]">
                                    <span className="text-[6px] font-semibold tracking-[0.3em] text-[#444] uppercase md:text-[7px]">
                                      MacBook Pro
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* MacBook Base */}
                              <div className="relative -ml-[7%] flex h-3 w-[114%] items-start justify-center rounded-t-[1px] rounded-b-2xl border-b-[2px] border-[#666666] bg-gradient-to-b from-[#e0e0e0] to-[#999999] shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:h-4">
                                {/* Trackpad Indentation */}
                                <div className="h-1 w-[18%] rounded-b-[4px] bg-[#c2c2c2] shadow-inner md:h-1.5" />
                              </div>
                            </div>
                          </Link>
                        )}

                        {/* Bottom Label */}
                        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-extrabold tracking-[0.35em] whitespace-nowrap text-white/40 uppercase select-none">
                          {project.clientType || project.industry}
                        </div>
                      </div>

                      {/*  RIGHT: Project Content  */}
                      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                        {/* Header */}
                        <div>
                          <div className="mb-2 text-[11px] font-bold tracking-[0.15em] text-foreground/60 uppercase">
                            {project.industry}
                          </div>
                          <h3 className="mb-4 text-2xl leading-[1.1] font-extrabold tracking-tight text-foreground sm:text-3xl">
                            {project.name}
                          </h3>
                          <p className="mb-6 text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {project.shortDescription}
                          </p>

                          {/* Key Features (first 4) */}
                          <div className="mb-6 flex flex-col gap-2">
                            {project.features.slice(0, 4).map((f) => (
                              <div
                                key={f.title}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70" />
                                <span className="text-[13px] leading-snug font-medium text-neutral-800 dark:text-neutral-200">
                                  {f.title}
                                </span>
                              </div>
                            ))}
                            <div className="mt-1 pl-6 text-[12px] text-neutral-500 dark:text-neutral-400">
                              + {project.features.length - 4} more features
                            </div>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="mb-6 flex flex-wrap gap-1.5">
                            {project.techStack.map((t) => (
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
                          {project.results.map((r) => (
                            <div
                              key={r.metric}
                              className="flex flex-col gap-0.5"
                            >
                              <span className="text-xl font-extrabold tracking-tight text-foreground">
                                {r.value}
                              </span>
                              <span className="text-[10px] font-medium tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                                {r.metric}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-[13px] font-semibold text-background transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-foreground/10"
                          >
                            View Full Case Study
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
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
              )
            })}
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
