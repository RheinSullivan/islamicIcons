export type DocEntry = {
	title: string;
	lead: string;
	body: string;
};

const SOURCE_LINKS_HTML = `<div class="source-links"><a href="https://www.svgrepo.com/svg/235387/mosque-islam" target="_blank" rel="noreferrer"><span>Mosque Islam</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/123343/islamic-lantern" target="_blank" rel="noreferrer"><span>Islamic Lantern</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/80653/qibla-compass" target="_blank" rel="noreferrer"><span>Qibla Compass</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/317543/quran-islam" target="_blank" rel="noreferrer"><span>Quran Islam</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/262970/quran-quran" target="_blank" rel="noreferrer"><span>Quran Quran</span><small>CC0 ↗</small></a></div>`;

export const docs: Record<string, DocEntry> = {
	'/docs': {
		title: 'Overview',
		lead: 'Everything you need to browse, install, use, source and contribute to Islamic Icons.',
		body: `<p>Islamic Icons is a framework-agnostic collection of Islamic SVG and WebP artwork designed around two ideas: <strong>recognizable iconography</strong> and <strong>traceable sources</strong>. The library is not tied to React. The assets are ordinary files, while framework adapters make imports pleasant in React, Vue, Svelte, Angular, Astro and other modern stacks.</p><p>The collection intentionally does not promise a fixed number of icons. A contributor can add one icon, ten icons, or remove an icon when licensing changes. The catalog is generated from assets and metadata at build time.</p><div class="callout"><b>Core rule</b><span>Google is a discovery tool, not a license. An icon only enters the distributable library after its original source and redistribution terms are recorded.</span></div>`
	},
	'/docs/installation': {
		title: 'Installation',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>Install the library with the package manager used by your project. The package exposes semantic category entry points and keeps the artwork as local SVG/WebP assets.</p><h2>Install</h2><pre>bun add atsarul-mujahidin\nnpm install atsarul-mujahidin\npnpm add atsarul-mujahidin\nyarn add atsarul-mujahidin</pre><h2>Run the Web Docs locally</h2><pre>git clone &lt;repository&gt;\ncd atsarul-mujahidin\nbun install\nbun run docs</pre><p>For contributors, use Bun for the repository build pipeline. The published package can be installed with Bun, npm, pnpm or Yarn.</p><h2>Build the library</h2><pre>bun run icons:catalog\nbun run icons:package\nbun run icons:validate\nbun run build</pre>`
	},
	'/docs/usage': {
		title: 'Usage',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>Use the semantic category that contains the icon you need. Framework and library examples should use the component form with <strong>className</strong>, <strong>size</strong> and <strong>style</strong> props. The Allah example below is the canonical component syntax.</p><h2>Framework / library component</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>For a React-style project, the same component can be imported from the relevant framework adapter and rendered directly in JSX.</p><h2>Native HTML</h2><pre>&lt;atsarul-mujahidin variant="allah" class="" size="" style="" /&gt;</pre><p>Native HTML can also reference the local SVG directly when a custom element is not part of the application.</p><pre>&lt;img src="/assets/icons/mosque/mosque/original.svg" alt="Mosque" /&gt;</pre><p>All source assets remain local to the package; applications do not need a runtime request to the upstream icon API.</p>`
	},
	'/docs/variants': {
		title: 'Variants',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>A logical icon may expose <strong>fill</strong>, <strong>outline</strong>, and <strong>color</strong> variants. The gallery intentionally renders one card per logical icon. Variant switching happens inside the icon detail panel.</p><div class="variant-demo"><div><span>Fill</span><b>Dense silhouette</b></div><div><span>Outline</span><b>Line-oriented mark</b></div><div><span>Colors</span><b>Multi-tone artwork</b></div></div><p>Some contributed artwork is intentionally available only as <strong>original</strong>. The library does not fabricate variants when doing so would distort the creator's artwork.</p>`
	},
	'/docs/frameworks': {
		title: 'Frameworks',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>SVG is the compatibility layer. Framework adapters are convenience packages, not a requirement for using the collection.</p><h2>Canonical component usage</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>Use the same component-shaped API in framework documentation, then adapt the surrounding syntax to the framework compiler. For plain HTML, use the native custom-element form below.</p><h2>Native HTML (Web Component)</h2><pre>&lt;atsarul-mujahidin variant="allah" class="" size="" style="" /&gt;</pre><div class="framework-list"><article><b>React / Remix</b><code>atsarul-mujahidin/react</code></article><article><b>Vue / Nuxt</b><code>atsarul-mujahidin/vue</code></article><article><b>Svelte / SvelteKit</b><code>atsarul-mujahidin/svelte</code></article><article><b>Angular</b><code>atsarul-mujahidin/angular</code></article><article><b>Astro</b><code>atsarul-mujahidin/astro</code></article><article><b>Plain HTML</b><code>assets/icons/**</code></article></div><p>The same source asset can therefore be used in a design system, a static site, a SPA, or a server-rendered application.</p>`
	},
	'/docs/sources': {
		title: 'Sources & attribution',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>There are three source lanes: community assets supplied for this project, externally licensed vectors, and Google Material Icons. Google Search is discovery only; it never grants redistribution permission.</p><h2>External discovery</h2><p>External candidates are reviewed individually. The source page and license stay attached to the asset.</p>${SOURCE_LINKS_HTML}`
	},
	'/docs/donations': {
		title: 'Donations & humanitarian aid',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>Islamic Icons accepts public donations with <strong>100% financial transparency</strong>. Minimum 70% of all funds are allocated to humanitarian aid, including Palestine relief, orphanages, low-income families, elderly care and disaster relief. Up to 30% may support framework operations such as server, CDN and domain costs.</p><div class="callout"><b>Donation channel</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>Transparency reporting</h2><p>The detailed public reporting policy and transparency report index lives in <strong>docs/en/donations.md</strong>. Verified statements should be added there for each reporting period rather than inventing or estimating financial figures.</p><h2>Allocation policy</h2><p><strong>Minimum 70%</strong> is allocated to humanitarian aid. <strong>Up to 30%</strong> may be allocated to framework operations required to keep Islamic Icons available and maintainable.</p><div class="framework-list"><article><b>Palestine relief</b><code>Humanitarian aid priority</code></article><article><b>Orphanages</b><code>Humanitarian aid</code></article><article><b>Low-income families</b><code>Humanitarian aid</code></article><article><b>Elderly care</b><code>Humanitarian aid</code></article><article><b>Disaster relief</b><code>Humanitarian aid</code></article><article><b>Server, CDN, domain</b><code>Framework operations</code></article></div><h2>Reporting requirements</h2><p>Each published report should include the reporting period, total donations received, humanitarian allocation, operations allocation, recipient or program category when safe to disclose, supporting evidence and remaining balance.</p>`
	}
};

// Indonesian translations
export const docsId: Record<string, DocEntry> = {
	'/docs': {
		title: 'Ikhtisar',
		lead: 'Semua yang Anda butuhkan untuk menjelajahi, menginstal, menggunakan, menelusuri sumber, dan berkontribusi pada Islamic Icons.',
		body: `<p>Islamic Icons adalah koleksi karya seni Islam SVG dan WebP yang framework-agnostic, dirancang berdasarkan dua gagasan: <strong>ikonografi yang mudah dikenali</strong> dan <strong>sumber yang dapat dilacak</strong>. Library ini tidak terikat pada React. Aset adalah file biasa, sementara adaptor framework membuat impor lebih mudah di React, Vue, Svelte, Angular, Astro, dan tumpukan modern lainnya.</p><p>Koleksi ini secara sengaja tidak menjanjikan jumlah ikon yang tetap. Kontributor dapat menambahkan satu ikon, sepuluh ikon, atau menghapus ikon ketika lisensi berubah. Katalog dibuat dari aset dan metadata saat waktu build.</p><div class="callout"><b>Aturan utama</b><span>Google adalah alat penemuan, bukan lisensi. Sebuah ikon hanya masuk ke library yang dapat didistribusikan setelah sumber asli dan ketentuan redistribusinya dicatat.</span></div>`
	},
	'/docs/installation': {
		title: 'Instalasi',
		lead: 'Referensi praktis untuk membangun dengan Islamic Icons sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Instal library dengan package manager yang digunakan proyek Anda. Package ini mengekspos entry point kategori semantik dan menyimpan karya seni sebagai aset SVG/WebP lokal.</p><h2>Install</h2><pre>bun add atsarul-mujahidin\nnpm install atsarul-mujahidin\npnpm add atsarul-mujahidin\nyarn add atsarul-mujahidin</pre><h2>Jalankan Web Docs secara lokal</h2><pre>git clone &lt;repository&gt;\ncd atsarul-mujahidin\nbun install\nbun run docs</pre><p>Untuk kontributor, gunakan Bun untuk pipeline build repository. Package yang dipublish dapat diinstal dengan Bun, npm, pnpm, atau Yarn.</p><h2>Build library</h2><pre>bun run icons:catalog\nbun run icons:package\nbun run icons:validate\nbun run build</pre>`
	},
	'/docs/usage': {
		title: 'Penggunaan',
		lead: 'Referensi praktis untuk membangun dengan Islamic Icons sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Gunakan kategori semantik yang berisi ikon yang Anda butuhkan. Contoh framework dan library harus menggunakan bentuk komponen dengan prop <strong>className</strong>, <strong>size</strong>, dan <strong>style</strong>. Contoh Allah di bawah ini adalah sintaks komponen kanonik.</p><h2>Komponen framework / library</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>Untuk proyek bergaya React, komponen yang sama dapat diimpor dari adaptor framework yang relevan dan dirender langsung di JSX.</p><h2>HTML Native (Web Component)</h2><pre>&lt;atsarul-mujahidin variant="allah" class="" size="" style="" /&gt;</pre><p>HTML native juga dapat mereferensikan SVG lokal secara langsung ketika elemen kustom bukan bagian dari aplikasi.</p><pre>&lt;img src="/assets/icons/mosque/mosque/original.svg" alt="Masjid" /&gt;</pre><p>Semua aset sumber tetap lokal ke package; aplikasi tidak memerlukan permintaan runtime ke API ikon upstream.</p>`
	},
	'/docs/variants': {
		title: 'Varian',
		lead: 'Referensi praktis untuk membangun dengan Islamic Icons sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Sebuah ikon logis dapat mengekspos varian <strong>fill</strong>, <strong>outline</strong>, dan <strong>color</strong>. Galeri sengaja merender satu kartu per ikon logis. Pergantian varian terjadi di dalam panel detail ikon.</p><div class="variant-demo"><div><span>Fill</span><b>Siluet padat</b></div><div><span>Outline</span><b>Tanda berorientasi garis</b></div><div><span>Colors</span><b>Karya multi-warna</b></div></div><p>Beberapa karya yang dikontribusikan secara sengaja hanya tersedia sebagai <strong>original</strong>. Library tidak membuat varian ketika melakukannya akan mendistorsi karya seni pembuat.</p>`
	},
	'/docs/frameworks': {
		title: 'Framework',
		lead: 'Referensi praktis untuk membangun dengan Islamic Icons sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>SVG adalah lapisan kompatibilitas. Adaptor framework adalah paket kenyamanan, bukan persyaratan untuk menggunakan koleksi ini.</p><h2>Penggunaan komponen kanonik</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>Gunakan API berbentuk komponen yang sama dalam dokumentasi framework, kemudian adaptasi sintaks sekitarnya ke compiler framework. Untuk HTML biasa, gunakan bentuk elemen kustom native di bawah ini.</p><h2>HTML Native (Web Component)</h2><pre>&lt;atsarul-mujahidin variant="allah" class="" size="" style="" /&gt;</pre><div class="framework-list"><article><b>React / Remix</b><code>atsarul-mujahidin/react</code></article><article><b>Vue / Nuxt</b><code>atsarul-mujahidin/vue</code></article><article><b>Svelte / SvelteKit</b><code>atsarul-mujahidin/svelte</code></article><article><b>Angular</b><code>atsarul-mujahidin/angular</code></article><article><b>Astro</b><code>atsarul-mujahidin/astro</code></article><article><b>Plain HTML</b><code>assets/icons/**</code></article></div><p>Aset sumber yang sama karena itu dapat digunakan dalam sistem desain, situs statis, SPA, atau aplikasi yang dirender di server.</p>`
	},
	'/docs/sources': {
		title: 'Sumber & atribusi',
		lead: 'Referensi praktis untuk membangun dengan Islamic Icons sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Ada tiga jalur sumber: aset komunitas yang disediakan untuk proyek ini, vektor berlisensi eksternal, dan Google Material Icons. Google Search hanya untuk penemuan; tidak pernah memberikan izin redistribusi.</p><h2>Penemuan eksternal</h2><p>Kandidat eksternal ditinjau secara individual. Halaman sumber dan lisensi tetap terlampir pada aset.</p>${SOURCE_LINKS_HTML}`
	},
	'/docs/donations': {
		title: 'Donasi & bantuan kemanusiaan',
		lead: 'Referensi praktis untuk membangun dengan Islamic Icons sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Islamic Icons menerima donasi publik dengan <strong>transparansi keuangan 100%</strong>. Minimum 70% dari semua dana dialokasikan untuk bantuan kemanusiaan, termasuk bantuan Palestina, panti asuhan, keluarga berpenghasilan rendah, perawatan lansia, dan bantuan bencana. Hingga 30% dapat mendukung operasi framework seperti server, CDN, dan biaya domain.</p><div class="callout"><b>Saluran donasi</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>Pelaporan transparansi</h2><p>Kebijakan pelaporan publik dan indeks laporan transparansi terperinci ada di <strong>docs/en/donations.md</strong>. Pernyataan terverifikasi harus ditambahkan di sana untuk setiap periode pelaporan.</p><h2>Kebijakan alokasi</h2><p><strong>Minimum 70%</strong> dialokasikan untuk bantuan kemanusiaan. <strong>Hingga 30%</strong> dapat dialokasikan untuk operasi framework yang diperlukan.</p><div class="framework-list"><article><b>Bantuan Palestina</b><code>Prioritas bantuan kemanusiaan</code></article><article><b>Panti asuhan</b><code>Bantuan kemanusiaan</code></article><article><b>Keluarga berpenghasilan rendah</b><code>Bantuan kemanusiaan</code></article><article><b>Perawatan lansia</b><code>Bantuan kemanusiaan</code></article><article><b>Bantuan bencana</b><code>Bantuan kemanusiaan</code></article><article><b>Server, CDN, domain</b><code>Operasi framework</code></article></div>`
	}
};

export function getDoc(path: string, locale: 'en' | 'id'): DocEntry {
	const map = locale === 'id' ? docsId : docs;
	return map[path] || map['/docs'] || docs['/docs'];
}

export function richBody(body: string): string {
	return body
		.replaceAll('class="callout"', 'class="my-7 rounded-2xl border border-islamic-green/15 bg-islamic-green/5 p-5"')
		.replaceAll('class="variant-demo"', 'class="my-7 grid gap-3 sm:grid-cols-3"')
		.replaceAll('<div><span>Fill</span><b>Dense silhouette</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">Dense silhouette</b></div>')
		.replaceAll('<div><span>Fill</span><b>Siluet padat</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">Siluet padat</b></div>')
		.replaceAll('<div><span>Outline</span><b>Line-oriented mark</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">Line-oriented mark</b></div>')
		.replaceAll('<div><span>Outline</span><b>Tanda berorientasi garis</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">Tanda berorientasi garis</b></div>')
		.replaceAll('<div><span>Colors</span><b>Multi-tone artwork</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">Multi-tone artwork</b></div>')
		.replaceAll('<div><span>Colors</span><b>Karya multi-warna</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">Karya multi-warna</b></div>')
		.replaceAll('class="framework-list"', 'class="my-7 grid gap-3 sm:grid-cols-2"')
		.replaceAll('<article><b>', '<article class="rounded-xl border border-islamic-line bg-islamic-panel p-4"><b>')
		.replaceAll('</b><code>', '</b><code class="mt-2 block text-[10px] text-islamic-green">')
		.replaceAll('class="source-links"', 'class="my-7 grid gap-2"')
		.replaceAll('<a href="', '<a class="flex items-center justify-between gap-4 rounded-xl border border-islamic-line bg-islamic-panel px-4 py-3 text-[11px] text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text" href="')
		.replaceAll('<small>', '<small class="shrink-0 text-[9px] text-islamic-green">')
		.replaceAll('<pre>', '<pre class="my-6 overflow-x-auto rounded-2xl border border-islamic-line bg-black/20 p-4 text-[11px] leading-7 text-islamic-muted">');
}
