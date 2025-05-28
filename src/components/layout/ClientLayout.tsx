'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '@/theme/theme';
import DashboardLayout from './DashboardLayout';
import { SettingsProvider, useSettings } from '@/contexts/SettingsContext';
import React, { useEffect } from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
  lang: 'en' | 'fr' | 'vi' | 'zh' | 'ar';
  dictionary: Record<string, string | Record<string, string>>;
}

function ClientLayoutInner({ children, lang, dictionary }: ClientLayoutProps) {
  const { mode, contrast, preset, font, fontSize, rtl } = useSettings();
  const theme = getTheme({ mode, contrast, preset, font, fontSize });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.dir = rtl ? 'rtl' : 'ltr';
    }
  }, [rtl]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout params={{ lang }} dictionary={dictionary}>
        {children}
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default function ClientLayout(props: ClientLayoutProps) {
  return (
    <SettingsProvider>
      <ClientLayoutInner {...props} />
    </SettingsProvider>
  );
}
