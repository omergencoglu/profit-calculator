module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        init: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1.0)", opacity: "1" },
        },
      },
      animation: {
        init: "init 0.6s cubic-bezier(0,.5,.25,1)",
      },
    },
    maxWidth: {
      "9/10": "90vw",
    },
  },
  plugins: [],
};
