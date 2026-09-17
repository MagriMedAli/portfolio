export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 md:py-28">
      <div className="section-shell grid grid-cols-1 gap-10 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Experience
        </h2>

        <div className="max-w-2xl border-l border-line pl-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-display text-lg font-semibold text-ink">
              AI Automation Developer
            </h3>
            <span className="font-mono text-xs text-faint">2023 — Present</span>
          </div>
          <p className="mt-1 text-sm text-muted">Self-employed, based in Sousse, Tunisia</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Worked independently with local small businesses to identify
            repetitive processes and build custom automation solutions.
            Developed workflow automations, API integrations, data processing
            systems, and AI-powered tools using Python, n8n, FastAPI, and
            PostgreSQL. Helped businesses reduce manual work and improve
            operational efficiency through tailored automation solutions.
          </p>

          <div className="mt-10 border-t border-line pt-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-base font-semibold text-ink">
                Bachelor&apos;s Degree in Software Engineering
              </h3>
            </div>
            <p className="mt-1 text-sm text-muted">
              Institut Sup&eacute;rieur d&apos;Informatique et de Math&eacute;matiques de Monastir (ISIMM), Tunisia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
