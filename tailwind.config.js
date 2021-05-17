module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			backgroundImage: theme => ({
				'water': "url('/pexels-tembela-bohle-1029545.jpg')",
				'beach': "url('/pexels-catalin-goia-1478765.jpg')"
			})
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms')
	]
}
