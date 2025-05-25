'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme/theme';
import DashboardLayout from './DashboardLayout';

interface ClientLayoutProps {
  children: React.ReactNode;
  lang: 'en' | 'fr' | 'vi' | 'zh' | 'ar';
  dictionary: Record<string, string | Record<string, string>>;
}

export default function ClientLayout({ children, lang, dictionary }: ClientLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout params={{ lang }} dictionary={dictionary}>
        {children}
      </DashboardLayout>
    </ThemeProvider>
  );
}
