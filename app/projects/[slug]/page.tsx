import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Briefcase, Users, Calendar, Cpu } from "lucide-react";
import { PROJECTS } from "@/lib/data/projects";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { ScreenshotGallery } from "@/components/ui/screenshot-gallery";
import { LAYOUT, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | Case Study`,
    description: project.shortDescription,
    alternates: {
      canonical: `${SITE_CONFIG.url}/projects/${slug}`,
    },
  };
}

// Ensure the page gets built statically if possible
export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  
  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  // Prepare 2 images for the mockup showcase
  const showcaseImages = [
    project.featuredImage,
    project.galleryImages?.[0] || project.featuredImage
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-background pt-24 lg:pt-32 pb-16 relative">
        {/* Subtle top gradient accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-foreground/[0.03] to-transparent" />
        
        {/* Back Navigation */}
        <div className={cn("mx-auto w-full mb-8 lg:mb-12", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <header className={cn("mx-auto w-full mb-16 lg:mb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <div className="flex flex-col gap-6 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed w-full max-w-none">
              {project.shortDescription}
            </p>
            {/* Live URL button */}
            {project.liveUrl && (
              <div className="mt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-[13px] font-semibold text-background hover:opacity-85 transition-all duration-200 active:scale-95 shadow-md"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Live Portal
                </a>
              </div>
            )}
          </div>

          {/* Premium Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-12 border border-foreground/15 rounded-2xl overflow-hidden bg-foreground/[0.02] backdrop-blur-sm shadow-sm">
            {[
              { label: "Industry", value: project.industry, icon: Briefcase },
              { label: "Client Type", value: project.clientType, icon: Users },
              { label: "Year", value: project.completionYear, icon: Calendar },
              { label: "Services", value: project.category, icon: Cpu }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={cn(
                    "flex items-center gap-4 p-6 transition-colors hover:bg-foreground/[0.01]",
                    i < 3 ? "border-r border-foreground/10" : "",
                    i >= 2 ? "border-t border-foreground/10 md:border-t-0" : ""
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground/[0.05] text-foreground/75">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80">{stat.label}</span>
                    <span className="text-sm font-bold text-foreground leading-tight truncate">{stat.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </header>

        {/* Mockup Showcase */}
        <div className={cn("mx-auto w-full mb-24 lg:mb-32", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <div className="rounded-3xl border border-border/40 bg-foreground/[0.03] p-8 lg:p-14 shadow-2xl">
          {project.category === "Mobile App" ? (
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
              {showcaseImages.map((img, i) => (
                <div key={i} className="relative z-10 w-[260px] md:w-[320px] shadow-2xl transform-gpu hover:-translate-y-2 transition-transform duration-500">
                  {/* Silver Edge */}
                  <div className="relative w-full rounded-[3rem] bg-gradient-to-b from-[#e5e5e5] via-[#fdfdfd] to-[#888888] p-[3px] aspect-[9/19] ring-1 ring-black/20">
                    <div className="relative w-full h-full rounded-[2.8rem] bg-black p-[6px] md:p-[8px] overflow-hidden">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-[20px] bg-black rounded-full z-20 flex items-center justify-end pr-2">
                        <div className="w-2.5 h-2.5 bg-[#111] rounded-full border border-[#222]" />
                      </div>
                      <div className="relative w-full h-full bg-background overflow-hidden rounded-[2.4rem]">
                        <img src={img} alt={`${project.name} screen ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                  {/* Physical Buttons */}
                  <div className="absolute top-[100px] -left-[3px] w-[3px] h-[30px] bg-[#a3a3a3] rounded-l-[2px]" />
                  <div className="absolute top-[150px] -left-[3px] w-[3px] h-[50px] bg-[#a3a3a3] rounded-l-[2px]" />
                  <div className="absolute top-[210px] -left-[3px] w-[3px] h-[50px] bg-[#a3a3a3] rounded-l-[2px]" />
                  <div className="absolute top-[160px] -right-[3px] w-[3px] h-[70px] bg-[#a3a3a3] rounded-r-[2px]" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row justify-center items-start gap-20 lg:gap-28">
              {showcaseImages.map((img, i) => (
                <div key={i} className="relative z-10 w-full max-w-[560px] transform-gpu hover:-translate-y-2 transition-transform duration-500">
                  {/* MacBook Screen Lid */}
                  <div className="relative w-full rounded-t-[18px] rounded-b-[4px] bg-gradient-to-b from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] p-[2.5px] shadow-[0_4px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/15">
                    {/* Screen Outer Bezel */}
                    <div className="relative w-full bg-[#0c0c0c] rounded-t-[16px] rounded-b-[2px] p-[6px] md:p-[9px] flex flex-col shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]">
                      {/* Notch / Camera */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16%] h-[12px] md:h-[14px] bg-[#0d0d0d] rounded-b-[6px] z-30 flex justify-center items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b] border border-[#334155]/60 shadow-[0_0_2px_rgba(0,0,0,0.5)]" />
                      </div>
                      
                      {/* Screen Content Container with Glossy overlay */}
                      <div 
                        className="relative w-full overflow-hidden rounded-[3px] bg-neutral-950 shadow-[0_0_30px_rgba(0,0,0,0.2)_inset]"
                        style={{ aspectRatio: project.aspectRatio || "16/10" }}
                      >
                        <img
                          src={img}
                          alt={`${project.name} screen ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Screen glass reflection overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none mix-blend-overlay" />
                        <div className="absolute top-0 right-0 left-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none transform -skew-x-12" />
                      </div>

                      {/* Display bottom logo stripe */}
                      <div className="h-[12px] md:h-[16px] w-full flex items-center justify-center -mb-1 mt-1 z-20">
                        <span className="text-[6px] md:text-[7px] text-[#555] font-bold tracking-[0.35em] uppercase opacity-95">MacBook Pro</span>
                      </div>
                    </div>
                  </div>

                  {/* MacBook Keyboard Deck / Base */}
                  <div className="relative w-[114%] -ml-[7%] h-3.5 md:h-4.5 bg-gradient-to-b from-[#e8e8e8] via-[#dedede] to-[#8c8c8c] rounded-t-[1.5px] rounded-b-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] flex justify-center items-start border-b-[2.5px] border-[#555555]">
                    {/* Hinge groove */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-[#111] opacity-75" />
                    {/* Display opening notch/lip */}
                    <div className="w-[18%] h-1 md:h-1.5 bg-[#b8b8b8] rounded-b-[5px] shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.3)]" />
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>

        {/* ── Interactive Screenshot Gallery ───────────────── */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className={cn("mx-auto w-full mb-24 lg:mb-32", LAYOUT.maxWidth, LAYOUT.paddingX)}>
            <ScreenshotGallery
              images={project.galleryImages}
              projectName={project.name}
              aspectRatio={project.category === "Mobile App" ? "portrait" : "landscape"}
            />
          </div>
        )}

        {/* Content Sections */}
        <div className={cn("mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 lg:mb-32", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          {/* Sticky Tech Stack Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-32 flex flex-col gap-8 bg-foreground/[0.05] border border-border/60 p-8 rounded-2xl">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-md border border-border/60 bg-foreground/[0.06] text-foreground/90">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-8 border-t border-foreground/20">
                <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-4">Results</h3>
                <div className="flex flex-col gap-6">
                  {project.results.map(res => (
                    <div key={res.metric} className="flex flex-col gap-1">
                      <span className="text-3xl font-bold text-foreground">{res.value}</span>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{res.metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col gap-16 lg:gap-24">
            
            <section className="flex flex-col gap-6">
              {/* Reduced from text-4xl to text-3xl */}
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">The Challenge</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Research & Strategy</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.research}
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">The Solution</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section className="flex flex-col gap-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map(feature => (
                  <div key={feature.title} className="flex flex-col gap-3 p-6 rounded-2xl bg-foreground/[0.05] border border-foreground/10">
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Development Process</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.developmentProcess}
              </p>
            </section>

          </div>
        </div>

       
        <div className={cn("mx-auto w-full border-y border-foreground/15", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <Link href={`/projects/${nextProject.slug}`} className="group block py-16 lg:py-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Next Project</span>
                {/* Reduced from text-6xl to text-4xl */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                  {nextProject.name}
                </h2>
              </div>
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </div>

      </main>

      <CTASection />
      <FooterSection />
    </>
  );
}
