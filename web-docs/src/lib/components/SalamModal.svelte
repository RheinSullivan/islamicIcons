<script lang="ts">
	import { onMount } from 'svelte';
	// import CrescentStarFrame from 'atsarul-mujahidin/svelte/fill/CrescentStarFrame.svelte';
	
	let showModal = $state(false);
	let dialogEl = $state<HTMLDivElement | null>(null);
	
	onMount(() => {
		// Check if user has already seen the modal today
		const lastSeen = localStorage.getItem('salamModalLastSeen');
		const today = new Date().toDateString();
		
		if (lastSeen !== today) {
			setTimeout(() => {
				showModal = true;
				// Focus the dialog when it opens
				if (dialogEl) {
					dialogEl.focus();
				}
			}, 1000);
		}
	});
	
	function closeModal() {
		showModal = false;
		localStorage.setItem('salamModalLastSeen', new Date().toDateString());
	}
	
	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	}
	
	function handleBackdropKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			closeModal();
		}
	}
	
	function handleDialogKeydown(e: KeyboardEvent) {
		// Prevent event propagation to backdrop
		e.stopPropagation();
	}
</script>

{#if showModal}
	<div 
		class="fixed inset-0 z-[200] grid place-items-center bg-black/60 px-4 backdrop-blur-sm"
		onclick={handleBackdropClick}
		onkeydown={handleBackdropKeydown}
		role="presentation"
	>
		<div 
			role="dialog"
			aria-modal="true"
			aria-labelledby="salam-title"
			tabindex="0"
			class="relative w-full max-w-md rounded-2xl border border-islamic-line bg-islamic-bg p-8 text-center shadow-2xl"
			onclick={(clickEvent) => clickEvent.stopPropagation()}
			onkeydown={handleDialogKeydown}
			bind:this={dialogEl}
		>
			<!-- Close button -->
			<button
				type="button"
				onclick={closeModal}
				class="absolute right-4 top-4 flex size-8 items-center justify-center rounded-lg text-islamic-dim transition hover:bg-white/5 hover:text-islamic-text"
				aria-label="Close"
			>
				<svg viewBox="0 0 24 24" class="size-5 fill-none stroke-current stroke-2">
					<path d="M18 6 6 18M6 6l12 12"/>
				</svg>
			</button>
			
			<!-- Content -->
			<div class="mb-6 flex justify-center text-islamic-green" role="img" aria-label="Islamic symbol">
				<!-- Simple Crescent Star Icon -->
				<svg viewBox="0 0 24 24" class="size-16 fill-current" xmlns="http://www.w3.org/2000/svg">
					<path d="M21 12.7C21 17.5 17.1 21 12.3 21 7.8 21 4.1 17.9 3.2 13.7 5.7 15.5 8.8 16.5 12.2 16.5 18.2 16.5 23 11.7 23 5.7 23 4.6 22.8 3.6 22.5 2.6 22 3.4 21.6 4.2 21.3 5.1 21.7 7.3 21 9.5 21 12.7ZM8 6 9.5 7.5 11 6.5 10.5 8.5 12 10 10 9.5 9 11 9.5 9 7.5 8 9 7.5 8 6Z"/>
				</svg>
			</div>
			<h2 id="salam-title" class="mb-1 font-display text-3xl tracking-tight text-islamic-green">
				السَّلاَمُ عَلَيْكُمْ
			</h2>
			<p class="mb-2 text-lg font-medium leading-7 text-islamic-text">
				Assalamualaikum Warahmatullahi Wabarakatuh
			</p>
			<p class="text-sm leading-6 text-islamic-muted">
				Peace, mercy, and blessings of Allah be upon you. Welcome to Atsarul Mujahidin. May your visit be blessed and beneficial.
			</p>
			
			<!-- Footer -->
			<div class="mt-8 flex flex-col gap-3">
				<button
					type="button"
					onclick={closeModal}
					class="inline-flex h-11 items-center justify-center rounded-xl bg-islamic-green px-5 text-sm font-semibold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					وَعَلَيْكُمُ السَّلاَمُ (Wa'alaikumussalam)
				</button>
				<p class="text-[10px] text-islamic-dim">
					This message appears once per day • Publisher: <a href="https://vyagranexus.rheinsullivan.web.id/in" target="_blank" rel="noopener noreferrer" class="text-islamic-green hover:underline">Vyagra Nexus™</a>
				</p>
			</div>
		</div>
	</div>
{/if}
