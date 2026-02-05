/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f4258c",
        "primary-light": "#ff8dc7",
        "background-light": "#fff0f5",
        "background-dark": "#221019",
        "text-main": "#1c0d14",
        "text-muted": "#9c4973",
        "accent-blue": "#E0F7FA",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Noto Sans SC", "sans-serif"],
        "game": ["ZCOOL KuaiLe", "Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2.5rem",
        "full": "9999px"
      },
      backgroundImage: {
        'stripe-pattern': "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(244, 37, 140, 0.03) 10px, rgba(244, 37, 140, 0.03) 20px)",
        'sakura-pattern': "radial-gradient(#fccbdb 1px, transparent 1px), radial-gradient(#fccbdb 1px, transparent 1px)",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'typing': 'typing 0.05s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
