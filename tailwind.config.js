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
