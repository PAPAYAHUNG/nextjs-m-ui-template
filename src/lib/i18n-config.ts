export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'vi', 'zh', 'ar'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
