"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

const tocItems = [
  { number: "01", title: "Player Profile", id: "player-profile" },
  { number: "02", title: "Design Philosophy", id: "design-philosophy" },
  { number: "03", title: "Case Studies", id: "case-studies" },
  { number: "04", title: "Original System Design", id: "original-system-design" },
  { number: "05", title: "Contact Protocol", id: "contact" },
];

export default function Index() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="index" title="Table of Contents">
      <div className="max-w-xl">
        {tocItems.map((item) => (
          <motion.button
            key={item.id}
            variants={itemVariants}
            onClick={() => scrollTo(item.id)}
            className="w-full flex items-center py-3 group cursor-pointer text-left"
            aria-label={`Jump to section ${item.number}: ${item.title}`}
          >
            <span className="font-mono text-xs text-[var(--color-text-secondary)] w-8 shrink-0">
              {item.number}
            </span>
            <span className="font-serif text-base md:text-lg text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
              {item.title}
            </span>
            <span className="dotted-leader" />
            <span className="font-mono text-xs text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
              §{item.number}
            </span>
          </motion.button>
        ))}
      </div>
    </SectionWrapper>
  );
}
