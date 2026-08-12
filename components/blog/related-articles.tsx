"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/data/blog-posts";
import { cn } from "@/lib/utils";

interface RelatedArticlesProps {
  currentSlug: string;
  allPosts: BlogPost[];
  category?: string;
  className?: string;
}

export function RelatedArticles({ currentSlug, allPosts, category, className }: RelatedArticlesProps) {
  // Filter out current post, prioritize same category
  const otherPosts = allPosts.filter((p) => p.slug !== currentSlug);
  const sameCategoryPosts = category ? otherPosts.filter((p) => p.category === category) : [];
  const differentCategoryPosts = otherPosts.filter((p) => p.category !== category);

  const related = [...sameCategoryPosts, ...differentCategoryPosts].slice(0, 3);

  if (!related.length) return null;

  return (
    <section className={cn("mt-16 pt-12 border-t border-border/40", className)}>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
            Keep Reading
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-foreground">
            Related Engineering Articles
          </h3>
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:underline underline-offset-4"
        >
          <span>View All Articles</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-foreground/[0.01] transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.03] hover:shadow-lg"
          >
            {/* Image header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/20">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span className="rounded-full border border-border/60 bg-background/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground backdrop-blur-md">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-center gap-3 text-[11px] text-muted-foreground/75">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <h4 className="mb-2 text-base font-bold text-foreground line-clamp-2 leading-snug group-hover:text-foreground/80 transition-colors">
                {post.title}
              </h4>

              <p className="mb-4 text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-1 text-xs font-semibold text-foreground group-hover:translate-x-0.5 transition-transform duration-200">
                <span>Read Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
