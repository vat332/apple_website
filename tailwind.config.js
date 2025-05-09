/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "var(--color-blue)",
        gray: {
          DEFAULT: "var(--color-gray)",
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
        },
        zinc: "var(--color-zinc)",
      },
    },
  },
  plugins: [],
};
