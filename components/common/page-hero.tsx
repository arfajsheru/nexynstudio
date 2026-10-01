"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Breadcrumb, type BreadcrumbItem } from "@/components/common/breadcrumb";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  headline: string;
  headlineAccent?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  renderBreadcrumbSchema?: boolean;
}

// ─── Hero Background (same aesthetic as homepage) ────────────────────────────

function PageHeroBg() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-background"
      aria-hidden="true"
    >
      {/* Fine grid radially masked */}
      <div className="absolute inset-0 bg-grid-masked" />

      {/* Top glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-[280px] w-[500px] opacity-75 dark:opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.03) 50%, transparent 75%)",
          filter: "blur(2px)",
        }}
      />

      {/* Hairline beam */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-[140px] bg-gradient-to-b from-indigo-500/25 to-transparent" />

      {/* Edge fades */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

// ─── Page Hero Component ──────────────────────────────────────────────────────

export function PageHero({
  breadcrumbs,
  badge,
  headline,
  headlineAccent,
  description,
  primaryCta,
  secondaryCta,
  className,
  renderBreadcrumbSchema,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20",
        className
      )}
    >
      <PageHeroBg />

      <div
        className={cn(
          "relative z-10 mx-auto w-full flex flex-col items-center text-center",
          LAYOUT.maxWidth,
          LAYOUT.paddingX
        )}
      >
        <motion.div
          variants={staggerContainer}
          initial="visible"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeUp} className="mb-6">
            <Breadcrumb items={breadcrumbs} renderJsonLd={renderBreadcrumbSchema} />
          </motion.div>

          {/* Badge */}
          {badge && (
            <motion.div variants={fadeUp} className="mb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                {badge}
              </div>
            </motion.div>
          )}

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-4xl text-[25px] xs:text-[28px] font-bold leading-[1.15] tracking-tight text-foreground sm:text-[48px] md:text-[58px] lg:text-[68px]"
          >
            {headline}
            {headlineAccent && (
              <>
                {" "}
                <span className="font-serif italic text-foreground/50">
                  {headlineAccent}
                </span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-full px-2"
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group inline-flex min-h-[48px] h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-xs font-semibold text-background shadow-lg shadow-foreground/5 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/10 hover:opacity-90 active:scale-[0.98] sm:px-8 sm:text-sm whitespace-nowrap"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 shrink-0" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-[48px] h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-xs font-medium text-foreground transition-all duration-300 hover:bg-muted active:scale-[0.98] sm:px-8 sm:text-sm whitespace-nowrap dark:border-input dark:bg-card/30 dark:hover:bg-card/50"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
