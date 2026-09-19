import { Metadata } from "next";
import { Suspense } from "react";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { BlogClient } from "./blog-client";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/data/blog-posts";
import { BLOG_HUB_FAQS } from "@/lib/data/blog-faqs";

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "Software Development Insights & Guides | Nexyn Studios Blog",
  },
  description:
    "Explore in-depth software development guides, architecture breakdowns, pricing benchmarks, and engineering insights from the team at Nexyn Studios.",
  keywords: [
    "software development blog",
    "custom software development guides",
    "web development insights",
    "mobile app development cost",
    "custom CRM architecture",
    "SaaS development cost",
    "Next.js vs React enterprise",
    "DevOps CI CD guide",
    "Nexyn Studios engineering",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/blog`,
    siteName: SITE_CONFIG.name,
    title: "Software Development Insights & Guides | Nexyn Studios Blog",
    description:
      "Explore in-depth software development guides, architecture breakdowns, pricing benchmarks, and engineering insights from the team at Nexyn Studios.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Nexyn Studios Software Development Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Insights & Guides | Nexyn Studios Blog",
    description:
      "Explore in-depth software development guides, architecture breakdowns, pricing benchmarks, and engineering insights from the team at Nexyn Studios.",
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

// ─── Schema.org Structured Data ──────────────────────────────────────────────

const blogCollectionSchema = {
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
    },
    {
      "@type": "CollectionPage",
      "@id": "https://nexynstudios.com/blog#webpage",
      "url": "https://nexynstudios.com/blog",
      "name": "Software Development Insights & Guides | Nexyn Studios Blog",
      "description":
        "Explore in-depth software development guides, architecture breakdowns, pricing benchmarks, and engineering insights from the team at Nexyn Studios.",
      "isPartOf": {
        "@id": "https://nexynstudios.com/#website",
      },
      "about": {
        "@id": "https://nexynstudios.com/#organization",
      },
      "breadcrumb": {
        "@id": "https://nexynstudios.com/blog#breadcrumb",
      },
      "mainEntity": {
        "@id": "https://nexynstudios.com/blog#itemlist",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://nexynstudios.com/blog#breadcrumb",
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
          "name": "Blog",
          "item": "https://nexynstudios.com/blog",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://nexynstudios.com/blog#itemlist",
      "numberOfItems": BLOG_POSTS.length,
      "itemListElement": BLOG_POSTS.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": post.title,
        "url": `${SITE_CONFIG.url}/blog/${post.slug}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://nexynstudios.com/blog#faq",
      "mainEntity": BLOG_HUB_FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
  ],
};

// ─── Blog Page Component ─────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <>
      {/* JSON-LD Collection & FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
      />
      <Navbar />
      <main className="bg-background pt-24">
        <Suspense fallback={<div className="min-h-screen" />}>
          <BlogClient />
        </Suspense>
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}
