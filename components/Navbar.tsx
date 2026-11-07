"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ease, useDesktopMotion } from "./ui";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const desktopMotion = useDesktopMotion();

  // Desktop only: slide away while scrolling down, come back when scrolling up
  useEffect(() => {
    if (!desktopMotion) {
      setHidden(false);
      return;
    }
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 12) return;
      setHidden(y > 200 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [desktopMotion]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-120%" : 0 }}
        transition={{ duration: 0.45, ease }}
        // The colour-blend trick only on desktop; on phones it repaints every scroll frame, so use a solid bar
        className="fixed inset-x-0 top-0 z-[70] border-b border-edge bg-ink lg:border-0 lg:bg-transparent lg:mix-blend-difference"
      >
        <nav aria-label="Primary" className="section-shell flex items-center justify-between py-5 text-white">
          <a href="#home" className="group font-display text-base font-bold uppercase tracking-[-0.02em] md:text-lg">
            Mohamed Ali Magri
            <span className="inline-block transition-transform duration-300 group-hover:rotate-90">®</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative font-mono text-xs uppercase tracking-[0.16em]">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-white transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 h-px w-6 bg-white transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-6 bg-white transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="on-dark fixed inset-0 z-[65] flex flex-col justify-between bg-forest px-4 pb-8 pt-24 text-paper lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease }}
                    className="flex items-baseline gap-4 font-display text-6xl font-extrabold uppercase tracking-[-0.05em]"
                  >
                    <span className="font-mono text-xs font-normal tracking-normal text-lime">0{i + 1}</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:meddali.magri@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-sm text-lime"
            >
              meddali.magri@gmail.com <ArrowUpRight size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
