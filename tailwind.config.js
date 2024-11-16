/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        headerColor: '#78350F',
        heroColor: '#0F172A',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        'end-50px': '50px',
      },
    },
  },
  plugins: [],
}