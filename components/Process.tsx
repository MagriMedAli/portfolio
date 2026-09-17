const steps = [
  {
    title: "Understand",
    description: "Understand the business problem and identify repetitive processes.",
  },
  {
    title: "Design",
    description: "Design the automation architecture and workflow.",
  },
  {
    title: "Build",
    description: "Develop and integrate the required APIs, AI models, databases, and workflows.",
  },
  {
    title: "Deploy",
    description: "Test, document, and deliver a reliable solution.",
  },
];

export default function Process() {
  return (
    <section className="border-t border-line py-24 md:py-28">
      <div className="section-shell">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          How I work
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative pl-0">
              <p className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
