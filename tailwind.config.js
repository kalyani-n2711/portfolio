/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FDFBF7',
          100: '#FAFAFA',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        tealAccent: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        terracotta: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['DM Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'soft-glass': '0 8px 32px 0 rgba(15, 23, 42, 0.04)',
        'soft-elevated': '0 20px 40px -15px rgba(15, 23, 42, 0.07)',
        '3d-card': '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 1px 3px 0 rgba(15, 23, 42, 0.03)',
        'hud-glow': '0 0 25px rgba(13, 148, 136, 0.25)',
      },
      keyframes: {
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' }
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'scanline': 'scanline 4s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
