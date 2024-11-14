import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-green': '#286F6C',
        'secondary-dark': '#23262F',
        'third-gray': '#D9D9D9',
      },
      backgroundImage: {
        home: "url('/images/background.png')",
        cta: "url('/images/cta.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
