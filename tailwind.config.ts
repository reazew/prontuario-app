/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero': "url('/img/hero/background-hero.jpg')",
      },
      boxShadow: {
        glow: [
          "0 0px 5px (--tw-shadow-color)",
          "0 0px 25px rgba(255, 255,255, 0.2)",
        ]
      },
      colors: {
        border: "hsl(210, 40%, 96%)",
        input: "hsl(217, 32%, 17%)",
        ring: "hsl(217, 32%, 17%)",
        background: "#f2f2f2",
        foreground: "#141414",
        primary: {
          DEFAULT: "#32c2f0",
          foreground: "#141414",
        },
        secondary: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },
        tertiary: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },
        quaternary: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },
        destructive: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },
        muted: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },
        accent: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },
        popover: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },
        card: {
          DEFAULT: "#141414",
          foreground: "#141414",
        },       
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ellipsis: 'ellipsis 1.25s infinite',
        'spin-slow': 'spin 2s linear infinite',
        fade: 'opacity 150ms linear',
        'gradient-x':'gradient-x 5s ease infinite',
        'gradient-y':'gradient-y 5s ease infinite',
        'gradient-xy':'gradient-xy 5s ease infinite',
        shakeY: 'shakeY 3s linear infinite alternate',
        shakeX: 'shakeX 3s linear infinite alternate',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        ellipsis: {
          '0%': { content: '"."' },
          '33%': { content: '".."' },
          '66%': { content: '"..."' },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        'gradient-y': {
          '0%, 100%': {
              'background-size':'400% 400%',
              'background-position': 'center top'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
              'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
              'background-size':'200% 200%',
              'background-position': 'right center'
          }
        },
        'gradient-xy': {
            '0%, 100%': {
                'background-size':'400% 400%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        shakeY: {
          '0%': {
            transform: 'translateY(15px)',
          },          
          '100%': {
            transform: 'translateY(-15px)',
          },
        },
        shakeX: {
          '0%': {
            transform: 'translateX(15px)',
          },          
          '100%': {
            transform: 'translateX(-15px)',
          },
        },
        dogeJuice: {
          '0%': {
            transform: 'translateY(15px)',
          },          
          '100%': {
            transform: 'translateY(-15px)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwindcss-animate")
  ],
}