/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#E0F7FA', // Light blue
        secondary: '#FFFFFF', // White
        accent: '#FBBF24', // Yellow for buttons
      },
    },
  },
  plugins: [],
};