/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1280px',
        'phone': '400px',
      }
    },
  },
  plugins: [],
}
