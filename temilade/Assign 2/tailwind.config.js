/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          job_cat_bg: "#3038E5",
          job_cat_box_blue: "#473BF0",
          job_cat_box_offwhite: "#E7E9ED",
          job_cat_explore: "#68D585",
        }
      },
    },
    plugins: [],
  };