/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
       backgroundImage: {
        'bg-pattern': "url('/img/masuk.jpg')",
       }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

