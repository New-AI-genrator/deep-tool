import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        aether: {
          obsidian: '#0D0F16',
          charcoal: '#1A1D27',
          electrum: '#E6D2A1',
          holo: '#00F0FF',
          mist: '#C7CFDC'
        }
      },
      boxShadow: {
        holo: '0 12px 40px rgba(0,240,255,0.18)'
      },
      borderRadius: {
        '2xl': '1rem'
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      // Add custom breakpoints for better mobile responsiveness
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    }
  },
  plugins: []
};

export default config;