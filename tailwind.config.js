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
          950: '#030305', // Ultra Pitch Black
          900: '#08080d', // Deep Obsidian Card Base
          850: '#0e0e16', // Secondary Dark Card
          800: '#14141e', // Accent Dark Surface
        },
        orange: {
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff6b00', // Primary Warm Vivid Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#2e0a00', // Deep Dark Orange Background Accent
        }
      },
      boxShadow: {
        'purple-glow-sm': '0 0 15px rgba(168, 85, 247, 0.35)',
        'purple-glow': '0 0 30px rgba(168, 85, 247, 0.5)',
        'purple-glow-lg': '0 0 50px rgba(168, 85, 247, 0.65)',
        'orange-glow-sm': '0 0 15px rgba(255, 107, 0, 0.35)',
        'orange-glow': '0 0 30px rgba(255, 107, 0, 0.5)',
        'orange-glow-lg': '0 0 50px rgba(255, 107, 0, 0.65)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.95)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
