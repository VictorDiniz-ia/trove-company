import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#060e1e',
          800: '#0a1628',
          700: '#0f1f3d',
          600: '#152847',
        },
        silver: {
          300: '#e2e6ed',
          400: '#c8cfd9',
          500: '#a8b2c0',
          600: '#8892a0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
