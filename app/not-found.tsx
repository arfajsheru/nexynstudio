import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "404 - Page Not Found | Nexyn Studios",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.03] blur-[100px]" />
      
      <div className={cn("relative z-10 flex flex-col items-center text-center", LAYOUT.paddingX)}>
        {/* Animated Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/40 bg-foreground/[0.02] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground/50" />
          Error 404
        </div>

        {/* Big Glitchy/Premium Title */}
        <h1 className="mb-6 text-[120px] font-black leading-none tracking-tighter text-foreground sm:text-[180px] lg:text-[220px]">
          404
        </h1>
        
        {/* Subtitle */}
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Page Not Found
        </h2>
        
        {/* Description */}
        <p className="mb-10 max-w-md text-muted-foreground leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-foreground/10 active:scale-95"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-8 text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted active:scale-95"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
