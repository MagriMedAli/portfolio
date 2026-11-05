"use client";

import { useEffect, useState } from "react";
import { Linkedin, Github, Copy, Check, ArrowUpRight } from "lucide-react";
import { BigTitle, Label, Magnetic, Reveal } from "./ui";

const EMAIL = "meddali.magri@gmail.com";

function TunisClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Tunis",
      hour: "2-digit",
      minute: "2-digit",
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 15_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ?? "--:--"}</span>;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="on-dark relative overflow-hidden bg-ink py-24 text-paper md:py-40">
      <div className="section-shell">
        <Label className="text-lime">Contact</Label>

        <div className="mt-6 grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_auto]">
          <BigTitle
            lines={[
              "Got a process",
              "that eats",
              <>
                your <span className="font-serif font-normal lowercase italic tracking-[-0.02em] text-lime">week?</span>
              </>,
            ]}
          />

          <Reveal className="flex justify-center lg:justify-end">
            <Magnetic strength={0.4}>
              <a
                href={`mailto:${EMAIL}`}
                className="group relative grid h-48 w-48 place-items-center rounded-full bg-lime text-ink transition-transform duration-500 hover:scale-105 md:h-60 md:w-60"
              >
                <span className="text-center font-display text-2xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] md:text-3xl">
                  Let&apos;s
                  <br />
                  automate
                  <br />
                  it
                </span>
                <ArrowUpRight
                  size={26}
                  className="absolute right-9 top-9 transition-transform duration-500 group-hover:rotate-45 md:right-12 md:top-12"
                />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-edge md:grid-cols-3">
            <button
              type="button"
              onClick={copy}
              className="group flex items-center justify-between gap-4 bg-coal p-6 text-left transition-colors hover:bg-coal2 md:p-8"
              aria-label="Copy email address"
            >
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {copied ? "Copied to clipboard" : "Email — click to copy"}
                </span>
                <span className="mt-2 block break-all font-display text-lg font-semibold md:text-xl">{EMAIL}</span>
              </span>
              {copied ? <Check size={18} className="shrink-0 text-lime" /> : <Copy size={18} className="shrink-0 text-fog group-hover:text-lime" />}
            </button>
            <div className="bg-coal p-6 md:p-8">
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Phone</span>
              <a href="tel:+21620034442" className="mt-2 block font-display text-lg font-semibold hover:text-lime md:text-xl">
                +216 20 034 442
              </a>
            </div>
            <div className="bg-coal p-6 md:p-8">
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Local time</span>
              <span className="mt-2 block font-display text-lg font-semibold md:text-xl">
                <TunisClock /> · Monastir, TN
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mohamed-ali-magri-8639ba436/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-edge px-5 py-3 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/MagriMedAli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-edge px-5 py-3 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
