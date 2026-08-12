import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/data/blog-posts";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { LAYOUT, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
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
  const nextPost = BLOG_POSTS[(postIndex + 1) % BLOG_POSTS.length];

  // Compile JSON-LD BlogPosting Schema dynamically
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.metaDescription,
    "image": `${SITE_CONFIG.url}${post.image}`,
    "datePublished": "2026-08-11", // Standard publishing date relative to implementation
    "author": {
      "@type": "Organization",
      "name": "Nexyn Studios",
      "url": "https://nexynstudios.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nexyn Studios",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/favicon.png`
      }
    }
  };

  return (
    <>
      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <Navbar />

      <main className="bg-background pt-24 lg:pt-32 pb-16 relative overflow-hidden">
        {/* Subtle top background glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[450px] bg-gradient-to-b from-foreground/[0.02] to-transparent" />

        {/* Back and Breadcrumbs Navigation */}
        <div className={cn("mx-auto w-full mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Blog
          </Link>
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.category }]} />
        </div>

        {/* Article Container */}
        <article className={cn("mx-auto w-full max-w-4xl", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          {/* Header */}
          <header className="mb-8 text-center sm:text-left">
            <span className="inline-block rounded-full bg-foreground/[0.05] px-3.5 py-1 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-muted-foreground/75">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/40 bg-muted/10 mb-10 shadow-md">
            <div className="absolute inset-0 bg-neutral-950/10 flex items-center justify-center text-muted-foreground/40 font-semibold select-none">
              {post.title}
            </div>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Content & Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Rich Text Body */}
            <div className="lg:col-span-8">
              <div
                className="space-y-6 text-[15px] leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar with related paths */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 flex flex-col gap-6 bg-foreground/[0.02] border border-border/40 p-6 rounded-2xl">
                <h3 className="text-xs font-mono uppercase tracking-widest text-foreground">Related Topics</h3>
                <div className="flex flex-col gap-2.5">
                  {post.internalLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="inline-flex items-center justify-between p-3 rounded-xl border border-border/50 bg-background text-[13px] font-semibold text-foreground/80 hover:border-foreground/20 hover:text-foreground transition-all duration-200 group"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Next Post Navigation strip */}
        <div className={cn("mx-auto w-full border-t border-border/40 mt-16 pt-8", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <Link href={`/blog/${nextPost.slug}`} className="group block">
            <div className="flex items-center justify-between py-6 rounded-xl border border-border/30 bg-foreground/[0.01] px-6 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.02]">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Up Next</span>
                <span className="text-sm font-bold text-foreground truncate group-hover:text-foreground/80 transition-colors">
                  {nextPost.title}
                </span>
              </div>
              <div className="h-8 w-8 shrink-0 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>

        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
