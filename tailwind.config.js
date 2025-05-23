/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        'background-secondary': '#090b1a',
        primary: '#0ea5e9', // bright blue
        secondary: '#8b5cf6', // purple
        accent: '#ec4899', // pink
        success: '#10b981', // green
        warning: '#f59e0b', // amber
        error: '#ef4444', // red
        'gray-dark': '#1e1b4b',
        'gray-light': '#9ca3af',
        'glass-highlight': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.05)',
        'neon-glow': 'rgba(14, 165, 233, 0.5)',
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #0ea5e9, 0 0 20px rgba(14, 165, 233, 0.3)',
        'neon-purple': '0 0 5px #8b5cf6, 0 0 20px rgba(139, 92, 246, 0.3)',
        'neon-pink': '0 0 5px #ec4899, 0 0 20px rgba(236, 72, 153, 0.3)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'rotate-slow': 'rotate 20s linear infinite',
        'border-flow': 'borderFlow 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.5), 0 0 10px rgba(14, 165, 233, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(14, 165, 233, 0.8), 0 0 20px rgba(14, 165, 233, 0.5)' },
        },
        borderFlow: {
          '0%, 100%': { borderImage: 'linear-gradient(90deg, #0ea5e9, #8b5cf6, #ec4899, #0ea5e9) 1' },
          '50%': { borderImage: 'linear-gradient(90deg, #ec4899, #0ea5e9, #8b5cf6, #ec4899) 1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};