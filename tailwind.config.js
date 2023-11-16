/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
		"./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
        bodoni:['bodoni','sans-serif']
        // Agrega otras fuentes personalizadas según sea necesario
      },
    },
  },
  plugins: [
    
  ],
}