"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ScreenshotGalleryProps {
  images: string[];
  projectName: string;
  aspectRatio?: "portrait" | "landscape";
}

export function ScreenshotGallery({ images, projectName, aspectRatio = "landscape" }: ScreenshotGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isPortrait = aspectRatio === "portrait";

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  // Keyboard navigation
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (!lightboxOpen) return;
    if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % images.length);
    if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + images.length) % images.length);
    if (e.key === "Escape") setLightboxOpen(false);
  }, [lightboxOpen, images.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const openAt = (idx: number) => {
    setActiveIndex(idx);
    setLightboxOpen(true);
  };

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <>
      {/* ── Screenshots Trigger Card ────────────────────────────── */}
      <div className="overflow-hidden rounded-3xl border border-border/60 bg-foreground/[0.06]">

        {/* Top bar: label + count + button */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground/10">
              <Eye className="h-4 w-4 text-foreground/70" />
            </div>
            <div>
              <p className="text-[15px] font-bold leading-tight text-foreground">All Screenshots</p>
              <p className="text-[11px] text-muted-foreground">{images.length} screens captured</p>
            </div>
          </div>

          <button
            onClick={() => openAt(0)}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-[13px] font-semibold text-background hover:opacity-85 transition-all duration-200 active:scale-95 shadow-md"
          >
            <Eye className="h-4 w-4" />
            View All {images.length}
          </button>
        </div>

        {/* Horizontal filmstrip — scrollable, each thumbnail clickable */}
        <div className="flex gap-3 overflow-x-auto px-6 pb-6 scrollbar-hide">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => openAt(idx)}
              className={cn(
                "group relative shrink-0 overflow-hidden rounded-xl border border-border/40 bg-muted/10 transition-all duration-300 hover:border-foreground/30 hover:shadow-xl hover:shadow-black/20 hover:scale-[1.03] focus:outline-none",
                isPortrait ? "h-64 w-[144px]" : "h-32 w-52"
              )}
            >
              <img
                src={src}
                alt={`${projectName} screenshot ${idx + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <Eye className="h-4 w-4 text-black" />
                </div>
              </div>
              {/* Index badge */}
              <div className="absolute bottom-2 right-2 rounded-md bg-black/60 backdrop-blur-sm px-1.5 py-0.5 text-[10px] font-bold text-white/90">
                {idx + 1}
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* ── Lightbox ───────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md"
              onClick={() => setLightboxOpen(false)}
            />

            {/* Modal shell */}
            <motion.div
              key="lightbox"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.05 }}
              className="fixed inset-0 z-[201] flex flex-col items-center justify-center p-4 sm:p-8 pointer-events-none"
            >
              {/* Counter + Title */}
              <div className="pointer-events-auto mb-4 flex items-center gap-3 text-white/60">
                <Eye className="h-4 w-4" />
                <span className="text-[13px] font-semibold">
                  {projectName}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span className="text-[13px] font-semibold tabular-nums">
                  {activeIndex + 1} <span className="text-white/30">/</span> {images.length}
                </span>
              </div>

              {/* Image + side nav area */}
              <div className={cn(
                "pointer-events-auto flex items-center gap-3 sm:gap-5 w-full",
                isPortrait ? "max-w-xl justify-center" : "max-w-6xl"
              )}>
                {/* Prev arrow */}
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="shrink-0 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 transition-all duration-200 active:scale-95"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Image container */}
                <div className={cn(
                  "relative flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/50",
                  isPortrait ? "max-w-[340px] aspect-[9/19.5] h-[65vh]" : ""
                )}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={images[activeIndex]}
                      alt={`${projectName} screenshot ${activeIndex + 1}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className={cn(
                        "w-full h-full",
                        isPortrait ? "object-cover" : "max-h-[70vh] object-contain"
                      )}
                      draggable={false}
                    />
                  </AnimatePresence>
                </div>

                {/* Next arrow */}
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="shrink-0 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 transition-all duration-200 active:scale-95"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="pointer-events-auto mt-5 flex items-center gap-2 overflow-x-auto max-w-full px-2 scrollbar-hide">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "relative shrink-0 overflow-hidden rounded-lg border transition-all duration-200",
                      isPortrait ? "h-16 w-9" : "h-12 w-20",
                      i === activeIndex
                        ? "border-white/80 scale-105 shadow-lg"
                        : "border-white/20 opacity-50 hover:opacity-80 hover:border-white/40"
                    )}
                  >
                    <img
                      src={src}
                      alt={`Thumb ${i + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>

              {/* Keyboard hint */}
              <div className="pointer-events-none mt-4 flex items-center gap-3 text-white/30">
                <span className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] font-mono">←</span>
                <span className="text-[11px]">Navigate</span>
                <span className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] font-mono">→</span>
                <span className="mx-1 h-3 w-px bg-white/20" />
                <span className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] font-mono">Esc</span>
                <span className="text-[11px]">Close</span>
              </div>
            </motion.div>

            {/* Close button (top right) */}
            <motion.button
              key="close"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setLightboxOpen(false)}
              className="fixed top-5 right-5 z-[202] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/25 transition-all duration-200 active:scale-95"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
