/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0B2545",
            50: "#F0F4F8",
            100: "#D9E2EC",
            200: "#BCCCDC",
            300: "#9FB3C8",
            400: "#627D98",
            500: "#334E68",
            600: "#243B53",
            700: "#102A43",
            800: "#0B2545",
            900: "#071E3D",
            950: "#040E1B",
          },
          blue: {
            DEFAULT: "#0077B6",
            light: "#0096C7",
            vibrant: "#0284C7",
            dark: "#03045E",
          },
          cyan: {
            DEFAULT: "#00A896",
            light: "#02C39A",
            neon: "#06B6D4",
          },
          emerald: {
            DEFAULT: "#10B981",
            light: "#34D399",
            dark: "#059669",
            glow: "#00F5A0",
          }
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0B2545 0%, #0077B6 40%, #00A896 75%, #10B981 100%)",
        "gradient-brand-subtle": "linear-gradient(135deg, rgba(11,37,69,0.05) 0%, rgba(0,119,182,0.06) 40%, rgba(16,185,129,0.06) 100%)",
        "gradient-card-dark": "linear-gradient(180deg, rgba(11,37,69,0.95) 0%, rgba(7,30,61,0.98) 100%)",
        "gradient-glow": "radial-gradient(circle, rgba(0,168,150,0.25) 0%, rgba(11,37,69,0) 70%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 168, 150, 0.4)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'glow-brand': '0 10px 35px -5px rgba(0, 119, 182, 0.3)',
        'card-soft': '0 10px 30px -5px rgba(11, 37, 69, 0.07), 0 4px 6px -2px rgba(11, 37, 69, 0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
};
