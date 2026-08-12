import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data/blog-posts";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import {
  BlogHero,
  BlogProgressIndicator,
  BlogTableOfContents,
  BlogAuthor,
  RelatedArticles,
  BlogArticleDiagram,
  BlogInlineCTA,
} from "@/components/blog";
import { processArticleContent } from "@/lib/utils/blog-helpers";
import { LAYOUT, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found — Nexyn Studios" };
  }

  return {
    title: `${post.title} — Nexyn Studios Engineering`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      siteName: SITE_CONFIG.name,
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = BLOG_POSTS[postIndex];
  const { processedContent, tocItems } = processArticleContent(post.content);

  // Compile JSON-LD BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    "headline": post.title,
    "description": post.metaDescription,
    "image": `${SITE_CONFIG.url}${post.image}`,
    "datePublished": "2026-08-11",
    "author": {
      "@type": "Organization",
      "name": "Nexyn Studios",
      "url": "https://nexynstudios.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexyn Studios",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/favicon.png`,
      },
    },
  };

  return (
    <>
      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Top Scroll Reading Progress */}
      <BlogProgressIndicator />

      <Navbar />

      <main className="bg-background min-h-screen relative">
        {/* Premium Article Hero Header */}
        <BlogHero
          title={post.title}
          excerpt={post.excerpt}
          category={post.category}
          date={post.date}
          readTime={post.readTime}
          image={post.image}
          slug={post.slug}
        />

        {/* Main Content & Sticky TOC Sidebar Grid */}
        <div className={cn("mx-auto w-full pt-8 pb-20", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Article Content Column (8 Cols on Desktop) */}
            <article className="lg:col-span-8 flex flex-col">
              
              {/* Article Custom Visual Diagram Component */}
              <BlogArticleDiagram slug={post.slug} />

              {/* Rich Body Content */}
              <div
                className="prose dark:prose-invert max-w-none space-y-6 text-[15px] sm:text-base leading-relaxed text-muted-foreground
                  [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pt-4 [&_h2]:border-t [&_h2]:border-border/30
                  [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
                  [&_p]:leading-relaxed [&_p]:text-muted-foreground
                  [&_strong]:text-foreground [&_strong]:font-semibold
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-muted-foreground
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:text-muted-foreground
                  [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-semibold hover:[&_a]:text-foreground/80
                  [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:text-xs [&_table]:sm:text-sm
                  [&_th]:p-3 [&_th]:border [&_th]:border-border/40 [&_th]:bg-foreground/[0.03] [&_th]:text-foreground [&_th]:font-bold
                  [&_td]:p-3 [&_td]:border [&_td]:border-border/30
                "
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Contextual Mid-Article CTA */}
              <BlogInlineCTA category={post.category} />

              {/* Author Section */}
              <BlogAuthor />

              {/* Related Articles */}
              <RelatedArticles
                currentSlug={post.slug}
                allPosts={BLOG_POSTS}
                category={post.category}
              />
            </article>

            {/* Right Sticky Sidebar (4 Cols on Desktop) */}
            <aside className="lg:col-span-4 flex flex-col gap-8">
              {/* Sticky Table of Contents Component */}
              <BlogTableOfContents items={tocItems} />

              {/* Contextual Internal Quick-Links Widget */}
              {post.internalLinks && post.internalLinks.length > 0 && (
                <div className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-6 backdrop-blur-md">
                  <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
                    <Compass className="h-3.5 w-3.5 text-indigo-500" />
                    <span>Related Solutions</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {post.internalLinks.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="group flex items-center justify-between rounded-xl border border-border/50 bg-background p-3 text-xs font-semibold text-foreground/90 transition-all duration-200 hover:border-foreground/30 hover:bg-muted/40 hover:text-foreground"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Sidebar Quick Consultation Card */}
              <div className="rounded-2xl border border-border/40 bg-gradient-to-b from-background via-muted/20 to-background p-6 shadow-md">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="h-3 w-3 text-indigo-500" />
                  <span>Free Consultation</span>
                </div>
                <h4 className="mb-2 text-base font-bold text-foreground">
                  Need Help Architecting Your Software?
                </h4>
                <p className="mb-4 text-xs text-muted-foreground leading-relaxed">
                  Book a free technical session with our lead engineers in Mumbai to map your project requirements.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-2.5 px-4 text-xs font-semibold text-background shadow-md transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                >
                  <span>Schedule Technical Audit</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>

          </div>
        </div>

        {/* Global End-of-Article CTA */}
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
