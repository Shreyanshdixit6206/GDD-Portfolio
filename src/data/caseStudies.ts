export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  context: string;
  sections: {
    heading: string;
    content: string;
  }[];
  outcome: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "onboarding-protocol",
    caseNumber: "CASE_001",
    title: "The Onboarding Protocol",
    subtitle: "Designing FTUE for a Health-Tech Platform",
    context:
      "Health Nexus needed an onboarding flow that converted first-time users — many of whom were non-tech-savvy patients — into confident searchers within 60 seconds.",
    sections: [
      {
        heading: "THE PROBLEM",
        content:
          "Initial analytics showed 68% of users abandoned the app within the first 30 seconds. The search interface assumed medical literacy. Users didn't know generic drug names.",
      },
      {
        heading: "THE HYPOTHESIS",
        content:
          "If we frame the first experience as 'tell us what you're taking' instead of 'search our database', conversion rates will improve by at least 30%.",
      },
      {
        heading: "THE MECHANIC",
        content:
          "Designed a 3-step progressive disclosure flow: (1) Natural language input — 'I take Crocin for headaches', (2) System identifies brand → maps to generic → shows savings, (3) User sees immediate value before being asked to explore further features.",
      },
      {
        heading: "THE ITERATION",
        content:
          "V1 used a clinical tone ('Enter medication name'). User tests showed confusion. V2 switched to conversational framing ('What medicine do you usually buy?'). Completion rates jumped from 32% to 74%.",
      },
    ],
    outcome:
      "First-session conversion improved by 42%. Average time-to-first-search dropped from 47s to 18s. The conversational pattern was adopted across all input flows.",
    tags: ["UX_DESIGN", "ONBOARDING", "HEALTH_TECH"],
  },
  {
    id: "nfs-analysis",
    caseNumber: "CASE_002",
    title: "NFS Most Wanted 2005",
    subtitle: "Deconstructing a Perfect Core Loop",
    context:
      "An analytical breakdown of why NFS Most Wanted (2005) remains one of the most engaging racing games ever made — through the lens of game design mechanics.",
    sections: [
      {
        heading: "THE CORE LOOP",
        content:
          "Race → Earn bounty + respect → Unlock blacklist racer → Boss race → Win their car → Repeat at higher stakes. Each cycle escalates intensity while the reward (their car) is both functional and narrative.",
      },
      {
        heading: "THE ESCALATION SYSTEM",
        content:
          "Heat levels create emergent difficulty. Early game: 1-2 cop cars. Late game: helicopters, spike strips, federal pursuit. The player's skill ceiling rises naturally because the world pushes back harder.",
      },
      {
        heading: "THE RETENTION MECHANIC",
        content:
          "The Blacklist isn't just a leaderboard — it's a narrative device. Each rival has personality, a signature car, and a story. Beating them feels personal, not procedural. This transforms a racing game into a revenge story.",
      },
      {
        heading: "DESIGN TAKEAWAY",
        content:
          "Great core loops don't just reward progression — they make each cycle FEEL different even when the mechanics are identical. NFS MW achieves this through narrative escalation, not mechanical complexity.",
      },
    ],
    outcome:
      "This analysis informed my approach to designing progression systems — the insight that emotional stakes > mechanical complexity applies to product design as much as game design.",
    tags: ["GAME_ANALYSIS", "CORE_LOOP", "CASE_STUDY"],
  },
];
