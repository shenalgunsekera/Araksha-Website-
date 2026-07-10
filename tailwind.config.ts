import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Light blue/white theme ──
        // Tokens are REMAPPED so the whole site reads white + blue:
        //   ink   = page background (white)
        //   chalk = primary text (deep navy, near-black but cool)
        //   gray-900..700 = light blue surfaces / borders
        //   gray-600..300 = readable navy-blue text tones
        ink: '#FFFFFF',
        chalk: '#061537',
        'gray-900': '#EFF6FC', // lightest blue surface (cards, footer, menu)
        'gray-800': '#D3E4F4', // hairline borders / dividers
        'gray-700': '#AECDE9', // input borders
        'gray-600': '#3E6B99', // muted icon / faint text
        'gray-500': '#2F5C8F', // muted labels (readable on white)
        'gray-400': '#1F4677', // secondary text
        'gray-300': '#173A66', // strong secondary text
        'gray-200': '#DDEBF7',
        'gray-100': '#F2F8FD',
        // ── Araksha brand: navy + royal blue + sky, from the Samson/Araksha logo ──
        brand: {
          DEFAULT: '#255EAB',
          light: '#38A3E0',
          dark: '#1D4E96',
          50: '#EFF6FC',
          100: '#DCEBF8',
          200: '#B8D7F0',
          300: '#6FB5E6',
          400: '#38A3E0',
          500: '#255EAB',
          600: '#1D4E96',
          700: '#173F7F',
          800: '#0F2F66',
          900: '#02205C',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #38A3E0 0%, #255EAB 50%, #1D4E96 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(56,163,224,0.14), rgba(29,78,150,0.10))',
        'brand-radial': 'radial-gradient(1200px 600px at 70% -10%, rgba(37,94,171,0.22), transparent 60%)',
      },
      boxShadow: {
        brand: '0 18px 50px -12px rgba(37,94,171,0.45)',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'line-grow': 'lineGrow 1s ease forwards',
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
