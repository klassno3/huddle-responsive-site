/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      dt: "1100px",
      tb: "930px",
      stb: "630px",
      mb: "375px",
    },
    extend: {
      fontFamily: {
        pop: ["Poppins"],
        osans: ["Open Sans"],
      },
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        LightPink: "hsl(321, 100%, 78%)",
        LightRed: "hsl(0, 100%, 63%)",
        grey: "rgba(78, 78, 78, 0)",

        VeryDarkCyan: "hsl(192, 100%, 9%)",
        VeryPaleBlue: "hsl(207, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
