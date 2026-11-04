"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type CardTheme, type Project } from "@/data/projects";
import { BigTitle, Label, Reveal } from "./ui";

const themes: Record<
  CardTheme,
  { card: string; muted: string; accent: string; chip: string; primary: string; secondary: string; dark: boolean }
> = {
  ink: {
    card: "bg-ink text-paper",
    muted: "text-fog",
    accent: "text-lime",
    chip: "border-edge text-fog",
    primary: "bg-lime text-ink hover:bg-paper",
    secondary: "border-edge hover:border-lime hover:text-lime",
    dark: true,
  },
  cobalt: {
    card: "bg-cobalt text-paper",
    muted: "text-paper/75",
    accent: "text-lime",
    chip: "border-paper/30 text-paper/85",
    primary: "bg-lime text-ink hover:bg-paper",
    secondary: "border-paper/40 hover:border-lime hover:text-lime",
    dark: true,
  },
  paper: {
    card: "bg-paper2 text-ink ring-1 ring-ink/10",
    muted: "text-stone",
    accent: "text-cobalt",
    chip: "border-ink/15 text-stone",
    primary: "bg-cobalt text-paper hover:bg-ink",
    secondary: "border-ink/25 hover:border-cobalt hover:text-cobalt",
    dark: false,
  },
  lime: {
    card: "bg-lime text-ink",
    muted: "text-ink/70",
    accent: "text-cobalt",
    chip: "border-ink/20 text-ink/75",
    primary: "bg-ink text-paper hover:bg-cobalt",
    secondary: "border-ink/30 hover:border-cobalt hover:text-cobalt",
    dark: false,
  },
};

function Card({
  project,
  i,
  total,
  progress,
}: {
  project: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const t = themes[project.theme];
  const targetScale = 1 - (total - i) * 0.035;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const link = project.liveUrl ?? project.repoUrl;

  return (
    <div className="md:sticky md:h-[min(80vh,720px)]" style={{ top: `calc(5.5rem + ${i * 14}px)` }}>
      <motion.article
        style={{ scale }}
        className={`${t.card} ${t.dark ? "on-dark" : ""} grid h-full origin-top grid-cols-1 gap-6 overflow-hidden rounded-[1.75rem] p-4 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.45)] md:grid-cols-[0.92fr_1.08fr] md:gap-8 md:rounded-[2.25rem] md:p-6`}
      >
        <div className="order-2 flex flex-col justify-center px-2 pb-3 md:order-1 md:px-4 md:py-2">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]">
            <span className={t.accent}>
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className={t.muted}>{project.tag}</span>
            {project.badge && (
              <span
                className={`rounded-full px-2.5 py-1 ${t.dark ? "bg-lime text-ink" : "bg-ink text-lime"}`}
              >
                ● {project.badge}
              </span>
            )}
          </div>

          <h3 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.75rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]">
            {project.title}
          </h3>

          <p className={`mt-5 max-w-xl text-[15px] leading-relaxed ${t.muted}`}>{project.description}</p>

          <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-medium">
                <span className={`mt-0.5 font-serif text-lg leading-none ${t.accent}`}>✺</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className={`rounded-full border px-2.5 py-1 font-mono text-[11px] ${t.chip}`}>
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${t.primary}`}
              >
                Visit live site <ArrowUpRight size={16} />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                project.liveUrl ? `border ${t.secondary}` : t.primary
              }`}
            >
              <Github size={16} /> Code
            </a>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor={project.liveUrl ? "Visit site" : "View code"}
          aria-label={`${project.title} — ${project.liveUrl ? "open live site" : "open repository"}`}
          className="group relative order-1 block aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-ink/20 md:order-2 md:aspect-auto md:rounded-[1.6rem]"
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            priority={i < 2}
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          />
        </a>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <section id="work" className="relative bg-paper pb-24 pt-20 text-ink md:pb-40 md:pt-28">
      <div className="section-shell">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <Label className="text-cobalt">Selected work</Label>
            <BigTitle
              className="mt-6"
              lines={[
                "Things I've",
                <>
                  shipped
                  <span className="ml-3 align-top font-mono text-[0.18em] font-normal tracking-normal text-cobalt">
                    ({String(projects.length).padStart(2, "0")})
                  </span>
                </>,
              ]}
            />
          </div>
          <Reveal>
            <p className="max-w-sm text-base leading-relaxed text-stone">
              From AI agents that talk to customers on WhatsApp to the websites they land
              on. Each one solves a real, specific problem.
            </p>
          </Reveal>
        </div>

        <div ref={container} className="relative mt-14 flex flex-col gap-6 md:mt-20 md:gap-[34vh]">
          {projects.map((p, i) => (
            <Card key={p.id} project={p} i={i} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <a
            href="https://github.com/MagriMedAli?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition-colors hover:border-cobalt hover:bg-cobalt hover:text-paper"
          >
            <Github size={15} /> All repositories
            <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
