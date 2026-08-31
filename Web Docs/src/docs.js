(() => {
  const data = window.ISLAMIC_ICONS_DATA || [];
  const sources = window.ISLAMIC_ICONS_SOURCES || [];
  const app = () => document.querySelector('#app');
  const categories = [...new Set(data.map(i => i.category))].sort();
  const state = {
    q: '',
    category: 'all',
    variant: 'fill',
    source: 'all',
    drawer: null,
    drawerSource: null,
    mobileOpen: false,
  };

  const MAX = 'mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-8';
  const ASSET_ROOT = location.protocol === 'file:' ? '../Library/assets' : '/assets';
  const pretty = s => String(s ?? '').replace(/[-_]/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase());
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
  const camel = s => String(s).replace(/[-_]([a-z])/g, (_, c) => c.toUpperCase());
  const icon = name => data.find(i => i.name === name);
  const variantName = v => v === 'color' ? 'Colors' : pretty(v);
  const sourceLabel = id => ({ community: 'Community', erbasaran: 'Erbasaran', 'svg-repo': 'SVG Repo', 'mary-akveo': 'Mary Akveo', 'google-material': 'Google Material Icons', 'community-upload': 'Community Upload' }[id] || pretty(id));
  const sourceFor = (item) => {
    if (state.source !== 'all') return item.sources.find(s => s.id === state.source) || item.sources[0];
    return item.sources.find(s => s.id === 'community') || item.sources.find(s => s.id === 'erbasaran') || item.sources[0];
  };
  const variantsFor = source => source?.variants || [];
  const chooseVariant = (source, requested = state.variant) => {
    const vars = variantsFor(source);
    if (vars.includes(requested)) return requested;
    if (vars.includes('fill')) return 'fill';
    if (vars.includes('original')) return 'original';
    return vars[0] || 'original';
  };
  const pathFor = (item, variant = state.variant, sourceId = 'auto') => {
    const source = sourceId === 'auto' ? sourceFor(item) : item.sources.find(s => s.id === sourceId) || sourceFor(item);
    if (!source) return '';
    const v = chooseVariant(source, variant);
    if (source.id === 'community') return `${ASSET_ROOT}/icons/${item.category}/${item.name}/${v}.svg`;
    if (source.id === 'erbasaran') return `${ASSET_ROOT}/icons/${item.category}/${item.name}/sources/erbasaran/base/${v}.svg`;
    return `${ASSET_ROOT}/icons/${item.category}/${item.name}/sources/${source.id}/${v}.svg`;
  };

  function githubIcon() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-current"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.41 7.88 10.94.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>`;
  }
  function searchIcon() { return `<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.7]"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>`; }
  function menuIcon() { return `<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`; }
  function closeIcon() { return `<svg viewBox="0 0 24 24" aria-hidden="true" class="size-5 fill-none stroke-current stroke-[1.7]"><path d="m6 6 12 12M18 6 6 18"/></svg>`; }
  function arrowIcon() { return `<svg viewBox="0 0 24 24" aria-hidden="true" class="size-4 fill-none stroke-current stroke-[1.8]"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`; }

  function mark() {
    return `<a class="group flex shrink-0 items-center gap-1" href="#/" aria-label="Islamic Icons home">
      <span class="grid size-12 shrink-0 place-items-center overflow-hidden">
        <img src="./assets/logo-islamic-icons.svg" alt="Islamic Icons logo" class="size-full object-contain">
      </span>
      <span class="hidden sm:block">
        <strong class="block font-display text-base font-semibold tracking-tight text-islamic-text">
          Islamic Icons
        </strong>
        <small class="block text-[9px] uppercase tracking-[.18em] text-islamic-dim">🇮🇩 Free Palestine  🇵🇸</small>
      </span>
    </a>`;
  }

  function navLink(path, label, key, hash, mobile = false) {
    const active = key === 'docs' ? hash.startsWith('/docs') : hash.startsWith(`/${key}`);
    const height = mobile ? 'h-11' : 'h-20';
    return `<a href="#${path}" data-nav="${key}" aria-current="${active ? 'page' : 'false'}" class="flex ${height} items-center border-b-2 border-transparent px-3 text-[13px] font-medium transition ${active ? 'border-islamic-green text-islamic-text' : 'text-islamic-muted hover:text-islamic-text'}">${label}</a>`;
  }

  function header() {
    const hash = currentPath();
    return `<header class="fixed inset-x-0 top-0 z-50 border-b border-islamic-line bg-islamic-bg/88 backdrop-blur-xl supports-[backdrop-filter]:bg-islamic-bg/72">
      <div class="${MAX} relative flex h-20 items-center justify-between gap-4">
        ${mark()}
        <nav class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex" aria-label="Primary">${navLink('/icons','Icons','icons',hash)}${navLink('/categories','Categories','categories',hash)}${navLink('/docs','Docs','docs',hash)}${navLink('/sources','Sources','sources',hash)}${navLink('/donations','Donations','donations',hash)}</nav>
        <div class="ml-auto flex items-center gap-2">
          <button type="button" data-search class="hidden h-11 items-center gap-3 rounded-xl border border-islamic-line bg-white/2 px-3.5 text-[12px] text-islamic-muted transition hover:border-islamic-line-strong hover:bg-white/4 hover:text-islamic-text md:flex">${searchIcon()}<span>Search icons</span><kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] tracking-[.08em] text-islamic-dim">CTRL + K</kbd></button>
          <a href="https://github.com/" target="_blank" rel="noreferrer" class="hidden h-11 items-center gap-2 rounded-xl px-3 text-[12px] font-medium text-islamic-muted transition hover:bg-white/5 hover:text-islamic-text sm:flex">${githubIcon()}<span>Github</span></a>
          <button type="button" data-mobile-toggle aria-expanded="${state.mobileOpen}" aria-controls="mobile-nav" aria-label="${state.mobileOpen ? 'Close menu' : 'Open menu'}" class="grid size-11 place-items-center rounded-xl border border-islamic-line bg-white/2 text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text md:hidden">${state.mobileOpen ? closeIcon() : menuIcon()}</button>
        </div>
      </div>
      <div id="mobile-nav" data-mobile-panel class="${state.mobileOpen ? '' : 'hidden'} border-t border-islamic-line bg-islamic-bg/98 md:hidden">
        <div class="${MAX} grid gap-1 py-3">
          ${navLink('/icons','Icons','icons',hash,true)}${navLink('/categories','Categories','categories',hash,true)}${navLink('/docs','Docs','docs',hash,true)}${navLink('/sources','Sources','sources',hash,true)}${navLink('/donations','Donations','donations',hash,true)}
          <button type="button" data-search class="mt-2 flex h-11 items-center justify-between rounded-xl border border-islamic-line bg-white/2 px-3.5 text-left text-[12px] text-islamic-muted"> <span class="flex items-center gap-3">${searchIcon()} Search icons</span><kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim">CTRL + K</kbd></button>
          <a href="https://github.com/" target="_blank" rel="noreferrer" class="flex h-11 items-center gap-2 rounded-xl px-3 text-[12px] font-medium text-islamic-muted">${githubIcon()} Github</a>
        </div>
      </div>
    </header>`;
  }

  const sideLinks = [
    ['Overview','/docs'], ['Installation','/docs/installation'], ['Usage','/docs/usage'], ['Variants','/docs/variants'], ['Frameworks','/docs/frameworks'], ['Sources & attribution','/docs/sources'], ['Donations','/docs/donations'], ['Contributing','/contributing']
  ];

  function docsSide(active = '/docs') {
    return `<aside class="hidden lg:block lg:sticky lg:top-28 lg:h-fit"><div class="mb-5 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">Documentation</div><div class="grid gap-1">${sideLinks.map(([t,h]) => `<a href="#${h}" class="rounded-lg px-3 py-2.5 text-[12px] transition ${h === active ? 'bg-islamic-green/8 text-islamic-green' : 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}">${t}</a>`).join('')}</div><div class="mt-8 rounded-2xl border border-islamic-line bg-islamic-panel p-4"><span class="mb-3 grid size-8 place-items-center rounded-lg bg-islamic-green/10 text-islamic-green">✦</span><b class="text-[12px]">Contribute an icon</b><p class="mt-2 text-[11px] leading-6 text-islamic-dim">Drop in SVG/WebP metadata, then validate with Bun.</p><a href="#/contributing" class="mt-3 inline-flex text-[11px] font-medium text-islamic-green">Contribution guide →</a></div></aside>`;
  }

  function collectionSide() {
    return `<aside class="lg:sticky lg:top-28 lg:h-fit"><div class="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">Collection</div><div class="flex gap-1 overflow-x-auto pb-2 lg:grid lg:overflow-visible">${[['all','All icons',data.length], ...categories.map(c => [c,pretty(c),data.filter(i=>i.category===c).length])].map(([key,label,count]) => `<button type="button" data-cat="${esc(key)}" class="flex shrink-0 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-[12px] transition ${state.category === key && state.source === 'all' ? 'bg-islamic-green/9 text-islamic-green' : 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}"><span>${label}</span><span class="text-[10px] text-islamic-dim">${count}</span></button>`).join('')}</div><div class="my-5 h-px bg-islamic-line"></div><div class="mb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-dim">Sources</div><div class="grid gap-1">${[['community','Community'],['erbasaran','Ramazan Erbasaran'],['svg-repo','External / SVG Repo']].map(([id,label]) => `<button type="button" data-source-filter="${id}" class="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-[12px] transition ${state.source === id ? 'bg-islamic-green/9 text-islamic-green' : 'text-islamic-muted hover:bg-white/4 hover:text-islamic-text'}">${label}<span class="text-[10px] text-islamic-dim">${data.filter(i=>i.sources.some(s=>s.id===id)).length}</span></button>`).join('')}</div></aside>`;
  }

  function footer() {
    return `<footer class="mt-24 border-t border-islamic-line bg-black/12"><div class="${MAX} py-14"><div class="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]"><div><div class="flex items-center gap-3"><img src="./assets/logo-islamic-icons.svg" alt="Islamic Icons logo" class="size-8 shrink-0 object-contain"><span class="font-display text-lg font-semibold text-islamic-text">Islamic Icons</span></div><p class="mt-3 max-w-xs text-[11px] text-islamic-dim">Framework-agnostic Islamic SVG/WebP icons, organized for real projects.</p><span class="mt-4 block text-[10px] text-islamic-muted">Islam Community</span></div><div class="grid content-start gap-2"><b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">Explore</b><a href="#/icons" class="text-[11px] text-islamic-dim hover:text-islamic-text">Icons</a><a href="#/categories" class="text-[11px] text-islamic-dim hover:text-islamic-text">Categories</a><a href="#/sources" class="text-[11px] text-islamic-dim hover:text-islamic-text">Sources</a><a href="#/donations" class="text-[11px] text-islamic-dim hover:text-islamic-text">Donations</a></div><div class="grid content-start gap-2"><b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">Develop</b><a href="#/docs/installation" class="text-[11px] text-islamic-dim hover:text-islamic-text">Installation</a><a href="#/docs/frameworks" class="text-[11px] text-islamic-dim hover:text-islamic-text">Frameworks</a><a href="#/contributing" class="text-[11px] text-islamic-dim hover:text-islamic-text">Contributing</a></div><div class="grid content-start gap-2"><b class="mb-2 text-[10px] uppercase tracking-[.16em] text-islamic-text">Principles</b><span class="text-[11px] text-islamic-dim">Local assets</span><span class="text-[11px] text-islamic-dim">Attribution first</span><span class="text-[11px] text-islamic-dim">No runtime API</span></div></div><div class="mt-10 flex flex-col gap-2 border-t border-islamic-line pt-5 text-[10px] text-islamic-dim sm:flex-row sm:items-center sm:justify-between"><span>Copyright © 2026 Islamic Icons. All right recevied.</span><span>Vyagra Nexus™ | Indonesia</span></div></div></footer>`;
  }

  function shell(content, opts = {}) {
    return `<div class="min-h-screen overflow-x-clip bg-islamic-bg text-islamic-text"><div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_15%,rgba(50,132,96,.09),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(215,182,107,.045),transparent_25%)]"></div>${header()}${content}${footer()}${opts.drawer || ''}<div id="toast" class="pointer-events-none fixed bottom-6 left-1/2 z-[120] -translate-x-1/2 translate-y-3 rounded-xl bg-islamic-text px-4 py-2.5 text-[10px] font-bold text-islamic-bg opacity-0 shadow-2xl transition duration-200"></div></div>`;
  }

  function iconCard(item) {
    const source = sourceFor(item);
    const variant = chooseVariant(source, state.variant);
    const path = pathFor(item, variant, source?.id);
    return `<button type="button" class="gsap-on-scroll group w-full text-left" data-open="${esc(item.name)}"><span class="relative block aspect-square overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel transition duration-300 group-hover:-translate-y-1 group-hover:border-islamic-line-strong group-hover:bg-islamic-panel-2 group-hover:shadow-[0_22px_55px_rgba(0,0,0,.22)]"><span class="absolute left-3 top-3 z-10 rounded-full border border-islamic-line bg-islamic-bg/80 px-2 py-1 text-[8px] uppercase tracking-[.12em] text-islamic-dim backdrop-blur">${sourceLabel(source?.id)}</span><img class="size-full object-contain p-10 transition duration-500 group-hover:scale-105" src="${esc(path)}" alt="${esc(item.title)}" loading="lazy"></span><span class="mt-3 block"><strong class="block text-[13px] font-semibold text-islamic-text">${esc(item.title)}</strong><small class="mt-1 block text-[10px] text-islamic-dim">${pretty(item.category)} · ${variantName(variant)}</small></span></button>`;
  }

  function heroTitle(text) {
    return text.split(' ').map((word, i) => `<span class="hero-word inline-block ${i === text.split(' ').length - 1 ? 'text-islamic-green' : ''}">${esc(word)}${i < text.split(' ').length - 1 ? '&nbsp;' : ''}</span>`).join('');
  }

  function home() {
    const featured = data.filter(i => ['allah-calligraphy','muhammad-calligraphy','mosque','quran-rehal','sajadah','wudhu','lantern','qibla-compass'].includes(i.name)).slice(0,8);
    const mosque = icon('mosque');
    const lantern = icon('lantern');
    return shell(`<main>
      <section class="${MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32"><div class="grid items-center gap-14 lg:grid-cols-[1.06fr_.94fr] lg:gap-20">
        <div class="gsap-container"><div class="mb-7 inline-flex items-center gap-2 rounded-full border border-islamic-green/20 bg-islamic-green/6 px-3 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-islamic-green"><span class="size-1.5 rounded-full bg-islamic-green shadow-[0_0_14px_rgba(115,224,174,.9)]"></span>SVG-first · framework agnostic · Bun runtime</div><h1 class="hero-title max-w-3xl font-display text-[clamp(54px,6.6vw,96px)] font-medium leading-[.9] tracking-[-.065em]">${heroTitle('Islamic icons for the modern web.')}</h1><p class="mt-8 max-w-2xl text-[15px] leading-8 text-islamic-muted sm:text-base">A source-aware icon library built for developers who need Islamic imagery that is recognizable, consistent, reusable, and easy to contribute to. Use local SVG and WebP assets across React, Vue, Svelte, Angular, Astro, Remix, or plain HTML - without a runtime API.</p><div class="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#/icons" class="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-islamic-green px-5 text-[12px] font-bold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(115,224,174,.16)]">Explore ${data.length} icons ${arrowIcon()}</a><a href="#/docs" class="inline-flex h-12 items-center justify-center rounded-xl border border-islamic-line px-5 text-[12px] font-medium text-islamic-muted transition hover:border-islamic-line-strong hover:bg-white/4 hover:text-islamic-text">Read the documentation</a></div><div class="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-islamic-dim"><span>✓ Fill, outline & color</span><span>✓ Source attribution</span><span>✓ Contributor friendly</span></div></div>
        <div class="relative mx-auto h-[430px] w-full max-w-[510px] gsap-container sm:h-[500px]"><div class="absolute inset-10 rounded-full bg-islamic-green/8 blur-3xl"></div><div class="absolute right-0 top-8 h-[78%] w-[72%] rotate-[6deg] rounded-[2rem] border border-islamic-line bg-islamic-panel/70 p-5 shadow-2xl"><div class="flex items-center justify-between text-[8px] uppercase tracking-[.16em] text-islamic-dim"><span>Ramadan</span><span>02 / 03</span></div><img class="mt-10 size-[75%] w-full object-contain opacity-80" src="${esc(lantern ? pathFor(lantern,'color') : '')}" alt="Ramadan lantern"></div><div class="hero-art-front absolute bottom-4 left-0 h-[78%] w-[78%] -rotate-[5deg] rounded-[2rem] border border-islamic-line-strong bg-[#0a1a13] p-5 shadow-[0_40px_100px_rgba(0,0,0,.45)] sm:bottom-8"><div class="flex items-center justify-between text-[8px] uppercase tracking-[.16em] text-islamic-dim"><span>Islamic Icons</span><span>01 / 03</span></div><img class="mt-8 size-[65%] w-full object-contain" src="${esc(mosque ? pathFor(mosque,'original') : '')}" alt="Mosque icon"><div class="absolute inset-x-5 bottom-5 border-t border-islamic-line pt-4"><b class="block text-[11px]">Built from real sources.</b><small class="mt-1 block text-[9px] text-islamic-dim">Community · Erbasaran · licensed external assets</small></div></div></div>
      </div></section>
      <section class="${MAX} pb-16"><div class="grid grid-cols-2 divide-x divide-y divide-islamic-line border-y border-islamic-line md:grid-cols-3 md:divide-y-0"><div class="py-7 pr-5 md:py-8"><strong class="block font-display text-3xl tracking-tight sm:text-4xl">${data.length}</strong><span class="mt-2 block text-[10px] uppercase tracking-[.12em] text-islamic-dim">logical icons</span></div><div class="px-5 py-7 md:py-8"><strong class="block font-display text-3xl tracking-tight sm:text-4xl">${categories.length}</strong><span class="mt-2 block text-[10px] uppercase tracking-[.12em] text-islamic-dim">categories</span></div><div class="px-5 py-7 md:py-8"><strong class="block font-display text-3xl tracking-tight sm:text-4xl">3</strong><span class="mt-2 block text-[10px] uppercase tracking-[.12em] text-islamic-dim">visual variants</span></div></div></section>
      <section class="${MAX} py-16 sm:py-24"><div class="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Featured</span><h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Start with the essentials.</h2><p class="mt-3 max-w-xl text-sm leading-7 text-islamic-muted">Core religious, worship, Ramadan, Quran and community symbols - curated as logical icons instead of duplicated style cards.</p></div><a href="#/icons" class="inline-flex items-center gap-2 text-[11px] font-semibold text-islamic-green">View collection ${arrowIcon()}</a></div><div class="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">${featured.map(iconCard).join('')}</div></section>
      <section class="${MAX} py-16 sm:py-24"><div class="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Why this library</span><h2 class="mt-3 max-w-md font-display text-3xl tracking-[-.04em] sm:text-4xl">Not another random icon dump.</h2></div><div class="grid gap-3 sm:grid-cols-3"><article class="rounded-2xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[10px] text-islamic-green">01</span><h3 class="mt-14 text-sm font-semibold">Source-aware</h3><p class="mt-2 text-[11px] leading-6 text-islamic-dim">Every imported asset keeps creator, source URL, license and provenance.</p></article><article class="rounded-2xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[10px] text-islamic-green">02</span><h3 class="mt-14 text-sm font-semibold">One icon, many variants</h3><p class="mt-2 text-[11px] leading-6 text-islamic-dim">Fill, outline and color belong to one logical icon instead of three cards.</p></article><article class="rounded-2xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[10px] text-islamic-green">03</span><h3 class="mt-14 text-sm font-semibold">Contributors first</h3><p class="mt-2 text-[11px] leading-6 text-islamic-dim">Add SVG/WebP metadata, then validate the catalog with Bun.</p></article></div></div></section>
      <section class="${MAX} pb-10"><div class="overflow-hidden rounded-3xl border border-islamic-line bg-islamic-panel p-7 sm:p-10"><div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Ready to use</span><h2 class="mt-3 font-display text-2xl tracking-[-.035em] sm:text-3xl">Install once. Ship Islamic UI anywhere.</h2><p class="mt-3 max-w-xl text-sm leading-7 text-islamic-muted">Use package-level imports, direct asset URLs, or generated framework adapters.</p></div><a href="#/docs/installation" class="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg">Get started ${arrowIcon()}</a></div></div></section>
    </main>`);
  }

  function iconsPage() {
    const filtered = data.filter(i => (state.category === 'all' || i.category === state.category) && (state.source === 'all' || i.sources.some(s => s.id === state.source)) && (!state.q || `${i.name} ${i.title} ${i.category}`.toLowerCase().includes(state.q.toLowerCase())));
    return shell(`<main class="${MAX} pt-32 pb-16 sm:pt-36 sm:pb-24"><div class="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">${collectionSide()}<section class="min-w-0"><div class="gsap-container"><span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Icon library</span><div class="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><h1 class="font-display text-4xl tracking-[-.05em] sm:text-5xl">Islamic icons</h1><p class="mt-3 max-w-xl text-sm leading-7 text-islamic-muted">${filtered.length} logical icons. Select an icon to inspect its variants, source, attribution and import path.</p></div><button type="button" data-search class="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl border border-islamic-line px-3 text-[10px] text-islamic-muted hover:border-islamic-line-strong hover:text-islamic-text">${searchIcon()} CTRL + K</button></div></div><div class="mt-8 flex flex-col gap-3 sm:flex-row"><label class="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-xl border border-islamic-line bg-islamic-panel px-4 focus-within:border-islamic-green/35"><span class="text-islamic-dim">${searchIcon()}</span><input id="q" value="${esc(state.q)}" placeholder="Search icons…" autocomplete="off" class="min-w-0 flex-1 bg-transparent text-sm text-islamic-text outline-none placeholder:text-islamic-dim"><kbd class="hidden rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim sm:block">CTRL + K</kbd></label><div class="grid grid-cols-3 rounded-xl border border-islamic-line bg-islamic-panel p-1 sm:w-[270px]">${['fill','outline','color'].map(v=>`<button type="button" data-var="${v}" class="rounded-lg px-3 py-2.5 text-[10px] transition ${state.variant===v?'bg-islamic-green/10 text-islamic-green':'text-islamic-muted hover:text-islamic-text'}">${variantName(v)}</button>`).join('')}</div></div><div class="mt-4 flex items-center justify-between text-[10px] text-islamic-dim"><span>${filtered.length} results</span><span>Click any icon for details</span></div><div class="mt-7 grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">${filtered.map(iconCard).join('') || `<div class="col-span-full rounded-2xl border border-dashed border-islamic-line-strong p-12 text-center"><b class="text-sm">No icons found.</b><p class="mt-2 text-xs text-islamic-dim">Try another search or clear the filters.</p></div>`}</div></section></div></main>`);
  }

  function categoriesPage() {
    return shell(`<main class="${MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32"><div class="gsap-container max-w-3xl"><span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Browse by meaning</span><h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-6xl">Categories</h1><p class="mt-5 text-base leading-8 text-islamic-muted">Islamic Icons is organized around semantic categories rather than visual style. Each category can grow independently as contributors add new artwork.</p></div><div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${categories.map(c=>`<a href="#/icons" data-category-link="${esc(c)}" class="gsap-on-scroll group rounded-2xl border border-islamic-line bg-islamic-panel p-5 transition hover:-translate-y-1 hover:border-islamic-line-strong"><div class="flex items-start justify-between"><span class="font-display text-2xl text-islamic-green">${String(data.filter(i=>i.category===c).length).padStart(2,'0')}</span><span class="text-islamic-dim transition group-hover:translate-x-1 group-hover:text-islamic-green">${arrowIcon()}</span></div><h2 class="mt-10 text-sm font-semibold">${pretty(c)}</h2><p class="mt-2 text-[11px] leading-6 text-islamic-dim">${categoryDescription(c)}</p></a>`).join('')}</div></main>`);
  }
  function categoryDescription(c){ const d={charity:'Zakat, sadaqah and giving.',flags:'National and cause-related imagery.',food:'Halal food, animals and dietary symbols.',god:'Allah, tawhid and Arabic religious marks.',lifestyle:'Hajj, travel and everyday Islamic life.',mosque:'Mosques, minarets and sacred locations.',patterns:'Geometric and ornamental Islamic motifs.',people:'Muslim, family and community figures.',prayer:'Salah, dua, wudhu, qibla and tasbih.',prophet:'Prophetic names and calligraphy.',quran:'Quran, Kaaba and sacred reading symbols.',ramadan:'Ramadan, crescent, lantern, iftar and Eid-adjacent imagery.'}; return d[c]||'Islamic visual symbols and community contributions.'; }

  const docs = {
    '/docs': ['Overview', `<p>Islamic Icons is a framework-agnostic collection of Islamic SVG and WebP artwork designed around two ideas: <strong>recognizable iconography</strong> and <strong>traceable sources</strong>. The library is not tied to React. The assets are ordinary files, while framework adapters make imports pleasant in React, Vue, Svelte, Angular, Astro and other modern stacks.</p><p>The collection intentionally does not promise a fixed number of icons. A contributor can add one icon, ten icons, or remove an icon when licensing changes. The catalog is generated from assets and metadata at build time.</p><div class="callout"><b>Core rule</b><span>Google is a discovery tool, not a license. An icon only enters the distributable library after its original source and redistribution terms are recorded.</span></div>`],
    '/docs/installation': ['Installation', `<p>Install the library with the package manager used by your project. The package exposes semantic category entry points and keeps the artwork as local SVG/WebP assets.</p><h2>Install</h2><pre>bun add islamic-icons\nnpm install islamic-icons\npnpm add islamic-icons\nyarn add islamic-icons</pre><h2>Run the Web Docs locally</h2><pre>git clone &lt;repository&gt;\ncd islamic-icons\nbun install\nbun run docs</pre><p>For contributors, use Bun for the repository build pipeline. The published package can be installed with Bun, npm, pnpm or Yarn.</p><h2>Build the library</h2><pre>bun run icons:catalog\nbun run icons:package\nbun run icons:validate\nbun run build</pre><p>The Erbasaran importer is intentionally a build-time operation:</p><pre>bun run icons:import:erbasaran</pre><p>That command talks to the package source, downloads the upstream archive, extracts the font, converts glyph paths to local SVG, imports both regular and solid glyph definitions, and records provenance. The resulting application does <strong>not</strong> need the API at runtime.</p>`],
    '/docs/usage': ['Usage', `<p>Use the semantic category that contains the icon you need. Framework and library examples should use the component form with <strong>className</strong>, <strong>size</strong> and <strong>style</strong> props. The Allah example below is the canonical component syntax.</p><h2>Framework / library component</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>For a React-style project, the same component can be imported from the relevant framework adapter and rendered directly in JSX.</p><h2>Native HTML</h2><pre>&lt;islamic-icons categories="Allah" class="" size="" style="" /&gt;</pre><p>Native HTML can also reference the local SVG directly when a custom element is not part of the application.</p><pre>&lt;img src="/assets/icons/mosque/mosque/original.svg" alt="Mosque" /&gt;</pre><p>All source assets remain local to the package; applications do not need a runtime request to the upstream icon API.</p>`],
    '/docs/variants': ['Variants', `<p>A logical icon may expose <strong>fill</strong>, <strong>outline</strong>, and <strong>color</strong> variants. The gallery intentionally renders one card per logical icon. Variant switching happens inside the icon detail panel.</p><div class="variant-demo"><div><span>Fill</span><b>Dense silhouette</b></div><div><span>Outline</span><b>Line-oriented mark</b></div><div><span>Colors</span><b>Multi-tone artwork</b></div></div><p>Some contributed artwork is intentionally available only as <strong>original</strong>. The library does not fabricate variants when doing so would distort the creator's artwork.</p>`],
    '/docs/frameworks': ['Frameworks', `<p>SVG is the compatibility layer. Framework adapters are convenience packages, not a requirement for using the collection.</p><h2>Canonical component usage</h2><pre>&lt;Allah className="" size="" style="" /&gt;</pre><p>Use the same component-shaped API in framework documentation, then adapt the surrounding syntax to the framework compiler. For plain HTML, use the native custom-element form below.</p><pre>&lt;islamic-icons categories="Allah" class="" size="" style="" /&gt;</pre><div class="framework-list"><article><b>React / Remix</b><code>islamic-icons/react</code></article><article><b>Vue / Nuxt</b><code>islamic-icons/vue</code></article><article><b>Svelte / SvelteKit</b><code>islamic-icons/svelte</code></article><article><b>Angular</b><code>islamic-icons/angular</code></article><article><b>Astro</b><code>islamic-icons/astro</code></article><article><b>Plain HTML</b><code>assets/icons/**</code></article></div><p>The same source asset can therefore be used in a design system, a static site, a SPA, or a server-rendered application.</p>`],
    '/docs/sources': ['Sources & attribution', `<p>There are four source lanes: community assets supplied for this project, Ramazan Erbasaran's Flutter Islamic Icons package, externally licensed vectors, and Google Material Icons. Google Search is discovery only; it never grants redistribution permission.</p><h2>Ramazan Erbasaran</h2><p>The upstream project documents <strong>78 Islamic icon glyph entries</strong>, including regular and solid forms. The catalog collapses visual duplicates into logical icons while preserving the upstream manifest and source files.</p><p>Upstream repository: <a href="https://github.com/erbasaran/flutter_islamic_icons" target="_blank" rel="noreferrer">github.com/erbasaran/flutter_islamic_icons ↗</a></p><p>Package API used by the importer: <code>https://pub.dev/api/packages/flutter_islamic_icons</code></p><h2>External discovery</h2><p>External candidates are reviewed individually. The source page and license stay attached to the asset.</p><div class="source-links">${sources.flatMap(s=>s.examples||[]).slice(0,8).map(e=>`<a href="${esc(e.url)}" target="_blank" rel="noreferrer"><span>${esc(e.name)}</span><small>${esc(e.license)} ↗</small></a>`).join('')}</div>`],    '/docs/donations': ['Donations & humanitarian aid', `<p>Islamic Icons accepts public donations with <strong>100% financial transparency</strong>. Minimum 70% of all funds are allocated to humanitarian aid, including Palestine 🇵🇸 relief, orphanages, low-income families, elderly care and disaster relief. Up to 30% may support framework operations such as server, CDN and domain costs.</p><div class="callout"><b>Donation channel</b><span>Buy Me a Coffee: <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer">buymeacoffee.com/rheinsullivan ↗</a></span></div><h2>Transparency reporting</h2><p>The detailed public reporting policy and transparency report index lives in <strong>docs/en/donations.md</strong>. Verified statements should be added there for each reporting period rather than inventing or estimating financial figures.</p><h2>Allocation policy</h2><p><strong>Minimum 70%</strong> is allocated to humanitarian aid. <strong>Up to 30%</strong> may be allocated to framework operations required to keep Islamic Icons available and maintainable.</p><div class="framework-list"><article><b>Palestine 🇵🇸 relief</b><code>Humanitarian aid priority</code></article><article><b>Orphanages</b><code>Humanitarian aid</code></article><article><b>Low-income families</b><code>Humanitarian aid</code></article><article><b>Elderly care</b><code>Humanitarian aid</code></article><article><b>Disaster relief</b><code>Humanitarian aid</code></article><article><b>Server, CDN, domain</b><code>Framework operations</code></article></div><h2>Reporting requirements</h2><p>Each published report should include the reporting period, total donations received, humanitarian allocation, operations allocation, recipient or program category when safe to disclose, supporting evidence and remaining balance.</p>`],

  };

  function richBody(body) {
    return body.replaceAll('class="callout"','class="my-7 rounded-2xl border border-islamic-green/15 bg-islamic-green/5 p-5"').replaceAll('class="variant-demo"','class="my-7 grid gap-3 sm:grid-cols-3"').replaceAll('<div><span>Fill</span><b>Dense silhouette</b></div>','<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Fill</span><b class="mt-8 block text-sm">Dense silhouette</b></div>').replaceAll('<div><span>Outline</span><b>Line-oriented mark</b></div>','<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Outline</span><b class="mt-8 block text-sm">Line-oriented mark</b></div>').replaceAll('<div><span>Colors</span><b>Multi-tone artwork</b></div>','<div class="rounded-xl border border-islamic-line bg-islamic-panel p-5"><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">Colors</span><b class="mt-8 block text-sm">Multi-tone artwork</b></div>').replaceAll('class="framework-list"','class="my-7 grid gap-3 sm:grid-cols-2"').replaceAll('<article><b>','<article class="rounded-xl border border-islamic-line bg-islamic-panel p-4"><b>').replaceAll('</b><code>','</b><code class="mt-2 block text-[10px] text-islamic-green">').replaceAll('class="source-links"','class="my-7 grid gap-2"').replaceAll('<a href="','<a class="flex items-center justify-between gap-4 rounded-xl border border-islamic-line bg-islamic-panel px-4 py-3 text-[11px] text-islamic-muted transition hover:border-islamic-line-strong hover:text-islamic-text" href="').replaceAll('<small>','<small class="shrink-0 text-[9px] text-islamic-green">').replaceAll('<pre>','<pre class="my-6 overflow-x-auto rounded-2xl border border-islamic-line bg-black/20 p-4 text-[11px] leading-7 text-islamic-muted">');
  }

  function docsPage(path='/docs') {
    const [title, body] = docs[path] || docs['/docs'];
    return shell(`<main class="${MAX} pt-32 pb-16 sm:pt-36 sm:pb-24"><div class="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">${docsSide(path)}<article class="gsap-container min-w-0"><div class="text-[10px] text-islamic-dim">Docs <span class="px-1">/</span> ${esc(title)}</div><h1 class="mt-4 font-display text-4xl tracking-[-.055em] sm:text-6xl">${esc(title)}</h1><p class="mt-5 max-w-2xl text-base leading-8 text-islamic-muted">${title==='Overview'?'Everything you need to browse, install, use, source and contribute to Islamic Icons.':'A practical reference for building with Islamic Icons while keeping the artwork local and the provenance visible.'}</p><div class="doc-body mt-12 text-[13px] leading-8 text-islamic-muted [&_a]:text-islamic-green [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-[-.03em] [&_p]:mb-6 [&_strong]:text-islamic-text">${richBody(body)}</div><div class="mt-14 flex flex-col justify-between gap-3 border-t border-islamic-line pt-5 text-[10px] text-islamic-dim sm:flex-row"><a href="#/docs">← Documentation home</a><a href="#/icons" class="text-islamic-green">Browse icons →</a></div></article></div></main>`);
  }

  function sourcesPage() {
    const erbaCount = data.filter(i => i.sources.some(s=>s.id==='erbasaran')).length;
    return shell(`<main class="${MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32"><div class="gsap-container max-w-3xl"><span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Provenance</span><h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-6xl">Sources, not mystery meat.</h1><p class="mt-5 text-base leading-8 text-islamic-muted">Every source lane is explicit. The library can combine upstream packages, contributor artwork and externally licensed vectors without pretending they all have the same ownership.</p></div><div class="mt-12 grid gap-3">${[
      ['UPSTREAM PACKAGE','Ramazan Erbasaran','flutter_islamic_icons · BSD-2-Clause · 78 glyph definitions upstream, currently mapped to '+erbaCount+' logical icons.',[['GitHub ↗','https://github.com/erbasaran/flutter_islamic_icons'],['pub.dev ↗','https://pub.dev/packages/flutter_islamic_icons']]],
      ['EXTERNAL LICENSED CANDIDATES','SVG Repo','Open-licensed candidates are reviewed individually. Each asset keeps its original source page and license.',[['Browse Islamic vectors ↗','https://www.svgrepo.com/vectors/islamic/']]],
      ['GOOGLE MATERIAL ICONS','Google Material Icons','Official Google Material Icons are Apache-2.0. The importer treats Google as a first-party source, while Google Search remains discovery only.',[['Official repository ↗','https://github.com/google/material-design-icons'],['Google Fonts ↗','https://fonts.google.com/icons']]],
    ].map(([type,title,desc,links])=>`<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-6 sm:p-7"><span class="text-[9px] font-semibold uppercase tracking-[.17em] text-islamic-green">${type}</span><h2 class="mt-3 font-display text-xl tracking-[-.03em]">${title}</h2><p class="mt-3 max-w-3xl text-[12px] leading-7 text-islamic-muted">${desc}</p><div class="mt-5 flex flex-wrap gap-2">${links.map(([label,url])=>`<a class="inline-flex items-center rounded-lg border border-islamic-line px-3 py-2 text-[10px] text-islamic-green hover:border-islamic-line-strong" href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join('')}</div></article>`).join('')}</div></main>`);
  }

  function donationsPage() {
    const donationPhotos = [
      { title: 'Low-income families', image: 'https://ik.imagekit.io/qkwbj7b7u/charity-meals/uploads/162/family-food-parcel2.png?ik-sdk-version=php-2.0.0', source: 'Charity Meals', sourceUrl: 'https://charitymeals.org/projects', alt: 'Family receiving a food parcel and essential supplies' },
      { title: 'Orphanage care', image: 'https://www.hopeandprosperity.org/wp-content/uploads/2020/06/5J2A7153.jpg', source: 'Hope & Prosperity', sourceUrl: 'https://www.hopeandprosperity.org/our-orphanage/', alt: 'Children sharing a meal at an orphanage' },
      { title: 'Elderly care', image: 'https://www.thefinancialcoconut.com/hubfs/caregivers-png-1.png', source: 'The Financial Coconut', sourceUrl: 'https://www.thefinancialcoconut.com/blog/the-real-cost-of-caregiving-in-singapore', alt: 'Caregivers supporting elderly residents in a care home' },
      { title: 'Palestine 🇵🇸 relief', image: 'https://help.unicef.org/mexico/sites/mexico/files/styles/facebook_share_image/public/2025-01/UNI495572.jpg?itok=q8E8Yyli', source: 'UNICEF', sourceUrl: 'https://help.unicef.org/mexico/es/dona-gaza', alt: 'Children in Gaza waiting for humanitarian food aid' },
      { title: 'Disaster relief', image: 'https://en.vcci.com.vn/hm_content/uploads/247-news/FLOODS.png', source: 'Vietnam Chamber of Commerce and Industry', sourceUrl: 'https://en.vcci.com.vn/disaster-relief-when-foreign-friends-show-kind-support-vietnam', alt: 'Volunteers delivering food during a flood' }
    ];
    return shell(`<main class="${MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32">
      <section class="gsap-container max-w-4xl">
        <span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Humanitarian giving</span>
        <h1 class="mt-3 font-display text-5xl leading-[.98] tracking-[-.06em] sm:text-7xl">Support people. Keep every number visible.</h1>
        <p class="mt-6 max-w-3xl text-base leading-8 text-islamic-muted">Islamic Icons accepts public donations with 100% financial transparency. Minimum 70% of all funds are allocated to humanitarian aid, including Palestine 🇵🇸 relief, orphanages, low-income families, elderly care and disaster relief. Up to 30% supports framework operations such as server, CDN and domain costs.</p>
      </section>
      <section class="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
        ${donationPhotos.map((photo,index) => `<figure class="gsap-on-scroll group ${index===0 ? 'lg:col-span-7' : index===1 ? 'lg:col-span-5' : 'lg:col-span-4'}"><div class="relative overflow-hidden ${index===0 ? 'aspect-[16/10]' : 'aspect-[4/3]'} bg-islamic-panel-2"><img src="${photo.image}" alt="${photo.alt}" loading="lazy" referrerpolicy="no-referrer" class="size-full object-cover transition duration-700 group-hover:scale-[1.025]" onerror="this.style.display='none'"><div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div></div><figcaption class="pt-4"><div class="flex items-baseline justify-between gap-4"><h2 class="font-display text-lg tracking-[-.03em]">${photo.title}</h2><span class="text-[9px] uppercase tracking-[.14em] text-islamic-dim">${String(index+1).padStart(2,'0')}</span></div><a href="${photo.sourceUrl}" target="_blank" rel="noreferrer" class="mt-2 inline-flex text-[9px] text-islamic-dim hover:text-islamic-green">Photo: ${photo.source} ↗</a></figcaption></figure>`).join('')}
      </section>
      <section class="mt-16 border-y border-islamic-line">
        <div class="grid lg:grid-cols-[1.45fr_.55fr]">
          <div class="border-b border-islamic-line py-10 lg:border-b-0 lg:border-r lg:pr-12">
            <div class="flex items-start justify-between gap-6">
              <div><span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green">Humanitarian allocation</span><h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">70% minimum to aid</h2></div>
              <span class="shrink-0 pt-1 text-[10px] font-semibold uppercase tracking-[.14em] text-islamic-green">Minimum</span>
            </div>
            <p class="mt-5 max-w-2xl text-[12px] leading-7 text-islamic-muted">At least seventy percent of public donations is reserved for direct humanitarian priorities. The allocation is a floor, not a target to reduce aid.</p>
            <div class="mt-8 grid border-t border-islamic-line sm:grid-cols-2">
              ${['Palestine 🇵🇸 relief','Orphanages','Low-income families','Elderly care','Disaster relief'].map(label=>`<div class="border-b border-islamic-line py-4 text-[11px] text-islamic-muted sm:even:border-l sm:even:pl-5">${label}</div>`).join('')}
            </div>
          </div>
          <div class="py-10 lg:pl-12">
            <span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-dim">Framework operations</span>
            <h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Up to 30%</h2>
            <p class="mt-5 text-[12px] leading-7 text-islamic-muted">Only infrastructure required to keep Islamic Icons available and maintainable belongs here.</p>
            <div class="mt-8 border-t border-islamic-line">${['Server','CDN','Domain'].map(label=>`<div class="border-b border-islamic-line py-4 text-[11px] text-islamic-muted">${label}</div>`).join('')}</div>
          </div>
        </div>
      </section>
      <section class="border-b border-islamic-line py-10 sm:py-12">
        <div class="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-2xl"><span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green">Public donation</span><h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">Buy Me a Coffee</h2><p class="mt-4 text-[12px] leading-7 text-islamic-muted">Every contribution is handled under the allocation policy above. Donation records and future transparency statements belong in the public reporting document.</p></div>
          <a href="https://buymeacoffee.com/rheinsullivan" target="_blank" rel="noreferrer" class="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-islamic-green px-5 text-[11px] font-bold text-islamic-bg transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(115,224,174,.16)]">Buy Me a Coffee ${arrowIcon()}</a>
        </div>
      </section>
      <section class="border-b border-islamic-line py-10 sm:py-12">
        <div class="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-14">
          <div><span class="text-[9px] font-semibold uppercase tracking-[.16em] text-islamic-green">Transparency</span><h2 class="mt-3 font-display text-3xl tracking-[-.04em] sm:text-4xl">See the reporting policy.</h2></div>
          <div><p class="max-w-3xl text-[12px] leading-7 text-islamic-muted">Detailed transparency reports are maintained in <code class="text-islamic-green">docs/en/donations.md</code>, including the allocation policy, reporting structure and links to verified statements when published.</p><div class="mt-6 flex flex-wrap gap-2"><span class="inline-flex h-10 items-center border-b border-islamic-line px-1 text-[10px] font-semibold text-islamic-dim">docs/en/donations.md</span><a href="#/docs/donations" class="inline-flex h-10 items-center border-b border-islamic-green/30 px-1 text-[10px] font-semibold text-islamic-green hover:border-islamic-green">Read in docs</a></div></div>
        </div>
      </section>
    </main>`);
  }

  function contributingPage() {
    return shell(`<main class="${MAX} pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-32"><div class="gsap-container max-w-4xl"><span class="text-[10px] font-semibold uppercase tracking-[.18em] text-islamic-green">Open contribution model</span><h1 class="mt-3 font-display text-5xl tracking-[-.06em] sm:text-7xl">Add an icon without breaking the catalog.</h1><p class="mt-5 max-w-3xl text-base leading-8 text-islamic-muted">There is deliberately no fixed target such as 78 or 100 icons. The collection should grow when useful, licensed artwork is available and shrink when an asset should no longer be redistributed.</p></div><div class="mt-12 grid gap-3 sm:grid-cols-2">${[['01','Drop the asset','Use SVG whenever possible. WebP is acceptable for artwork that should remain raster. Keep the original untouched in the source directory.'],['02','Describe it','Give it a semantic name, category, creator, source URL, license and provenance. If it came from Google, record the original page - not Google.'],['03','Generate variants','Only generate fill, outline or color when the transformation preserves the artwork. Otherwise keep the original variant only.'],['04','Validate with Bun','Run the catalog, package and validation scripts before opening a pull request.']].map(([n,t,p])=>`<article class="gsap-on-scroll rounded-2xl border border-islamic-line bg-islamic-panel p-6"><span class="text-[10px] text-islamic-green">${n}</span><h2 class="mt-12 font-display text-xl tracking-[-.03em]">${t}</h2><p class="mt-3 text-[12px] leading-7 text-islamic-muted">${p}</p></article>`).join('')}</div><pre class="mt-3 overflow-x-auto rounded-2xl border border-islamic-line bg-black/20 p-5 text-[11px] leading-7 text-islamic-muted">bun run icons:catalog\nbun run icons:package\nbun run icons:validate</pre><div class="mt-3 rounded-2xl border border-islamic-green/15 bg-islamic-green/5 p-5 text-[12px] leading-7 text-islamic-muted"><b class="text-islamic-text">Source integrity</b><span class="mt-2 block">Do not replace a creator's artwork with a generic AI recreation just because it is easier to normalize. Preserve the source asset and its visual identity.</span></div></main>`);
  }

  function drawer(name) {
    const item = icon(name);
    if (!item) return '';
    const sourceId = state.drawerSource && item.sources.some(s=>s.id===state.drawerSource) ? state.drawerSource : sourceFor(item)?.id;
    const source = item.sources.find(s=>s.id===sourceId) || item.sources[0];
    const vars = [...new Set([...(source?.variants || []), ...(source?.solidVariants || []).map(()=> 'solid')])].filter(v=>['fill','outline','color','original','alternate'].includes(v));
    const variant = chooseVariant(source, state.variant);
    const path = pathFor(item, variant, source?.id);
    const imp = `import { ${camel(item.name)} } from "islamic-icons/${item.category}"`;
    return `<div class="fixed inset-0 z-[90]" data-drawer-root><button type="button" data-close aria-label="Close details" class="absolute inset-0 h-full w-full border-0 bg-black/65 backdrop-blur-sm"></button><aside class="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-islamic-line-strong bg-[#09150f] shadow-[-30px_0_90px_rgba(0,0,0,.45)]"><div class="sticky top-0 z-10 flex items-start justify-between border-b border-islamic-line bg-[#09150f]/90 p-5 backdrop-blur-xl"><div><span class="text-[9px] uppercase tracking-[.16em] text-islamic-green">${pretty(item.category)}</span><h2 class="mt-2 font-display text-xl tracking-[-.03em]">${esc(item.title)}</h2></div><button type="button" data-close aria-label="Close" class="grid size-9 place-items-center rounded-lg border border-islamic-line text-islamic-muted hover:text-islamic-text">${closeIcon()}</button></div><div class="p-5 sm:p-6"><div class="relative grid aspect-square place-items-center overflow-hidden rounded-2xl border border-islamic-line bg-islamic-panel"><img class="size-[72%] object-contain" src="${esc(path)}" alt="${esc(item.title)}"><span class="absolute bottom-3 left-3 rounded-full border border-islamic-line bg-islamic-bg px-2 py-1 text-[9px] text-islamic-dim">${sourceLabel(source?.id)} · ${variantName(variant)}</span></div><div class="mt-6"><label class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Source</label><div class="flex flex-wrap gap-2">${item.sources.map(s=>`<button type="button" class="rounded-lg border px-3 py-2 text-[10px] ${s.id===source?.id?'border-islamic-green/30 bg-islamic-green/8 text-islamic-green':'border-islamic-line text-islamic-muted hover:text-islamic-text'}" data-drawer-source="${s.id}">${esc(s.label)}</button>`).join('')}</div></div><div class="mt-6"><label class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Variant</label><div class="flex flex-wrap gap-2">${vars.map(v=>`<button type="button" class="rounded-lg border px-3 py-2 text-[10px] ${v===variant?'border-islamic-green/30 bg-islamic-green/8 text-islamic-green':'border-islamic-line text-islamic-muted hover:text-islamic-text'}" data-drawer-var="${v}">${variantName(v)}</button>`).join('')}</div></div><div class="mt-6"><label class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Import</label><div class="flex gap-2 rounded-xl border border-islamic-line bg-black/20 p-2"><code class="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap p-2 text-[10px] text-islamic-muted">${esc(imp)}</code><button type="button" data-copy="${esc(imp)}" class="shrink-0 rounded-lg bg-islamic-green px-3 text-[10px] font-bold text-islamic-bg">Copy</button></div></div><div class="mt-6 grid grid-cols-2 gap-2"><div class="rounded-xl border border-islamic-line p-4"><label class="block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Category</label><b class="mt-2 block text-xs">${pretty(item.category)}</b></div><div class="rounded-xl border border-islamic-line p-4"><label class="block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Sources</label><b class="mt-2 block text-xs">${item.sources.length}</b></div></div><div class="mt-6"><label class="mb-2 block text-[9px] uppercase tracking-[.15em] text-islamic-dim">Asset path</label><code class="block break-all rounded-xl border border-islamic-line bg-black/20 p-4 text-[10px] leading-6 text-islamic-muted">${esc(path)}</code></div><div class="mt-6 flex gap-4 text-[10px] text-islamic-green"><a href="#/docs/usage">Usage guide →</a><a href="#/sources">Source policy →</a></div></div></aside></div>`;
  }

  function currentPath() { return (location.hash.replace(/^#/,'') || '/').split('?')[0]; }
  function toast(msg) { const t=document.querySelector('#toast'); if(!t)return; t.textContent=msg; t.classList.remove('opacity-0','translate-y-3'); t.classList.add('opacity-100','translate-y-0'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>{t.classList.add('opacity-0','translate-y-3');t.classList.remove('opacity-100','translate-y-0')},1600); }

  function bindGlobal() {
    document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{state.drawer=b.dataset.open;state.drawerSource=null;render(false)}));
    document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{state.drawer=null;state.drawerSource=null;render(false)}));
    document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('Copied to clipboard')}catch{toast('Copy unavailable - select the code manually.')}}));
    document.querySelectorAll('[data-search]').forEach(b=>b.addEventListener('click',openSearch));
    document.querySelectorAll('[data-mobile-toggle]').forEach(b=>b.addEventListener('click',()=>{state.mobileOpen=!state.mobileOpen;render(false)}));
    document.querySelectorAll('[data-mobile-panel] a').forEach(a=>a.addEventListener('click',()=>{state.mobileOpen=false}));
    document.querySelectorAll('[data-category-link]').forEach(a=>a.addEventListener('click',()=>{state.category=a.dataset.categoryLink;state.source='all';state.q='';state.mobileOpen=false}));
  }
  function bindIcons() {
    const q=document.querySelector('#q');
    if(q) q.addEventListener('input',e=>{state.q=e.target.value;updateIcons(true)});
    document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',()=>{state.category=b.dataset.cat;state.source='all';state.q='';updateIcons(false)}));
    document.querySelectorAll('[data-source-filter]').forEach(b=>b.addEventListener('click',()=>{state.source=b.dataset.sourceFilter;state.category='all';updateIcons(false)}));
    document.querySelectorAll('[data-var]').forEach(b=>b.addEventListener('click',()=>{state.variant=b.dataset.var;updateIcons(false)}));
  }
  function bindDrawer(){ document.querySelectorAll('[data-drawer-source]').forEach(b=>b.addEventListener('click',()=>{state.drawerSource=b.dataset.drawerSource;render(false)})); document.querySelectorAll('[data-drawer-var]').forEach(b=>b.addEventListener('click',()=>{state.variant=b.dataset.drawerVar;render(false)})); }
  function updateIcons(focusSearch){ if(currentPath()!=='/icons') location.hash='#/icons'; render(false); if(focusSearch){const q=document.querySelector('#q'); if(q){q.focus();q.setSelectionRange(state.q.length,state.q.length)}} }

  function openSearch() {
    document.querySelector('[data-search-modal]')?.remove();
    const wrap=document.createElement('div');
    wrap.dataset.searchModal='';
    wrap.className='fixed inset-0 z-[110] grid place-items-center bg-black/40 px-4 backdrop-blur-[4px]';
    wrap.innerHTML=`<button type="button" data-search-close aria-label="Close search" class="absolute inset-0 h-full w-full"></button><div class="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-islamic-line-strong bg-[#09150f] shadow-[0_30px_100px_rgba(0,0,0,.55)]"><div class="flex h-14 items-center gap-3 border-b border-islamic-line px-4">${searchIcon()}<input autofocus class="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-islamic-dim" placeholder="Search icons, categories, docs…"><kbd class="rounded-md border border-islamic-line px-1.5 py-1 text-[9px] text-islamic-dim">ESC</kbd></div><div class="max-h-[55vh] overflow-y-auto p-2" data-search-results></div></div>`;
    document.body.appendChild(wrap);
    const input=wrap.querySelector('input'); const results=wrap.querySelector('[data-search-results]');
    const paint=()=>{const q=input.value.trim().toLowerCase(); const hits=data.filter(i=>`${i.title} ${i.name} ${i.category}`.toLowerCase().includes(q)).slice(0,10); results.innerHTML=hits.map(i=>`<button type="button" data-result="${esc(i.name)}" class="flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-white/5"><span class="grid size-10 shrink-0 place-items-center rounded-lg border border-islamic-line bg-islamic-panel"><img class="size-7 object-contain" src="${esc(pathFor(i,'fill'))}" alt=""></span><span class="min-w-0 flex-1"><b class="block text-xs">${esc(i.title)}</b><small class="mt-1 block text-[9px] text-islamic-dim">${pretty(i.category)}</small></span><span class="text-islamic-dim">${arrowIcon()}</span></button>`).join('') || '<p class="p-6 text-center text-xs text-islamic-dim">No matching icons.</p>'};
    paint(); input.addEventListener('input',paint);
    const close=()=>{wrap.remove();document.removeEventListener('keydown',escKey)};
    const escKey=e=>{if(e.key==='Escape')close()};
    document.addEventListener('keydown',escKey);
    wrap.addEventListener('click',e=>{if(e.target.closest('[data-search-close]'))close(); const r=e.target.closest('[data-result]'); if(r){state.drawer=r.dataset.result;close();render(false)}});
  }

  function animatePage() {
    window.__islamicIconsObservers?.forEach(observer => observer.disconnect());
    window.__islamicIconsObservers = [];
    window.__islamicIconsGsapContext?.revert();
    const gsap=window.gsap;
    if(!gsap) return;
    const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if(reduced) return;
    const ctx=gsap.context(()=>{
      const containers=document.querySelectorAll('.gsap-container');
      if(containers.length) gsap.from(containers,{opacity:0,y:28,duration:.7,ease:'power3.out',stagger:.08,clearProps:'transform'});
      const words=document.querySelectorAll('.hero-word');
      if(words.length) gsap.from(words,{opacity:0,y:34,rotateX:-55,duration:.72,ease:'power3.out',stagger:.035,delay:.08,transformOrigin:'50% 100%',clearProps:'transform'});
      document.querySelectorAll('.gsap-on-scroll').forEach(el=>{
        if(el.dataset.gsapReady) return;
        el.dataset.gsapReady='1';
        const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){gsap.fromTo(entry.target,{opacity:0,y:22},{opacity:1,y:0,duration:.55,ease:'power2.out',clearProps:'transform'});observer.unobserve(entry.target)}}},{threshold:.08});
        window.__islamicIconsObservers.push(observer);
        observer.observe(el);
      });
    }, app());
    window.__islamicIconsGsapContext=ctx;
  }

  function render(animate=true) {
    const path=currentPath();
    let content;
    if(path==='/icons') content=iconsPage();
    else if(path==='/categories') content=categoriesPage();
    else if(path==='/sources') content=sourcesPage();
    else if(path==='/donations') content=donationsPage();
    else if(path==='/contributing') content=contributingPage();
    else if(path.startsWith('/docs')) content=docsPage(path);
    else content=home();
    app().outerHTML=`<div id="app">${content.replace('</main>', state.drawer ? '</main>' : '</main>')}${state.drawer ? drawer(state.drawer) : ''}</div>`;
    bindGlobal();bindIcons();bindDrawer();
    if(animate) animatePage(); else requestAnimationFrame(animatePage);
    if(state.mobileOpen && !document.querySelector('[data-mobile-panel]')) state.mobileOpen=false;
  }

  window.addEventListener('hashchange',()=>{state.drawer=null;state.drawerSource=null;state.mobileOpen=false;render(true);window.scrollTo({top:0,behavior:'smooth'})});
  window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}});
  render(true);
})();
