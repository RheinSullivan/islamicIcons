<script lang="ts">
  import type { CatalogItem } from '$lib/site';
  import { pretty } from '$lib/site';
  import DynamicIcon from '$lib/components/DynamicIcon.svelte';

  let { item }: { item: CatalogItem } = $props();
</script>

<article class="group rounded-[1.5rem] border border-white/10 bg-[#0b1713] p-4 transition hover:-translate-y-1 hover:border-white/20">
  <div class="grid aspect-square place-items-center rounded-[1.25rem] border border-white/10 bg-[#0d1d16] p-6">
    <DynamicIcon {item} variant="fill" size={80} class="icon-white" />
  </div>
  <div class="mt-4">
    <div class="text-sm font-medium text-white">{item.title}</div>
    <div class="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#7d9387]">{pretty(item.category)}</div>
  </div>
</article>
