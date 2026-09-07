<script lang="ts">
	import '../global.css';
	import { localeStore } from '$lib/locale.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		localeStore.init();
	});
</script>

{@render children()}
