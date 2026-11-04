"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Label } from "./ui";

const steps = [
  {
    title: "Understand",
    description: "Map the business process and find where the repetitive, error-prone work happens.",
    out: "process map",
  },
  {
    title: "Design",
    description: "Design the architecture: triggers, AI steps, data model, and what happens when things fail.",
    out: "workflow spec",
  },
  {
    title: "Build",
    description: "Develop and integrate the APIs, AI models, databases and workflows.",
    out: "working system",
  },
  {
    title: "Deploy",
    description: "Test, document and hand over a reliable solution your team can trust.",
    out: "in production",
  },
];

function StepCard({ step, i }: { step: (typeof steps)[number]; i: number }) {
  return (
    <article className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-paper/20 bg-cobaltdeep/60 p-7 md:p-10 lg:w-[38vw] lg:shrink-0">
      <span
        aria-hidden="true"
        className="text-outline-paper pointer-events-none absolute -right-4 -top-10 select-none font-display text-[13rem] font-extrabold leading-none tracking-[-0.06em] md:text-[17rem]"
      >
        0{i + 1}
      </span>
      <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-lime">Step 0{i + 1}</p>
      <div className="relative mt-24 lg:mt-0">
        <h3 className="font-display text-5xl font-extrabold uppercase tracking-[-0.05em] md:text-7xl">{step.title}</h3>
        <p className="mt-4 max-w-sm text-base leading-relaxed text-paper/80">{step.description}</p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-3 py-1.5 font-mono text-[11px] text-ink">
          → {step.out}
        </p>
      </div>
    </article>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // Slide the row left as the pinned section scrolls (desktop), just far enough to show the last card
  const row = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (row.current) setDistance(Math.max(0, row.current.scrollWidth - window.innerWidth + 40));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const heading = (
    <div className="lg:w-[30vw] lg:shrink-0 lg:pr-6">
      <Label className="text-lime">Process</Label>
      <h2 className="mt-6 font-display text-[clamp(3rem,7vw,7rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.05em]">
        From mess
        <br />
        to <span className="font-serif font-normal lowercase italic tracking-[-0.02em] text-lime">pipeline</span>
      </h2>
      <p className="mt-6 max-w-xs text-paper/75">Four steps, every project. No black boxes — you see the plan before I build it.</p>
    </div>
  );

  return (
    <section id="process" className="on-dark relative bg-cobalt text-paper">
      {/* Desktop: pinned horizontal scroll */}
      <div ref={ref} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={row} style={{ x }} className="flex h-[62vh] w-max items-stretch gap-6 pl-10">
            <div className="flex items-center">{heading}</div>
            {steps.map((s, i) => (
              <StepCard key={s.title} step={s} i={i} />
            ))}
          </motion.div>
          <div className="mx-10 mt-10 h-px bg-paper/20">
            <motion.div style={{ scaleX: bar }} className="h-px origin-left bg-lime" />
          </div>
        </div>
      </div>

      {/* Mobile / tablet: stacked */}
      <div className="section-shell py-24 lg:hidden">
        {heading}
        <div className="mt-12 flex flex-col gap-4">
          {steps.map((s, i) => (
            <StepCard key={s.title} step={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
