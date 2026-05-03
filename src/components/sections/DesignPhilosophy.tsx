"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Users } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

const philosophies = [
  {
    icon: Lightbulb,
    title: "Systems Over Screens",
    description:
      "A beautiful screen is meaningless if the underlying system is broken. I design the rules of the game first — the UI is how players experience those rules.",
  },
  {
    icon: Layers,
    title: "Depth Through Simplicity",
    description:
      "The best game mechanics are learned in seconds and mastered over months. I apply the same principle to product design: reduce surface complexity, increase systemic depth.",
  },
  {
    icon: Users,
    title: "Player-Centric Always",
    description:
      "Every design decision must answer: 'Does this serve the player?' If the answer isn't immediate and obvious, the feature doesn't ship. Empathy is a game mechanic.",
  },
];

export default function DesignPhilosophy() {
  return (
    <SectionWrapper
      id="design-philosophy"
      sectionNumber="02"
      title="Design Philosophy"
      subtitle="The rules I design by — non-negotiable principles."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {philosophies.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="border border-[var(--color-border)] p-6 bg-[var(--color-card)] hover:border-[var(--color-accent)] transition-colors duration-300 group"
          >
            <item.icon
              size={20}
              className="text-[var(--color-accent)] mb-4"
              strokeWidth={1.5}
            />
            <h3 className="font-serif text-lg font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Pull quote */}
      <motion.blockquote
        variants={itemVariants}
        className="mt-14 border-l-2 border-[var(--color-accent)] pl-6 max-w-2xl"
      >
        <p className="font-serif text-xl md:text-2xl italic text-[var(--color-text)] leading-snug">
          &ldquo;Good game design is invisible. The player just feels like
          everything makes sense.&rdquo;
        </p>
        <cite className="mono-label block mt-3 not-italic">
          — Design Principle #0
        </cite>
      </motion.blockquote>
    </SectionWrapper>
  );
}
