"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <SectionWrapper
      id="case-studies"
      sectionNumber="04"
      title="Secondary Case Studies"
      subtitle="Deep dives — systemic analysis of core loops and player friction."
    >
      <div className="space-y-4">
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            variants={itemVariants}
            className="border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
          >
            {/* Header — clickable */}
            <button
              onClick={() => toggle(study.id)}
              className="w-full p-6 flex items-center justify-between cursor-pointer text-left hover:bg-[var(--color-bg)] transition-colors duration-200"
              aria-expanded={openId === study.id}
              aria-controls={`case-${study.id}`}
            >
              <div>
                <span className="mono-tag text-[10px] mb-2 inline-block">
                  {study.caseNumber}
                </span>
                <h3 className="font-serif text-lg font-semibold">
                  {study.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                  {study.subtitle}
                </p>
              </div>
              <motion.div
                animate={{ rotate: openId === study.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 ml-4"
              >
                <ChevronDown
                  size={18}
                  className="text-[var(--color-text-secondary)]"
                />
              </motion.div>
            </button>

            {/* Content — expandable */}
            <AnimatePresence>
              {openId === study.id && (
                <motion.div
                  id={`case-${study.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 space-y-8 border-t border-[var(--color-border)]">
                    {/* Context */}
                    <div className="pt-6">
                      <span className="mono-label block mb-2 text-[var(--color-text-secondary)]">CONTEXT</span>
                      <p className="text-sm text-[var(--color-text)] leading-relaxed">
                        {study.context}
                      </p>
                    </div>

                    {/* Core Loop */}
                    <div className="border border-dashed border-[var(--color-accent)] p-5 bg-[var(--color-bg)]">
                      <span className="mono-label text-[var(--color-accent)] block mb-2">CORE LOOP</span>
                      <p className="text-sm text-[var(--color-text)] whitespace-pre-line leading-relaxed">
                        {study.coreLoop}
                      </p>
                    </div>

                    {/* Problem Identification */}
                    <div>
                      <span className="mono-label block mb-3 text-[var(--color-text-secondary)]">PROBLEM IDENTIFICATION</span>
                      <div className="grid gap-4 md:grid-cols-2">
                        {study.problemIdentification.map((prob, i) => (
                          <div key={i} className="border-l-2 border-[var(--color-text-secondary)] pl-4">
                            <h4 className="font-serif text-sm font-bold text-[var(--color-text)] mb-1">{prob.title}</h4>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{prob.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Player Impact & Design Goal */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <span className="mono-label block mb-2 text-[var(--color-text-secondary)]">PLAYER IMPACT</span>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{study.playerImpact}</p>
                      </div>
                      <div>
                        <span className="mono-label block mb-2 text-[var(--color-text-secondary)]">DESIGN GOAL</span>
                        <p className="text-sm text-[var(--color-text)] leading-relaxed">{study.designGoal}</p>
                      </div>
                    </div>

                    {/* Proposed Solution */}
                    <div>
                      <span className="mono-label block mb-3 text-[var(--color-text-secondary)]">PROPOSED SOLUTION</span>
                      <div className="space-y-4">
                        {study.proposedSolution.map((sol, i) => (
                          <div key={i} className="flex gap-4">
                            <span className="text-[var(--color-accent)] font-mono text-sm mt-0.5">0{i + 1}</span>
                            <div>
                              <h4 className="font-serif text-sm font-bold text-[var(--color-text)] mb-1">{sol.title}</h4>
                              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{sol.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Design Decisions */}
                    <div>
                      <span className="mono-label block mb-3 text-[var(--color-text-secondary)]">DESIGN DECISIONS & TRADE-OFFS</span>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.designDecisions.map((dec, i) => (
                          <div key={i} className="border border-[var(--color-border)] p-4 bg-[var(--color-card)]">
                            <h4 className="font-serif text-sm font-bold text-[var(--color-text)] mb-2">{dec.decision}</h4>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{dec.rationale}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expected Outcome */}
                    <div className="bg-[var(--color-bg)] p-5 border border-[var(--color-border)]">
                      <span className="mono-label text-[var(--color-accent)] block mb-2">EXPECTED OUTCOME</span>
                      <p className="text-sm text-[var(--color-text)] leading-relaxed">
                        {study.expectedOutcome}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border)]">
                      {study.tags.map((tag) => (
                        <span key={tag} className="mono-tag text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
