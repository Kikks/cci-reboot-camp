/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      quilon: ['"Quilon", sans-serif'],
      expose: ['"Expose", sans-serif'],
    },
    fontSize: {
      xxs: "0.65rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "4.5rem",
    },
    extend: {
      colors: {
        primary: {
          main: "#21409A",
        },
        secondary: {
          main: "#FEE400",
        },
      },
    },
  },
  plugins: [],
};
