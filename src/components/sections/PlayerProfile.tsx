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
            I&apos;m Shreyansh — a game designer who thinks in systems, builds in
            code, and designs for humans. I see every product as a game: the
            users are players, the features are mechanics, and the experience is
            the core loop.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            My work sits at the intersection of game design thinking and product
            development. I don&apos;t just make things look good — I architect how
            they feel, how they reward, and how they retain. From health-tech
            platforms to idle game concepts, I apply the same lens: what is the
            player&apos;s motivation, and how does every interaction serve it?
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Currently a final-year B.Tech student, actively seeking roles where I
            can apply game design principles to real-world product problems.
            I believe the best products are games people don&apos;t realize
            they&apos;re playing.
          </p>

          {/* Quick metadata */}
          <div className="pt-4 grid grid-cols-2 gap-4">
            {[
              { label: "LOCATION", value: "India" },
              { label: "CLASS", value: "B.Tech (Final Year)" },
              { label: "SPECIALIZATION", value: "Game & Product Design" },
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
                  quality={85}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
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
