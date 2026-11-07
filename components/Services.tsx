"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { BigTitle, Label, ease } from "./ui";

const services = [
  {
    title: "AI Workflow Automation",
    description: "Repetitive processes automated end to end with n8n and AI — trigger, decision, database, confirmation.",
    tags: ["n8n", "Webhooks", "Human-in-the-loop"],
  },
  {
    title: "AI Agents & Chatbots",
    description: "Assistants on WhatsApp, Telegram or your site that answer from your own data and take real actions.",
    tags: ["Gemini", "Groq", "RAG"],
  },
  {
    title: "APIs & Backends",
    description: "Reliable REST APIs and backend services in Python and FastAPI, backed by PostgreSQL.",
    tags: ["FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "Websites & Web Apps",
    description: "Crafted sites and dashboards in React and Next.js, with motion and detail that make a brand feel alive.",
    tags: ["React", "Next.js", "Framer Motion"],
  },
  {
    title: "Scraping & Data",
    description: "Automated data collection, monitoring and processing on a schedule.",
    tags: ["Python", "Playwright"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-paper py-24 text-ink md:py-40">
      <div className="section-shell">
        <Label className="text-moss">Services</Label>
        <BigTitle
          className="mt-6"
          lines={[
            "What I can",
            <>
              build <span className="font-serif font-normal lowercase italic tracking-[-0.02em] text-moss">for you</span>
            </>,
          ]}
        />

        <ul className="mt-16 border-t border-ink/15 md:mt-24">
          {services.map((s, i) => (
            <motion.li
              data-reveal
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.04, ease }}
              className="group relative overflow-hidden border-b border-ink/15"
            >
                {/* Cobalt fill that rises on hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 bg-forest transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                />
                <div className="relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-7 transition-colors duration-500 group-hover:text-paper md:grid-cols-[5rem_1.2fr_1fr_auto] md:gap-8 md:px-4 md:py-10">
                  <span className="font-mono text-xs text-stone transition-colors group-hover:text-lime">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[clamp(1.6rem,3.6vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-3">
                    {s.title}
                  </h3>
                  <div className="col-span-2 col-start-2 md:col-span-1 md:col-start-auto">
                    <p className="text-sm leading-relaxed text-stone transition-colors group-hover:text-paper/80">
                      {s.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/15 px-2.5 py-0.5 font-mono text-[11px] text-stone transition-colors group-hover:border-paper/30 group-hover:text-paper"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="row-start-1 col-start-3 grid h-11 w-11 place-items-center rounded-full border border-ink/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink md:col-start-4 md:h-14 md:w-14">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
