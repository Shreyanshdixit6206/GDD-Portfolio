"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "../ui/SectionWrapper";

const nodes = {
  design: [
    { id: "d1", label: "Visual & UI/UX", x: 80, y: 60 },
    { id: "d2", label: "Game Sense", x: 80, y: 130 },
    { id: "d3", label: "Systems Thinking", x: 80, y: 200 },
    { id: "d4", label: "Player Psychology", x: 80, y: 270 },
    { id: "d5", label: "Product Strategy", x: 80, y: 340 },
  ],
  build: [
    { id: "b1", label: "Prototyping", x: 320, y: 60 },
    { id: "b2", label: "AI Orchestration", x: 320, y: 130 },
    { id: "b3", label: "Vibe Coding", x: 320, y: 200 },
    { id: "b4", label: "Rapid Deployment", x: 320, y: 270 },
    { id: "b5", label: "Execution & Delivery", x: 320, y: 340 },
  ],
  convergence: [
    { id: "c1", label: "Product & Game Designer", x: 200, y: 410 },
  ],
};

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const nodeVariant = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
});

export default function ProgressionTree() {
  return (
    <SectionWrapper
      id="progression-tree"
      sectionNumber="09"
      title="Progression Tree"
      subtitle="How the skill branches converge into one role."
    >
      <motion.div variants={itemVariants} className="flex justify-center">
        <svg
          viewBox="0 0 400 470"
          className="w-full max-w-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Skill progression tree showing design and build paths converging into Design Engineer"
        >
          {/* Branch labels */}
          <text
            x="80"
            y="30"
            textAnchor="middle"
            className="fill-[var(--color-accent)]"
            style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
          >
            DESIGN & SYSTEMS
          </text>
          <text
            x="320"
            y="30"
            textAnchor="middle"
            className="fill-[var(--color-accent)]"
            style={{ fontSize: "10px", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
          >
            EXECUTION & VIBE
          </text>

          {/* Design path connections */}
          {nodes.design.slice(0, -1).map((node, i) => (
            <motion.line
              key={`dl-${i}`}
              x1={node.x}
              y1={node.y + 15}
              x2={nodes.design[i + 1].x}
              y2={nodes.design[i + 1].y - 15}
              stroke="var(--color-border-strong)"
              strokeWidth="1"
              variants={pathVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          ))}

          {/* Build path connections */}
          {nodes.build.slice(0, -1).map((node, i) => (
            <motion.line
              key={`bl-${i}`}
              x1={node.x}
              y1={node.y + 15}
              x2={nodes.build[i + 1].x}
              y2={nodes.build[i + 1].y - 15}
              stroke="var(--color-border-strong)"
              strokeWidth="1"
              variants={pathVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          ))}

          {/* Convergence lines */}
          <motion.line
            x1={80}
            y1={355}
            x2={200}
            y2={395}
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            variants={pathVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.line
            x1={320}
            y1={355}
            x2={200}
            y2={395}
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            variants={pathVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Design nodes */}
          {nodes.design.map((node, i) => (
            <motion.g
              key={node.id}
              variants={nodeVariant(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="14"
                fill="var(--color-card)"
                stroke="var(--color-border-strong)"
                strokeWidth="1.5"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="4"
                fill="var(--color-accent)"
                opacity="0.8"
              />
              <text
                x={node.x + 22}
                y={node.y + 4}
                className="fill-[var(--color-text)]"
                style={{ fontSize: "11px", fontFamily: "var(--font-body)" }}
              >
                {node.label}
              </text>
            </motion.g>
          ))}

          {/* Build nodes */}
          {nodes.build.map((node, i) => (
            <motion.g
              key={node.id}
              variants={nodeVariant(i * 0.1 + 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r="14"
                fill="var(--color-card)"
                stroke="var(--color-border-strong)"
                strokeWidth="1.5"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="4"
                fill="var(--color-accent)"
                opacity="0.8"
              />
              <text
                x={node.x - 22}
                y={node.y + 4}
                textAnchor="end"
                className="fill-[var(--color-text)]"
                style={{ fontSize: "11px", fontFamily: "var(--font-body)" }}
              >
                {node.label}
              </text>
            </motion.g>
          ))}

          {/* Convergence node */}
          <motion.g
            variants={nodeVariant(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <circle
              cx={200}
              cy={410}
              r="18"
              fill="var(--color-accent)"
              opacity="0.15"
            />
            <circle
              cx={200}
              cy={410}
              r="12"
              fill="var(--color-card)"
              stroke="var(--color-accent)"
              strokeWidth="2"
            />
            <circle cx={200} cy={410} r="4" fill="var(--color-accent)" />
            <text
              x={200}
              y={445}
              textAnchor="middle"
              className="fill-[var(--color-accent)]"
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              PRODUCT / GAME DESIGNER
            </text>
          </motion.g>
        </svg>
      </motion.div>
    </SectionWrapper>
  );
}
