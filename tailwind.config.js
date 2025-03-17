/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/*.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#344861',
        secondary: '#BFC6D4',
        active: '#E2EBF3',
        focus: '#BBDEFB'
      },
      fontFamily: {
        poppins: 'Poppins'
      },
      fontFamily:{
        poppins:"Poppins"
      }
    }
  },
  plugins: [],
}
