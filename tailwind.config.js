const withMT = require("@material-tailwind/react/utils/withMT");

const colors = {
  steelBlue: {
    light: "#7d8aad",
    DEFAULT: "#5c6b8a",
    dark: "#3d4b66",
  },
  skyBlue: {
    light: "#c3d4e6",
    DEFAULT: "#a2b8d2",
    dark: "#7a94b3",
  },
  peach: {
    light: "#f8dbc4",
    DEFAULT: "#f5c9a8",
    dark: "#d9a381",
  },
  sunsetOrange: {
    light: "#f49b6b",
    DEFAULT: "#f07838",
    dark: "#c45e2b",
  },
  brickRed: {
    light: "#cf6a5d",
    DEFAULT: "#ba4c40",
    dark: "#943b30",
  },
};
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
});