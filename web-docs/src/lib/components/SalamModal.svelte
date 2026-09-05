<script lang="ts">
	import { onMount } from 'svelte';
	
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
			onclick={(e) => e.stopPropagation()}
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
			<div class="mb-6 text-5xl" role="img" aria-label="Islamic symbol">☪️</div>
			<h2 id="salam-title" class="mb-3 font-display text-2xl tracking-tight text-islamic-green">
				Assalamualaikum
			</h2>
			<p class="mb-2 text-base leading-7 text-islamic-text">
				Peace be upon you
			</p>
			<p class="text-sm leading-6 text-islamic-muted">
				Welcome to Atsarul Mujahidin. May your visit be blessed and beneficial.
			</p>
			
			<!-- Footer -->
			<div class="mt-8 flex flex-col gap-3">
				<button
					type="button"
					onclick={closeModal}
					class="inline-flex h-11 items-center justify-center rounded-xl bg-islamic-green px-5 text-sm font-semibold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-lg"
				>
					Wa'alaikumussalam
				</button>
				<p class="text-[10px] text-islamic-dim">
					This message appears once per day
				</p>
			</div>
		</div>
	</div>
{/if}
