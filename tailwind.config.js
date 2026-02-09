/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0C7A1F',
        'brand-light': 'rgba(12, 122, 31, 0.10)',
        'grey-30': '#F9FAFB',
        'grey-40': '#F3F4F6',
        'grey-50': '#E5E7EB',
        'grey-60': '#D1D5DB',
        'grey-70': '#9CA3AF',
        'grey-80': '#6B7280',
        'grey-100': '#374151',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dubai: ['Dubai', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
