/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004643",
        secondary: "#FFFBE9",
        btnMain: "#f9bc60",
        btnText: "#001e1d",
      },
    },
  },
  plugins: [],
};
