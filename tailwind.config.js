module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  variants: {
    scrollBar: ["rounded"],
  },
  theme: {
    extend: {},
  },
};
