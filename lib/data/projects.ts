export type ProjectDetail = {
  slug: string;
  name: string;
  category: "Web App" | "Mobile App" | "Custom Software" | "Website";
  industry: string;
  clientType: string;
  completionYear: string;
  shortDescription: string;
  featuredImage: string;
  galleryImages: string[];
  techStack: string[];
  challenge: string;
  research: string;
  solution: string;
  features: { title: string; description: string }[];
  developmentProcess: string;
  results: { metric: string; value: string }[];
  accentColor: string;
};

export const PROJECTS: ProjectDetail[] = [
  // Add your projects here. Example structure:
  /*
  {
    slug: "example-project",
    accentColor: "#6366f1",
    name: "Example Project",
    category: "Custom Software",
    industry: "Industry Name",
    clientType: "Enterprise",
    completionYear: "2026",
    shortDescription: "A short description of the project.",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    galleryImages: [],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    challenge: "The challenge faced.",
    research: "Research details.",
    solution: "The solution built.",
    features: [
      { title: "Feature 1", description: "Description 1" }
    ],
    developmentProcess: "Development process details.",
    results: [
      { metric: "Metric Name", value: "Metric Value" }
    ]
  }
  */
];
