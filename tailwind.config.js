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
      borderRadius: {
        left: "8px 0 0 8px",
        right: "0 8px 8px 0",
        bottom: "8px 8px 0 0",
        top: "0 0 8px 8px",
      },
      colors: {
        "forest-50": "#cad3db",
        "forest-100": "#b6c7d6",
        "forest-200": "#96bad9",
        "forest-300": "#6585a1",
        "forest-400": "#547da1",
        "forest-500": "#335a7d",
        "forest-600": "#1c3e5c",
        "forest-700": "#103454",
        "forest-800": "#061e33",
        "forest-900": "#020e1a",
      },
    },
    animation: {
      "pulse-and-up": "pulse 5s forwards",
      spin: "spinner 1s linear infinite",
      twinkleLight: "8s ease 0ms infinite normal none running twinkingLight",
      goDown: "goDown 2s ease-in-out infinite",
      goRight: "goRight 2s ease-in-out infinite",
      bgPlim: "plim 1s ease-in-out infinite",
      blinkCursor: "blinkCursor 1s infinite normal",
    },
    keyframes: {
      pulse: {
        "0%": { transform: "scale(1)", opacity: "100%" },
        "35%": {
          transform: "scale(1.3)",
          opacity: "100%",
          filter: "brightness(70%)",
        },
        "80%": { transform: "scale(1)", opacity: "100%" },
        "100%": {
          transform: "translateY(-100px)",
          opacity: "0",
        },
      },
      spinner: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      goDown: {
        "0%": { transform: "translateY(0)" },
        "25%": { transform: "translateY(-8px)" },
        "50%": { transform: "translateY(4px)" },
        "75%": { transform: "translateY(-8px)" },
        "100%": { transform: "translateY(0)" },
      },
      twinkingLight: {
        "30%": { opacity: "0.6" },
        "70%": { opacity: "0.4" },
        "100%": { opacity: "0.6" },
      },
      blinkCursor: {
        from: { borderRight: "2px solid #b6c7d6" },
        to: { borderRight: "transparent" },
      },
    },
  },
  plugins: [],
};
