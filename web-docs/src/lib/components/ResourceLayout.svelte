<script lang="ts">
	import { MAX } from '$lib/site';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	
	interface Props {
		title: string;
		label: string;
		children: any;
	}
	
	let { title, label, children }: Props = $props();
	
	const pathname = $derived(page.url.pathname.replace(/\/$/, ''));
	
	// Extract headings for TOC
	let headings = $state<{id: string; text: string}[]>([]);
	let activeHeading = $state('');
	
	// Resource navigation items
	const resourceNav = [
		{ label: 'About', items: [
			{ label: 'License', href: '/en/license' },
			{ label: 'Community', href: '/en/community' },
			{ label: 'Code of Conduct', href: '/en/code-of-conduct' },
			{ label: 'Brand logo statement', href: '/en/brand' },
			{ label: 'Contributing', href: '/en/contributing' }
		]},
		{ label: 'Designing Icons', items: [
			{ label: 'Icon Design Principles', href: '/en/design-principles' },
			{ label: 'Designing in Illustrator', href: '/en/design-illustrator' },
			{ label: 'Designing in Inkscape', href: '/en/design-inkscape' },
			{ label: 'Designing in Figma', href: '/en/design-figma' },
			{ label: 'Designing in Affinity Designer', href: '/en/design-affinity' }
		]}
	];
	
	onMount(() => {
		const container = document.querySelector('.resource-content');
		if (container) {
			const h2s = container.querySelectorAll('h2');
			const allHeadings: {id: string; text: string}[] = [];
			
			h2s.forEach((h) => {
				const id = h.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
				h.id = id;
				allHeadings.push({ id, text: h.textContent || '' });
			});
			
			headings = allHeadings;
			
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeHeading = entry.target.id;
					}
				});
			}, { rootMargin: '-100px 0px -66% 0px' });
			
			h2s.forEach((h) => observer.observe(h));
			
			return () => observer.disconnect();
		}
	});
</script>

<div class="{MAX} pt-32 pb-16 sm:pt-36 sm:pb-24">
	<div class="grid gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[200px_minmax(0,1fr)_200px]">
		<!-- Left sidebar - Resource navigation -->
		<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit">
			{#each resourceNav as section (section.label)}
				<div class="mb-6">
					<div class="mb-2 text-[9px] font-semibold uppercase tracking-[.15em] text-islamic-dim">{section.label}</div>
					<div class="grid gap-1">
						{#each section.items as item (item.href)}
							<a
								href={item.href}
								aria-current={pathname === item.href ? 'page' : undefined}
								class="cursor-pointer rounded-lg px-3 py-2 text-[11px] transition {pathname === item.href ? 'bg-islamic-green/8 text-islamic-green' : 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"
							>{item.label}</a>
						{/each}
					</div>
				</div>
			{/each}
		</aside>

		<!-- Main content -->
		<div class="min-w-0">
			<div class="gsap-container mb-10">
				<span class="text-[9px] font-semibold uppercase tracking-[.2em] text-islamic-green">{label}</span>
				<h1 class="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
			</div>
			
			<div class="resource-content">
				{@render children()}
			</div>
		</div>

		<!-- Right sidebar - On this page TOC -->
		{#if headings.length > 0}
			<aside class="hidden xl:block xl:sticky xl:top-28 xl:h-fit">
				<div class="mb-3 text-[9px] font-semibold uppercase tracking-[.18em] text-islamic-dim">On this page</div>
				<div class="space-y-1">
					{#each headings as heading (heading.id)}
						<a
							href="#{heading.id}"
							class="block cursor-pointer border-l-2 py-1.5 pl-3 text-[11px] transition {activeHeading === heading.id ? 'border-islamic-green text-islamic-green' : 'border-transparent text-islamic-dim hover:text-islamic-text'}"
						>
							{heading.text}
						</a>
					{/each}
				</div>
			</aside>
		{/if}
	</div>
</div>

<style>
	:global(.resource-content) {
		color: rgb(164 174 168 / 0.7);
	}
	:global(.resource-content h2) {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		color: rgb(228 234 230);
	}
	:global(.resource-content h3) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-family: var(--font-display);
		font-size: 1.25rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		color: rgb(228 234 230);
	}
	:global(.resource-content p) {
		margin-bottom: 1.5rem;
		font-size: 0.9375rem;
		line-height: 1.75;
	}
	:global(.resource-content ul) {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
		list-style-type: disc;
	}
	:global(.resource-content li) {
		margin-bottom: 0.75rem;
		font-size: 0.9375rem;
		line-height: 1.75;
	}
	:global(.resource-content a) {
		color: rgb(115 224 174);
		text-decoration: underline;
		text-decoration-color: rgb(115 224 174 / 0.3);
		text-underline-offset: 4px;
		transition: text-decoration-color 0.2s;
	}
	:global(.resource-content a:hover) {
		text-decoration-color: rgb(115 224 174);
	}
	:global(.resource-content code) {
		border-radius: 0.375rem;
		background-color: rgb(14 22 17);
		padding: 0.125rem 0.375rem;
		font-size: 0.8125rem;
		color: rgb(164 174 168);
	}
	:global(.resource-content pre) {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		overflow-x: auto;
		border-radius: 0.75rem;
		border: 1px solid rgb(50 132 96 / 0.15);
		background-color: rgb(0 0 0 / 0.3);
		padding: 1.25rem;
		font-size: 0.8125rem;
		line-height: 1.5;
	}
	:global(.resource-content strong) {
		font-weight: 600;
		color: rgb(228 234 230);
	}
	:global(.resource-content blockquote) {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		border-left: 2px solid rgb(115 224 174);
		padding-left: 1.5rem;
		font-style: italic;
		color: rgb(164 174 168);
	}
	:global(.resource-card) {
		margin-bottom: 1.5rem;
		border-radius: 0.75rem;
		border: 1px solid rgb(50 132 96 / 0.15);
		background-color: rgb(14 22 17);
		padding: 2rem;
	}
	:global(.resource-grid) {
		margin-top: 2rem;
		margin-bottom: 2rem;
		display: grid;
		gap: 1rem;
	}
	@media (min-width: 640px) {
		:global(.resource-grid) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	:global(.resource-box) {
		border-radius: 0.5rem;
		border: 1px solid rgb(50 132 96 / 0.15);
		background-color: rgb(0 0 0 / 0.2);
		padding: 1.25rem;
	}
</style>
