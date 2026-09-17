export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-28">
      <div className="section-shell grid grid-cols-1 gap-10 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          About
        </h2>

        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-[17px]">
          <p>
            I&apos;m a software engineering graduate from Tunisia, working at the
            intersection of AI automation, workflow automation, full-stack
            development, API integrations, and full-stack development.
          </p>
          <p>
            My focus is on solving real business problems with software rather
            than building demo applications. That means understanding a
            process end to end &mdash; where the manual work happens, where data
            gets lost, where a message should trigger an action &mdash; and then
            building a system that removes the friction reliably.
          </p>
          <p>
            I work across the stack: designing the automation logic in tools
            like n8n, wiring in AI models for extraction and reasoning, building
            the APIs and databases that keep everything consistent, and
            building the interfaces when a project needs one.
          </p>
        </div>
      </div>
    </section>
  );
}
