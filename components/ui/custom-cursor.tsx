"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Position coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for trailing circle
  const springConfig = { stiffness: 250, damping: 28, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices for accessibility
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Select elements to trigger cursor state change
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".interactive-card") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";

      if (isInteractive) {
        setIsHovered(true);
        // Custom text for special elements
        const customText = (target.closest("[data-cursor-text]") as HTMLElement)?.dataset.cursorText;
        if (customText) {
          setCursorText(customText);
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Add CSS rule globally so interactive elements don't show pointer cursor either
    const style = document.createElement("style");
    style.innerHTML = `
      a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Leading Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* 2. Trailing Spring Outer Circle */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-foreground/30 bg-foreground/[0.03] backdrop-blur-[1px] will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 44) : 24,
          height: isHovered ? (cursorText ? 80 : 44) : 24,
          borderColor: isHovered ? "rgba(255,255,255,0.6)" : "rgba(128,128,128,0.3)",
          backgroundColor: isHovered ? "rgba(255,255,255,0.06)" : "rgba(128,128,128,0.02)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-background mix-blend-difference">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
