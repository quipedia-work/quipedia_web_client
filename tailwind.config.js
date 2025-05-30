/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.5' },
          '70%': { transform: 'scale(1.8)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },

      fontFamily: {
        sans: ['"SF Pro Display"', 'ui-sans-serif', 'system-ui'],
      },
    },

    animation: {
        pulseRing: 'pulseRing 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
  },
  plugins: [],
}
}

