/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: '#0B0F19',
        primary: '#7C3AED',
        secondary: '#6366F1',
        accent: '#A78BFA',
        text: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
