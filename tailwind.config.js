/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'yellow' : 'rgb(225, 225, 5)',
        'lightgreen': '#5bc7a8',
        'bluey' :'#146e9f'
      },
      textColor:{
        'yellow' : 'rgb(225, 225, 5)',
        'lightgreen' :'#5bc7a8',
        'bluey' :'#146e9f'
      },
      borderColor:{
        'lightgreen' : '#5bc7a8',
        'bluey' :'#146e9f'
      },
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
