/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'src/js/**/*.js',
    'src/js/*.js',
  ],
  theme: {
    fontFamily: {
      default: [
        '"Inter"',
        'sans-serif',
      ],
    }, 
    fontSize: {
      's': '12px',
      'sm': '14px',
      'sl': '15px',
      'base': '16px',
      'base2': '18px',
      'md': '20px',
      '2md': '26px',
      'lg': '36px',
      'xl': '42px',
      '2xl': '44px',
    },
    lineHeight: {
      10: '1',
      11: '1.1',
      115: '1.15',
      12: '1.2',
      125: '1.25',
      13: '1.3',
      14: '1.4',
      145: '1.45',
      15: '1.5',
      16: '1.6',
      17: '1.7',
      18: '1.8',
      19: '1.9',
      20: '2',
      225: '2.25',
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        DEFAULT: '100%',
        xl: '1130px',
      },
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'orange': '#F2994A',
        'turquoise': '#99EFD0',
        'purple': '#8476AA',
      },
    },
  },
  plugins: [],
}
