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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "circle-path": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg)"
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg) translateX(180px) rotate(-360deg)"
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        "rotate-orbit": {
          '0%': { 
            transform: 'rotate(0deg) translateX(200px)'
          },
          '100%': { 
            transform: 'rotate(360deg) translateX(200px)'
          }
        },
        sparkle: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.5,
            transform: 'scale(0.7)',
          }
        },
        "spin-slow": {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float 3s ease-in-out infinite",
        "float-slow-delay-1": "float 3s ease-in-out 0.75s infinite",
        "float-slow-delay-2": "float 3s ease-in-out 1.5s infinite",
        "float-slow-delay-3": "float 3s ease-in-out 2.25s infinite",
        "orbit": "rotate-orbit 8s linear infinite",
        "circle": "circle-path 15s linear infinite",
        "sparkle-1": "sparkle 2s ease-in-out infinite",
        "sparkle-2": "sparkle 2s ease-in-out infinite 0.5s",
        "sparkle-3": "sparkle 2s ease-in-out infinite 1s",
        "sparkle-4": "sparkle 2s ease-in-out infinite 1.5s",
        "spin-slow": "spin-slow 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 