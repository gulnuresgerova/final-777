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
      backgroundImage: {
        'hero-pattern': "url('/images/bmw-bg1.jpg')",
        'stop': "url('/images/stop.jpg')",
        'site': "url('/images/bgs.jpeg')",
        'red': "url('/images/red.png')",
        'bg': "url('/images/cw-jpeg')",

        
      },
      container: {
        
        screens: {
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        },
        
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        red :"#ff3d24",
        bordo :"#7f1f1f",
        success: "#00ff00", 
        gry :"#161616",

      },
      fontFamily: {
        protest: ['Protest Revolution', "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}