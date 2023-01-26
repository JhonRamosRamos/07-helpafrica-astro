/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "@root/**/**/*.{astro,html,vue,tsx,jsx,ts,js,css,scss}",
    "@components/*.{astro,html,vue,tsx,jsx,ts,js,css,scss}",

  ],
  corePlugins: [
    'accentColor',
    'aspectRatio',
    'accessibility',
    'appearance',

  ],
  darkMode: 'class',
  important: true,
  
  theme: {
    extend: {},
  },
  plugins: [],
}
