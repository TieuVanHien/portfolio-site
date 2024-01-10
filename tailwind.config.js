const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, './pages/**/*.{ts,tsx}'),
    path.join(__dirname, './components/*.{ts,tsx}')
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '90vh': '90vh'
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
};
