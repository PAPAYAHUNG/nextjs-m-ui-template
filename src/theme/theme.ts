import { createTheme, Theme } from '@mui/material/styles';
import type { PresetType, FontType } from '@/contexts/SettingsContext';

export interface ThemeSettings {
  mode: boolean;
  contrast: boolean;
  preset: PresetType;
  font: FontType;
  fontSize: number;
}

const presetColors = {
  green: {
    primary: { main: '#00AB55', light: '#33CC7A', dark: '#007B55' },
    secondary: { main: '#2065D1', light: '#84A9FF', dark: '#0C53B7' },
  },
  blue: {
    primary: { main: '#2065D1', light: '#84A9FF', dark: '#0C53B7' },
    secondary: { main: '#00AB55', light: '#33CC7A', dark: '#007B55' },
  },
  purple: {
    primary: { main: '#8e24aa', light: '#bc52d3', dark: '#5c007a' },
    secondary: { main: '#2065D1', light: '#84A9FF', dark: '#0C53B7' },
  },
  orange: {
    primary: { main: '#FF9800', light: '#FFC947', dark: '#C66900' },
    secondary: { main: '#2065D1', light: '#84A9FF', dark: '#0C53B7' },
  },
  red: {
    primary: { main: '#FF5630', light: '#FFAC82', dark: '#B71D18' },
    secondary: { main: '#2065D1', light: '#84A9FF', dark: '#0C53B7' },
  },
};

const fontFamilies: Record<FontType, string> = {
  publicSans: '"Public Sans", sans-serif',
  inter: 'Inter, sans-serif',
  dmSans: 'DM Sans, sans-serif',
  nunitoSans: 'Nunito Sans, sans-serif',
};

export function getTheme({ mode, contrast, preset, font, fontSize }: ThemeSettings): Theme {
  const paletteMode = mode ? 'dark' : 'light';
  const paletteContrast = contrast
    ? {
        background: { default: '#11131A', paper: '#181C24' },
        text: { primary: '#fff', secondary: '#B0B8C1' },
      }
    : {
        background: { default: '#181C24', paper: '#222736' },
        text: { primary: '#fff', secondary: '#B0B8C1' },
      };
  const presetPalette = presetColors[preset] || presetColors.green;
  return createTheme({
    palette: {
      mode: paletteMode,
      primary: presetPalette.primary,
      secondary: presetPalette.secondary,
      ...paletteContrast,
    },
    typography: {
      fontFamily: fontFamilies[font],
      fontSize,
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow:
              '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
            backgroundColor: paletteContrast.background.paper,
          },
        },
      },
    },
  });
}

// Default export for compatibility (static theme)
export const theme = getTheme({
  mode: true,
  contrast: false,
  preset: 'blue',
  font: 'publicSans',
  fontSize: 16,
});
