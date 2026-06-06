"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, ProjectDetail } from "@/lib/data/projects";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Web App", "Mobile App", "Website", "Custom Software"];

export function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <div className={cn("mx-auto w-full pb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}>
      
      {/* Header */}
      <header className="py-16 md:py-24 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Our <span className="text-muted-foreground">Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Explore our recent work across web applications, mobile apps, and custom enterprise software.
        </p>
      </header>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200",
              activeCategory === category
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-muted-foreground border-border/40 hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Optimized Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col gap-5 rounded-2xl p-4 bg-foreground/[0.02] border border-border/40 hover:bg-foreground/[0.04] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Project Image */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-muted/20 relative">
              <img
                src={project.featuredImage}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-foreground" />
              </div>
            </div>

            {/* Project Info */}
            <div className="flex flex-col gap-2 px-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-foreground">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-lg text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
