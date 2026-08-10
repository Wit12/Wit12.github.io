/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg0: '#0c0716',
        bg1: '#150c26',
        bg2: '#1d1033',
        panel: '#1a1130',
        line: '#3a2a5c',
        hot: '#ff2d95',
        hot2: '#ff6ec7',
        violet: '#8b5cf6',
        muted: '#b6a9d4',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 30px -8px rgba(255,45,149,0.55)',
        glowLg: '0 24px 60px -18px rgba(0,0,0,0.7)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        twinkle: 'twinkle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
