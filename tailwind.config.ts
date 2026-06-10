import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        creme: "#FBF6EF",
        "creme-tief": "#F4EADE",
        tinte: "#352B40",
        aubergine: "#3A2E4D",
        pflaume: "#5A4769",
        altrosa: "#C98B9B",
        "altrosa-tief": "#B06A7C",
        mauve: "#CDB4DB",
        salbei: "#9CAE8B",
        "salbei-tief": "#76886A",
        gold: "#BE9A53",
        "gold-weich": "#E7D6AE",
        sand: "#E3D6C2",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-mulish)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        field: "15px",
        pill: "30px",
      },
      boxShadow: {
        soft: "0 18px 40px -28px rgba(58,46,77,.5)",
      },
      maxWidth: {
        wrap: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
