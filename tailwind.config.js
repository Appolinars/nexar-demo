/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        accent: 'rgba(var(--color-accent), <alpha-value>)',
        accentLight: 'var(--color-accent-light)',
        darkPrimary: 'var(--color-dark-primary)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
        secondaryBg: 'var(--color-secondary-bg)',
        success: 'rgba(var(--color-success), <alpha-value>)',
        error: 'rgba(var(--color-error), <alpha-value>)',
        warning: 'rgba(var(--color-warning), <alpha-value>)',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
