/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6'
        },
        glow: {
          500: '#22d3ee',
          600: '#06b6d4'
        }
      },
      fontFamily: {
        sans: ['"Sora"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular']
      },
      dropShadow: {
        glow: '0 10px 35px rgba(124, 58, 237, 0.35)'
      }
    }
  },
  plugins: [],
}
