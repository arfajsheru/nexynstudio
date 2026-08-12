"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlogComparisonTableProps {
  title?: string;
  headers: string[];
  rows: (string | ReactNode)[][];
  className?: string;
}

export function BlogComparisonTable({ title, headers, rows, className }: BlogComparisonTableProps) {
  return (
    <div className={cn("my-8 w-full overflow-hidden rounded-2xl border border-border/50 bg-background shadow-md", className)}>
      {title && (
        <div className="border-b border-border/40 bg-foreground/[0.02] px-6 py-4">
          <h4 className="text-sm font-bold tracking-tight text-foreground">{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm text-muted-foreground">
          <thead>
            <tr className="border-b border-border/40 bg-foreground/[0.03] text-foreground font-semibold">
              {headers.map((header, idx) => (
                <th key={idx} className="p-4 border-r border-border/30 last:border-r-0 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {rows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="transition-colors duration-150 hover:bg-foreground/[0.015]"
              >
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={cn(
                      "p-4 border-r border-border/30 last:border-r-0 leading-normal",
                      cellIdx === 0 && "font-semibold text-foreground bg-foreground/[0.01]"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
