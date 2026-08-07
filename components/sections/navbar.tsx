"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Home, Briefcase, FolderGit2, Info, Mail, Layers, Globe, Smartphone, Sparkles, BookOpen, FileText, HelpCircle, LifeBuoy } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_ITEMS, NAV_CTA, SITE_CONFIG } from "@/lib/constants"
import { useActiveSection, useMediaQuery } from "@/hooks/use-interactions"
import { cn } from "@/lib/utils"

const SECTION_IDS = ["home", "portfolio", ...NAV_ITEMS.map((item) => item.href.split("#")[1]).filter(Boolean)] as string[]

const SCROLL_THRESHOLD = 20

const navIcons = {
  Home: Home,
  Services: Briefcase,
  Portfolio: FolderGit2,
  Resources: BookOpen,
  About: Info,
  Contact: Mail,
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const SERVICES_DROPDOWN = [
  {
    label: "Custom Software",
    desc: "Bespoke CRM, ERP, and internal systems",
    href: "/services?service=software",
    icon: Layers,
  },
  {
    label: "Web Applications",
    desc: "High-performance Next.js & React platforms",
    href: "/services?service=web",
    icon: Globe,
  },
  {
    label: "Mobile Apps",
    desc: "React Native iOS & Android cross-platform apps",
    href: "/services?service=mobile",
    icon: Smartphone,
  },
  {
    label: "CRM Systems",
    desc: "Automated sales pipelines & operational hubs",
    href: "/services?service=software",
    icon: Briefcase,
  },
  {
    label: "Business Automation",
    desc: "Workflow triggers & system integrations",
    href: "/services?service=software",
    icon: Sparkles,
  },
];

const RESOURCES_DROPDOWN = [
  {
    label: "Blog",
    desc: "Engineering insights, design & automation guidelines",
    href: "/blog",
    icon: BookOpen,
  },
  {
    label: "Case Studies",
    desc: "Detailed project architectures we delivered",
    href: "/case-studies",
    icon: FileText,
  },
  {
    label: "FAQ",
    desc: "Frequently asked questions on process & pricing",
    href: "/faq",
    icon: HelpCircle,
  },
  {
    label: "Support",
    desc: "Customer onboarding protocols & maintenance",
    href: "/support",
    icon: LifeBuoy,
  },
];

const PORTFOLIO_DROPDOWN = [
  {
    label: "United Welfare Foundation",
    desc: "Scholarship CRM & portal system",
    href: "/projects/united-welfare-foundation",
    icon: Layers,
  },
  {
    label: "Nexyn Chat Web",
    desc: "Real-time web messaging platform",
    href: "/projects/nexyn-chat-web",
    icon: Globe,
  },
  {
    label: "Nexyn Chat Mobile",
    desc: "React Native iOS & Android chat app",
    href: "/projects/nexyn-chat-mobile",
    icon: Smartphone,
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const [isMobilePortfolioOpen, setIsMobilePortfolioOpen] = useState(false)
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
            <div className="relative flex h-20 items-center sm:h-30 lg:h-30">
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
                } else if (item.label === "Portfolio") {
                  isActive = activeSection === "portfolio"
                }
              } else {
                if (item.href !== "/" && !item.href.startsWith("/#")) {
                  isActive = pathname.startsWith(item.href)
                }
              }

              if (item.label === "Services") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <svg
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200 opacity-60",
                          isServicesOpen && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 top-full z-50 mt-1 w-[380px] -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl"
                        >
                          <div className="grid gap-1">
                            {SERVICES_DROPDOWN.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={(e) => {
                                    setIsServicesOpen(false);
                                    handleNavClick(e, sub.href);
                                  }}
                                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/50"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.04] transition-colors group-hover:bg-foreground/[0.08]">
                                    <SubIcon className="h-4.5 w-4.5 text-foreground/75" />
                                  </div>
                                  <div className="min-w-0 text-left">
                                    <div className="text-xs font-semibold text-foreground flex items-center gap-1">
                                      {sub.label}
                                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                    </div>
                                    <div className="mt-0.5 text-[10.5px] leading-relaxed text-muted-foreground">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.label === "Resources") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <svg
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200 opacity-60",
                          isResourcesOpen && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    <AnimatePresence>
                      {isResourcesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 top-full z-50 mt-1 w-[380px] -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl"
                        >
                          <div className="grid gap-1">
                            {RESOURCES_DROPDOWN.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={(e) => {
                                    setIsResourcesOpen(false);
                                    handleNavClick(e, sub.href);
                                  }}
                                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/50"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.04] transition-colors group-hover:bg-foreground/[0.08]">
                                    <SubIcon className="h-4.5 w-4.5 text-foreground/75" />
                                  </div>
                                  <div className="min-w-0 text-left">
                                    <div className="text-xs font-semibold text-foreground flex items-center gap-1">
                                      {sub.label}
                                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                    </div>
                                    <div className="mt-0.5 text-[10.5px] leading-relaxed text-muted-foreground">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.label === "Portfolio") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setIsPortfolioOpen(true)}
                    onMouseLeave={() => setIsPortfolioOpen(false)}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <svg
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200 opacity-60",
                          isPortfolioOpen && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    <AnimatePresence>
                      {isPortfolioOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 top-full z-50 mt-1 w-[380px] -translate-x-1/2 rounded-2xl border border-border bg-background/95 p-3 shadow-2xl backdrop-blur-xl"
                        >
                          <div className="grid gap-1">
                            {PORTFOLIO_DROPDOWN.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={(e) => {
                                    setIsPortfolioOpen(false);
                                    handleNavClick(e, sub.href);
                                  }}
                                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/50"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.04] transition-colors group-hover:bg-foreground/[0.08]">
                                    <SubIcon className="h-4.5 w-4.5 text-foreground/75" />
                                  </div>
                                  <div className="min-w-0 text-left">
                                    <div className="text-xs font-semibold text-foreground flex items-center gap-1">
                                      {sub.label}
                                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                    </div>
                                    <div className="mt-0.5 text-[10.5px] leading-relaxed text-muted-foreground">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
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
              );
            })}
          </div>

          {/* ── Desktop Right Actions ─────────────────────────────── */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* CTA Button */}
            <Link
              href={NAV_CTA.href}
              target="_blank"
              onClick={(e) => {
                if (NAV_CTA.href.startsWith("http")) return
                handleNavClick(e, NAV_CTA.href)
              }}
              className="group inline-flex h-9 items-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {NAV_CTA.label}
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
              className="absolute top-16 right-0 left-0 border-b border-border bg-background/95 backdrop-blur-xl max-h-[calc(100vh-4rem)] overflow-y-auto pb-8 scrollbar-hide"
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
                      } else if (item.label === "Portfolio") {
                        isActive = activeSection === "portfolio"
                      }
                    } else {
                      if (item.href !== "/" && !item.href.startsWith("/#")) {
                        isActive = pathname.startsWith(item.href)
                      }
                    }

                    const IconComponent = navIcons[item.label as keyof typeof navIcons] || Info

                    if (item.label === "Services") {
                      return (
                        <div key={item.label} className="flex flex-col">
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className={cn(
                              "w-full rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-200 flex items-center justify-between",
                              isActive
                                ? "bg-foreground/5 text-foreground"
                                : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="h-4.5 w-4.5 text-foreground/50 shrink-0" />
                              <span>{item.label}</span>
                            </div>
                            <svg
                              className={cn(
                                "h-4 w-4 transition-transform duration-200 text-muted-foreground",
                                isMobileServicesOpen && "rotate-180"
                              )}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-7 flex flex-col gap-1 mt-1 border-l border-border/60 ml-6"
                              >
                                {SERVICES_DROPDOWN.map((sub) => {
                                  const SubIcon = sub.icon;
                                  return (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={(e) => {
                                        setIsMobileOpen(false);
                                        handleNavClick(e, sub.href);
                                      }}
                                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all text-left"
                                    >
                                      <SubIcon className="h-3.5 w-3.5 text-foreground/40" />
                                      {sub.label}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    if (item.label === "Resources") {
                      return (
                        <div key={item.label} className="flex flex-col">
                          <button
                            onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                            className={cn(
                              "w-full rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-200 flex items-center justify-between",
                              isActive
                                ? "bg-foreground/5 text-foreground"
                                : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="h-4.5 w-4.5 text-foreground/50 shrink-0" />
                              <span>{item.label}</span>
                            </div>
                            <svg
                              className={cn(
                                "h-4 w-4 transition-transform duration-200 text-muted-foreground",
                                isMobileResourcesOpen && "rotate-180"
                              )}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {isMobileResourcesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-7 flex flex-col gap-1 mt-1 border-l border-border/60 ml-6"
                              >
                                {RESOURCES_DROPDOWN.map((sub) => {
                                  const SubIcon = sub.icon;
                                  return (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={(e) => {
                                        setIsMobileOpen(false);
                                        handleNavClick(e, sub.href);
                                      }}
                                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all text-left"
                                    >
                                      <SubIcon className="h-3.5 w-3.5 text-foreground/40" />
                                      {sub.label}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    if (item.label === "Portfolio") {
                      return (
                        <div key={item.label} className="flex flex-col">
                          <button
                            onClick={() => setIsMobilePortfolioOpen(!isMobilePortfolioOpen)}
                            className={cn(
                              "w-full rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-200 flex items-center justify-between",
                              isActive
                                ? "bg-foreground/5 text-foreground"
                                : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="h-4.5 w-4.5 text-foreground/50 shrink-0" />
                              <span>{item.label}</span>
                            </div>
                            <svg
                              className={cn(
                                "h-4 w-4 transition-transform duration-200 text-muted-foreground",
                                isMobilePortfolioOpen && "rotate-180"
                              )}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {isMobilePortfolioOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-7 flex flex-col gap-1 mt-1 border-l border-border/60 ml-6"
                              >
                                {PORTFOLIO_DROPDOWN.map((sub) => {
                                  const SubIcon = sub.icon;
                                  return (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={(e) => {
                                        setIsMobileOpen(false);
                                        handleNavClick(e, sub.href);
                                      }}
                                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12.5px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-all text-left"
                                    >
                                      <SubIcon className="h-3.5 w-3.5 text-foreground/40" />
                                      {sub.label}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-200 flex items-center gap-3",
                          isActive
                            ? "bg-foreground/5 text-foreground border border-foreground/5"
                            : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <IconComponent className="h-4.5 w-4.5 text-foreground/50 shrink-0" />
                        <motion.span
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.2 }}
                          className="block"
                        >
                          {item.label}
                        </motion.span>
                      </Link>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="mt-6 flex justify-center border-t border-border pt-5"
                >
                  <Link
                    href={NAV_CTA.href}
                    target="_blank"
                    onClick={(e) => {
                      if (NAV_CTA.href.startsWith("http")) return
                      handleNavClick(e, NAV_CTA.href)
                    }}
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-xs font-bold text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-md shadow-foreground/5 border border-foreground/10"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {NAV_CTA.label}
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
