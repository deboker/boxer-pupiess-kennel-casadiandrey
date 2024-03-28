/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    colors: {
      'primary': 'var(--bg-color)',
      'secondary': 'var(--second-bg-color)',
      'primary-dark': 'var(--bg-color-dark-mode)',
      'secondary-dark': 'var(--second-bg-color-dark-mode)',
      'btn-color': 'var(--btn-color)',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

