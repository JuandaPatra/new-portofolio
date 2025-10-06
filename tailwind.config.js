/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: '820px', // custom breakpoint
      },
    },
  },
  plugins: [],
}

