/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#a78bfa",
        lightGray: "#f3f4f6",
      },
    },
  },
  plugins: [],
}