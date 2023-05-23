/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  variant: {
    extend: {
      // width: ["hover", "focus", "group-hover"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#b63e96",
        primaryDark: "#58e6d9",
      },
      screens: {
        "2xl": { max: "1535px" },
        // for some unknown reason original xl->lg seem to ignore order and as a result lg and shit gets priotized no matter what... so i had to rename them.... the pain
        // => @media (max-width: 1535px) { ... }

        mxl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mmd: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        msm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        mxs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
};
