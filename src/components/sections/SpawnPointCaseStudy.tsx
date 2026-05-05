"use client";

import { motion } from "framer-motion";
import { GitMerge, Brain, Layers, PlayCircle, Settings, Lightbulb, Target, AlertCircle, Crosshair } from "lucide-react";
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
              A system-driven game design simulation about fixing broken games under constraints
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
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)]">
              <p className="text-[var(--color-text)]">
                Most players interact with game systems but rarely understand how they are built or why they fail. Spawn Point is designed to simulate the decision-making process behind game design, not just the outcome.
              </p>
              <div>
                <span className="text-[var(--color-text)] font-semibold block mb-1">I chose a roguelike structure to:</span>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Emphasize iteration and learning through repeated runs</li>
                  <li>Allow players to improve their decision-making over time</li>
                </ul>
              </div>
              <div>
                <span className="text-[var(--color-text)] font-semibold block mb-1">I chose a simulation approach to:</span>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Make players think like designers instead of players</li>
                  <li>Expose trade-offs between retention, engagement, and resource constraints</li>
                </ul>
              </div>
              <div className="p-3 bg-[var(--color-bg)] border-l-2 border-[var(--color-accent)] text-[var(--color-text)]">
                The goal is to create a system where players learn by making imperfect decisions under pressure.
              </div>
            </div>
          </section>

          {/* GAMEPLAY PREVIEW VIDEO */}
          <section className="py-10 flex flex-col items-center border-t border-[var(--color-border)] mt-8">
            <span className="font-serif text-xl md:text-2xl font-bold text-[var(--color-text)] block mb-2 text-center">
              Simulation Preview
            </span>
            <span className="font-mono text-xs text-[var(--color-text-secondary)] block text-center mb-8 tracking-widest uppercase">
              Simulation Device
            </span>
            
            {/* PSP-Style Console Frame */}
            <div className="w-[95%] md:w-[75%] bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[2rem] p-3 md:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between gap-3 md:gap-5">
              
              {/* Left Controls (D-pad) */}
              <div className="hidden sm:flex w-12 md:w-16 shrink-0 items-center justify-center opacity-20">
                <div className="relative w-10 h-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--color-text)] rounded-sm"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--color-text)] rounded-sm"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--color-text)] rounded-sm"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--color-text)] rounded-sm"></div>
                </div>
              </div>

              {/* Center Screen */}
              <div className="relative w-full flex-grow aspect-video bg-[#050505] rounded-lg p-1.5 md:p-2 border border-[var(--color-border)]">
                <div className="relative w-full h-full bg-black overflow-hidden rounded-sm border border-[#222]">
                  <iframe 
                    src="https://www.youtube.com/embed/cJMkWkdJ-Wo?rel=0&modestbranding=1" 
                    title="Spawn Point Gameplay Preview"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Right Controls (Action Buttons) */}
              <div className="hidden sm:flex w-12 md:w-16 shrink-0 items-center justify-center opacity-20">
                <div className="relative w-10 h-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[var(--color-text)] rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[var(--color-text)] rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--color-text)] rounded-full"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--color-text)] rounded-full"></div>
                </div>
              </div>
            </div>
            
            <span className="text-[var(--color-text-secondary)] text-sm block mt-8 text-center max-w-[80%] md:max-w-[60%]">
              This is a conceptual visualization of the system design and player interaction flow.
            </span>
          </section>


          {/* 2. CORE LOOP */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <PlayCircle size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">02. CORE LOOP</span>
            </div>
            <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)] mb-4">
              <p className="font-mono text-sm text-[var(--color-text)] text-center">
                Explore → Accept Problem → Make Decisions → Simulate Outcome → Evaluate → Upgrade → Repeat
              </p>
            </div>
            <div className="space-y-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-text)] font-semibold block mb-2">This loop works because:</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Decisions directly affect measurable outcomes</li>
                <li>Feedback creates a learning loop</li>
                <li>Failure is part of progression, not a dead end</li>
              </ul>
            </div>
          </section>

          {/* 3. DESIGN INTENT */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Target size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">03. DESIGN INTENT</span>
            </div>
            <div className="space-y-3 text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-text)] font-semibold block mb-1">The experience is designed to:</span>
              <ul className="list-disc pl-5 space-y-1">
                <li>Push players into meaningful decision-making</li>
                <li>Force trade-offs between competing goals</li>
                <li>Simulate real-world design constraints</li>
              </ul>
              <div className="p-3 bg-[var(--color-bg)] border-l-2 border-[var(--color-accent)] text-[var(--color-text)] mt-4">
                The player is not solving puzzles — they are balancing systems under pressure.
              </div>
            </div>
          </section>

          {/* 4. CORE SYSTEMS & DESIGN DECISIONS */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Layers size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">04. CORE SYSTEMS & DESIGN DECISIONS</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Decision System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)] flex flex-col h-full">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">A. DECISION SYSTEM (CARD-BASED)</span>
                <p className="text-sm text-[var(--color-text)] mb-4">
                  Players solve problems using decision cards with visible trade-offs.
                </p>
                <div className="space-y-3 flex-grow">
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why cards:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Makes choices explicit and tangible. Encourages strategic thinking.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Alternative considered:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Sliders or menu-based adjustments.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why rejected:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Hides complexity. Reduces engagement with decision consequences.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Trade-off:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Cards simplify complexity but limit precision.</span>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-text)] text-sm italic">The goal was to prioritize clarity of decision over control depth.</span>
                </div>
              </div>

              {/* Resource System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)] flex flex-col h-full">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">B. RESOURCE SYSTEM (TIME & ENERGY)</span>
                <p className="text-sm text-[var(--color-text)] mb-4">
                  Players operate under limited time and energy per run.
                </p>
                <div className="space-y-3 flex-grow">
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why this system:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Introduces pressure. Prevents over-optimization.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Alternative considered:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Unlimited iteration.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why rejected:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Removes tension. Turns gameplay into trial-and-error optimization.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Trade-off:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Can restrict experimentation.</span>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-text)] text-sm italic">Constraint creates meaningful decisions instead of perfect ones.</span>
                </div>
              </div>

              {/* Progression System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)] flex flex-col h-full">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">C. PROGRESSION SYSTEM</span>
                <p className="text-sm text-[var(--color-text)] mb-4">
                  Players evolve from junior designer to more advanced roles.
                </p>
                <div className="space-y-3 flex-grow">
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why progression exists:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Provides long-term motivation. Reflects growth in complexity handling.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Alternative considered:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Static difficulty.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why rejected:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Reduces engagement over time.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Trade-off:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Requires careful balancing to avoid overwhelm.</span>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-text)] text-sm italic">Progression introduces increasing cognitive demand.</span>
                </div>
              </div>

              {/* Economy System */}
              <div className="border border-[var(--color-border)] p-4 bg-[var(--color-bg)] flex flex-col h-full">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] block mb-2">D. ECONOMY SYSTEM</span>
                <p className="text-sm text-[var(--color-text)] mb-4">
                  Players earn currency and invest in upgrades.
                </p>
                <div className="space-y-3 flex-grow">
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why economy exists:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Adds meta-progression. Supports long-term engagement.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Alternative considered:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">No persistent progression.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Why rejected:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Reduces replay value.</span>
                  </div>
                  <div>
                    <span className="text-[var(--color-text)] text-xs font-semibold block">Trade-off:</span>
                    <span className="text-[var(--color-text-secondary)] text-sm">Risk of grind if poorly balanced.</span>
                  </div>
                </div>
                <div className="pt-3 mt-4 border-t border-[var(--color-border)]">
                  <span className="text-[var(--color-text)] text-sm italic">Economy reinforces player investment across runs.</span>
                </div>
              </div>
            </div>
          </section>

          {/* 5. PLAYER EXPERIENCE JOURNEY */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Brain size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">05. PLAYER EXPERIENCE JOURNEY</span>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="mono-label text-[var(--color-text)] mt-0.5 w-24 shrink-0">EARLY GAME</span>
                <div className="text-[var(--color-text-secondary)] text-sm space-y-1">
                  <span className="text-[var(--color-text)] font-semibold block">Curiosity</span>
                  <p>Exploring the office environment. Understanding systems. Low-pressure learning.</p>
                  <p className="italic text-[var(--color-accent)] pt-1">Player feels: curious and exploratory</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <span className="mono-label text-[var(--color-text)] mt-0.5 w-24 shrink-0">MID GAME</span>
                <div className="text-[var(--color-text-secondary)] text-sm space-y-1">
                  <span className="text-[var(--color-text)] font-semibold block">Pressure</span>
                  <p>Limited resources. Increasing system complexity. More impactful decisions.</p>
                  <p className="italic text-[var(--color-accent)] pt-1">Player feels: tension and responsibility</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="mono-label text-[var(--color-text)] mt-0.5 w-24 shrink-0">LATE GAME</span>
                <div className="text-[var(--color-text-secondary)] text-sm space-y-1">
                  <span className="text-[var(--color-text)] font-semibold block">Evaluation</span>
                  <p>Results reflect decisions. Success or failure becomes visible. Learning loop activates.</p>
                  <p className="italic text-[var(--color-accent)] pt-1">Player feels: reward or frustration, followed by improvement</p>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-[var(--color-bg)] border-l-2 border-[var(--color-accent)] text-[var(--color-text)] text-sm mt-6 text-center font-mono">
              The experience is designed as:<br/>
              Curiosity → Pressure → Reflection → Improvement
            </div>
          </section>

          {/* 6. CONSTRAINTS & 7. WHAT MAKES THIS UNIQUE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[var(--color-border)] pt-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={16} className="text-[var(--color-accent)]" />
                <span className="mono-label text-[var(--color-accent)]">06. CONSTRAINTS</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--color-text-secondary)] mb-4">
                <li>Limited time per task</li>
                <li>Energy management</li>
                <li>Increasing system complexity</li>
              </ul>
              <div className="text-sm text-[var(--color-text)] space-y-1">
                <span className="font-semibold block mb-2">These constraints ensure:</span>
                <p className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> Players cannot optimize everything</p>
                <p className="flex items-center gap-2"><span className="text-[var(--color-accent)]">▹</span> Every decision has a cost</p>
              </div>
            </section>
            
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Crosshair size={16} className="text-[var(--color-accent)]" />
                <span className="mono-label text-[var(--color-accent)]">07. WHAT MAKES THIS UNIQUE</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>A game about designing games</li>
                <li>Focus on decision-making, not execution</li>
                <li>Systems designed to expose trade-offs explicitly</li>
              </ul>
            </section>
          </div>

          {/* 8. WHAT I WOULD IMPROVE */}
          <section className="border-t border-[var(--color-border)] pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Settings size={16} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">08. WHAT I WOULD IMPROVE</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">System scaling</p>
                <p className="text-[var(--color-text-secondary)] text-sm">Complexity may increase too quickly — needs smoother progression</p>
              </div>
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">Replay depth</p>
                <p className="text-[var(--color-text-secondary)] text-sm">More variation in problem types can improve longevity</p>
              </div>
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">UI clarity</p>
                <p className="text-[var(--color-text-secondary)] text-sm">High system density may overwhelm players without better information hierarchy</p>
              </div>
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)]">
                <p className="text-[var(--color-text)] text-sm font-semibold mb-1">Balance between realism and fun</p>
                <p className="text-[var(--color-text-secondary)] text-sm">Too much realism could reduce engagement if not controlled</p>
              </div>
            </div>
          </section>

          {/* 9. GDD DOCUMENT LINK */}
          <section className="border-t border-[var(--color-border)] pt-8 mt-8">
            <a 
              href="https://docs.google.com/document/d/1KY7RBHkG0XH2XHrWOxWb_aswWbs3VlAL/edit?usp=sharing&ouid=115822916942556415387&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors inline-block"
            >
              Full design document available for detailed review →
            </a>
          </section>

        </div>
      </motion.div>
    </SectionWrapper>
  );
}
