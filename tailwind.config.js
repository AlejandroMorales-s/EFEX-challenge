/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg-image": "url('/background.jpg')",
        "radial-gradient":
          "radial-gradient(100% 111.48% at 100% 100%, rgb(1, 20, 58) 0%, rgb(1, 29, 85) 100%)",
      },
      boxShadow: {
        "white-shadow":
          "rgba(255, 255, 255, 0.8) 9px 9px 18px -2px, rgba(255, 255, 255, 0.9) -3px -3px 7px -3px",
      },
      colors: {
        "primary-blue": "#006bf8",
        gray: "#666",
        "light-gray": "#C7C7C7",
        "primary-orange": "#f99c46",
        "light-blue": "#A9D2FF",
        "lighter-blue": "#E8F3FF",
        "dark-blue": "#00143A",
        "background-color": "#fbfcff",
        green: "#4DB6AC",
      },
    },
  },
  plugins: [],
};
