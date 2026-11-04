import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark side
        ink: "#0D0D0F",
        coal: "#151518",
        coal2: "#1D1D22",
        edge: "#2B2B32",
        fog: "#A6A6B0",
        faint: "#6E6E78",
        // Light side
        paper: "#EFEBE3",
        paper2: "#E4DFD4",
        stone: "#66645F",
        // Brand
        cobalt: "#2E3BFF",
        cobaltdeep: "#1F28C9",
        lime: "#D4F54A",
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
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,245,74,0.6)" },
          "50%": { boxShadow: "0 0 0 6px rgba(212,245,74,0)" },
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
