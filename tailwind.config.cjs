const TypographyPlugin = function ({ addUtilities }) {
	const textFormats = {
		'.headline-1': {
			fontSize: '56px',
			lineHeight: '72px',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em',
			fontWeight: '500'
		},
		'.headline-2': {
			fontSize: '48px',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em',
			fontWeight: '500'
		},
		'.headline-3': {
			fontSize: '36px',
			letterSpacing: '0.05em'
		},
		'.headline-4': {
			fontSize: '28px',
			fontFamily: 'Montserrat',
			letterSpacing: '0.05em'
		},
		'.body-1': {
			fontSize: '16px',
			fontFamily: 'Rubik',
			letterSpacing: '0.05em'
		},
		'.body-2': {
			fontSize: '16px',
			fontFamily: 'Rubik',
			letterSpacing: '0.05em'
		},
		'.body-3': {
			fontSize: '12px',
			fontFamily: 'Rubik'
		}
	};

	addUtilities(textFormats);
};

module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				green: {
					'button': '#15D173'
				},
				blue: {
					'baby': '#2BA5EA',
					'footer': '#338CCC'
				}
			},
		}
	},
	plugins: [TypographyPlugin]
};
