import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-faint">
          &copy; {new Date().getFullYear()} Mohamed Ali Magri. Building systems.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/MagriMedAli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-ali-magri-8639ba436/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
