module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['"Nunito Sans"', 'serif'],
        Philosopher : ['"Philosopher"','serif']
      },animation: {
        slide: 'slide 35s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    
  ],
}