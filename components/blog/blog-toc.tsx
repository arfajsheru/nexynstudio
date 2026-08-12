"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface BlogTableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function BlogTableOfContents({ items, className }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  if (!items.length) return null;

  return (
    <nav aria-label="Table of contents" className={className}>
      {/* Mobile Collapsible View */}
      <div className="block lg:hidden w-full mb-6 rounded-xl border border-border/50 bg-foreground/[0.02] p-4 backdrop-blur-md">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-wider text-foreground"
        >
          <span className="flex items-center gap-2">
            <List className="h-4 w-4 text-muted-foreground" />
            Table of Contents ({items.length})
          </span>
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpenMobile && "rotate-180")} />
        </button>

        {isOpenMobile && (
          <ul className="mt-4 flex flex-col gap-2 border-t border-border/30 pt-3">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={cn(
                    "block py-1.5 text-xs transition-colors duration-150",
                    item.level === 3 ? "pl-4 text-[11px]" : "pl-1 font-medium",
                    activeId === item.id
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Sticky View */}
      <div className="hidden lg:block sticky top-28 rounded-2xl border border-border/40 bg-foreground/[0.01] p-6 backdrop-blur-md">
        <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground">
          <List className="h-3.5 w-3.5 text-muted-foreground" />
          <span>On This Page</span>
        </div>

        <ul className="flex flex-col gap-2.5 text-xs">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={cn(
                    "group relative block py-1 transition-all duration-200",
                    item.level === 3 ? "pl-5 text-[11px]" : "pl-3 font-medium",
                    isActive
                      ? "font-bold text-foreground"
                      : "text-muted-foreground/75 hover:text-foreground"
                  )}
                >
                  {/* Active Indicator Line */}
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 -translate-y-1/2 h-3.5 w-0.5 rounded-full transition-all duration-200",
                      isActive ? "bg-foreground opacity-100" : "bg-transparent opacity-0 group-hover:bg-muted-foreground/40 group-hover:opacity-100"
                    )}
                  />
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
