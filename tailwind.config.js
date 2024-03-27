/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    colors: {
      'primary': 'var(--color-primary)', 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

