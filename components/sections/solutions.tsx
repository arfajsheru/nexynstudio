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
  Lock,
} from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ── Per-solution accent colours ───────────────────────────────────────────────
// Used ONLY on micro-elements (icon dot, chart line, stat delta)
// — everything else stays on-theme black/white.
const ACCENT = {
  crm: "#6366f1",
  erp: "#a855f7",
  lead: "#f97316",
  inventory: "#10b981",
  manufacturing: "#3b82f6",
  dashboards: "#06b6d4",
} as const;

// ── Rich visual components per solution ───────────────────────────────────────

function CrmVisual() {
  const c = ACCENT.crm;
  const pipeline = [
    { label: "Active", count: 48, pct: 100 },
    { label: "Review", count: 31, pct: 65 },
    { label: "Testing", count: 18, pct: 38 },
    { label: "Deployed", count: 9, pct: 19 },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-1">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Total Deals", value: "$283K", delta: "+12%" },
          { label: "Win Rate", value: "64%", delta: "+4%" },
          { label: "Active", value: "31", delta: "+7" },
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
          { i: "SM", name: "Sarah Mitchell", status: "Active", val: "$24k" },
          { i: "JC", name: "James Chen", status: "Follow Up", val: "$18k" },
          { i: "AP", name: "Aria Patel", status: "Proposal", val: "$41k" },
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
          { label: "Revenue", val: "$1.2M", bar: 80 },
          { label: "Expenses", val: "$420K", bar: 35 },
          { label: "Headcount", val: "148", bar: 60 },
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
          { label: "Qualified", value: "89%", delta: "+6%" },
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
    { name: "Product A", stock: 240, status: "OK", pct: 80 },
    { name: "Product B", stock: 18, status: "Low", pct: 15 },
    { name: "Product C", stock: 512, status: "OK", pct: 95 },
    { name: "Product D", stock: 35, status: "Low", pct: 22 },
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
          { label: "OEE", value: "78%", delta: "+3%" },
          { label: "Output", value: "2.4K", delta: "+9%" },
          { label: "Defect", value: "0.4%", delta: "-12%" },
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
            { label: "Machine Uptime", pct: 88 },
            { label: "Quality Pass Rate", pct: 99 },
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
          { label: "Revenue", value: "$4.8M", delta: "+22%" },
          { label: "Users", value: "12.4K", delta: "+38%" },
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
  const [activeId, setActiveId] = useState<string>(SOLUTIONS[0].id);
  const activeTab = SOLUTIONS.find((s) => s.id === activeId) ?? SOLUTIONS[0];

  return (
    <section id="solutions" className="relative overflow-hidden py-24 lg:py-32">
      {/* Dynamic Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30 z-0">
        <div
          className="w-[800px] h-[800px] rounded-full blur-[120px] transition-colors duration-1000 ease-in-out"
          style={{ background: `radial-gradient(circle, ${ACCENT[activeTab.id as keyof typeof ACCENT]}30 0%, transparent 70%)` }}
        />
      </div>

      <div className={cn("relative z-10 mx-auto w-full", LAYOUT.maxWidth, LAYOUT.paddingX)}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {/* ── Header ─────────────────────────────────────────────── */}
          <motion.div variants={fadeUp} className="mb-16 md:mb-24 md:text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-foreground/40" />
              Core Capabilities
            </div>
            <h2 className="mx-auto mb-5 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
              Solutions We{" "}
              <span className="text-foreground/50">Build & Scale</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
              We engineer premium, scalable platforms tailored exactly to your industry requirements — transforming how your team operates.
            </p>
          </motion.div>

          {/* ── Split Layout: Vertical Accordion Tabs & Sticky Showcase ── */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">

            {/* Left: Vertical Interactive Tabs (lg:col-span-5) */}
            <div className="flex flex-col lg:col-span-5 w-full order-2 lg:order-1 relative z-20">
              <div className="flex flex-col space-y-2">
                {SOLUTIONS.map((s) => {
                  const isActive = activeId === s.id;
                  const Icon = s.icon;
                  const accentColor = ACCENT[s.id as keyof typeof ACCENT];

                  return (
                    <div
                      key={s.id}
                      className={cn(
                        "group relative rounded-2xl border transition-all duration-300",
                        isActive
                          ? "bg-background/80 border-border/60 shadow-lg backdrop-blur-xl"
                          : "border-transparent bg-transparent hover:bg-background/40"
                      )}
                    >
                      <button
                        onClick={() => setActiveId(s.id)}
                        className="flex w-full items-center gap-4 px-5 py-5 text-left focus:outline-none"
                      >
                        <div className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                          isActive ? "bg-foreground/5" : "bg-muted/50 group-hover:bg-muted/80"
                        )}>
                          <Icon
                            className={cn("h-6 w-6 transition-colors duration-300", isActive ? "text-foreground" : "text-muted-foreground")}
                            style={isActive ? { color: accentColor } : {}}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-1">
                            {s.tag}
                          </div>
                          <h3 className={cn(
                            "text-lg font-bold tracking-tight transition-colors duration-300",
                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                          )}>
                            {s.title}
                          </h3>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-6 pt-1">
                              <p className="mb-5 text-[14px] leading-relaxed text-muted-foreground">
                                {s.desc}
                              </p>
                              <div className="rounded-xl border border-border/40 bg-foreground/[0.02] px-4 py-3.5 mb-5">
                                <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.12em] text-foreground/50">
                                  Business Impact
                                </div>
                                <div className="text-[13px] leading-relaxed text-muted-foreground">
                                  {s.impact}
                                </div>
                              </div>
                              <ul className="space-y-3">
                                {s.benefits.map((b) => (
                                  <li key={b} className="flex items-center gap-3">
                                    <div
                                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                      style={{ background: `${accentColor}18` }}
                                    >
                                      <CheckCircle2
                                        className="h-3 w-3"
                                        style={{ color: accentColor }}
                                      />
                                    </div>
                                    <span className="text-[13px] font-medium text-foreground">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex items-center gap-4 rounded-2xl border border-border/50 bg-background/50 p-5 backdrop-blur-md"
              >
                <div className="flex-1 text-[13px] text-muted-foreground">
                  <span className="font-bold text-foreground">Ready to scale?</span> We build tailored solutions that fit your exact workflow.
                </div>
                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-[12px] font-semibold text-background transition-opacity hover:opacity-85"
                >
                  Discuss Project
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            </div>

            {/* Right: Sticky Visual Showcase (lg:col-span-7) */}
            <div className="lg:col-span-7 lg:sticky lg:top-32 order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[600px] rounded-3xl border border-border/40 bg-background/30 p-2 md:p-3 shadow-2xl backdrop-blur-xl">

                {/* Glow behind the mockup */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[80px] rounded-full transition-colors duration-700 pointer-events-none"
                  style={{ background: ACCENT[activeTab.id as keyof typeof ACCENT], opacity: 0.15 }}
                />

                {/* Mockup Frame */}
                <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-border/50 bg-background/80 shadow-inner flex flex-col">
                  {/* Mock browser header */}
                  <div className="flex items-center gap-2 border-b border-border/30 bg-muted/20 px-4 py-3 backdrop-blur-md">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <div className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                    </div>
                    <div className="ml-3 flex h-6 flex-1 items-center justify-center rounded-md border border-border/30 bg-background/50 px-3 max-w-[200px] mx-auto shadow-sm">
                      <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1.5">
                        <Lock className="h-2.5 w-2.5 opacity-50" />
                        nexynstudios.com / {activeTab.id}
                      </span>
                    </div>
                    <div className="w-12" /> {/* Spacer to balance flex */}
                  </div>

                  {/* Inner Content with Animation */}
                  <div className="relative flex-1 bg-muted/[0.03] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeId}
                        initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute inset-0 p-4 md:p-6"
                      >
                        {/* Floating wrapper for the visual */}
                        <motion.div
                          className="h-full w-full rounded-xl border border-border/30 bg-background shadow-lg overflow-hidden"
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {activeTab.visual}
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

