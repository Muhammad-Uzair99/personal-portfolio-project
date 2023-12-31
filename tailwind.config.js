/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#f2f2f2',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        'background': {
          50: '#e8e8fc',
          100: '#d1d1fa',
          200: '#a3a3f5',
          300: '#7575f0',
          400: '#4747eb',
          500: '#1919e6',
          600: '#1414b8',
          700: '#0f0f8a',
          800: '#0a0a5c',
          900: '#05052e',
          950: '#030317',
        },
        'primary': {
          50: '#e5e5ff',
          100: '#ccccff',
          200: '#9999ff',
          300: '#6666ff',
          400: '#3333ff',
          500: '#0000ff',
          600: '#0000cc',
          700: '#000099',
          800: '#000066',
          900: '#000033',
          950: '#00001a',
        },
        'secondary': {
          50: '#e8e8fd',
          100: '#d0d0fb',
          200: '#a2a2f6',
          300: '#7373f2',
          400: '#4444ee',
          500: '#1616e9',
          600: '#1111bb',
          700: '#0d0d8c',
          800: '#09095d',
          900: '#04042f',
          950: '#020217',
        },
        'accent': {
          50: '#e8e8fd',
          100: '#d1d1fa',
          200: '#a2a2f6',
          300: '#7474f1',
          400: '#4545ed',
          500: '#1717e8',
          600: '#1212ba',
          700: '#0e0e8b',
          800: '#09095d',
          900: '#05052e',
          950: '#020217',
        },
       },
       
    },
  },
  plugins: [],
}

