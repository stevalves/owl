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
        "forest-100": "#F0F2DF",
        "forest-200": "#A8BCB0",
        "forest-300": "#517356",
        "forest-400": "#516D73",
        "forest-500": "#305040",
        "forest-600": "#1C402C",
        "forest-700": "#011526",
      },
    },
    animation: {
      "pulse-and-up": "pulse 5s forwards",
      spin: "spinner 1s linear infinite",
      twinkleLight: "8s ease 0ms infinite normal none running twinkingLight",
      goDown: "goDown 2s ease-in-out infinite",
      goRight: "goRight 2s ease-in-out infinite",
      bgPlim: "plim 1s ease-in-out infinite",
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
        "0%": { transform: "translateY(0) rotate(90deg)" },
        "25%": { transform: "translateY(-4px) rotate(90deg)" },
        "50%": { transform: "translateY(0) rotate(90deg)" },
        "75%": { transform: "translateY(-4px) rotate(90deg)" },
        "100%": { transform: "translateY(0) rotate(90deg)" },
      },
      goRight: {
        "0%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-4px)" },
        "50%": { transform: "translateX(0)" },
        "75%": { transform: "translateX(-4px)" },
        "100%": { transform: "translateX(0)" },
      },
      twinkingLight: {
        "30%": { opacity: "0.6" },
        "70%": { opacity: "0.4" },
        "100%": { opacity: "0.6" },
      },
    },
  },
  plugins: [],
};
