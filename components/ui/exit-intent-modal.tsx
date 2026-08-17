"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight, CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState("");

  useEffect(() => {
    // Only fire on desktop and once per session
    const hasShown = sessionStorage.getItem("nexyn_exit_modal_shown");
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setIsOpen(true);
        sessionStorage.setItem("nexyn_exit_modal_shown", "true");

        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "exit_intent_trigger", {
            event_category: "Engagement",
          });
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.trim()) return;

    setSubmitted(true);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "exit_intent_submit", {
        event_category: "Conversion",
      });
    }

    setTimeout(() => {
      setIsOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-border/80 bg-background p-6 shadow-2xl dark:border-border/60 dark:bg-card sm:p-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-500">
              <Sparkles className="h-3 w-3" />
              Before You Go
            </div>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Thinking About a Custom Software Project?
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Drop your email or WhatsApp number below. Our lead engineer will review your requirements and send a straight-to-the-point project scope &amp; cost breakdown — no pushy sales calls.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-500/10 p-4 text-emerald-500"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0" />
                <span className="text-sm font-medium">
                  Thanks! Our technical team will reach out shortly.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="text"
                    required
                    placeholder="Enter email or WhatsApp number"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    className="flex-1 rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-md transition-all hover:opacity-90 active:scale-[0.98]"
                  >
                    Get Free Audit
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  🔒 100% confidential. No spam, guaranteed.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
