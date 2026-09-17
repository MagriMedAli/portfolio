import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-24 md:py-28">
      <div className="section-shell">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            Featured projects
          </h2>
          <p className="hidden font-mono text-xs text-faint sm:block">
            {projects.length} systems shipped
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-signal/50"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface2">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="font-mono text-xs text-signal">{project.tag}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-2 node-dot" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-line px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-signal"
                  >
                    View project
                    <ArrowUpRight size={15} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
