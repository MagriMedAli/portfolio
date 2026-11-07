"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import WorkflowCanvas from "./WorkflowCanvas";
import { ease, Magnetic, useDesktopMotion } from "./ui";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** One line of the giant name, font-size fitted so it spans the full width exactly. */
function FitLine({ text, ready, delay }: { text: string; ready: boolean; delay: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState<number | null>(null);

  useIsoLayoutEffect(() => {
    const fit = () => {
      if (!wrap.current || !inner.current) return;
      inner.current.style.fontSize = "100px";
      const w = inner.current.offsetWidth;
      const next = (wrap.current.clientWidth / w) * 100 * 0.995;
      inner.current.style.fontSize = `${next}px`;
      setSize(next);
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (wrap.current) ro.observe(wrap.current);
    return () => ro.disconnect();
  }, [text]);

  return (
    <div ref={wrap} className="w-full">
      <span
        ref={inner}
        style={{ fontSize: size ? `${size}px` : "15vw" }}
        className="inline-block whitespace-nowrap font-display font-extrabold uppercase leading-[0.8] tracking-[-0.055em]"
      >
        {text.split("").map((ch, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
            <motion.span
              className="hero-letter"
              initial={{ y: "105%" }}
              animate={ready ? { y: 0 } : { y: "105%" }}
              transition={{ duration: 1, delay: delay + i * 0.035, ease }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          </span>
        ))}
      </span>
    </div>
  );
}

function SpinBadge() {
  return (
    <Magnetic>
      <a
        href="#contact"
        aria-label="Available for freelance — get in touch"
        className="group relative grid h-36 w-36 place-items-center md:h-44 md:w-44"
        data-cursor="Say hi"
      >
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spinSlow" aria-hidden="true">
          <defs>
            <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text fill="#F1F0E8" fontSize="14" fontFamily="var(--font-jbmono), monospace">
            <textPath href="#badge-circle" textLength="486" lengthAdjust="spacing">
              AVAILABLE FOR FREELANCE ✺ OPEN TO WORK ✺
            </textPath>
          </text>
        </svg>
        <span className="relative h-20 w-20 transition-transform duration-500 group-hover:scale-110 md:h-24 md:w-24">
          <span className="block h-full w-full overflow-hidden rounded-full bg-lime">
            <Image src="/portrait-head.webp" alt="" fill sizes="96px" className="rounded-full object-cover" />
          </span>
          <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-ink text-lime ring-2 ring-forest">
            <ArrowUpRight size={16} strokeWidth={2.25} className="transition-transform duration-500 group-hover:rotate-45" />
          </span>
        </span>
      </a>
    </Magnetic>
  );
}

export default function Hero() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);
  const desktopMotion = useDesktopMotion();

  // Wait for the intro curtain before animating the name in
  useEffect(() => {
    if (document.documentElement.dataset.intro === "done") {
      setReady(true);
      return;
    }
    const onDone = () => setReady(true);
    window.addEventListener("intro:done", onDone);
    return () => window.removeEventListener("intro:done", onDone);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="on-dark relative overflow-hidden bg-forest pb-16 pt-24 text-paper md:pb-24 md:pt-28"
    >
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/25 pb-4 font-mono text-[11px] uppercase tracking-[0.18em]"
        >
          <span>AI Automation &amp; Full-Stack Developer</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-lime" />
            Monastir, Tunisia
          </span>
        </motion.div>

        <motion.h1 style={desktopMotion ? { y: nameY, opacity: nameOpacity } : undefined} className="mt-8 md:mt-10" aria-label="Mohamed Ali Magri">
          <span aria-hidden="true" className="block">
            <FitLine text="Mohamed" ready={ready} delay={0} />
            <FitLine text="Ali Magri" ready={ready} delay={0.15} />
          </span>
        </motion.h1>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 md:mt-14 lg:grid-cols-[1fr_auto_1.35fr] lg:gap-14">
          <motion.div
            data-reveal
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.55, ease }}
          >
            <p className="font-display text-2xl font-medium leading-[1.15] tracking-[-0.02em] md:text-3xl">
              I build AI systems that do the{" "}
              <span className="font-serif font-normal italic text-lime">busywork</span> — agents,
              workflows, APIs and the websites around them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-lime"
              >
                See the work
                <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
              </a>
              <a
                href="https://github.com/MagriMedAli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/40 px-6 py-3.5 text-sm font-medium transition-colors hover:border-lime hover:text-lime"
              >
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -40 }}
            animate={ready ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.7, ease }}
            className="hidden justify-center lg:flex"
          >
            <SpinBadge />
          </motion.div>

          <motion.div
            data-reveal
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            animate={ready ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.65, ease }}
          >
            <WorkflowCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
