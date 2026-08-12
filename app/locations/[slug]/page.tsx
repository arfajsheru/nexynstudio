import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LOCATION_PAGES } from "@/lib/data/seo-data";
import { SEOLandingTemplate } from "@/components/common/seo-landing-template";
import { SITE_CONFIG } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = LOCATION_PAGES[slug];

  if (!page) {
    return { title: "Location Not Found" };
  }

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/locations/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${SITE_CONFIG.url}/locations/${slug}`,
      siteName: SITE_CONFIG.name,
      title: page.title,
      description: page.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(LOCATION_PAGES).map((slug) => ({
    slug,
  }));
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = LOCATION_PAGES[slug];

  if (!page) {
    notFound();
  }

  return <SEOLandingTemplate data={page} breadcrumbLabel="Locations" />;
}
