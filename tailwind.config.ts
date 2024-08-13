import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			sx: '350px',
			sm: '480px',
			md: '640px',
			md2: '768px',
			lg: '976px',
			xl: '1200px',
			'2xl': '1440px',
			'3xl': '1600px'
		},
		colors: {
			red: {
				100: 'hsl(12, 88%, 59%)',
				200: 'hsl(13, 100%, 96%)'
			},
			white: `hsl(0, 0%, 100%)`,
			blue: {
				100: 'hsl(227, 12%, 61%)',
				200: 'hsl(228, 39%, 23%)',
				300: 'hsl(233, 12%, 13%)'
			},
			gray: 'hsl(0, 0%, 98%)'
		},
		backgroundColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'hsl(13, 100%, 96%)',
			secondary: 'hsl(12, 88%, 59%)',
			dark: 'hsl(233, 12%, 13%)'
		}),
		textColor: ({ theme }) => ({
			...theme('colors'),
			primary: 'hsl(228, 39%, 23%)',
			secondary: 'hsl(227, 12%, 61%)'
		}),
		fontFamily: {
			sans: 'Be Vietnam Pro'
		},
		fontSize: {
			us: ['10px', '12px'],
			sm: ['12px', '16px'],
			md: ['14px', '20px'],
			lg: ['16px', '24px'],
			xl: ['20px', '24px'],
			'2xl': ['24px', '32px'],
			'3xl': ['30px', '36px'],
			'4xl': ['36px', '40px'],
			'5xl': ['48px', '48px']
		},
		extend: {
			boxShadow: {
				'3xl': '0px 26px 34px -19px hsl(12, 88%, 59%)'
			},
			backgroundImage: {
				'gradient-modal': 'linear-gradient(180deg,hsl(12, 88%, 59%, 10%),hsl(228, 39%, 23%, 40%) )',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
}
export default config
