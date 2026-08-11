"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar, FooterSection, CTASection, ContactSection } from "@/components/sections";
import { PageHero } from "@/components/common/page-hero";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PageData } from "@/lib/data/seo-data";

interface SEOLandingTemplateProps {
  data: PageData;
  breadcrumbLabel: string;
}

export function SEOLandingTemplate({ data, breadcrumbLabel }: SEOLandingTemplateProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // Compile JSON-LD schema dynamically
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://nexynstudios.com/${data.slug}`,
        "url": `https://nexynstudios.com/${data.slug}`,
        "name": data.title,
        "description": data.metaDescription,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nexynstudios.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": breadcrumbLabel,
              "item": `https://nexynstudios.com/${data.slug}`
            }
          ]
        }
      },
      {
        "@type": "Service",
        "name": data.h1,
        "description": data.description,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Nexyn Studios",
          "url": "https://nexynstudios.com",
          "telephone": "+91 85910 13795",
          "email": "nexynstudios@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Malad, Mumbai",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          }
        }
      },
      ...(data.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": data.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <Navbar />

      <main className="bg-background relative overflow-hidden">
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: breadcrumbLabel }]}
          badge={data.badge}
          headline={data.h1.split(" ").slice(0, -2).join(" ")}
          headlineAccent={data.h1.split(" ").slice(-2).join(" ")}
          description={data.description}
          primaryCta={{ label: "Get Free Consultation", href: "/contact" }}
          secondaryCta={{ label: "View Our Work", href: "/portfolio" }}
        />

        {/* ── Overview & Capabilities ── */}
        <section className="py-16 lg:py-24 border-t border-border/20">
          <div className={cn("mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24", LAYOUT.maxWidth, LAYOUT.paddingX)}>
            {/* Left Side: Overview text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">Overview</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground leading-[1.2] mb-6">
                {data.overviewTitle}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {data.overviewContent}
              </p>
            </div>

            {/* Right Side: Capabilities Card List */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-foreground/[0.02] border border-border/40 p-8 rounded-2xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-foreground mb-4">Core Capabilities</h3>
              <ul className="flex flex-col gap-4">
                {data.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span className="text-[13px] leading-relaxed text-muted-foreground">
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Technologies Used ── */}
        {data.technologies.length > 0 && (
          <section className="py-12 border-t border-y border-border/20 bg-foreground/[0.01]">
            <div className={cn("mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Technologies Used:</span>
              <div className="flex flex-wrap gap-2 justify-center">
                {data.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-border/50 bg-background text-foreground/80 hover:border-foreground/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Process Steps & Benefits ── */}
        <section className="py-16 lg:py-24 border-b border-border/20">
          <div className={cn("mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24", LAYOUT.maxWidth, LAYOUT.paddingX)}>
            {/* Process Timeline */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">Methodology</span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
                {data.processTitle}
              </h2>
              <div className="flex flex-col gap-6 border-l border-border/40 pl-6 ml-2">
                {data.process.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full bg-foreground border border-background" />
                    <h4 className="text-sm font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Column */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">Why Work With Us</span>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
                {data.benefitsTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex flex-col gap-2 p-5 rounded-xl border border-border/30 bg-background/50">
                    <h4 className="text-sm font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        {data.faqs.length > 0 && (
          <section className="py-16 lg:py-24 border-b border-border/20">
            <div className={cn("mx-auto w-full max-w-3xl", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <div className="text-center mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">FAQ</span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground leading-[1.2]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col">
                {data.faqs.map((faq, index) => {
                  const isOpen = openFAQIndex === index;
                  return (
                    <div
                      key={index}
                      className={cn(
                        "border-b border-border/30 last:border-0 transition-all duration-300",
                        isOpen ? "bg-foreground/[0.01] rounded-lg border-transparent px-4 my-2" : "py-4"
                      )}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex w-full items-center justify-between text-left py-2"
                      >
                        <span className="text-[14px] font-medium text-foreground pr-8">
                          {faq.question}
                        </span>
                        <div className={cn(
                          "flex shrink-0 items-center justify-center h-5 w-5 rounded-full transition-colors",
                          isOpen ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                        )}>
                          {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pr-8 text-[13px] leading-relaxed text-muted-foreground">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Topic Clusters (Internal Links Grid) ── */}
        {data.internalLinks.length > 0 && (
          <section className="py-12 border-b border-border/20 bg-foreground/[0.01]">
            <div className={cn("mx-auto w-full text-center", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Related Resources & Services</span>
              <div className="flex flex-wrap gap-3 justify-center">
                {data.internalLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border/50 bg-background text-xs font-semibold text-foreground hover:border-foreground/30 transition-colors shadow-sm"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Core Conversion Sections */}
        <CTASection />
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}
