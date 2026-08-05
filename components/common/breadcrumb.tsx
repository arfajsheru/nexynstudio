import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

// ─── Breadcrumb Component ─────────────────────────────────────────────────────

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://nexynstudios.com${item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center", className)}
      >
        <ol
          className="flex flex-wrap items-center gap-1 text-[12px] font-medium text-muted-foreground"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={item.label}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isFirst && (
                  <Home
                    className="h-3 w-3 shrink-0 text-muted-foreground/60"
                    aria-hidden="true"
                  />
                )}
                {!isFirst && (
                  <ChevronRight
                    className="h-3 w-3 shrink-0 text-muted-foreground/30"
                    aria-hidden="true"
                  />
                )}

                {isLast || !item.href ? (
                  <span
                    aria-current="page"
                    className="text-foreground/80"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-foreground"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
