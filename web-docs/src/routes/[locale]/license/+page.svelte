<script lang="ts">
	import ResourceLayout from '$lib/components/ResourceLayout.svelte';
	import { translations, type Locale } from '$lib/i18n';
	
	let { data } = $props();
	const locale = $derived(data.locale as Locale);
	const t = $derived(translations[locale]);
</script>

<svelte:head>
	<title>{locale === 'en' ? 'License - Islamic Icons' : 'Lisensi - Islamic Icons'}</title>
	<meta name="description" content={locale === 'en' ? 'Islamic Icons license information and terms of use' : 'Informasi lisensi Islamic Icons dan ketentuan penggunaan'} />
</svelte:head>

<ResourceLayout 
	title={locale === 'en' ? 'License' : 'Lisensi'}
	label={locale === 'en' ? 'Legal' : 'Legal'}
>
	<div class="resource-card">
		<h2>ISC License</h2>
		<p>{locale === 'en' ? 'Islamic Icons is free and open-source software licensed under the ISC License.' : 'Islamic Icons adalah perangkat lunak gratis dan open-source berlisensi ISC.'}</p>
		
		<pre><code>Copyright (c) 2024 Islamic Icons Contributors

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

	<h2>{locale === 'en' ? 'What This Means' : 'Arti Lisensi Ini'}</h2>
	<ul>
		<li>{locale === 'en' ? 'Free for commercial and personal use' : 'Gratis untuk penggunaan komersial dan pribadi'}</li>
		<li>{locale === 'en' ? 'Modify and redistribute freely' : 'Modifikasi dan distribusi ulang dengan bebas'}</li>
		<li>{locale === 'en' ? 'No attribution required (but appreciated)' : 'Tidak perlu atribusi (tapi dihargai)'}</li>
		<li>{locale === 'en' ? 'No warranty or liability' : 'Tanpa garansi atau tanggung jawab'}</li>
	</ul>

	<h2>{locale === 'en' ? 'Icon Sources' : 'Sumber Ikon'}</h2>
	<p>
		{locale === 'en' 
			? 'Icons in this library come from various sources, each with their own attribution requirements. Always check the source metadata for specific icons to ensure compliance with their licenses.'
			: 'Ikon dalam library ini berasal dari berbagai sumber, masing-masing dengan persyaratan atribusi sendiri. Selalu periksa metadata sumber untuk ikon tertentu agar sesuai dengan lisensi mereka.'}
	</p>

	<div class="mt-10 flex gap-6">
		<a href="/{locale}/sources" class="text-islamic-green">
			{locale === 'en' ? 'View Sources' : 'Lihat Sumber'} →
		</a>
		<a href="/{locale}/contributing" class="text-islamic-green">
			{locale === 'en' ? 'Contributing' : 'Kontribusi'} →
		</a>
	</div>
</ResourceLayout>
