"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Database,
  Target,
  Package,
  Factory,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Zap,
  Activity,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useInView } from "@/hooks/use-interactions";
import { cn } from "@/lib/utils";

// ── Per-solution accent colours ───────────────────────────────────────────────
// Used ONLY on micro-elements (icon dot, chart line, stat delta)
// — everything else stays on-theme black/white.
const ACCENT = {
  crm:           "#6366f1",
  erp:           "#a855f7",
  lead:          "#f97316",
  inventory:     "#10b981",
  manufacturing: "#3b82f6",
  dashboards:    "#06b6d4",
} as const;

// ── Rich visual components per solution ───────────────────────────────────────

function CrmVisual() {
  const c = ACCENT.crm;
  const pipeline = [
    { label: "Active",   count: 48, pct: 100 },
    { label: "Review",   count: 31, pct: 65  },
    { label: "Testing",  count: 18, pct: 38  },
    { label: "Deployed", count: 9,  pct: 19  },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-1">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Total Deals", value: "$283K", delta: "+12%" },
          { label: "Win Rate",    value: "64%",   delta: "+4%"  },
          { label: "Active",      value: "31",    delta: "+7"   },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border/50 bg-background/60 px-2.5 py-2">
            <div className="text-[9px] text-muted-foreground">{s.label}</div>
            <div className="mt-0.5 text-[13px] font-bold text-foreground">{s.value}</div>
            <div className="text-[9px] font-semibold" style={{ color: c }}>{s.delta}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Pipeline</div>
        <div className="space-y-1.5">
          {pipeline.map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className="w-12 text-[9px] text-muted-foreground">{s.label}</div>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted/60">
                <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: c, opacity: 0.8 }} />
              </div>
              <div className="w-5 text-right text-[9px] font-bold text-foreground">{s.count}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Recent Deals</div>
        {[
          { i: "SM", name: "Sarah Mitchell", status: "Active",    val: "$24k" },
          { i: "JC", name: "James Chen",     status: "Follow Up", val: "$18k" },
          { i: "AP", name: "Aria Patel",     status: "Proposal",  val: "$41k" },
        ].map((c2) => (
          <div key={c2.name} className="flex items-center gap-2 mb-2 last:mb-0">
            <div className="h-6 w-6 shrink-0 flex items-center justify-center rounded-full bg-foreground/10 text-[8px] font-bold text-foreground">
              {c2.i}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[10px] font-semibold text-foreground">{c2.name}</div>
              <div className="text-[9px] text-muted-foreground">{c2.status}</div>
            </div>
            <div className="text-[10px] font-bold" style={{ color: c }}>{c2.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ErpVisual() {
  const c = ACCENT.erp;
  const modules = ["HR", "Finance", "Ops", "CRM", "Inventory", "Reports"];
  return (
    <div className="flex h-full flex-col gap-3 p-1">
      <div className="grid grid-cols-3 gap-2">
        {modules.map((m) => (
          <div key={m} className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/40 px-2.5 py-2">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
            <span className="text-[10px] font-semibold text-foreground">{m}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Real-Time Overview</div>
        {[
          { label: "Revenue",   val: "$1.2M", bar: 80 },
          { label: "Expenses",  val: "$420K", bar: 35 },
          { label: "Headcount", val: "148",   bar: 60 },
        ].map((r) => (
          <div key={r.label} className="mb-2 last:mb-0">
            <div className="mb-1 flex justify-between">
              <span className="text-[9px] text-muted-foreground">{r.label}</span>
              <span className="text-[9px] font-bold text-foreground">{r.val}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
              <div className="h-full rounded-full" style={{ width: `${r.bar}%`, background: c, opacity: 0.75 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadVisual() {
  const c = ACCENT.lead;
  const bars = [40, 65, 45, 90, 58, 78, 50, 85];
  const W = 200, H = 80;
  const linePts = bars.map((v, i) => {
    const x = (i / (bars.length - 1)) * W;
    const y = H - (v / 100) * H;
    return `${x},${y}`;
  });
  return (
    <div className="flex h-full flex-col gap-3 p-1">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Leads/Day", value: "124", delta: "+18%" },
          { label: "Qualified", value: "89%", delta: "+6%"  },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border/50 bg-background/60 px-3 py-2">
            <div className="text-[9px] text-muted-foreground">{s.label}</div>
            <div className="text-[14px] font-bold text-foreground">{s.value}</div>
            <div className="text-[9px] font-semibold" style={{ color: c }}>{s.delta}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Lead Volume Trend</div>
        <div className="relative" style={{ height: H }}>
          <div className="flex h-full items-end gap-1">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col justify-end">
                <div className="w-full rounded-t-sm bg-foreground/10" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full pointer-events-none">
            <polyline
              points={linePts.join(" ")}
              fill="none"
              stroke={c}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.9}
            />
            {linePts.map((p, i) => {
              const [x, y] = p.split(",").map(Number);
              return <circle key={i} cx={x} cy={y} r="2.5" fill={c} />;
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

function InventoryVisual() {
  const c = ACCENT.inventory;
  const items = [
    { name: "Product A", stock: 240, status: "OK",  pct: 80 },
    { name: "Product B", stock: 18,  status: "Low", pct: 15 },
    { name: "Product C", stock: 512, status: "OK",  pct: 95 },
    { name: "Product D", stock: 35,  status: "Low", pct: 22 },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-1">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border/50 bg-background/60 px-3 py-2">
          <div className="text-[9px] text-muted-foreground">Total SKUs</div>
          <div className="text-[14px] font-bold text-foreground">1,248</div>
          <div className="text-[9px] font-semibold" style={{ color: c }}>In Stock</div>
        </div>
        <div className="rounded-lg border border-border/50 bg-background/60 px-3 py-2">
          <div className="text-[9px] text-muted-foreground">Alerts</div>
          <div className="text-[14px] font-bold text-foreground">4</div>
          <div className="text-[9px] font-semibold text-muted-foreground">Low Stock</div>
        </div>
      </div>
      <div className="flex-1 rounded-lg border border-border/50 bg-background/40 overflow-hidden">
        <div className="border-b border-border/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
          Inventory Status
        </div>
        {items.map((item) => (
          <div key={item.name} className="flex items-center gap-3 border-b border-border/30 px-3 py-2 last:border-0">
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-semibold text-foreground">{item.name}</div>
              <div className="mt-0.5 h-1 w-full overflow-hidden rounded-full bg-muted/60">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: c, opacity: 0.8 }} />
              </div>
            </div>
            <div className="text-[10px] font-bold text-foreground">{item.stock}</div>
            <div
              className="shrink-0 rounded-full border px-1.5 py-0.5 text-[8px] font-bold"
              style={
                item.status === "OK"
                  ? { borderColor: `${c}40`, color: c }
                  : { borderColor: "rgba(249,115,22,0.4)", color: "#f97316" }
              }
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManufacturingVisual() {
  const c = ACCENT.manufacturing;
  return (
    <div className="flex h-full flex-col gap-3 p-1">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "OEE",    value: "78%", delta: "+3%" },
          { label: "Output", value: "2.4K",delta: "+9%" },
          { label: "Defect", value: "0.4%",delta: "-12%"},
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border/50 bg-background/60 px-2 py-2">
            <div className="text-[9px] text-muted-foreground">{s.label}</div>
            <div className="text-[13px] font-bold text-foreground">{s.value}</div>
            <div className="text-[9px] font-semibold" style={{ color: c }}>{s.delta}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg border border-border/50 bg-background/40 p-3 flex items-center gap-5">
        {/* OEE Gauge */}
        <div className="relative flex-shrink-0">
          <svg viewBox="0 0 80 80" width={80} height={80}>
            <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="8" />
            <circle
              cx="40" cy="40" r="32"
              fill="none"
              stroke={c}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(78 / 100) * 2 * Math.PI * 32} ${2 * Math.PI * 32}`}
              transform="rotate(-90 40 40)"
              opacity={0.8}
            />
            <text x="40" y="44" textAnchor="middle" className="text-[11px] font-bold" fill="currentColor" fontSize="11">78%</text>
          </svg>
        </div>
        <div className="flex-1 space-y-2">
          {[
            { label: "Production Schedule", pct: 92 },
            { label: "Machine Uptime",       pct: 88 },
            { label: "Quality Pass Rate",    pct: 99 },
          ].map((r) => (
            <div key={r.label}>
              <div className="mb-0.5 flex justify-between">
                <span className="text-[9px] text-muted-foreground">{r.label}</span>
                <span className="text-[9px] font-bold text-foreground">{r.pct}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/60">
                <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: c, opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardsVisual() {
  const c = ACCENT.dashboards;
  const bars = [30, 50, 80, 40, 65, 90, 55];
  const W = 200, H = 60;
  const lineVals = [35, 55, 78, 42, 68, 88, 58];
  const linePts = lineVals.map((v, i) => {
    const x = (i / (lineVals.length - 1)) * W;
    const y = H - (v / 100) * H;
    return `${x},${y}`;
  });
  return (
    <div className="flex h-full flex-col gap-3 p-1">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Revenue",  value: "$4.8M", delta: "+22%" },
          { label: "Users",    value: "12.4K", delta: "+38%" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border/50 bg-background/60 px-3 py-2">
            <div className="text-[9px] text-muted-foreground">{s.label}</div>
            <div className="text-[14px] font-bold text-foreground">{s.value}</div>
            <div className="text-[9px] font-semibold" style={{ color: c }}>{s.delta}</div>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg border border-border/50 bg-background/40 p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Performance</div>
          <BarChart3 className="h-3 w-3 text-muted-foreground" />
        </div>
        <div className="relative" style={{ height: H }}>
          <div className="flex h-full items-end gap-1">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col justify-end">
                <div className="w-full rounded-t-sm bg-foreground/10" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full pointer-events-none">
            <polyline
              points={linePts.join(" ")}
              fill="none"
              stroke={c}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.9}
            />
            {linePts.map((p, i) => {
              const [x, y] = p.split(",").map(Number);
              return <circle key={i} cx={x} cy={y} r="2" fill={c} />;
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Solution Data ────────────────────────────────────────────────────────────

const SOLUTIONS = [
  {
    id: "crm",
    title: "CRM Systems",
    icon: Users,
    tag: "Sales & Pipeline",
    desc: "Custom Customer Relationship Management systems built exactly for your sales pipeline — not a one-size-fits-all tool.",
    impact: "Close more deals, eliminate lost leads, and give your team full pipeline visibility from prospect to payment.",
    benefits: ["Custom Sales Pipelines", "Automated Outreach", "Performance Tracking"],
    visual: <CrmVisual />,
  },
  {
    id: "erp",
    title: "ERP Systems",
    icon: Database,
    tag: "Operations",
    desc: "Enterprise Resource Planning software that unites HR, finance, operations and logistics in one unified hub.",
    impact: "Reduce operational overhead and gain a single source of truth across your entire business.",
    benefits: ["Unified Database", "Real-Time Reporting", "Department Integration"],
    visual: <ErpVisual />,
  },
  {
    id: "lead",
    title: "Lead Management",
    icon: Target,
    tag: "Growth",
    desc: "Intelligent lead scoring and distribution platforms for high-volume sales teams handling thousands of daily inquiries.",
    impact: "Prioritize high-value prospects and route leads to the right agents in seconds — not hours.",
    benefits: ["Automated Lead Scoring", "Smart Routing", "Multi-channel Intake"],
    visual: <LeadVisual />,
  },
  {
    id: "inventory",
    title: "Inventory Management",
    icon: Package,
    tag: "Commerce",
    desc: "Real-time stock tracking and order fulfillment systems for growing commerce businesses.",
    impact: "Prevent stockouts, reduce carrying costs, and automate purchase orders before you run low.",
    benefits: ["Barcode Scanning", "Low Stock Alerts", "Supplier Portal"],
    visual: <InventoryVisual />,
  },
  {
    id: "manufacturing",
    title: "Manufacturing Software",
    icon: Factory,
    tag: "Industry",
    desc: "Production tracking and quality control systems for modern factory floors and industrial operations.",
    impact: "Increase yield, track raw materials, and monitor machine performance in real time.",
    benefits: ["Production Scheduling", "Quality Checklists", "Machine Integration"],
    visual: <ManufacturingVisual />,
  },
  {
    id: "dashboards",
    title: "Custom Dashboards",
    icon: LayoutDashboard,
    tag: "Intelligence",
    desc: "Executive business intelligence dashboards compiling live data from multiple sources into one command center.",
    impact: "Make confident, data-driven decisions with real-time KPIs built for your specific business goals.",
    benefits: ["Data Visualization", "Custom Reports", "Automated Exports"],
    visual: <DashboardsVisual />,
  },
] as const;

// ── Solutions Section ────────────────────────────────────────────────────────

export function SolutionsSection() {
  const { ref, isInView } = useInView(0.05);
  const [activeId, setActiveId] = useState<string>(SOLUTIONS[0].id);
  const activeTab = SOLUTIONS.find((s) => s.id === activeId) ?? SOLUTIONS[0];

  return (
    <section id="solutions" className="relative overflow-hidden py-16 lg:py-24">
      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              Core Capabilities
            </div>
            <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[44px]">
              Solutions We{" "}
              <span className="text-foreground/50">Build & Scale</span>
            </h2>
            <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              We engineer scalable platforms tailored to your specific industry requirements — from manufacturing floors to global sales teams.
            </p>
          </motion.div>

          {/* ── Tab pills ──────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap justify-center gap-2">
            {SOLUTIONS.map((s) => {
              const isActive = activeId === s.id;
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-semibold transition-all duration-200",
                    isActive
                      ? "border-foreground/30 bg-foreground text-background shadow-sm"
                      : "border-border/50 bg-background text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {s.title}
                </button>
              );
            })}
          </motion.div>

          {/* ── Main content: 2-column layout ──────────────────────── */}
          <motion.div variants={fadeUp}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="grid grid-cols-1 gap-4 lg:grid-cols-12"
              >
                {/* ── Left: Info panel ───────────────────────────── */}
                <div className="flex flex-col gap-4 lg:col-span-5">

                  {/* Identity card */}
                  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-background p-7">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                    <div className="mb-5 flex items-center gap-3">
                      {/* Icon with accent dot */}
                      <div className="relative">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-foreground/5">
                          <activeTab.icon className="h-5 w-5 text-foreground/70" />
                        </div>
                        <span
                          className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-background"
                          style={{ background: ACCENT[activeTab.id as keyof typeof ACCENT] }}
                        />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                          {activeTab.tag}
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground">
                          {activeTab.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-5 text-[14px] leading-relaxed text-muted-foreground">
                      {activeTab.desc}
                    </p>

                    {/* Impact callout */}
                    <div className="rounded-xl border border-border/40 bg-foreground/[0.02] px-4 py-3.5">
                      <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/50">
                        Business Impact
                      </div>
                      <div className="text-[13px] leading-relaxed text-muted-foreground">
                        {activeTab.impact}
                      </div>
                    </div>
                  </div>

                  {/* Features card */}
                  <div className="rounded-2xl border border-border/50 bg-background p-6">
                    <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Key Features
                    </div>
                    <ul className="space-y-3">
                      {activeTab.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-3">
                          <div
                            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                            style={{ background: `${ACCENT[activeTab.id as keyof typeof ACCENT]}18` }}
                          >
                            <CheckCircle2
                              className="h-3 w-3"
                              style={{ color: ACCENT[activeTab.id as keyof typeof ACCENT] }}
                            />
                          </div>
                          <span className="text-[13px] font-medium text-foreground">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center gap-2 text-[12px] font-semibold text-muted-foreground">
                      <ArrowRight className="h-3.5 w-3.5" />
                      Built custom for your business
                    </div>
                  </div>

                </div>

                {/* ── Right: Visual preview (tall) ───────────────── */}
                <div className="lg:col-span-7">
                  <div className="relative h-full min-h-[440px] overflow-hidden rounded-2xl border border-border/50 bg-background">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

                    {/* Mock app header bar */}
                    <div className="flex items-center gap-2 border-b border-border/40 bg-muted/10 px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-foreground/15" />
                        <div className="h-2 w-2 rounded-full bg-foreground/15" />
                        <div className="h-2 w-2 rounded-full bg-foreground/15" />
                      </div>
                      <div className="ml-2 flex h-5 flex-1 items-center rounded border border-border/40 bg-background/60 px-2">
                        <span className="text-[9px] text-muted-foreground">nexynstudios.com / {activeTab.id}</span>
                      </div>
                      <div
                        className="rounded-full border px-2 py-0.5 text-[9px] font-bold"
                        style={{
                          borderColor: `${ACCENT[activeTab.id as keyof typeof ACCENT]}40`,
                          color: ACCENT[activeTab.id as keyof typeof ACCENT],
                        }}
                      >
                        LIVE
                      </div>
                    </div>

                    {/* Visual content */}
                    <div className="flex h-[calc(100%-44px)] flex-col bg-muted/[0.02] p-4">
                      {activeTab.visual}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Solution count + CTA strip ─────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/50 bg-background/30 px-6 py-4 sm:flex-row"
          >
            <div className="flex items-center gap-3 text-[13px] text-muted-foreground">
              <Activity className="h-4 w-4" />
              <span>
                <span className="font-bold text-foreground">{SOLUTIONS.length} core solutions</span>{" "}
                — each built from scratch for your exact requirements.
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-[13px] font-semibold text-background transition-opacity hover:opacity-85"
            >
              Discuss Your Solution
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
