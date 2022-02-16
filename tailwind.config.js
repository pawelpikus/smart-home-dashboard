module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#3E4047",
      white: "#fff",
      bgLight: "#ebf2f6",
      bgDark: "#7398AD",
      bgDarker: "#CADFEB",
      textLight: "#c1c5cb",
      accent: "#d4573c",
      accentLight: "#f5c0b5",
      textBlue: "#7398ad",
      error: "red",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        "desktop-dashboard": "10% 65% 25%",
      },
    },
  },
  plugins: [],
};
