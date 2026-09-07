<script lang="ts">
  import { categoryMeta, icons, pretty } from '$lib/site';

  let { category }: { category: string } = $props();
  let count = $derived(icons.filter((item) => item.category === category).length);
</script>

<div class="rounded-[1.5rem] border border-white/10 bg-[#0b1713] p-5">
  <div class="flex items-center justify-between">
    <div class="text-sm font-medium text-[#73e0ae]">{pretty(category)}</div>
    <div class="text-[10px] uppercase tracking-[0.18em] text-[#7d9387]">{count}</div>
  </div>
  <p class="mt-4 text-sm leading-7 text-[#a9bdb1]">{categoryMeta[category] ?? 'Islamic visual symbols and community contributions.'}</p>
</div>
