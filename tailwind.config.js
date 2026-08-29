/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#020204', // Ultra Deep Pitch Black
          900: '#06060D', // Deep Obsidian Card Base
          850: '#0A0A14', // Secondary Dark Card
          800: '#110F20', // Accent Dark Surface
        },
        purple: {
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          950: '#2E0754',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        }
      },
      boxShadow: {
        'purple-glow-sm': '0 0 15px rgba(147, 51, 234, 0.3)',
        'purple-glow': '0 0 30px rgba(147, 51, 234, 0.45)',
        'purple-glow-lg': '0 0 50px rgba(147, 51, 234, 0.6)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.9)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
