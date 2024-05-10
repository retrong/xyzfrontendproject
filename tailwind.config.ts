import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#fff',
				'foundation-grey-grey-300': '#dfdede',
				'foundation-grey-grey-50': '#fafafa',
				'foundation-grey-grey-200': '#e9e8e8',
				'foundation-grey-grey-900': '#575757',
				whitesmoke: '#eaecf0',
				gray1: {
					'100': '#939292',
					'200': 'rgba(250, 250, 250, 0.5)',
				},
				'foundation-white-white-400': '#fff',
				'foundation-purple-purple-100': '#ceb0fa',
				'foundation-black-black-400': '#434343',
				'foundation-purple-purple-400': '#8133f1',
				'foundation-purple-purple-300': '#9654f4',
				'foundation-black-black-500': '#141414',
				'foundation-purple-purple-200': '#b78af7',
				'gray-2': '#bdbdbd',
				'foundation-grey-grey-700': '#939292',
				'system-colors-primary-line-divider': '#3347e6',
				'foundation-grey-grey-800': '#727171',
				'foundation-purple-purple-500': '#6200ee',
				gray: '#4f4f4f',
				blueviolet: '#a859ff',
				gainsboro: '#e6e6e6',
			},
			spacing: {},
			fontFamily: {
				'secondary-text': 'Inter',
			},
		},
		fontSize: {
			xs: '12px',
			sm: '14px',
			base: '16px',
			'5xl': '24px',
			lgi: '19px',
			xl: '20px',
			'4xs': '9px',
			inherit: 'inherit',
		},
		screens: {
			lg: {
				max: '1200px',
			},
			mq1125: {
				raw: 'screen and (max-width: 1300px)',
			},
			mq1050: {
				raw: 'screen and (max-width: 1050px)',
			},
			mq750: {
				raw: 'screen and (max-width: 750px)',
			},
			mq450: {
				raw: 'screen and (max-width: 450px)',
			},
			mq850: '850px',
			// mq1125: '1300px',
			// mq1050: '1050px',
			// mq750: '750px',
			// mq450: '450px',
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [require('tailwind-scrollbar')],
};
export default config;
