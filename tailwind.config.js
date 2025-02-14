/** @type {import('tailwindcss').Config} */
export default {
  // Files we want to watch for tailwind classes are added in content
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

