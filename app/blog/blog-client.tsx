"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ArrowRight,
  Calendar,
  ChevronDown,
  Code2,
  Globe,
  Smartphone,
  Server,
  Database,
  Layers,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { BLOG_POSTS, type BlogPost } from "@/lib/data/blog-posts";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { BLOG_HUB_FAQS } from "@/lib/data/blog-faqs";

// ─── Blog Card Component ─────────────────────────────────────────────────────

function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  const cardContent = featured ? (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-muted/20 lg:aspect-auto lg:min-h-[360px] lg:rounded-t-none lg:rounded-l-2xl">
        <Image
          src={post.image}
          alt={`Interface diagram and overview for ${post.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-foreground/[0.06] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
            {post.category}
          </span>
          <span className="text-[10px] font-bold tracking-[0.14em] text-muted-foreground/60 uppercase">
            Featured Guide
          </span>
        </div>
        <h3 className="mb-3 text-2xl leading-snug font-bold tracking-tight text-foreground lg:text-3xl">
          {post.title}
        </h3>
        <p className="mb-6 text-[14px] leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-[12px] text-muted-foreground/60">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
        <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-foreground transition-colors group-hover:text-foreground/70">
          <span>Read Full Guide</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted/20">
        <Image
          src={post.image}
          alt={`Illustration for ${post.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-foreground/[0.06] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
            {post.category}
          </span>
        </div>
        <h3 className="mb-2 line-clamp-2 text-[17px] leading-snug font-bold tracking-tight text-foreground">
          {post.title}
        </h3>
        <p className="mb-5 line-clamp-3 text-[13px] leading-[1.6] text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
          <div className="flex items-center gap-3 text-[11px] text-muted-foreground/60">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
        </div>
      </div>
    </>
  );

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-2xl"
    >
      <motion.article
        variants={fadeUp}
        className={cn(
          "group cursor-pointer overflow-hidden rounded-2xl border border-border bg-foreground/[0.01] transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.02] hover:shadow-xl flex flex-col h-full",
          featured ? "" : "hover:-translate-y-1"
        )}
      >
        {cardContent}
      </motion.article>
    </Link>
  );
}

// ─── Topical Clusters Data ───────────────────────────────────────────────────

const TOPICAL_CLUSTERS = [
  {
    icon: Code2,
    title: "Custom Software & Architecture",
    description:
      "Enterprise sprint methodology, normalized database design, role-based access control (RBAC), and legacy platform modernization.",
    links: [
      { label: "Custom Software Services", href: "/services/custom-development" },
      { label: "Sprint Process Guide", href: "/blog/custom-software-development-guide" },
    ],
  },
  {
    icon: Globe,
    title: "Web & Mobile Engineering",
    description:
      "Next.js Server-Side Rendering (SSR), React Native mobile applications, touch-first responsive UX, and headless storefronts.",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Next.js vs React Guide", href: "/blog/nextjs-vs-react" },
    ],
  },
  {
    icon: Database,
    title: "CRM, SaaS & Business Automation",
    description:
      "Multi-tenant database isolation, custom CRM pipeline architecture, SaaS MVP budgeting, and workflow automation.",
    links: [
      { label: "Custom CRM Solutions", href: "/solutions/custom-crm-development" },
      { label: "SaaS Product Development", href: "/solutions/saas-product-development" },
      { label: "SaaS Cost Guide", href: "/blog/saas-development-cost" },
    ],
  },
  {
    icon: Server,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automated CI/CD deployment pipelines using GitHub Actions and Vercel, API-first schema design, and cloud scalability.",
    links: [
      { label: "Cloud & DevOps Solutions", href: "/services/cloud-devops" },
      { label: "Startup CI/CD Guide", href: "/blog/ci-cd-pipeline-guide-startups" },
    ],
  },
];

// ─── Main Blog Client Component ──────────────────────────────────────────────

export function BlogClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Determine unique categories
  const categories = [
    "All",
    ...Array.from(new Set(BLOG_POSTS.map((post) => post.category))),
  ];

  // Sync with URL search params if present and valid
  useEffect(() => {
    if (initialCategory && categories.includes(initialCategory)) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filter blog posts dynamically based on selected category
  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  const featuredPost =
    filteredPosts.find((post) => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(
    (post) => post.slug !== featuredPost?.slug
  );

  return (
    <div
      className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}
    >
      {/* Breadcrumb Navigation */}
      <div className="pt-4 pb-8">
        <Breadcrumb items={[{ label: "Blog" }]} renderJsonLd={false} />
      </div>

      {/* Header - Single Semantic H1 */}
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl pb-12 text-center md:pb-16"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
          Engineering & Product Insights
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          Software Development{" "}
          <span className="font-serif italic text-foreground/50">
            Insights & Guides
          </span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-[15px] leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          Practical engineering guides, architectural decisions, development cost
          benchmarks, and modern software strategies from our team in Mumbai.
        </motion.p>
      </motion.header>

      {/* Category Filter Tabs */}
      <nav
        aria-label="Filter blog posts by category"
        className="mb-12 border-b border-border/20 pb-6"
      >
        <div
          role="tablist"
          className="flex flex-wrap gap-2 justify-center"
        >
          {categories.map((category) => {
            const isSelected = activeCategory === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
                  isSelected
                    ? "bg-foreground text-background border-foreground shadow-sm scale-95"
                    : "border-border bg-background hover:border-foreground/35 text-muted-foreground"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Featured Post Section */}
      {featuredPost && activeCategory === "All" && (
        <section aria-labelledby="featured-article-heading" className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2
              id="featured-article-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Featured Technical Guide
            </h2>
            <span className="text-xs text-muted-foreground font-mono">
              Editor&apos;s Pick
            </span>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <BlogCard post={featuredPost} featured />
          </motion.div>
        </section>
      )}

      {/* Articles Grid Section */}
      <section aria-labelledby="all-articles-heading" className="mb-20">
        <div className="mb-8 flex items-center justify-between">
          <h2
            id="all-articles-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            {activeCategory === "All"
              ? "Explore Technical Articles"
              : `${activeCategory} Articles (${filteredPosts.length})`}
          </h2>
          {activeCategory !== "All" && (
            <button
              onClick={() => setActiveCategory("All")}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground underline underline-offset-4"
            >
              Show All ({BLOG_POSTS.length})
            </button>
          )}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {activeCategory !== "All" && featuredPost && (
            <BlogCard post={featuredPost} />
          )}
          {regularPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </section>

      {/* Core Engineering Disciplines (Contextual Hub Links) */}
      <section
        aria-labelledby="disciplines-heading"
        className="mb-20 rounded-3xl border border-border/40 bg-foreground/[0.015] p-8 md:p-12"
      >
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Topical Disciplines
          </div>
          <h2
            id="disciplines-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Core Engineering Disciplines
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[14px] text-muted-foreground">
            Explore articles and production services organized across our primary
            software engineering practices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TOPICAL_CLUSTERS.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <div
                key={cluster.title}
                className="flex flex-col justify-between rounded-2xl border border-border/50 bg-background/60 p-6 transition-all duration-300 hover:border-foreground/20 hover:shadow-md"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-foreground/[0.03] text-foreground/70 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[16px] font-semibold text-foreground mb-2">
                    {cluster.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-muted-foreground mb-6">
                    {cluster.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-border/30">
                  {cluster.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground hover:underline"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-3xl mb-16"
      >
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            Knowledge Base
          </div>
          <h2
            id="faq-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 text-[14px] text-muted-foreground">
            Learn more about our technical writing, pricing guides, and engineering standards.
          </p>
        </div>

        <div className="space-y-4">
          {BLOG_HUB_FAQS.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-border/50 bg-background/40 p-5 transition-colors hover:border-foreground/20 open:bg-background/80"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-[14px] sm:text-[15px] text-foreground [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 ml-4" />
              </summary>
              <div className="mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-muted-foreground border-t border-border/20 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Exploration Footer Strip */}
      <section className="border-t border-border/30 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="text-[13px] text-muted-foreground">Explore more:</span>
          <Link
            href="/services"
            className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Software Services →
          </Link>
          <Link
            href="/portfolio"
            className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Shipped Projects →
          </Link>
          <Link
            href="/about"
            className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
          >
            About Nexyn Studios →
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-semibold text-foreground underline-offset-4 hover:underline"
          >
            Schedule Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
