import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Escuro frio. Sem segunda cor de marca: o acento é o branco.
        void: "#08090C",
        ink: "#0B0D12",
        card: "#11141B",
        card2: "#161A23",
        line: "#1B1F29",
        line2: "#2A3040",
        text: "#F3F5F9",
        text2: "#A7AFBE",
        text3: "#6C7484",
        text4: "#4A505D",
        // Estados de dado. Existem porque os sistemas distinguem
        // ausente de zero, e a interface precisa dizer isso.
        ok: "#5FBF8C",
        warn: "#D6A448",
        alert: "#DD6A5C",
        hint: "#A8C7E8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "ui-serif", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      maxWidth: {
        content: "78rem",
        prose2: "38rem",
      },
      letterSpacing: {
        widest2: "0.22em",
        tightest: "-0.035em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 38s linear infinite",
        blink: "blink 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
