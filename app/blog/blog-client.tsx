"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, ArrowRight, Calendar } from "lucide-react"
import { LAYOUT } from "@/lib/constants"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"

// ── Blog Post Data ────────────────────────────────────────────────────────────

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
    image: "/blog/why-custom-crm-beats-off-the-shelf.png",
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
    image: "/blog/nextjs-vs-react-spa-for-enterprise.png",
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
    image: "/blog/design-system-saves-development-time.png",
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
    image: "/blog/ci-cd-pipeline-guide-startups.png",
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
    image: "/blog/business-automation-mistakes.png",
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
    image: "/blog/mobile-first-ux-principles.png",
  },
  {
    slug: "api-first-development-specifications",
    title: "API-First Development: Why We Design API Specs Before Writing Code",
    excerpt:
      "Designing your API specifications before writing any backend logic accelerates development, improves frontend integration speed, and reduces refactoring cycles.",
    category: "Engineering",
    date: "Mar 20, 2025",
    readTime: "7 min read",
    featured: false,
    image: "/blog/api-first-development.png",
  },
]

// ── Blog Card Component ───────────────────────────────────────────────────────

function BlogCard({
  post,
  featured = false,
}: {
  post: (typeof BLOG_POSTS)[0]
  featured?: boolean
}) {
  if (featured) {
    return (
      <motion.article
        variants={fadeUp}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-foreground/[0.01] transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.02] hover:shadow-xl"
      >
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-muted/20 lg:aspect-auto lg:min-h-[360px] lg:rounded-t-none lg:rounded-l-2xl">
            <Image
              src={post.image}
              alt={post.title}
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
                Featured
              </span>
            </div>
            <h2 className="mb-3 text-2xl leading-snug font-bold tracking-tight text-foreground lg:text-3xl">
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
    )
  }

  return (
    <motion.article
      variants={fadeUp}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-foreground/[0.01] transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.02] hover:shadow-xl"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted/20">
        <Image
          src={post.image}
          alt={post.title}
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
    </motion.article>
  )
}

// ── Blog Client Component ─────────────────────────────────────────────────────

export function BlogClient() {
  const featuredPost = BLOG_POSTS.find((post) => post.featured)
  const regularPosts = BLOG_POSTS.filter((post) => !post.featured)

  return (
    <div
      className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}
    >
      {/* Header */}
      <motion.header
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-3xl py-16 text-center md:py-24"
      >
        <motion.div
          variants={fadeUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase"
        >
          <span className="h-1 w-1 rounded-full bg-foreground/40" />
          Insights & Articles
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl"
        >
          Our <span className="text-muted-foreground">Blog</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Engineering insights, design thinking, and business automation
          strategies from the team building enterprise software at Nexyn
          Studios.
        </motion.p>
      </motion.header>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12"
        >
          <BlogCard post={featuredPost} featured />
        </motion.div>
      )}

      {/* Post Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {regularPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </motion.div>
    </div>
  )
}
