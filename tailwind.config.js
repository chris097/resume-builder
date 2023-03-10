/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarygray: "#F5F6F7",
        basegray: "#393E4D",
        secondarygray: "#404553",
        lightred: "#F9F3F3",
        corered: "#EB5757",
      },
      fontFamily: {
        opensans: "Poppins, sans-serif"
      },
      boxShadow: {
        shadowbase: "0px 0px 5px rgba(255, 255, 255, 0.75)"
      }
    },
  },
  plugins: [],
}
