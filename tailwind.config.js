
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brave: {
          bg: '#0A0A0A',
          card: '#111111',
          border: '#1C1C1C',
          text: {
            primary: '#E8E0D4',
            secondary: '#6B6B6B',
            muted: '#4A4A4A',
          },
          accent: '#C4A87C',
        }
      },
      letterSpacing: {
        widest: '0.2em',
      }
    },
  },
  plugins: [],
}
