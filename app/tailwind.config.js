/** @type {import('tailwindcss').Config} */
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
        priceRed: "#FF2B2B",
        priceGray: "#999999",
      },
    },
  },
  plugins: [],
};
