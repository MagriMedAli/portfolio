const services = [
  {
    title: "AI Workflow Automation",
    description: "Automate repetitive business processes using n8n and AI.",
  },
  {
    title: "AI Integrations",
    description:
      "Integrate OpenAI, Gemini, and other AI APIs into existing workflows and applications.",
  },
  {
    title: "API & Backend Development",
    description: "Build reliable REST APIs and backend services using Python and FastAPI.",
  },
  {
    title: "Business Process Automation",
    description:
      "Connect tools, databases, APIs, email systems, messaging platforms, and business workflows.",
  },
  {
    title: "Web Scraping & Data Automation",
    description: "Automate data collection, monitoring, and processing.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-line py-24 md:py-28">
      <div className="section-shell">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          What I can build for you
        </h2>

        <div className="mt-10 grid grid-cols-1 divide-y divide-line border-t border-line md:grid-cols-2 md:divide-x md:divide-y-0">
          {services.map((service) => (
            <div key={service.title} className="py-6 md:px-8 md:py-8">
              <span className="node-dot" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
