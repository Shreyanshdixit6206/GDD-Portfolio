"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

interface Mechanic {
  name: string;
  proficiency: number; // out of 5
  category: "design" | "build";
}

const mechanics: Mechanic[] = [
  { name: "System Thinking", proficiency: 5, category: "design" },
  { name: "UI/UX Design", proficiency: 4, category: "design" },
  { name: "Product Thinking", proficiency: 4, category: "design" },
  { name: "Game Sense & Player Understanding", proficiency: 5, category: "design" },
  { name: "Execution & Delivery", proficiency: 5, category: "build" },
  { name: "Adaptability in Chaos", proficiency: 5, category: "build" },
  { name: "Practical Communication", proficiency: 4, category: "build" },
  { name: "Vibe Coding (AI Orchestration)", proficiency: 4, category: "build" },
];

function ProficiencyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-2 h-2 rounded-full ${
            i < level
              ? "bg-[var(--color-accent)]"
              : "bg-[var(--color-border)]"
          }`}
        />
      ))}
    </div>
  );
}

export default function CoreMechanics() {
  const designMechanics = mechanics.filter((m) => m.category === "design");
  const buildMechanics = mechanics.filter((m) => m.category === "build");

  return (
    <SectionWrapper
      id="core-mechanics"
      sectionNumber="03"
      title="Core Mechanics"
      subtitle="The skills and tools that define the gameplay."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        {/* Design Mechanics */}
        <motion.div variants={itemVariants}>
          <span className="mono-tag mb-6 block w-fit">DESIGN_TREE</span>
          <div className="space-y-4">
            {designMechanics.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between py-2 border-b border-[var(--color-border)]"
              >
                <span className="text-sm text-[var(--color-text)]">
                  {m.name}
                </span>
                <ProficiencyDots level={m.proficiency} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Build Mechanics */}
        <motion.div variants={itemVariants}>
          <span className="mono-tag mb-6 block w-fit">EXECUTION_TREE</span>
          <div className="space-y-4">
            {buildMechanics.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between py-2 border-b border-[var(--color-border)]"
              >
                <span className="text-sm text-[var(--color-text)]">
                  {m.name}
                </span>
                <ProficiencyDots level={m.proficiency} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bonus Mechanic */}
      <motion.div
        variants={itemVariants}
        className="mt-12 border border-dashed border-[var(--color-accent)] p-6 bg-[var(--color-card)]"
      >
        <span className="mono-label text-[var(--color-accent)] block mb-2">
          [BONUS_MECHANIC]
        </span>
        <h4 className="font-serif text-lg font-semibold mb-2">
          Cross-Disciplinary Thinking
        </h4>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          The rarest skill isn&apos;t in either tree — it&apos;s the ability to
          translate between them. I can sit in a design review AND a sprint
          planning meeting and speak both languages fluently. This is the
          mechanic that multiplies all others.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
