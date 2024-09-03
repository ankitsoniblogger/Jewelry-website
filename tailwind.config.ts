/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          50: "#FFFAF0",
          100: "#FFF0C4",
          200: "#FFE08A",
          300: "#FFD054",
          400: "#FFC529",
          500: "#FFB800",
          600: "#CC9200",
          700: "#996E00",
          800: "#664900",
          900: "#332500",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
