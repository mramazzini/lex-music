import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        bob: "bob 10s ease-in-out infinite",
        bobAndWobble: "bobAndWobble 10s ease-in-out infinite",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
        bobAndWobble: {
          "0%, 100%": { transform: "translateY(-10px) rotate(-2deg)" },
          "50%": { transform: "translateY(10px) rotate(2deg)" },
        },
        spinFade: {
          "0%": { transform: "rotate(0deg)", opacity: "0" },
          "50%": { transform: "rotate(180deg)", opacity: "1" },
          "100%": { transform: "rotate(360deg)", opacity: "0" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0B0195",

          secondary: "#5301d3",

          accent: "#e761e5",

          neutral: "#1C274C",

          "base-100": "#1C274C",

          info: "#00d1ff",

          success: "#4ee844",

          warning: "#ec6700",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
