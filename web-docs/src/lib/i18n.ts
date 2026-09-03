export type Locale = 'en' | 'id';

export const locales: Locale[] = ['en', 'id'];

export const localeNames: Record<Locale, string> = {
	en: 'English',
	id: 'Indonesian'
};

export type Translations = {
	locale: Locale;
	nav: {
		home: string; icons: string; categories: string; packages: string; showcase: string; docs: string; sources: string; donations: string;
	};
	resources: {
		license: string; community: string; codeOfConduct: string; sources: string; contributing: string;
	};
	footer: {
		explore: string; develop: string; principles: string; localAssets: string;
		attributionFirst: string; noRuntimeApi: string; installation: string;
		frameworks: string; contributing: string; copyright: string; credits: string; tagline: string;
	};
	home: {
		badge: string; heroWords: string[]; heroDesc: string; exploreBtn: string; docsBtn: string;
		statIcons: string; statCategories: string; statVariants: string; featuredLabel: string;
		featuredTitle: string; featuredDesc: string; viewCollection: string; whyLabel: string;
		whyTitle: string; card1Title: string; card1Desc: string; card2Title: string; card2Desc: string;
		card3Title: string; card3Desc: string; ctaLabel: string; ctaTitle: string; ctaDesc: string;
		ctaBtn: string; builtFrom: string; builtFromSub: string;
	};
	icons: {
		pageTitle: string; pageDesc: string; label: string; title: string; desc: string;
		searchPlaceholder: string; results: string; hint: string; noResults: string; noResultsHint: string;
		allIcons: string; collection: string; sources: string; community: string; externalSvgRepo: string;
	};
	categories: {
		pageTitle: string; pageDesc: string; label: string; title: string; desc: string;
	};
	docs: {
		pageTitle: string; pageDesc: string; docsSidebarLabel: string; contributeCard: string;
		contributeDesc: string; contributeLink: string; breadcrumb: string; leadDefault: string;
		prevLink: string; nextLink: string;
	};
	sources: {
		pageTitle: string; pageDesc: string; label: string; title: string; desc: string;
	};
	donations: { pageTitle: string; pageDesc: string; };
	contributing: { pageTitle: string; pageDesc: string; };
	search: { placeholder: string; noResults: string; close: string; };
	drawer: {
		close: string; closeDetails: string; source: string; variant: string; import: string;
		copy: string; category: string; sources: string; assetPath: string; usageGuide: string;
		sourcePolicy: string; copied: string; copyUnavailable: string;
	};
	variants: {
		fill: string; outline: string; color: string; original: string; alternate: string;
	};
};

export const en: Translations = {
	locale: 'en',
	nav: {
		home: 'Home',
		icons: 'Icons',
		categories: 'Categories',
		packages: 'Packages',
		showcase: 'Showcase',
		docs: 'Docs',
		sources: 'Sources',
		donations: 'Donations'
	},
	resources: {
		license: 'License',
		community: 'Community',
		codeOfConduct: 'Code of Conduct',
		sources: 'Sources',
		contributing: 'Contributing'
	},
	footer: {
		explore: 'Explore',
		develop: 'Develop',
		principles: 'Principles',
		localAssets: 'Local assets',
		attributionFirst: 'Attribution first',
		noRuntimeApi: 'No runtime API',
		installation: 'Installation',
		frameworks: 'Frameworks',
		contributing: 'Contributing',
		copyright: 'Copyright © 2026 Islamic Icons. All rights reserved.',
		credits: 'Vyagra Nexus™ | Indonesia',
		tagline: 'Framework-agnostic Islamic SVG/WebP icons, organized for real projects.'
	},
	home: {
		badge: 'SVG-first · framework agnostic · Bun runtime',
		heroWords: ['Islamic', 'icons', 'for', 'the', 'modern', 'web.'],
		heroDesc:
			'A source-aware icon library built for developers who need Islamic imagery that is recognizable, consistent, reusable, and easy to contribute to. Use local SVG and WebP assets across React, Vue, Svelte, Angular, Astro, Remix, or plain HTML - without a runtime API.',
		exploreBtn: 'Explore {count} icons',
		docsBtn: 'Read the documentation',
		statIcons: 'logical icons',
		statCategories: 'categories',
		statVariants: 'visual variants',
		featuredLabel: 'Featured',
		featuredTitle: 'Start with the essentials.',
		featuredDesc:
			'Core religious, worship, Ramadan, Quran and community symbols - curated as logical icons instead of duplicated style cards.',
		viewCollection: 'View collection',
		whyLabel: 'Why this library',
		whyTitle: 'Not another random icon dump.',
		card1Title: 'Source-aware',
		card1Desc: 'Every imported asset keeps creator, source URL, license and provenance.',
		card2Title: 'One icon, many variants',
		card2Desc: 'Fill, outline and color belong to one logical icon instead of three cards.',
		card3Title: 'Contributors first',
		card3Desc: 'Add SVG/WebP metadata, then validate the catalog with Bun.',
		ctaLabel: 'Ready to use',
		ctaTitle: 'Install once. Ship Islamic UI anywhere.',
		ctaDesc:
			'Use package-level imports, direct asset URLs, or generated framework adapters.',
		ctaBtn: 'Get started',
		builtFrom: 'Built from real sources.',
		builtFromSub: 'Community · licensed external assets'
	},
	icons: {
		pageTitle: 'Icons | Islamic Icons',
		pageDesc: 'Browse the public Islamic Icons catalog by category and asset.',
		label: 'Icon library',
		title: 'Islamic icons',
		desc: '{count} logical icons. Select an icon to inspect its variants, source, attribution and import path.',
		searchPlaceholder: 'Search icons...',
		results: '{count} results',
		hint: 'Click any icon for details',
		noResults: 'No icons found.',
		noResultsHint: 'Try another search or clear the filters.',
		allIcons: 'All icons',
		collection: 'Collection',
		sources: 'Sources',
		community: 'Community',
		externalSvgRepo: 'External / SVG Repo'
	},
	categories: {
		pageTitle: 'Categories | Islamic Icons',
		pageDesc: 'Browse Islamic Icons by category and design intent.',
		label: 'Browse by meaning',
		title: 'Categories',
		desc: 'Islamic Icons is organized around semantic categories rather than visual style. Each category can grow independently as contributors add new artwork.'
	},
	docs: {
		pageTitle: 'Docs | Islamic Icons',
		pageDesc: 'Documentation for the Islamic Icons library.',
		docsSidebarLabel: 'Documentation',
		contributeCard: 'Contribute an icon',
		contributeDesc: 'Drop in SVG/WebP metadata, then validate with Bun.',
		contributeLink: 'Contribution guide',
		breadcrumb: 'Docs',
		leadDefault:
			'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		prevLink: 'Documentation home',
		nextLink: 'Browse icons'
	},
	sources: {
		pageTitle: 'Sources | Islamic Icons',
		pageDesc: 'Review source provenance and usage notes for the Islamic Icons library.',
		label: 'Provenance',
		title: 'Sources, not mystery meat.',
		desc: 'Every source lane is explicit. The library can combine upstream packages, contributor artwork and externally licensed vectors without pretending they all have the same ownership.'
	},
	donations: {
		pageTitle: 'Donations | Islamic Icons',
		pageDesc: 'Support humanitarian aid with 100% financial transparency through Islamic Icons donations.'
	},
	contributing: {
		pageTitle: 'Contributing | Islamic Icons',
		pageDesc: 'Add an icon to Islamic Icons without breaking the catalog.'
	},
	search: {
		placeholder: 'Search icons, categories, docs...',
		noResults: 'No matching icons.',
		close: 'Close search'
	},
	drawer: {
		close: 'Close',
		closeDetails: 'Close details',
		source: 'Source',
		variant: 'Variant',
		import: 'Import',
		copy: 'Copy',
		category: 'Category',
		sources: 'Sources',
		assetPath: 'Asset path',
		usageGuide: 'Usage guide',
		sourcePolicy: 'Source policy',
		copied: 'Copied to clipboard',
		copyUnavailable: 'Copy unavailable - select the code manually.'
	},
	variants: {
		fill: 'Fill',
		outline: 'Outline',
		color: 'Colors',
		original: 'Original',
		alternate: 'Alternate'
	}
};

export const id: Translations = {
	locale: 'id',
	nav: {
		home: 'Beranda',
		icons: 'Ikon',
		categories: 'Kategori',
		packages: 'Paket',
		showcase: 'Showcase',
		docs: 'Dokumentasi',
		sources: 'Sumber',
		donations: 'Donasi'
	},
	resources: {
		license: 'Lisensi',
		community: 'Komunitas',
		codeOfConduct: 'Kode Etik',
		sources: 'Sumber',
		contributing: 'Kontribusi'
	},
	footer: {
		explore: 'Jelajahi',
		develop: 'Kembangkan',
		principles: 'Prinsip',
		localAssets: 'Aset lokal',
		attributionFirst: 'Atribusi pertama',
		noRuntimeApi: 'Tanpa runtime API',
		installation: 'Instalasi',
		frameworks: 'Framework',
		contributing: 'Kontribusi',
		copyright: 'Hak Cipta © 2026 Islamic Icons. Semua hak dilindungi.',
		credits: 'Vyagra Nexus™ | Indonesia',
		tagline: 'Ikon SVG/WebP Islam yang framework-agnostic, dikelola untuk proyek nyata.'
	},
	home: {
		badge: 'SVG-first · framework agnostic · Bun runtime',
		heroWords: ['Ikon', 'Islam', 'untuk', 'web', 'modern.'],
		heroDesc:
			'Perpustakaan ikon yang source-aware, dibangun untuk developer yang membutuhkan gambar Islam yang mudah dikenali, konsisten, dapat digunakan ulang, dan mudah dikontribusi. Gunakan aset SVG dan WebP lokal di React, Vue, Svelte, Angular, Astro, Remix, atau HTML biasa - tanpa runtime API.',
		exploreBtn: 'Jelajahi {count} ikon',
		docsBtn: 'Baca dokumentasi',
		statIcons: 'ikon logis',
		statCategories: 'kategori',
		statVariants: 'varian visual',
		featuredLabel: 'Unggulan',
		featuredTitle: 'Mulai dengan yang esensial.',
		featuredDesc:
			'Simbol keagamaan, ibadah, Ramadan, Quran, dan komunitas - dikurasi sebagai ikon logis, bukan kartu gaya duplikat.',
		viewCollection: 'Lihat koleksi',
		whyLabel: 'Mengapa library ini',
		whyTitle: 'Bukan kumpulan ikon asal-asalan.',
		card1Title: 'Sumber terlacak',
		card1Desc: 'Setiap aset yang diimpor menyimpan pembuat, URL sumber, lisensi, dan asal-usul.',
		card2Title: 'Satu ikon, banyak varian',
		card2Desc: 'Fill, outline, dan warna termasuk dalam satu ikon logis, bukan tiga kartu terpisah.',
		card3Title: 'Kontributor diutamakan',
		card3Desc: 'Tambahkan metadata SVG/WebP, lalu validasi katalog dengan Bun.',
		ctaLabel: 'Siap digunakan',
		ctaTitle: 'Install sekali. Kirim UI Islam ke mana saja.',
		ctaDesc: 'Gunakan import berbasis paket, URL aset langsung, atau adaptor framework yang telah dibuat.',
		ctaBtn: 'Mulai sekarang',
		builtFrom: 'Dibangun dari sumber nyata.',
		builtFromSub: 'Komunitas · aset eksternal berlisensi'
	},
	icons: {
		pageTitle: 'Ikon | Islamic Icons',
		pageDesc: 'Jelajahi katalog Islamic Icons berdasarkan kategori dan aset.',
		label: 'Perpustakaan ikon',
		title: 'Ikon Islam',
		desc: '{count} ikon logis. Pilih ikon untuk memeriksa varian, sumber, atribusi, dan jalur impor.',
		searchPlaceholder: 'Cari ikon...',
		results: '{count} hasil',
		hint: 'Klik ikon untuk detail',
		noResults: 'Tidak ada ikon ditemukan.',
		noResultsHint: 'Coba pencarian lain atau hapus filter.',
		allIcons: 'Semua ikon',
		collection: 'Koleksi',
		sources: 'Sumber',
		community: 'Komunitas',
		externalSvgRepo: 'Eksternal / SVG Repo'
	},
	categories: {
		pageTitle: 'Kategori | Islamic Icons',
		pageDesc: 'Jelajahi Islamic Icons berdasarkan kategori dan maksud desain.',
		label: 'Jelajahi berdasarkan makna',
		title: 'Kategori',
		desc: 'Islamic Icons diorganisir berdasarkan kategori semantik, bukan gaya visual. Setiap kategori dapat berkembang secara independen saat kontributor menambahkan karya baru.'
	},
	docs: {
		pageTitle: 'Dokumentasi | Islamic Icons',
		pageDesc: 'Dokumentasi untuk library Islamic Icons.',
		docsSidebarLabel: 'Dokumentasi',
		contributeCard: 'Kontribusi ikon',
		contributeDesc: 'Tambahkan metadata SVG/WebP, lalu validasi dengan Bun.',
		contributeLink: 'Panduan kontribusi',
		breadcrumb: 'Dokumentasi',
		leadDefault:
			'Referensi praktis untuk membangun dengan Islamic Icons sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		prevLink: 'Beranda dokumentasi',
		nextLink: 'Jelajahi ikon'
	},
	sources: {
		pageTitle: 'Sumber | Islamic Icons',
		pageDesc: 'Tinjau asal-usul sumber dan catatan penggunaan untuk library Islamic Icons.',
		label: 'Asal-usul',
		title: 'Sumber, bukan misterius.',
		desc: 'Setiap jalur sumber bersifat eksplisit. Library dapat menggabungkan paket upstream, karya kontributor, dan vektor berlisensi eksternal tanpa berpura-pura semuanya memiliki kepemilikan yang sama.'
	},
	donations: {
		pageTitle: 'Donasi | Islamic Icons',
		pageDesc: 'Dukung bantuan kemanusiaan dengan transparansi keuangan 100% melalui donasi Islamic Icons.'
	},
	contributing: {
		pageTitle: 'Kontribusi | Islamic Icons',
		pageDesc: 'Tambahkan ikon ke Islamic Icons tanpa merusak katalog.'
	},
	search: {
		placeholder: 'Cari ikon, kategori, dokumentasi...',
		noResults: 'Tidak ada ikon yang cocok.',
		close: 'Tutup pencarian'
	},
	drawer: {
		close: 'Tutup',
		closeDetails: 'Tutup detail',
		source: 'Sumber',
		variant: 'Varian',
		import: 'Import',
		copy: 'Salin',
		category: 'Kategori',
		sources: 'Sumber',
		assetPath: 'Jalur aset',
		usageGuide: 'Panduan penggunaan',
		sourcePolicy: 'Kebijakan sumber',
		copied: 'Tersalin ke clipboard',
		copyUnavailable: 'Salin tidak tersedia - pilih kode secara manual.'
	},
	variants: {
		fill: 'Fill',
		outline: 'Outline',
		color: 'Warna',
		original: 'Original',
		alternate: 'Alternatif'
	}
};

export const translations: Record<Locale, Translations> = { en, id };
