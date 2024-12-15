/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2683b2",
        secondary: "#DCDCDC",
        third: "#90d5ff",
        purple: "#DCDCDC",
      },
      fontFamily: {
        playwright: ['Playwright England SemiJoined', 'sans-serif'], // Add your custom font
      },
      keyframes: {
        cursorAnimation: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
        scrollIcons: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        cursorAnimation: 'cursorAnimation 1s ease-out forwards', // Adjust duration as needed
        scrollIcons: 'scrollIcons 20s linear infinite', // Continuous scrolling
      },
      scale: {
        '67': '0.67',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
