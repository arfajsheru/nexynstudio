"use client";

import React from "react";
import {
  Smartphone,
  Server,
  Database,
  Shield,
  Layers,
  Zap,
  CheckCircle2,
  XCircle,
  GitBranch,
  Cloud,
  Cpu,
  Layout,
  Gauge,
  Workflow,
  ArrowRight,
  TrendingUp,
  Boxes,
  Code2,
  Lock,
  RefreshCw,
  Sliders,
  DollarSign,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DiagramCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

function DiagramContainer({ title, subtitle, badge, children, className }: DiagramCardProps) {
  return (
    <figure className={cn("my-10 overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-background via-muted/10 to-background/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl dark:border-border/30 dark:from-card/60 dark:to-background", className)}>
      {/* Header bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border/30 pb-4">
        <div>
          {badge && (
            <span className="mb-1 inline-block rounded-full bg-foreground/[0.04] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              {badge}
            </span>
          )}
          <h4 className="text-base sm:text-lg font-bold text-foreground tracking-tight">{title}</h4>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 bg-foreground/[0.02] px-2.5 py-1 rounded-full border border-border/40">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Nexyn Studios Visual Blueprint</span>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </figure>
  );
}

// ─── 1. Mobile App Cost Visual ───────────────────────────────────────────────
export function MobileAppCostDiagram() {
  const tiers = [
    { title: "Simple Utility App", price: "₹80,000 — ₹1,80,000", timeline: "3-5 Weeks", features: ["Offline feeds", "Basic UI", "Contact forms"] },
    { title: "Dynamic Custom App", price: "₹2,00,000 — ₹4,50,000", timeline: "6-10 Weeks", features: ["User Auth", "Push Notifications", "Database & APIs", "React Native"] },
    { title: "Enterprise App", price: "₹5,00,000+", timeline: "12+ Weeks", features: ["Payment Gateways", "Live GPS/Maps", "Role Permissions", "Custom Admin Panel"] },
  ];

  return (
    <DiagramContainer
      title="Mobile App Cost Breakdown & Complexity Tiers"
      subtitle="Estimated development cost factors by architectural scope"
      badge="Pricing Blueprint"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {tiers.map((tier, idx) => (
          <div key={idx} className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-5 flex flex-col justify-between hover:border-foreground/20 transition-all duration-200">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Tier {idx + 1}</div>
              <h5 className="text-base font-bold text-foreground mb-2">{tier.title}</h5>
              <div className="text-lg font-extrabold text-foreground mb-1">{tier.price}</div>
              <div className="text-[11px] text-muted-foreground mb-4">Timeline: {tier.timeline}</div>
            </div>
            <ul className="space-y-2 border-t border-border/30 pt-3">
              {tier.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border/30 bg-foreground/[0.02] p-4 flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-muted-foreground">
        <span className="flex items-center gap-1.5"><Layout className="h-4 w-4 text-indigo-500" /> UI/UX Design</span>
        <span className="flex items-center gap-1.5"><Smartphone className="h-4 w-4 text-indigo-500" /> Frontend App</span>
        <span className="flex items-center gap-1.5"><Server className="h-4 w-4 text-indigo-500" /> Backend APIs</span>
        <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-indigo-500" /> Security & QA</span>
        <span className="flex items-center gap-1.5"><Cloud className="h-4 w-4 text-indigo-500" /> Cloud Hosting</span>
      </div>
    </DiagramContainer>
  );
}

// ─── 2. Custom Software SDLC Workflow Visual ────────────────────────────────
export function SDLCWorkflowDiagram() {
  const steps = [
    { num: "01", name: "Requirements Mapping", desc: "Define user roles, features & operational goals" },
    { num: "02", name: "Schema & Architecture", desc: "Database entity planning & API contracts" },
    { num: "03", name: "UI/UX & Wireframes", desc: "High-fidelity Figma prototypes & user flows" },
    { num: "04", name: "Agile Development", desc: "Bi-weekly sprint demos & continuous testing" },
    { num: "05", name: "Security Audit & QA", desc: "Penetration testing & performance tuning" },
    { num: "06", name: "Production Launch", desc: "Automated CI/CD deploy & cloud setup" },
  ];

  return (
    <DiagramContainer
      title="The 6-Phase Custom Software Development Lifecycle"
      subtitle="Structured sprint progression from blueprint to production deployment"
      badge="SDLC Workflow"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div key={step.num} className="group rounded-2xl border border-border/40 bg-foreground/[0.015] p-5 transition-all duration-200 hover:border-foreground/20 hover:bg-foreground/[0.03]">
            <div className="mb-2 text-2xl font-bold font-mono text-foreground/20 group-hover:text-foreground/40 transition-colors">
              {step.num}
            </div>
            <h5 className="text-sm font-bold text-foreground mb-1">{step.name}</h5>
            <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </DiagramContainer>
  );
}

// ─── 3. SaaS Architecture Grid Visual ───────────────────────────────────────
export function SaaSArchitectureDiagram() {
  const components = [
    { icon: Lock, title: "Authentication", desc: "SSO, OAuth2, Role-based Access Control (RBAC)" },
    { icon: Database, title: "Multi-Tenant DB", desc: "Isolated schema or Row-Level Security (RLS)" },
    { icon: DollarSign, title: "Subscription Billing", desc: "Stripe & Razorpay webhook integration" },
    { icon: Cpu, title: "API Gateway", desc: "Rate limiting, load balancing & SSL termination" },
    { icon: Gauge, title: "Analytics & Monitoring", desc: "Sentry errors, PostHog product analytics" },
    { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS / Vercel serverless auto-scaling" },
  ];

  return (
    <DiagramContainer
      title="SaaS Product Technical Architecture Blueprint"
      subtitle="Core infrastructure layers required for a production-ready SaaS MVP"
      badge="SaaS Blueprint"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((comp, idx) => {
          const Icon = comp.icon;
          return (
            <div key={idx} className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-5 flex items-start gap-4">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-foreground/10 flex items-center justify-center text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-foreground mb-1">{comp.title}</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{comp.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </DiagramContainer>
  );
}

// ─── 4. Business CRM Workflow Visual ────────────────────────────────────────
export function CRMWorkflowDiagram() {
  const stages = [
    { title: "1. Lead Capture", desc: "Web forms, WhatsApp API & Meta Lead Ads auto-sync" },
    { title: "2. Qualification", desc: "Automated lead scoring & agent distribution" },
    { title: "3. Pipeline Management", desc: "Custom Kanban deal stages & approval flows" },
    { title: "4. Follow-up Engine", desc: "Automated SMS/Email reminders & task alerts" },
    { title: "5. Analytics & Close", desc: "Revenue forecasting & deal win-rate dashboards" },
  ];

  return (
    <DiagramContainer
      title="End-to-End Business CRM Pipeline Flow"
      subtitle="Automated lead capture, distribution, and deal closing ecosystem"
      badge="CRM Ecosystem"
    >
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-3">
        {stages.map((stage, idx) => (
          <div key={idx} className="flex-1 rounded-2xl border border-border/40 bg-foreground/[0.015] p-4 text-center flex flex-col justify-between">
            <h5 className="text-xs font-bold text-foreground mb-1">{stage.title}</h5>
            <p className="text-[11px] text-muted-foreground leading-snug">{stage.desc}</p>
          </div>
        ))}
      </div>
    </DiagramContainer>
  );
}

// ─── 5. Ecommerce Next.js vs Shopify Visual ─────────────────────────────────
export function EcommerceComparisonDiagram() {
  return (
    <DiagramContainer
      title="Headless Next.js Storefront vs Traditional SaaS Ecommerce"
      subtitle="Architecture comparison between custom Next.js and template platforms"
      badge="E-commerce Architecture"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-sm font-bold text-foreground">Custom Next.js Headless</h5>
            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">High Performance</span>
          </div>
          <ul className="space-y-2.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> 100/100 Core Web Vitals & Sub-second load speeds</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Zero per-transaction platform percentage fees</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Complete source code & database ownership</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" /> Unlimited custom checkout & loyalty program flows</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border/50 bg-foreground/[0.015] p-6">
          <div className="mb-3 flex items-center justify-between">
            <h5 className="text-sm font-bold text-foreground">Shopify / SaaS Template</h5>
            <span className="rounded-full bg-muted-foreground/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">Standard Setup</span>
          </div>
          <ul className="space-y-2.5 text-xs text-muted-foreground">
            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-amber-500 shrink-0" /> Slower page loads from app plugin bloat</li>
            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-amber-500 shrink-0" /> Monthly app subscription & revenue share fees</li>
            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-amber-500 shrink-0" /> Locked inside proprietary platform templates</li>
            <li className="flex items-center gap-2"><XCircle className="h-4 w-4 text-amber-500 shrink-0" /> Restricted checkout customization rules</li>
          </ul>
        </div>
      </div>
    </DiagramContainer>
  );
}

// ─── 6. Custom CRM vs Off-the-Shelf Visual ──────────────────────────────────
export function CustomVsOffTheShelfDiagram() {
  return (
    <DiagramContainer
      title="Custom Built CRM vs Off-the-Shelf SaaS CRM"
      subtitle="Key architectural and operational trade-offs for scaling businesses"
      badge="Decision Matrix"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.03] p-6">
          <h5 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-indigo-500" /> Custom CRM (Nexyn Studios)
          </h5>
          <div className="space-y-3 text-xs text-muted-foreground">
            <div><strong className="text-foreground">Tailored Workflows:</strong> Built 100% around your exact sales steps.</div>
            <div><strong className="text-foreground">Cost Structure:</strong> One-time build cost, zero monthly per-user licenses.</div>
            <div><strong className="text-foreground">Data Privacy:</strong> Hosted on your private AWS/Cloud instance.</div>
            <div><strong className="text-foreground">Integrations:</strong> Unlimited direct API connections to internal ERPs.</div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-foreground/[0.015] p-6">
          <h5 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <XCircle className="h-4 w-4 text-muted-foreground" /> Generic SaaS CRM (Salesforce/HubSpot)
          </h5>
          <div className="space-y-3 text-xs text-muted-foreground">
            <div><strong className="text-foreground">Feature Bloat:</strong> Hundreds of unused tabs that confuse agents.</div>
            <div><strong className="text-foreground">Cost Structure:</strong> Expensive monthly fees that increase as team grows.</div>
            <div><strong className="text-foreground">Data Privacy:</strong> Stored on shared third-party vendor servers.</div>
            <div><strong className="text-foreground">Integrations:</strong> Restricted to pre-approved marketplace plugins.</div>
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

// ─── 7. Next.js vs React SPA Visual ─────────────────────────────────────────
export function NextVsReactDiagram() {
  return (
    <DiagramContainer
      title="Next.js SSR/SSG vs Traditional React Single Page Application (SPA)"
      subtitle="Comparison of rendering pipelines, SEO indexation, and initial page load speed"
      badge="Rendering Architecture"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border/50 bg-foreground/[0.02] p-5">
          <div className="text-xs font-mono font-bold uppercase text-foreground mb-2">Next.js App Router (SSR)</div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="p-3 rounded-xl bg-background border border-border/40">1. User requests URL → Server executes React components</div>
            <div className="p-3 rounded-xl bg-background border border-border/40">2. Server returns pre-rendered HTML to browser instantly</div>
            <div className="p-3 rounded-xl bg-background border border-border/40">3. Googlebot indexes full HTML content immediately</div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/50 bg-foreground/[0.02] p-5">
          <div className="text-xs font-mono font-bold uppercase text-foreground mb-2">React Client-Side SPA (CSR)</div>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="p-3 rounded-xl bg-background border border-border/40">1. User requests URL → Server returns empty HTML `&lt;div id=&quot;root&quot;&gt;&lt;/div&gt;`</div>
            <div className="p-3 rounded-xl bg-background border border-border/40">2. Browser downloads & parses large JavaScript bundle</div>
            <div className="p-3 rounded-xl bg-background border border-border/40">3. UI constructs on client side; search crawlers struggle</div>
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

// ─── 8. Design System Hierarchy Visual ──────────────────────────────────────
export function DesignSystemDiagram() {
  const levels = [
    { title: "Design Tokens", desc: "Colors, typography scale, spacing, shadows, border radii" },
    { title: "UI Primitives", desc: "Buttons, inputs, badges, avatars, tooltips" },
    { title: "Composite Components", desc: "Navbar, hero banners, modal dialogs, data tables" },
    { title: "Full Page Templates", desc: "Consistent, reusable page layouts across all products" },
  ];

  return (
    <DiagramContainer
      title="Design System Component & Token Hierarchy"
      subtitle="How atomic design tokens accelerate engineering velocity by up to 40%"
      badge="Design Systems"
    >
      <div className="space-y-3">
        {levels.map((lvl, idx) => (
          <div key={idx} className="flex items-center gap-4 rounded-xl border border-border/40 bg-foreground/[0.015] p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/10 text-xs font-mono font-bold text-foreground">
              0{idx + 1}
            </div>
            <div>
              <h5 className="text-xs font-bold text-foreground">{lvl.title}</h5>
              <p className="text-[11px] text-muted-foreground">{lvl.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramContainer>
  );
}

// ─── 9. CI/CD Pipeline Visual ───────────────────────────────────────────────
export function PipelineDiagram() {
  const pipeline = [
    { title: "1. Code Commit", desc: "Developer pushes code to GitHub branch" },
    { title: "2. GitHub Actions", desc: "Triggers automated build, linting & typechecks" },
    { title: "3. Automated Testing", desc: "Runs unit, integration & API regression tests" },
    { title: "4. Staging Deploy", desc: "Deploys preview build for QA verification" },
    { title: "5. Production", desc: "Zero-downtime release to main Vercel/AWS servers" },
  ];

  return (
    <DiagramContainer
      title="Automated DevOps CI/CD Deployment Pipeline"
      subtitle="Battle-tested continuous integration and deployment workflow for startups"
      badge="DevOps Pipeline"
    >
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {pipeline.map((p, idx) => (
          <div key={idx} className="rounded-xl border border-border/40 bg-foreground/[0.015] p-3 text-center flex flex-col justify-between">
            <h5 className="text-[11px] font-bold text-foreground mb-1">{p.title}</h5>
            <p className="text-[10px] text-muted-foreground leading-tight">{p.desc}</p>
          </div>
        ))}
      </div>
    </DiagramContainer>
  );
}

// ─── 10. Business Automation Flow Visual ────────────────────────────────────
export function AutomationFlowDiagram() {
  return (
    <DiagramContainer
      title="Manual Overhead vs Automated Event-Driven API Workflow"
      subtitle="Eliminating redundant data entry through direct API triggers"
      badge="Workflow Automation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.02] p-5">
          <div className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-2">❌ Manual Process (Slow & Error-Prone)</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Lead submits web form → Employee opens email → Manually copies details to Excel → Sends manual WhatsApp message → Forgets follow-up.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] p-5">
          <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2">⚡ Automated API Pipeline (Instant & Accurate)</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Lead submits web form → API webhook triggers → Instantly creates CRM record → Auto-sends WhatsApp confirmation → Assigns sales representative.
          </p>
        </div>
      </div>
    </DiagramContainer>
  );
}

// ─── 11. Mobile-First UX Viewports Visual ───────────────────────────────────
export function MobileFirstUXDiagram() {
  return (
    <DiagramContainer
      title="Mobile-First Responsive Layout & Touch Target Grid"
      subtitle="Designing user interfaces across mobile (375px), tablet (768px), and desktop (1440px)"
      badge="Responsive UX"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-5">
          <Smartphone className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
          <h5 className="text-xs font-bold text-foreground mb-1">Mobile (375px–430px)</h5>
          <p className="text-[11px] text-muted-foreground">Thumb-zone buttons (48px+ height), single column stack, sticky action bars.</p>
        </div>

        <div className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-5">
          <Layout className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
          <h5 className="text-xs font-bold text-foreground mb-1">Tablet (768px–1024px)</h5>
          <p className="text-[11px] text-muted-foreground">Dual column grid, collapsible navigation drawers, touch & click dual support.</p>
        </div>

        <div className="rounded-2xl border border-border/40 bg-foreground/[0.015] p-5">
          <Server className="h-6 w-6 text-indigo-500 mx-auto mb-2" />
          <h5 className="text-xs font-bold text-foreground mb-1">Desktop (1440px+)</h5>
          <p className="text-[11px] text-muted-foreground">Multi-column dashboards, sticky navigation sidebars, hover state micro-interactions.</p>
        </div>
      </div>
    </DiagramContainer>
  );
}

// ─── 12. API-First Architecture Visual ──────────────────────────────────────
export function APIFirstDiagram() {
  return (
    <DiagramContainer
      title="API-First Gateway & Microservices Blueprint"
      subtitle="Decoupled API architecture powering multi-client frontend applications"
      badge="API Architecture"
    >
      <div className="space-y-4">
        {/* Clients */}
        <div className="flex flex-wrap items-center justify-around gap-3 rounded-xl border border-border/40 bg-foreground/[0.02] p-4 text-xs font-semibold text-foreground">
          <span>📱 Web & React App</span>
          <span>📲 Mobile App</span>
          <span>💻 Admin Portal</span>
          <span>⚡ Third-Party Webhooks</span>
        </div>
        {/* Arrow */}
        <div className="text-center text-xs text-muted-foreground font-mono">↓ RESTful / GraphQL API Gateway ↓</div>
        {/* Core Services */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-border/40 bg-foreground/[0.015] p-3 text-center text-xs font-medium text-muted-foreground">
            <strong className="text-foreground block mb-1">Auth & Security</strong>
            JWT, OAuth2, RBAC
          </div>
          <div className="rounded-xl border border-border/40 bg-foreground/[0.015] p-3 text-center text-xs font-medium text-muted-foreground">
            <strong className="text-foreground block mb-1">Business Engine</strong>
            Node.js / PostgreSQL
          </div>
          <div className="rounded-xl border border-border/40 bg-foreground/[0.015] p-3 text-center text-xs font-medium text-muted-foreground">
            <strong className="text-foreground block mb-1">External Services</strong>
            Stripe, AWS S3, Twilio
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

// ─── Main Switcher Component for Article Slug ────────────────────────────────
export function BlogArticleDiagram({ slug }: { slug: string }) {
  switch (slug) {
    case "how-much-does-a-mobile-app-cost":
      return <MobileAppCostDiagram />;
    case "custom-software-development-guide":
      return <SDLCWorkflowDiagram />;
    case "saas-development-cost":
      return <SaaSArchitectureDiagram />;
    case "how-to-build-a-business-crm":
      return <CRMWorkflowDiagram />;
    case "ecommerce-website-development-guide":
      return <EcommerceComparisonDiagram />;
    case "why-custom-crm-beats-off-the-shelf":
      return <CustomVsOffTheShelfDiagram />;
    case "nextjs-vs-react-spa-for-enterprise":
    case "nextjs-vs-react":
      return <NextVsReactDiagram />;
    case "design-system-saves-development-time":
      return <DesignSystemDiagram />;
    case "ci-cd-pipeline-guide-startups":
      return <PipelineDiagram />;
    case "business-automation-mistakes":
      return <AutomationFlowDiagram />;
    case "mobile-first-ux-principles":
      return <MobileFirstUXDiagram />;
    case "api-first-development-specifications":
      return <APIFirstDiagram />;
    default:
      return null;
  }
}
