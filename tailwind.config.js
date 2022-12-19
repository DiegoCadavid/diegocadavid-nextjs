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
          100: "#f7f7f7",
          200: "#f0f0f0",
          300: "#e8e8e8",
          400: "#e1e1e1",
          500: "#d9d9d9",
          600: "#aeaeae",
          700: "#828282",
          800: "#575757",
          900: "#2b2b2b",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      screens: {
        desktop: "1366px",
      },
      height: {
        "viewport-desktop" : "calc( 100vh - 60px )"
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
