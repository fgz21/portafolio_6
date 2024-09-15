/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      animation: {
         flyIn: 'flyIn 0.5s ease-in-out',
      },
    },
  },
  variants: {},
  plugins: [],
}