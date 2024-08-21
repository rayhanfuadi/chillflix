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
       },
       colors:{
        primary: '#181A1C',
       }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

