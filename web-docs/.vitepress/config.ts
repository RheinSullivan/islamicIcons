import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Atsarul Mujahidin',
	description: 'A source-aware, framework-agnostic Islamic SVG and WebP icon library for the modern web.',
	base: '/docs/',

	themeConfig: {
		logo: '/logo-atsarul-mujahidin.svg',

		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Icons', link: '/icons' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'GitHub', link: 'https://github.com/RheinSullivan/islamicIcons' }
		],

		sidebar: {
			'/guide/': [
				{
					text: 'Introduction',
					items: [
						{ text: 'What is Atsarul Mujahidin?', link: '/guide/' },
						{ text: 'Getting Started', link: '/guide/getting-started' },
						{ text: 'Installation', link: '/guide/installation' }
					]
				},
				{
					text: 'Usage',
					items: [
						{ text: 'Basic Usage', link: '/guide/usage' },
						{ text: 'Icon Variants', link: '/guide/variants' },
						{ text: 'Framework Integration', link: '/guide/frameworks' }
					]
				},
				{
					text: 'Advanced',
					items: [
						{ text: 'Sources & Attribution', link: '/guide/sources' },
						{ text: 'TypeScript Support', link: '/guide/typescript' },
						{ text: 'Custom Styling', link: '/guide/styling' }
					]
				},
				{
					text: 'Contributing',
					items: [
						{ text: 'How to Contribute', link: '/guide/contributing' },
						{ text: 'Icon Guidelines', link: '/guide/icon-guidelines' },
						{ text: 'Development Setup', link: '/guide/development' }
					]
				},
				{
					text: 'Community',
					items: [
						{ text: 'Donations', link: '/guide/donations' },
						{ text: 'License', link: '/guide/license' }
					]
				}
			]
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/RheinSullivan/islamicIcons' }
		],

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2026 Atsarul Mujahidin Community'
		},

		search: {
			provider: 'local'
		}
	},

	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-atsarul-mujahidin.svg' }],
		['meta', { name: 'theme-color', content: '#73e0ae' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:locale', content: 'en' }],
		['meta', { property: 'og:site_name', content: 'Atsarul Mujahidin' }]
	]
});
