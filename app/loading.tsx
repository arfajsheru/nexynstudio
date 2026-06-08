"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center"
      >
        {/* Glowing Background Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-foreground/5 blur-2xl" />

        {/* Logo Icon / Spinner */}
        <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/50 bg-background/50 shadow-xl backdrop-blur-xl">
          {/* Pulsing rings */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-2xl bg-foreground/10 opacity-75" />
          
          <Loader2 className="h-6 w-6 animate-spin text-foreground/80" />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Nexyn Studios
          </h2>
          <div className="flex items-center gap-1">
            <span className="h-1 w-1 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "0ms" }} />
            <span className="h-1 w-1 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "150ms" }} />
            <span className="h-1 w-1 animate-bounce rounded-full bg-muted-foreground/60" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
