"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

const designWork = [
  {
    title: "Health Nexus Dashboard",
    description: "Full-stack health platform with AI consultation, medicine search, and patient management interface.",
    tags: ["DASHBOARD", "FULL_STACK", "AI"],
    accent: "#4ECDC4",
  },
  {
    title: "SPAWN POINT — Game UI",
    description: "Interface mockups for an idle RPG mobile game — skill allocation screen, quest board, and portfolio view.",
    tags: ["HUD", "GAME_UI", "PROTOTYPE"],
    accent: "#AB47BC",
  },
];

export default function InterfaceDesign() {
  return (
    <SectionWrapper
      id="interface-design"
      sectionNumber="08"
      title="Interface Design"
      subtitle="Visual systems I've designed — from HUDs to dashboards."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designWork.map((work) => (
          <motion.div
            key={work.title}
            variants={itemVariants}
            className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden group hover:border-[var(--color-border-strong)] transition-colors duration-300"
          >
            {/* Abstract preview area */}
            <div
              className="h-40 relative overflow-hidden"
              style={{ backgroundColor: `${work.accent}08` }}
            >
              {/* Geometric abstract pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                viewBox="0 0 400 160"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect x="20" y="20" width="100" height="12" rx="2" fill={work.accent} opacity="0.4" />
                <rect x="20" y="40" width="160" height="8" rx="2" fill={work.accent} opacity="0.2" />
                <rect x="20" y="56" width="120" height="8" rx="2" fill={work.accent} opacity="0.2" />
                <rect x="200" y="20" width="80" height="80" rx="4" stroke={work.accent} strokeWidth="1" opacity="0.3" />
                <circle cx="240" cy="60" r="20" stroke={work.accent} strokeWidth="1" opacity="0.3" />
                <rect x="300" y="30" width="60" height="16" rx="2" fill={work.accent} opacity="0.15" />
                <rect x="300" y="54" width="40" height="16" rx="2" fill={work.accent} opacity="0.15" />
                <line x1="20" y1="100" x2="360" y2="100" stroke={work.accent} strokeWidth="0.5" opacity="0.2" />
                <rect x="20" y="110" width="40" height="30" rx="2" stroke={work.accent} strokeWidth="0.5" opacity="0.3" />
                <rect x="70" y="110" width="40" height="30" rx="2" stroke={work.accent} strokeWidth="0.5" opacity="0.3" />
                <rect x="120" y="110" width="40" height="30" rx="2" stroke={work.accent} strokeWidth="0.5" opacity="0.3" />
              </svg>
              <span className="absolute bottom-3 left-4 mono-label">
                INTERFACE_PREVIEW
              </span>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="font-serif text-base font-semibold mb-2">
                {work.title}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span key={tag} className="mono-tag text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
