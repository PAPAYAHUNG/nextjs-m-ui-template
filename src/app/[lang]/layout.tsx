import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import ClientLayout from '@/components/layout/ClientLayout';
import { getDictionary } from '@/lib/dictionary';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Analytics Dashboard',
  description: 'A modern analytics dashboard built with Next.js and Material-UI',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: 'en' | 'fr' | 'vi' | 'zh' | 'ar' };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout lang={lang} dictionary={dictionary}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
