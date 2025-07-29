/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: "#F5F5DC",
        yellow: "#FFD700",
        purple: {
          500: "#7C3AED",
        },
      },
      boxShadow: {
        profile: "0 4px 8px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
