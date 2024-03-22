/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        bottomCta: `url("./src/assets/images/bottomCta/bg.jpg")`,
      },
      colors: {
        primary: "#121420",
        gghViolet: "#7A00F5",
        gghBlue: "#2A00F5",
        gghLightBlue: "#0072F5",
        gghPink: "#CA00F5",
        gghYellow: "#F5BA00",
      },
    },
  },
  plugins: [],
};
