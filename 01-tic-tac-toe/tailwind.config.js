/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway': ['Raleway', 'sans-serif']
      },
      colors:{
        'navy': '#211951',
        'teal': '#836FFF',
        'mint': '#15F5BA',
        'whiteCustom': '#F0F3FF'
      }
    },
  },
  plugins: [],
}

