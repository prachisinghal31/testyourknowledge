import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quiz-teal': '#2C5F7C',
        'quiz-light-blue': '#E8F4F8',
        'quiz-blue': '#B8D4E3',
        'quiz-purple': '#A8B8D8',
        'blue-150': '#C8E0ED',
      },
      fontFamily: {
        'dm-serif': ['var(--font-dm-serif)', 'serif'],
        serif: ['var(--font-dm-serif)', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '1542': '1542px',
        '856': '856px',
        '919': '919px',
        '102': '102px',
        '896': '896px',
        '78': '78px',
        '897': '897px',
        '422': '422px',
        '45': '45px',
        '116': '116px',
        '50': '50px',
      },
      fontSize: {
        '90': ['90px', { lineHeight: '24px', letterSpacing: '-4px' }],
      },
      borderRadius: {
        '42': '42px',
      },
      backdropBlur: {
        '200': '200px',
      },
    },
  },
  plugins: [],
}
export default config

