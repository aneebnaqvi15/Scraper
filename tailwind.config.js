/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0F1C',
          50: '#1A1F2E',
          100: '#151B29',
          200: '#111724',
          300: '#0D131F',
          400: '#090F1A',
          500: '#060B15',
          600: '#030710',
          700: '#01030B',
          800: '#000106',
          900: '#000001',
        },
        brand: {
          blue: {
            light: '#60A5FA',
            DEFAULT: '#3B82F6',
            dark: '#2563EB',
          },
          purple: {
            light: '#A78BFA',
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED',
          },
          cyan: {
            light: '#67E8F9',
            DEFAULT: '#22D3EE',
            dark: '#0891B2',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        blob: "blob 7s infinite",
        'pulse-slow': 'pulse 6s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 5s infinite',
        'spin-slow': 'spin 6s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(96, 165, 250, 0.4)', opacity: 0.8 },
          '100%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.7)', opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))',
        'shimmer': 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 100%)',
        'mesh-blue': 'radial-gradient(at 40% 20%, hsla(225, 100%, 54%, 0.1) 0px, transparent 70%), radial-gradient(at 80% 0%, hsla(222, 100%, 56%, 0.1) 0px, transparent 50%)',
      },
      boxShadow: {
        'neon-blue': '0 0 5px theme("colors.brand.blue.light"), 0 0 20px theme("colors.brand.blue.dark")',
        'neon-purple': '0 0 5px theme("colors.brand.purple.light"), 0 0 20px theme("colors.brand.purple.dark")',
        'premium': '0 8px 30px rgba(0, 0, 0, 0.12), 0 30px 60px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 0 20px 5px rgba(96, 165, 250, 0.1)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}