"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { stackGroups } from "@/data/stack";
import { projects } from "@/data/projects";
import { Label, Reveal } from "./ui";

const statement =
  "I'm Mohamed Ali Magri, a software engineer from Tunisia. I find the repetitive work hiding inside a business and replace it with systems that run on their own — AI agents, automated workflows, solid APIs, and the websites people actually use.";

// Words that get the italic lime treatment
const highlight = new Set(["repetitive", "systems", "AI", "agents,", "websites"]);

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const special = highlight.has(word);
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.25em] inline-block ${special ? "font-serif font-normal italic tracking-normal text-lime" : ""}`}
    >
      {word}
    </motion.span>
  );
}

/** Illustrated portrait whose head breaks out of the top of a cobalt card. */
function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Rises into place as you scroll; never above 0 so the jacket stays flush with the card bottom
  const y = useTransform(scrollYProgress, [0, 0.55], ["8%", "0%"]);

  return (
    <Reveal>
      <div ref={ref} className="group relative mx-auto w-full max-w-md pt-[22%]">
        <div className="relative aspect-[4/5] w-full">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-cobalt">
            <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-70" />
            <span
              aria-hidden="true"
              className="absolute -left-3 bottom-6 select-none font-display text-[7rem] font-extrabold uppercase leading-none tracking-[-0.06em] text-cobaltdeep"
            >
              MAM
            </span>
          </div>
          <motion.div
            // Wider than the card so the head rises above it; sides and bottom are clipped back to the card
            style={{ y, clipPath: "inset(-40% 5.4% 0 5.4% round 0 0 2rem 2rem)" }}
            className="absolute -inset-x-[6%] bottom-0 h-[118%]"
          >
            <Image
              src="/portrait.webp"
              alt="Illustrated portrait of Mohamed Ali Magri"
              fill
              sizes="(min-width: 1024px) 40vw, 95vw"
              className="object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>
          <span className="absolute -right-3 top-[3%] rotate-[8deg] rounded-full bg-lime px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink shadow-lg transition-transform duration-500 group-hover:rotate-[-4deg] md:-right-6">
            ✺ That&apos;s me
          </span>
          <span className="absolute -left-3 bottom-[14%] -rotate-[6deg] rounded-full bg-paper px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink shadow-lg md:-left-6">
            Sousse, TN
          </span>
        </div>
      </div>
    </Reveal>
  );
}

const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "projects shipped and on GitHub" },
  { value: "2023", label: "automating for small businesses since" },
  { value: "24/7", label: "what a good workflow runs, without you" },
];

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = statement.split(" ");

  return (
    <section id="about" className="on-dark relative bg-ink py-24 text-paper md:py-40">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Portrait />
          <div>
            <Label className="text-lime">About me</Label>
            <p
              ref={ref}
              className="mt-8 font-display text-[clamp(1.8rem,3.6vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.035em]"
            >
              {words.map((w, i) => (
                <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
              ))}
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-edge md:mt-28 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-ink">
              <div className="flex h-full flex-col justify-between gap-10 bg-coal p-7 md:p-9">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">0{i + 1}</span>
                <div>
                  <p className="font-display text-7xl font-extrabold tracking-[-0.06em] text-lime md:text-8xl">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm text-fog">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 md:mt-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <div>
              <Label className="text-lime">Toolbox</Label>
              <p className="mt-5 max-w-xs text-fog">
                The tools I reach for daily. I pick whatever gets the job done reliably.
              </p>
            </div>
            <div className="divide-y divide-edge border-y border-edge">
              {stackGroups.map((g) => (
                <div key={g.label} className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:items-center">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">{g.label}</p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-edge px-3.5 py-1.5 text-sm text-paper transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
