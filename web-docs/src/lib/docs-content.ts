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

<h2>REST API & CDN</h2>
<p>For frameworks and languages outside the JavaScript ecosystem (Flutter, Android, iOS, Python, Go, PHP, etc.), icons can be consumed directly via the Atsarul Mujahidin REST API or public CDNs:</p>

<h3>CDN Direct Access</h3>
<pre>&lt;!-- jsDelivr CDN for static SVG files --&gt;
&lt;img src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg" alt="Mosque" /&gt;

&lt;!-- Vanilla Web Component via unpkg --&gt;
&lt;script src="https://unpkg.com/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;</pre>

<h3>REST API Server (Local / Self-hosted)</h3>
<p>Run the standalone, zero-dependency HTTP server included in <code>library/api/server.js</code>:</p>
<pre>bun library/api/server.js
# Or with Node.js
node library/api/server.js</pre>

<p>Available endpoints:</p>
<ul>
<li><code>GET /api/catalog</code> - Complete icon list with categories and variant metadata</li>
<li><code>GET /api/categories</code> - Array of all 14 icon categories</li>
<li><code>GET /api/icons/:name/:variant.svg</code> - Direct SVG stream with caching headers</li>
<li><code>GET /api/search?q=mosque</code> - Search icons by name or title</li>
</ul>

<h3>Flutter / Dart Integration</h3>
<pre>// pubspec.yaml: flutter_svg: ^2.0.0
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.network(
  'https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg',
  width: 32,
  height: 32,
  colorFilter: ColorFilter.mode(Color(0xFF10B981), BlendMode.srcIn),
);</pre>

<h3>Android (Kotlin / Jetpack Compose)</h3>
<pre>// Using Coil SVG: coil-svg
AsyncImage(
  model = "https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg",
  contentDescription = "Mosque Icon",
  modifier = Modifier.size(32.dp)
)</pre>

<h3>Python / Backend Services</h3>
<pre>import requests

response = requests.get("http://localhost:3000/api/icons/kaaba/fill.svg")
svg_markup = response.text</pre>

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

<h2>REST API & CDN</h2>
<p>Untuk framework dan bahasa di luar ekosistem JavaScript (Flutter, Android, iOS, Python, Go, PHP, dll.), ikon dapat digunakan langsung melalui REST API Atsarul Mujahidin atau CDN publik:</p>

<h3>Akses Langsung CDN</h3>
<pre>&lt;!-- jsDelivr CDN untuk file SVG statis --&gt;
&lt;img src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg" alt="Masjid" /&gt;

&lt;!-- Vanilla Web Component via unpkg --&gt;
&lt;script src="https://unpkg.com/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;</pre>

<h3>Server REST API (Lokal / Self-hosted)</h3>
<p>Jalankan server HTTP ringan tanpa dependensi eksternal di <code>library/api/server.js</code>:</p>
<pre>bun library/api/server.js
# Atau dengan Node.js
node library/api/server.js</pre>

<p>Endpoint yang tersedia:</p>
<ul>
<li><code>GET /api/catalog</code> - Daftar ikon lengkap dengan kategori dan metadata varian</li>
<li><code>GET /api/categories</code> - Array 14 kategori ikon</li>
<li><code>GET /api/icons/:name/:variant.svg</code> - Stream SVG langsung dengan header cache optimal</li>
<li><code>GET /api/search?q=mosque</code> - Cari ikon berdasarkan nama atau judul</li>
</ul>

<h3>Integrasi Flutter / Dart</h3>
<pre>// pubspec.yaml: flutter_svg: ^2.0.0
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.network(
  'https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg',
  width: 32,
  height: 32,
  colorFilter: ColorFilter.mode(Color(0xFF10B981), BlendMode.srcIn),
);</pre>

<h3>Android (Kotlin / Jetpack Compose)</h3>
<pre>// Menggunakan Coil SVG: coil-svg
AsyncImage(
  model = "https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg",
  contentDescription = "Mosque Icon",
  modifier = Modifier.size(32.dp)
)</pre>

<h3>Python / Layanan Backend</h3>
<pre>import requests

response = requests.get("http://localhost:3000/api/icons/kaaba/fill.svg")
svg_markup = response.text</pre>

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

export const docsAr: Record<string, DocEntry> = {
	'/docs': {
		title: 'نظرة عامة',
		lead: 'كل ما تحتاجه لتصفح وتثبيت واستخدام وتتبع مصادر والمساهمة في آثار المجاهدين.',
		body: `<p>آثار المجاهدين هي مكتبة أعمال فنية إسلامية بصيغتي SVG وWebP مستقلة عن أطر العمل (Framework-agnostic). <strong>آثار المجاهدين</strong> (آثَارُ المُجَاهِدِيْنَ) تعني الأثر والعمل الذي يتركه المرء ليبقى وينفع المجاهدين والمكافحين. يجسد هذا الاسم فلسفة بناء عمل ذي معنى يترك أثراً دائماً لكل من يكافح في سبيل الحق.</p>

<h2>الفلسفة والهدف</h2>
<p>تم إنشاء هذه المكتبة بمهمة محددة: توفير أيقونات إسلامية عالية الجودة مع دعم القضايا الإنسانية العادلة. تخدم كل أيقونة في هذه المجموعة غرضاً مزدوجاً: فائدة عملية في تطوير الويب الحديث، وتمثيل رمزي لقيم وممارسات ديننا الإسلامي الحنيف.</p>

<p>تم تصميم المكتبة حول ثلاثة مبادئ أساسية:</p>
<ul>
<li><strong>أيقونات سهلة التمييز:</strong> أيقونات يفهمها المسلمون والمطورون على الفور - المسجد، الكعبة المشرفة، المسبحة، المصحف الشريف، الفانوس، وغيرها.</li>
<li><strong>مصادر قابلة للتتبع:</strong> يحمل كل أصل سجلاً كاملاً - إسناد المنشئ، ورابط المصدر، وشروط الترخيص، وأذونات إعادة التوزيع المسجلة في البيانات الوصفية.</li>
<li><strong>مستقلة عن أطر العمل:</strong> غير مرتبطة بـ React أو أي إطار عمل واحد. الأصول هي ملفات SVG/WebP عادية مع طبقات محولات مريحة لـ React وVue وSvelte وAngular وAstro وHTML العادي.</li>
</ul>

<h2>ما الذي يجعل هذه المكتبة مختلفة</h2>
<p>تتعامل معظم مكتبات الأيقونات مع بحث صور Google كترخيص. أما آثار المجاهدين فتفصل تماماً بين الاستكشاف والترخيص. Google هي أداة استكشاف فقط - لا تدخل أي أيقونة إلى المكتبة القابلة للتوزيع إلا بعد التحقق من مصدرها الأصلي وشروط إعادة توزيعها وتسجيلها في البيانات الوصفية.</p>

<p>المجموعة لا تعد عمداً بعدد ثابت من الأيقونات. يمكن للمساهمين إضافة أيقونة واحدة، أو عشر أيقونات، أو إزالة أيقونة عند تغير ترخيصها. يتم إنشاء الفهرس من الأصول والبيانات الوصفية في وقت البناء، مما يضمن الدقة وإمكانية التتبع.</p>

<div class="callout"><b>القاعدة الأساسية</b><span>Google هي أداة استكشاف وليست ترخيصاً. لا تدخل الأيقونة إلى المكتبة القابلة للتوزيع إلا بعد تسجيل مصدرها الأصلي وشروط إعادة توزيعها في البيانات الوصفية للأصل.</span></div>

<h2>الهيكل التقني</h2>
<p>تُوزع المكتبة كحزمة npm قياسية بالهيكل التالي:</p>
<ul>
<li><strong>أصول المصدر:</strong> ملفات SVG/WebP الأصلية المنظمة حسب الفئات الدلالية (العبادة، رمضان، الرموز، إلخ)</li>
<li><strong>محولات أطر العمل:</strong> مكونات جاهزة ومبنية مسبقاً لـ React وVue وSvelte وAngular وAstro</li>
<li><strong>جافاسكريبت نقية (Vanilla JS):</strong> مكون ويب (Web Component) مع دعم شبكات CDN (مثل Bootstrap Icons)</li>
<li><strong>البيانات الوصفية (Metadata):</strong> ملفات JSON تحتوي على روابط المصدر، التراخيص، المنشئين، ومتطلبات الإسناد</li>
<li><strong>مسار البناء:</strong> توليد الفهرس والتحقق والحزم المدعوم بمحرك Bun الفائق السرعة</li>
</ul>

<h2>الدعم الإنساني</h2>
<p>تقبل آثار المجاهدين التبرعات العامة بشفافية مالية بنسبة 100%. يتم تخصيص 70% كحد أدنى من جميع الأموال مباشرة للمساعدات الإنسانية (إغاثة فلسطين والسودان، دور الأيتام، الأسر المحتاجة، رعاية المسنين، وإغاثة الكوارث). ويدعم ما يصل إلى 30% البنية التحتية والعمليات (الخادم، شبكة CDN، تكاليف النطاق) اللازمة لاستمرار توفير المكتبة مجاناً.</p>

<p>اقرأ المزيد في وثائق <a href="/ar/docs/donations">التبرعات والمساعدات الإنسانية</a>.</p>

<h2>المصدر المفتوح والمجتمع</h2>
<p>هذا المشروع مدفوع بالمجتمع. يساهم المشاركون بتقديم أعمال فنية، وتحسين الوثائق، وإضافة محولات لأطر عمل جديدة، ومراجعة تراخيص المصادر. ترحب المكتبة بمساهمات المطورين والمصممين وكل من يرغب في بناء شيء هادف للمجتمع التقني المسلم.</p>

<p>راجع <a href="/ar/contributing">دليل المساهمة</a> للبدء.</p>`
	},
	'/docs/installation': {
		title: 'التثبيت',
		lead: 'مرجع عملي للبناء باستخدام آثار المجاهدين مع الحفاظ على الأصول محلية وإمكانية تتبع أصلها.',
		body: `<p>ثبّت المكتبة باستخدام مدير الحزم المعتمد في مشروعك. توفر الحزمة نقاط دخول حسب الفئات وتحتفظ بالأعمال الفنية كأصول SVG/WebP محلية.</p><h2>التثبيت</h2><pre>bun add atsarul-mujahidin\nnpm install atsarul-mujahidin\npnpm add atsarul-mujahidin\nyarn add atsarul-mujahidin</pre><h2>تشغيل وثائق الويب محلياً</h2><pre>git clone &lt;repository&gt;\ncd atsarul-mujahidin\nbun install\nbun run docs</pre><p>للمساهمين، استخدم Bun لمسار بناء المستودع. يمكن تثبيت الحزمة المنشورة باستخدام Bun أو npm أو pnpm أو Yarn.</p><h2>بناء المكتبة</h2><pre>bun run icons:catalog\nbun run icons:package\nbun run icons:validate\nbun run build</pre>`
	},
	'/docs/usage': {
		title: 'الاستخدام',
		lead: 'استورد الأيقونات كمكونات لأطر العمل أو استخدم مكون الويب بلغة جافاسكريبت النقية للتوافق الشامل.',
		body: `<p>توفر آثار المجاهدين مكونات مخصصة لأطر العمل ومكون ويب بلغة جافاسكريبت النقية. اختر الأسلوب المناسب لمشروعك.</p>

<h2>مكونات أطر العمل (React, Vue, Svelte)</h2>
<pre>// استيراد لكل أيقونة بنمط لاحقة المتغير
import { Kaaba } from 'atsarul-mujahidin/react/kaaba-fill';
import { MosqueSimple } from 'atsarul-mujahidin/react/mosquesimple-fill';

&lt;Kaaba size={32} colors="#10b981" className="icon" /&gt;
&lt;MosqueSimple size={24} /&gt;</pre>

<p>تقبل جميع مكونات أطر العمل الخصائص التالية: <code>size</code> و<code>colors</code> و<code>strokeWidth</code> و<code>class</code>/<code>className</code>.</p>

<h2>جافاسكريبت القياسية (Web Component)</h2>
<pre>&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;Kaaba&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24"&gt;Mosque&lt;/atsarul-mujahidin&gt;</pre>

<h2>واجهة برمجة البيانات الوصفية (Metadata API)</h2>
<p>الوصول إلى فهرس الأيقونات برمجياً:</p>
<pre>import { catalog, categories, metadata } from 'atsarul-mujahidin';

console.log(metadata.iconCount);  // 81
console.log(categories);          // مصفوفة التصنيفات
console.log(catalog);             // بيانات الأيقونات الكاملة</pre>

<p>راجع <a href="/ar/docs/frameworks">تكاملات أطر العمل</a> للاطلاع على أمثلة مفصلة لكل إطار.</p>`
	},
	'/docs/variants': {
		title: 'الأنماط والخيارات',
		lead: 'مرجع عملي لأنماط التعبئة والمخطط والألوان في مكتبة آثار المجاهدين.',
		body: `<p>قد توفر الأيقونة المنطقية متغيرات <strong>تعبئة (fill)</strong>، و<strong>مخطط (outline)</strong>، و<strong>ألوان (color)</strong>. يعرض المعرض عمداً بطاقة واحدة لكل أيقونة منطقية. ويتم التبديل بين المتغيرات داخل لوحة تفاصيل الأيقونة.</p><div class="variant-demo"><div><span>Fill</span><b>صورة ظلية ممتلئة</b></div><div><span>Outline</span><b>علامة خطية</b></div><div><span>Colors</span><b>عمل فني متعدد الألوان</b></div></div><p>بعض الأعمال الفنية المساهم بها متاحة عمداً بصيغتها <strong>الأصلية (original)</strong> فقط. لا تقوم المكتبة باصطناع متغيرات إذا كان ذلك سيؤدي إلى تشويه عمل المصمم الأصلي.</p>`
	},
	'/docs/frameworks': {
		title: 'أطر العمل',
		lead: 'تكاملات حقيقية مع React وVue وSvelte وVanilla JS وREST API مع أمثلة كود قابلة للتشغيل.',
		body: `<p>توفر آثار المجاهدين مكونات مخصصة لـ React وVue وSvelte، بالإضافة إلى مكون ويب جافاسكريبت للاستخدام العام. تقبل جميع المكونات خصائص متسقة: <code>size</code> و<code>colors</code> و<code>strokeWidth</code> و<code>class</code>.</p>

<h2>React</h2>
<p>استيراد الأيقونات من محول React مع لاحقة نمط المتغير:</p>
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

<p><strong>الخصائص:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>className</code> (string)</p>

<h2>Vue 3</h2>
<p>الاستيراد من محول Vue مع نفس نمط التسمية:</p>
<pre>&lt;script setup&gt;
import Kaaba from 'atsarul-mujahidin/vue/kaaba-fill';
import MosqueSimple from 'atsarul-mujahidin/vue/mosquesimple-fill';
&lt;/script&gt;

&lt;template&gt;
  &lt;Kaaba :size="32" colors="#10b981" /&gt;
  &lt;MosqueSimple :size="24" class="my-icon" /&gt;
&lt;/template&gt;</pre>

<p><strong>الخصائص:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>class</code> (string)</p>

<h2>Svelte 5</h2>
<p>تستخدم مكونات Svelte مسارات PascalCase وأسماء المكونات:</p>
<pre>&lt;script&gt;
  import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
  import MosqueSimple from 'atsarul-mujahidin/svelte/fill/MosqueSimple';
  import QuranBook from 'atsarul-mujahidin/svelte/fill/QuranBook';
&lt;/script&gt;

&lt;Kaaba size={32} colors="#10b981" /&gt;
&lt;MosqueSimple size={24} class="my-icon" /&gt;
&lt;QuranBook size={48} /&gt;</pre>

<p><strong>هام:</strong> يستخدم Svelte هيكل مسار مختلف: <code>svelte/fill/ComponentName</code>, <code>svelte/outline/ComponentName</code>, <code>svelte/color/ComponentName</code></p>

<p><strong>الخصائص:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>class</code> (string)</p>

<h2>Vanilla JavaScript (Web Component)</h2>
<p>استخدم العنصر المخصص بدون بناء. أضف السكريبت مرة واحدة، ثم استخدمه في أي مكان:</p>
<pre>&lt;!-- إضافة السكريبت مرة واحدة (CDN أو محلي) --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;!-- استخدامه في أي مكان مع وسم الإغلاق --&gt;
&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;الكعبة&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24" class="my-icon"&gt;مسجد&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="quran" size="48"&gt;القرآن&lt;/atsarul-mujahidin&gt;</pre>

<p><strong>السمات:</strong> <code>variant</code> (string, مطلوب), <code>size</code> (number), <code>colors</code> (string), <code>stroke-width</code> (number), <code>class</code> (string)</p>

<h2>أنماط الأيقونات</h2>
<p>يمكن أن تحتوي كل أيقونة على ثلاثة متغيرات: <strong>fill</strong> (مملوء), <strong>outline</strong> (خطوط), <strong>color</strong> (ألوان متعددة). استورد المتغير الذي تحتاجه:</p>

<pre>// React - لاحقة المتغير
import Kaaba from 'atsarul-mujahidin/react/kaaba-fill';
import KaabaOutline from 'atsarul-mujahidin/react/kaaba-outline';

// Svelte - مجلد المتغير
import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
import AllahHandOutline from 'atsarul-mujahidin/svelte/outline/AllahHandOutline';
import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';</pre>

<h2>دعم TypeScript</h2>
<p>تتضمن جميع مكونات أطر العمل تعريفات TypeScript كاملة. الخصائص مكتوبة والإكمال التلقائي يعمل مباشرة:</p>

<pre>import type { IconProps } from 'atsarul-mujahidin';

// يتم استنتاج الخصائص تلقائياً
&lt;Kaaba size={32} colors="#10b981" /&gt;</pre>

<h2>صادرات الحزمة</h2>
<p>توفر الحزمة صادرات خاصة بكل إطار عمل لدعم التخلص من التعليمات البرمجية غير المستخدمة:</p>

<ul>
<li><code>atsarul-mujahidin/react/*-fill</code> - مكونات React fill</li>
<li><code>atsarul-mujahidin/react/*-outline</code> - مكونات React outline</li>
<li><code>atsarul-mujahidin/react/*-color</code> - مكونات React color</li>
<li><code>atsarul-mujahidin/vue/*-fill</code> - مكونات Vue fill</li>
<li><code>atsarul-mujahidin/vue/*-outline</code> - مكونات Vue outline</li>
<li><code>atsarul-mujahidin/vue/*-color</code> - مكونات Vue color</li>
<li><code>atsarul-mujahidin/svelte/fill/*</code> - Svelte fill (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/outline/*</code> - Svelte outline (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/color/*</code> - Svelte color (PascalCase)</li>
<li><code>atsarul-mujahidin/vanilla</code> - Web Component</li>
</ul>

<h2>REST API و CDN</h2>
<p>بالنسبة لأطر العمل واللغات خارج نظام JavaScript (Flutter وAndroid وiOS وPython وGo وPHP وما إلى ذلك)، يمكن استخدام الأيقونات مباشرة عبر REST API أو CDN العامة:</p>

<h3>الوصول المباشر عبر CDN</h3>
<pre>&lt;!-- jsDelivr CDN لملفات SVG الثابتة --&gt;
&lt;img src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg" alt="مسجد" /&gt;

&lt;!-- Vanilla Web Component via unpkg --&gt;
&lt;script src="https://unpkg.com/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;</pre>

<h3>خادم REST API (محلي / مستضاف ذاتياً)</h3>
<p>قم بتشغيل خادم HTTP مستقل بدون تبعيات في <code>library/api/server.js</code>:</p>
<pre>bun library/api/server.js
# أو مع Node.js
node library/api/server.js</pre>

<p>نقاط النهاية المتاحة:</p>
<ul>
<li><code>GET /api/catalog</code> - قائمة الأيقونات الكاملة مع الفئات والبيانات الوصفية</li>
<li><code>GET /api/categories</code> - مصفوفة الفئات الـ 14</li>
<li><code>GET /api/icons/:name/:variant.svg</code> - بث SVG مباشر مع رؤوس التخزين المؤقت</li>
<li><code>GET /api/search?q=mosque</code> - البحث عن الأيقونات حسب الاسم أو العنوان</li>
</ul>

<h3>تكامل Flutter / Dart</h3>
<pre>// pubspec.yaml: flutter_svg: ^2.0.0
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.network(
  'https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg',
  width: 32,
  height: 32,
  colorFilter: ColorFilter.mode(Color(0xFF10B981), BlendMode.srcIn),
);</pre>

<h3>Android (Kotlin / Jetpack Compose)</h3>
<pre>// استخدام Coil SVG: coil-svg
AsyncImage(
  model = "https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg",
  contentDescription = "أيقونة مسجد",
  modifier = Modifier.size(32.dp)
)</pre>

<h3>Python / خدمات الخلفية</h3>
<pre>import requests

response = requests.get("http://localhost:3000/api/icons/kaaba/fill.svg")
svg_markup = response.text</pre>

<h2>حالة دعم أطر العمل</h2>
<div class="framework-list">
<article><b>React 18+</b><code>✓ دعم كامل</code></article>
<article><b>Vue 3</b><code>✓ دعم كامل</code></article>
<article><b>Svelte 5</b><code>✓ دعم كامل (وضع runes)</code></article>
<article><b>Vanilla JS</b><code>✓ Web Component (CDN جاهز)</code></article>
<article><b>Angular</b><code>⚠ مخطط</code></article>
<article><b>Astro</b><code>⚠ مخطط</code></article>
</div>

<p>تصفح جميع الأيقونات الـ 81 في <a href="/ar/icons">معرض الأيقونات</a> أو شاهد <a href="https://github.com/RheinSullivan/islamic-icons">المستودع الكامل</a>.</p>`
	},
	'/docs/sources': {
		title: 'المصادر والإسناد',
		lead: 'مرجع عملي لبناء الواجهات مع الحفاظ على الأصول محلية وأصلها واضحاً ومعلناً.',
		body: `<p>هناك ثلاثة مسارات للمصادر: الأصول المجتمعية المقدمة للمشروع، والمتجهات المرخصة خارجياً، وأيقونات Google Material Icons. إن بحث Google مخصص للاستكشاف فقط، ولا يمنح أبداً إذناً بإعادة التوزيع.</p><h2>الاستكشاف الخارجي</h2><p>تتم مراجعة المرشحين الخارجيين بشكل فردي وتدقيق تراخيصهم بدقة. تبقى صفحات المصدر والتراخيص الأصلية مرفقة بكل أصل.</p>${SOURCE_LINKS_HTML}`
	},
	'/docs/donations': {
		title: 'التبرعات والمساعدات الإنسانية',
		lead: 'مرجع عملي لبناء الواجهات بشفافية مالية كاملة بنسبة 100% ودعم العمل الإنساني.',
		body: `<p>تقبل آثار المجاهدين التبرعات العامة بـ <strong>شفافية مالية بنسبة 100%</strong>. يتم تخصيص 70% كحد أدنى من جميع الأموال للمساعدات الإنسانية، بما في ذلك إغاثة فلسطين والسودان، ودور الأيتام، والأسر المتعففة، ورعاية المسنين، وإغاثة الكوارث. ويمكن تخصيص ما يصل إلى 30% لدعم العمليات الأساسية مثل الخوادم، وشبكة CDN، وتكاليف النطاق.</p><div class="callout"><b>قناة التبرع الشخصي للمطور</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>تقارير الشفافية</h2><p>توجد سياسة التقارير العامة وفهرس تقارير الشفافية التفصيلية في <strong>docs/en/donations.md</strong>. ويتم نشر البيانات المؤكدة لكل فترة تقرير هناك.</p><h2>سياسة التخصيص</h2><p><strong>70% كحد أدنى</strong> مخصصة للمساعدات الإنسانية المباشرة. <strong>ما يصل إلى 30%</strong> يمكن تخصيصها لعمليات إطار العمل الضرورية.</p><div class="framework-list"><article><b>إغاثة فلسطين والسودان</b><code>أولوية المساعدات الإنسانية</code></article><article><b>دور الأيتام</b><code>مساعدات إنسانية</code></article><article><b>الأسر المتعففة ومحدودة الدخل</b><code>مساعدات إنسانية</code></article><article><b>رعاية المسنين</b><code>مساعدات إنسانية</code></article><article><b>إغاثة الكوارث</b><code>مساعدات إنسانية</code></article><article><b>الخوادم، CDN، النطاق</b><code>عمليات إطار العمل</code></article></div>`
	}
};

export const docsJa: Record<string, DocEntry> = {
	'/docs': {
		title: '概要',
		lead: 'Atsarul Mujahidinの閲覧、インストール、使用、ソース確認、貢献に必要なすべての情報。',
		body: `<p>Atsarul Mujahidinは、フレームワークに依存しないイスラムSVGおよびWebPアートワークコレクションです。<strong>Atsarul Mujahidin</strong>（آثَارُ المُجَاهِدِيْنَ）はアラビア語で<strong>「ムジャヒディンの軌跡」</strong>を意味し、困難に立ち向かい戦う人々のために創造し遺す価値を象徴しています。</p>

<h2>哲学と目的</h2>
<p>このライブラリは明確な使命を持って作成されました。人道支援活動を支えながら、高品質なイスラムの図像を提供することです。このコレクションの各アイコンは、現代のWeb開発における実用的なユーティリティと、イスラムの価値観や実践の象徴的表現という2つの目的を果たします。</p>

<p>ライブラリは3つの基本原則に基づいて設計されています：</p>
<ul>
<li><strong>認識しやすい図像:</strong> モスク、カアバ、数珠、クルアーン、ランタンなど、ムスリムと開発者がひと目で理解できるアイコン。</li>
<li><strong>追跡可能なソース:</strong> すべてのアセットに出所情報、制作者の帰属、元URL、ライセンス条件、再配布許可がメタデータとして記録されています。</li>
<li><strong>フレームワーク非依存:</strong> Reactや特定のフレームワークに限定されません。React、Vue、Svelte、Angular、Astro、標準HTML向けの優れたアダプター層を備えたSVG/WebPファイルです。</li>
</ul>

<h2>他との違い</h2>
<p>多くのアイコンライブラリはGoogle画像検索をライセンスのように扱いますが、Atsarul Mujahidinは発見とライセンスを厳格に区別します。Googleは発見ツールに過ぎず、元のソースと再配布条件が検証・記録された後にのみ配布可能ライブラリに追加されます。</p>

<p>コレクションは固定のアイコン数を約束していません。コントリビューターはアイコンを1つでも10個でも追加でき、ライセンス変更時に削除することもできます。カタログはビルド時にアセットとメタデータから自動生成され、正確性と追跡可能性を保証します。</p>

<div class="callout"><b>基本ルール</b><span>Googleは発見ツールであり、ライセンスではありません。元のソースと再配布条件がアセットメタデータに記録された後にのみ、アイコンは配布可能ライブラリに含まれます。</span></div>

<h2>技術アーキテクチャ</h2>
<p>ライブラリは以下の構造を持つ標準的なnpmパッケージとして提供されます：</p>
<ul>
<li><strong>ソースアセット:</strong> 意味的カテゴリー（礼拝、ラマダーン、シンボルなど）ごとに整理されたオリジナルのSVG/WebPファイル</li>
<li><strong>フレームワークアダプター:</strong> React、Vue、Svelte、Angular、Astro用の事前構築コンポーネント</li>
<li><strong>Vanilla JS:</strong> CDN対応のWeb Component（Bootstrap Iconsと同様）</li>
<li><strong>メタデータ:</strong> ソースURL、ライセンス、作者、帰属要件を含むJSONファイル</li>
<li><strong>ビルドパイプライン:</strong> Bunを活用したカタログ生成、検証、パッケージ化</li>
</ul>

<h2>人道支援サポート</h2>
<p>Atsarul Mujahidinは100%の財務透明性を持って公開寄付を受け付けています。全資金の最低70%が人道支援（パレスチナ支援、孤児院、低所得世帯、高齢者ケア、災害救援）に直接配分されます。最大30%がライブラリの安定提供に必要なインフラ運営（サーバー、CDN、ドメイン費用）に充てられます。</p>

<p>詳細は<a href="/ja/docs/donations">寄付と人道支援</a>のドキュメントをご覧ください。</p>

<h2>オープンソースとコミュニティ</h2>
<p>これはコミュニティ主導のプロジェクトです。コントリビューターはアートワークの提供、ドキュメントの改善、フレームワークアダプターの追加、ソースライセンスのレビューを行っています。開発者、デザイナー、ムスリムテックコミュニティのために価値あるものを創りたいすべての人々の参加を歓迎します。</p>

<p>参加方法は<a href="/ja/contributing">貢献ガイド</a>をご覧ください。</p>`
	},
	'/docs/installation': {
		title: 'インストール',
		lead: 'アートワークをローカルに保持し、出所を可視化しながら構築するための実用的なリファレンス。',
		body: `<p>プロジェクトで使用しているパッケージマネージャーでライブラリをインストールします。パッケージはカテゴリー別のエントリポイントを公開し、アートワークをローカルSVG/WebPアセットとして保持します。</p><h2>インストール</h2><pre>bun add atsarul-mujahidin\nnpm install atsarul-mujahidin\npnpm add atsarul-mujahidin\nyarn add atsarul-mujahidin</pre><h2>Webドキュメントのローカル実行</h2><pre>git clone &lt;repository&gt;\ncd atsarul-mujahidin\nbun install\nbun run docs</pre><p>コントリビューターの方は、リポジトリのビルドパイプラインにBunをご使用ください。公開されたパッケージはBun、npm、pnpm、Yarnでインストール可能です。</p><h2>ライブラリのビルド</h2><pre>bun run icons:catalog\nbun run icons:package\nbun run icons:validate\nbun run build</pre>`
	},
	'/docs/usage': {
		title: '使い方',
		lead: 'フレームワークコンポーネントとしてインポートするか、Vanilla JavaScript Web Componentを使用してユニバーサルな互換性を確保。',
		body: `<p>Atsarul Mujahidinはフレームワーク固有のコンポーネントと、Vanilla JavaScript Web Componentを提供しています。プロジェクトに最適な手法を選択してください。</p>

<h2>フレームワークコンポーネント (React, Vue, Svelte)</h2>
<pre>// バリアントサフィックス付きでアイコンごとにインポート
import { Kaaba } from 'atsarul-mujahidin/react/kaaba-fill';
import { MosqueSimple } from 'atsarul-mujahidin/react/mosquesimple-fill';

&lt;Kaaba size={32} colors="#10b981" className="icon" /&gt;
&lt;MosqueSimple size={24} /&gt;</pre>

<p>すべてのフレームワークコンポーネントは以下のPropsを受け入れます: <code>size</code>、<code>colors</code>、<code>strokeWidth</code>、<code>class</code>/<code>className</code>。</p>

<h2>Vanilla JavaScript (Web Component)</h2>
<pre>&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;Kaaba&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24"&gt;Mosque&lt;/atsarul-mujahidin&gt;</pre>

<h2>メタデータAPI</h2>
<p>プログラムからアイコンカタログにアクセス:</p>
<pre>import { catalog, categories, metadata } from 'atsarul-mujahidin';

console.log(metadata.iconCount);  // 81
console.log(categories);          // カテゴリー配列
console.log(catalog);             // 完全なアイコンメタデータ</pre>

<p>各フレームワークの詳細な例については、<a href="/ja/docs/frameworks">フレームワーク統合</a>をご覧ください。</p>`
	},
	'/docs/variants': {
		title: 'バリアント',
		lead: '塗りつぶし、アウトライン、カラーの各バリアント仕様と使用方針。',
		body: `<p>論理アイコンは<strong>fill（塗りつぶし）</strong>、<strong>outline（線画）</strong>、<strong>color（多色カラー）</strong>のバリアントを公開できます。ギャラリーでは意図的に論理アイコンごとに1枚のカードを描画し、バリアントの切り替えはアイコン詳細パネル内で行います。</p><div class="variant-demo"><div><span>Fill</span><b>ソリッドシルエット</b></div><div><span>Outline</span><b>線画マーク</b></div><div><span>Colors</span><b>多色アートワーク</b></div></div><p>一部のコントリビューション作品は、制作者のオリジナリティを損なわないよう意図的に<strong>original</strong>としてのみ提供されています。</p>`
	},
	'/docs/frameworks': {
		title: 'フレームワーク統合',
		lead: 'React、Vue、Svelte、Vanilla JS、REST APIの実装例とパッケージエクスポート仕様。',
		body: `<p>Atsarul MujahidinはReact、Vue、Svelte向けコンポーネントと、汎用Web Componentを提供します。全コンポーネントで一貫したProps（<code>size</code>、<code>colors</code>、<code>strokeWidth</code>、<code>class</code>）をサポートします。</p>

<h2>React</h2>
<p>バリアントサフィックスパターンでReactアダプターからインポート:</p>
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
<p>同じ命名規則でVueアダプターからインポート:</p>
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
<p>SvelteコンポーネントはPascalCaseパスとコンポーネント名を使用します:</p>
<pre>&lt;script&gt;
  import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
  import MosqueSimple from 'atsarul-mujahidin/svelte/fill/MosqueSimple';
  import QuranBook from 'atsarul-mujahidin/svelte/fill/QuranBook';
&lt;/script&gt;

&lt;Kaaba size={32} colors="#10b981" /&gt;
&lt;MosqueSimple size={24} class="my-icon" /&gt;
&lt;QuranBook size={48} /&gt;</pre>

<p><strong>重要:</strong> Svelteは異なるパス構造を使用します: <code>svelte/fill/ComponentName</code>, <code>svelte/outline/ComponentName</code>, <code>svelte/color/ComponentName</code></p>

<p><strong>Props:</strong> <code>size</code> (number | string), <code>colors</code> (string), <code>strokeWidth</code> (number), <code>class</code> (string)</p>

<h2>Vanilla JavaScript (Web Component)</h2>
<p>ビルド手順なしでカスタム要素を使用できます。スクリプトを1回読み込むだけで、どこでも使用可能:</p>
<pre>&lt;!-- スクリプトを1回読み込み (CDNまたはローカル) --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;

&lt;!-- 終了タグ付きでどこでも使用可能 --&gt;
&lt;atsarul-mujahidin variant="kaaba" size="32" colors="#10b981"&gt;Kaaba&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="mosque" size="24" class="my-icon"&gt;Mosque&lt;/atsarul-mujahidin&gt;
&lt;atsarul-mujahidin variant="quran" size="48"&gt;Quran&lt;/atsarul-mujahidin&gt;</pre>

<p><strong>属性:</strong> <code>variant</code> (必須), <code>size</code> (number), <code>colors</code> (string), <code>stroke-width</code> (number), <code>class</code> (string)</p>

<h2>アイコンバリアント</h2>
<p>各アイコンには最大3つのバリアントがあります: <strong>fill</strong>（塗りつぶし）、<strong>outline</strong>（線画）、<strong>color</strong>（多色カラー）。</p>

<pre>// React - サフィックスパターン
import Kaaba from 'atsarul-mujahidin/react/kaaba-fill';
import KaabaOutline from 'atsarul-mujahidin/react/kaaba-outline';

// Svelte - フォルダパターン
import Kaaba from 'atsarul-mujahidin/svelte/fill/Kaaba';
import AllahHandOutline from 'atsarul-mujahidin/svelte/outline/AllahHandOutline';
import PalestineFlag from 'atsarul-mujahidin/svelte/color/PalestineFlag';</pre>

<h2>TypeScriptサポート</h2>
<p>すべてのフレームワークコンポーネントに完全なTypeScript型定義が含まれており、オートコンプリートが即座に動作します:</p>

<pre>import type { IconProps } from 'atsarul-mujahidin';

// Propsは自動推論されます
&lt;Kaaba size={32} colors="#10b981" /&gt;</pre>

<h2>パッケージエクスポート</h2>
<p>Tree-shakingに最適化されたフレームワーク別のエクスポートを提供:</p>

<ul>
<li><code>atsarul-mujahidin/react/*-fill</code> - React fillコンポーネント</li>
<li><code>atsarul-mujahidin/react/*-outline</code> - React outlineコンポーネント</li>
<li><code>atsarul-mujahidin/react/*-color</code> - React colorコンポーネント</li>
<li><code>atsarul-mujahidin/vue/*-fill</code> - Vue fillコンポーネント</li>
<li><code>atsarul-mujahidin/vue/*-outline</code> - Vue outlineコンポーネント</li>
<li><code>atsarul-mujahidin/vue/*-color</code> - Vue colorコンポーネント</li>
<li><code>atsarul-mujahidin/svelte/fill/*</code> - Svelte fill (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/outline/*</code> - Svelte outline (PascalCase)</li>
<li><code>atsarul-mujahidin/svelte/color/*</code> - Svelte color (PascalCase)</li>
<li><code>atsarul-mujahidin/vanilla</code> - Web Component</li>
</ul>

<h2>REST API と CDN</h2>
<p>JavaScriptエコシステム外の環境（Flutter、Android、iOS、Python、Goなど）向けに、REST APIやCDNから直接アイコンを利用できます:</p>

<h3>CDN直接アクセス</h3>
<pre>&lt;!-- 静的SVG用のjsDelivr CDN --&gt;
&lt;img src="https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg" alt="Mosque" /&gt;

&lt;!-- unpkg経由のVanilla Web Component --&gt;
&lt;script src="https://unpkg.com/atsarul-mujahidin@0.1.1/vanilla/atsarul-mujahidin.js"&gt;&lt;/script&gt;</pre>

<h3>REST APIサーバー (ローカル / セルフホスト)</h3>
<p><code>library/api/server.js</code>で依存関係のない軽量HTTPサーバーを実行:</p>
<pre>bun library/api/server.js
# またはNode.js
node library/api/server.js</pre>

<p>利用可能なエンドポイント:</p>
<ul>
<li><code>GET /api/catalog</code> - カテゴリおよびバリアントメタデータを含む完全なカタログ</li>
<li><code>GET /api/categories</code> - 14カテゴリの配列</li>
<li><code>GET /api/icons/:name/:variant.svg</code> - 最適化されたキャッシュヘッダー付きSVGストリーム</li>
<li><code>GET /api/search?q=mosque</code> - 名前またはタイトルでアイコンを検索</li>
</ul>

<h3>Flutter / Dart 統合</h3>
<pre>// pubspec.yaml: flutter_svg: ^2.0.0
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.network(
  'https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg',
  width: 32,
  height: 32,
  colorFilter: ColorFilter.mode(Color(0xFF10B981), BlendMode.srcIn),
);</pre>

<h3>Android (Kotlin / Jetpack Compose)</h3>
<pre>// Coil SVGを使用: coil-svg
AsyncImage(
  model = "https://cdn.jsdelivr.net/npm/atsarul-mujahidin@0.1.1/icons/mosque/mosque-simple/fill.svg",
  contentDescription = "Mosque Icon",
  modifier = Modifier.size(32.dp)
)</pre>

<h3>Python / バックエンドサービス</h3>
<pre>import requests

response = requests.get("http://localhost:3000/api/icons/kaaba/fill.svg")
svg_markup = response.text</pre>

<h2>フレームワークサポート状況</h2>
<div class="framework-list">
<article><b>React 18+</b><code>✓ フルサポート</code></article>
<article><b>Vue 3</b><code>✓ フルサポート</code></article>
<article><b>Svelte 5</b><code>✓ フルサポート (Runesモード)</code></article>
<article><b>Vanilla JS</b><code>✓ Web Component (CDN対応)</code></article>
<article><b>Angular</b><code>⚠ 計画中</code></article>
<article><b>Astro</b><code>⚠ 計画中</code></article>
</div>

<p>全81種類のアイコンは<a href="/ja/icons">アイコンギャラリー</a>で閲覧するか、完全な<a href="https://github.com/RheinSullivan/islamic-icons">リポジトリ</a>をご覧ください。</p>`
	},
	'/docs/sources': {
		title: 'ソースと帰属',
		lead: 'すべてのアートワークの明確な出所、ライセンス、帰属情報のポリシー。',
		body: `<p>3つのソースレーンがあります：本プロジェクト向けに提供されたコミュニティ作品、外部ライセンス候補、Google Material Icons。Google検索は発見のためのみであり、再配布の許可を与えるものではありません。</p><h2>外部候補の確認</h2><p>外部候補は個別にライセンスが審査されます。ソースページとライセンス情報はアセットに常に保持されます。</p>${SOURCE_LINKS_HTML}`
	},
	'/docs/donations': {
		title: '寄付と人道支援',
		lead: '100%の財務透明性を保ち、最低70%を人道支援に配分する方針。',
		body: `<p>Atsarul Mujahidinは<strong>100%の財務透明性</strong>を持って一般寄付を受け付けています。すべての資金の最低70%がパレスチナ支援、スーダン支援、孤児院、低所得世帯、高齢者介護、災害救助などの人道支援に配分されます。最大30%がサーバー、CDN、ドメイン費用などのフレームワーク運用に充てられます。</p><div class="callout"><b>開発者個人への支援チャネル</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>透明性レポート</h2><p>公開報告ポリシーと詳細な透明性レポートのインデックスは<strong>docs/en/donations.md</strong>に保管されています。各報告期間ごとに検証済みの明細書がそこに追加されます。</p><h2>配分ポリシー</h2><p><strong>最低70%</strong>が直接的な人道支援に割り当てられます。<strong>最大30%</strong>が必要なフレームワーク運用に充てられます。</p><div class="framework-list"><article><b>パレスチナ・スーダン支援</b><code>人道支援優先事項</code></article><article><b>孤児院支援</b><code>人道支援</code></article><article><b>低所得世帯支援</b><code>人道支援</code></article><article><b>高齢者ケア</b><code>人道支援</code></article><article><b>災害救助</b><code>人道支援</code></article><article><b>サーバー、CDN、ドメイン</b><code>フレームワーク運用</code></article></div>`
	}
};

const maps: Record<string, Record<string, DocEntry>> = {
	en: docs,
	id: docsId,
	ar: docsAr,
	ja: docsJa
};

export function getDoc(path: string, locale: string): DocEntry {
	const map = maps[locale] || docs;
	return map[path] || map['/docs'] || docs['/docs'];
}

export function richBody(body: string): string {
	return body
		.replaceAll('class="callout"', 'class="my-7 rounded-2xl border border-islamic-green/15 bg-islamic-green/5 p-5"')
		.replaceAll('class="variant-demo"', 'class="my-7 grid gap-3 sm:grid-cols-3"')
		.replaceAll('<div><span>Fill</span><b>Dense silhouette</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">Dense silhouette</b></div>')
		.replaceAll('<div><span>Fill</span><b>Siluet padat</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">Siluet padat</b></div>')
		.replaceAll('<div><span>Fill</span><b>صورة ظلية ممتلئة</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">صورة ظلية ممتلئة</b></div>')
		.replaceAll('<div><span>Fill</span><b>ソリッドシルエット</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">ソリッドシルエット</b></div>')
		.replaceAll('<div><span>Outline</span><b>Line-oriented mark</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">Line-oriented mark</b></div>')
		.replaceAll('<div><span>Outline</span><b>Tanda berorientasi garis</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">Tanda berorientasi garis</b></div>')
		.replaceAll('<div><span>Outline</span><b>علامة خطية</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">علامة خطية</b></div>')
		.replaceAll('<div><span>Outline</span><b>線画マーク</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">線画マーク</b></div>')
		.replaceAll('<div><span>Colors</span><b>Multi-tone artwork</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">Multi-tone artwork</b></div>')
		.replaceAll('<div><span>Colors</span><b>Karya multi-warna</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">Karya multi-warna</b></div>')
		.replaceAll('<div><span>Colors</span><b>عمل فني متعدد الألوان</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">عمل فني متعدد الألوان</b></div>')
		.replaceAll('<div><span>Colors</span><b>多色アートワーク</b></div>', '<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">多色アートワーク</b></div>')
		.replaceAll('class="framework-list"', 'class="my-7 grid gap-3 sm:grid-cols-2"')
		.replaceAll('<article><b>', '<article class="rounded-xl border border-islamic-line bg-islamic-panel p-4"><b>')
		.replaceAll('</b><code>', '</b><code class="mt-2 block text-[10px] text-islamic-green">')
		.replaceAll('class="source-links"', 'class="my-7 grid gap-2"')
		.replaceAll('<a href="', '<a class="flex items-center justify-between gap-4 rounded-xl border border-islamic-line bg-islamic-panel px-4 py-3 text-[11px] text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text" href="')
		.replaceAll('<small>', '<small class="shrink-0 text-[9px] text-islamic-green">')
		.replaceAll('<pre>', '<pre class="my-6 overflow-x-auto rounded-2xl border border-islamic-line bg-black/20 p-4 text-[11px] leading-7 text-islamic-muted">');
}

