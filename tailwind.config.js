const tailwindScrollbarHide = require("tailwind-scrollbar-hide");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ".65rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), tailwindScrollbarHide],
};
