"use client";

import { motion } from "framer-motion";
import { Gamepad2, RefreshCcw, Sparkles, Coins } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";
import { concepts } from "@/data/concepts";

export default function GameConcepts() {
  const concept = concepts[0];

  return (
    <SectionWrapper
      id="game-concepts"
      sectionNumber="06"
      title="Game Concepts"
      subtitle="Original game designs — proof that I think in systems."
    >
      <motion.div
        variants={itemVariants}
        className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
      >
        {/* Header */}
        <div className="border-b border-[var(--color-border)] p-6 md:p-8">
          <div className="flex items-start justify-between">
            <div>
              <span className="mono-tag mb-3 inline-block">GAME_CONCEPT</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">
                {concept.title}
              </h3>
            </div>
            <Gamepad2
              size={28}
              className="text-[var(--color-accent)] shrink-0"
              strokeWidth={1.5}
            />
          </div>

          {/* Quick specs */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div>
              <span className="mono-label block">GENRE</span>
              <span className="text-sm text-[var(--color-text)] mt-1 block">
                {concept.genre}
              </span>
            </div>
            <div>
              <span className="mono-label block">PLATFORM</span>
              <span className="text-sm text-[var(--color-text)] mt-1 block">
                {concept.platform}
              </span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="mono-label block">TARGET</span>
              <span className="text-sm text-[var(--color-text)] mt-1 block">
                {concept.targetAudience}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Elevator pitch */}
          <div>
            <span className="mono-label text-[var(--color-accent)] block mb-2">
              ELEVATOR_PITCH
            </span>
            <p className="text-[var(--color-text)] leading-relaxed">
              {concept.elevator}
            </p>
          </div>

          {/* Core Loop */}
          <div>
            <span className="mono-label text-[var(--color-accent)] block mb-3">
              CORE_LOOP
            </span>
            <div className="space-y-2">
              {concept.coreLoop.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <RefreshCcw
                    size={12}
                    className="text-[var(--color-accent)] mt-1 shrink-0"
                  />
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Mechanic */}
          <div className="border border-dashed border-[var(--color-accent)] p-5 bg-[var(--color-bg)]">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">
                UNIQUE_MECHANIC
              </span>
            </div>
            <h4 className="font-serif text-base font-semibold mb-2">
              {concept.uniqueMechanic.name}
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {concept.uniqueMechanic.description}
            </p>
          </div>

          {/* Resources */}
          <div>
            <span className="mono-label block mb-3">
              <Coins size={12} className="inline mr-1" />
              RESOURCE_TYPES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {concept.resources.map((resource) => (
                <span
                  key={resource}
                  className="font-mono text-xs text-[var(--color-text-secondary)] p-2 border border-[var(--color-border)] bg-[var(--color-card)]"
                >
                  {resource}
                </span>
              ))}
            </div>
          </div>

          {/* Designer Note */}
          <blockquote className="border-l-2 border-[var(--color-accent)] pl-4">
            <span className="mono-label block mb-1">DESIGNER_NOTE</span>
            <p className="text-sm text-[var(--color-text)] italic leading-relaxed">
              {concept.designerNote}
            </p>
          </blockquote>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
