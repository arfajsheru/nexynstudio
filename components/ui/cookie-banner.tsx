"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cookie, X, ChevronRight, Check } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "nexyn_cookie_consent_v1";

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      // Small timeout for smooth initial load after page render
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(savedConsent);
        if (parsed.analytics || parsed.status === "all") {
          updateGtagConsent(true, parsed.marketing || parsed.status === "all");
        }
      } catch {
        setIsOpen(true);
      }
    }
  }, []);

  const updateGtagConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: analytics ? "granted" : "denied",
        ad_storage: marketing ? "granted" : "denied",
        ad_user_data: marketing ? "granted" : "denied",
        ad_personalization: marketing ? "granted" : "denied",
      });

      // Send event to record engagement click in GA4 immediately
      window.gtag("event", "cookie_consent_update", {
        analytics_granted: analytics,
        marketing_granted: marketing,
        event_category: "Engagement",
      });
    }
  };

  const handleAcceptAll = () => {
    const consentData = { status: "all", analytics: true, marketing: true, timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    updateGtagConsent(true, true);
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    const consentData = { status: "essential", analytics: false, marketing: false, timestamp: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    updateGtagConsent(false, false);
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      status: "custom",
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    updateGtagConsent(preferences.analytics, preferences.marketing);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg sm:bottom-6 sm:left-6 sm:right-auto"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-5 shadow-2xl backdrop-blur-2xl dark:border-border/60 dark:bg-card/95 sm:p-6">
            {/* Header / Title */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                  <Cookie className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Cookie &amp; Privacy Preferences
                  </h3>
                  <span className="text-[11px] font-medium text-emerald-500 flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> GDPR &amp; GA4 Compliant
                  </span>
                </div>
              </div>
              <button
                onClick={handleRejectAll}
                className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              We use cookies to personalize your experience, analyze site performance, and improve our services. Read our{" "}
              <Link href="/privacy-policy" className="font-medium text-foreground underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>

            {/* Granular Preference Details Toggle */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-2 border-t border-border/40 pt-3 text-xs"
              >
                <div className="flex items-center justify-between rounded-lg bg-muted/40 p-2.5">
                  <div>
                    <span className="font-medium text-foreground block">Strictly Necessary</span>
                    <span className="text-[10px] text-muted-foreground">Required for essential site functions.</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase text-emerald-500">Always Active</span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted/20 p-2.5">
                  <div>
                    <span className="font-medium text-foreground block">Analytics &amp; Performance</span>
                    <span className="text-[10px] text-muted-foreground">Helps us measure traffic and user interactions.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences((p) => ({ ...p, analytics: e.target.checked }))}
                    className="h-4 w-4 rounded border-border accent-foreground"
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-muted/20 p-2.5">
                  <div>
                    <span className="font-medium text-foreground block">Marketing &amp; Targeting</span>
                    <span className="text-[10px] text-muted-foreground">Used to deliver relevant campaign updates.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences((p) => ({ ...p, marketing: e.target.checked }))}
                    className="h-4 w-4 rounded border-border accent-foreground"
                  />
                </div>
              </motion.div>
            )}

            {/* Actions Row */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border/40 pt-4">
              <button
                type="button"
                onClick={() => setShowDetails((prev) => !prev)}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {showDetails ? "Hide Preferences" : "Customize"}
                <ChevronRight className={`h-3 w-3 transition-transform ${showDetails ? "rotate-90" : ""}`} />
              </button>

              <div className="flex flex-row items-center gap-2">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-all active:scale-[0.97]"
                >
                  Reject All
                </button>

                {showDetails ? (
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background hover:opacity-90 transition-all active:scale-[0.97]"
                  >
                    <Check className="h-3 w-3" /> Save Selection
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background shadow-md hover:opacity-90 transition-all active:scale-[0.97]"
                  >
                    Accept All
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
