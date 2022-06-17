/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': '#6d8654',
        'black': '#131411',
        'white': '#edeced',
      },
      padding: {
        'hor': '32px',
        'hor-sm': '36px'
      }
    }
  },
  plugins: []
}
