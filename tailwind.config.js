/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // GST paletė
        brand: {
          900: "#624173", // tamsus violetas (R98 G65 B115)
          700: "#9C85AD", // (R156 G133 B173)
          600: "#AD93BF", // (R173 G147 B191)
          300: "#CAB2DB", // (R202 G178 B219)
          DEFAULT: "#624173",
          light: "#EDE6F3"
        }
      },
      borderRadius: { "2xl": "1rem" }
    },
  },
  plugins: [],
};
