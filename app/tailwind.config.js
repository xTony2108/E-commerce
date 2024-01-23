/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      backgroundImage: {
        bottomCta: `url("./src/assets/images/bottomCta/bg.jpg")`,
      },
    },
  },
  plugins: [],
};
