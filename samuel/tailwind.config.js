/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        cryp_grey: "#9397B3",
        cryp_blue: "#3038E5",
        cryp_darkblue: "#1E2240",
        cryp_faded: "#A5A7B34D",
        cryp_bg_muted: "#D9E0F64D",
        cryp_muted_blue: "#648CFF",
        cryp_deepblue: "#2B33D1",
        cryp_muted_white: "#FFFFFF0D",
        cryp_btn_bg1: "#5A61E7",
        cryp_btn_bg2: "#3039E5",

      },
    },
  },
  plugins: [],
};
