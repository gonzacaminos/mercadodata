module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        astronaut: {
          DEFAULT: '#2D3277',
          darker: '#1B1F51'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
