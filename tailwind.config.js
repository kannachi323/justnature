/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'fade-slide-in': 'fadeSlideIn 2s ease-out', // Adjust duration and easing as needed
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(50px)' }, // Start with opacity 0 and offset
          '100%': { opacity: '1', transform: 'translateY(0)' }, // End with full opacity and no offset
        },
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    
  },
  plugins: [
    require('tailwindcss-animated'),
    require("@designbycode/tailwindcss-text-shadow"),
  ],
}