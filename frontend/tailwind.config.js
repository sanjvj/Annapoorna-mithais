module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['"Nunito Sans"', 'serif'],
        Philosopher: ['"Philosopher"', 'serif'],
      },
      animation: {
        slide: 'slide 35s linear infinite',
        slideUp: 'slideUp 0.5s ease-out', // New slide-up animation
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideUp: { // New keyframes for slide-up
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}