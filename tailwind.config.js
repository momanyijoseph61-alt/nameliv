/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f1f5fa',
          100: '#e1eaf3',
          200: '#c5d5e8',
          300: '#97b3d2',
          400: '#6489ba',
          500: '#42689e',
          600: '#325285',
          700: '#28426c',
          800: '#1e3354',
          900: '#15263f',
          950: '#0d1828',
        },
        accent: {
          50: '#ecfdff',
          100: '#cef9ff',
          200: '#a5f0ff',
          300: '#67e3ff',
          400: '#21d0f5',
          500: '#00b6da',
          600: '#0193b0',
          700: '#067691',
          800: '#0c5f76',
          900: '#114f63',
        },
        ink: {
          50: '#f6f8fb',
          100: '#eceff5',
          200: '#d9dfe9',
          300: '#bcc7d6',
          400: '#94a3b8',
          500: '#6b7a91',
          600: '#4d5a72',
          700: '#3a4458',
          800: '#27304a',
          900: '#1a2138',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 1px 3px rgba(19, 33, 62, 0.05), 0 1px 2px rgba(19, 33, 62, 0.04)',
        cardHover: '0 4px 6px -1px rgba(19, 33, 62, 0.06), 0 10px 20px -4px rgba(19, 33, 62, 0.08)',
        elevated: '0 10px 30px -8px rgba(19, 33, 62, 0.12), 0 4px 12px -2px rgba(19, 33, 62, 0.06)',
        focus: '0 0 0 3px rgba(33, 208, 245, 0.3)',
        inner: 'inset 0 1px 2px rgba(19, 33, 62, 0.04)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
        'slide-up': 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
