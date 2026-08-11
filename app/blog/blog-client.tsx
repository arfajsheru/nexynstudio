"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, Calendar } from "lucide-react"
import { LAYOUT } from "@/lib/constants"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { BLOG_POSTS } from "@/lib/data/blog-posts"

// ── Blog Card Component ───────────────────────────────────────────────────────

function BlogCard({
  post,
  featured = false,
}: {
  post: (typeof BLOG_POSTS)[0]
  featured?: boolean
}) {
  const cardContent = featured ? (
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
  ) : (
    <>
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
    </>
  )

  return (
    <Link href={`/blog/${post.slug}`}>
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
  )
}

// ── Blog Client Component ─────────────────────────────────────────────────────

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  
  // Filter blog posts dynamically based on selected category
  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory)

  // Determine categories dynamically from data registry
  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))]

  const featuredPost = filteredPosts.find((post) => post.featured) || filteredPosts[0]
  const regularPosts = filteredPosts.filter((post) => post.slug !== featuredPost?.slug)

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
        className="mx-auto max-w-3xl py-12 text-center md:py-20"
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

      {/* Categories Filter Tabs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 justify-center mb-12 border-b border-border/20 pb-6"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300",
              activeCategory === category
                ? "bg-foreground text-background border-foreground shadow-sm scale-95"
                : "border-border bg-background hover:border-foreground/35 text-muted-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && (
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
        {activeCategory !== "All" && featuredPost && (
          <BlogCard post={featuredPost} />
        )}
        {regularPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </motion.div>
    </div>
  )
}

