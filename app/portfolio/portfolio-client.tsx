"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data/projects";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PortfolioClient() {
  const webProjects = PROJECTS.filter(p => p.category !== 'Mobile App');
  const mobileProjects = PROJECTS.filter(p => p.category === 'Mobile App');

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

      {/* Separated Project Sections */}
      <div className="pt-8">
        {/* Web Projects Section */}
        {webProjects.length > 0 && (
          <div className={cn(mobileProjects.length > 0 && "mb-32")}>
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-[1px] w-12 bg-border" />
              <h3 className="text-2xl font-bold text-foreground tracking-tight uppercase text-muted-foreground/60">Web Platforms</h3>
              <div className="h-[1px] w-12 bg-border" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
              {webProjects.map((project) => (
                <div key={project.slug} className="group flex flex-col gap-10 items-center w-full max-w-[600px] mx-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative w-full block transition-transform hover:-translate-y-2 duration-500 group"
                    style={{ '--project-accent': project.accentColor || '#3b82f6' } as React.CSSProperties}
                  >
                    {/* Top Ribbon Tooltip */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-500 ease-[0.16,1,0.3,1] z-0 flex justify-center pointer-events-none">
                      <div 
                        className="flex items-center gap-2 px-6 py-2.5 rounded-t-xl text-white text-[12px] font-bold tracking-widest uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.3)] border-t border-x border-white/20 whitespace-nowrap"
                        style={{ backgroundColor: 'color-mix(in srgb, var(--project-accent) 90%, black)' }}
                      >
                        <span>{project.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Realistic MacBook Mockup (Optimized: No heavy box-shadow glow) */}
                    <div className="relative z-10 w-full mx-auto shadow-2xl">
                      {/* MacBook Screen / Lid */}
                      <div className="relative w-full rounded-t-[14px] rounded-b-[4px] bg-gradient-to-b from-[#e5e5e5] to-[#b5b5b5] p-[2px] ring-1 ring-black/10">
                        <div className="relative w-full aspect-[16/10] bg-black rounded-t-[12px] rounded-b-[2px] p-[6px] md:p-[8px] flex flex-col shadow-inner overflow-hidden">
                          
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[18%] h-[12px] md:h-[14px] bg-black rounded-b-[6px] z-30 flex justify-center items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-[#222]" />
                          </div>
                          
                          {/* Screen Content */}
                          <div className="relative w-full h-full bg-background overflow-hidden rounded-[2px]">
                            <img
                              src={project.featuredImage}
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* MacBook Pro text */}
                          <div className="h-[12px] md:h-[16px] w-full flex items-center justify-center -mb-1 mt-1 z-20">
                            <span className="text-[6px] md:text-[7px] text-[#444] font-semibold tracking-[0.3em] uppercase">MacBook Pro</span>
                          </div>
                        </div>
                      </div>

                      {/* MacBook Base */}
                      <div className="relative w-[114%] -ml-[7%] h-3 md:h-4 bg-gradient-to-b from-[#e0e0e0] to-[#999999] rounded-t-[1px] rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex justify-center items-start border-b-[2px] border-[#666666]">
                        {/* Trackpad Indentation */}
                        <div className="w-[18%] h-1 md:h-1.5 bg-[#c2c2c2] rounded-b-[4px] shadow-inner" />
                      </div>
                    </div>
                  </Link>

                  {/* Project Info */}
                  <div className="flex flex-col items-center text-center gap-3 px-4">
                    <span 
                      className="text-[11px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: 'var(--project-accent)' }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground line-clamp-2 max-w-[400px] leading-relaxed mb-2">
                      {project.shortDescription}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:-translate-y-1"
                      style={{ 
                        backgroundColor: 'color-mix(in srgb, var(--project-accent) 15%, transparent)', 
                        color: 'var(--project-accent)' 
                      }}
                    >
                      View Details
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Projects Section */}
        {mobileProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="h-[1px] w-12 bg-border" />
              <h3 className="text-2xl font-bold text-foreground tracking-tight uppercase text-muted-foreground/60">Mobile Applications</h3>
              <div className="h-[1px] w-12 bg-border" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
              {mobileProjects.map((project) => (
                <div key={project.slug} className="group flex flex-col gap-10 items-center w-full max-w-[320px] mx-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="relative w-full block transition-transform hover:-translate-y-2 duration-500 group"
                    style={{ '--project-accent': project.accentColor || '#3b82f6' } as React.CSSProperties}
                  >
                    {/* Top Ribbon Tooltip */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full transition-all duration-500 ease-[0.16,1,0.3,1] z-0 flex justify-center pointer-events-none">
                      <div 
                        className="flex items-center gap-2 px-5 py-2.5 rounded-t-xl text-white text-[11px] font-bold tracking-widest uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.3)] border-t border-x border-white/20 whitespace-nowrap"
                        style={{ backgroundColor: 'color-mix(in srgb, var(--project-accent) 90%, black)' }}
                      >
                        <span>{project.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Realistic iPhone Mockup (Optimized: No heavy box-shadow glow) */}
                    <div className="relative z-10 w-[260px] md:w-[280px] mx-auto shadow-2xl">
                      {/* Silver Edge */}
                      <div className="relative w-full rounded-[2.8rem] bg-gradient-to-b from-[#e5e5e5] via-[#fdfdfd] to-[#888888] p-[3px] aspect-[9/19] ring-1 ring-black/20">
                        
                        {/* Black Bezel */}
                        <div className="relative w-full h-full rounded-[2.6rem] bg-black p-[6px] md:p-[8px] overflow-hidden">
                          
                          {/* Dynamic Island */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-[20px] bg-black rounded-full z-20 flex items-center justify-end pr-2">
                            <div className="w-2.5 h-2.5 bg-[#111] rounded-full border border-[#222]" />
                          </div>
                          
                          {/* Screen Content */}
                          <div className="relative w-full h-full bg-background overflow-hidden rounded-[2.2rem]">
                            <img
                              src={project.featuredImage}
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Physical Buttons */}
                        <div className="absolute top-[90px] -left-[3px] w-[3px] h-[26px] bg-[#a3a3a3] rounded-l-[2px]" />
                        <div className="absolute top-[130px] -left-[3px] w-[3px] h-[45px] bg-[#a3a3a3] rounded-l-[2px]" />
                        <div className="absolute top-[185px] -left-[3px] w-[3px] h-[45px] bg-[#a3a3a3] rounded-l-[2px]" />
                        <div className="absolute top-[140px] -right-[3px] w-[3px] h-[60px] bg-[#a3a3a3] rounded-r-[2px]" />
                      </div>
                    </div>
                  </Link>

                  {/* Project Info */}
                  <div className="flex flex-col items-center text-center gap-3 px-4">
                    <span 
                      className="text-[11px] font-bold uppercase tracking-[0.2em]"
                      style={{ color: 'var(--project-accent)' }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground line-clamp-2 max-w-[280px] leading-relaxed mb-2">
                      {project.shortDescription}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:-translate-y-1"
                      style={{ 
                        backgroundColor: 'color-mix(in srgb, var(--project-accent) 15%, transparent)', 
                        color: 'var(--project-accent)' 
                      }}
                    >
                      View Details
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {PROJECTS.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-lg text-muted-foreground">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
