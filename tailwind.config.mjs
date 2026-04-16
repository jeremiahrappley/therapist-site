/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Soft, calming palette — adjust to her brand
        sage: {
          50: '#f6f7f5',
          100: '#e8ebe4',
          500: '#7a8a6f',
          700: '#5a6a52',
          900: '#2f3a2a',
        },
        warm: {
          50: '#faf8f5',
          100: '#f0ebe2',
          500: '#a89680',
          900: '#3d342a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
