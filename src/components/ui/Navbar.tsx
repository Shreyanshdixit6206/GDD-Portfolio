"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "title", label: "Title Screen" },
  { id: "index", label: "Index" },
  { id: "player-profile", label: "Player Profile" },
  { id: "design-philosophy", label: "Design Philosophy" },
  { id: "core-mechanics", label: "Core Mechanics" },
  { id: "system-experience", label: "System Experience" },
  { id: "build-log", label: "Build Log" },
  { id: "game-concepts", label: "Game Concepts" },
  { id: "case-studies", label: "Case Studies" },
  { id: "interface-design", label: "Interface Design" },
  { id: "progression-tree", label: "Progression Tree" },
  { id: "contact", label: "Contact Protocol" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("title");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredDot, setHoveredDot] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Find active section
      const sectionElements = sections
        .map((s) => ({
          id: s.id,
          el: document.getElementById(s.id),
        }))
        .filter((s) => s.el);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const rect = sectionElements[i].el!.getBoundingClientRect();
        if (rect.top <= 200) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 h-14 flex items-center justify-between">
        {/* Monogram */}
        <button
          onClick={() => scrollTo("title")}
          className="font-mono text-sm font-bold tracking-widest text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors cursor-pointer"
          aria-label="Scroll to top"
        >
          SD<span className="text-[var(--color-accent)]">.</span>
        </button>

        {/* Navigation Dots - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {sections.slice(2).map((section) => (
            <div key={section.id} className="relative">
              <button
                onClick={() => scrollTo(section.id)}
                onMouseEnter={() => setHoveredDot(section.id)}
                onMouseLeave={() => setHoveredDot(null)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSection === section.id
                    ? "bg-[var(--color-accent)] scale-125"
                    : "bg-[var(--color-border-strong)] hover:bg-[var(--color-text-secondary)]"
                }`}
                aria-label={`Go to ${section.label}`}
                aria-current={activeSection === section.id ? "true" : undefined}
              />
              <AnimatePresence>
                {hoveredDot === section.id && (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-bg)] px-2 py-1 rounded shadow-sm border border-[var(--color-border)]"
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Document version tag */}
        <span className="mono-label hidden sm:block">
          v1.0
        </span>
      </div>
    </motion.nav>
  );
}
