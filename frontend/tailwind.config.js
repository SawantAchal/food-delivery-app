/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadeIn:{
          '0%':{
            opacity: 0
          },
          '100%':{
            opacity: 1
          }
        }
      },
      gridTemplateColumns:{
        // Custom class name
        'auto-fill-240': 'repeat(auto-fill, minmax(240px, 1fr))',
        'custom-layout': '2fr 1fr 1fr',
        'custom-layout-for-cart' : '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
        'custom-layout-for-myorder' : '0.5fr 2fr 1fr 1fr 2fr 1fr',
        'custom-layout-for-myorder-small' : ' 1fr 2fr 1fr'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}

