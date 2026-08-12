"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Check, Copy } from "lucide-react";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { LAYOUT, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface BlogHeroProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export function BlogHero({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  slug,
}: BlogHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareUrl = `${SITE_CONFIG.url}/blog/${slug}`;

  return (
    <header className="relative w-full pt-20 lg:pt-28 pb-10 overflow-hidden bg-background">
      {/* Background Subtle Lighting */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px] opacity-40 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        {/* Navigation Row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border/30 pb-4">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Articles</span>
          </Link>
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: category, href: `/blog?category=${encodeURIComponent(category)}` },
            ]}
          />
        </div>

        {/* Header Main Grid */}
        <div className="mx-auto max-w-4xl flex flex-col items-start text-left">
          {/* Category Pill Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-foreground/[0.03] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
            {category}
          </div>

          {/* Large Title */}
          <h1 className="mb-6 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[52px]">
            {title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            {excerpt}
          </p>

          {/* Meta Bar & Share Options */}
          <div className="w-full flex flex-wrap items-center justify-between gap-6 border-y border-border/40 py-4 mb-10 text-xs text-muted-foreground">
            {/* Meta Details */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 font-medium text-foreground/90">
                <div className="h-7 w-7 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold text-[10px]">
                  NS
                </div>
                <span>Nexyn Studios Engineering</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/30 hidden sm:inline-block" />
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground/70" />
                <span>{date}</span>
              </div>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-muted-foreground/70" />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Share Links */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/60 mr-1 hidden sm:inline">
                Share:
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border/60 bg-background p-2 text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all duration-200"
                aria-label="Share on LinkedIn"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border/60 bg-background p-2 text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all duration-200"
                aria-label="Share on Twitter"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background px-2.5 py-1.5 text-xs text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all duration-200"
                aria-label="Copy link"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Featured Visual Image Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-muted/30 via-background to-muted/20 shadow-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 900px"
              priority
            />
            {/* Subtle Gradient Frame Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </header>
  );
}
