const TypographyPlugin = function ({ addUtilities }) {
	const textFormats = {
		'.fear-logo': {
			fontSize: '3rem',
			fontFamily: 'Rubik',
			letterSpacing: '0.15em'
		},
		'.headline-1': {
			fontSize: '3.5rem',
			lineHeight: '72px',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em',
			fontWeight: '500'
		},
		'.headline-2': {
			fontSize: '3rem',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em',
			fontWeight: '500'
		},
		'.headline-3': {
			fontSize: '2.25rem',
			letterSpacing: '0.05em'
		},
		'.headline-4': {
			fontSize: '1.75rem',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em'
		},
		'.headline-5': {
			fontSize: '1.5rem',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em'
		},
		'.headline-6': {
			fontSize: '1.25rem',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em'
		},
		'.body-1': {
			fontSize: '1rem',
			fontFamily: 'Rubik',
			letterSpacing: '0.05em'
		},
		'.body-2': {
			fontSize: '0.875rem',
			fontFamily: 'Rubik',
			letterSpacing: '0.05em'
		},
		'.body-3': {
			fontSize: '0.75rem',
			fontFamily: 'Rubik'
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
				active: '#20F389'
			},
			blue: {
				baby: '#2BA5EA',
				footer: '#338CCC'
			}
		}
	},
	plugins: [TypographyPlugin]
};
