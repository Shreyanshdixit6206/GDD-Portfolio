"use client";

import { motion } from "framer-motion";
import { GitMerge, Brain, Target, Layers, PlayCircle, Settings, Crosshair, AlertCircle, Lightbulb } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

export default function SpawnPointCaseStudy() {
  return (
    <SectionWrapper
      id="spawn-point"
      sectionNumber="04"
      title="Spawn Point"
      subtitle="Primary Case Study: Game Design Simulation"
    >
      <motion.div
        variants={itemVariants}
        className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
      >
        {/* Header */}
        <div className="border-b border-[var(--color-border)] p-6 md:p-8">
          <div className="flex items-start justify-between">
            <div>
              <span className="mono-tag mb-3 inline-block">SYSTEMIC_ROGUELIKE</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">
                Spawn Point
              </h3>
            </div>
            <GitMerge
              size={28}
              className="text-[var(--color-accent)] shrink-0"
              strokeWidth={1.5}
            />
          </div>
          <div className="mt-4">
            <span className="mono-label block">PROJECT_SCOPE</span>
            <span className="text-sm text-[var(--color-text)] mt-1 block">
              Roguelike Simulation / Game Design Strategy
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-10">
          
          {/* 1. GAME CONCEPT */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">01. GAME CONCEPT</span>
            </div>
            <p className="text-[var(--color-text)] leading-relaxed text-sm md:text-base">
              A systemic roguelike where the player acts as a junior designer at a failing studio. Players physically navigate a pixel-art office to accept broken "game briefs" and stabilize them using resource-constrained decision cards.
            </p>
          </section>

          {/* 2. CORE LOOP */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <PlayCircle size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">02. CORE LOOP</span>
            </div>
            <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)] mb-3">
              <p className="font-mono text-sm text-[var(--color-text)] text-center">
                Navigate Office → Accept Brief → Play Decision Cards → Simulate Outcome → Earn Meta-Currency
              </p>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              This loop physicalizes abstract design decisions. Moving through the office provides necessary cognitive breathing room between high-density logic puzzles, giving pacing and weight to the decision-making process.
            </p>
          </section>

          {/* 3. DESIGN INTENT */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Target size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">03. DESIGN INTENT</span>
            </div>
            <p className="text-[var(--color-text)] leading-relaxed text-sm">
              The intent is to simulate the tension of real-world game development—balancing ideal design against harsh operational constraints. It targets strategic resource management, forcing players to understand systemic trade-offs (e.g., sacrificing short-term monetization to stabilize long-term retention).
            </p>
          </section>

          {/* 4. CORE SYSTEMS BREAKDOWN */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Layers size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">04. CORE SYSTEMS BREAKDOWN</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-[var(--color-border)] p-4">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-1">DECISION SYSTEM</span>
                <p className="text-sm text-[var(--color-text)]">Cards represent design choices (e.g., "Add Lootboxes"). Each card carries systemic weights impacting KPIs like retention and revenue.</p>
              </div>
              <div className="border border-[var(--color-border)] p-4">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-1">RESOURCE SYSTEM</span>
                <p className="text-sm text-[var(--color-text)]">Players expend Energy and Time to play cards. Mismanaging fatigue results in failed sprints and run termination.</p>
              </div>
              <div className="border border-[var(--color-border)] p-4">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-1">ECONOMY SYSTEM</span>
                <p className="text-sm text-[var(--color-text)]">Currency earned from successful briefs is spent on run-based consumables (coffee) or permanent meta-upgrades.</p>
              </div>
              <div className="border border-[var(--color-border)] p-4">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-1">PROGRESSION</span>
                <p className="text-sm text-[var(--color-text)]">Roguelike meta-progression shifts the player from Junior to Lead Designer, unlocking advanced tools to tackle harder systemic briefs.</p>
              </div>
            </div>
          </section>

          {/* 5. DESIGN DECISIONS */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Settings size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">05. DESIGN DECISIONS</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-[var(--color-bg)] border-l-2 border-[var(--color-accent)]">
                <h4 className="font-serif text-base font-semibold text-[var(--color-text)] mb-2">Card-Based Mechanics over UI Toggles</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">
                  <span className="text-[var(--color-text)] font-medium">Why it exists:</span> Game design is inherently abstract. Cards tactilely physicalize choices, making the mechanics readable and trade-offs explicit.
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">
                  <span className="text-[var(--color-text)] font-medium">Alternative rejected:</span> A pure dashboard dialogue tree. It felt too academic and lacked strategic gameplay weight.
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Introduces RNG into puzzle-solving, forcing players to adapt rather than memorize optimal paths.
                </p>
              </div>
              <div className="p-4 bg-[var(--color-bg)] border-l-2 border-[var(--color-accent)]">
                <h4 className="font-serif text-base font-semibold text-[var(--color-text)] mb-2">Physical Office Navigation</h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-2">
                  <span className="text-[var(--color-text)] font-medium">Why it exists:</span> Menu-only simulations cause cognitive fatigue. Moving an avatar between tasks injects necessary downtime.
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Slows down macro-progression, but the friction creates a stronger sense of spatial grounding and narrative investment.
                </p>
              </div>
            </div>
          </section>

          {/* 6. PLAYER EXPERIENCE */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Brain size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">06. PLAYER EXPERIENCE ANALYSIS</span>
            </div>
            <p className="text-[var(--color-text)] leading-relaxed text-sm mb-2">
              The experience oscillates between the stress of an impending deadline and the satisfaction of solving a systemic puzzle. 
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              Tension peaks when energy runs low and a brief requires heavy mechanical fixes, forcing players to make "bad" design choices (like aggressive monetization) just to ship on time. Satisfaction is derived from perfectly balancing a broken brief and seeing the simulation KPIs turn green.
            </p>
          </section>

          {/* 7. CONSTRAINTS & 8. UNIQUE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle size={16} className="text-[var(--color-accent)]" />
                <span className="mono-label text-[var(--color-accent)]">07. CONSTRAINTS</span>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                Limited Energy dictates how many cards can be played per brief. Time pressure forces decisive action. Complexity scales by forcing players to balance conflicting KPIs (e.g., Retention vs. Revenue).
              </p>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Crosshair size={16} className="text-[var(--color-accent)]" />
                <span className="mono-label text-[var(--color-accent)]">08. WHAT MAKES IT UNIQUE</span>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                It gamifies the act of game design itself. It proves that abstract concepts like "cognitive load" or "core loops" can be translated into numerical, playable game mechanics.
              </p>
            </section>
          </div>

          {/* 9. WHAT WOULD BE IMPROVED */}
          <section className="border border-[var(--color-border-strong)] p-5">
            <span className="mono-label text-[var(--color-text)] block mb-2">09. ITERATION & IMPROVEMENT</span>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
              The initial prototype relied too heavily on random card draws, which frustrated players trying to solve specific systemic problems. A necessary improvement is shifting to a "deck-building" mechanic where players draft solutions, granting them more agency over systemic outcomes while maintaining roguelike variance.
            </p>
          </section>

        </div>
      </motion.div>
    </SectionWrapper>
  );
}
