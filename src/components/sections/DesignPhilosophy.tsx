"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Users } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

const philosophies = [
  {
    icon: Lightbulb,
    title: "Rules Over Aesthetics",
    description:
      "I map out rules and mechanics before considering the surface. If the underlying logic and economy don't balance, no amount of polish will save the loop.",
  },
  {
    icon: Layers,
    title: "Low Floor, High Ceiling",
    description:
      "Core loops must be instantly readable but structurally deep. I reduce upfront cognitive load so players can focus on mastering the systemic complexity.",
  },
  {
    icon: Users,
    title: "Motivation Drives Mechanics",
    description:
      "Every feature must answer a specific player desire. If a mechanic doesn't feed directly back into the core feedback loop, it gets cut.",
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
          &ldquo;Good systems are invisible. The player shouldn&apos;t see the math—they should just feel the consequences.&rdquo;
        </p>
        <cite className="mono-label block mt-3 not-italic">
          — Design Principle #0
        </cite>
      </motion.blockquote>
    </SectionWrapper>
  );
}
