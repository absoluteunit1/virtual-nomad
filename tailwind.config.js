module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        'pb-56': '56.25%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
