/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0% 100%" : {
            transform: "scaleY(.5)"
          }, 
          "50%" : {
            transform: "scaleY(1.5)"
          }
        }
      },
      animation: {
        wavey: "wavey 1000ms linear infinite"
      }
    },
  },
  plugins: [
    require('./plugins/openVariant'), 
    require('./plugins/animationDelay'),
    require('./plugins/tableCaption'),
    require('./plugins/buttonPlugin'),
    require('./plugins/diagonalRadius'),
  ],
}