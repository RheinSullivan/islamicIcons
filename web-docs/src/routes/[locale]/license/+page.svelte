<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'License - Atsarul Mujahidin' : 'Lisensi - Atsarul Mujahidin'}</title>
	<meta name="description" content={locale === 'en' ? 'Atsarul Mujahidin license information and terms of use' : 'Informasi lisensi Atsarul Mujahidin dan ketentuan penggunaan'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'License' : 'Lisensi'}
	label={locale === 'en' ? 'Legal' : 'Legal'}
>
	<section id="isc-license" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'ISC License' : 'Lisensi ISC'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'Atsarul Mujahidin is free and open-source software licensed under the ISC License. This permissive license allows you to use, modify, and distribute the icons freely.'
				: 'Atsarul Mujahidin adalah perangkat lunak gratis dan open-source berlisensi ISC. Lisensi permisif ini memungkinkan Anda menggunakan, memodifikasi, dan mendistribusikan ikon dengan bebas.'}
		</p>
		
		<div class="rounded-xl border border-islamic-line bg-black/20 p-6">
			<pre class="overflow-x-auto text-[11px] leading-6 text-islamic-muted"><code>Copyright (c) 2024 Atsarul Mujahidin Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.</code></pre>
		</div>
	</section>

	<section id="what-this-means" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'What This Means' : 'Arti Lisensi Ini'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en'
				? 'The ISC License is a permissive free software license. Here is what you can do:'
				: 'Lisensi ISC adalah lisensi perangkat lunak bebas yang permisif. Berikut ini yang dapat Anda lakukan:'}
		</p>
		<div class="grid gap-4">
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">✓ {locale === 'en' ? 'Commercial Use' : 'Penggunaan Komersial'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Use the icons in commercial projects without restrictions.' : 'Gunakan ikon dalam proyek komersial tanpa batasan.'}
				</p>
			</div>
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">✓ {locale === 'en' ? 'Modification' : 'Modifikasi'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Modify icons to fit your needs and design requirements.' : 'Modifikasi ikon sesuai kebutuhan dan desain Anda.'}
				</p>
			</div>
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">✓ {locale === 'en' ? 'Distribution' : 'Distribusi'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Redistribute the icons freely in your own projects.' : 'Distribusikan ulang ikon dengan bebas dalam proyek Anda.'}
				</p>
			</div>
			<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5">
				<h3 class="mb-2 text-sm font-semibold">◎ {locale === 'en' ? 'No Attribution Required' : 'Tidak Perlu Atribusi'}</h3>
				<p class="text-[13px] leading-6 text-islamic-muted">
					{locale === 'en' ? 'Attribution is not required, but always appreciated.' : 'Atribusi tidak wajib, tetapi sangat dihargai.'}
				</p>
			</div>
		</div>
	</section>

	<section id="icon-sources" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Icon Sources & Attribution' : 'Sumber & Atribusi Ikon'}</h2>
		<p class="mb-6 text-base leading-7 text-islamic-muted">
			{locale === 'en' 
				? 'Icons in this library come from various sources, each with their own license and attribution requirements. Always check the source metadata for specific icons to ensure compliance.'
				: 'Ikon dalam library ini berasal dari berbagai sumber, masing-masing dengan lisensi dan persyaratan atribusi sendiri. Selalu periksa metadata sumber untuk ikon tertentu agar sesuai dengan lisensi mereka.'}
		</p>
		<p class="text-base leading-7 text-islamic-muted">
			{locale === 'en'
				? 'Community-contributed icons are licensed under the ISC License. External icons retain their original licenses.'
				: 'Ikon kontribusi komunitas berlisensi ISC. Ikon eksternal mempertahankan lisensi aslinya.'}
		</p>
	</section>

	<section id="disclaimer" class="mb-16">
		<h2 class="mb-4 text-2xl font-semibold">{locale === 'en' ? 'Disclaimer' : 'Penafian'}</h2>
		<p class="text-base leading-7 text-islamic-muted">
			{locale === 'en'
				? 'THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. The authors are not liable for any damages arising from the use of this software.'
				: 'PERANGKAT LUNAK DIBERIKAN "SEBAGAIMANA ADANYA" TANPA JAMINAN APAPUN. Penulis tidak bertanggung jawab atas kerusakan yang timbul dari penggunaan perangkat lunak ini.'}
		</p>
	</section>

	<div class="mt-10 flex gap-6 text-sm">
		<a href="/{locale}/sources" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'View All Sources' : 'Lihat Semua Sumber'} →
		</a>
		<a href="/{locale}/contributing" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Contribute Icons' : 'Kontribusi Ikon'} →
		</a>
		<a href="/{locale}/community" class="font-medium text-islamic-green hover:underline">
			{locale === 'en' ? 'Join Community' : 'Gabung Komunitas'} →
		</a>
	</div>
</ResourceLayout>
