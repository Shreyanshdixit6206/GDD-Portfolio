"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";
import { experiences } from "@/data/experience";

export default function SystemExperience() {
  return (
    <SectionWrapper
      id="system-experience"
      sectionNumber="04"
      title="System Experience"
      subtitle="Levels played — each one unlocked new mechanics."
    >
      <div className="space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            className="border border-[var(--color-border)] p-6 md:p-8 bg-[var(--color-card)] relative group hover:border-[var(--color-border-strong)] transition-colors duration-300"
          >
            {/* Level badge */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="mono-tag mb-2 inline-block">
                  {exp.type}
                </span>
                <h3 className="font-serif text-xl font-semibold">
                  {exp.title}
                </h3>
                <p className="font-mono text-xs text-[var(--color-text-secondary)] mt-1">
                  {exp.studio}
                </p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="font-mono text-3xl font-bold text-[var(--color-border-strong)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  LV.{exp.level}
                </span>
                <span className="mono-label block mt-1">{exp.period}</span>
              </div>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Key outcome */}
            <div className="flex items-start gap-2 bg-[var(--color-bg)] p-3 border border-[var(--color-border)]">
              <Trophy
                size={14}
                className="text-[var(--color-accent)] shrink-0 mt-0.5"
              />
              <div>
                <span className="mono-label text-[var(--color-accent)] block mb-1">
                  KEY_OUTCOME
                </span>
                <p className="text-xs text-[var(--color-text)]">
                  {exp.keyOutcome}
                </p>
              </div>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[10px] text-[var(--color-text-secondary)] px-2 py-1 border border-[var(--color-border)] bg-[var(--color-bg)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
