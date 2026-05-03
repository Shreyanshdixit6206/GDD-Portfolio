export interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  keyDecision: string;
  tags: string[];
  color: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "health-nexus",
    name: "Health Nexus",
    tagline: "Research Project & Prototype — Generic medicine search + AI health platform",
    problem:
      "Patients in India overpay for branded drugs when affordable generic alternatives exist.",
    solution:
      "Built an intelligent search engine mapping branded drugs to affordable generics with AI-powered health consultation.",
    keyDecision:
      "Dual-dataset architecture (PMBJP + A-Z) with fuzzy matching for maximum coverage",
    tags: ["FULL_STACK", "AI", "HEALTH_TECH"],
    color: "#4ECDC4",
    link: "#",
  },
  {
    id: "findmyitem",
    name: "FindMyItem",
    tagline: "Concept Prototype — Lost-and-found campus tracking system",
    problem:
      "University students lose items frequently with no centralized system to report or reclaim.",
    solution:
      "Designed a location-aware tracking system with image matching and campus-wide notifications.",
    keyDecision:
      "Prioritized mobile-first UX — 90% of reports happen on phones within 5 minutes of loss",
    tags: ["MOBILE", "UX", "CAMPUS"],
    color: "#FFB347",
    link: "#",
  },
  {
    id: "crisper",
    name: "Crisper",
    tagline: "UI Concept — Smart food waste reduction platform",
    problem:
      "Households waste 30% of purchased food due to poor tracking and planning.",
    solution:
      "Created an inventory tracker with expiry alerts, recipe suggestions, and consumption analytics.",
    keyDecision:
      "Gamified waste reduction — users earn 'freshness scores' creating sustained behavioral change",
    tags: ["SUSTAINABILITY", "GAMIFICATION", "MOBILE"],
    color: "#7CB342",
    link: "#",
  },
  {
    id: "subtract",
    name: "Subtract",
    tagline: "Personal Build — Minimalist expense tracker",
    problem:
      "Most finance apps are over-engineered — users need simple daily tracking, not enterprise accounting.",
    solution:
      "Built a one-tap expense logger with automatic categorization and weekly visual reports.",
    keyDecision:
      "Removed features ruthlessly — subtraction as design philosophy. 3-second logging flow.",
    tags: ["FINTECH", "MINIMAL", "UX"],
    color: "#AB47BC",
    link: "#",
  },
];
