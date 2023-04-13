/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f9f9f9",
          200: "#f3f3f3",
          300: "#ededed",
          400: "#e7e7e7",
          500: "#e1e1e1",
          600: "#b4b4b4",
          700: "#878787",
          800: "#5a5a5a",
          900: "#2d2d2d",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      screens: {
        desktop: "1366px",
      },
      height: {
        "viewport-desktop": "calc( 100vh - 60px )",
      },
      transitionProperty :{
        position: "top, left, right, bottom",
        size: "width, height"
      }
    },
    container: {
      center: true,
      // Optional
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
  },
  plugins: [],
};
