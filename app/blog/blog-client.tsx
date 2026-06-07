"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar, ImageIcon } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

// ── Blog Post Data ────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Engineering", "Design", "Business", "DevOps"];

const BLOG_POSTS = [
  {
    slug: "why-custom-crm-beats-off-the-shelf",
    title: "Why a Custom CRM Beats Off-the-Shelf Software Every Time",
    excerpt:
      "Off-the-shelf CRMs come with bloated features you'll never use and lack the ones you actually need. Here's why building custom is the smarter long-term investment.",
    category: "Business",
    date: "May 28, 2025",
    readTime: "7 min read",
    featured: true,
    imageWidth: 800,
    imageHeight: 450,
  },
  {
    slug: "nextjs-vs-react-spa-for-enterprise",
    title: "Next.js vs React SPA: Which Is Better for Enterprise Apps?",
    excerpt:
      "We break down the performance, SEO, and developer experience trade-offs between Next.js and traditional React SPAs for large-scale applications.",
    category: "Engineering",
    date: "May 15, 2025",
    readTime: "9 min read",
    featured: false,
    imageWidth: 600,
    imageHeight: 340,
  },
  {
    slug: "design-system-saves-development-time",
    title: "How a Design System Can Cut Your Development Time by 40%",
    excerpt:
      "A well-structured design system isn't just for designers. Here's how it accelerates development, reduces bugs, and maintains consistency across products.",
    category: "Design",
    date: "May 3, 2025",
    readTime: "6 min read",
    featured: false,
    imageWidth: 600,
    imageHeight: 340,
  },
  {
    slug: "ci-cd-pipeline-guide-startups",
    title: "Setting Up CI/CD Pipelines for Startups: A Practical Guide",
    excerpt:
      "You don't need a DevOps team to set up reliable CI/CD. We walk through our battle-tested pipeline setup using GitHub Actions and Vercel.",
    category: "DevOps",
    date: "Apr 22, 2025",
    readTime: "11 min read",
    featured: false,
    imageWidth: 600,
    imageHeight: 340,
  },
  {
    slug: "business-automation-mistakes",
    title: "5 Business Automation Mistakes That Cost Companies Lakhs",
    excerpt:
      "Automation is powerful, but only when done right. We've seen these costly mistakes repeatedly and here's how to avoid them.",
    category: "Business",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    featured: false,
    imageWidth: 600,
    imageHeight: 340,
  },
  {
    slug: "mobile-first-ux-principles",
    title: "Mobile-First UX: 8 Principles We Follow on Every Project",
    excerpt:
      "With over 70% of traffic coming from mobile, designing desktop-first is a recipe for failure. Here are the principles our design team lives by.",
    category: "Design",
    date: "Mar 28, 2025",
    readTime: "8 min read",
    featured: false,
    imageWidth: 600,
    imageHeight: 340,
  },
];

// ── Image Placeholder Component ───────────────────────────────────────────────

function ImagePlaceholder({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-muted/20 transition-colors group-hover:border-foreground/20 group-hover:bg-muted/30",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
        <ImageIcon className="h-8 w-8" />
        <span className="text-[11px] font-mono font-semibold tracking-wide">
          {width} × {height}
        </span>
      </div>
    </div>
  );
}

// ── Blog Card Component ───────────────────────────────────────────────────────

function BlogCard({
  post,
  featured = false,
}: {
  post: (typeof BLOG_POSTS)[0];
  featured?: boolean;
}) {
  if (featured) {
    return (
      <motion.article
        variants={fadeUp}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.01] transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.02] hover:shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ImagePlaceholder
            width={post.imageWidth}
            height={post.imageHeight}
            className="aspect-[16/10] lg:aspect-auto lg:min-h-[360px] rounded-none rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
          />
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-foreground/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {post.category}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground/60">
                Featured
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold leading-snug tracking-tight text-foreground lg:text-3xl">
              {post.title}
            </h2>
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
              Read Article
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={fadeUp}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.01] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.02] hover:shadow-xl"
    >
      <ImagePlaceholder
        width={post.imageWidth}
        height={post.imageHeight}
        className="aspect-[16/9] rounded-none rounded-t-2xl"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="rounded-full bg-foreground/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {post.category}
          </span>
        </div>
        <h3 className="mb-2 text-[17px] font-bold leading-snug tracking-tight text-foreground line-clamp-2">
          {post.title}
        </h3>
        <p className="mb-5 text-[13px] leading-[1.6] text-muted-foreground line-clamp-3">
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
    </motion.article>
  );
}

// ── Blog Client Component ─────────────────────────────────────────────────────

export function BlogClient() {
  const { ref, isInView } = useInView(0.05);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (activeCategory === "All") return true;
    return post.category === activeCategory;
  });

  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div
      ref={ref}
      className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}
    >
      {/* Header */}
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="py-16 md:py-24 max-w-3xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
        >
          <span className="h-1 w-1 rounded-full bg-foreground/40" />
          Insights & Articles
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Our <span className="text-muted-foreground">Blog</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Engineering insights, design thinking, and business automation
          strategies from the team building enterprise software at Nexyn Studios.
        </motion.p>
      </motion.header>

      {/* Category Filters */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap items-center gap-2 mb-12"
      >
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200",
              activeCategory === category
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground border-border/40 hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <BlogCard post={featuredPost} featured />
        </motion.div>
      )}

      {/* Post Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {regularPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </motion.div>

      {filteredPosts.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-lg text-muted-foreground">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
