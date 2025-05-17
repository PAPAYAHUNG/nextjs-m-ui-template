import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2065D1',
      light: '#84A9FF',
      dark: '#0C53B7',
    },
    secondary: {
      main: '#00AB55',
      light: '#33CC7A',
      dark: '#007B55',
    },
    background: {
      default: '#181C24',
      paper: '#222736',
    },
    text: {
      primary: '#fff',
      secondary: '#B0B8C1',
    },
  },
  typography: {
    fontFamily: '"Public Sans", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
          backgroundColor: '#222736',
        },
      },
    },
  },
}); 