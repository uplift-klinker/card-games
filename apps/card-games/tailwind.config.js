const path = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  purge: [path.join(__dirname, '*.{ts,tsx}'), ...createGlobPatternsForDependencies(__dirname)],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
