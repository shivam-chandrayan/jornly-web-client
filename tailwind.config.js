/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    "text-accent-orange",
    "text-accent-green",
    "text-accent-blue",
    "bg-accent-orange",
    "bg-accent-green",
    "bg-accent-blue",
  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#12C386",
        secondary: "#052E16",
        accent: {
          orange: "#F59E0B",
          green: "#12C386",
          blue: "#06B6D4",
        },
        background: {
          light: "#F4F6F9",
          dark: "#000102",
        },
        text: {
          primary: "#282828",
          secondary: "#929292",
        },
      },
    },
  },
  plugins: [],
};
