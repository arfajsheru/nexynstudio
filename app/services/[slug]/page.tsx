import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICE_PAGES } from "@/lib/data/seo-data";
import { SEOLandingTemplate } from "@/components/common/seo-landing-template";
import { SITE_CONFIG } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SERVICE_PAGES[slug];

  if (!page) {
    return { title: "Service Not Found" };
  }

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `${SITE_CONFIG.url}/services/${slug}`,
      siteName: SITE_CONFIG.name,
      title: page.title,
      description: page.metaDescription,
      images: page.heroImage
        ? [
            {
              url: `${SITE_CONFIG.url}${page.heroImage}`,
              width: 1200,
              height: 630,
              alt: page.heroImageAlt || page.title,
            },
          ]
        : [SITE_CONFIG.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: page.heroImage ? [`${SITE_CONFIG.url}${page.heroImage}`] : [SITE_CONFIG.ogImage],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICE_PAGES).map((slug) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = SERVICE_PAGES[slug];

  if (!page) {
    notFound();
  }

  return <SEOLandingTemplate data={page} breadcrumbLabel="Services" />;
}
