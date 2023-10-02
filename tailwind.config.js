/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
  "./src/.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
    },
    fontSize:{
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [
    require('@material-tailwind/react'),
    require('flowbite/plugin')

  ],
}

