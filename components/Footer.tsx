import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="on-dark overflow-hidden bg-cobalt pt-10 text-paper">
      <div className="section-shell flex flex-col justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] sm:flex-row">
        <p>© {new Date().getFullYear()} Mohamed Ali Magri</p>
        <p className="text-paper/70">AI Automation &amp; Full-Stack Developer</p>
        <a href="#home" className="inline-flex items-center gap-1.5 hover:text-lime">
          Back to top <ArrowUp size={13} />
        </a>
      </div>
      <p
        aria-hidden="true"
        className="mt-8 select-none whitespace-nowrap text-center font-display text-[11.4vw] font-extrabold uppercase leading-[0.78] tracking-[-0.06em] text-paper"
      >
        Mohamed Ali Magri
      </p>
    </footer>
  );
}
