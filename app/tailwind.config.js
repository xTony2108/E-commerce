/** @type {import('tailwindcss').Config} */
const lightMode = false;
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        border: "#414141",
        discount: "#FF2B2B",
        fullPrice: "#999999",
        secondary: lightMode ? "#000000" : "#ffffff",
        bg: lightMode ? "#ffffff" : "#000000",
        expiration: "#a6a6a6",
      },
      minHeight: {
        fullWithoutBars: "calc(100svh - 172px)",
      },
    },
  },
  plugins: [],
};
