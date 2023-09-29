// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-custom': '#BBBBBB',
      },
      fontSize: {
        '40px': '40px',
      '24px': '24px',
      },
      fontWeight: {
        '800': '800',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
