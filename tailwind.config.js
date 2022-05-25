/* eslint-disable object-curly-spacing */
/* eslint-disable quote-props */
module.exports = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'tablet': { 'max': '1024px' },
      'phone': { 'max': '480px' },
      'desk': { 'min': '1025px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'porange': 'rgb(255,122,32)',
      'lblue': 'rgb(31,83,179)',
      'mblue': 'rgb(20,51,109)',
      'dblue': 'rgb(8,17,34)',
      'lblueo': 'rgb(31,83,179,09)', // opacité 0.9
      'mblueo': 'rgb(20,51,109,09)', // opacité 0.9
      'dblueo': 'rgb(8,17,34,09)', // opacité 0.9
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
