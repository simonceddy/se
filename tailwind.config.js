const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    /* fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.4rem',
      '2xl': '1.6rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.7rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }, */
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'Inconsolata',
          ...defaultTheme.fontFamily.mono
        ]
      },
      /* colors: {
        'dark-blue': '#296fa8',
        'med-blue': '#3490dc',
      } */
    }
  },
  variants: [
    'responsive',
  ],
  plugins: [],
};
