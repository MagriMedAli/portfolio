import { stackGroups } from "@/data/stack";

const tech = stackGroups.flatMap((g) => g.items);
const words = ["AI Agents", "Workflow Automation", "RAG", "APIs", "Websites", "WhatsApp Bots", "Dashboards"];

function Tape({
  items,
  className,
  reverse = false,
}: {
  items: string[];
  className: string;
  reverse?: boolean;
}) {
  return (
    <div className={`flex overflow-hidden py-4 md:py-5 ${className}`}>
      <ul className={`flex w-max shrink-0 items-center ${reverse ? "animate-marqueeRev" : "animate-marquee"}`}>
        {[...items, ...items].map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-6 pr-6 font-display text-2xl font-extrabold uppercase tracking-[-0.03em] md:text-4xl"
          >
            {item}
            <span className="font-serif text-3xl font-normal md:text-5xl">✺</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Two crossing tapes between the hero and the work section. */
export default function Marquee() {
  return (
    <div
      className="relative z-10 overflow-hidden bg-[linear-gradient(to_bottom,#242A25_50%,#F1F0E8_50%)] py-12 md:py-16"
      aria-label="What I do and the tools I use"
    >
      <div className="-rotate-[3deg] scale-110">
        <Tape items={words} className="bg-lime text-ink" />
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[2.5deg] scale-110">
        <Tape items={tech} className="bg-ink text-paper" reverse />
      </div>
    </div>
  );
}
