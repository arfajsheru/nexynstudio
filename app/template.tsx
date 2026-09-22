"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* The Loader Overlay that slides up */}
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
      >
        <div className="relative flex flex-col items-center justify-center gap-8">
          <div className="relative flex h-20 w-20 items-center justify-center">
            {/* Spinning Circle border */}
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-foreground"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner dot */}
            <motion.div 
              className="h-4 w-4 rounded-full bg-foreground"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          
          <div className="flex items-center gap-1 text-xs font-bold tracking-[0.3em] text-foreground uppercase">
            <span>Loading</span>
            <span className="flex">
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}>.</motion.span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* The Actual Page Content */}
      {children}
    </>
  );
}
