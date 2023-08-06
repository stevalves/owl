/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "coffee-10": "#dfccaf",
        "coffee-50": "#d2c1b0",
        "coffee-100": "#ad6d2f",
        "coffee-200": "#8f755f",
        "coffee-300": "#6c4c36",
        "coffee-400": "#4a3a3a",
        "coffee-500": "#3b2f2f",
        "coffee-600": "#332a2a",
        "coffee-700": "#362626",
        "coffee-800": "#37251b",
        "coffee-900": "#1b1516",
      },
    },
    animation: {
      "pulse-and-up": "pulse 5s forwards",
      "spin": "spinner 1s linear infinite",
      "goDown": "goDown 2s ease-in-out .5s alternate infinite none running"
    },
    keyframes: {
      pulse: {
        "0%": { transform: "scale(1)", opacity: "100%" },
        "35%": { transform: "scale(1.3)", opacity: "100%", filter: "brightness(70%)" },
        "80%": { transform: "scale(1)", opacity: "100%" },
        "100%": {
          transform: "translateY(-100px)",
          opacity: "0",
        },
      },
      spinner: {
        "from": { transform: "rotate(0deg)" },
        "to": { transform: "rotate(360deg)" }
      },
      goDown: {
        "0%": {transform: "translateY(0)"},
        "25%": {transform: "translateY(-12px)"},
        "50%": {transform: "translateY(0)"},
        "75%": {transform: "translateY(-12)"},
        "100%": {transform: "translateY(0)"}
      }
    },
  },
  plugins: [],
};
