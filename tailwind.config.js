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
      },
      boxShadow: {
        success: '0 1px 1px rgb(0 0 0 / 8%) inset, -1px 1px 8px 4px rgb(126 239 104 / 60%)',
        error: '0 1px 1px rgb(0 0 0 / 8%) inset, -1px 1px 8px 4px rgb(239 104 110 / 60%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
