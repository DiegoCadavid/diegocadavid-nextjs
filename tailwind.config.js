/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fdfcfe",
          200: "#fbfafd",
          300: "#f9f7fc",
          400: "#f7f5fb",
          500: "#f5f2fa",
          600: "#c4c2c8",
          700: "#939196",
          800: "#626164",
          900: "#313032"
        },
        background: {
          200: "#EAEAEA",
          300: "#F6F3F3",
          400: "#FFFFFF",
          500: "#FFFFFF"
        },
        "background-dark" : {
          200: "#2E2E2E",
          300: "#272626",
          400: "#1C1C1C",
          500: "#161616"
        },
        "stroke" : {
          500 : "#E3E3E3"
        },
        "stroke-dark": {
          500: "#272626"
        }
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
      transitionProperty: {
        position: "top, left, right, bottom",
        size: "width, height"
      },
      minHeight: {
        view: "calc(100vh - 72px)"

      },
      gridTemplateColumns: {
        "tecnologies" : "repeat(8, minmax(0, 1fr))",
        "tecnologies-mobile" : "repeat(4, minmax(0, 1fr))"
      }
    },
    container: {
      center: true,
      // Optional
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      }
    },
  },
  plugins: [],
};
