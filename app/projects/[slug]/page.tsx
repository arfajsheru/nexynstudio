import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data/projects";
import { Navbar, FooterSection, CTASection } from "@/components/sections";
import { ParallaxImage } from "@/components/ui/parallax-image";
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

  return (
    <>
      <Navbar />
      
      <main className="bg-background pt-24 lg:pt-32 pb-16">
        
        {/* Back Navigation */}
        <div className={cn("mx-auto w-full mb-8 lg:mb-12", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <header className={cn("mx-auto w-full mb-16 lg:mb-24", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mt-12 border-y border-border/40">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Industry</span>
              <span className="text-sm font-semibold text-foreground">{project.industry}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Client Type</span>
              <span className="text-sm font-semibold text-foreground">{project.clientType}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Year</span>
              <span className="text-sm font-semibold text-foreground">{project.completionYear}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Services</span>
              <span className="text-sm font-semibold text-foreground">Custom Software</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className={cn("mx-auto w-full mb-24 lg:mb-32", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <div className="w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden relative">
            <ParallaxImage 
              src={project.featuredImage} 
              alt={`${project.name} Featured Image`}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Overview Sections */}
        <div className={cn("mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 lg:mb-32", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          {/* Sticky Tech Stack Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-32 flex flex-col gap-8 bg-foreground/[0.01] border border-border/40 p-8 rounded-2xl">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-foreground mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-md border border-border/40 bg-background text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-8 border-t border-border/40">
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
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">The Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">Research & Strategy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.research}
              </p>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">The Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section className="flex flex-col gap-8">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map(feature => (
                  <div key={feature.title} className="flex flex-col gap-3 p-6 rounded-2xl bg-foreground/[0.01] border border-border/40">
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">Development Process</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.developmentProcess}
              </p>
            </section>

          </div>
        </div>

        {/* Gallery */}
        {project.galleryImages.length > 0 && (
          <div className={cn("mx-auto w-full mb-24 lg:mb-32 flex flex-col gap-8", LAYOUT.maxWidth, LAYOUT.paddingX)}>
            {project.galleryImages.map((img, i) => (
              <div key={i} className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden relative">
                <ParallaxImage 
                  src={img} 
                  alt={`${project.name} Gallery Image ${i + 1}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        )}

        {/* Next Project Nav */}
        <div className={cn("mx-auto w-full border-y border-border/40", LAYOUT.maxWidth, LAYOUT.paddingX)}>
          <Link href={`/projects/${nextProject.slug}`} className="group block py-16 lg:py-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Next Project</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
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
