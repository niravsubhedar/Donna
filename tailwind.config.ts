import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#111115", canvas: "#0A0A0C", panel: "#121216", line: "rgba(255,255,255,.09)", violet: "#A78BFA" },
      boxShadow: { panel: "0 18px 60px rgba(0,0,0,.22)", glow: "0 0 80px rgba(139,92,246,.12)" },
      fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] }
    }
  },
  plugins: []
};
export default config;
