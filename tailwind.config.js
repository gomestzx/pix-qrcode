/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1400px',
      '2xl': '1536px',
    },
    extend: {
      inset: {
        'y-90': '30rem',
        'y-100': '35rem',
      },
      height: {
        '100': '30rem',
      },
      margin: {
        '18': '4.5rem'
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
