/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pv: {
          bg: '#0a0a0c',
          bg2: '#121216',
          panel: '#17171c',
          panel2: '#1e1e24',
          red: '#ff2a2a',
          'red-deep': '#c81414',
          gold: '#ffc01e',
          'gold-light': '#ffd84a',
          cream: '#f6f2ea',
          muted: '#9a9488',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        spin3d: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: { '0%,100%': { opacity: '0.45' }, '50%': { opacity: '1' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '60%,100%': { transform: 'translateX(360%) skewX(-18deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease both',
        'spin-slow': 'spin3d 26s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
        shine: 'shine 4.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
