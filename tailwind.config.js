module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        metro: ['Metropolis', 'sans-serif']
      },
      colors: {
        brandGreen: '#00A600',
        greenDark3: '#F7FCF7',
        greenDark10: '#E6F6E6'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
