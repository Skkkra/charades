/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {},
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      blur: {},
      colors: {},
      boxShadow: {},
    },
  },
  plugins: [],
};
