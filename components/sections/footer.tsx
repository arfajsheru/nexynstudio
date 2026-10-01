"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SITE_CONFIG, LAYOUT, NAV_CTA } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = {
  Services: [
    { label: "Custom Software", href: "/services/custom-development" },
    { label: "Web Applications", href: "/services/web-development" },
    { label: "Mobile Apps", href: "/services/mobile-app-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "AI & Automation", href: "/services/ai-automation" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  ],
  Solutions: [
    { label: "Custom CRM Systems", href: "/solutions/custom-crm-development" },
    { label: "SaaS Products", href: "/solutions/saas-product-development" },
    { label: "Business Automation", href: "/solutions/business-automation" },
    { label: "Custom Web Apps", href: "/solutions/custom-web-applications" },
    { label: "E-Commerce Systems", href: "/solutions/ecommerce-solutions" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Engineering Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const SOCIALS: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://linkedin.com/company/nexynstudios" },
  { label: "X / Twitter", href: "https://twitter.com/nexynstudios" },
  { label: "Instagram", href: "https://instagram.com/nexynstudios" },
  { label: "Facebook", href: "https://facebook.com/nexynstudios" },
  { label: "GitHub", href: "https://github.com/nexynstudios" },
];

export function FooterSection() {
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {/* ── Main Footer Grid ─────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
            {/* Brand Column */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <div className="mb-4 text-xl font-bold tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </div>
              <p className="mb-6 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                {SITE_CONFIG.description}
              </p>

              {/* Socials with high-contrast accessibility & tap size */}
              <div className="flex flex-wrap items-center gap-2.5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={`Visit Nexyn Studios on ${social.label}`}
                    className="inline-flex min-h-[44px] items-center rounded-lg border border-border/60 bg-background/50 px-3.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
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
                className="lg:col-span-2"
              >
                <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
                  {category}
                </div>
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex min-h-[44px] items-center gap-1.5 py-2 text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact & Semantic Address Column (NAP) */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
                Office &amp; Contact
              </div>
              <address className="not-italic flex flex-col gap-4 text-[13px] text-muted-foreground">
                <div>
                  <div className="font-semibold text-foreground">Nexyn Studios HQ</div>
                  <a
                    href="https://maps.google.com/?q=Nexyn+Studios+102+A+Wing+Nehal+CHS+Last+Mahada+Malwani+Malad+West+Mumbai+400095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1 inline-flex items-start gap-1 text-xs leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="View Nexyn Studios HQ location on Google Maps"
                  >
                    <span>102, A Wing, Nehal CHS, Last Mahada, Malwani, Malad West, Mumbai 400095, Maharashtra, India</span>
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70 group-hover:opacity-100" />
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-1 border-t border-border/20">
                  <a
                    href="tel:+918591013795"
                    className="inline-flex min-h-[44px] items-center gap-2.5 py-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-foreground/70" />
                    <span>+91 85910 13795</span>
                  </a>
                  <a
                    href="mailto:nexynstudios@gmail.com"
                    className="inline-flex min-h-[44px] items-center gap-2.5 py-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    aria-label="Send email to Nexyn Studios"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-foreground/70" />
                    <span>Send Email (nexynstudios@gmail.com)</span>
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href={NAV_CTA.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border/60 bg-background px-5 py-2.5 text-[13px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/30 hover:bg-foreground/5"
                  >
                    {NAV_CTA.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </address>
            </motion.div>
          </div>

          {/* ── Regional Presence & Location Links ─────────────────── */}
          <div className="border-t border-border/30 pt-6 pb-4 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-semibold text-foreground/80">Regional Presence:</span>
              <Link href="/locations/mumbai" className="inline-flex min-h-[44px] items-center px-2 py-2 hover:text-foreground transition-colors">Mumbai (HQ)</Link>
              <span className="text-border">•</span>
              <Link href="/locations/thane" className="inline-flex min-h-[44px] items-center px-2 py-2 hover:text-foreground transition-colors">Thane</Link>
              <span className="text-border">•</span>
              <Link href="/locations/navi-mumbai" className="inline-flex min-h-[44px] items-center px-2 py-2 hover:text-foreground transition-colors">Navi Mumbai</Link>
            </div>
            <div className="text-[11px] text-muted-foreground/70">
              Serving Clients Across India &amp; Worldwide
            </div>
          </div>

          {/* ── Bottom Bar ────────────────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-between gap-4 border-t border-border/40 py-6 sm:flex-row"
          >
            <p className="text-[11px] text-muted-foreground/60">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/privacy-policy"
                className="inline-flex min-h-[44px] items-center px-2 py-2 text-[12px] text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex min-h-[44px] items-center px-2 py-2 text-[12px] text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="/privacy-policy#cookies"
                className="inline-flex min-h-[44px] items-center px-2 py-2 text-[12px] text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
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
