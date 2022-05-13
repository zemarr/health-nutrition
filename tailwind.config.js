module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1310px'
    },
    extend: {
      fontFamily: {
        metro: ['Metropolis', 'sans-serif']
      },
      colors: {
        brandGreen: '#00A600',
        greenDark: '#F7FCF7'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
