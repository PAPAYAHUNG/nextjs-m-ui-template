// import 'server-only';
import type { Locale } from '@/lib/i18n-config';

const dictionaries = {
  "en-US": () => import('../../public/locales/en/common.json').then((module) => module.default),
  "fr-FR": () => import('../../public/locales/fr/common.json').then((module) => module.default),
  "vi-VN": () => import('../../public/locales/vi/common.json').then((module) => module.default),
  "zh-CN": () => import('../../public/locales/zh/common.json').then((module) => module.default),
  "ar-SA": () => import('../../public/locales/ar/common.json').then((module) => module.default),
} as const;

export async function getDictionary(locale: Locale) {
  if (!(locale in dictionaries)) {
    return dictionaries["en-US"]();
  }
  
  try {
    return await dictionaries[locale as keyof typeof dictionaries]();
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    return dictionaries["en-US"]();
  }
}