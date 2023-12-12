/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color" : "var(--primary-color)",
        "secondary-color" : "var(--secondary-color)",
        "btn-primary-color" : "var(--btn-primary-color)",
        "background-body-color" : "var(--background-body-color)",
        "primary-color-text" : "var(--primary-color-text)",
        "secondary-color-text" : "var(--secondary-color-text)",
        "btn-secondary-color" : "var(--btn-secondary-color)",
      }
    },
  },
  plugins: [],
}