"use client";

import { motion } from "framer-motion";
import { Mail, FileText, ExternalLink, Globe, Link2 } from "lucide-react";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "shreyanshdixit@email.com",
    href: "mailto:shreyanshdixit@email.com",
  },
  {
    icon: Globe,
    label: "GitHub",
    value: "github.com/shreyansh",
    href: "https://github.com/shreyansh",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/shreyansh",
    href: "https://linkedin.com/in/shreyansh",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "#",
  },
];

export default function ContactProtocol() {
  return (
    <SectionWrapper
      id="contact"
      sectionNumber="10"
      title="Contact Protocol"
      subtitle="How to reach the designer."
    >
      <motion.div variants={itemVariants} className="max-w-xl">
        <div className="space-y-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between py-3 border-b border-[var(--color-border)] group hover:border-[var(--color-accent)] transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <contact.icon
                  size={16}
                  className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors duration-200"
                  strokeWidth={1.5}
                />
                <span className="mono-label">{contact.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {contact.value}
                </span>
                <ExternalLink
                  size={12}
                  className="text-[var(--color-text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* END OF DOCUMENT */}
      <motion.div
        variants={itemVariants}
        className="mt-20 text-center"
      >
        <div className="section-divider mb-8" />
        <p className="font-mono text-xs text-[var(--color-text-secondary)] tracking-[0.3em]">
          END OF DOCUMENT
        </p>
        <p className="font-mono text-[10px] text-[var(--color-border-strong)] mt-2 tracking-wider">
          GDD v1.0 — Shreyansh Dixit — {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[10px] text-[var(--color-border-strong)] mt-1">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
