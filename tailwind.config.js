/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "utils/*.js",
      "nuxt.config.js",
      "./node_modules/flowbite/**/*.{js,ts}",
    ],
  },
  theme: {
    colors: {
      primary: "#02314e",
      "primary-2": "#0F8AB4",
      "primary-3": "#fac600",
      accent: "#18788e",
      "accent-2": "#F0476E",
      grey: "#f3f3f3",
      white: "#ffffff",
      font: "#777777",
      "grey-100": "#F1F1F1",
      "sky-blue": "#ABDAF7",
    },
    backgroundImage: {
      "my-gradient":
        "linear-gradient(102deg, rgba(3, 5, 29, 0.85) 2.11%, rgba(255, 0, 0, 0.85) 100%)",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      extend: {
        boxShadow: {
          md: "0 12px 6px rgba(0,0,0,.06);",
        },
      },
      gridTemplateColumns: {
        teamDetails: "56px 1fr",
      },
      borderRadius: {
        "4xl": "2rem",
        "8xl": "4rem",
        "10xl": "6rem",
      },
      lineHeight: {
        "leading-11": "3rem",
      },
      extend: {
        underlineOffset: {
          20: "20px",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
