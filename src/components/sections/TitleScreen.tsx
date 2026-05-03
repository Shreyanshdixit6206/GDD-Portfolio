"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8 + i * 0.05,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
});

export default function TitleScreen() {
  const name = "SHREYANSH DIXIT";

  const scrollToIndex = () => {
    document.getElementById("index")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="title"
      className="relative min-h-[100dvh] flex flex-col justify-between px-6 md:px-8 py-8 overflow-hidden"
    >
      {/* Top metadata */}
      <motion.div
        className="flex justify-between items-start max-w-5xl mx-auto w-full"
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="visible"
      >
        <div>
          <span className="mono-label block">DOCUMENT_TYPE</span>
          <span className="font-mono text-xs text-[var(--color-text)] mt-1 block">
            Game Design Document
          </span>
        </div>
        <div className="text-right">
          <span className="mono-label block">VERSION</span>
          <span className="font-mono text-xs text-[var(--color-text)] mt-1 block">
            1.0.0
          </span>
        </div>
      </motion.div>

      {/* Center — Name & Subtitle */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full">
        {/* Classification tag */}
        <motion.span
          className="mono-tag mb-8"
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
        >
          CONFIDENTIAL — FOR REVIEW ONLY
        </motion.span>

        {/* Name — staggered letter animation */}
        <h1 className="sr-only">Shreyansh Dixit</h1>
        <div
          className="flex flex-wrap justify-center gap-x-[2px] md:gap-x-1"
          aria-hidden="true"
        >
          {name.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={`font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight ${
                letter === " " ? "w-3 md:w-6" : ""
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Subtitle — typewriter */}
        <motion.p
          className="font-mono text-sm md:text-base text-[var(--color-text-secondary)] mt-6 tracking-wider"
          variants={fadeUp(1.6)}
          initial="hidden"
          animate="visible"
        >
          Game Designer · System Builder · Product Thinker
        </motion.p>

        {/* Right sidebar metadata */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10"
          variants={fadeUp(1.9)}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center">
            <span className="mono-label block">PLAYER_ID</span>
            <span className="font-mono text-xs text-[var(--color-text)] mt-1 block">
              SD-2003
            </span>
          </div>
          <div className="text-center">
            <span className="mono-label block">STUDIO</span>
            <span className="font-mono text-xs text-[var(--color-text)] mt-1 block">
              Independent
            </span>
          </div>
          <div className="text-center">
            <span className="mono-label block">STATUS</span>
            <span className="font-mono text-xs text-[var(--color-accent)] mt-1 block">
              ● ACTIVE
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4"
          variants={fadeUp(2.2)}
          initial="hidden"
          animate="visible"
        >
          <button
            onClick={scrollToIndex}
            className="font-mono text-sm tracking-wider px-8 py-3 border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors duration-300 cursor-pointer"
          >
            [ READ DOCUMENT ]
          </button>
          <button
            onClick={scrollToContact}
            className="font-mono text-sm tracking-wider px-8 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 cursor-pointer"
          >
            [ CONTACT DESIGNER ]
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex flex-col items-center gap-2 max-w-5xl mx-auto w-full"
        variants={fadeUp(2.6)}
        initial="hidden"
        animate="visible"
      >
        <span className="mono-label">Scroll to begin</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[var(--color-text-secondary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
