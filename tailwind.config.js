/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
}

