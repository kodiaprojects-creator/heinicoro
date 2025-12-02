/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fca311',
        dark: '#1a1a1a',
        'dark-lighter': '#2a2a2a',
        'hero-bg': '#252525',
      },
      fontFamily: {
        enriqueta: ['Enriqueta', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
