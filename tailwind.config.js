/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'kuwait': {
          'gold': '#D4AF37',
          'green': '#007A3D',
          'red': '#CE1126',
          'black': '#000000',
          'sand': '#F5E8C7',
        },
        'indian': {
          'saffron': '#FF9933',
          'white': '#FFFFFF',
          'green': '#138808',
          'spice': '#9C4221',
        }
      },
      fontFamily: {
        'arabic': ['"Noto Sans Arabic"', 'sans-serif'],
        'english': ['"Playfair Display"', 'serif'],
        'urdu': ['"Noto Nastaliq Urdu"', 'serif'],
      },
      animation: {
        'arabesque': 'arabesque 8s ease-in-out infinite',
        'minaret': 'minaret 4s ease-in-out infinite',
        'date-palm': 'datePalm 6s ease-in-out infinite',
        'spice-float': 'spiceFloat 5s ease-in-out infinite',
        'kebab-rotate': 'kebabRotate 20s linear infinite',
        'henna': 'henna 3s ease-in-out infinite',
      },
      keyframes: {
        arabesque: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(180deg)' },
        },
        minaret: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        datePalm: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        spiceFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(10deg)' },
        },
        kebabRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        henna: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'arabic-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23D4AF37\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'spice-texture': "linear-gradient(45deg, #9C4221 25%, transparent 25%), linear-gradient(-45deg, #9C4221 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #9C4221 75%), linear-gradient(-45deg, transparent 75%, #9C4221 75%)",
      }
    },
  },
  plugins: [],
}