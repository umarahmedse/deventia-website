import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-hero": "url('/demoBg.png')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "100px": "100px",
      "200px": "200px",
      "300px": "300px",
      "400px": "400px",
      "500px": "500px",
      "600px": "600px",
      "700px": "700px",
      "800px": "800px",
      "900px": "900px",
      "1000px": "1000px",
      "1100px": "1100px",
      "1200px": "1200px",
      "1300px": "1300px",
      "1400px": "1400px",
      "1500px": "1500px",
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), addVariablesForColors],
  darkMode: "class",
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
