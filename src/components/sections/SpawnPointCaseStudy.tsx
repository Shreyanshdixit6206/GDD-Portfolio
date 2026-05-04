"use client";

import { motion } from "framer-motion";
import { GitMerge, Brain, Layers, PlayCircle, Settings, Lightbulb } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

export default function SpawnPointCaseStudy() {
  return (
    <SectionWrapper
      id="spawn-point"
      sectionNumber="03"
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
          
          {/* 1. WHY THIS GAME EXISTS */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">01. WHY THIS GAME EXISTS</span>
            </div>
            <div className="space-y-3">
              <p className="text-[var(--color-text)] text-sm md:text-base leading-relaxed">
                <span className="font-semibold">Intent:</span> To simulate the tension of game development.
              </p>
              <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
                <span className="text-[var(--color-text)] font-semibold">Roguelike Structure:</span> Mirrors iterative design—failing, learning, and upgrading.
              </p>
              <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed">
                <span className="text-[var(--color-text)] font-semibold">Player Behavior:</span> Tests strategic resource management. Players must balance ideal mechanics against harsh operational constraints.
              </p>
            </div>
          </section>

          {/* 2. CORE LOOP ANALYSIS */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <PlayCircle size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">02. CORE LOOP ANALYSIS</span>
            </div>
            <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)] mb-4">
              <p className="font-mono text-sm text-[var(--color-text)] text-center">
                Move → Interact → Decide → Simulate → Feedback
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-[var(--color-text)] text-sm mb-1 font-semibold">Pacing Control</p>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Separates physical downtime (movement) from high-cognitive load (decision-making). This prevents burnout.
                </p>
              </div>
              <div>
                <p className="text-[var(--color-text)] text-sm mb-1 font-semibold">Tension & Reward</p>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Tension spikes during resource constraints. Immediate reward hits when simulation math resolves.
                </p>
              </div>
            </div>
          </section>

          {/* 3. DESIGN DECISIONS FOR EVERY SYSTEM */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Layers size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">03. DESIGN DECISIONS</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              To support the core loop, the simulation relies on four interconnected systems.
            </p>

            <div className="space-y-4">
              {/* Decision System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">A. DECISION SYSTEM (CARDS)</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  Externalizes choices to make systemic trade-offs visible.
                </p>
                <div className="pl-3 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Alternative Rejected:</span> Sliders or dialogue trees. They hide complexity and reduce tactical engagement.
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Introduces RNG. Forces adaptation over memorization.
                  </p>
                </div>
              </div>

              {/* Resource System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">B. RESOURCE SYSTEM (ENERGY/TIME)</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  Creates immediate friction.
                </p>
                <div className="pl-3 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Alternative Rejected:</span> Unrestricted actions. Without constraints, players optimize everything with zero tension.
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Punishes greed. Forces imperfect, "good enough" decisions.
                  </p>
                </div>
              </div>

              {/* Progression System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">C. PROGRESSION SYSTEM</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  Gates complexity by scaling titles (Junior to Lead).
                </p>
                <div className="pl-3 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Alternative Rejected:</span> Flat difficulty scaling. Overwhelms new players with conflicting KPIs too early.
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Early runs feel restrictive to build necessary foundational knowledge.
                  </p>
                </div>
              </div>

              {/* Economy System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">D. ECONOMY SYSTEM</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  Forces resource allocation between immediate survival (consumables) and permanent power (upgrades).
                </p>
                <div className="pl-3 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Alternative Rejected:</span> Purely linear progression. Removes the strategic choice of pacing.
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Slows early-game progression to reward late-game scaling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PLAYER EXPERIENCE LAYER */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Brain size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">04. PLAYER EXPERIENCE JOURNEY</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-4">
              This systemic architecture guarantees a specific emotional arc:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="mono-label text-[var(--color-text)] mt-0.5 w-16 shrink-0">START</span>
                <p className="text-[var(--color-text-secondary)] text-sm"><span className="text-[var(--color-text)] font-medium">Exploration & Curiosity:</span> Players safely test mechanics and explore the environment without immediate pressure.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="mono-label text-[var(--color-text)] mt-0.5 w-16 shrink-0">MID</span>
                <p className="text-[var(--color-text-secondary)] text-sm"><span className="text-[var(--color-text)] font-medium">Pressure & Decision Tension:</span> Cognitive load spikes when balancing demanding KPIs against dwindling resources.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="mono-label text-[var(--color-text)] mt-0.5 w-16 shrink-0">END</span>
                <p className="text-[var(--color-text-secondary)] text-sm"><span className="text-[var(--color-text)] font-medium">Reward & Learning:</span> Deep satisfaction from stabilizing a simulation, or clear, actionable learning from failure.</p>
              </div>
            </div>
          </section>

          {/* 5. WHAT I WOULD IMPROVE */}
          <section className="border-t border-[var(--color-border)] pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Settings size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">05. WHAT I WOULD IMPROVE</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">System Complexity Scaling</p>
                <p className="text-[var(--color-text-secondary)] text-sm">Requires smoother onboarding to prevent cognitive overload when mid-tier mechanics unlock.</p>
              </div>
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">Replayability Depth</p>
                <p className="text-[var(--color-text-secondary)] text-sm">Integrating a deck-building layer would grant players agency over RNG, enhancing tactical depth.</p>
              </div>
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">UI Clarity / Readability</p>
                <p className="text-[var(--color-text-secondary)] text-sm">Cascading systemic effects need more transparent visual feedback to aid player decision-making.</p>
              </div>
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">Realism vs. Fun</p>
                <p className="text-[var(--color-text-secondary)] text-sm">The penalty for failed runs needs streamlining to maintain tension without causing undue frustration.</p>
              </div>
            </div>
          </section>

        </div>
      </motion.div>
    </SectionWrapper>
  );
}
