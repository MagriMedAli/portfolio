"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ease } from "./ui";

const KEY = "mam-intro-seen";

/** Counter + name, then a cobalt curtain lifts. Once per browser session. */
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  // Tell the hero it can start animating once the curtain starts lifting
  useEffect(() => {
    if (show) return;
    document.documentElement.dataset.intro = "done";
    window.dispatchEvent(new Event("intro:done"));
  }, [show]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {
      // storage blocked — just play it
    }
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    const start = performance.now();
    const DURATION = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 250);
    };
    raf = requestAnimationFrame(tick);
    // Safety net: never hold the page if animation frames are paused (background tab)
    const fallback = setTimeout(() => setShow(false), DURATION + 1200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-cobalt p-5 text-paper md:p-10"
          aria-hidden="true"
        >
          <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
            <span>Portfolio ©{new Date().getFullYear()}</span>
            <span>Sousse, TN</span>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="font-display text-[clamp(2.4rem,8vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em]"
            >
              Mohamed Ali Magri
            </motion.p>
          </div>
          <div className="flex items-end justify-between">
            <span className="font-serif text-2xl italic text-lime md:text-3xl">loading the good stuff</span>
            <span className="font-display text-[clamp(4rem,14vw,12rem)] font-extrabold leading-none tracking-[-0.06em] tabular-nums">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
