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
      "In a 5v5 tactical FPS, competitive progression is the primary retention driver. The system must balance fair matchmaking with a sense of continuous upward mobility.",
    coreLoop:
      "Queue → Compete → Receive Rank Adjustment → Queue Again. If players feel the adjustment is arbitrary, the loop breaks.",
    problemIdentification: [
      {
        title: "Hidden MMR Friction",
        description:
          "Players lack visibility into rank math, assuming the system is rigged when RR gains don't match KDA.",
      },
      {
        title: "Outcome Dominance",
        description:
          "Individual mastery feels unrewarded if a teammate disconnects or throws, causing pure win/loss systems to feel deeply unfair.",
      },
      {
        title: "Tilt Spirals",
        description:
          "Consecutive losses compound frustration, driving players to abandon the session entirely.",
      },
    ],
    playerImpact:
      "Trust in the system collapses. Mid-tier players experience high churn because the friction of losing outweighs the dopamine of winning.",
    designGoal:
      "Expose enough math to justify outcomes without making the system exploitable. Reward individual performance while prioritizing team victory.",
    proposedSolution: [
      {
        title: "Performance Modifiers",
        description:
          "Factor Utility Effectiveness and First Bloods into RR, shifting focus away from raw KDA padding.",
      },
      {
        title: "Soft Momentum Buffer",
        description:
          "Silently reduce RR penalties after severe loss streaks to intercept tilt-induced churn.",
      },
    ],
    designDecisions: [
      {
        decision: "Opaque formulas over full transparency",
        rationale:
          "If players know exactly how RR is calculated, they will optimize for the formula instead of trying to win the round. Trade-off: Lower trust for higher match integrity.",
      },
      {
        decision: "Capping Individual Performance Bonuses",
        rationale:
          "Individual performance can never offset a loss entirely, preventing players from baiting their team just to save their own rank.",
      },
    ],
    expectedOutcome:
      "Players accept losses better when they see personal performance acknowledged. Retention during loss streaks improves.",
    tags: ["SYSTEM_DESIGN", "COMPETITIVE", "FPS"],
  },
  {
    id: "nfs-mw-escalation",
    caseNumber: "CASE_002",
    title: "NFS Most Wanted",
    subtitle: "Systemic Escalation & Reward Structures",
    context:
      "Racing game progression often devolves into stat-grinding. NFS integrates narrative rivalry with systemic police escalation to mask the grind.",
    coreLoop:
      "Race → Accumulate Bounty → Trigger Heat Escalation → Defeat Rival → Claim Pink Slip.",
    problemIdentification: [
      {
        title: "Late-Game Fatigue",
        description:
          "Increasing AI speed artificially extends playtime but kills engagement. It feels cheap, not challenging.",
      },
      {
        title: "Disconnected Progression",
        description:
          "When narrative and mechanics run on parallel tracks, standard races feel like chores blocking the 'real' game.",
      },
    ],
    playerImpact:
      "Players abandon the game halfway because the core loop becomes a predictable mathematical grind instead of an escalating fantasy.",
    designGoal:
      "Replace numerical difficulty scaling with emergent systemic pressure.",
    proposedSolution: [
      {
        title: "Systemic Escalation over Stat Buffs",
        description:
          "Instead of making cops faster, Heat levels introduce new variables: roadblocks, helicopters, and heavy units. The skill ceiling shifts dynamically.",
      },
      {
        title: "High-Stakes Gambles",
        description:
          "The 'Pink Slip' reward turns a standard boss fight into a high-tension gamble, directly attacking player loss aversion.",
      },
    ],
    designDecisions: [
      {
        decision: "Pink Slip RNG",
        rationale:
          "Players aren't guaranteed the boss car. The element of chance amplifies the emotional spike of the win. Trade-off: Can cause severe frustration if they pull a useless upgrade instead.",
      },
      {
        decision: "Aggro Decay",
        rationale:
          "Forcing players to switch cars to lower Heat builds attachment to their entire garage, preventing the 'one-car-only' optimization problem.",
      },
    ],
    expectedOutcome:
      "Players organically raise their own skill ceiling because the game world pushes back with new mechanics, not just bigger numbers.",
    tags: ["GAME_ANALYSIS", "ESCALATION", "CORE_LOOP"],
  },
  {
    id: "health-nexus-friction",
    caseNumber: "CASE_003",
    title: "Health Nexus",
    subtitle: "Reducing Cognitive Load in Search Systems",
    context:
      "Health Nexus maps branded drugs to generic equivalents. The system faced severe retention issues due to high input friction.",
    coreLoop:
      "Input Query → System Maps Generic → Present Savings → Purchase. This loop shatters if the query fails.",
    problemIdentification: [
      {
        title: "Domain Literacy Assumption",
        description:
          "The interface demanded exact nomenclature. A user typing 'Crocin for headaches' received a null state.",
      },
      {
        title: "Friction Pre-Value",
        description:
          "Forcing account creation before displaying alternative pricing led to a 68% immediate drop-off.",
      },
    ],
    playerImpact:
      "Users felt incompetent. The friction point occurred before the system demonstrated any value.",
    designGoal:
      "Guarantee a successful 'first win' within 10 seconds of interaction, regardless of the user's medical literacy.",
    proposedSolution: [
      {
        title: "Fuzzy Conversational Parsing",
        description:
          "The input field forgives spelling errors and accepts symptom-based queries, shifting the cognitive load to the backend.",
      },
      {
        title: "Progressive Value Disclosure",
        description:
          "Let users run the core loop (seeing the savings) completely unauthenticated. Only gate the final purchase action.",
      },
    ],
    designDecisions: [
      {
        decision: "Fuzzy Logic vs Efficiency",
        rationale:
          "Sacrificing backend performance to drastically reduce frontend friction. The trade-off is higher computational overhead to guarantee user success.",
      },
      {
        decision: "Delayed Conversion",
        rationale:
          "We forfeit immediate email capture to build investment. Once they see a $50 saving, the friction of signing up is suddenly justified by the reward.",
      },
    ],
    expectedOutcome:
      "Time-to-first-success dropped from 47s to 18s. By treating the search bar as a low-barrier mechanic, first-session conversion improved by 42%.",
    tags: ["UX_DESIGN", "FRICTION", "SYSTEM_THINKING"],
  },
];
