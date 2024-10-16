/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // This sets dark mode to be controlled by adding 'dark' class in the HTML
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--bg-color)',
        'secondary': 'var(--second-bg-color)',
        'primary-dark': 'var(--bg-color-dark-mode)',
        'secondary-dark': 'var(--second-bg-color-dark-mode)',
        'btn-color': 'var(--btn-color)',
        'text-color': 'var(--text-color)',
        'text-color-dark': 'var(--text-color-dark-mode)',
      },
      backgroundColor: {
        'tw-gradient-top': 'linear-gradient(to top, var(--bg-color), var(--second-bg-color))',
        'tw-gradient-bottom': 'linear-gradient(to bottom, var(--bg-color), var(--second-bg-color))',
        'tw-gradient-top-dark': 'linear-gradient(to top, var(--bg-color-dark-mode), var(--second-bg-color-dark-mode))',
        'tw-gradient-bottom-dark': 'linear-gradient(to bottom, var(--bg-color-dark-mode), var(--second-bg-color-dark-mode))',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
