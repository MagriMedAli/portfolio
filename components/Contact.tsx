import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-32">
      <div className="section-shell text-center">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Have a process that should be automated?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
          Tell me what you&apos;re trying to automate. I&apos;ll help turn it into a
          practical system.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:meddali.magri@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-signal px-6 py-3 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ali-magri-8639ba436/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-signal/60 hover:text-signal"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-faint">
          meddali.magri@gmail.com &nbsp;/&nbsp; +216 20 034 442
        </p>
      </div>
    </section>
  );
}
