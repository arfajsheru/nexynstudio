"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_ITEMS, NAV_CTA, SITE_CONFIG } from "@/lib/constants";
import { useActiveSection, useMediaQuery } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace("#", ""));

const SCROLL_THRESHOLD = 20;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop) setIsMobileOpen(false);
  }, [isDesktop]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setIsMobileOpen(false);
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/60 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-xl dark:bg-background/50 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* ── Logo ──────────────────────────────────────────────── */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="group relative z-10 flex items-center gap-2"
            aria-label={`${SITE_CONFIG.name} - Home`}
          >
            <div className="relative flex h-7 items-center sm:h-30">
              <img 
                src="/logo-black.png" 
                alt="Nexyn Studios Logo" 
                className="h-full w-auto object-contain dark:invert transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </a>

          {/* ── Desktop Nav ───────────────────────────────────────── */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -z-10 rounded-lg bg-muted/60 dark:bg-muted/40"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* ── Desktop Right Actions ─────────────────────────────── */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={resolvedTheme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </button>

            {/* CTA Button */}
            <a
              href={NAV_CTA.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(NAV_CTA.href);
              }}
              className="group inline-flex h-9 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              {NAV_CTA.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* ── Mobile Menu Button ─────────────────────────────────── */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              {mounted &&
                (resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                ))}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMobileOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Overlay ───────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute top-16 right-0 left-0 border-b border-border bg-background/95 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto max-w-7xl px-6 py-6">
                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, i) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                        className={cn(
                          "rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                          isActive
                            ? "bg-muted/60 text-foreground"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="mt-4 border-t border-border pt-4"
                >
                  <a
                    href={NAV_CTA.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(NAV_CTA.href);
                    }}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  >
                    {NAV_CTA.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
