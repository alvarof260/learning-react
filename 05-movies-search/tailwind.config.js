/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'viking': {
          '50': '#edfefe',
          '100': '#d0fafd',
          '200': '#a7f3fa',
          '300': '#6be8f5',
          '400': '#1dd0e7',
          '500': '#0cb6ce',
          '600': '#0d91ad',
          '700': '#12748c',
          '800': '#185f72',
          '900': '#184e61',
          '950': '#0a3342',
      },      
      },
      gridTemplateColumns:{
        '1': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}

