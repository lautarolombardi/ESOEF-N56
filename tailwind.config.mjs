/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      }
    },
    extend: {
      colors: {
        primary: '#aae8ff',
        secondary: '#0d2d52',
        tertiary: '#2687f2',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
