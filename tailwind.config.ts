import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/common-bg.svg')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "p-brown": "#5a1c1ccc",
        "p-grey": "#777783",
        "p-bg-grey": "#E7E7E7",
        "footer-black": "#1F1F1F",
        "top-black": "#1A1A1A",
        "bottom-grey": "#646567",
        "bottom-header-white": "#F2F0FB",
        "mb-gray": "#d2d2d4",
        "mb-text-grey": "#3A4A6D",
        "mb-bg-green": "#5CB85C"
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1199px",
        xl: "1199px",
        "2xl": "1199px"
      }
    },
  },
  plugins: [],
}
export default config
