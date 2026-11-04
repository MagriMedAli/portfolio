import { BigTitle, Label, Reveal } from "./ui";

const entries = [
  {
    period: "2023 — Now",
    title: "AI Automation Developer",
    place: "Self-employed · Sousse, Tunisia",
    body: "Working with local small businesses to find repetitive processes and replace them with custom automation: workflow automations, API integrations, data processing systems and AI-powered tools built with Python, n8n, FastAPI and PostgreSQL.",
    current: true,
  },
  {
    period: "Education",
    title: "B.Sc. Software Engineering",
    place: "Institut Supérieur d'Informatique et de Mathématiques de Monastir (ISIMM)",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-paper py-24 text-ink md:py-40">
      <div className="section-shell">
        <Label className="text-cobalt">Experience</Label>
        <BigTitle
          className="mt-6"
          lines={[
            <>
              Where I&apos;ve <span className="font-serif font-normal lowercase italic tracking-[-0.02em] text-cobalt">been</span>
            </>,
          ]}
        />

        <div className="mt-14 border-t border-ink/15 md:mt-20">
          {entries.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <article className="grid grid-cols-1 gap-4 border-b border-ink/15 py-10 md:grid-cols-[14rem_1fr_1fr] md:gap-10 md:py-14">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-stone">
                  {e.current && <span className="h-2 w-2 rounded-full bg-cobalt" />}
                  {e.period}
                </p>
                <div>
                  <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] md:text-5xl">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-cobalt">{e.place}</p>
                </div>
                {e.body ? <p className="text-[15px] leading-relaxed text-stone">{e.body}</p> : <span />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
