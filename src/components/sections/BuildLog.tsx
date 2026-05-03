"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";
import { projects } from "@/data/projects";

function ProjectIcon({ color }: { color: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-4"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <rect
        x="12"
        y="12"
        width="24"
        height="24"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <circle cx="24" cy="24" r="6" fill={color} opacity="0.8" />
    </svg>
  );
}

export default function BuildLog() {
  return (
    <SectionWrapper
      id="build-log"
      sectionNumber="05"
      title="Build Log"
      subtitle="Projects shipped — problems solved, decisions made."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="border border-[var(--color-border)] p-6 bg-[var(--color-card)] hover:border-[var(--color-border-strong)] transition-colors duration-300 group"
          >
            <ProjectIcon color={project.color} />

            <h3 className="font-serif text-lg font-semibold mb-1">
              {project.name}
            </h3>
            <p className="font-mono text-xs text-[var(--color-text-secondary)] mb-4">
              {project.tagline}
            </p>

            <div className="space-y-3">
              <div>
                <span className="mono-label text-[var(--color-accent)] block mb-1">
                  PROBLEM
                </span>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <span className="mono-label block mb-1">SOLUTION</span>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div>
                <span className="mono-label block mb-1">KEY_DECISION</span>
                <p className="text-xs text-[var(--color-text)] leading-relaxed font-medium">
                  {project.keyDecision}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
              {project.tags.map((tag) => (
                <span key={tag} className="mono-tag text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
