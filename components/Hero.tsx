"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const nodes = [
  { key: "wa", label: "WhatsApp" },
  { key: "n8n", label: "n8n" },
  { key: "ai", label: "AI" },
  { key: "api", label: "FastAPI" },
  { key: "db", label: "PostgreSQL" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="section-shell grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 font-mono text-xs text-signal"
          >
            <span className="node-dot" />
            available for freelance work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            AI Automation &amp;<br /> Full-Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            I build AI-powered automations, intelligent workflows, and full-stack
            applications that turn repetitive business processes into efficient
            systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-signal/60 hover:text-signal"
            >
              Let&apos;s work together
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/MagriMedAli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <Github size={17} strokeWidth={1.75} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-ali-magri-8639ba436/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={17} strokeWidth={1.75} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-sm flex-col gap-4 rounded-xl border border-line bg-surface/60 p-6 md:max-w-none"
          aria-hidden="true"
        >
          <p className="font-mono text-[11px] text-faint">pipeline.trace</p>
          <svg viewBox="0 0 320 340" className="w-full" role="presentation">
            {nodes.map((_, i) => {
              if (i === nodes.length - 1) return null;
              const y1 = 30 + i * 76;
              const y2 = 30 + (i + 1) * 76;
              return (
                <g key={i}>
                  <line
                    x1="60"
                    y1={y1}
                    x2="60"
                    y2={y2}
                    stroke="#232A33"
                    strokeWidth="2"
                  />
                  <motion.circle
                    r="3"
                    fill="#F2A340"
                    initial={{ cy: y1, opacity: 0 }}
                    animate={{ cy: [y1, y2], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 1.8,
                      delay: i * 0.5,
                      repeat: Infinity,
                      repeatDelay: 2.2,
                      ease: "easeInOut",
                    }}
                    cx="60"
                  />
                </g>
              );
            })}

            {nodes.map((node, i) => {
              const y = 30 + i * 76;
              return (
                <g key={node.key}>
                  <circle cx="60" cy={y} r="6" fill="#12161C" stroke="#F2A340" strokeWidth="1.5" />
                  <text
                    x="82"
                    y={y + 4}
                    fill="#E7EAEE"
                    fontSize="13"
                    fontFamily="var(--font-jbmono), monospace"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
