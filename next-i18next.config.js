/** @type {import('next-i18next').UserConfig} */
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'vi', 'zh', 'ar'],
  localeDetection: true,
};

const config = {
  i18n,
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  defaultNS: 'common',
  fallbackLng: 'en',
};

export default config; 