"use client";

import { ReactNode } from "react";
import { Sparkles, Lightbulb, AlertTriangle, HelpCircle, Terminal, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export type CalloutType = "takeaway" | "tip" | "important" | "example" | "cost" | "developer";

interface BlogCalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const CALLOUT_CONFIG: Record<
  CalloutType,
  { icon: typeof Sparkles; label: string; containerStyle: string; iconStyle: string }
> = {
  takeaway: {
    icon: Sparkles,
    label: "Key Takeaway",
    containerStyle: "border-indigo-500/20 bg-indigo-500/[0.04] text-foreground dark:border-indigo-500/30 dark:bg-indigo-500/[0.08]",
    iconStyle: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10",
  },
  tip: {
    icon: Lightbulb,
    label: "Nexyn Studios Pro Tip",
    containerStyle: "border-amber-500/20 bg-amber-500/[0.04] text-foreground dark:border-amber-500/30 dark:bg-amber-500/[0.08]",
    iconStyle: "text-amber-600 dark:text-amber-400 bg-amber-500/10",
  },
  important: {
    icon: AlertTriangle,
    label: "Important Warning",
    containerStyle: "border-rose-500/20 bg-rose-500/[0.04] text-foreground dark:border-rose-500/30 dark:bg-rose-500/[0.08]",
    iconStyle: "text-rose-600 dark:text-rose-400 bg-rose-500/10",
  },
  example: {
    icon: HelpCircle,
    label: "Real-World Example",
    containerStyle: "border-emerald-500/20 bg-emerald-500/[0.04] text-foreground dark:border-emerald-500/30 dark:bg-emerald-500/[0.08]",
    iconStyle: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
  },
  cost: {
    icon: TrendingUp,
    label: "Cost & ROI Insight",
    containerStyle: "border-cyan-500/20 bg-cyan-500/[0.04] text-foreground dark:border-cyan-500/30 dark:bg-cyan-500/[0.08]",
    iconStyle: "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10",
  },
  developer: {
    icon: Terminal,
    label: "Developer Architecture Note",
    containerStyle: "border-purple-500/20 bg-purple-500/[0.04] text-foreground dark:border-purple-500/30 dark:bg-purple-500/[0.08]",
    iconStyle: "text-purple-600 dark:text-purple-400 bg-purple-500/10",
  },
};

export function BlogCallout({ type = "tip", title, children, className }: BlogCalloutProps) {
  const config = CALLOUT_CONFIG[type];
  const IconComponent = config.icon;

  return (
    <div
      className={cn(
        "my-8 overflow-hidden rounded-2xl border p-5 sm:p-6 shadow-sm backdrop-blur-sm transition-all duration-200",
        config.containerStyle,
        className
      )}
    >
      <div className="flex items-start gap-3.5">
        <div className={cn("mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl", config.iconStyle)}>
          <IconComponent className="h-4 w-4" />
        </div>
        <div className="flex-1 text-sm leading-relaxed">
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
            {title || config.label}
          </div>
          <div className="text-muted-foreground font-normal space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
