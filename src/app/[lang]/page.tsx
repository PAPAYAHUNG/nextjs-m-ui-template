import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n-config';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await Promise.resolve(params);
  const dictionary = await getDictionary(lang as Locale);

  return (
    <main>
      <LanguageSwitcher />
      <h1>{dictionary.welcome}</h1>
    </main>
  );
}
