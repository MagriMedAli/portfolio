import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette: graphite #111412 · forest charcoal #242A25 · warm ivory #F1F0E8 · acid green #B8E36A
        // Dark side
        ink: "#111412",
        coal: "#1A1E1B",
        coal2: "#242A25",
        edge: "#333B35",
        fog: "#A3AAA2",
        faint: "#6F776F",
        // Light side
        paper: "#F1F0E8",
        paper2: "#E6E5DB",
        stone: "#5F635C",
        // Brand
        forest: "#242A25",
        forestdeep: "#1A1F1B",
        lime: "#B8E36A",
        // Acid green darkened enough to read as text on ivory
        moss: "#4B6620",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      maxWidth: {
        content: "88rem",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marqueeRev: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(184,227,106,0.6)" },
          "50%": { boxShadow: "0 0 0 6px rgba(184,227,106,0)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marqueeRev: "marqueeRev 34s linear infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        spinSlow: "spinSlow 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
