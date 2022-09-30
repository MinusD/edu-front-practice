/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    listStyleType: {
      disc: 'disc',
      decimal: 'decimal',
      roman: 'upper-roman',
    }
  },
  plugins: [],
}
