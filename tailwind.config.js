/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Burnt Orange Palette
        'burnt-orange': {
          50: '#FFF4ED',
          100: '#FFE4D1',
          200: '#FFC9A3',
          300: '#FFA76A',
          400: '#FF7A2F',
          500: '#CC5500',
          600: '#B34900',
          700: '#993D00',
          800: '#803300',
          900: '#662900',
        },
        // Deep Blue Palette (complementary to burnt orange)
        'deep-blue': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Modern Black/Gray Palette
        'true-black': '#0A0A0A',
        'deep-black': '#141414',
        'carbon': '#1F1F1F',
        'charcoal': '#262626',
        'steel': '#333333',
      },
    },
  },
  plugins: [],
};
