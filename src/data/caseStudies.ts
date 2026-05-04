export interface CaseStudy {
  id: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  context: string;
  coreLoop: string;
  problemIdentification: { title: string; description: string }[];
  playerImpact: string;
  designGoal: string;
  proposedSolution: { title: string; description: string }[];
  designDecisions: { decision: string; rationale: string }[];
  expectedOutcome: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "valorant-ranked",
    caseNumber: "CASE_001",
    title: "Valorant Ranked System",
    subtitle: "Competitive Experience & Ranking System",
    context:
      "Valorant is a competitive 5v5 tactical FPS where ranking and progression are core to long-term player engagement. The competitive system is designed to encourage skill improvement, maintain fair matchmaking, and retain players through rank progression.",
    coreLoop:
      "Play Match → Perform → Win/Lose → Rank Adjust → Queue Again\n\nThis loop is highly dependent on perceived fairness, feedback clarity, and player motivation.",
    problemIdentification: [
      {
        title: "Lack of Transparent Feedback",
        description:
          "Rank changes feel inconsistent. Players don't understand why they gained or lost RR, and the hidden MMR system reduces trust.",
      },
      {
        title: "Performance vs Outcome Conflict",
        description:
          "Individual performance is often overshadowed by team result. High-performing players still lose rank.",
      },
      {
        title: "Emotional Friction & Tilt",
        description:
          "Loss streaks feel overly punishing, with no systemic buffer to soften negative feedback loops.",
      },
    ],
    playerImpact:
      "These systemic issues result in reduced trust in the ranking system, player frustration and tilt, lower long-term retention for mid-tier players, and the perception of unfair matchmaking.",
    designGoal:
      "Improve transparency of the rank system, balance team outcome vs. individual performance, reduce emotional frustration loops, and maintain competitive integrity.",
    proposedSolution: [
      {
        title: "Performance Feedback Layer",
        description:
          "Add a post-match breakdown: Combat Impact Score, Utility Effectiveness, and Objective Contribution. This shows WHY performance mattered.",
      },
      {
        title: "Rank Adjustment Explanation",
        description:
          "Instead of a raw '+18 RR', show the calculation: Win Bonus (+15), Performance Bonus (+5), Team Impact Modifier (-2).",
      },
      {
        title: "Momentum System (Soft Buffer)",
        description:
          "Implement a slight RR loss reduction after consecutive losses to prevent frustration spirals.",
      },
      {
        title: "Player Role Recognition",
        description:
          "Adjust evaluation metrics based on role (Duelist vs Controller) to prevent biased scoring towards high-fragging classes.",
      },
    ],
    designDecisions: [
      {
        decision: "Transparency vs Exploit Risk",
        rationale:
          "More transparency improves trust, but too much detail can be gamed. The solution exposes simplified metrics, not raw formulas.",
      },
      {
        decision: "Performance Weighting",
        rationale:
          "Too much weight causes selfish gameplay; too little causes frustration. A balanced hybrid model is required.",
      },
      {
        decision: "Emotional Buffering",
        rationale:
          "Reduces frustration, but must not weaken competitiveness. Uses subtle adjustments rather than visible, exploitable rewards.",
      },
    ],
    expectedOutcome:
      "Increased player trust in the ranking system, reduced player friction after losses, improved engagement in mid-tier ranks, and better systemic understanding of performance improvement.",
    tags: ["SYSTEM_DESIGN", "COMPETITIVE", "FPS"],
  },
  {
    id: "nfs-mw-escalation",
    caseNumber: "CASE_002",
    title: "NFS Most Wanted (2005)",
    subtitle: "Systemic Escalation & Reward Structures",
    context:
      "Need for Speed Most Wanted relies heavily on an integrated progression and police-pursuit system to drive player engagement through escalating tension.",
    coreLoop:
      "Race → Earn Bounty + Respect → Elevate Heat → Challenge Blacklist Racer → Win Car → Repeat at higher stakes.\n\nThe reward mechanism directly fuels the next cycle.",
    problemIdentification: [
      {
        title: "Repetitive Late-Game Fatigue",
        description:
          "In many racing games, late-game progression devolves into grinding identical events with purely numerical difficulty increases.",
      },
      {
        title: "Disconnected Progression Systems",
        description:
          "Often, narrative progression and mechanical progression are separate, causing mechanical actions to feel meaningless to the broader goal.",
      },
    ],
    playerImpact:
      "Without meaningful escalation, players burn out before completing the core loop. Numerical scaling (faster AI) causes frustration rather than genuine engagement.",
    designGoal:
      "Identify how systemic escalation and integrated narrative rewards bypass standard late-game fatigue.",
    proposedSolution: [
      {
        title: "Emergent Difficulty over Numerical Scaling",
        description:
          "Heat levels escalate mechanically. The game doesn't just make cops faster; it introduces new systemic variables: roadblocks, spike strips, helicopters, and federal units.",
      },
      {
        title: "Narrative as a Retention Mechanic",
        description:
          "The Blacklist integrates leaderboard mechanics with character progression. Beating a rival isn't procedural; it's personal. The reward (Pink Slips) creates extreme high-stakes tension.",
      },
    ],
    designDecisions: [
      {
        decision: "High Stakes Reward System",
        rationale:
          "Offering the opponent's car via a 'Pink Slip' gamble introduces risk/reward mechanics that heighten emotional investment far more than a standard currency payout.",
      },
      {
        decision: "Systemic Enemy Escalation",
        rationale:
          "Shifting the pursuit methodology (from chasing to trapping via spike strips) forces the player to constantly adapt their mental model, keeping the skill ceiling dynamic.",
      },
    ],
    expectedOutcome:
      "The player's skill ceiling rises organically because the systemic pressure of the world pushes back harder, resulting in long-term retention and extreme emotional satisfaction.",
    tags: ["GAME_ANALYSIS", "ESCALATION", "CORE_LOOP"],
  },
  {
    id: "health-nexus-friction",
    caseNumber: "CASE_003",
    title: "Health Nexus",
    subtitle: "Reducing Cognitive Load in Search Systems",
    context:
      "Health Nexus is a utility platform designed to map branded drugs to affordable generic equivalents. The system faced severe retention issues due to high friction during the initial user interaction.",
    coreLoop:
      "Formulate Need → Input Query → System Maps Generic → Present Savings → Action (Purchase/Log)\n\nThis loop breaks if the user fails to successfully input their query.",
    problemIdentification: [
      {
        title: "Assumption of Domain Literacy",
        description:
          "The search interface required exact medical nomenclature. Users attempting to input common symptoms or vague brand names received null results.",
      },
      {
        title: "High Abandonment Rate",
        description:
          "Initial analytics revealed a 68% drop-off within the first 30 seconds due to systemic failure to resolve imperfect user inputs.",
      },
    ],
    playerImpact:
      "Users felt incompetent and frustrated. The friction point occurred before any value was demonstrated, leading to immediate session termination.",
    designGoal:
      "Reduce the cognitive load required to execute the core loop and guarantee a successful 'first win' within 10 seconds of interaction.",
    proposedSolution: [
      {
        title: "Conversational Input Parsing",
        description:
          "Replaced rigid search parameters with a fuzzy, conversational parser. Users can input 'I take Crocin for headaches', and the system handles the systemic mapping.",
      },
      {
        title: "Progressive Value Disclosure",
        description:
          "Delay complex account creation mechanics until AFTER the system demonstrates value (showing cost savings).",
      },
    ],
    designDecisions: [
      {
        decision: "Fuzzy Logic over Exact Match",
        rationale:
          "Sacrificing backend processing efficiency to drastically reduce frontend user friction. The trade-off is computational overhead for massive UX gains.",
      },
      {
        decision: "Delayed Conversion Mechanics",
        rationale:
          "By letting users 'play' the search mechanic before registering, we build investment. Once they see the savings, the friction of signing up is justified by the reward.",
      },
    ],
    expectedOutcome:
      "First-session conversion improved by 42%. By treating the interface as a low-barrier core loop, average time-to-first-success dropped from 47s to 18s.",
    tags: ["UX_DESIGN", "FRICTION", "SYSTEM_THINKING"],
  },
];
