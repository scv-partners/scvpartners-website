/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#F26419',
        'secondary': '#55DDE0',
        'accent': '#F6AE2D',
      },
    },
  },
  plugins: [],
}
