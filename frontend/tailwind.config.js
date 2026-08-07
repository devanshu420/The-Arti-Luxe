/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        'background-secondary': '#0E0E0E',
        'background-tertiary': '#111111',
        primary: '#D4AF37',
        'primary-light': '#F6E27A',
        text: '#FFFFFF',
        'text-secondary': '#BFBFBF',
        'text-tertiary': '#8A8A8A',
        border: '#2A2A2A'
      },
      fontFamily: {
        display: ['Cinzel', 'Cormorant Garamond', 'serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['72px', { lineHeight: '1.2' }],
        'display-md': ['56px', { lineHeight: '1.2' }],
        'display-sm': ['40px', { lineHeight: '1.3' }],
        'heading-lg': ['32px', { lineHeight: '1.3' }],
        'heading-md': ['24px', { lineHeight: '1.4' }],
        'heading-sm': ['18px', { lineHeight: '1.4' }],
        'body-lg': ['16px', { lineHeight: '1.6' }],
        'body-md': ['14px', { lineHeight: '1.6' }],
        'body-sm': ['12px', { lineHeight: '1.5' }]
      },
      spacing: {
        'section': '140px'
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px'
      },
      boxShadow: {
        'luxury': '0 8px 32px rgba(212, 175, 55, 0.1)',
        'luxury-hover': '0 16px 48px rgba(212, 175, 55, 0.2)'
      }
    }
  },
  plugins: []
};
