/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: { 'sans': 'Poppins' },
      colors: {
        transparent: 'transparent',
        primary: '#4E2EC3',
        white: {
          900: '#fff',
          800: '#FFFEFB',
          700: '#F5F4F1'
        },
        black: {
          900: '#000',
          800: '#1d1c1c',
          700: '#313D44',
          600: '#4B4848',
        },
        gray: {
          900: '#2D2A2A',
          800: '#656464',
          700: '#B0B0B0',
          600: '#CCCBC8',
        }
      }
    },
  },
  plugins: [],
}

