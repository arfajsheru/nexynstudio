"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function BlogCodeBlock({ code, language = "typescript", filename, className }: BlogCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("my-8 overflow-hidden rounded-2xl border border-border/60 bg-neutral-950 text-neutral-100 shadow-xl dark:border-border/40 dark:bg-card dark:text-foreground", className)}>
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/80 px-4 py-3 dark:border-border/40 dark:bg-muted/40">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 dark:text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-indigo-400" />
          <span>{filename || language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-medium text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100 dark:hover:bg-muted dark:hover:text-foreground transition-all duration-150"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code content */}
      <pre className="overflow-x-auto p-4 text-xs sm:text-sm font-mono leading-relaxed text-neutral-200 dark:text-muted-foreground">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
