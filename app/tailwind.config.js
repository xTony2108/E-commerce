/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        prosto: ["Prosto One", "sans-serif"],
      },
      backgroundImage: {
        bottomCta: `url("/src/assets/images/bottomCta/bg.webp")`,
        adLeft: `url("/src/assets/images/ad/adLeft.webp")`,
        adRight: `url("/src/assets/images/ad/adRight.webp")`,
      },
      colors: {
        primary: "#fa4f09",
        grayBg: "#191919",
        lightBg: "#f5f5f5",
        border: "#414141",
        discount: "#FF2B2B",
        fullPrice: "#999999",
        dark: "#ffffff",
        light: "#000000",
        bg: "#000000",
        expiration: "#a6a6a6",
        lightGray: "#d2d2d2"
      },
      minHeight: {
        fullWithoutBars: "calc(100svh - 172px)",
      },
    },
  },
  plugins: [],
};
