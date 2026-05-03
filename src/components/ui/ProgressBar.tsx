"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(Math.min(percentage, 100));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      {/* Vertical bar — Desktop */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
        <span
          className="font-mono text-[9px] tracking-[0.2em] text-[var(--color-text-secondary)] uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Progress
        </span>
        <div className="w-[2px] h-32 bg-[var(--color-border)] rounded-full overflow-hidden relative">
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-[var(--color-accent)] rounded-full"
            style={{ height: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        <span className="font-mono text-[9px] text-[var(--color-text-secondary)]">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Horizontal bar — Top (mobile + all) */}
      <div className="fixed top-14 left-0 right-0 z-40 h-[2px] bg-[var(--color-border)] lg:hidden">
        <motion.div
          className="h-full bg-[var(--color-accent)]"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </>
  );
}
