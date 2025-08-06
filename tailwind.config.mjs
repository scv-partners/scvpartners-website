/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a',   // Darker professional blue
        'secondary': '#374151', // Sophisticated dark gray
        'accent': '#059669',    // Trustworthy dark green
      },
    },
  },
  plugins: [],
}
