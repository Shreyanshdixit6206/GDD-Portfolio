"use client";

import { motion } from "framer-motion";
import { GitMerge, AlertTriangle } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

export default function OriginalSystemDesign() {
  const system = {
    title: "Dynamic Bounty & Reputation System",
    type: "Progression & Economy Mechanic",
    context: "An open-world MMO mechanic where aggressive actions organically ripple into the game economy and faction hostility.",
    rules: [
      "Aggressive actions map to two axes: 'Heat' (immediate, temporary hostility) and 'Reputation' (long-term standing).",
      "Heat decays over time if players evade detection; Reputation locks until aggressively countered.",
      "High Heat spawns AI pursuit; High Reputation alters NPC market pricing and unlocks smuggling routes.",
    ],
    behaviorImpact: "Players must balance the immediate thrill of combat against long-term economic taxation. It forces an organic split between 'outlaw' and 'citizen' playstyles without forcing a hard class selection.",
    tradeOffs: [
      {
        decision: "Permanent Reputation vs. Class Lock-in",
        rationale: "Permanent consequences create weight, but punishing players for experimenting drives churn. Trade-off: Added a high-friction 'Identity Wipe' mechanic to allow resets without cheapening the system."
      },
      {
        decision: "AI vs. Player-Driven Bounties",
        rationale: "Player hunters generate incredible emergent gameplay but are unreliable. AI is reliable but predictable. Trade-off: AI handles base Heat levels to guarantee pressure; Players are algorithmically contracted only for maximum Heat targets."
      }
    ]
  };

  return (
    <SectionWrapper
      id="original-system-design"
      sectionNumber="05"
      title="Original System Design"
      subtitle="Building rules that drive emergent behavior."
    >
      <motion.div
        variants={itemVariants}
        className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
      >
        {/* Header */}
        <div className="border-b border-[var(--color-border)] p-6 md:p-8">
          <div className="flex items-start justify-between">
            <div>
              <span className="mono-tag mb-3 inline-block">SYSTEM_ARCHITECTURE</span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold">
                {system.title}
              </h3>
            </div>
            <GitMerge
              size={28}
              className="text-[var(--color-accent)] shrink-0"
              strokeWidth={1.5}
            />
          </div>

          {/* Quick specs */}
          <div className="mt-4">
            <span className="mono-label block">SYSTEM_TYPE</span>
            <span className="text-sm text-[var(--color-text)] mt-1 block">
              {system.type}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Context */}
          <div>
            <span className="mono-label text-[var(--color-accent)] block mb-2">
              CONTEXT
            </span>
            <p className="text-[var(--color-text)] leading-relaxed text-sm md:text-base">
              {system.context}
            </p>
          </div>

          {/* Rules */}
          <div>
            <span className="mono-label block mb-3">
              SYSTEM_RULES
            </span>
            <div className="space-y-3">
              {system.rules.map((rule, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <span className="font-mono text-xs text-[var(--color-text-secondary)] mt-[2px]">{i + 1}.</span>
                  <p className="text-sm text-[var(--color-text)]">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Player Behavior Impact */}
          <div className="border border-[var(--color-accent)] p-5 bg-[var(--color-bg)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-accent)]" />
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={14} className="text-[var(--color-accent)]" />
              <span className="mono-label text-[var(--color-accent)]">
                PLAYER_BEHAVIOR_IMPACT
              </span>
            </div>
            <p className="text-sm text-[var(--color-text)] leading-relaxed">
              {system.behaviorImpact}
            </p>
          </div>

          {/* Trade-Offs */}
          <div>
            <span className="mono-label block mb-4">
              DESIGN_TRADE_OFFS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {system.tradeOffs.map((tradeoff, i) => (
                <div key={i} className="border border-[var(--color-border)] p-4 bg-[var(--color-card)]">
                  <h4 className="font-serif text-base font-semibold mb-2 text-[var(--color-text)]">
                    {tradeoff.decision}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {tradeoff.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
