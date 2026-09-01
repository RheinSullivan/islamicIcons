export type DocEntry = {
	title: string;
	lead: string;
	body: string;
};

export const sideLinks: Array<[string, string]> = [
	['Overview', '/docs'],
	['Installation', '/docs/installation'],
	['Usage', '/docs/usage'],
	['Variants', '/docs/variants'],
	['Frameworks', '/docs/frameworks'],
	['Sources & attribution', '/docs/sources'],
	['Donations', '/docs/donations'],
	['Contributing', '/contributing']
];

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
		body: `<p>Install the library with the package manager used by your project. The package exposes semantic category entry points and keeps the artwork as local SVG/WebP assets.</p><h2>Install</h2><pre>bun add islamic-icons
npm install islamic-icons
pnpm add islamic-icons
yarn add islamic-icons</pre><h2>Run the Web Docs locally</h2><pre>git clone &lt;repository&gt;
cd islamic-icons
bun install
bun run docs</pre><p>For contributors, use Bun for the repository build pipeline. The published package can be installed with Bun, npm, pnpm or Yarn.</p><h2>Build the library</h2><pre>bun run icons:catalog
bun run icons:package
bun run icons:validate
bun run build</pre>`
	},
	'/docs/usage': {
		title: 'Usage',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>Use the semantic category that contains the icon you need. Framework and library examples should use the component form with <strong>className</strong>, <strong>size</strong> and <strong>style</strong> props. The Allah example below is the canonical component syntax.</p><h2>Framework / library component</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>For a React-style project, the same component can be imported from the relevant framework adapter and rendered directly in JSX.</p><h2>Native HTML</h2><pre>&lt;islamic-icons categories="Allah" class="" size="" style="" /&gt;</pre><p>Native HTML can also reference the local SVG directly when a custom element is not part of the application.</p><pre>&lt;img src="/assets/icons/mosque/mosque/original.svg" alt="Mosque" /&gt;</pre><p>All source assets remain local to the package; applications do not need a runtime request to the upstream icon API.</p>`
	},
	'/docs/variants': {
		title: 'Variants',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>A logical icon may expose <strong>fill</strong>, <strong>outline</strong>, and <strong>color</strong> variants. The gallery intentionally renders one card per logical icon. Variant switching happens inside the icon detail panel.</p><div class="variant-demo"><div><span>Fill</span><b>Dense silhouette</b></div><div><span>Outline</span><b>Line-oriented mark</b></div><div><span>Colors</span><b>Multi-tone artwork</b></div></div><p>Some contributed artwork is intentionally available only as <strong>original</strong>. The library does not fabricate variants when doing so would distort the creator's artwork.</p>`
	},
	'/docs/frameworks': {
		title: 'Frameworks',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>SVG is the compatibility layer. Framework adapters are convenience packages, not a requirement for using the collection.</p><h2>Canonical component usage</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>Use the same component-shaped API in framework documentation, then adapt the surrounding syntax to the framework compiler. For plain HTML, use the native custom-element form below.</p><pre>&lt;islamic-icons categories="Allah" class="" size="" style="" /&gt;</pre><div class="framework-list"><article><b>React / Remix</b><code>islamic-icons/react</code></article><article><b>Vue / Nuxt</b><code>islamic-icons/vue</code></article><article><b>Svelte / SvelteKit</b><code>islamic-icons/svelte</code></article><article><b>Angular</b><code>islamic-icons/angular</code></article><article><b>Astro</b><code>islamic-icons/astro</code></article><article><b>Plain HTML</b><code>assets/icons/**</code></article></div><p>The same source asset can therefore be used in a design system, a static site, a SPA, or a server-rendered application.</p>`
	},
	'/docs/sources': {
		title: 'Sources & attribution',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>There are three source lanes: community assets supplied for this project, externally licensed vectors, and Google Material Icons. Google Search is discovery only; it never grants redistribution permission.</p><h2>External discovery</h2><p>External candidates are reviewed individually. The source page and license stay attached to the asset.</p>${SOURCE_LINKS_HTML}`
	},
	'/docs/donations': {
		title: 'Donations & humanitarian aid',
		lead: 'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.',
		body: `<p>Islamic Icons accepts public donations with <strong>100% financial transparency</strong>. Minimum 70% of all funds are allocated to humanitarian aid, including Palestine 🇵🇸 relief, orphanages, low-income families, elderly care and disaster relief. Up to 30% may support framework operations such as server, CDN and domain costs.</p><div class="callout"><b>Donation channel</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>Transparency reporting</h2><p>The detailed public reporting policy and transparency report index lives in <strong>docs/en/donations.md</strong>. Verified statements should be added there for each reporting period rather than inventing or estimating financial figures.</p><h2>Allocation policy</h2><p><strong>Minimum 70%</strong> is allocated to humanitarian aid. <strong>Up to 30%</strong> may be allocated to framework operations required to keep Islamic Icons available and maintainable.</p><div class="framework-list"><article><b>Palestine 🇵🇸 relief</b><code>Humanitarian aid priority</code></article><article><b>Orphanages</b><code>Humanitarian aid</code></article><article><b>Low-income families</b><code>Humanitarian aid</code></article><article><b>Elderly care</b><code>Humanitarian aid</code></article><article><b>Disaster relief</b><code>Humanitarian aid</code></article><article><b>Server, CDN, domain</b><code>Framework operations</code></article></div><h2>Reporting requirements</h2><p>Each published report should include the reporting period, total donations received, humanitarian allocation, operations allocation, recipient or program category when safe to disclose, supporting evidence and remaining balance.</p>`
	}
};

export function richBody(body: string): string {
	return body
		.replaceAll(
			'class="callout"',
			'class="my-7 rounded-2xl border border-islamic-green/15 bg-islamic-green/5 p-5"'
		)
		.replaceAll('class="variant-demo"', 'class="my-7 grid gap-3 sm:grid-cols-3"')
		.replaceAll(
			'<div><span>Fill</span><b>Dense silhouette</b></div>',
			'<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">Dense silhouette</b></div>'
		)
		.replaceAll(
			'<div><span>Outline</span><b>Line-oriented mark</b></div>',
			'<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">Line-oriented mark</b></div>'
		)
		.replaceAll(
			'<div><span>Colors</span><b>Multi-tone artwork</b></div>',
			'<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">Multi-tone artwork</b></div>'
		)
		.replaceAll('class="framework-list"', 'class="my-7 grid gap-3 sm:grid-cols-2"')
		.replaceAll('<article><b>', '<article class="rounded-xl border border-islamic-line bg-islamic-panel p-4"><b>')
		.replaceAll('</b><code>', '</b><code class="mt-2 block text-[10px] text-islamic-green">')
		.replaceAll('class="source-links"', 'class="my-7 grid gap-2"')
		.replaceAll(
			'<a href="',
			'<a class="flex items-center justify-between gap-4 rounded-xl border border-islamic-line bg-islamic-panel px-4 py-3 text-[11px] text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text" href="'
		)
		.replaceAll('<small>', '<small class="shrink-0 text-[9px] text-islamic-green">')
		.replaceAll(
			'<pre>',
			'<pre class="my-6 overflow-x-auto rounded-2xl border border-islamic-line bg-black/20 p-4 text-[11px] leading-7 text-islamic-muted">'
		);
}