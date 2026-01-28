/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display SC"', 'serif'],
        Inter: ['"Inter"', 'sans-serif'],
        LibreBaskerville: ['"Libre Baskerville"', 'serif'],
        IrishGrover: ['"Irish Grover"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
