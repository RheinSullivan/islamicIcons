export type Locale = 'en' | 'id' | 'ar' | 'ja';

export const locales: Locale[] = ['en', 'id', 'ar', 'ja'];

export const localeNames: Record<Locale, string> = {
	en: 'English',
	id: 'Indonesian',
	ar: 'العربية',
	ja: '日本語'
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
		close: string; closeDetails: string; maximize: string; minimize: string; source: string; variant: string; import: string;
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
		copyright: 'Copyright © 2026 Atsarul Mujahidin. All rights reserved.',
		credits: 'Vyagra Nexus™ | Indonesia',
		tagline: 'Atsarul Mujahidin - Traces of the Mujahidin. Create something that leaves a lasting impact for the fighters.'
	},
	home: {
		badge: 'Atsarul Mujahidin · Traces of the Mujahidin',
		heroWords: ['Atsarul', 'Mujahidin', 'for', 'modern', 'web'],
		heroDesc:
			'Atsarul Mujahidin means Traces of the Mujahidin. A source-aware Islamic icon library built for developers who want to create something that leaves a lasting impact for the fighters. Use local SVG and WebP assets across React, Vue, Svelte, Angular, Astro, or plain HTML.',
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
		pageTitle: 'Icons | Atsarul Mujahidin',
		pageDesc: 'Browse the public Atsarul Mujahidin catalog by category and asset.',
		label: 'Icon library',
		title: 'Atsarul Mujahidin',
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
		pageTitle: 'Categories | Atsarul Mujahidin',
		pageDesc: 'Browse Atsarul Mujahidin by category and design intent.',
		label: 'Browse by meaning',
		title: 'Categories',
		desc: 'Atsarul Mujahidin is organized around semantic categories rather than visual style. Each category can grow independently as contributors add new artwork.'
	},
	docs: {
		pageTitle: 'Docs | Atsarul Mujahidin',
		pageDesc: 'Documentation for the Atsarul Mujahidin library.',
		docsSidebarLabel: 'Documentation',
		contributeCard: 'Contribute an icon',
		contributeDesc: 'Drop in SVG/WebP metadata, then validate with Bun.',
		contributeLink: 'Contribution guide',
		breadcrumb: 'Docs',
		leadDefault:
			'A practical reference for building with Atsarul Mujahidin while keeping the artwork local and the provenance visible.',
		prevLink: 'Documentation home',
		nextLink: 'Browse icons'
	},
	sources: {
		pageTitle: 'Sources | Atsarul Mujahidin',
		pageDesc: 'Review source provenance and usage notes for the Atsarul Mujahidin library.',
		label: 'Provenance',
		title: 'Sources, not mystery meat.',
		desc: 'Every source lane is explicit. The library can combine upstream packages, contributor artwork and externally licensed vectors without pretending they all have the same ownership.'
	},
	donations: {
		pageTitle: 'Donations | Atsarul Mujahidin',
		pageDesc: 'Support humanitarian aid with 100% financial transparency through Atsarul Mujahidin donations.'
	},
	contributing: {
		pageTitle: 'Contributing | Atsarul Mujahidin',
		pageDesc: 'Add an icon to Atsarul Mujahidin without breaking the catalog.'
	},
	search: {
		placeholder: 'Search...',
		noResults: 'No matching icons.',
		close: 'Close search'
	},
	drawer: {
		close: 'Close',
		closeDetails: 'Close details',
		maximize: 'Maximize',
		minimize: 'Minimize',
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
		copyright: 'Hak Cipta © 2026 Atsarul Mujahidin. Semua hak dilindungi.',
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
		pageTitle: 'Ikon | Atsarul Mujahidin',
		pageDesc: 'Jelajahi katalog Atsarul Mujahidin berdasarkan kategori dan aset.',
		label: 'Perpustakaan ikon',
		title: 'Ikon Islam',
		desc: '{count} ikon logis. Pilih ikon untuk memeriksa varian, sumber, atribusi, dan jalur impor.',
		searchPlaceholder: 'Cari...',
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
		pageTitle: 'Kategori | Atsarul Mujahidin',
		pageDesc: 'Jelajahi Atsarul Mujahidin berdasarkan kategori dan maksud desain.',
		label: 'Jelajahi berdasarkan makna',
		title: 'Kategori',
		desc: 'Atsarul Mujahidin diorganisir berdasarkan kategori semantik, bukan gaya visual. Setiap kategori dapat berkembang secara independen saat kontributor menambahkan karya baru.'
	},
	docs: {
		pageTitle: 'Dokumentasi | Atsarul Mujahidin',
		pageDesc: 'Dokumentasi untuk library Atsarul Mujahidin.',
		docsSidebarLabel: 'Dokumentasi',
		contributeCard: 'Kontribusi ikon',
		contributeDesc: 'Tambahkan metadata SVG/WebP, lalu validasi dengan Bun.',
		contributeLink: 'Panduan kontribusi',
		breadcrumb: 'Dokumentasi',
		leadDefault:
			'Referensi praktis untuk membangun dengan Atsarul Mujahidin sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		prevLink: 'Beranda dokumentasi',
		nextLink: 'Jelajahi ikon'
	},
	sources: {
		pageTitle: 'Sumber | Atsarul Mujahidin',
		pageDesc: 'Tinjau asal-usul sumber dan catatan penggunaan untuk library Atsarul Mujahidin.',
		label: 'Asal-usul',
		title: 'Sumber, bukan misterius.',
		desc: 'Setiap jalur sumber bersifat eksplisit. Library dapat menggabungkan paket upstream, karya kontributor, dan vektor berlisensi eksternal tanpa berpura-pura semuanya memiliki kepemilikan yang sama.'
	},
	donations: {
		pageTitle: 'Donasi | Atsarul Mujahidin',
		pageDesc: 'Dukung bantuan kemanusiaan dengan transparansi keuangan 100% melalui donasi Atsarul Mujahidin.'
	},
	contributing: {
		pageTitle: 'Kontribusi | Atsarul Mujahidin',
		pageDesc: 'Tambahkan ikon ke Atsarul Mujahidin tanpa merusak katalog.'
	},
	search: {
		placeholder: 'Cari...',
		noResults: 'Tidak ada ikon yang cocok.',
		close: 'Tutup pencarian'
	},
	drawer: {
		close: 'Tutup',
		closeDetails: 'Tutup detail',
		maximize: 'Perbesar',
		minimize: 'Perkecil',
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

export const ar: Translations = {
	locale: 'ar',
	nav: {
		home: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
		icons: '\u0627\u0644\u0623\u064a\u0642\u0648\u0646\u0627\u062a',
		categories: '\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a',
		packages: '\u0627\u0644\u062d\u0632\u0645',
		showcase: '\u0645\u0639\u0631\u0636',
		docs: '\u0627\u0644\u062a\u0648\u062b\u064a\u0642',
		sources: '\u0627\u0644\u0645\u0635\u0627\u062f\u0631',
		donations: '\u0627\u0644\u062a\u0628\u0631\u0639\u0627\u062a'
	},
	resources: {
		license: '\u0627\u0644\u062a\u0631\u062e\u064a\u0635',
		community: '\u0627\u0644\u0645\u062c\u062a\u0645\u0639',
		codeOfConduct: '\u0645\u062f\u0648\u0646\u0629 \u0627\u0644\u0633\u0644\u0648\u0643',
		sources: '\u0627\u0644\u0645\u0635\u0627\u062f\u0631',
		contributing: '\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629'
	},
	footer: {
		explore: '\u0627\u0633\u062a\u0643\u0634\u0641',
		develop: '\u062a\u0637\u0648\u064a\u0631',
		principles: '\u0627\u0644\u0645\u0628\u0627\u062f\u0626',
		localAssets: '\u0645\u0644\u0641\u0627\u062a \u0645\u062d\u0644\u064a\u0629',
		attributionFirst: '\u0627\u0644\u0625\u0633\u0646\u0627\u062f \u0623\u0648\u0644\u0627\u064b',
		noRuntimeApi: '\u0628\u062f\u0648\u0646 \u0648\u0627\u062c\u0647\u0629 \u0628\u0631\u0645\u062c\u064a\u0629 \u062e\u0627\u0631\u062c\u064a\u0629',
		installation: '\u0627\u0644\u062a\u062b\u0628\u064a\u062a',
		frameworks: '\u0627\u0644\u0625\u0637\u0627\u0631\u0627\u062a',
		contributing: '\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629',
		copyright: '\u062d\u0642\u0648\u0642 \u0627\u0644\u0646\u0634\u0631 \u00a9 2026 \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.',
		credits: 'Vyagra Nexus\u2122 | \u0625\u0646\u062f\u0648\u0646\u064a\u0633\u064a\u0627',
		tagline: '\u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646 - \u0623\u064a\u0642\u0648\u0646\u0627\u062a \u0625\u0633\u0644\u0627\u0645\u064a\u0629 \u0644\u0644\u0648\u064a\u0628 \u0627\u0644\u062d\u062f\u064a\u062b.'
	},
	home: {
		badge: '\u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646 \u00b7 \u0623\u062b\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		heroWords: ['\u0622\u062b\u0627\u0631', '\u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646', '\u0644\u0644\u0648\u064a\u0628', '\u0627\u0644\u062d\u062f\u064a\u062b'],
		heroDesc: '\u0645\u0643\u062a\u0628\u0629 \u0623\u064a\u0642\u0648\u0646\u0627\u062a \u0625\u0633\u0644\u0627\u0645\u064a\u0629 \u0645\u0639 \u062a\u062a\u0628\u0639 \u0627\u0644\u0645\u0635\u0627\u062f\u0631. \u062a\u062f\u0639\u0645 React \u0648Vue \u0648Svelte \u0648Angular \u0648Astro \u0648HTML \u0627\u0644\u0639\u0627\u062f\u064a.',
		exploreBtn: '\u0627\u0633\u062a\u0643\u0634\u0641 {count} \u0623\u064a\u0642\u0648\u0646\u0629',
		docsBtn: '\u0627\u0642\u0631\u0623 \u0627\u0644\u062a\u0648\u062b\u064a\u0642',
		statIcons: '\u0623\u064a\u0642\u0648\u0646\u0627\u062a \u0645\u0646\u0637\u0642\u064a\u0629',
		statCategories: '\u062a\u0635\u0646\u064a\u0641\u0627\u062a',
		statVariants: '\u0623\u0646\u0645\u0627\u0637 \u0628\u0635\u0631\u064a\u0629',
		featuredLabel: '\u0645\u0645\u064a\u0632',
		featuredTitle: '\u0627\u0628\u062f\u0623 \u0628\u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0627\u062a.',
		featuredDesc: '\u0631\u0645\u0648\u0632 \u062f\u064a\u0646\u064a\u0629 \u0648\u0639\u0628\u0627\u062f\u064a\u0629 \u0648\u0631\u0645\u0636\u0627\u0646\u064a\u0629 \u0648\u0642\u0631\u0622\u0646\u064a\u0629 \u0648\u0645\u062c\u062a\u0645\u0639\u064a\u0629.',
		viewCollection: '\u0639\u0631\u0636 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629',
		whyLabel: '\u0644\u0645\u0627\u0630\u0627 \u0647\u0630\u0647 \u0627\u0644\u0645\u0643\u062a\u0628\u0629',
		whyTitle: '\u0644\u064a\u0633\u062a \u0645\u062c\u0631\u062f \u0645\u062c\u0645\u0648\u0639\u0629 \u0639\u0634\u0648\u0627\u0626\u064a\u0629.',
		card1Title: '\u0645\u0635\u0627\u062f\u0631 \u0645\u062a\u062a\u0628\u0639\u0629',
		card1Desc: '\u0643\u0644 \u0623\u0635\u0644 \u064a\u062d\u0645\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0646\u0634\u0626 \u0648\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0635\u062f\u0631 \u0648\u0627\u0644\u062a\u0631\u062e\u064a\u0635.',
		card2Title: '\u0623\u064a\u0642\u0648\u0646\u0629 \u0648\u0627\u062d\u062f\u0629\u060c \u0623\u0646\u0645\u0627\u0637 \u0645\u062a\u0639\u062f\u062f\u0629',
		card2Desc: '\u0627\u0644\u062a\u0639\u0628\u0626\u0629 \u0648\u0627\u0644\u0645\u062e\u0637\u0637 \u0648\u0627\u0644\u0644\u0648\u0646 \u062a\u0646\u062a\u0645\u064a \u0644\u0623\u064a\u0642\u0648\u0646\u0629 \u0645\u0646\u0637\u0642\u064a\u0629 \u0648\u0627\u062d\u062f\u0629.',
		card3Title: '\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0648\u0646 \u0623\u0648\u0644\u0627\u064b',
		card3Desc: '\u0623\u0636\u0641 \u0628\u064a\u0627\u0646\u0627\u062a SVG/WebP \u062b\u0645 \u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0641\u0647\u0631\u0633 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Bun.',
		ctaLabel: '\u062c\u0627\u0647\u0632 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645',
		ctaTitle: '\u062b\u0628\u062a \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629. \u0623\u0631\u0633\u0644 \u0648\u0627\u062c\u0647\u0629 \u0625\u0633\u0644\u0627\u0645\u064a\u0629 \u0623\u064a\u0646\u0645\u0627.',
		ctaDesc: '\u0627\u0633\u062a\u062e\u062f\u0645 \u0627\u0633\u062a\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u062d\u0632\u0645\u0629 \u0623\u0648 \u0631\u0648\u0627\u0628\u0637 URL \u0627\u0644\u0623\u0635\u0648\u0644 \u0623\u0648 \u0645\u062d\u0648\u0644\u0627\u062a \u0627\u0644\u0625\u0637\u0627\u0631.',
		ctaBtn: '\u0627\u0628\u062f\u0623 \u0627\u0644\u0622\u0646',
		builtFrom: '\u0645\u0628\u0646\u064a \u0645\u0646 \u0645\u0635\u0627\u062f\u0631 \u062d\u0642\u064a\u0642\u064a\u0629.',
		builtFromSub: '\u0645\u062c\u062a\u0645\u0639 \u00b7 \u0623\u0635\u0648\u0644 \u062e\u0627\u0631\u062c\u064a\u0629 \u0645\u0631\u062e\u0635\u0629'
	},
	icons: {
		pageTitle: '\u0627\u0644\u0623\u064a\u0642\u0648\u0646\u0627\u062a | \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		pageDesc: '\u062a\u0635\u0641\u062d \u0641\u0647\u0631\u0633 \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646 \u062d\u0633\u0628 \u0627\u0644\u062a\u0635\u0646\u064a\u0641 \u0648\u0627\u0644\u0623\u0635\u0648\u0644.',
		label: '\u0645\u0643\u062a\u0628\u0629 \u0627\u0644\u0623\u064a\u0642\u0648\u0646\u0627\u062a',
		title: '\u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		desc: '{count} \u0623\u064a\u0642\u0648\u0646\u0629 \u0645\u0646\u0637\u0642\u064a\u0629. \u0627\u062e\u062a\u0631 \u0623\u064a\u0642\u0648\u0646\u0629 \u0644\u0641\u062d\u0635 \u0623\u0646\u0645\u0627\u0637\u0647\u0627 \u0648\u0645\u0635\u062f\u0631\u0647\u0627.',
		searchPlaceholder: '\u0628\u062d\u062b',
		results: '{count} \u0646\u062a\u064a\u062c\u0629',
		hint: '\u0627\u0646\u0642\u0631 \u0641\u0648\u0642 \u0623\u064a \u0623\u064a\u0642\u0648\u0646\u0629 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644',
		noResults: '\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0623\u064a\u0642\u0648\u0646\u0627\u062a.',
		noResultsHint: '\u062c\u0631\u0628 \u0628\u062d\u062b\u0627\u064b \u0622\u062e\u0631 \u0623\u0648 \u0623\u0632\u0644 \u0627\u0644\u0641\u0644\u0627\u062a\u0631.',
		allIcons: '\u0643\u0644 \u0627\u0644\u0623\u064a\u0642\u0648\u0646\u0627\u062a',
		collection: '\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629',
		sources: '\u0627\u0644\u0645\u0635\u0627\u062f\u0631',
		community: '\u0627\u0644\u0645\u062c\u062a\u0645\u0639',
		externalSvgRepo: '\u062e\u0627\u0631\u062c\u064a / SVG Repo'
	},
	categories: {
		pageTitle: '\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a | \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		pageDesc: '\u062a\u0635\u0641\u062d \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646 \u062d\u0633\u0628 \u0627\u0644\u062a\u0635\u0646\u064a\u0641 \u0648\u0627\u0644\u0645\u0639\u0646\u0649.',
		label: '\u062a\u0635\u0641\u062d \u062d\u0633\u0628 \u0627\u0644\u0645\u0639\u0646\u0649',
		title: '\u0627\u0644\u062a\u0635\u0646\u064a\u0641\u0627\u062a',
		desc: '\u064a\u062a\u0645 \u062a\u0646\u0638\u064a\u0645 \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646 \u062d\u0633\u0628 \u0641\u0626\u0627\u062a \u062f\u0644\u0627\u0644\u064a\u0629\u060c \u0644\u064a\u0633 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0628\u0635\u0631\u064a.'
	},
	docs: {
		pageTitle: '\u0627\u0644\u062a\u0648\u062b\u064a\u0642 | \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		pageDesc: '\u062a\u0648\u062b\u064a\u0642 \u0645\u0643\u062a\u0628\u0629 \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646.',
		docsSidebarLabel: '\u0627\u0644\u062a\u0648\u062b\u064a\u0642',
		contributeCard: '\u0633\u0627\u0647\u0645 \u0628\u0623\u064a\u0642\u0648\u0646\u0629',
		contributeDesc: '\u0623\u0636\u0641 \u0628\u064a\u0627\u0646\u0627\u062a SVG/WebP \u062b\u0645 \u062a\u062d\u0642\u0642 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 Bun.',
		contributeLink: '\u062f\u0644\u064a\u0644 \u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629',
		breadcrumb: '\u0627\u0644\u062a\u0648\u062b\u064a\u0642',
		leadDefault: '\u0645\u0631\u062c\u0639 \u0639\u0645\u0644\u064a \u0644\u0644\u0628\u0646\u0627\u0621 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646 \u0645\u0639 \u0627\u0644\u062d\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u0623\u0635\u0648\u0644 \u0645\u062d\u0644\u064a\u0629.',
		prevLink: '\u0627\u0644\u062a\u0648\u062b\u064a\u0642 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629',
		nextLink: '\u062a\u0635\u0641\u062d \u0627\u0644\u0623\u064a\u0642\u0648\u0646\u0627\u062a'
	},
	sources: {
		pageTitle: '\u0627\u0644\u0645\u0635\u0627\u062f\u0631 | \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		pageDesc: '\u0645\u0631\u0627\u062c\u0639\u0629 \u0645\u0635\u0627\u062f\u0631 \u0627\u0644\u0623\u064a\u0642\u0648\u0646\u0627\u062a \u0648\u062d\u0642\u0648\u0642 \u0627\u0644\u062a\u0631\u062e\u064a\u0635.',
		label: '\u0627\u0644\u0645\u0635\u062f\u0631',
		title: '\u0645\u0635\u0627\u062f\u0631 \u0648\u0627\u0636\u062d\u0629.',
		desc: '\u0643\u0644 \u0645\u0635\u062f\u0631 \u0648\u0627\u0636\u062d \u0648\u0645\u0648\u062b\u0642. \u0644\u0627 \u062a\u062e\u0645\u064a\u0646\u0627\u062a \u0641\u064a \u0627\u0644\u062a\u0631\u062e\u064a\u0635.'
	},
	donations: {
		pageTitle: '\u0627\u0644\u062a\u0628\u0631\u0639\u0627\u062a | \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		pageDesc: '\u062f\u0639\u0645 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0627\u062a \u0627\u0644\u0625\u0646\u0633\u0627\u0646\u064a\u0629 \u0628\u0634\u0641\u0627\u0641\u064a\u0629 \u0645\u0627\u0644\u064a\u0629 100\u066a.'
	},
	contributing: {
		pageTitle: '\u0627\u0644\u0645\u0633\u0627\u0647\u0645\u0629 | \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646',
		pageDesc: '\u0623\u0636\u0641 \u0623\u064a\u0642\u0648\u0646\u0629 \u0625\u0644\u0649 \u0622\u062b\u0627\u0631 \u0627\u0644\u0645\u062c\u0627\u0647\u062f\u064a\u0646.'
	},
	search: {
		placeholder: '\u0628\u062d\u062b',
		noResults: '\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u064a\u0642\u0648\u0646\u0627\u062a \u0645\u062a\u0637\u0627\u0628\u0642\u0629.',
		close: '\u0625\u063a\u0644\u0627\u0642'
	},
	drawer: {
		close: '\u0625\u063a\u0644\u0627\u0642',
		closeDetails: '\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644',
		maximize: '\u062a\u0643\u0628\u064a\u0631',
		minimize: '\u062a\u0635\u063a\u064a\u0631',
		source: '\u0627\u0644\u0645\u0635\u062f\u0631',
		variant: '\u0627\u0644\u0646\u0645\u0637',
		import: '\u0627\u0633\u062a\u064a\u0631\u0627\u062f',
		copy: '\u0646\u0633\u062e',
		category: '\u0627\u0644\u062a\u0635\u0646\u064a\u0641',
		sources: '\u0627\u0644\u0645\u0635\u0627\u062f\u0631',
		assetPath: '\u0645\u0633\u0627\u0631 \u0627\u0644\u0623\u0635\u0644',
		usageGuide: '\u062f\u0644\u064a\u0644 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645',
		sourcePolicy: '\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u0645\u0635\u0627\u062f\u0631',
		copied: '\u062a\u0645 \u0627\u0644\u0646\u0633\u062e',
		copyUnavailable: '\u0627\u0644\u0646\u0633\u062e \u063a\u064a\u0631 \u0645\u062a\u0627\u062d - \u062d\u062f\u062f \u0627\u0644\u0643\u0648\u062f \u064a\u062f\u0648\u064a\u0627\u064b.'
	},
	variants: {
		fill: '\u0645\u0644\u0648\u0621',
		outline: '\u062e\u0637\u0648\u0637',
		color: '\u0623\u0644\u0648\u0627\u0646',
		original: '\u0623\u0635\u0644\u064a',
		alternate: '\u0628\u062f\u064a\u0644'
	}
};

export const ja: Translations = {
	locale: 'ja',
	nav: {
		home: '\u30db\u30fc\u30e0',
		icons: '\u30a2\u30a4\u30b3\u30f3',
		categories: '\u30ab\u30c6\u30b4\u30ea\u30fc',
		packages: '\u30d1\u30c3\u30b1\u30fc\u30b8',
		showcase: '\u30b7\u30e7\u30fc\u30b1\u30fc\u30b9',
		docs: '\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8',
		sources: '\u30bd\u30fc\u30b9',
		donations: '\u5bc4\u4ed8'
	},
	resources: {
		license: '\u30e9\u30a4\u30bb\u30f3\u30b9',
		community: '\u30b3\u30df\u30e5\u30cb\u30c6\u30a3',
		codeOfConduct: '\u884c\u52d5\u898f\u7bc4',
		sources: '\u30bd\u30fc\u30b9',
		contributing: '\u8ca2\u732e'
	},
	footer: {
		explore: '\u63a2\u7d22',
		develop: '\u958b\u767a',
		principles: '\u539f\u5247',
		localAssets: '\u30ed\u30fc\u30ab\u30eb\u30a2\u30bb\u30c3\u30c8',
		attributionFirst: '\u5e30\u5c5e\u8868\u793a\u5148\u6c7a',
		noRuntimeApi: '\u30e9\u30f3\u30bf\u30a4\u30e0API\u306a\u3057',
		installation: '\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb',
		frameworks: '\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af',
		contributing: '\u8ca2\u732e',
		copyright: '\u8457\u4f5c\u6a29 \u00a9 2026 Atsarul Mujahidin. \u7121\u65ad\u8ee2\u8f09\u7981\u6b62.',
		credits: 'Vyagra Nexus\u2122 | \u30a4\u30f3\u30c9\u30cd\u30b7\u30a2',
		tagline: '\u30a4\u30b9\u30e9\u30e0\u306e\u30a2\u30a4\u30b3\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea - \u30e2\u30c0\u30f3\u30a6\u30a7\u30d6\u306e\u305f\u3081.'
	},
	home: {
		badge: 'Atsarul Mujahidin \u30fb \u30e0\u30b8\u30e3\u30d2\u30c7\u30a3\u30f3\u306e\u8db3\u8de1',
		heroWords: ['\u30a4\u30b9\u30e9\u30e0', '\u30a2\u30a4\u30b3\u30f3', '\u3067', '\u30e2\u30c0\u30f3', 'WEB'],
		heroDesc: '\u30bd\u30fc\u30b9\u8ffd\u8de1\u53ef\u80fd\u306a\u30a4\u30b9\u30e9\u30e0\u30a2\u30a4\u30b3\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea\u3002React\u3001Vue\u3001Svelte\u3001Angular\u3001Astro\u3001\u30d7\u30ec\u30fcHTML\u306b\u5bfe\u5fdc\u3002',
		exploreBtn: '{count}\u500b\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u63a2\u7d22',
		docsBtn: '\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3080',
		statIcons: '\u30a2\u30a4\u30b3\u30f3',
		statCategories: '\u30ab\u30c6\u30b4\u30ea\u30fc',
		statVariants: '\u30d0\u30ea\u30a2\u30f3\u30c8',
		featuredLabel: '\u6ce8\u76ee',
		featuredTitle: '\u57fa\u672c\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002',
		featuredDesc: '\u5b97\u6559\u3001\u793c\u62dd\u3001\u30e9\u30de\u30c0\u30fc\u30f3\u3001\u30af\u30eb\u30a2\u30fc\u30f3\u306e\u30b7\u30f3\u30dc\u30eb\u3002',
		viewCollection: '\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3092\u898b\u308b',
		whyLabel: '\u306a\u305c\u3053\u306e\u30e9\u30a4\u30d6\u30e9\u30ea',
		whyTitle: '\u30e9\u30f3\u30c0\u30e0\u306a\u30a2\u30a4\u30b3\u30f3\u5c71\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002',
		card1Title: '\u30bd\u30fc\u30b9\u8ffd\u8de1',
		card1Desc: '\u5168\u3066\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u30bd\u30fc\u30b9\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u3001\u5c5e\u6027\u60c5\u5831\u3092\u4fdd\u6301\u3002',
		card2Title: '1\u30a2\u30a4\u30b3\u30f3\u3001\u8907\u6570\u30d0\u30ea\u30a2\u30f3\u30c8',
		card2Desc: '\u5857\u308a\u3064\u3076\u3057\u3001\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3\u3001\u30ab\u30e9\u30fc\u306f1\u3064\u306e\u8ad6\u7406\u30a2\u30a4\u30b3\u30f3\u306b\u5c5e\u3059\u3002',
		card3Title: '\u8ca2\u732e\u8005\u512a\u5148',
		card3Desc: 'SVG/WebP\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u8ffd\u52a0\u3057\u3001Bun\u3067\u30ab\u30bf\u30ed\u30b0\u3092\u691c\u8a3c\u3002',
		ctaLabel: '\u4f7f\u7528\u6e96\u5099\u5b8c\u4e86',
		ctaTitle: '1\u56de\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3002\u3069\u3053\u3067\u3082\u30a4\u30b9\u30e9\u30e0UI\u3092\u914d\u4fe1\u3002',
		ctaDesc: '\u30d1\u30c3\u30b1\u30fc\u30b8\u30a4\u30f3\u30dd\u30fc\u30c8\u3001\u76f4\u63a5URL\u3001\u307e\u305f\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u30a2\u30c0\u30d7\u30bf\u3092\u4f7f\u7528\u3002',
		ctaBtn: '\u5f15\u8fd5\u3059',
		builtFrom: '\u5b9f\u969b\u306e\u30bd\u30fc\u30b9\u304b\u3089\u69cb\u7bc9\u3002',
		builtFromSub: '\u30b3\u30df\u30e5\u30cb\u30c6\u30a3 \u30fb \u5916\u90e8\u30e9\u30a4\u30bb\u30f3\u30b9\u30a2\u30bb\u30c3\u30c8'
	},
	icons: {
		pageTitle: '\u30a2\u30a4\u30b3\u30f3 | Atsarul Mujahidin',
		pageDesc: 'Atsarul Mujahidin\u306e\u30ab\u30bf\u30ed\u30b0\u3092\u30ab\u30c6\u30b4\u30ea\u30fc\u3067\u9589\u89a7\u3002',
		label: '\u30a2\u30a4\u30b3\u30f3\u30e9\u30a4\u30d6\u30e9\u30ea',
		title: 'Atsarul Mujahidin',
		desc: '{count}\u500b\u306e\u8ad6\u7406\u30a2\u30a4\u30b3\u30f3\u3002\u30a2\u30a4\u30b3\u30f3\u3092\u9078\u629e\u3057\u3066\u8a73\u7d30\u3092\u78ba\u8a8d\u3002',
		searchPlaceholder: '\u691c\u7d22',
		results: '{count}\u4ef6',
		hint: '\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u8a73\u7d30\u3092\u8868\u793a',
		noResults: '\u30a2\u30a4\u30b3\u30f3\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002',
		noResultsHint: '\u4ed6\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3084\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
		allIcons: '\u5168\u30a2\u30a4\u30b3\u30f3',
		collection: '\u30b3\u30ec\u30af\u30b7\u30e7\u30f3',
		sources: '\u30bd\u30fc\u30b9',
		community: '\u30b3\u30df\u30e5\u30cb\u30c6\u30a3',
		externalSvgRepo: '\u5916\u90e8 / SVG Repo'
	},
	categories: {
		pageTitle: '\u30ab\u30c6\u30b4\u30ea\u30fc | Atsarul Mujahidin',
		pageDesc: 'Atsarul Mujahidin\u3092\u30ab\u30c6\u30b4\u30ea\u30fc\u3067\u9589\u89a7\u3002',
		label: '\u610f\u5473\u3067\u9589\u89a7',
		title: '\u30ab\u30c6\u30b4\u30ea\u30fc',
		desc: 'Atsarul Mujahidin\u306f\u8996\u899a\u30b9\u30bf\u30a4\u30eb\u3067\u306f\u306a\u304f\u3001\u610f\u5473\u7684\u30ab\u30c6\u30b4\u30ea\u30fc\u3067\u6574\u7406\u3055\u308c\u3066\u3044\u307e\u3059\u3002'
	},
	docs: {
		pageTitle: '\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8 | Atsarul Mujahidin',
		pageDesc: 'Atsarul Mujahidin\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3002',
		docsSidebarLabel: '\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8',
		contributeCard: '\u30a2\u30a4\u30b3\u30f3\u3092\u8ca2\u732e',
		contributeDesc: 'SVG/WebP\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u8ffd\u52a0\u3057\u3001Bun\u3067\u691c\u8a3c\u3002',
		contributeLink: '\u8ca2\u732e\u30ac\u30a4\u30c9',
		breadcrumb: '\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8',
		leadDefault: 'Atsarul Mujahidin\u3067\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u5b9f\u7528\u7684\u306a\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3002',
		prevLink: '\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u30db\u30fc\u30e0',
		nextLink: '\u30a2\u30a4\u30b3\u30f3\u3092\u9589\u89a7'
	},
	sources: {
		pageTitle: '\u30bd\u30fc\u30b9 | Atsarul Mujahidin',
		pageDesc: '\u30a2\u30a4\u30b3\u30f3\u306e\u30bd\u30fc\u30b9\u3068\u30e9\u30a4\u30bb\u30f3\u30b9\u3092\u78ba\u8a8d\u3002',
		label: '\u30bd\u30fc\u30b9',
		title: '\u660e\u78ba\u306a\u30bd\u30fc\u30b9\u3002',
		desc: '\u5168\u3066\u306e\u30bd\u30fc\u30b9\u306f\u660e\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u63a8\u6e2c\u306f\u3042\u308a\u307e\u305b\u3093\u3002'
	},
	donations: {
		pageTitle: '\u5bc4\u4ed8 | Atsarul Mujahidin',
		pageDesc: '100%\u900f\u660e\u6027\u3067\u4eba\u9053\u652f\u63f4\u3092\u652f\u63f4\u3059\u308b\u3002'
	},
	contributing: {
		pageTitle: '\u8ca2\u732e | Atsarul Mujahidin',
		pageDesc: 'Atsarul Mujahidin\u306b\u30a2\u30a4\u30b3\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u3002'
	},
	search: {
		placeholder: '\u691c\u7d22',
		noResults: '\u30a2\u30a4\u30b3\u30f3\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002',
		close: '\u9589\u3058\u308b'
	},
	drawer: {
		close: '\u9589\u3058\u308b',
		closeDetails: '\u8a73\u7d30\u3092\u9589\u3058\u308b',
		maximize: '\u62e1\u5927',
		minimize: '\u7e2e\u5c0f',
		source: '\u30bd\u30fc\u30b9',
		variant: '\u30d0\u30ea\u30a2\u30f3\u30c8',
		import: '\u30a4\u30f3\u30dd\u30fc\u30c8',
		copy: '\u30b3\u30d4\u30fc',
		category: '\u30ab\u30c6\u30b4\u30ea\u30fc',
		sources: '\u30bd\u30fc\u30b9',
		assetPath: '\u30a2\u30bb\u30c3\u30c8\u30d1\u30b9',
		usageGuide: '\u4f7f\u7528\u30ac\u30a4\u30c9',
		sourcePolicy: '\u30bd\u30fc\u30b9\u30dd\u30ea\u30b7\u30fc',
		copied: '\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f',
		copyUnavailable: '\u30b3\u30d4\u30fc\u3067\u304d\u307e\u305b\u3093 - \u30b3\u30fc\u30c9\u3092\u624b\u52d5\u3067\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002'
	},
	variants: {
		fill: '\u5857\u308a\u3064\u3076\u3057',
		outline: '\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3',
		color: '\u30ab\u30e9\u30fc',
		original: '\u30aa\u30ea\u30b8\u30ca\u30eb',
		alternate: '\u4ee3\u66ff'
	}
};

export const translations: Record<Locale, Translations> = { en, id, ar, ja };
