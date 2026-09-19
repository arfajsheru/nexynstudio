import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Navbar,
  ContactSection,
  FooterSection,
} from "@/components/sections";
import { PageHero } from "@/components/common/page-hero";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ArrowRight,
  ChevronDown,
  Code2,
  Globe,
  Smartphone,
  Server,
  Layers,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "Contact Nexyn Studios — Software Development Consultation & Inquiries",
  },
  description:
    "Contact Nexyn Studios to discuss your custom software, web platform, or mobile app project. Connect with our engineering team in Mumbai for a technical consultation.",
  keywords: [
    "contact Nexyn Studios",
    "software development consultation Mumbai",
    "hire software developers Mumbai",
    "custom software project inquiry",
    "software engineering consultation",
    "Nexyn Studios office Malad West",
    "software development company Mumbai contact",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    title: "Contact Nexyn Studios — Software Development Consultation & Inquiries",
    description:
      "Discuss your software goals, technical requirements, and system architecture directly with the Nexyn Studios engineering team in Mumbai.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Contact Nexyn Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nexyn Studios — Software Development Consultation & Inquiries",
    description:
      "Discuss your software goals, technical requirements, and system architecture directly with the Nexyn Studios engineering team in Mumbai.",
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── Schema.org JSON-LD Graph ────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    question: "How does Nexyn Studios handle initial project inquiries?",
    answer:
      "When you submit an inquiry or reach out via phone or email, our senior engineering team reviews your technical requirements, system scope, and business objectives. We then arrange a technical scoping consultation to clarify specifications and outline a preliminary architectural roadmap.",
  },
  {
    question: "What information should I prepare before reaching out?",
    answer:
      "Having a high-level summary of your business challenges, target user personas, required core features, target platforms (web, mobile, or cloud infrastructure), and any existing systems or APIs you need to integrate helps us provide precise scoping recommendations.",
  },
  {
    question: "Where is Nexyn Studios located and can we meet in person?",
    answer:
      "Our office is located at 102, A wing, Nehal CHS, Last Mahada, Malwani, Malad West, Mumbai 400095. We welcome in-person meetings by prior appointment, and also collaborate seamlessly via virtual consultations for national and international clients.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs) before discussing project details?",
    answer:
      "Yes. We prioritize client confidentiality and data security. We routinely sign standard bilateral NDAs before discussing proprietary workflows, architecture diagrams, or intellectual property.",
  },
  {
    question: "What is your typical project delivery methodology?",
    answer:
      "We operate in focused agile sprint cycles with transparent milestone deliverables. Clients receive regular sprint demos, access to staging environments, and direct communication channels with the engineering team throughout development.",
  },
];

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nexynstudios.com/#website",
      "url": "https://nexynstudios.com",
      "name": "Nexyn Studios",
      "publisher": {
        "@id": "https://nexynstudios.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://nexynstudios.com/#organization",
      "name": "Nexyn Studios",
      "url": "https://nexynstudios.com",
      "logo": "https://nexynstudios.com/brand/logo.png",
      "email": "nexynstudios@gmail.com",
      "telephone": "+91-85910-13795",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "102, A wing, Nehal CHS, Last Mahada, Malwani",
        "addressLocality": "Malad West, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400095",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://linkedin.com/company/nexynstudios",
        "https://github.com/nexynstudios",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nexynstudios.com/#localbusiness",
      "name": "Nexyn Studios",
      "url": "https://nexynstudios.com",
      "telephone": "+91-85910-13795",
      "email": "nexynstudios@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "102, A wing, Nehal CHS, Last Mahada, Malwani",
        "addressLocality": "Malad West, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400095",
        "addressCountry": "IN",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          "opens": "09:00",
          "closes": "19:00",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://nexynstudios.com/contact#webpage",
      "url": "https://nexynstudios.com/contact",
      "name": "Contact Nexyn Studios — Software Development Consultation & Inquiries",
      "description":
        "Contact Nexyn Studios to discuss your custom software, web platform, or mobile app project. Connect with our engineering team in Mumbai for a technical consultation.",
      "isPartOf": {
        "@id": "https://nexynstudios.com/#website",
      },
      "about": {
        "@id": "https://nexynstudios.com/#organization",
      },
      "breadcrumb": {
        "@id": "https://nexynstudios.com/contact#breadcrumb",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://nexynstudios.com/contact#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nexynstudios.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://nexynstudios.com/contact",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://nexynstudios.com/contact#faq",
      "mainEntity": FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    },
  ],
};

// ─── Direct Contact Methods ──────────────────────────────────────────────────

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "nexynstudios@gmail.com",
    href: "mailto:nexynstudios@gmail.com",
    desc: "Project briefs & technical specs",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 85910 13795",
    href: "https://wa.me/918591013795",
    desc: "Direct messaging & quick queries",
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: "+91 85910 13795",
    href: "tel:+918591013795",
    desc: "Mon–Sat: 9:00 AM – 7:00 PM IST",
  },
  {
    icon: MapPin,
    label: "Mumbai Studio",
    value: "Malad West, Mumbai",
    href: "https://maps.google.com/?q=Nehal+CHS,Malwani,Malad+West,Mumbai+400095",
    desc: "102, A wing, Nehal CHS",
  },
];

function ContactInfoStrip() {
  return (
    <section className="border-t border-border/30 bg-foreground/[0.01] py-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-start gap-4 rounded-2xl border border-border/40 bg-background/40 p-5 transition-all duration-300 hover:border-foreground/20 hover:bg-background/80 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-foreground/[0.03] transition-all duration-300 group-hover:bg-foreground/[0.07]">
                  <Icon className="h-4 w-4 text-foreground/60 transition-colors duration-300 group-hover:text-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {method.label}
                  </div>
                  <div className="mt-0.5 truncate text-[13px] font-semibold text-foreground">
                    {method.value}
                  </div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">
                    {method.desc}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Engagement Process ──────────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Submit your initial project scope, key challenges, and desired deliverables through our inquiry form or direct communication channels.",
  },
  {
    step: "02",
    title: "Technical Scoping",
    desc: "Our engineering leads assess architectural complexity, database models, integration requirements, and security prerequisites.",
  },
  {
    step: "03",
    title: "Architecture & Proposal",
    desc: "We present a comprehensive technical roadmap outlining milestone timelines, tech stack recommendations, and transparent commercial terms.",
  },
  {
    step: "04",
    title: "Agile Engineering",
    desc: "Upon alignment, development launches with bi-weekly sprint demos, staging environment access, and direct team collaboration.",
  },
];

function EngagementStepsSection() {
  return (
    <section className="border-t border-border/30 py-16 lg:py-24 bg-background">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Clear & Collaborative
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            How Our Project Engagement Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
            From initial scoping to production launch, we maintain complete transparency
            and direct technical collaboration every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col rounded-2xl border border-border/40 bg-background/40 p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-background/80"
            >
              <div className="text-[28px] font-mono font-bold tracking-tight text-foreground/20 mb-3">
                {item.step}
              </div>
              <h3 className="text-[16px] font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What We Build Section ───────────────────────────────────────────────────

const SERVICE_CAPABILITIES = [
  {
    icon: Code2,
    title: "Custom Software & CRMs",
    desc: "Bespoke operational workflows, custom CRM platforms, and internal business engines designed to replace fragmented tools.",
    links: [
      { label: "Custom Development", href: "/services/custom-development" },
      { label: "Custom CRM Solutions", href: "/solutions/custom-crm-development" },
    ],
  },
  {
    icon: Globe,
    title: "Web Platforms & Cloud Apps",
    desc: "High-performance web applications built with Next.js, TypeScript, and modern headless architectures engineered for speed.",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "View Portfolio Proof", href: "/portfolio" },
    ],
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    desc: "Fluid iOS and Android mobile applications crafted with Flutter or React Native, backed by resilient cloud APIs.",
    links: [
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
    ],
  },
  {
    icon: Server,
    title: "Cloud Infrastructure & AI",
    desc: "Containerized deployments, automated CI/CD pipelines, secure cloud infrastructure, and intelligent AI automations.",
    links: [
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "AI & Automation", href: "/services/ai-automation" },
    ],
  },
];

function WhatWeBuildSection() {
  return (
    <section className="border-t border-border/30 py-16 lg:py-24 bg-foreground/[0.01]">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Engineering Scope
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            What We Can Help You Engineer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
            Explore our specialized development disciplines to find the right architectural
            fit for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="flex flex-col justify-between rounded-2xl border border-border/40 bg-background/40 p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-background/80"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-foreground/[0.03] text-foreground/70 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground mb-6">
                    {cap.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-border/30">
                  {cap.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground hover:underline"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="border-t border-border/30 py-16 lg:py-24 bg-background">
      <div className="mx-auto w-full max-w-[900px] px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Common Inquiries
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground">
            Clear answers regarding our consultation process, project scoping, NDAs, and delivery methodology.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-border/50 bg-background/40 p-5 transition-colors hover:border-foreground/20 open:bg-background/80"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-[14px] sm:text-[15px] text-foreground [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 ml-4" />
              </summary>
              <div className="mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-muted-foreground border-t border-border/20 pt-3">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Page Component ──────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <Navbar />

      <main>
        {/* Page Hero - Single H1 */}
        <PageHero
          breadcrumbs={[{ label: "Contact" }]}
          renderBreadcrumbSchema={false}
          badge="Get In Touch"
          headline="Contact Nexyn Studios"
          headlineAccent="Start Your Project"
          description="Discuss your software goals, technical requirements, and business challenges directly with our engineering team. We review your specifications and provide a tailored architectural roadmap."
        />

        {/* Quick contact methods strip */}
        <ContactInfoStrip />

        {/* Full contact form + Interactive Map */}
        <ContactSection />

        {/* Project Engagement Process */}
        <EngagementStepsSection />

        {/* Service Capabilities with Internal Links */}
        <WhatWeBuildSection />

        {/* FAQs matching JSON-LD Schema */}
        <FaqSection />

        {/* Bottom Internal Cross-Links */}
        <section className="border-t border-border/30 py-8 bg-foreground/[0.01]">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-4 px-4 text-center md:px-6">
            <span className="text-[13px] text-muted-foreground">Explore more:</span>
            <Link
              href="/services"
              className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Our Services →
            </Link>
            <Link
              href="/portfolio"
              className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
            >
              View Portfolio →
            </Link>
            <Link
              href="/about"
              className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
            >
              About Us →
            </Link>
            <Link
              href="/faq"
              className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Complete FAQ Knowledgebase →
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
