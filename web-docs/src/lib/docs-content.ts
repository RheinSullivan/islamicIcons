export type DocEntry = {
	title: string;
	lead: string;
	body: string;
};

const SOURCE_LINKS_HTML = `<div class="source-links"><a href="https://www.svgrepo.com/svg/235387/mosque-islam" target="_blank" rel="noreferrer"><span>Mosque Islam</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/123343/islamic-lantern" target="_blank" rel="noreferrer"><span>Islamic Lantern</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/80653/qibla-compass" target="_blank" rel="noreferrer"><span>Qibla Compass</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/317543/quran-islam" target="_blank" rel="noreferrer"><span>Quran Islam</span><small>CC0 ↗</small></a><a href="https://www.svgrepo.com/svg/262970/quran-quran" target="_blank" rel="noreferrer"><span>Quran Quran</span><small>CC0 ↗</small></a></div>`;

export const docs: Record<string, DocEntry> = {
	'/docs': {
		title: 'Overview',
		lead: 'Everything you need to browse, install, use, source and contribute to Atsarul Mujahidin.',
		body: `<p>Atsarul Mujahidin is a framework-agnostic collection of Islamic SVG and WebP artwork. <strong>Atsarul Mujahidin</strong> (آثَارُ المُجَاهِدِيْنَ) means <strong>Traces of the Mujahidin</strong> in Arabic - representing something you create and leave behind for the fighters. The name embodies the philosophy of building meaningful work that has lasting impact for those who struggle.</p>

<h2>Philosophy & Purpose</h2>
<p>This library was created with a specific mission: to provide high-quality Islamic iconography while supporting humanitarian causes. Every icon in this collection serves a dual purpose - practical utility in modern web development and symbolic representation of Islamic values and practices.</p>

<p>The library is designed around three core principles:</p>
<ul>
<li><strong>Recognizable Iconography:</strong> Icons that Muslims and developers immediately understand - mosque, Kaaba, prayer beads, Quran, lantern, and more.</li>
<li><strong>Traceable Sources:</strong> Every asset carries full provenance - creator attribution, source URL, license terms, and redistribution permissions are recorded in metadata.</li>
<li><strong>Framework Agnostic:</strong> Not tied to React or any single framework. Assets are ordinary SVG/WebP files with pleasant adapter layers for React, Vue, Svelte, Angular, Astro and plain HTML.</li>
</ul>

<h2>What Makes This Different</h2>
<p>Most icon libraries treat Google Image Search as a license. Atsarul Mujahidin treats discovery and licensing as separate concerns. Google is a discovery tool only - an icon enters the distributable library only after its original source and redistribution terms are verified and recorded.</p>

<p>The collection intentionally does not promise a fixed number of icons. Contributors can add one icon, ten icons, or remove an icon when licensing changes. The catalog is generated from assets and metadata at build time, ensuring accuracy and traceability.</p>

<div class="callout"><b>Core rule</b><span>Google is a discovery tool, not a license. An icon only enters the distributable library after its original source and redistribution terms are recorded in the asset metadata.</span></div>

<h2>Technical Architecture</h2>
<p>The library ships as a standard npm package with the following structure:</p>
<ul>
<li><strong>Source Assets:</strong> Original SVG/WebP files organized by semantic category (worship, ramadan, symbols, etc.)</li>
<li><strong>Framework Adapters:</strong> Pre-built components for React, Vue, Svelte, Angular, Astro</li>
<li><strong>Vanilla JS:</strong> Web Component with CDN support (like Bootstrap Icons)</li>
<li><strong>Metadata:</strong> JSON files containing source URL, license, creator, and attribution requirements</li>
<li><strong>Build Pipeline:</strong> Bun-powered catalog generation, validation, and packaging</li>
</ul>

<h2>Humanitarian Support</h2>
<p>Atsarul Mujahidin accepts public donations with 100% financial transparency. Minimum 70% of all funds go directly to humanitarian aid (Palestine relief, orphanages, low-income families, elderly care, disaster relief). Up to 30% supports infrastructure (server, CDN, domain costs) required to keep the library available.</p>

<p>Read more in the <a href="/en/docs/donations">Donations & Humanitarian Aid</a> documentation.</p>

<h2>Open Source & Community</h2>
<p>This is a community-driven project. Contributors supply artwork, improve documentation, add framework adapters, and help review source licenses. The library welcomes contributions from developers, designers, and anyone who wants to build something meaningful for the Muslim tech community.</p>

<p>See the <a href="/en/contributing">Contributing Guide</a> to get started.</p>`
	},
	'/docs/installation': {
		title: 'Installation',
		lead: 'A practical reference for building with Atsarul Mujahidin while keeping the artwork local and the provenance visible.',
		body: `<p>Install the library with the package manager used by your project. The package exposes semantic category entry points and keeps the artwork as local SVG/WebP assets.</p><h2>Install</h2><pre>bun add atsarul-mujahidin\nnpm install atsarul-mujahidin\npnpm add atsarul-mujahidin\nyarn add atsarul-mujahidin</pre><h2>Run the Web Docs locally</h2><pre>git clone &lt;repository&gt;\ncd atsarul-mujahidin\nbun install\nbun run docs</pre><p>For contributors, use Bun for the repository build pipeline. The published package can be installed with Bun, npm, pnpm or Yarn.</p><h2>Build the library</h2><pre>bun run icons:catalog\nbun run icons:package\nbun run icons:validate\nbun run build</pre>`
	},
	'/docs/usage': {
		title: 'Usage',
		lead: 'Import icons as framework components or use the vanilla JavaScript web component for universal compatibility.',
		body: `<p>Atsarul Mujahidin provides framework-specific components and a vanilla JavaScript web component. Choose the approach that fits your project.</p>

<h2>Framework Components (React, Vue, Svelte)</h2>
<pre>// Import per-icon with variant suffix
import { Kaaba } from 'atsarul-mujahidin/react/kaaba-fill';
import { MosqueSimple } from 'atsarul-mujahidin/react/mosquesimple-fill';

&lt;Kaaba size={32} colors="#10b981" className="icon" /&gt;
&lt;MosqueSimple size={24} /&gt;</pre>

<p>All framework components accept: <code>size</code>, <code>colors</code>, <code>strokeWidth</code>, and <code>class</code>/<code>className</code> props.</p>

<h2>Vanilla JavaScript (Web Component)</h2>
<pre>&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;Kaaba&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24"&gt;Mosque&lt;/atsarul-mujahidin&gt;</pre>

<h2>Metadata API</h2>
<p>Access icon catalog programmatically:</p>
<pre>import { catalog, categories, metadata } from 'atsarul-mujahidin';

console.log(metadata.iconCount);  // 81
console.log(categories);          // Array of categories
console.log(catalog);             // Full icon metadata</pre>

<p>See <a href="/en/docs/frameworks">Framework Integration</a> for detailed examples per framework.</p>`
	},
	'/docs/variants': {
		title: 'Variants',
		lead: 'A practical reference for building with Atsarul Mujahidin while keeping the artwork local and the provenance visible.',
		body: `<p>A logical icon may expose <strong>fill</strong>, <strong>outline</strong>, and <strong>color</strong> variants. The gallery intentionally renders one card per logical icon. Variant switching happens inside the icon detail panel.</p><div class="variant-demo"><div><span>Fill</span><b>Dense silhouette</b></div><div><span>Outline</span><b>Line-oriented mark</b></div><div><span>Colors</span><b>Multi-tone artwork</b></div></div><p>Some contributed artwork is intentionally available only as <strong>original</strong>. The library does not fabricate variants when doing so would distort the creator's artwork.</p>`
	},
	'/docs/frameworks': {
		title: 'Frameworks',
		lead: 'React, Vue, Svelte, and vanilla JavaScript integrations with real package exports and working code examples.',
		body: `<p>Atsarul Mujahidin provides framework-specific components for React, Vue, and Svelte, plus a vanilla JavaScript web component for universal use. All components accept consistent props: <code>size</code>, <code>colors</code>, <code>strokeWidth</code>, and <code>class</code>.</p>

<h2>React</h2>
<p>Import icons from the React adapter with the variant suffix pattern:</p>
<pre>import Kaaba from 'atsarul-mujahidin/react/kaaba-fill';
import MosqueSimple from 'atsarul-mujahidin/react/mosquesimple-fill';
import QuranBook from 'atsarul-mujahidin/react/quranbook-fill';

function App() {
  return (
    &lt;div&gt;
      &lt;Kaaba size={32} colors="#10b981" /&gt;
      &lt;MosqueSimple size={24} className="my-icon" /&gt;
      &lt;QuranBook size={48} colors="currentColor" strokeWidth={1.5} /&gt;
    &lt;/div&gt;
  );
}</pre>

<p><strong>Props:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>className</code> (string)</p>

<h2>Vue 3</h2>
<p>Import from the Vue adapter with the same naming convention:</p>
<pre>&lt;script setup&gt;
import Kaaba from 'atsarul-mujahidin/vue/kaaba-fill';
import MosqueSimple from 'atsarul-mujahidin/vue/mosquesimple-fill';
&lt;/script&gt;

&lt;template&gt;
  &lt;Kaaba :size="32" colors="#10b981" /&gt;
  &lt;MosqueSimple :size="24" class="my-icon" /&gt;
&lt;/template&gt;</pre>

<p><strong>Props:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>class</code> (string)</p>

<h2>Svelte 5</h2>
<p>Svelte components use PascalCase paths and component names:</p>
<pre>&lt;script&gt;
  import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
  import MosqueSimple from 'atsarul-mujahidin/svelte/fill/MosqueSimple';
  import QuranBook from 'atsarul-mujahidin/svelte/fill/QuranBook';
&lt;/script&gt;

&lt;Kaaba size={32} colors="#10b981" /&gt;
&lt;MosqueSimple size={24} class="my-icon" /&gt;
&lt;QuranBook size={48} /&gt;</pre>

<p><strong>Important:</strong> Svelte uses a different path structure: <code>svelte/fill/ComponentName</code>, <code>svelte/outline/ComponentName</code>, <code>svelte/color/ComponentName</code></p>

<p><strong>Props:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>class</code> (string)</p>

<h2>Vanilla JavaScript (Web Component)</h2>
<p>Use the custom element without any build step. Add the script once, then use the element anywhere:</p>
<pre>&lt;!-- Add script once (CDN or local) --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;!-- Use anywhere with closing tag --&gt;
&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;Kaaba&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24" class="my-icon"&gt;Mosque&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="quran" size="48"&gt;Quran&lt;/atsarul-mujahidin&gt;</pre>

<p><strong>Attributes:</strong> <code>variant</code> (string, required), <code>size</code> (number), <code>colors</code> (string), <code>stroke-width</code> (number), <code>class</code> (string)</p>

<h2>Icon Variants</h2>
<p>Each icon may have up to three variants: <strong>fill</strong> (solid), <strong>outline</strong> (line-based), and <strong>color</strong> (multi-color). Import the variant you need:</p>

<pre>// React - variant suffix pattern
import Kaaba from 'atsarul-mujahidin/react/kaaba-fill';
import KaabaOutline from 'atsarul-mujahidin/react/kaaba-outline';

// Svelte - variant folder pattern
import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
import AllahHandOutline from 'atsarul-mujahidin/svelte/outline/AllahHandOutline';
import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';</pre>

<h2>TypeScript Support</h2>
<p>All framework components include full TypeScript definitions. Props are typed and autocomplete works out of the box:</p>

<pre>import type { IconProps } from 'atsarul-mujahidin';

// Props are inferred automatically
&lt;Kaaba size={32} colors="#10b981" /&gt;</pre>

<h2>Package Exports</h2>
<p>The package provides framework-specific exports for tree-shaking:</p>

<ul>
<li><code>atsarul-mujahidin/react/*-fill</code> - React fill components</li>
<li><code>atsarul-mujahidin/react/*-outline</code> - React outline components</li>
<li><code>atsarul-mujahidin/react/*-color</code> - React color components</li>
<li><code>atsarul-mujahidin/vue/*-fill</code> - Vue fill components</li>
<li><code>atsarul-mujahidin/vue/*-outline</code> - Vue outline components</li>
<li><code>atsarul-mujahidin/vue/*-color</code> - Vue color components</li>
<li><code>atsarul-mujahidin/svelte/fill/*</code> - Svelte fill (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/outline/*</code> - Svelte outline (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/color/*</code> - Svelte color (PascalCase)</li>
<li><code>atsarul-mujahidin/vanilla</code> - Web Component</li>
</ul>

<h2>Framework Support Status</h2>
<div class="framework-list">
<article><b>React 18+</b><code>✓ Full support</code></article>
<article><b>Vue 3</b><code>✓ Full support</code></article>
<article><b>Svelte 5</b><code>✓ Full support (runes mode)</code></article>
<article><b>Vanilla JS</b><code>✓ Web Component (CDN ready)</code></article>
<article><b>Angular</b><code>⚠ Planned</code></article>
<article><b>Astro</b><code>⚠ Planned</code></article>
</div>

<p>Browse all 81 icons in the <a href="/en/icons">icon gallery</a> or view the complete <a href="https://github.com/RheinSullivan/islamic-icons">source repository</a>.</p>`
	},
	'/docs/sources': {
		title: 'Sources & attribution',
		lead: 'A practical reference for building with Atsarul Mujahidin while keeping the artwork local and the provenance visible.',
		body: `<p>There are three source lanes: community assets supplied for this project, externally licensed vectors, and Google Material Icons. Google Search is discovery only; it never grants redistribution permission.</p><h2>External discovery</h2><p>External candidates are reviewed individually. The source page and license stay attached to the asset.</p>${SOURCE_LINKS_HTML}`
	},
	'/docs/donations': {
		title: 'Donations & humanitarian aid',
		lead: 'A practical reference for building with Atsarul Mujahidin while keeping the artwork local and the provenance visible.',
		body: `<p>Atsarul Mujahidin accepts public donations with <strong>100% financial transparency</strong>. Minimum 70% of all funds are allocated to humanitarian aid, including Palestine relief, orphanages, low-income families, elderly care and disaster relief. Up to 30% may support framework operations such as server, CDN and domain costs.</p><div class="callout"><b>Donation channel</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>Transparency reporting</h2><p>The detailed public reporting policy and transparency report index lives in <strong>docs/en/donations.md</strong>. Verified statements should be added there for each reporting period rather than inventing or estimating financial figures.</p><h2>Allocation policy</h2><p><strong>Minimum 70%</strong> is allocated to humanitarian aid. <strong>Up to 30%</strong> may be allocated to framework operations required to keep Atsarul Mujahidin available and maintainable.</p><div class="framework-list"><article><b>Palestine relief</b><code>Humanitarian aid priority</code></article><article><b>Orphanages</b><code>Humanitarian aid</code></article><article><b>Low-income families</b><code>Humanitarian aid</code></article><article><b>Elderly care</b><code>Humanitarian aid</code></article><article><b>Disaster relief</b><code>Humanitarian aid</code></article><article><b>Server, CDN, domain</b><code>Framework operations</code></article></div><h2>Reporting requirements</h2><p>Each published report should include the reporting period, total donations received, humanitarian allocation, operations allocation, recipient or program category when safe to disclose, supporting evidence and remaining balance.</p>`
	}
};

// Indonesian translations
export const docsId: Record<string, DocEntry> = {
	'/docs': {
		title: 'Ikhtisar',
		lead: 'Semua yang Anda butuhkan untuk menjelajahi, menginstal, menggunakan, menelusuri sumber, dan berkontribusi pada Atsarul Mujahidin.',
		body: `<p>Atsarul Mujahidin adalah koleksi karya seni Islam SVG dan WebP yang framework-agnostic. <strong>Atsarul Mujahidin</strong> (آثَارُ المُجَاهِدِيْنَ) berarti <strong>Jejak Para Mujahidin</strong> dalam bahasa Arab - mewakili sesuatu yang Anda ciptakan dan tinggalkan untuk para pejuang. Nama ini mewujudkan filosofi membangun karya bermakna yang memiliki dampak abadi bagi mereka yang berjuang.</p>

<h2>Filosofi & Tujuan</h2>
<p>Library ini dibuat dengan misi khusus: menyediakan ikonografi Islam berkualitas tinggi sambil mendukung tujuan kemanusiaan. Setiap ikon dalam koleksi ini melayani tujuan ganda - utilitas praktis dalam pengembangan web modern dan representasi simbolis nilai dan praktik Islam.</p>

<p>Library dirancang berdasarkan tiga prinsip inti:</p>
<ul>
<li><strong>Ikonografi yang Mudah Dikenali:</strong> Ikon yang langsung dipahami oleh Muslim dan developer - masjid, Kaaba, tasbih, Quran, lentera, dan lainnya.</li>
<li><strong>Sumber Terlacak:</strong> Setiap aset membawa asal-usul lengkap - atribusi pembuat, URL sumber, ketentuan lisensi, dan izin redistribusi dicatat dalam metadata.</li>
<li><strong>Framework Agnostic:</strong> Tidak terikat pada React atau framework tunggal. Aset adalah file SVG/WebP biasa dengan lapisan adapter yang menyenangkan untuk React, Vue, Svelte, Angular, Astro, dan HTML biasa.</li>
</ul>

<h2>Apa yang Membuatnya Berbeda</h2>
<p>Sebagian besar library ikon memperlakukan Google Image Search sebagai lisensi. Atsarul Mujahidin memperlakukan penemuan dan lisensi sebagai hal terpisah. Google hanya alat penemuan - sebuah ikon masuk ke library yang dapat didistribusikan hanya setelah sumber asli dan ketentuan redistribusinya diverifikasi dan dicatat.</p>

<p>Koleksi ini secara sengaja tidak menjanjikan jumlah ikon yang tetap. Kontributor dapat menambahkan satu ikon, sepuluh ikon, atau menghapus ikon ketika lisensi berubah. Katalog dibuat dari aset dan metadata saat waktu build, memastikan akurasi dan keterlacakan.</p>

<div class="callout"><b>Aturan utama</b><span>Google adalah alat penemuan, bukan lisensi. Sebuah ikon hanya masuk ke library yang dapat didistribusikan setelah sumber asli dan ketentuan redistribusinya dicatat dalam metadata aset.</span></div>

<h2>Arsitektur Teknis</h2>
<p>Library ini dikirim sebagai paket npm standar dengan struktur berikut:</p>
<ul>
<li><strong>Aset Sumber:</strong> File SVG/WebP asli yang diorganisir berdasarkan kategori semantik (ibadah, ramadan, simbol, dll.)</li>
<li><strong>Adapter Framework:</strong> Komponen yang sudah dibuat untuk React, Vue, Svelte, Angular, Astro</li>
<li><strong>Vanilla JS:</strong> Web Component dengan dukungan CDN (seperti Bootstrap Icons)</li>
<li><strong>Metadata:</strong> File JSON yang berisi URL sumber, lisensi, pembuat, dan persyaratan atribusi</li>
<li><strong>Pipeline Build:</strong> Generasi katalog, validasi, dan pengemasan berbasis Bun</li>
</ul>

<h2>Dukungan Kemanusiaan</h2>
<p>Atsarul Mujahidin menerima donasi publik dengan transparansi keuangan 100%. Minimum 70% dari semua dana langsung ke bantuan kemanusiaan (bantuan Palestina, panti asuhan, keluarga berpenghasilan rendah, perawatan lansia, bantuan bencana). Hingga 30% mendukung infrastruktur (server, CDN, biaya domain) yang diperlukan untuk menjaga library tetap tersedia.</p>

<p>Baca lebih lanjut di dokumentasi <a href="/id/docs/donations">Donasi & Bantuan Kemanusiaan</a>.</p>

<h2>Open Source & Komunitas</h2>
<p>Ini adalah proyek yang digerakkan oleh komunitas. Kontributor menyediakan karya seni, meningkatkan dokumentasi, menambahkan adapter framework, dan membantu meninjau lisensi sumber. Library menyambut kontribusi dari developer, desainer, dan siapa saja yang ingin membangun sesuatu yang bermakna untuk komunitas teknologi Muslim.</p>

<p>Lihat <a href="/id/contributing">Panduan Kontribusi</a> untuk memulai.</p>`
	},
	'/docs/installation': {
		title: 'Instalasi',
		lead: 'Referensi praktis untuk membangun dengan Atsarul Mujahidin sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Instal library dengan package manager yang digunakan proyek Anda. Package ini mengekspos entry point kategori semantik dan menyimpan karya seni sebagai aset SVG/WebP lokal.</p><h2>Install</h2><pre>bun add atsarul-mujahidin\nnpm install atsarul-mujahidin\npnpm add atsarul-mujahidin\nyarn add atsarul-mujahidin</pre><h2>Jalankan Web Docs secara lokal</h2><pre>git clone &lt;repository&gt;\ncd atsarul-mujahidin\nbun install\nbun run docs</pre><p>Untuk kontributor, gunakan Bun untuk pipeline build repository. Package yang dipublish dapat diinstal dengan Bun, npm, pnpm, atau Yarn.</p><h2>Build library</h2><pre>bun run icons:catalog\nbun run icons:package\nbun run icons:validate\nbun run build</pre>`
	},
	'/docs/usage': {
		title: 'Penggunaan',
		lead: 'Impor ikon sebagai komponen framework atau gunakan komponen web vanilla JavaScript untuk kompatibilitas universal.',
		body: `<p>Atsarul Mujahidin menyediakan komponen khusus framework dan komponen web vanilla JavaScript. Pilih pendekatan yang sesuai dengan proyek Anda.</p>

<h2>Komponen Framework (React, Vue, Svelte)</h2>
<pre>// Impor per-ikon dengan sufiks varian
import { Kaaba } from 'atsarul-mujahidin/react/kaaba-fill';
import { MosqueSimple } from 'atsarul-mujahidin/react/mosquesimple-fill';

&lt;Kaaba size={32} colors="#10b981" className="icon" /&gt;
&lt;MosqueSimple size={24} /&gt;</pre>

<p>Semua komponen framework menerima props: <code>size</code>, <code>colors</code>, <code>strokeWidth</code>, dan <code>class</code>/<code>className</code>.</p>

<h2>Vanilla JavaScript (Web Component)</h2>
<pre>&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;Kaaba&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24"&gt;Masjid&lt;/atsarul-mujahidin&gt;</pre>

<h2>API Metadata</h2>
<p>Akses katalog ikon secara programatis:</p>
<pre>import { catalog, categories, metadata } from 'atsarul-mujahidin';

console.log(metadata.iconCount);  // 81
console.log(categories);          // Array kategori
console.log(catalog);             // Metadata ikon lengkap</pre>

<p>Lihat <a href="/id/docs/frameworks">Integrasi Framework</a> untuk contoh terperinci per framework.</p>`
	},
	'/docs/variants': {
		title: 'Varian',
		lead: 'Referensi praktis untuk membangun dengan Atsarul Mujahidin sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Sebuah ikon logis dapat mengekspos varian <strong>fill</strong>, <strong>outline</strong>, dan <strong>color</strong>. Galeri sengaja merender satu kartu per ikon logis. Pergantian varian terjadi di dalam panel detail ikon.</p><div class="variant-demo"><div><span>Fill</span><b>Siluet padat</b></div><div><span>Outline</span><b>Tanda berorientasi garis</b></div><div><span>Colors</span><b>Karya multi-warna</b></div></div><p>Beberapa karya yang dikontribusikan secara sengaja hanya tersedia sebagai <strong>original</strong>. Library tidak membuat varian ketika melakukannya akan mendistorsi karya seni pembuat.</p>`
	},
	'/docs/frameworks': {
		title: 'Framework',
		lead: 'Integrasi React, Vue, Svelte, dan vanilla JavaScript dengan ekspor paket nyata dan contoh kode yang berfungsi.',
		body: `<p>Atsarul Mujahidin menyediakan komponen khusus framework untuk React, Vue, dan Svelte, plus komponen web vanilla JavaScript untuk penggunaan universal. Semua komponen menerima props yang konsisten: <code>size</code>, <code>colors</code>, <code>strokeWidth</code>, dan <code>class</code>.</p>

<h2>React</h2>
<p>Impor ikon dari adaptor React dengan pola sufiks varian:</p>
<pre>import Kaaba from 'atsarul-mujahidin/react/kaaba-fill';
import MosqueSimple from 'atsarul-mujahidin/react/mosquesimple-fill';
import QuranBook from 'atsarul-mujahidin/react/quranbook-fill';

function App() {
  return (
    &lt;div&gt;
      &lt;Kaaba size={32} colors="#10b981" /&gt;
      &lt;MosqueSimple size={24} className="my-icon" /&gt;
      &lt;QuranBook size={48} colors="currentColor" strokeWidth={1.5} /&gt;
    &lt;/div&gt;
  );
}</pre>

<p><strong>Props:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>className</code> (string)</p>

<h2>Vue 3</h2>
<p>Impor dari adaptor Vue dengan konvensi penamaan yang sama:</p>
<pre>&lt;script setup&gt;
import Kaaba from 'atsarul-mujahidin/vue/kaaba-fill';
import MosqueSimple from 'atsarul-mujahidin/vue/mosquesimple-fill';
&lt;/script&gt;

&lt;template&gt;
  &lt;Kaaba :size="32" colors="#10b981" /&gt;
  &lt;MosqueSimple :size="24" class="my-icon" /&gt;
&lt;/template&gt;</pre>

<p><strong>Props:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>class</code> (string)</p>

<h2>Svelte 5</h2>
<p>Komponen Svelte menggunakan path PascalCase dan nama komponen:</p>
<pre>&lt;script&gt;
  import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
  import MosqueSimple from 'atsarul-mujahidin/svelte/fill/MosqueSimple';
  import QuranBook from 'atsarul-mujahidin/svelte/fill/QuranBook';
&lt;/script&gt;

&lt;Kaaba size={32} colors="#10b981" /&gt;
&lt;MosqueSimple size={24} class="my-icon" /&gt;
&lt;QuranBook size={48} /&gt;</pre>

<p><strong>Penting:</strong> Svelte menggunakan struktur path yang berbeda: <code>svelte/fill/ComponentName</code>, <code>svelte/outline/ComponentName</code>, <code>svelte/color/ComponentName</code></p>

<p><strong>Props:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>class</code> (string)</p>

<h2>Vanilla JavaScript (Web Component)</h2>
<p>Gunakan elemen kustom tanpa build step. Tambahkan skrip sekali, lalu gunakan elemen di mana saja:</p>
<pre>&lt;!-- Tambahkan skrip sekali (CDN atau lokal) --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;!-- Gunakan di mana saja dengan tag penutup --&gt;
&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;Kaaba&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24" class="my-icon"&gt;Masjid&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="quran" size="48"&gt;Quran&lt;/atsarul-mujahidin&gt;</pre>

<p><strong>Atribut:</strong> <code>variant</code> (string, diperlukan), <code>size</code> (number), <code>colors</code> (string), <code>stroke-width</code> (number), <code>class</code> (string)</p>

<h2>Varian Ikon</h2>
<p>Setiap ikon mungkin memiliki hingga tiga varian: <strong>fill</strong> (solid), <strong>outline</strong> (berbasis garis), dan <strong>color</strong> (multi-warna). Impor varian yang Anda butuhkan:</p>

<pre>// React - pola sufiks varian
import Kaaba from 'atsarul-mujahidin/react/kaaba-fill';
import KaabaOutline from 'atsarul-mujahidin/react/kaaba-outline';

// Svelte - pola folder varian
import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
import AllahHandOutline from 'atsarul-mujahidin/svelte/outline/AllahHandOutline';
import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';</pre>

<h2>Dukungan TypeScript</h2>
<p>Semua komponen framework menyertakan definisi TypeScript lengkap. Props diketik dan autocomplete berfungsi langsung:</p>

<pre>import type { IconProps } from 'atsarul-mujahidin';

// Props disimpulkan secara otomatis
&lt;Kaaba size={32} colors="#10b981" /&gt;</pre>

<h2>Ekspor Paket</h2>
<p>Paket menyediakan ekspor khusus framework untuk tree-shaking:</p>

<ul>
<li><code>atsarul-mujahidin/react/*-fill</code> - Komponen fill React</li>
<li><code>atsarul-mujahidin/react/*-outline</code> - Komponen outline React</li>
<li><code>atsarul-mujahidin/react/*-color</code> - Komponen color React</li>
<li><code>atsarul-mujahidin/vue/*-fill</code> - Komponen fill Vue</li>
<li><code>atsarul-mujahidin/vue/*-outline</code> - Komponen outline Vue</li>
<li><code>atsarul-mujahidin/vue/*-color</code> - Komponen color Vue</li>
<li><code>atsarul-mujahidin/svelte/fill/*</code> - Svelte fill (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/outline/*</code> - Svelte outline (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/color/*</code> - Svelte color (PascalCase)</li>
<li><code>atsarul-mujahidin/vanilla</code> - Web Component</li>
</ul>

<h2>Status Dukungan Framework</h2>
<div class="framework-list">
<article><b>React 18+</b><code>✓ Dukungan penuh</code></article>
<article><b>Vue 3</b><code>✓ Dukungan penuh</code></article>
<article><b>Svelte 5</b><code>✓ Dukungan penuh (mode runes)</code></article>
<article><b>Vanilla JS</b><code>✓ Web Component (siap CDN)</code></article>
<article><b>Angular</b><code>⚠ Direncanakan</code></article>
<article><b>Astro</b><code>⚠ Direncanakan</code></article>
</div>

<p>Jelajahi semua 81 ikon di <a href="/id/icons">galeri ikon</a> atau lihat <a href="https://github.com/RheinSullivan/islamic-icons">repositori sumber</a> lengkap.</p>`
	},
	'/docs/sources': {
		title: 'Sumber & atribusi',
		lead: 'Referensi praktis untuk membangun dengan Atsarul Mujahidin sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Ada tiga jalur sumber: aset komunitas yang disediakan untuk proyek ini, vektor berlisensi eksternal, dan Google Material Icons. Google Search hanya untuk penemuan; tidak pernah memberikan izin redistribusi.</p><h2>Penemuan eksternal</h2><p>Kandidat eksternal ditinjau secara individual. Halaman sumber dan lisensi tetap terlampir pada aset.</p>${SOURCE_LINKS_HTML}`
	},
	'/docs/donations': {
		title: 'Donasi & bantuan kemanusiaan',
		lead: 'Referensi praktis untuk membangun dengan Atsarul Mujahidin sambil menjaga karya tetap lokal dan asal-usul tetap terlihat.',
		body: `<p>Atsarul Mujahidin menerima donasi publik dengan <strong>transparansi keuangan 100%</strong>. Minimum 70% dari semua dana dialokasikan untuk bantuan kemanusiaan, termasuk bantuan Palestina, panti asuhan, keluarga berpenghasilan rendah, perawatan lansia, dan bantuan bencana. Hingga 30% dapat mendukung operasi framework seperti server, CDN, dan biaya domain.</p><div class="callout"><b>Saluran donasi</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>Pelaporan transparansi</h2><p>Kebijakan pelaporan publik dan indeks laporan transparansi terperinci ada di <strong>docs/en/donations.md</strong>. Pernyataan terverifikasi harus ditambahkan di sana untuk setiap periode pelaporan.</p><h2>Kebijakan alokasi</h2><p><strong>Minimum 70%</strong> dialokasikan untuk bantuan kemanusiaan. <strong>Hingga 30%</strong> dapat dialokasikan untuk operasi framework yang diperlukan.</p><div class="framework-list"><article><b>Bantuan Palestina</b><code>Prioritas bantuan kemanusiaan</code></article><article><b>Panti asuhan</b><code>Bantuan kemanusiaan</code></article><article><b>Keluarga berpenghasilan rendah</b><code>Bantuan kemanusiaan</code></article><article><b>Perawatan lansia</b><code>Bantuan kemanusiaan</code></article><article><b>Bantuan bencana</b><code>Bantuan kemanusiaan</code></article><article><b>Server, CDN, domain</b><code>Operasi framework</code></article></div>`
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
