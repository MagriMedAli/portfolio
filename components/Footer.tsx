import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-lime pt-10 text-ink">
      <div className="section-shell flex flex-col justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] sm:flex-row">
        <p>© {new Date().getFullYear()} Mohamed Ali Magri</p>
        <p className="text-ink/60">AI Automation &amp; Full-Stack Developer</p>
        <a href="#home" className="inline-flex items-center gap-1.5 hover:text-moss">
          Back to top <ArrowUp size={13} />
        </a>
      </div>
      <p
        aria-hidden="true"
        className="mt-8 select-none whitespace-nowrap text-center font-display text-[9.8vw] font-extrabold uppercase leading-[0.78] tracking-[-0.06em] text-ink"
      >
        Mohamed Ali Magri
      </p>
    </footer>
  );
}
