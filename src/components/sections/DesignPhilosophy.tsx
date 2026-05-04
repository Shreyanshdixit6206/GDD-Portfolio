"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Users } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

const philosophies = [
  {
    icon: Lightbulb,
    title: "Systems Dictate Experience",
    description:
      "Aesthetic is secondary to architecture. I design systemic rules and mechanics first. The UI exists strictly to facilitate those rules with minimal friction.",
  },
  {
    icon: Layers,
    title: "Systemic Depth, Surface Simplicity",
    description:
      "Core loops should be immediately intuitive but offer scaling complexity. Ruthlessly eliminate surface-level cognitive load to maximize systemic engagement.",
  },
  {
    icon: Users,
    title: "Player Motivation as Core",
    description:
      "Design decisions must directly serve a specific player motivation. Features that do not drive the core feedback loop are immediately discarded.",
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
          &ldquo;Game design is the invisible architecture of motivation. The player should feel the system, not see it.&rdquo;
        </p>
        <cite className="mono-label block mt-3 not-italic">
          — Design Principle #0
        </cite>
      </motion.blockquote>
    </SectionWrapper>
  );
}
