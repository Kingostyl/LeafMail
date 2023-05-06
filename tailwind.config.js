/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      colors: {
        dark: '#0f172a'
        },
      backgroundImage: {
        'login': "url('/assets/img/bglogin.jpg')",
        '404': "url('/assets/img/treedraw.jpg')"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
