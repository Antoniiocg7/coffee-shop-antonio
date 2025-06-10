/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          100: '#F5E6D3',
          200: '#E6C9A8',
          300: '#D4A373',
          400: '#BC6C25',
          500: '#A47148',
          600: '#7C4A3A',
          700: '#5C4033',
          800: '#3E2723',
          900: '#2C1810',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

