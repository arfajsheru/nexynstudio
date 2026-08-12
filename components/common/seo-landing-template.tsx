"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Navbar, FooterSection, CTASection, ContactSection } from "@/components/sections";
import { PageHero } from "@/components/common/page-hero";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";
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

  // Dynamic JSON-LD schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://nexynstudios.com/services/${data.slug}`,
        "url": `https://nexynstudios.com/services/${data.slug}`,
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
              "item": "https://nexynstudios.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": data.h1,
              "item": `https://nexynstudios.com/services/${data.slug}`
            }
          ]
        }
      },
      {
        "@type": "Service",
        "name": data.h1,
        "description": data.description,
        "serviceType": data.h1,
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
      ...(data.faqs && data.faqs.length > 0
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
        {/* ── Page Hero ── */}
        <PageHero
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: data.h1 }
          ]}
          badge={data.badge}
          headline={data.h1.split(" ").slice(0, -2).join(" ") || data.h1}
          headlineAccent={data.h1.split(" ").slice(-2).join(" ")}
          description={data.description}
          primaryCta={{ label: "Start a Project", href: "/contact" }}
          secondaryCta={{ label: "Explore Capabilities", href: "#overview" }}
        />

        {/* ── Dedicated Service Visual Image Container ── */}
        {data.heroImage && (
          <section className="relative pb-16 lg:pb-24 pt-4">
            <div className={cn("mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-foreground/[0.02] p-2 sm:p-4 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted/20">
                  <Image
                    src={data.heroImage}
                    alt={data.heroImageAlt || data.h1}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Overview & Core Capabilities ── */}
        <section id="overview" className="py-16 lg:py-24 border-t border-border/20">
          <div className={cn("mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24", LAYOUT.maxWidth, LAYOUT.paddingX)}>
            {/* Left Side: Overview text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-foreground/80" />
                Service Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.2] mb-6">
                {data.overviewTitle}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {data.overviewContent}
              </p>
            </div>

            {/* Right Side: Capabilities Card List */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-foreground/[0.015] border border-border/50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xs font-mono uppercase tracking-widest text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-foreground/80" />
                Core Capabilities
              </h3>
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

        {/* ── What We Offer / Feature Cards ── */}
        {data.whatWeOffer && data.whatWeOffer.length > 0 && (
          <section className="py-16 lg:py-24 border-t border-border/20 bg-foreground/[0.01]">
            <div className={cn("mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <div className="text-center mb-16">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3 block">
                  {data.whatWeOfferTitle || "What We Offer"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
                  Engineered Solutions & Feature Offerings
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.whatWeOffer.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col p-6 sm:p-8 rounded-2xl border border-border/40 bg-background/80 hover:border-foreground/30 hover:shadow-xl transition-all"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground/80 font-bold">
                        0{index + 1}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.05]">
                        <Zap className="h-4 w-4 text-foreground/80" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Technologies Used ── */}
        {data.technologies && data.technologies.length > 0 && (
          <section className="py-12 border-t border-y border-border/20 bg-background">
            <div className={cn("mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground shrink-0">Technologies & Stack:</span>
              <div className="flex flex-wrap gap-2.5 justify-center md:justify-end">
                {data.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-border/60 bg-foreground/[0.02] text-foreground/90 hover:border-foreground/40 transition-colors"
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
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">Methodology & Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
                {data.processTitle}
              </h2>
              <div className="flex flex-col gap-8 border-l border-border/40 pl-6 ml-2">
                {data.process.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground border-2 border-background" />
                    <h4 className="text-base font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Column */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3">Business Outcomes</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">
                {data.benefitsTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex flex-col gap-2 p-5 rounded-2xl border border-border/30 bg-foreground/[0.01] hover:border-border/60 transition-colors">
                    <h4 className="text-sm font-bold text-foreground">{benefit.title}</h4>
                    <p className="text-[12px] text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-16 lg:py-24 border-b border-border/20">
            <div className={cn("mx-auto w-full max-w-3xl", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <div className="text-center mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-3 block">Service FAQs</span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground leading-[1.2]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {data.faqs.map((faq, index) => {
                  const isOpen = openFAQIndex === index;
                  return (
                    <div
                      key={index}
                      className={cn(
                        "rounded-xl border transition-all duration-300 overflow-hidden",
                        isOpen ? "bg-foreground/[0.02] border-foreground/30 shadow-sm" : "border-border/30 bg-background"
                      )}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex w-full items-center justify-between text-left p-5"
                      >
                        <span className="text-[14px] font-medium text-foreground pr-6">
                          {faq.question}
                        </span>
                        <div className={cn(
                          "flex shrink-0 items-center justify-center h-6 w-6 rounded-full transition-colors",
                          isOpen ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                        )}>
                          {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
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
                            <p className="px-5 pb-5 text-[13px] leading-relaxed text-muted-foreground border-t border-border/10 pt-3">
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
        {data.internalLinks && data.internalLinks.length > 0 && (
          <section className="py-12 border-b border-border/20 bg-foreground/[0.01]">
            <div className={cn("mx-auto w-full text-center", LAYOUT.maxWidth, LAYOUT.paddingX)}>
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4 block">Related Services & Capabilities</span>
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
