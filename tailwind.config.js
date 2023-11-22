// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #303F85 0%, #3D3D3D 0.01%, #000 52.4%, #190335 100%)',
        'custom-gradient2':'linear-gradient(135deg, #050000 0%, #070C39 0.01%, #000 55.21%);'
      },
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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
