/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,vue,tsx,jsx,ts,js,css,scss}'

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
