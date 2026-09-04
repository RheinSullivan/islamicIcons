<script lang="ts">
	import { page } from '$app/state';
	import { MAX } from '$lib/site';
	import { translations, type Locale } from '$lib/i18n';

	let { children, data } = $props();
	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);
	const pathname = $derived(page.url.pathname.replace(/\/$/, ''));

	const SIDE = $derived([
		{ label: locale === 'en' ? 'Overview'              : 'Ikhtisar',                href: `/${locale}/docs`               },
		{ label: locale === 'en' ? 'Installation'          : 'Instalasi',               href: `/${locale}/docs/installation`  },
		{ label: locale === 'en' ? 'Usage'                 : 'Penggunaan',              href: `/${locale}/docs/usage`         },
		{ label: locale === 'en' ? 'Variants'              : 'Varian',                  href: `/${locale}/docs/variants`      },
		{ label: locale === 'en' ? 'Frameworks'            : 'Framework',               href: `/${locale}/docs/frameworks`    },
		{ label: locale === 'en' ? 'Sources & attribution' : 'Sumber & atribusi',       href: `/${locale}/docs/sources`       },
		{ label: locale === 'en' ? 'Donations'             : 'Donasi',                  href: `/${locale}/docs/donations`     },
		{ label: locale === 'en' ? 'Contributing'          : 'Kontribusi',              href: `/${locale}/contributing`       },
	]);
</script>

<div class="{MAX} pt-32 pb-14 sm:pt-36 sm:pb-20">
	<div class="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[220px_minmax(0,1fr)_200px]">
		<!-- Docs sidebar - exact from native -->
		<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
			<div class="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">
				{translation.docs.docsSidebarLabel}
			</div>
			<div class="grid gap-1">
				{#each SIDE as item (item.href)}
					<a
						href={item.href}
						aria-current={pathname === item.href ? 'page' : undefined}
						class="cursor-pointer rounded-lg px-3 py-2.5 text-[12px] transition {pathname === item.href ? 'bg-islamic-green/8 text-islamic-green' : 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
					>{item.label}</a>
				{/each}
			</div>
			<!-- Contribute card - exact from native -->
			<div class="mt-8 rounded-2xl border border-islamic-line bg-islamic-panel p-4">
				<span class="mb-3 grid size-8 place-items-center rounded-lg bg-islamic-green/10 text-islamic-green">✦</span>
				<b class="text-[12px]">{translation.docs.contributeCard}</b>
				<p class="mt-2 text-[11px] leading-6 text-islamic-dim">{translation.docs.contributeDesc}</p>
				<a href="/{locale}/contributing" class="mt-3 inline-flex cursor-pointer text-[11px] font-medium text-islamic-green">{translation.docs.contributeLink} →</a>
			</div>
		</aside>

		<!-- Mobile sidebar dropdown -->
		<div class="lg:hidden">
			<div class="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">
				{translation.docs.docsSidebarLabel}
			</div>
			<div class="flex flex-wrap gap-1">
				{#each SIDE as item (item.href)}
					<a
						href={item.href}
						class="cursor-pointer rounded-lg px-3 py-2 text-[11px] transition {pathname === item.href ? 'bg-islamic-green/8 text-islamic-green' : 'border border-islamic-line text-islamic-muted hover:text-islamic-text'}"
					>{item.label}</a>
				{/each}
			</div>
		</div>

		<!-- Content with right sidebar -->
		<div class="min-w-0 lg:col-span-1 xl:col-span-2">
			{@render children()}
		</div>
	</div>
</div>
