/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A3263',
        steel: '#547792',
        gold: '#FAB95B',
        cream: '#E8E2DB',
      },
    },
  },
  plugins: [],
}