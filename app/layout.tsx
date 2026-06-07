import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    // Core Services
    "software development company",
    "custom software development",
    "web app development",
    "mobile app development",
    "UI/UX design agency",
    "cloud architecture",
    "DevOps services",
    "digital marketing agency",
    "IT consulting",
    
    // Tech & Stacks
    "Next.js developers",
    "React.js agency",
    "Node.js backend",
    "cloud deployment",
    "AWS infrastructure",
    
    // Business Needs
    "CRM software development",
    "ERP systems",
    "business automation software",
    "SaaS MVP development",
    "startup tech partner",
    "enterprise software solutions",
    "legacy system modernization",
    "scalable web applications",
    
    // Brand
    "Nexyn Studios",
    "Nexyn",
    "Nexyn technology partner"
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", geist.variable, inter.variable)}
    >
      <body className="min-h-svh font-sans">
        <ThemeProvider>{children}</ThemeProvider>
        {/* ── JSON-LD Structured Data ──────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": SITE_CONFIG.name,
              "image": SITE_CONFIG.url + SITE_CONFIG.ogImage,
              "url": SITE_CONFIG.url,
              "telephone": "+91 XXXXX XXXXX",
              "email": "hello@nexynstudios.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Malad, Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.1828", 
                "longitude": "72.8402"
              },
              "sameAs": [
                "https://linkedin.com/company/nexynstudios",
                "https://twitter.com/nexynstudios"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
