/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        textShadow: {
          sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
          DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.25)',
          lg: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        }
      },
    },
  },
  plugins: [],
}

