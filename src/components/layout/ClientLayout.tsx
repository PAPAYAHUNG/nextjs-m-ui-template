'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme/theme';
import DashboardLayout from './DashboardLayout';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout>{children}</DashboardLayout>
    </ThemeProvider>
  );
} 