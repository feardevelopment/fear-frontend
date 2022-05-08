const TypographyPlugin = function ({ addUtilities }) {
	const textFormats = {
		'.fear-logo': {
			fontSize: '3rem',
			fontFamily: 'Rubik',
			letterSpacing: '0.15em'
		},
		'.headline-1': {
			fontSize: '3rem',
			lineHeight: '72px',
			fontFamily: 'Poppins',
			letterSpacing: '0.1em',
			fontWeight: '500'
		},
		'.headline-2': {
			fontSize: '2.625rem',
			fontFamily: 'Poppins',
			fontWeight: '500'
		},
		'.headline-3': {
			fontSize: '2rem',
			fontFamily: 'Poppins',
			letterSpacing: '0.1em'
		},
		'.headline-4': {
			fontSize: '1.5rem',
			fontFamily: 'Poppins',
			letterSpacing: '0.1em'
		},
		'.headline-5': {
			fontSize: '1.25rem',
			fontFamily: 'Poppins',
			letterSpacing: '0.1em'
		},
		'.headline-6': {
			fontSize: '1.125rem',
			fontFamily: 'Poppins',
			letterSpacing: '0.1em'
		},
		'.body-1': {
			fontSize: '1rem',
			fontFamily: 'Rubik',
			fontWeight: '400'
		},
		'.body-2': {
			fontSize: '0.875rem',
			fontFamily: 'Rubik'
		},
		'.body-3': {
			fontSize: '0.75rem',
			fontFamily: 'Rubik'
		},
		'.input-text': {
			fontSize: '1.25rem',
			fontFamily: 'Rubik',
			fontWeight: '300'
		},
		'.nav-items': {
			fontSize: '1.5rem',
			fontFamily: 'Rubik',
			fontWeight: '400'
		}
	};

	addUtilities(textFormats);
};

module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
			red: '#FF0000',
			green: {
				button: '#15D173',
				active: '#20F389',
				blueish: '#00A896'
			},
			blue: {
				baby: '#2BA5EA',
				footer: '#338CCC'
			}
		}
	},
	plugins: [TypographyPlugin]
};
