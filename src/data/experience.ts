export interface Experience {
  id: string;
  level: number;
  title: string;
  studio: string;
  period: string;
  type: string;
  description: string;
  keyOutcome: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "cmi",
    level: 3,
    title: "UX & Product Design Intern",
    studio: "CMI (Centre for Management Innovation)",
    period: "2024 — Present",
    type: "CURRENT_QUEST",
    description:
      "Designing systems that bridge education and technology. Working on dashboard interfaces, user flows, and product strategy for ed-tech platforms.",
    keyOutcome:
      "Redesigned core dashboard UX — reduced user task completion time by 40%",
    skills: ["UX Research", "Figma", "Product Strategy", "Design Systems"],
  },
  {
    id: "internpe",
    level: 2,
    title: "UI/UX Design Intern",
    studio: "InternPE",
    period: "2023 — 2024",
    type: "COMPLETED_QUEST",
    description:
      "Built mobile-first interfaces for an internship platform. Conducted user research, created wireframes, and delivered high-fidelity prototypes.",
    keyOutcome:
      "Shipped 3 mobile features from concept to production in 4 months",
    skills: ["Mobile Design", "Wireframing", "User Research", "Prototyping"],
  },
  {
    id: "aliter",
    level: 1,
    title: "Design & Strategy Intern",
    studio: "Aliter Technologies",
    period: "2023",
    type: "COMPLETED_QUEST",
    description:
      "First professional experience — learned the fundamentals of design thinking, rapid prototyping, and stakeholder communication in a startup environment.",
    keyOutcome:
      "Developed design-thinking workshop framework adopted by the team",
    skills: ["Design Thinking", "Rapid Prototyping", "Presentation", "Strategy"],
  },
];
