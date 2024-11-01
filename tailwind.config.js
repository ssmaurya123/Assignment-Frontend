/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 20px 40px -8px rgba(16, 24, 40, 0.1)', // equivalent to #1018281A
        'custom-sm': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}

