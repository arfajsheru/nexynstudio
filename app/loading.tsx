"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="relative flex flex-col items-center justify-center gap-8">
        <motion.div
          className="relative h-20 w-20 overflow-hidden rounded-full border border-foreground/20 bg-background/50 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-foreground"
            initial={{ y: "100%" }}
            animate={{ y: ["100%", "0%", "-100%"] }}
            transition={{
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1], // Smooth cubic-bezier ease
              repeat: Infinity,
            }}
          />
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-1 text-xs font-bold tracking-[0.3em] text-foreground uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>Loading</span>
          <span className="flex">
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>.</motion.span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>.</motion.span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
