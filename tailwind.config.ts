import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#6FB89E",
          deep: "#2D6A4F",
          soft: "#E6F2EC",
          tint: "#F2F8F4",
        },
        coral: {
          DEFAULT: "#E07057",
          deep: "#C75A41",
          soft: "#FCE4DC",
        },
        sky: {
          DEFAULT: "#7FB9E0",
          deep: "#4F94C7",
          soft: "#E5F1F9",
        },
        butter: "#FEF3C7",
        ink: "#1A3D2E",
        charcoal: "#2D4A3E",
        muted: "#5A7A6A",
        line: "#E5EBE8",
        canvas: "#FAFCFB",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(45,106,79,0.16)",
        card: "0 10px 30px rgba(45,106,79,0.06)",
        lifted: "0 30px 60px rgba(45,106,79,0.18)",
      },
      keyframes: {
        heroFade: {
          "0%": { opacity: "0.001", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        heroFade: "heroFade 600ms ease both",
      },
    },
  },
  plugins: [],
} satisfies Config;
