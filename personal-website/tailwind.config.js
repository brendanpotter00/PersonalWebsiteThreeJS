module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Paths to your components
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out', // 1s duration, ease-out timing function
      },
    },
  },
  plugins: [],
}
