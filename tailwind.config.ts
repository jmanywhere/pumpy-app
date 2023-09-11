import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'next-sphere': ["var(--font-next-sphere)"],
        'nexa': ["var(--font-nexa)"],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    base: false,
    themes: [
      {
        'pumpyTheme':{
          'primary': '#FFB000',
        }
      }
    ]
  }
}
export default config
