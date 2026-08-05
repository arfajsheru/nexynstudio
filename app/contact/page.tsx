import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Navbar,
  ContactSection,
  FooterSection,
} from "@/components/sections";
import { PageHero } from "@/components/common/page-hero";
import { SEOImagePlaceholder } from "@/components/ui/seo-image-placeholder";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Contact Nexyn Studios — Get a Free Software Consultation in Mumbai",
  description:
    "Get in touch with Nexyn Studios for a free consultation on custom software development, CRM systems, web apps, or mobile development. Based in Malad, Mumbai. Response within 24 hours.",
  keywords: [
    "contact Nexyn Studios",
    "free software consultation Mumbai",
    "hire software developer Mumbai",
    "custom software quote Mumbai",
    "CRM development inquiry",
    "web app development contact",
    "mobile app development Mumbai",
    "software company contact Malad",
    "get project estimate Mumbai",
    "Nexyn Studios phone email",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    title: "Contact Nexyn Studios — Free Consultation",
    description:
      "Ready to build? Reach out to Nexyn Studios in Mumbai for a free consultation. We respond within 24 hours.",
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
    title: "Contact Nexyn Studios — Free Software Consultation Mumbai",
    description:
      "Reach out to Nexyn Studios for a free software consultation. Based in Mumbai, responding within 24 hours.",
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

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Nexyn Studios",
  description:
    "Contact page for Nexyn Studios — a custom software development company in Mumbai, India.",
  url: `${SITE_CONFIG.url}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: "+91-85910-13795",
    email: "nexynstudios@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "102, A wing, Nehal CHS, Last Mahada, Malwani",
      addressLocality: "Malad West, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400095",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
  },
};

// ─── Quick Contact Methods Strip ──────────────────────────────────────────────

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "nexynstudios@gmail.com",
    href: "mailto:nexynstudios@gmail.com",
    desc: "For project briefs & proposals",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 85910 13795",
    href: "https://wa.me/918591013795",
    desc: "Fastest response",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 85910 13795",
    href: "tel:+918591013795",
    desc: "Mon–Sat, 9AM–7PM IST",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Malad West, Mumbai",
    href: "https://maps.google.com/?q=Malwani,Malad+West,Mumbai",
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

// ─── Contact Page ─────────────────────────────────────────────────────────────

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
        {/* Page Hero */}
        <PageHero
          breadcrumbs={[{ label: "Contact" }]}
          badge="Let's Talk"
          headline="Start Your"
          headlineAccent="Project Today"
          description="Tell us about your business challenges and we'll show you exactly how custom software can solve them — with a free consultation and transparent project estimate."
        />

        {/* Quick contact methods */}
        <ContactInfoStrip />

        {/* Headquarters & Consultation Room Showcase Placeholder */}
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 md:px-6">
          <SEOImagePlaceholder
            width={1200}
            height={400}
            aspectRatio="3:1"
            category="Office & Consultation Workspace"
            title="Nexyn Studios Consultation Room & Client Meeting Space Photo"
            seoAlt="Nexyn Studios Software Consulting Office in Malad West Mumbai India"
            className="w-full shadow-md"
          />
        </div>

        {/* Full contact form + Google Map */}
        <ContactSection />

        {/* Bottom internal links */}
        <section className="border-t border-border/30 py-8">
          <div className="mx-auto flex flex-col items-center gap-3 px-4 text-center sm:flex-row sm:justify-center md:px-6">
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
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
