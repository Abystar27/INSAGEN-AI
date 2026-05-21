/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepPurple: '#1b0033',
        midnight: '#050014',
        neonPink: '#ff2df7',
        electricCyan: '#00faff',
        limePop: '#c6ff00',
        wildOrange: '#ff6b00',
        wildBlue: '#0047ff',
        acidGreen: '#b4ff00',
      },
      boxShadow: {
        neon: '0 0 25px rgba(255,45,247,0.5)',
        cyan: '0 0 25px rgba(0,250,255,0.5)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        wiggle: 'wiggle 0.6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
};
