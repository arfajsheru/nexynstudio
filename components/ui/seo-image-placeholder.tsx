"use client";

import { ImageIcon, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SEOImagePlaceholderProps {
  /** Recommended image width in pixels */
  width: number;
  /** Recommended image height in pixels */
  height: number;
  /** Aspect ratio string like "16:9", "4:3", "21:9" */
  aspectRatio?: string;
  /** Title or description of the image content */
  title: string;
  /** Suggested description / SEO alt text for search engine optimization */
  seoAlt: string;
  /** Category or context tag (e.g., "Hero Banner", "Feature Preview", "Team Photo") */
  category?: string;
  /** High quality image URL (Unsplash or local asset) */
  imageUrl?: string;
  /** Optional extra Tailwind class names */
  className?: string;
}

export function SEOImagePlaceholder({
  width,
  height,
  aspectRatio = "16:9",
  title,
  seoAlt,
  category = "SEO Image",
  imageUrl,
  className,
}: SEOImagePlaceholderProps) {
  if (imageUrl) {
    return (
      <div
        className={cn(
          "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border/50 bg-background shadow-xl transition-all duration-500 hover:border-foreground/30 hover:shadow-2xl",
          className
        )}
        style={{
          minHeight: Math.min(height, 420),
        }}
      >
        {/* Real High-Quality Image */}
        <img
          src={imageUrl}
          alt={seoAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            <ImageIcon className="h-3.5 w-3.5 text-emerald-400" />
            {category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[11px] font-mono font-bold text-white/90 backdrop-blur-md">
            <Maximize2 className="h-3 w-3" />
            {width} × {height} px
          </span>
        </div>

        {/* Bottom Content / Info Overlay */}
        <div className="relative z-10 p-6 sm:p-8">
          <h4 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            {title}
          </h4>
          <p className="mt-1 text-[12px] text-muted-foreground line-clamp-1">
            <span className="font-semibold text-foreground/80">Alt:</span> &quot;{seoAlt}&quot;
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-border/60 bg-foreground/[0.02] p-6 text-center transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/[0.04]",
        className
      )}
      style={{
        minHeight: Math.min(height, 360),
      }}
    >
      {/* Blueprint grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Top Tag Badges */}
      <div className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground shadow-sm backdrop-blur-md">
          <ImageIcon className="h-3.5 w-3.5 text-foreground/70" />
          {category}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-[11px] font-mono font-bold text-foreground">
          <Maximize2 className="h-3 w-3" />
          {width} × {height} px ({aspectRatio})
        </span>
      </div>

      {/* Title & Description */}
      <div className="relative z-10 max-w-md">
        <h4 className="text-base font-bold text-foreground sm:text-lg">
          {title}
        </h4>
        <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground/70">SEO Alt Tag:</span> &quot;{seoAlt}&quot;
        </p>
      </div>

      {/* Upload Hint */}
      <div className="relative z-10 mt-5 rounded-lg border border-border/40 bg-background/60 px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground/70 shadow-2xl backdrop-blur-sm">
        Replace this placeholder box with a custom image ({width}x{height}px)
      </div>
    </div>
  );
}
