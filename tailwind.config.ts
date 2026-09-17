import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0E12",
        surface: "#12161C",
        surface2: "#181D25",
        line: "#232A33",
        ink: "#E7EAEE",
        muted: "#8B94A0",
        faint: "#5B6472",
        signal: "#F2A340",
        signaldim: "#8A5E27",
        wire: "#3D9C8A",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        node: "0 0 0 1px rgba(242,163,64,0.25), 0 8px 30px -12px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
