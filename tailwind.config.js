/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        poster: {
          cyan: '#008fc6',
          darkcyan: '#006c96',
          deepblue: '#004e70',
          lightcyan: '#e4f4fb',
          yellow: '#ffc20e',
          lightyellow: '#fff4cc',
          red: '#d31b26',
          darkred: '#a3111a',
          maroon: '#5c1717',
        }
      }
    },
  },
  plugins: [],
}
