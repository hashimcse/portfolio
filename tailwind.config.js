/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05070d',
          900: '#080b14',
          800: '#0d1220',
          700: '#131a2c',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
          indigo: '#6366f1',
        },
        glass: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34,211,238,0.35)',
        'glow-blue': '0 0 40px -10px rgba(59,130,246,0.35)',
        card: '0 8px 32px 0 rgba(0,0,0,0.36)',
      },
      backgroundImage: {
        'grad-radial': 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)',
        'node-grid': 'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'gradient-move': 'gradientMove 12s ease infinite',
        'pulse-node': 'pulseNode 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseNode: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.4)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
