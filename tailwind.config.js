/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
  },
  fontSize: {
    s: '0.813rem',
    ss:'0.625rem'
  }, 
  },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
