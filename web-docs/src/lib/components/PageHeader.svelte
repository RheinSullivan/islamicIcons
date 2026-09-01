<script lang="ts">
  let { eyebrow = 'Overview', title = 'Islamic Icons', description = '' } = $props();
</script>

<div class="mb-8">
  <div class="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#73e0ae]">{eyebrow}</div>
  <h1 class="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">{title}</h1>
  {#if description}
    <p class="mt-4 max-w-3xl text-base leading-8 text-[#a9bdb1]">{description}</p>
  {/if}
</div>
