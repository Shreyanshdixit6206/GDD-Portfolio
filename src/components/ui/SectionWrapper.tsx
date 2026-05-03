"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  sectionNumber?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function SectionWrapper({
  id,
  sectionNumber,
  title,
  subtitle,
  children,
  className = "",
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative ${noPadding ? "" : "py-20 md:py-32"}`}>
      <motion.div
        className={`mx-auto max-w-5xl px-6 md:px-8 ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {(sectionNumber || title) && (
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            {sectionNumber && (
              <span className="mono-label block mb-3">
                [{sectionNumber}]
              </span>
            )}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-[var(--color-text-secondary)] text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </motion.div>

      {/* Section divider */}
      <div className="section-divider mt-20 md:mt-32" />
    </section>
  );
}
