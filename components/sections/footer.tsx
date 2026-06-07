"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, LAYOUT, NAV_CTA } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = {
  Services: [
    { label: "Custom Software", href: "/#services" },
    { label: "Web Applications", href: "/#services" },
    { label: "Mobile Apps", href: "/#services" },
    { label: "CRM Systems", href: "/#services" },
    { label: "Business Automation", href: "/#services" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Our Process", href: "/#process" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Technology", href: "/#tech-stack" },
    { label: "Careers", href: "/#careers" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const SOCIALS: { label: string; href: string }[] = [
  // { label: "LinkedIn", href: "#" },
  // { label: "GitHub", href: "#" },
  // { label: "X / Twitter", href: "#" },
];

export function FooterSection() {
  const { ref, isInView } = useInView(0.05);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/40 bg-foreground/[0.02]">
      <div
        className={cn(
          "relative z-10 mx-auto w-full",
          LAYOUT.maxWidth,
          LAYOUT.paddingX,
        )}
      >
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {/* ── Main Footer Grid ─────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
            {/* Brand Column */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-4"
            >
              <div className="mb-4 text-xl font-bold tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </div>
              <p className="mb-6 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                {SITE_CONFIG.description}
              </p>

              {/* Socials */}
              <div className="flex items-center gap-4">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-[12px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <motion.div
                key={category}
                variants={fadeUp}
                className="lg:col-span-2 lg:col-start-auto"
              >
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
                  {category}
                </div>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Column */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
                Get In Touch
              </div>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:hello@nexynstudios.com"
                    className="text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    hello@nexynstudios.com
                  </a>
                </li>
                <li>
                  <a
                    href={NAV_CTA.href}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 text-[12px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-foreground/5"
                  >
                    {NAV_CTA.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* ── Bottom Bar ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-between gap-4 border-t border-border/40 py-6 sm:flex-row"
          >
            <p className="text-[11px] text-muted-foreground/60">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-[11px] text-muted-foreground/60 transition-colors duration-200 hover:text-muted-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[11px] text-muted-foreground/60 transition-colors duration-200 hover:text-muted-foreground"
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy#cookies"
                className="text-[11px] text-muted-foreground/60 transition-colors duration-200 hover:text-muted-foreground"
              >
                Cookies
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
