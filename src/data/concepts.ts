export interface GameConcept {
  id: string;
  title: string;
  genre: string;
  platform: string;
  targetAudience: string;
  elevator: string;
  coreLoop: string[];
  uniqueMechanic: {
    name: string;
    description: string;
  };
  resources: string[];
  designerNote: string;
}

export const concepts: GameConcept[] = [
  {
    id: "spawn-point",
    title: "SPAWN POINT",
    genre: "Simulation / Idle RPG",
    platform: "Mobile (iOS / Android)",
    targetAudience: "Casual gamers, 16–30, who enjoy progression systems",
    elevator:
      "A life-simulation idle game where you build and optimize a character's career path — from college fresher to industry leader — through strategic skill allocation, networking events, and portfolio building.",
    coreLoop: [
      "ALLOCATE skill points to attributes (Design, Code, Communication, Hustle)",
      "ACCEPT quests (internships, projects, freelance gigs) matched to skill level",
      "COMPLETE deliverables within time constraints for XP + currency",
      "UPGRADE tools, workspace, and reputation to unlock higher-tier quests",
    ],
    uniqueMechanic: {
      name: "The Portfolio Effect",
      description:
        "Every completed project generates a persistent portfolio piece. Future quest acceptance rates and rewards scale based on portfolio quality, not just stats — meaning early choices have compounding long-term effects.",
    },
    resources: [
      "Energy (regenerates, limits daily actions)",
      "Reputation (unlocks quest tiers, earned through quality work)",
      "Currency (earned from quests, spent on upgrades)",
      "Network Tokens (earned from events, used for referrals)",
    ],
    designerNote:
      "This concept exists because I believe career-building IS game design — resource allocation, risk/reward trade-offs, and long-term strategic planning. SPAWN POINT makes that metaphor literal.",
  },
];
