/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				harina: '#FFF7ED',
				trigo: '#F3E8D2',
				tostado: '#5B3A29',
				migaja: '#F9F5EF',
				mermelada: '#C1121F',
				cacao: '#24130B',
			},
			fontFamily: {
				serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				soft: '0 10px 30px rgba(36, 19, 11, 0.10)',
				glow: '0 0 0 1px rgba(255, 255, 255, 0.6) inset, 0 10px 30px rgba(36, 19, 11, 0.12)',
			},
			borderRadius: {
				'2xl': '1.25rem',
			},
			keyframes: {
				pulseSoft: {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.06)', opacity: '0.92' },
				},
			},
			animation: {
				pulseSoft: 'pulseSoft 2.2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};

