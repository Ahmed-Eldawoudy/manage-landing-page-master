/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    colors: {
      // Transparent
      transparent: "transparent",
      // Primary
      brightRed: "hsl(12, 88%, 59%)",
      darkBlue: "hsl(228, 39%, 23%)",
      // Neutral
      darkGrayishBlue: "hsl(227, 12%, 61%)",
      veryDarkBlue: "hsl(233, 12%, 13%)",
      veryPaleRed: "hsl(13, 100%, 96%)",
      varyLightGray: "hsl(0, 0%, 98%)",
      // Error
      error: "#991b1b",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },

    extend: {
      fontFamily: {
        beViet: "'Be Vietnam Pro', sans-serif",
      },
      container: { center: true },
      backgroundImage: {
        "body-background": "url(../assets/images/bg-tablet-pattern.svg)",
        "simplify-desktop":
          "url(../assets/images/bg-simplify-section-desktop.svg)",
        "simplify-mobile":
          "url(../assets/images/bg-simplify-section-mobile.svg)",
      },
    },
  },
  plugins: [],
};
