import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        turquoise: { 100: '#d8f6f1', 500: '#24b5ab', 700: '#08756e' },
        sky: { 100: '#e1f3fc', 500: '#79c9e8', 700: '#176a88' },
        sand: { 100: '#fbf2df', 500: '#e8c98e' },
        coral: { 100: '#ffebe5', 500: '#e99582' },
        ink: '#16353c',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 20px 60px rgba(22, 79, 83, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
