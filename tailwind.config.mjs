import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f3f6f3',
          100: '#e4ebe4',
          200: '#c8d5c8',
          300: '#a0b8a0',
          400: '#739473',
          500: '#547554',
          600: '#41604a',
          700: '#354c35',
          800: '#2c3e2c',
          900: '#253425',
          950: '#121a12',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      typography: (theme) => ({
        stone: {
          css: {
            '--tw-prose-body':     theme('colors.stone[700]'),
            '--tw-prose-headings': theme('colors.stone[900]'),
            '--tw-prose-links':    theme('colors.sage[600]'),
            '--tw-prose-bold':     theme('colors.stone[900]'),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
