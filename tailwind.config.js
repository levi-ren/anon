/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        show: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        show: "show 0.3s ease-in normal",
        hide: "hide 0.3s ease-in normal",
      },
      colors: {
        black: "#080708",
        isabelle: "#F4F3EE",
        copper: "#B57F50",
        driftwood: {
          50: "#f8f4ee",
          100: "#ede3d4",
          200: "#ddc6ab",
          300: "#c9a27b",
          400: "#b57f50",
          500: "#a97249",
          600: "#915a3d",
          700: "#754433",
          800: "#633a30",
          900: "#56322d",
          950: "#311917",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
};
