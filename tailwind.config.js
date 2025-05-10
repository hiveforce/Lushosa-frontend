// tailwind.config.js
import plugin from 'tailwindcss/plugin'

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e675a9', // IntelliSense sees this
          light: '#fdf1f6',
          header: '#e6bddb'
        },
        secondary: {
          DEFAULT: '#0a0a0a', // IntelliSense sees this
          light: '#e7e7e7'
        }
        // …others…
      }
    }
  },
  plugins: [
    // This plugin wires your CSS vars to the fallbacks above
    plugin(({ addBase, theme }) => {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary.DEFAULT'),
          '--color-primary-light': theme('colors.primary.light'),
          '--color-primary-header': theme('colors.primary.header'),
          '--color-secondary': theme('colors.secondary.DEFAULT'),
          '--color-secondary-light': theme('colors.secondary.light')
          // …etc…
        }
      })
    })
  ]
}
