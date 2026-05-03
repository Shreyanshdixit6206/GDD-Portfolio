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
      sectionNumber="07"
      title="Case Studies"
      subtitle="Deep dives — how I think through design problems."
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
                  <div className="px-6 pb-6 space-y-6 border-t border-[var(--color-border)]">
                    {/* Context */}
                    <div className="pt-6">
                      <span className="mono-label block mb-2">CONTEXT</span>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {study.context}
                      </p>
                    </div>

                    {/* Sections */}
                    {study.sections.map((section, i) => (
                      <div key={i}>
                        <span className="mono-label text-[var(--color-accent)] block mb-2">
                          {section.heading}
                        </span>
                        <p className="text-sm text-[var(--color-text)] leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}

                    {/* Outcome */}
                    <div className="bg-[var(--color-bg)] p-4 border border-[var(--color-border)]">
                      <span className="mono-label text-[var(--color-accent)] block mb-2">
                        OUTCOME
                      </span>
                      <p className="text-sm text-[var(--color-text)] leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
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
