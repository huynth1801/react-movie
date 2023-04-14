/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "30px",
      },
      backgroundImage: {
        lightImg: "linear-gradient(to top, #fff, rgba(#fff, 0))",
        darkImg: "linear-gradient(to top, #000, rgba(#000, 0))",
      },
      backgroundColor: {
        lightBg: "rgba(#ffffff, 0.6) !important",
        darkBg: "rgba(#000000, 0.6) !important",
      },
      colors: {
        screenDark: "#0f0f0f",
        sideBarDark: "#161616",
        primaryColorDark: "#161616",
        secondColorDark: "#1d1d1d",
        btn: "#ff0000",
        textDark: "#fffff",
        screenLight: "#f9f9f9",
        sideBarLight: "#f1f1f5",
        primaryColorLight: "#ffffff",
        textLight: "#121212",
        border: "#2f2f3c",
      },
      fontSize: {
        h3: "18.72px",
      },
    },
  },
  plugins: [],
};
