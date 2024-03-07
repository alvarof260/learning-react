/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#16181C",
        "twitter-dark": "#000000",
        "twitter-light": "#71767B",
        "twitter-lighter": "#E7E9EA",
        "twitter-gray": "#1D1F23",
        "twitter-blueLight": "#1c93e4",
        "twitter-white": "#ffffff"
      },
      boxShadow: {
        'inset': 'inset 0 0 10px #000000'
      }
    },
  },
  plugins: [],
};
