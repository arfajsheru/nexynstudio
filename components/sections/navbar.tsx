"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_ITEMS, NAV_CTA, SITE_CONFIG } from "@/lib/constants"
import { useActiveSection, useMediaQuery } from "@/hooks/use-interactions"
import { cn } from "@/lib/utils"

const SECTION_IDS = ["home", ...NAV_ITEMS.map((item) => item.href.split("#")[1]).filter(Boolean)] as string[]

const SCROLL_THRESHOLD = 20

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const isMobileMenuVisible = isMobileOpen && !isDesktop

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuVisible ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuVisible])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileOpen(false)
    
    // Smooth scroll for hash links on the home page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      const hash = href.split("#")[1]
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
        window.history.pushState(null, "", href)
      }
    }
    // Let Next.js Link handle cross-page navigation normally
  }, [pathname])

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
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="group relative z-10 flex items-center gap-2"
            aria-label={`${SITE_CONFIG.name} - Home`}
          >
            <div className="relative flex h-7 items-center sm:h-30">
              <img
                src="/logo-black.png"
                alt="Nexyn Studios Logo"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] dark:invert"
              />
            </div>
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────────── */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href === "/" ? "home" : item.href.split("#")[1] || ""
              const isHomePage = pathname === "/"
              
              let isActive = false
              if (isHomePage) {
                if (item.href === "/") {
                  isActive = activeSection === "home" || !activeSection
                } else if (item.href.startsWith("/#")) {
                  isActive = activeSection === sectionId
                }
              } else {
                if (item.href !== "/" && !item.href.startsWith("/#")) {
                  isActive = pathname.startsWith(item.href)
                }
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
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
                </Link>
              )
            })}
          </div>

          {/* ── Desktop Right Actions ─────────────────────────────── */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* CTA Button */}
            <Link
              href={NAV_CTA.href}
              onClick={(e) => handleNavClick(e, NAV_CTA.href)}
              className="group inline-flex h-9 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              {NAV_CTA.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* ── Mobile Menu Button ─────────────────────────────────── */}
          <div className="flex items-center gap-2 lg:hidden">
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
        {isMobileMenuVisible && (
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
                    const sectionId = item.href === "/" ? "home" : item.href.split("#")[1] || ""
                    const isHomePage = pathname === "/"
                    
                    let isActive = false
                    if (isHomePage) {
                      if (item.href === "/") {
                        isActive = activeSection === "home" || !activeSection
                      } else if (item.href.startsWith("/#")) {
                        isActive = activeSection === sectionId
                      }
                    } else {
                      if (item.href !== "/" && !item.href.startsWith("/#")) {
                        isActive = pathname.startsWith(item.href)
                      }
                    }

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 block",
                          isActive
                            ? "bg-muted/60 text-foreground"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <motion.span
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.2 }}
                          className="block"
                        >
                          {item.label}
                        </motion.span>
                      </Link>
                    )
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="mt-4 border-t border-border pt-4"
                >
                  <Link
                    href={NAV_CTA.href}
                    onClick={(e) => handleNavClick(e, NAV_CTA.href)}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  >
                    {NAV_CTA.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
