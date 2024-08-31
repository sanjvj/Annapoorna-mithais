module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['"Nunito Sans"', 'serif'],
        Philosopher : ['"Philosopher"','serif']
      },keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [
    
  ],
}