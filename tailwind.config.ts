import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          teal: "#14b8a6",
          emerald: "#10b981",
          rose: "#f43f5e",
          amber: "#f59e0b",
          cyan: "#06b6d4",
          blue: "#3b82f6",
        },
        campaign: {
          shield: "#06b6d4",
          heroGold: "#f59e0b",
          superbugCoral: "#f43f5e",
          armorBlue: "#3b82f6",
          darkTeal: "#0a252e",
        },
      },
      boxShadow: {
        "glow-teal": "0 0 25px -5px rgba(20, 184, 166, 0.4)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.45)",
        "glow-blue": "0 0 25px -5px rgba(59, 130, 246, 0.45)",
        "glow-rose": "0 0 25px -5px rgba(244, 63, 94, 0.4)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.4)",
        "glow-amber": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

