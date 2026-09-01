<script lang="ts">
	import '../global.css';
	import logo from '$lib/assets/logo-islamic-icons.svg';
	import { page } from '$app/state';
	import {
		navItems,
		repoUrl,
		icons,
		categories,
		pretty,
		esc,
		pathFor,
		icon,
		sourceForItem,
		chooseVariant,
		variantName,
		sourceLabel,
		MAX,
		camel
	} from '$lib/site';
	import { docs as docsContent, richBody } from '$lib/docs-content';
	import SearchModal from '$lib/components/SearchModal.svelte';
	import { onMount, tick } from 'svelte';

	let { children } = $props();

	const pathname = $derived(page.url.pathname.replace(/\/$/, '') || '/');

	let searchOpen = $state(false);
	let drawerName: string | null = $state(null);
	let drawerSource: string | null = $state(null);
	let mobileOpen = $state(false);
	let currentVariant = $state('fill');
	let toastMessage: string | null = $state(null);
	let toastTimer: ReturnType<typeof setTimeout> | null = null;

	const allIcons = $derived(icons);
	const externalSources = $derived(icons);

	const sources: Array<{ examples: Array<{ name: string; url: string; license: string }> }> = $derived(
		[] as any
	);

	const drawerItem = $derived.by(() => {
		if (!drawerName) return null;
		const item = icon(drawerName);
		if (!item) return null;
		const sourceId =
			drawerSource && item.sources.some((s) => s.id === drawerSource)
				? drawerSource
				: sourceForItem(item)?.id;
		const source = item.sources.find((s) => s.id === sourceId) || item.sources[0];
		const vars = [
			...new Set([
				...(source?.variants || []),
				...(source?.solidVariants || []).map(() => 'solid')
			])
		].filter((v) => ['fill', 'outline', 'color', 'original', 'alternate'].includes(v));
		const variant = chooseVariant(source, currentVariant);
		const path = pathFor(item, variant, source?.id);
		const imp = `import { ${camel(item.name)} } from "islamic-icons/${item.category}"`;
		return { item, source, variant, path, vars, imp };
	});

	function openSearch() {
		searchOpen = true;
	}
	function closeSearch() {
		searchOpen = false;
	}
	function openDrawer(name: string) {
		drawerName = name;
		drawerSource = null;
	}
	function closeDrawer() {
		drawerName = null;
		drawerSource = null;
	}
	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function showToast(message: string) {
		toastMessage = message;
		if (toastTimer) clearTimeout(toastTimer);
		toastTimer = setTimeout(() => {
			toastMessage = null;
		}, 1600);
	}

	async function copyText(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			showToast('Copied to clipboard');
		} catch {
			showToast('Copy unavailable - select the code manually.');
		}
	}

	function onGlobalClick(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const openIcon = target.closest('[data-open]') as HTMLElement | null;
		if (openIcon) {
			openDrawer(openIcon.dataset.open!);
			return;
		}
		const closeBtn = target.closest('[data-close]') as HTMLElement | null;
		if (closeBtn) {
			closeDrawer();
			return;
		}
		const copyBtn = target.closest('[data-copy]') as HTMLElement | null;
		if (copyBtn) {
			copyText(copyBtn.dataset.copy!);
			return;
		}
		const searchTrigger = target.closest('[data-search]') as HTMLElement | null;
		if (searchTrigger) {
			openSearch();
			return;
		}
		const mobileToggle = target.closest('[data-mobile-toggle]') as HTMLElement | null;
		if (mobileToggle) {
			toggleMobile();
			return;
		}
		const drawerSourceBtn = target.closest('[data-drawer-source]') as HTMLElement | null;
		if (drawerSourceBtn) {
			drawerSource = drawerSourceBtn.dataset.drawerSource!;
			return;
		}
		const drawerVarBtn = target.closest('[data-drawer-var]') as HTMLElement | null;
		if (drawerVarBtn) {
			currentVariant = drawerVarBtn.dataset.drawerVar!;
			return;
		}
	}

	function isActive(key: string): boolean {
		const p = pathname;
		if (key === 'docs') return p.startsWith('/docs');
		return p === `/${key}` || p.startsWith(`/${key}/`);
	}

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				openSearch();
			}
			if (e.key === 'Escape') {
				if (searchOpen) closeSearch();
				if (drawerName) closeDrawer();
			}
		}
		function handleOpenDrawer(e: Event) {
			const detail = (e as CustomEvent<string>).detail;
			if (typeof detail === 'string') openDrawer(detail);
		}
		function handleOpenSearch() {
			openSearch();
		}
		function handleCategorySelected(e: Event) {
			const detail = (e as CustomEvent<string>).detail;
			if (typeof detail === 'string') {
				drawerName = null;
			}
		}
		window.addEventListener('keydown', handleKeydown);
		document.addEventListener('click', onGlobalClick);
		window.addEventListener('open-drawer', handleOpenDrawer);
		window.addEventListener('open-search', handleOpenSearch);
		window.addEventListener('category-selected', handleCategorySelected);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
			document.removeEventListener('click', onGlobalClick);
			window.removeEventListener('open-drawer', handleOpenDrawer);
			window.removeEventListener('open-search', handleOpenSearch);
			window.removeEventListener('category-selected', handleCategorySelected);
		};
	});

	$effect(() => {
		void pathname;
		closeDrawer();
		mobileOpen = false;
		searchOpen = false;
	});

	$effect(() => {
		if (typeof window === 'undefined') return;
		void pathname;
		void drawerName;
		void drawerSource;
		void currentVariant;
		void mobileOpen;
		void searchOpen;
		tick().then(() => animatePage());
	});

	function animatePage() {
		const gsap = (window as any).gsap;
		if (!gsap) return;
		const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;
		const ctx = gsap.context(() => {
			const containers = document.querySelectorAll('.gsap-container');
			if (containers.length) {
				gsap.from(containers, {
					opacity: 0,
					y: 28,
					duration: 0.7,
					ease: 'power3.out',
					stagger: 0.08,
					clearProps: 'transform'
				});
			}
			const words = document.querySelectorAll('.hero-word');
			if (words.length) {
				gsap.from(words, {
					opacity: 0,
					y: 34,
					rotateX: -55,
					duration: 0.72,
					ease: 'power3.out',
					stagger: 0.035,
					delay: 0.08,
					transformOrigin: '50% 100%',
					clearProps: 'transform'
				});
			}
			document.querySelectorAll('.gsap-on-scroll:not([data-gsap-ready])').forEach((el) => {
				(el as HTMLElement).dataset.gsapReady = '1';
				const observer = new IntersectionObserver(
					(entries) => {
						for (const entry of entries) {
							if (entry.isIntersecting) {
								gsap.fromTo(
									entry.target,
									{ opacity: 0, y: 22 },
									{ opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform' }
								);
								observer.unobserve(entry.target);
							}
						}
					},
					{ threshold: 0.08 }
				);
				observer.observe(el);
			});
		});
		return () => ctx.revert();
	}
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={logo} />
</svelte:head>

<div class="min-h-screen overflow-x-clip bg-islamic-bg text-islamic-text">
	<div
		class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(50,132,96,.09),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(215,182,107,.045),transparent_25%)]"
	></div>

	<header
		class="fixed inset-x-0 top-0 z-50 border-b border-islamic-line bg-islamic-bg/88 backdrop-blur-xl supports-[backdrop-filter]:bg-islamic-bg/72"
	>
		<div class="{MAX} relative flex h-20 items-center justify-between gap-4">
			<a href="/" aria-label="Islamic Icons home" class="group flex shrink-0 items-center gap-1">
				<span class="grid size-12 shrink-0 place-items-center overflow-hidden">
					<img src={logo} alt="Islamic Icons logo" class="size-full object-contain" />
				</span>
				<span class="hidden sm:block">
					<strong class="block font-display text-base font-semibold tracking-tight text-islamic-text">
						Islamic Icons
					</strong>
					<small class="block text-[9px] uppercase tracking-[.18em] text-islamic-dim"
						>🇮🇩 Free Palestine  🇵🇸</small
					>
				</span>
			</a>

			<nav
				class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
				aria-label="Primary"
			>
				{#each navItems as item (item.key)}
					<a
						href={item.href}
						aria-current={isActive(item.key) ? 'page' : 'false'}
						class="flex h-20 items-center border-b-2 border-transparent px-3 text-[13px] font-medium transition {isActive(item.key)
							? 'border-islamic-green text-islamic-text'
							: 'text-islamic-muted hover:text-islamic-text'}"
					>
						{item.label}
					</a>
				{/each}
			</nav>

			<div class="ml-auto flex items-center gap-2">
				<button
					type="button"
					onclick={openSearch}
					class="hidden h-11 items-center gap-3 rounded-xl border border-islamic-line bg-white/2 px-3.5 text-[12px] text-islamic-muted transition hover:border-islamic-line-strong hover:bg-white/4 hover:text-islamic-text md:flex"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]"
						><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg
					>
					<span>Search icons</span>
					<kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] tracking-[.08em] text-islamic-dim"
						>CTRL + K</kbd
					>
				</button>
				<a
					href={repoUrl}
					target="_blank"
					rel="noreferrer"
					class="hidden h-11 items-center gap-2 rounded-xl px-3 text-[12px] font-medium text-islamic-muted transition hover:bg-white/5 hover:text-islamic-text sm:flex"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-current"
						><path
							d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
						/></svg
					>
					<span>Github</span>
				</a>
				<button
					type="button"
					data-mobile-toggle
					aria-expanded={mobileOpen}
					aria-controls="mobile-nav"
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					class="grid size-11 place-items-center rounded-xl border border-islamic-line bg-white/2 text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text md:hidden"
				>
					{#if mobileOpen}
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]"
							><path d="m6 6 12 12M18 6 6 18" /></svg
						>
					{:else}
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]"
							><path d="M4 7h16M4 12h16M4 17h16" /></svg
						>
					{/if}
				</button>
			</div>
		</div>

		<div
			id="mobile-nav"
			data-mobile-panel
			class="{mobileOpen ? '' : 'hidden'} border-t border-islamic-line bg-islamic-bg/98 md:hidden"
		>
			<div class="{MAX} grid gap-1 py-3">
				{#each navItems as item (item.key)}
					<a
						href={item.href}
						class="flex h-11 items-center border-b-2 border-transparent px-3 text-[13px] font-medium transition {isActive(
							item.key
						)
							? 'border-islamic-green text-islamic-text'
							: 'text-islamic-muted hover:text-islamic-text'}">{item.label}</a
					>
				{/each}
				<button
					type="button"
					data-search
					class="mt-2 flex h-11 items-center justify-between rounded-xl border border-islamic-line bg-white/2 px-3.5 text-left text-[12px] text-islamic-muted"
				>
					<span class="flex items-center gap-3">
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]"
							><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg
						>
						Search icons
					</span>
					<kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim"
						>CTRL + K</kbd
					>
				</button>
				<a
					href={repoUrl}
					target="_blank"
					rel="noreferrer"
					class="flex h-11 items-center gap-2 rounded-xl px-3 text-[12px] font-medium text-islamic-muted"
				>
					<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-current"
						><path
							d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
						/></svg
					>
					Github
				</a>
			</div>
		</div>
	</header>

	<main class="pt-20">
		{@render children()}
	</main>

	<footer class="mt-24 border-t border-islamic-line bg-black/12">
		<div class="{MAX} py-14">
			<div class="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
				<div>
					<div class="flex items-center gap-3">
						<img src={logo} alt="Islamic Icons logo" class="size-8 shrink-0 object-contain" />
						<span class="font-display text-lg font-semibold text-islamic-text">Islamic Icons</span>
					</div>
					<p class="mt-3 max-w-xs text-[11px] text-islamic-dim">
						Framework-agnostic Islamic SVG/WebP icons, organized for real projects.
					</p>
					<span class="mt-4 block text-[10px] text-islamic-muted">Islam Community</span>
				</div>
				<div class="grid content-start gap-2">
					<b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">Explore</b>
					<a href="/icons" class="text-[11px] text-islamic-dim hover:text-islamic-text">Icons</a>
					<a href="/categories" class="text-[11px] text-islamic-dim hover:text-islamic-text">Categories</a>
					<a href="/sources" class="text-[11px] text-islamic-dim hover:text-islamic-text">Sources</a>
					<a href="/donations" class="text-[11px] text-islamic-dim hover:text-islamic-text">Donations</a>
				</div>
				<div class="grid content-start gap-2">
					<b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">Develop</b>
					<a href="/docs/installation" class="text-[11px] text-islamic-dim hover:text-islamic-text"
						>Installation</a
					>
					<a href="/docs/frameworks" class="text-[11px] text-islamic-dim hover:text-islamic-text"
						>Frameworks</a
					>
					<a href="/contributing" class="text-[11px] text-islamic-dim hover:text-islamic-text"
						>Contributing</a
					>
				</div>
				<div class="grid content-start gap-2">
					<b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">Principles</b>
					<span class="text-[11px] text-islamic-dim">Local assets</span>
					<span class="text-[11px] text-islamic-dim">Attribution first</span>
					<span class="text-[11px] text-islamic-dim">No runtime API</span>
				</div>
			</div>
			<div
				class="mt-10 flex flex-col gap-2 border-t border-islamic-line pt-5 text-[10px] text-islamic-dim sm:flex-row sm:items-center sm:justify-between"
			>
				<span>Copyright © 2026 Islamic Icons. All right recevied.</span>
				<span>Vyagra Nexus™ | Indonesia</span>
			</div>
		</div>
	</footer>

	{#if searchOpen}
		<SearchModal onclose={closeSearch} onopenIcon={openDrawer} />
	{/if}

	{#if drawerItem}
		<div class="fixed inset-0 z-[90]" data-drawer-root>
			<button
				type="button"
				data-close
				aria-label="Close details"
				class="absolute inset-0 h-full w-full border-0 bg-black/65 backdrop-blur-sm"
			></button>
			<aside
				class="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-islamic-line-strong bg-[#09150f] shadow-[-30px_0_90px_rgba(0,0,0,.45)]"
			>
				<div
					class="sticky top-0 z-10 flex items-start justify-between border-b border-islamic-line bg-[#09150f]/90 p-5 backdrop-blur-xl"
				>
					<div>
						<span class="text-[9px] uppercase tracking-[.16em] text-islamic-green"
							>{pretty(drawerItem.item.category)}</span
						>
						<h2 class="mt-2 font-display text-xl tracking-[-.03em]">{drawerItem.item.title}</h2>
					</div>
					<button
						type="button"
						data-close
						aria-label="Close"
						class="grid size-9 place-items-center rounded-lg border border-islamic-line text-islamic-muted hover:text-islamic-text"
					>
						<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]"
							><path d="m6 6 12 12M18 6 6 18" /></svg
						>
					</button>
				</div>
				<div class="p-5 sm:p-6">
					<div
						class="relative grid aspect-square place-items-center overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel"
					>
						<img class="size-[72%] object-contain" src={drawerItem.path} alt={drawerItem.item.title} />
						<span
							class="absolute bottom-3 left-3 rounded-full border border-islamic-line bg-islamic-bg px-2 py-1 text-[9px] text-islamic-dim"
							>{sourceLabel(drawerItem.source?.id || '')} · {variantName(drawerItem.variant)}</span
						>
					</div>
					<div class="mt-6">
						<span class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Source</span>
						<div class="flex flex-wrap gap-2">
							{#each drawerItem.item.sources as s (s.id)}
								<button
									type="button"
									data-drawer-source={s.id}
									class="rounded-lg border px-3 py-2 text-[10px] {s.id === drawerItem.source?.id
										? 'border-islamic-green/30 bg-islamic-green/8 text-islamic-green'
										: 'border-islamic-line text-islamic-muted hover:text-islamic-text'}">{s.label}</button
								>
							{/each}
						</div>
					</div>
					<div class="mt-6">
						<span class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Variant</span>
						<div class="flex flex-wrap gap-2">
							{#each drawerItem.vars as v (v)}
								<button
									type="button"
									data-drawer-var={v}
									class="rounded-lg border px-3 py-2 text-[10px] {v === drawerItem.variant
										? 'border-islamic-green/30 bg-islamic-green/8 text-islamic-green'
										: 'border-islamic-line text-islamic-muted hover:text-islamic-text'}">{variantName(v)}</button
								>
							{/each}
						</div>
					</div>
					<div class="mt-6">
						<span class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Import</span>
						<div class="flex gap-2 rounded-xl border border-islamic-line bg-black/20 p-2">
							<code
								class="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap p-2 text-[10px] text-islamic-muted"
								>{drawerItem.imp}</code
							>
							<button
								type="button"
								data-copy={drawerItem.imp}
								class="shrink-0 rounded-lg bg-islamic-green px-3 text-[10px] font-bold text-islamic-bg"
								>Copy</button
							>
						</div>
					</div>
					<div class="mt-6 grid grid-cols-2 gap-2">
						<div class="rounded-xl border border-islamic-line p-4">
							<span class="block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Category</span>
							<b class="mt-2 block text-xs">{pretty(drawerItem.item.category)}</b>
						</div>
						<div class="rounded-xl border border-islamic-line p-4">
							<span class="block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Sources</span>
							<b class="mt-2 block text-xs">{drawerItem.item.sources.length}</b>
						</div>
					</div>
					<div class="mt-6">
						<span class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Asset path</span>
						<code
							class="block break-all rounded-xl border border-islamic-line bg-black/20 p-4 text-[10px] leading-6 text-islamic-muted"
							>{drawerItem.path}</code
						>
					</div>
					<div class="mt-6 flex gap-4 text-[10px] text-islamic-green">
						<a href="/docs/usage">Usage guide →</a>
						<a href="/sources">Source policy →</a>
					</div>
				</div>
			</aside>
		</div>
	{/if}

	<div
		id="toast"
		class="pointer-events-none fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 rounded-xl bg-islamic-text px-4 py-2.5 text-[10px] font-bold text-islamic-bg shadow-2xl transition duration-200 {toastMessage
			? 'translate-y-0 opacity-100'
			: 'translate-y-3 opacity-0'}"
	>
		{toastMessage || ''}
	</div>
</div>


