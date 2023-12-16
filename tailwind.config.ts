import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      ...{
        primary: {
          DEFAULT: '#2563eb',
        },
      },
    },
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
