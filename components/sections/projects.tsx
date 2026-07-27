"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data/projects";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  // Show first 4 projects as featured on the home page
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="relative w-full bg-background py-20 lg:py-28 overflow-hidden border-t border-border/10">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] z-0" />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
            <motion.div variants={fadeUp} className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Case <span className="font-serif italic text-foreground/60">Studies</span>
              </h2>
              <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-muted-foreground">
                Explore how we have engineered custom systems and applications that delivered tangible business results.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="shrink-0">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background hover:bg-foreground hover:text-background px-6 py-3 text-sm font-semibold transition-all duration-300 shadow-sm"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* ── Projects Grid/List ───────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project) => {
              return (
                <motion.div
                  key={project.slug}
                  variants={fadeUp}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 sm:p-8 hover:border-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                  style={{
                    ["--project-accent" as any]: project.accentColor,
                  }}
                >
                  {/* Subtle hover background glow */}
                  <div
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 120%, ${project.accentColor}0a, transparent 70%)`,
                    }}
                  />

                  <div>
                    {/* Image Area */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/40 bg-muted mb-6 sm:mb-8">
                      <img
                        src={project.featuredImage}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground border border-border/60">
                        {project.category}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <span className="font-semibold" style={{ color: project.accentColor }}>{project.industry}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                      <span>{project.clientType}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-3">
                      {project.name}
                    </h3>

                    {/* Short description */}
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6 line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Results / Metrics */}
                    {project.results && project.results.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 border-t border-border/20 pt-5 mb-8">
                        {project.results.slice(0, 3).map((res, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground" style={{ color: project.accentColor }}>
                              {res.value}
                            </span>
                            <span className="text-[10px] leading-tight text-muted-foreground font-medium uppercase tracking-wider mt-0.5">
                              {res.metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions & Tech Stack */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-border/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="rounded-md bg-muted/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground border border-border/30">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                      style={{ color: project.accentColor }}
                    >
                      <span>Explore Case</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
