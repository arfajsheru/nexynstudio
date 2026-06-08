"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  GitBranch,
  Layers,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STACK_LAYERS = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "User Interface Layer",
    icon: Monitor,
    technologies: [
      { name: "React", icon: "/icons/react.svg", url: "https://react.dev" },
      { name: "Next.js", icon: "/icons/nextjs.svg", url: "https://nextjs.org" },
      { name: "TypeScript", icon: "/icons/typescript.svg", url: "https://www.typescriptlang.org" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", url: "https://tailwindcss.com" },
      { name: "Framer Motion", icon: "/icons/framer.svg", url: "https://www.framer.com/motion/" },
      { name: "shadcn/ui", icon: "/icons/shadcn.svg", url: "https://ui.shadcn.com" },
      { name: "GSAP", icon: "/icons/gsap.svg", url: "https://gsap.com" },
      { name: "Vue", icon: "/icons/vue.svg", url: "https://vuejs.org" },
    ],
    color: "from-foreground/10 to-foreground/5",
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Business Logic Layer",
    icon: Server,
    technologies: [
      { name: "Node.js", icon: "/icons/nodejs.svg", url: "https://nodejs.org" },
      { name: "NestJS", icon: "/icons/nestjs.svg", url: "https://nestjs.com" },
      { name: "Express", icon: "/icons/express.svg", url: "https://expressjs.com" },
      { name: "GraphQL", icon: "/icons/graphql.svg", url: "https://graphql.org" },
      { name: "Python", icon: "/icons/python.svg", url: "https://www.python.org" },
      { name: "Java", icon: "/icons/java.svg", url: "https://www.java.com" },
      { name: "PHP", icon: "/icons/php.svg", url: "https://www.php.net" },
    ],
    color: "from-foreground/8 to-foreground/3",
  },
  {
    id: "mobile",
    title: "Mobile App",
    subtitle: "Cross-Platform Layer",
    icon: Smartphone,
    technologies: [
      { name: "React Native", icon: "/icons/reactnative.svg", url: "https://reactnative.dev" },
      { name: "Expo", icon: "/icons/expo.svg", url: "https://expo.dev" },
      { name: "Reanimated", icon: "/icons/react.svg", url: "https://docs.swmansion.com/react-native-reanimated/" },
      { name: "Firebase", icon: "/icons/firebase.svg", url: "https://firebase.google.com" },
      { name: "Redux", icon: "/icons/redux.svg", url: "https://redux-toolkit.js.org" },
      { name: "Android", icon: "/icons/android.svg", url: "https://developer.android.com" },
      { name: "Apple", icon: "/icons/apple.svg", url: "https://developer.apple.com" },
    ],
    color: "from-foreground/7 to-foreground/2",
  },
  {
    id: "database",
    title: "Database",
    subtitle: "Data Persistence Layer",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", url: "https://www.postgresql.org" },
      { name: "MongoDB", icon: "/icons/mongodb.svg", url: "https://www.mongodb.com" },
      { name: "MySQL", icon: "/icons/mysql.svg", url: "https://www.mysql.com" },
      { name: "Redis", icon: "/icons/redis.svg", url: "https://redis.io" },
      { name: "Supabase", icon: "/icons/supabase.svg", url: "https://supabase.com" },
      { name: "Prisma", icon: "/icons/prisma.svg", url: "https://www.prisma.io" },
    ],
    color: "from-foreground/6 to-foreground/2",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Infrastructure Layer",
    icon: Cloud,
    technologies: [
      { name: "AWS", icon: "/icons/aws.svg", url: "https://aws.amazon.com" },
      { name: "Google Cloud", icon: "/icons/googlecloud.svg", url: "https://cloud.google.com" },
      { name: "Docker", icon: "/icons/docker.svg", url: "https://www.docker.com" },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg", url: "https://kubernetes.io" },
      { name: "Vercel", icon: "/icons/vercel.svg", url: "https://vercel.com" },
    ],
    color: "from-foreground/5 to-foreground/[0.01]",
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    subtitle: "Productivity Layer",
    icon: Sparkles,
    technologies: [
      { name: "OpenAI", icon: "/icons/openai.svg", url: "https://openai.com" },
      { name: "Figma", icon: "/icons/figma.svg", url: "https://www.figma.com" },
      { name: "GitHub", icon: "/icons/github.svg", url: "https://github.com" },
      { name: "Git", icon: "/icons/git.svg", url: "https://git-scm.com" },
      { name: "Postman", icon: "/icons/postman.svg", url: "https://www.postman.com" },
    ],
    color: "from-foreground/4 to-transparent",
  },
];

const CAPABILITIES = [
  { icon: Shield, label: "Enterprise Security" },
  { icon: Zap, label: "High Performance" },
  { icon: GitBranch, label: "Version Control" },
  { icon: Layers, label: "Micro-Services" },
];

export function TechStackSection() {

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-foreground/[0.02]">
      {/* Subtle blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.015,
        }}
      />

      <div
        className={cn(
          "relative z-10 mx-auto w-full",
          LAYOUT.maxWidth,
          LAYOUT.paddingX,
        )}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-10 lg:mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              Engineering Foundation
            </div>
            <h2 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Technology{" "}
              <span className="text-foreground/50">Architecture</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
              We leverage a battle-tested, modern stack designed for
              performance, security, and long-term maintainability across every
              layer of your application.
            </p>
          </motion.div>

          {/* ── Modern Bento Grid Architecture ─────────────────────────────── */}
          <motion.div variants={fadeUp} className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STACK_LAYERS.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  variants={fadeUp}
                  className={cn(
                    "group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-background/40 p-6 sm:p-8 transition-all duration-500 hover:border-foreground/30 hover:bg-background/80 hover:shadow-2xl hover:shadow-foreground/5",
                    // Make the first two cards span slightly larger on tablets, but standard on large screens
                    index === 0 || index === 1 ? "md:col-span-1" : ""
                  )}
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Layer Header */}
                  <div className="mb-8 flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-background shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-foreground/[0.02]">
                        <layer.icon className="h-6 w-6 text-foreground/80 transition-colors duration-500 group-hover:text-foreground" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60 mb-1">
                          Layer 0{index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {layer.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground line-clamp-1">
                          {layer.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Grid (Bento Boxes) */}
                  <div className="relative z-10 mt-auto grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {layer.technologies.map((tech) => (
                      <a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/tech flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-border/40 bg-foreground/[0.02] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-foreground/[0.05] hover:shadow-md"
                      >
                        <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white p-2.5 shadow-sm transition-transform duration-300 group-hover/tech:scale-110">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <span className="text-center text-[10px] font-bold text-muted-foreground transition-colors duration-300 group-hover/tech:text-foreground line-clamp-1">
                          {tech.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Bottom Capabilities Row ─────────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-background p-5 text-center transition-colors duration-200 hover:border-foreground/20"
              >
                <cap.icon className="h-4 w-4 text-foreground/50" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {cap.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
