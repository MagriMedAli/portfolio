import { stackGroups } from "@/data/stack";

export default function TechStack() {
  return (
    <section className="border-t border-line py-24 md:py-28">
      <div className="section-shell">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Tools of the trade
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stackGroups.map((group) => (
            <div key={group.label} className="border-l border-line pl-5">
              <p className="font-mono text-xs text-signal">{group.label}</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
