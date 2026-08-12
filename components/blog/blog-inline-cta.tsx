"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { cn } from "@/lib/utils";

interface BlogInlineCTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  category?: string;
  className?: string;
}

export function BlogInlineCTA({
  title = "Planning to Build Something Similar?",
  description = "Tell us about your project requirements. Nexyn Studios builds high-performance custom software, CRMs, and scalable web applications engineered for business growth.",
  primaryLabel = "Schedule Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
  category,
  className,
}: BlogInlineCTAProps) {
  return (
    <div
      className={cn(
        "my-12 relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-background via-muted/20 to-background/90 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl dark:border-border/30 dark:from-card/60 dark:to-background",
        className
      )}
    >
      {/* Top Hairline accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      {/* Subtle radial background lighting */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-start text-left">
        {/* Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400">
          <Sparkles className="h-3 w-3 text-indigo-500" />
          <span>{category ? `Nexyn Studios — ${category}` : "Build With Nexyn Studios"}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <MagneticWrapper range={40} strength={0.3}>
            <Link
              href={primaryHref}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-6 text-xs font-semibold text-background shadow-lg transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
            >
              <span>{primaryLabel}</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </MagneticWrapper>

          {secondaryLabel && secondaryHref && (
            <MagneticWrapper range={40} strength={0.3}>
              <Link
                href={secondaryHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background/80 px-6 text-xs font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:bg-muted active:scale-[0.98]"
              >
                <span>{secondaryLabel}</span>
              </Link>
            </MagneticWrapper>
          )}
        </div>
      </div>
    </div>
  );
}
