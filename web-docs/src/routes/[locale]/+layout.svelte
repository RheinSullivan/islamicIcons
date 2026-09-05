<script lang="ts">
	import logo from '$lib/assets/logo-atsarul-mujahidin.svg';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import {
		icons,
		pretty,
		icon,
		sourceForItem,
		chooseVariant,
		variantName,
		sourceLabel,
		MAX,
		camel
	} from '$lib/site';
	import { docs as docsContent, richBody } from '$lib/docs-content';
	import { translations, type Locale } from '$lib/i18n';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import SalamModal from '$lib/components/SalamModal.svelte';
	import DynamicIcon from '$lib/components/DynamicIcon.svelte';
	import { onMount, tick } from 'svelte';

	let { children, data } = $props();

	const locale = $derived(data.locale as Locale);
	const translation = $derived(translations[locale]);

	const pathname = $derived(page.url.pathname.replace(/\/$/, '') || '/');

	// Nav items - Icons, Packages, Showcase, Resources (dropdown), Docs
	// Nav order: Docs, Icons, Packages, Showcase, Donations
	const NAV = $derived([
		{ href: `/${locale}/docs`,       label: translation.nav.docs,       key: 'docs'       },
		{ href: `/${locale}/icons`,      label: translation.nav.icons,      key: 'icons'      },
		{ href: `/${locale}/packages`,   label: translation.nav.packages,   key: 'packages'   },
		{ href: `/${locale}/showcase`,   label: translation.nav.showcase,   key: 'showcase'   },
		{ href: `/${locale}/donations`,  label: translation.nav.donations,  key: 'donations'  },
	]);

	const RESOURCES = $derived([
		{ href: `/${locale}/license`,          label: translation.resources.license       },
		{ href: `/${locale}/community`,        label: translation.resources.community     },
		{ href: `/${locale}/code-of-conduct`,  label: translation.resources.codeOfConduct },
		{ href: `/${locale}/sources`,          label: translation.resources.sources       },
		{ href: `/${locale}/brand-logos`,      label: locale === 'en' ? 'Brand Logos' : 'Logo Brand' },
		{ href: `/${locale}/contributing`,     label: translation.resources.contributing  },
	]);

	const REPO_URL = 'https://github.com/RheinSullivan/islamic-icons'; // Keep GitHub URL unchanged

	let searchOpen = $state(false);
	let drawerName: string | null = $state(null);
	let drawerSource: string | null = $state(null);
	let drawerMaximized = $state(false);
	let mobileOpen = $state(false);
	let currentVariant = $state('fill');
	let toastMsg: string | null = $state(null);
	let toastTimer: ReturnType<typeof setTimeout> | null = null;

	const drawerItem = $derived.by(() => {
		if (!drawerName) return null;
		const item = icon(drawerName);
		if (!item) return null;
		const srcId = drawerSource && item.sources.some(s => s.id === drawerSource)
			? drawerSource
			: sourceForItem(item)?.id;
		const source = item.sources.find(s => s.id === srcId) || item.sources[0];
		const vars = [...new Set([...(source?.variants || [])])].filter(v =>
			['fill','outline','color','original','alternate'].includes(v)
		);
		const variant = chooseVariant(source, currentVariant);
		
		// Get proper contributor name - check source metadata for actual contributor
		let contributorName = 'Rhein Sullivan'; // Default
		if (source?.id) {
			// Use specific source contributors or default
			contributorName = source.id.includes('google') ? 'Google' : 
			                 source.id.includes('svg') ? 'SVG Repo' :
			                 'Rhein Sullivan';
		}
		
		const frameworkExamples = {
			react: `import ${camel(item.name)} from 'atsarul-mujahidin/react/${item.name}-${variant}';\n\nexport function MyComponent() {\n  return <${camel(item.name)} size={32} />;\n}`,
			vue: `<script setup>
import ${camel(item.name)} from 'atsarul-mujahidin/vue/${item.name}-${variant}';
<\/script>

<template>
  <${camel(item.name)} :size="32" />
<\/template>`,
			svelte: `<script>
  import ${pretty(item.name).replace(/\s/g, '')} from 'atsarul-mujahidin/svelte/${variant}/${pretty(item.name).replace(/\s/g, '')}';
<\/script>

<${pretty(item.name).replace(/\s/g, '')} size={32} />`,
			vanilla: `<script type="module">
  import 'atsarul-mujahidin/vanilla/atsarul-mujahidin.js';
<\/script>

<atsarul-mujahidin-icon name="${item.name}" variant="${variant}" size="32"><\/atsarul-mujahidin-icon>`
		};
		
		return { item, source, variant, vars, contributorName, frameworkExamples };
	});

	function isActive(key: string) {
		const currentPath = pathname;
		if (key === 'docs') return currentPath.includes('/docs');
		if (key === 'donations') return currentPath.includes('/donations');
		return currentPath.includes(`/${key}`);
	}

	function switchLocale() {
		const next: Locale = locale === 'en' ? 'id' : 'en';
		if (typeof localStorage !== 'undefined') localStorage.setItem('atsarul-mujahidin-locale', next);
		// Preserve the current page under the new locale
		const newPath = pathname.replace(`/${locale}`, `/${next}`);
		goto(newPath, { replaceState: false });
	}

	async function copyText(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			showToast(translation.drawer.copied);
		} catch {
			showToast(translation.drawer.copyUnavailable);
		}
	}

	function showToast(msg: string) {
		toastMsg = msg;
		if (toastTimer) clearTimeout(toastTimer);
		toastTimer = setTimeout(() => { toastMsg = null; }, 1600);
	}

	function onGlobalClick(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const openEl = target.closest('[data-open]') as HTMLElement | null;
		if (openEl) { drawerName = openEl.dataset.open!; drawerSource = null; drawerMaximized = false; return; }
		const closeEl = target.closest('[data-close]') as HTMLElement | null;
		if (closeEl) { drawerName = null; drawerSource = null; drawerMaximized = false; return; }
		const maximizeEl = target.closest('[data-maximize]') as HTMLElement | null;
		if (maximizeEl) { drawerMaximized = !drawerMaximized; return; }
		const copyEl = target.closest('[data-copy]') as HTMLElement | null;
		if (copyEl) { copyText(copyEl.dataset.copy!); return; }
		const searchEl = target.closest('[data-search]') as HTMLElement | null;
		if (searchEl) { searchOpen = true; return; }
		const mobileEl = target.closest('[data-mobile-toggle]') as HTMLElement | null;
		if (mobileEl) { mobileOpen = !mobileOpen; return; }
		const dsrcEl = target.closest('[data-drawer-source]') as HTMLElement | null;
		if (dsrcEl) { drawerSource = dsrcEl.dataset.drawerSource!; return; }
		const dvarEl = target.closest('[data-drawer-var]') as HTMLElement | null;
		if (dvarEl) { currentVariant = dvarEl.dataset.drawerVar!; return; }
	}

	onMount(() => {
		// Save locale preference
		if (typeof localStorage !== 'undefined') localStorage.setItem('atsarul-mujahidin-locale', locale);

		function onKeydown(e: KeyboardEvent) {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); searchOpen = true; }
			if (e.key === 'Escape') {
				if (drawerMaximized) { drawerMaximized = false; }
				else if (drawerName) { drawerName = null; drawerMaximized = false; }
				else { searchOpen = false; }
			}
		}
		window.addEventListener('keydown', onKeydown);
		document.addEventListener('click', onGlobalClick);
		return () => {
			window.removeEventListener('keydown', onKeydown);
			document.removeEventListener('click', onGlobalClick);
		};
	});

	$effect(() => {
		void pathname;
		drawerName = null; drawerSource = null; drawerMaximized = false;
		mobileOpen = false; searchOpen = false;
	});

	$effect(() => {
		if (typeof window === 'undefined' || !(window as any).gsap) return;
		void pathname; void drawerName; void drawerSource; void currentVariant; void mobileOpen;
		requestAnimationFrame(() => tick().then(animatePage));
	});

	function animatePage() {
		const windowGlobal = window as any;
		if (!windowGlobal.gsap) return;
		const gsap = windowGlobal.gsap;
		const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;

		// Cleanup previous observers
		if (windowGlobal.__islamicIconsObservers) {
			windowGlobal.__islamicIconsObservers.forEach((observer: IntersectionObserver) => observer.disconnect());
		}
		windowGlobal.__islamicIconsObservers = [];
		// Cleanup previous gsap context
		if (windowGlobal.__islamicIconsGsapContext) {
			windowGlobal.__islamicIconsGsapContext.revert();
		}

		const ctx = gsap.context(() => {
			const containers = document.querySelectorAll('.gsap-container');
			if (containers.length) {
				gsap.from(containers, { opacity: 0, y: 28, duration: 0.7, ease: 'power3.out', stagger: 0.08, clearProps: 'transform' });
			}
			const words = document.querySelectorAll('.hero-word');
			if (words.length) {
				gsap.from(words, { opacity: 0, y: 34, rotateX: -55, duration: 0.72, ease: 'power3.out', stagger: 0.035, delay: 0.08, transformOrigin: '50% 100%', clearProps: 'transform' });
			}
			document.querySelectorAll('.gsap-on-scroll').forEach(el => {
				if ((el as HTMLElement).dataset.gsapReady) return;
				(el as HTMLElement).dataset.gsapReady = '1';
				const observer = new IntersectionObserver(entries => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							gsap.fromTo(entry.target, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform' });
							observer.unobserve(entry.target);
						}
					}
				}, { threshold: 0.08 });
				windowGlobal.__islamicIconsObservers.push(observer);
				observer.observe(el);
			});
		});
		windowGlobal.__islamicIconsGsapContext = ctx;
	}
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={logo} />
	<link rel="alternate" hreflang="en" href={pathname.replace(`/${locale}`, '/en')} />
	<link rel="alternate" hreflang="id" href={pathname.replace(`/${locale}`, '/id')} />
	<link rel="alternate" hreflang="x-default" href={pathname.replace(`/${locale}`, '/en')} />
</svelte:head>

<div class="min-h-screen overflow-x-clip bg-islamic-bg text-islamic-text">
	<!-- Background radial gradients - exact from native -->
	<div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(50,132,96,.09),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(215,182,107,.045),transparent_25%)]"></div>

	<!-- HEADER - exact from native: Logo | Icons Categories Docs Sources | Search GitHub | Mobile -->
	<header class="fixed inset-x-0 top-0 z-50 border-b border-islamic-line bg-[#08150f]/95 backdrop-blur-xl supports-[backdrop-filter]:bg-[#08150f]/88">
		<div class="{MAX} relative flex h-20 items-center justify-between gap-4">
			<!-- Logo -->
			<a href="/{locale}" aria-label="Atsarul Mujahidin home" class="group flex shrink-0 items-center gap-1">
				<span class="grid size-12 shrink-0 place-items-center overflow-hidden">
					<img src={logo} alt="Atsarul Mujahidin logo" class="size-full object-contain" />
				</span>
				<span class="hidden sm:block">
					<strong class="block font-display text-base font-semibold tracking-tight text-islamic-text">Atsarul Mujahidin</strong>
					<small class="block text-[9px] uppercase tracking-[.18em] text-islamic-dim">Free Palestine 🇵🇸</small>
				</span>
			</a>

			<!-- Desktop nav - centered -->
			<nav class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex" aria-label="Primary">
				{#each NAV as item (item.key)}
					<a
						href={item.href}
						aria-current={isActive(item.key) ? 'page' : undefined}
						class="flex h-20 items-center border-b-2 px-3 text-[13px] font-medium transition {isActive(item.key) ? 'border-islamic-green text-islamic-green' : 'border-transparent text-islamic-muted hover:border-islamic-green hover:text-islamic-green'}"
					>{item.label}</a>
				{/each}
				<!-- Resources dropdown -->
				<div class="group relative flex h-20 items-center">
					<button type="button" class="flex h-20 cursor-pointer items-center gap-1 border-b-2 border-transparent px-3 text-[13px] font-medium text-islamic-muted transition hover:border-islamic-green hover:text-islamic-green">
						Resources
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-3 fill-none stroke-current stroke-[2] transition group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
					</button>
					<div class="pointer-events-none absolute left-0 top-full hidden w-56 rounded-xl border border-islamic-line bg-islamic-bg/98 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition group-hover:pointer-events-auto group-hover:block group-hover:opacity-100">
						{#each RESOURCES as resource (resource.href)}
							<a href={resource.href} class="flex h-10 cursor-pointer items-center rounded-lg px-3 text-[12px] text-islamic-muted transition hover:bg-white/5 hover:text-islamic-text">{resource.label}</a>
						{/each}
					</div>
				</div>
			</nav>

			<!-- Right actions -->
			<div class="ml-auto flex items-center gap-2">
				<!-- Search -->
				<button
					type="button"
					data-search
					aria-label="Search"
					class="hidden h-8 cursor-pointer items-center gap-3 rounded-xl border border-islamic-line bg-white/2 px-3.5 text-[12px] text-islamic-muted transition hover:border-islamic-line-strong hover:bg-white/4 hover:text-islamic-text md:flex"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>
					<span>{locale === 'en' ? 'Search...' : 'Cari...'}</span>
					<kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] tracking-[.08em] text-islamic-dim">⌘K</kbd>
				</button>
				<!-- GitHub -->
				<a
					href={REPO_URL}
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub repository"
					class="hidden h-11 items-center gap-2 rounded-xl px-3 text-[12px] font-medium text-islamic-muted transition hover:bg-white/5 hover:text-islamic-text sm:flex"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-current"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
					<span>GitHub</span>
				</a>
				<!-- Mobile menu button -->
				<button
					type="button"
					data-mobile-toggle
					aria-expanded={mobileOpen}
					aria-controls="mobile-nav"
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					class="grid size-11 cursor-pointer place-items-center rounded-xl border border-islamic-line bg-white/2 text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text md:hidden"
				>
					{#if mobileOpen}
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]"><path d="m6 6 12 12M18 6 6 18"/></svg>
					{:else}
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile nav -->
		<div id="mobile-nav" data-mobile-panel class="{mobileOpen ? '' : 'hidden'} border-t border-islamic-line bg-islamic-bg/98 md:hidden">
			<div class="{MAX} grid gap-1 py-3">
				{#each NAV as item (item.key)}
					<a
						href={item.href}
						class="flex h-11 items-center border-b-2 px-3 text-[13px] font-medium transition {isActive(item.key) ? 'border-islamic-green text-islamic-green' : 'border-transparent text-islamic-muted hover:border-islamic-green hover:text-islamic-green'}"
					>{item.label}</a>
				{/each}
				<!-- Resources accordion for mobile -->
				<details class="group">
					<summary class="flex h-11 cursor-pointer items-center justify-between px-3 text-[13px] font-medium text-islamic-muted hover:text-islamic-text">
						Resources
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-3 fill-none stroke-current stroke-[2] transition group-open:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
					</summary>
					<div class="mt-1 grid gap-1 pl-3">
						{#each RESOURCES as resource (resource.href)}
							<a href={resource.href} class="flex h-10 items-center px-3 text-[12px] text-islamic-dim hover:text-islamic-text">{resource.label}</a>
						{/each}
					</div>
				</details>
				<button
					type="button"
					data-search
					class="mt-2 flex h-11 cursor-pointer items-center justify-between rounded-xl border border-islamic-line bg-white/2 px-3.5 text-left text-[12px] text-islamic-muted"
				>
					<span class="flex items-center gap-3">
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>
						{locale === 'en' ? 'Search...' : 'Cari...'}
					</span>
					<kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim">⌘K</kbd>
				</button>
				<a
					href={REPO_URL}
					target="_blank"
					rel="noreferrer"
					class="flex h-11 items-center gap-2 rounded-xl px-3 text-[12px] font-medium text-islamic-muted"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-current"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
					GitHub
				</a>
			</div>
		</div>
	</header>

	<!-- Page content -->
	{@render children()}

	<!-- FOOTER - exact from native -->
	<footer class="border-t border-islamic-line bg-black/12">
		<div class="{MAX} pt-14 pb-10">
			<div class="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
				<div>
					<div class="flex items-center gap-3">
						<img src={logo} alt="Atsarul Mujahidin logo" class="size-8 shrink-0 object-contain" />
						<div class="flex flex-col">
							<strong class="block font-display text-base font-semibold text-islamic-text">Atsarul Mujahidin</strong>
							<small class="block text-[9px] uppercase tracking-[.18em] text-islamic-dim">Free Sudan 🇸🇩</small>
						</div>
					</div>
					<p class="mt-3 max-w-xs text-[11px] text-islamic-dim">{translation.footer.tagline}</p>
					<span class="mt-4 block text-[10px] text-islamic-muted">Muslim Tech Community</span>
				</div>
				<div class="grid content-start gap-2">
					<b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">{translation.footer.explore}</b>
					<a href="/{locale}/icons"        class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.nav.icons}</a>
					<a href="/{locale}/packages"     class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.nav.packages}</a>
					<a href="/{locale}/showcase"     class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.nav.showcase}</a>
					<a href="/{locale}/donations"    class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.nav.donations}</a>
					<a href="/{locale}/sources"      class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.resources.sources}</a>
				</div>
				<div class="grid content-start gap-2">
					<b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">{translation.footer.develop}</b>
					<a href="/{locale}/docs/installation" class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.footer.installation}</a>
					<a href="/{locale}/docs/frameworks"   class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.footer.frameworks}</a>
					<a href="/{locale}/contributing"      class="text-[11px] text-islamic-dim hover:text-islamic-text">{translation.footer.contributing}</a>
				</div>
				<div class="grid content-start gap-2">
					<b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">{translation.footer.principles}</b>
					<span class="text-[11px] text-islamic-dim">{translation.footer.localAssets}</span>
					<span class="text-[11px] text-islamic-dim">{translation.footer.attributionFirst}</span>
					<span class="text-[11px] text-islamic-dim">{translation.footer.noRuntimeApi}</span>
				</div>
			</div>
			<div class="mt-10 flex flex-col gap-2 border-t border-islamic-line pt-5 text-[10px] text-islamic-dim sm:flex-row sm:items-center sm:justify-between">
				<span>{translation.footer.copyright}</span>
				<span>{translation.footer.credits}</span>
			</div>
		</div>
	</footer>

	<!-- Icon Drawer - Professional documentation style -->
	{#if drawerItem}
		<div class="fixed inset-0 z-[90] {drawerMaximized ? 'bg-islamic-bg' : ''}" data-drawer-root>
			{#if !drawerMaximized}
				<button type="button" data-close aria-label={translation.drawer.close} class="absolute inset-0 h-full w-full cursor-pointer border-0 bg-black/65 backdrop-blur-sm"></button>
			{/if}
			<aside
				class="absolute {drawerMaximized ? 'inset-0' : 'right-0 top-0 h-full w-full max-w-xl border-l border-islamic-line-strong shadow-[-30px_0_90px_rgba(0,0,0,.45)]'} overflow-y-auto bg-[#09150f]"
				aria-label={locale === 'id' ? 'Detail ikon' : 'Icon details'}
			>
				<!-- Header -->
				<div class="sticky top-0 z-10 flex items-center justify-between border-b border-islamic-line bg-[#09150f]/95 px-5 py-4 backdrop-blur-xl">
					<div class="min-w-0 flex-1">
						<span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">{pretty(drawerItem.item.category)}</span>
						<h2 class="mt-1 font-display text-lg tracking-[-.02em] sm:text-xl">{drawerItem.item.title}</h2>
					</div>
					<div class="ml-4 flex shrink-0 gap-2">
						<button 
							type="button" 
							data-maximize 
							aria-label={drawerMaximized ? translation.drawer.minimize : translation.drawer.maximize}
							class="grid size-9 cursor-pointer place-items-center rounded-lg border border-islamic-line text-islamic-muted transition hover:text-islamic-text"
						>
							{#if drawerMaximized}
								<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]">
									<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
								</svg>
							{:else}
								<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]">
									<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
								</svg>
							{/if}
						</button>
						<button 
							type="button" 
							data-close 
							aria-label={translation.drawer.close}
							class="grid size-9 cursor-pointer place-items-center rounded-lg border border-islamic-line text-islamic-muted transition hover:text-islamic-text"
						>
							<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]">
								<path d="m6 6 12 12M18 6 6 18"/>
							</svg>
						</button>
					</div>
				</div>

				<!-- Content -->
				<div class="{drawerMaximized ? 'mx-auto max-w-4xl' : ''} p-5 sm:p-6">
					<!-- Preview -->
					<div class="relative grid {drawerMaximized ? 'aspect-[16/10]' : 'aspect-[4/3]'} place-items-center overflow-hidden rounded-xl border border-islamic-line bg-[radial-gradient(circle_at_50%_50%,rgba(115,224,174,.03),transparent_70%)]">
						<div class="{drawerMaximized ? 'max-h-[50%] max-w-[40%]' : 'max-h-[35%] max-w-[35%]'} w-full h-full flex items-center justify-center">
							<DynamicIcon item={drawerItem.item} variant={drawerItem.variant} class="w-full h-full object-contain" />
						</div>
					</div>

					<!-- Variant Selection -->
					{#if drawerItem.vars.length > 1}
						<div class="mt-5">
							<span class="mb-2 block text-[10px] font-medium uppercase tracking-[.14em] text-islamic-dim">{translation.drawer.variant}</span>
							<div class="flex flex-wrap gap-2">
								{#each drawerItem.vars as v (v)}
									<button 
										type="button" 
										data-drawer-var={v} 
										class="cursor-pointer rounded-lg border px-3 py-1.5 text-[11px] font-medium transition {v === drawerItem.variant ? 'border-islamic-green/30 bg-islamic-green/10 text-islamic-green' : 'border-islamic-line text-islamic-muted hover:border-islamic-line-strong hover:text-islamic-text'}"
									>
										{variantName(v)}
									</button>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Source -->
					<div class="mt-5">
						<span class="mb-2 block text-[10px] font-medium uppercase tracking-[.14em] text-islamic-dim">{translation.drawer.source}</span>
						<div class="rounded-lg border border-islamic-line bg-islamic-panel px-4 py-3">
							<div class="text-[12px] text-islamic-text">{drawerItem.contributorName}</div>
						</div>
					</div>

					<!-- Import Examples -->
					<div class="mt-6">
						<span class="mb-3 block text-[10px] font-medium uppercase tracking-[.14em] text-islamic-dim">{translation.drawer.import}</span>
						
						<!-- React -->
						<div class="mb-3">
							<div class="mb-1 flex items-center justify-between">
								<span class="text-[10px] font-medium text-islamic-muted">React / Next.js</span>
								<button 
									type="button" 
									data-copy={drawerItem.frameworkExamples.react}
									class="cursor-pointer rounded px-2 py-1 text-[9px] font-medium text-islamic-green transition hover:bg-islamic-green/10"
								>
									{translation.drawer.copy}
								</button>
							</div>
							<pre class="overflow-x-auto rounded-lg border border-islamic-line bg-black/20 p-3 text-[10px] leading-relaxed text-islamic-muted"><code>{drawerItem.frameworkExamples.react}</code></pre>
						</div>

						<!-- Vue -->
						<div class="mb-3">
							<div class="mb-1 flex items-center justify-between">
								<span class="text-[10px] font-medium text-islamic-muted">Vue / Nuxt</span>
								<button 
									type="button" 
									data-copy={drawerItem.frameworkExamples.vue}
									class="cursor-pointer rounded px-2 py-1 text-[9px] font-medium text-islamic-green transition hover:bg-islamic-green/10"
								>
									{translation.drawer.copy}
								</button>
							</div>
							<pre class="overflow-x-auto rounded-lg border border-islamic-line bg-black/20 p-3 text-[10px] leading-relaxed text-islamic-muted"><code>{drawerItem.frameworkExamples.vue}</code></pre>
						</div>

						<!-- Svelte -->
						<div class="mb-3">
							<div class="mb-1 flex items-center justify-between">
								<span class="text-[10px] font-medium text-islamic-muted">Svelte / SvelteKit</span>
								<button 
									type="button" 
									data-copy={drawerItem.frameworkExamples.svelte}
									class="cursor-pointer rounded px-2 py-1 text-[9px] font-medium text-islamic-green transition hover:bg-islamic-green/10"
								>
									{translation.drawer.copy}
								</button>
							</div>
							<pre class="overflow-x-auto rounded-lg border border-islamic-line bg-black/20 p-3 text-[10px] leading-relaxed text-islamic-muted"><code>{drawerItem.frameworkExamples.svelte}</code></pre>
						</div>

						<!-- Vanilla -->
						<div>
							<div class="mb-1 flex items-center justify-between">
								<span class="text-[10px] font-medium text-islamic-muted">Vanilla JS / HTML</span>
								<button 
									type="button" 
									data-copy={drawerItem.frameworkExamples.vanilla}
									class="cursor-pointer rounded px-2 py-1 text-[9px] font-medium text-islamic-green transition hover:bg-islamic-green/10"
								>
									{translation.drawer.copy}
								</button>
							</div>
							<pre class="overflow-x-auto rounded-lg border border-islamic-line bg-black/20 p-3 text-[10px] leading-relaxed text-islamic-muted"><code>{drawerItem.frameworkExamples.vanilla}</code></pre>
						</div>
					</div>

					<!-- Additional Info -->
					<div class="mt-6 flex flex-wrap gap-4 text-[11px]">
						<a href="/{locale}/docs/usage" class="text-islamic-green transition hover:underline">
							{translation.drawer.usageGuide} →
						</a>
						<a href="/{locale}/sources" class="text-islamic-green transition hover:underline">
							{translation.drawer.sourcePolicy} →
						</a>
					</div>
				</div>
			</aside>
		</div>
	{/if}

	<!-- Search Modal -->
	{#if searchOpen}
		<!-- search overlay: bg-black/40 px-4 backdrop-blur-[4px] -->
		<SearchModal onclose={() => searchOpen = false} onopenIcon={(name) => { drawerName = name; searchOpen = false; }} />
	{/if}

	<!-- Toast -->
	{#if toastMsg}
		<div class="pointer-events-none fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-xl bg-islamic-text px-4 py-2.5 text-[10px] font-bold text-islamic-bg shadow-2xl" role="status" aria-live="polite">
			{toastMsg}
		</div>
	{/if}
	
	<!-- Salam Modal -->
	<SalamModal />
</div>
