import { Metadata } from "next";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { BlogClient } from "./blog-client";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on custom software development, UI/UX design, business automation, and modern technology — by the Nexyn Studios engineering team.",
  openGraph: {
    title: `Blog | ${SITE_CONFIG.name}`,
    description:
      "Insights on custom software development, UI/UX design, business automation, and modern technology.",
    url: `${SITE_CONFIG.url}/blog`,
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Nexyn Studios Blog",
    "description": "Insights on custom software development, UI/UX design, business automation, and modern technology — by the Nexyn Studios engineering team.",
    "url": `${SITE_CONFIG.url}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/logo-black.png`
      }
    },
    "blogPost": BLOG_POSTS.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": "2026-08-11", // Standard publishing date relative to implementation
      "url": `${SITE_CONFIG.url}/blog/${post.slug}`,
      "author": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    }))
  };

  return (
    <>
      {/* JSON-LD Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <main className="bg-background pt-24">
        <BlogClient />
      </main>
      <CTASection />
      <FooterSection />
    </>
  );
}

