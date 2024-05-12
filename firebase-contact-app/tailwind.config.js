/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gray : "#5A5959" ,
      yellow : "#FFEAAE" ,
      darkyellow : "#FCCA3F",
      orange : "#F6828C"
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

