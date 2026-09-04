import { translations, type Locale, type Translations } from './i18n';

const DEFAULT_LOCALE: Locale = 'en';
const STORAGE_KEY = 'atsarul-mujahidin-locale';

function createLocaleStore() {
	let locale = $state<Locale>(DEFAULT_LOCALE);

	function init() {
		if (typeof localStorage !== 'undefined') {
			const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
			if (stored && (stored === 'en' || stored === 'id')) {
				locale = stored;
			}
		}
	}

	function setLocale(next: Locale) {
		locale = next;
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, next);
		}
	}

	function toggle() {
		setLocale(locale === 'en' ? 'id' : 'en');
	}

	const t = $derived<Translations>(translations[locale]);

	return {
		get locale() { return locale; },
		get t() { return t; },
		init,
		setLocale,
		toggle
	};
}

export const localeStore = createLocaleStore();
