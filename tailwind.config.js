const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, './pages/**/*.{ts,tsx}'),
    path.join(__dirname, './components/*.{ts,tsx}')
  ],
  theme: {
    extend: {
      spacing: {
        5: '5em'
      }
    }
  },
  plugins: []
};
