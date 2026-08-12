"use client";

import Link from "next/link";
import { ArrowRight, Building2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogAuthorProps {
  className?: string;
}

export function BlogAuthor({ className }: BlogAuthorProps) {
  return (
    <div className={cn("my-12 overflow-hidden rounded-2xl border border-border/40 bg-foreground/[0.015] p-6 sm:p-8 backdrop-blur-sm", className)}>
      <div className="flex flex-col sm:flex-row items-start gap-5">
        {/* Avatar badge */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-foreground text-background font-bold text-lg shadow-md">
          NS
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="mb-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Written By
          </div>
          <h4 className="mb-2 text-lg font-bold text-foreground">
            Nexyn Studios Engineering & Product Team
          </h4>
          <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Nexyn Studios is a premier custom software engineering agency in Mumbai, India. We architect high-performance web applications, cross-platform mobile apps, custom CRMs, and scalable enterprise automation systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-foreground">
            <Link
              href="/about"
              className="inline-flex items-center gap-1 hover:underline underline-offset-4"
            >
              <span>About Nexyn Studios</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1 hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
            >
              <span>View Case Studies</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
