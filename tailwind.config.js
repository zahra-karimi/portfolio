/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1B4965",
          hover: "#163a52",
          light: "#CAE9FF",
          soft: "#BEE9E8",
          accent: "#62B6CB",
          secondary: "#5FA8D3",
        },
      }
    },
  },
  plugins: [],
};

