import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Work Sans is the sole public-facing typeface across EntireFM
        sans:    ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        ui:      ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        brand:   '200',  // dominant display weight (Work Sans Extra Light)
        subtle:  '300',  // supporting UI (Work Sans Light)
      },
      colors: {
        accent: '#0066ff',
        'accent-light': '#4da6ff',
        'accent-violet': '#6b2fff',
        dark: '#080808',
        mid: '#0d0628',
      },
      fontSize: {
        // Masterbrand uniform typography scales
        hero:    ['clamp(2.25rem, 3.7vw, 3.5rem)',  { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        section: ['clamp(1.75rem, 2.8vw, 2.5rem)',  { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        contact: ['clamp(2.25rem, 3.7vw, 3.5rem)',  { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.25rem, 3.7vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2rem, 3.1vw, 2.75rem)',    { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.625rem, 2.4vw, 2.125rem)',{ lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
}

export default config
