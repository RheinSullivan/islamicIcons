// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// Legacy compatibility for docs-data.js (old static HTML docs)
	interface Window {
		ISLAMIC_ICONS_DATA?: unknown[];
		ISLAMIC_ICONS_SOURCES?: unknown[];
		gsap?: unknown;
		__islamicIconsObservers?: IntersectionObserver[];
		__islamicIconsGsapContext?: { revert(): void };
	}
}

export { };
