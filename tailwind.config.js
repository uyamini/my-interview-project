/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        // Customize your colors here
        northwesternPurple: {
          DEFAULT: '#4b2e83', // Default shade of Northwestern purple
        },
        white: '#ffffff', // White color
      },
    },
  },
  plugins: [],
}

