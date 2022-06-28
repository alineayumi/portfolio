/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#6d8654',
        black: '#131411',
        white: '#edeced',
        // light theme
        primary: '#9C4145',
        secondary: '#775557',
        tertiary: '#7C571B',
        error: '#B4251E',
        background: '#F3DDDC',
        surface: '#F3DDDC',
        // dark theme
        primaryDark: '#FFB3B5',
        secondaryDark: '#E5BCBC',
        tertiaryDark: '#EFBF78',
        errorDark: '#F2B8B4',
        backgroundDark: '#201A1A',
        surfaceDark: '#524342'
      },
      padding: {
        hor: '32px',
        horSm: '36px'
      }
    }
  },
  plugins: []
}
