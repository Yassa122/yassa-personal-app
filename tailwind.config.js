// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', '"Inter Fallback"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter Variable"', '"Inter Fallback"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', '"JetBrains Mono Fallback"', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #303F85 0%, #3D3D3D 0.01%, #000 52.4%, #190335 100%)',
        'custom-gradient2': 'linear-gradient(135deg, #050000 0%, #070C39 0.01%, #000 55.21%)',
      },
      colors: {
        'gray-custom': '#BBBBBB',
        'dark-grey': '#0a0a0a',
      },
      fontSize: {
        '40px': '40px',
        '24px': '24px',
      },
      fontWeight: {
        '800': '800',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
