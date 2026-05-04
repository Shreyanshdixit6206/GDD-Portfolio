"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";
import portrait from "@/../public/Shrey.jpeg";

const stats = [
  { label: "Design Thinking", value: 92 },
  { label: "System Architecture", value: 85 },
  { label: "Game Mechanics", value: 88 },
  { label: "User Research", value: 80 },
  { label: "Rapid Prototyping", value: 90 },
];

export default function PlayerProfile() {
  return (
    <SectionWrapper
      id="player-profile"
      sectionNumber="01"
      title="Player Profile"
      subtitle="Character sheet — the human behind the system."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        {/* Left — Bio (2/3) */}
        <motion.div variants={itemVariants} className="md:col-span-2 space-y-5">
          <p className="text-[var(--color-text)] leading-relaxed text-base md:text-lg">
            I&apos;m Shreyansh. I build game systems by thinking carefully about every design choice.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            My work starts with a simple question: <em className="text-[var(--color-text)] not-italic font-medium">Why does this feature exist, and what will it make the player do?</em> Instead of just adding cool ideas, I focus on solving real problems—fixing frustrating moments, balancing resources, and weighing the pros and cons of every choice.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Good design is about making tough decisions. I take complicated ideas and turn them into simple, clear rules. If a feature doesn&apos;t make the core game better or motivate the player, I remove it.
          </p>

          {/* Quick metadata */}
          <div className="pt-4 grid grid-cols-2 gap-4">
            {[
              { label: "LOCATION", value: "India" },
              { label: "DISCIPLINE", value: "Systems & UX Design" },
              { label: "SPECIALIZATION", value: "Core Loops & Retention" },
              { label: "ACTIVE_SINCE", value: "2022" },
            ].map((item) => (
              <div key={item.label}>
                <span className="mono-label block">{item.label}</span>
                <span className="font-mono text-xs text-[var(--color-text)] mt-1 block">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Portrait + Stats (1/3) */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Character Portrait */}
          <div className="relative">
            <div className="border border-[var(--color-border)] p-2 bg-[var(--color-card)] shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-dark)]">
                <Image
                  src={portrait}
                  alt="Shreyansh Dixit — Game Designer & System Builder"
                  placeholder="blur"
                  quality={100}
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top"
                />
              </div>
              <span className="mono-label block text-center mt-2 pb-1">
                PLAYER_PORTRAIT // v1.0
              </span>
            </div>
          </div>

          {/* Stat Card */}
          <div className="border border-[var(--color-border)] p-5 bg-[var(--color-card)]">
            <span className="mono-label block mb-4">
              ATTRIBUTE_BLOCK
            </span>
            <div className="space-y-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-[11px] text-[var(--color-code)]">
                      {stat.label}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--color-text-secondary)]">
                      {stat.value}/100
                    </span>
                  </div>
                  <div className="attribute-bar">
                    <motion.div
                      className="attribute-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.2,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
