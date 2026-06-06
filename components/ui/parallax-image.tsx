"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, className, imageClassName, speed = 0.5 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate the parallax offset
  // A positive speed means the image moves down as you scroll down
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={containerRef}
      className={cn("group relative overflow-hidden bg-muted/20", className)}
    >
      <motion.div
        className="absolute inset-0 h-[130%] w-full"
        style={{ y }}
      >
        <img
          src={src}
          alt={alt}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            imageClassName
          )}
        />
      </motion.div>
      {/* Subtle overlay for better text contrast if text is placed on top */}
      <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-background/20 dark:mix-blend-overlay" />
    </div>
  );
}
