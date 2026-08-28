import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Work Sans is now the sole public-facing typeface
        // 200 = display/brand, 300 = UI, 400 = body
        // These aliases preserve backward-compatibility with existing font-display / font-ui / font-body classes
        sans:    ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
        ui:      ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        // Semantic aliases matching EntireFM masterbrand spec
        brand:   '200',  // dominant display weight
        subtle:  '300',  // supporting UI
      },
      colors: {
        accent: '#0066ff',
        'accent-light': '#4da6ff',
        'accent-violet': '#6b2fff',
        dark: '#080808',
        mid: '#0d0628',
      },
      fontSize: {
        hero:    ['clamp(72px, 9vw, 136px)',  { lineHeight: '0.92' }],
        section: ['clamp(52px, 6.5vw, 96px)', { lineHeight: '0.95' }],
        contact: ['clamp(64px, 8vw, 112px)',  { lineHeight: '0.93' }],
      },
    },
  },
  plugins: [],
}

export default config
