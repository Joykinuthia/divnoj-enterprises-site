/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy": "#0A1A44",
        "clean-bg": "#f5f5f5",
        "brand-orange": "#FF7F50",
        "gold": "#F2C94C",
        "peach": "#FDEBD0",
        "accent-orange": "#E86A19",
      },
    },
    fontFamily: {
      inter: ["'Inter'", "sans-serif"],
      heading: ["'Poppins'", "sans-serif"],
    },
  },
  plugins: [],
}

