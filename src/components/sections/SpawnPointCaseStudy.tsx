"use client";

import { motion } from "framer-motion";
import { GitMerge, Brain, Layers, PlayCircle, Settings, AlertCircle, Lightbulb } from "lucide-react";
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
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">01. WHY THIS GAME EXISTS</span>
            </div>
            <p className="text-[var(--color-text)] leading-relaxed text-sm md:text-base mb-3">
              My design goal was to simulate the actual tension of game development. I chose a roguelike structure because it perfectly mirrors iterative design—failing, learning, and upgrading to try again.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
              The targeted player behavior is strategic resource management. I want players to experience the pressure of balancing ideal mechanics against harsh operational constraints (e.g., sacrificing short-term monetization to stabilize long-term retention).
            </p>
          </section>

          {/* 2. CORE LOOP ANALYSIS */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <PlayCircle size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">02. CORE LOOP ANALYSIS</span>
            </div>
            <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)] mb-4">
              <p className="font-mono text-sm text-[var(--color-text)] text-center">
                Move → Interact → Decide → Simulate → Feedback → Upgrade → Repeat
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-[var(--color-text)] leading-relaxed text-sm mb-1 font-semibold">
                  Why this loop works:
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  It separates physical downtime (moving through the office) from high-cognitive load moments (playing cards). This prevents burnout and establishes a healthy gameplay rhythm.
                </p>
              </div>
              <div>
                <p className="text-[var(--color-text)] leading-relaxed text-sm mb-1 font-semibold">
                  Tension and Reward:
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  Tension spikes during the "Decide" phase when constraints are tight. The reward hits immediately during "Simulate" when the math resolves and the game stabilizes.
                </p>
              </div>
            </div>
          </section>

          {/* 3. DESIGN DECISIONS FOR EVERY SYSTEM */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Layers size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">03. DESIGN DECISIONS BY SYSTEM</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              To support the core loop, I broke the simulation into four interconnected systems.
            </p>

            <div className="space-y-6">
              {/* Decision System */}
              <div className="border border-[var(--color-border)] p-5 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">A. DECISION SYSTEM (CARDS)</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  I chose a card-based system to externalize decision-making and make systemic trade-offs visible. 
                </p>
                <div className="pl-4 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Alternative Rejected:</span> A slider or dialogue tree was considered, but rejected because it hid complexity and reduced tactical engagement.
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Cards introduce RNG. Players cannot memorize perfect paths; they must adapt to the hand they draw.
                  </p>
                </div>
              </div>

              {/* Resource System */}
              <div className="border border-[var(--color-border)] p-5 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">B. RESOURCE SYSTEM (ENERGY & TIME)</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  This system creates immediate friction. Players expend Energy and Time to play cards.
                </p>
                <div className="pl-4 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Why it exists:</span> Without constraints, players would play every card to perfectly balance stats. Energy limits force imperfect, "good enough" decisions.
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Trade-off:</span> Mismanaging fatigue results in failed sprints, forcing players to weigh current brief success against long-term run survival.
                  </p>
                </div>
              </div>

              {/* Economy System */}
              <div className="border border-[var(--color-border)] p-5 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">C. ECONOMY SYSTEM</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  Currency earned from successful briefs is split between run-based consumables (coffee) and permanent meta-upgrades.
                </p>
                <div className="pl-4 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Why it exists:</span> It forces players to decide between surviving the current run or failing faster to invest in permanent power.
                  </p>
                </div>
              </div>

              {/* Progression System */}
              <div className="border border-[var(--color-border)] p-5 bg-[var(--color-bg)]">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">D. PROGRESSION SYSTEM</span>
                <p className="text-sm text-[var(--color-text)] mb-3">
                  Meta-progression shifts the player from Junior to Lead Designer.
                </p>
                <div className="pl-4 border-l-2 border-[var(--color-accent)] space-y-2">
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text)] font-medium">Why this approach:</span> It gates complexity. Junior briefs teach the core mechanics, while Lead briefs introduce conflicting KPIs that demand advanced systemic understanding.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. PLAYER EXPERIENCE LAYER */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Brain size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">04. PLAYER EXPERIENCE LAYER</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-4">
              As a result of these systems, the emotional journey is highly intentional:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] text-lg leading-none mt-0.5">↳</span>
                <p className="text-[var(--color-text-secondary)] text-sm"><span className="text-[var(--color-text)] font-medium">Start of Run (Exploration):</span> Safe curiosity as the player explores the office layout.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] text-lg leading-none mt-0.5">↳</span>
                <p className="text-[var(--color-text-secondary)] text-sm"><span className="text-[var(--color-text)] font-medium">During Decisions (Pressure):</span> High cognitive tension when evaluating trade-offs against a shrinking energy bar.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] text-lg leading-none mt-0.5">↳</span>
                <p className="text-[var(--color-text-secondary)] text-sm"><span className="text-[var(--color-text)] font-medium">Simulation (Anticipation):</span> The moment the cards are locked in, players watch the stats calculate.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] text-lg leading-none mt-0.5">↳</span>
                <p className="text-[var(--color-text-secondary)] text-sm"><span className="text-[var(--color-text)] font-medium">Progression (Growth):</span> Deep satisfaction when unlocking a new Lead Designer trait that suddenly makes previous bottlenecks trivial.</p>
              </li>
            </ul>
          </section>

          {/* 5. CONSTRAINTS & 6. WHAT I WOULD IMPROVE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-8">
            <section>
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle size={16} className="text-[var(--color-accent)]" />
                <span className="mono-label text-[var(--color-accent)]">05. CONSTRAINTS</span>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                Constraints drive engagement. Without limited time and energy, solving briefs is just basic math. By choking resources, I force players to prioritize <em>which</em> part of the brief to save and <em>which</em> part to fail. This is where real design choices happen.
              </p>
            </section>
            
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Settings size={16} className="text-[var(--color-accent)]" />
                <span className="mono-label text-[var(--color-accent)]">06. WHAT I WOULD IMPROVE</span>
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                If I were to iterate further, I would shift the card RNG to a deck-building format. Currently, bad card draws can cause unavoidable failure, which breaks trust in the simulation. A deck-builder gives players agency to curate their toolkit, shifting blame for failure away from the system and onto the player's strategy.
              </p>
            </section>
          </div>

        </div>
      </motion.div>
    </SectionWrapper>
  );
}
