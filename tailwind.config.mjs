/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: '#aae8ff',
        secondary: '#0d2d52',
        tertiary: '#2687f2',
      }
    },
  },
  plugins: [],
}
