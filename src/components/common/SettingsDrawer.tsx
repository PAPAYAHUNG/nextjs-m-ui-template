import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Switch,
  Grid,
  Button,
  Tooltip,
  ButtonProps,
  Paper,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSettings } from '@/contexts/SettingsContext';
import type { LayoutType, ColorType, PresetType } from '@/contexts/SettingsContext';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ContrastIcon from '@mui/icons-material/Contrast';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';

const layoutOptions = [
  {
    value: 'sidebar',
    label: 'Sidebar',
    icon: (
      <Box
        sx={{
          width: 28,
          height: 20,
          bgcolor: '#1A2332',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          p: 0.5,
        }}
      >
        <Box sx={{ width: 6, height: 16, bgcolor: '#2065D1', borderRadius: 1 }} />
      </Box>
    ),
  },
  {
    value: 'topbar',
    label: 'Topbar',
    icon: (
      <Box
        sx={{
          width: 28,
          height: 20,
          bgcolor: '#1A2332',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          p: 0.5,
        }}
      >
        <Box sx={{ width: 20, height: 4, bgcolor: '#2065D1', borderRadius: 1, mb: 0.5 }} />
        <Box sx={{ width: 20, height: 10, bgcolor: '#222736', borderRadius: 1 }} />
      </Box>
    ),
  },
  {
    value: 'mixed',
    label: 'Mixed',
    icon: (
      <Box
        sx={{
          width: 28,
          height: 20,
          bgcolor: '#1A2332',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'row',
          p: 0.5,
        }}
      >
        <Box sx={{ width: 6, height: 16, bgcolor: '#2065D1', borderRadius: 1, mr: 0.5 }} />
        <Box sx={{ width: 14, height: 16, bgcolor: '#222736', borderRadius: 1 }} />
      </Box>
    ),
  },
];
const colorOptions = [
  {
    value: 'integrate',
    label: 'Integrate',
    icon: (
      <Box
        sx={{
          width: 20,
          height: 20,
          borderRadius: 1,
          bgcolor: '#2065D1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: 10, height: 10, bgcolor: '#fff', borderRadius: 0.5 }} />
      </Box>
    ),
  },
  {
    value: 'apparent',
    label: 'Apparent',
    icon: (
      <Box
        sx={{
          width: 20,
          height: 20,
          borderRadius: 1,
          bgcolor: '#232936',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: 10, height: 10, bgcolor: '#B0B8C1', borderRadius: 0.5 }} />
      </Box>
    ),
  },
];
const presetOptions = [
  { value: 'green', color: 'success' },
  { value: 'blue', color: 'primary' },
  { value: 'purple', color: 'secondary', sx: { bgcolor: '#8e24aa' } },
  { value: 'orange', color: 'warning' },
  { value: 'red', color: 'error' },
];

interface SettingsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const cardSx = {
  p: 2.5,
  borderRadius: 3,
  boxShadow: '0 2px 16px 0 rgba(32,101,209,0.08)',
  bgcolor: '#202534',
  border: '1px solid #23283B',
  mb: 2,
};

const sectionSx = {
  p: 2,
  borderRadius: 3,
  bgcolor: '#181C24',
  border: '1px solid #23283B',
  mb: 3,
};

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ open, onClose }) => {
  const {
    mode,
    contrast,
    rtl,
    compact,
    layout,
    color,
    preset,
    setMode,
    setContrast,
    setRtl,
    setCompact,
    setLayout,
    setColor,
    setPreset,
  } = useSettings();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: 400,
          background: 'linear-gradient(135deg, #181C24 60%, #23283B 100%)',
          color: '#fff',
          p: 3,
          borderTopLeftRadius: 24,
          borderBottomLeftRadius: 24,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" fontWeight={800} letterSpacing={0.5} sx={{ color: '#fff' }}>
          Settings
        </Typography>
        <Box>
          <IconButton size="small" sx={{ color: '#fff', mr: 1, opacity: 0.7 }}>
            <Box
              component="span"
              sx={{
                width: 8,
                height: 8,
                bgcolor: 'error.main',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff', mr: 1, opacity: 0.7 }}>
            <Box
              component="span"
              sx={{
                width: 18,
                height: 18,
                border: '1px solid #fff',
                borderRadius: '4px',
                display: 'inline-block',
              }}
            />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff', opacity: 0.7 }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2} mb={1}>
        <Grid size={6}>
          <Paper elevation={3} sx={cardSx}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" gap={1.5}>
                <Brightness2Icon sx={{ color: '#7C8FAC', fontSize: 28 }} />
                <Typography fontWeight={700} fontSize={16}>
                  Mode
                </Typography>
              </Box>
              <Switch color="success" checked={mode} onChange={(_, v) => setMode(v)} />
            </Box>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper elevation={3} sx={cardSx}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" gap={1.5}>
                <ContrastIcon sx={{ color: '#7C8FAC', fontSize: 28 }} />
                <Typography fontWeight={700} fontSize={16}>
                  Contrast
                </Typography>
              </Box>
              <Switch color="success" checked={contrast} onChange={(_, v) => setContrast(v)} />
            </Box>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper elevation={3} sx={cardSx}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" gap={1.5}>
                <FormatTextdirectionRToLIcon sx={{ color: '#7C8FAC', fontSize: 28 }} />
                <Typography fontWeight={700} fontSize={16}>
                  Right to left
                </Typography>
              </Box>
              <Switch color="success" checked={rtl} onChange={(_, v) => setRtl(v)} />
            </Box>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper elevation={3} sx={cardSx}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              position="relative"
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                <ViewCompactIcon sx={{ color: '#7C8FAC', fontSize: 28 }} />
                <Typography fontWeight={700} fontSize={16}>
                  Compact
                </Typography>
              </Box>
              <Switch color="success" checked={compact} onChange={(_, v) => setCompact(v)} />
              <Tooltip title="Compact mode info" placement="top">
                <IconButton
                  size="small"
                  sx={{ position: 'absolute', top: 8, right: 8, color: '#7C8FAC', opacity: 0.7 }}
                >
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.08)' }} />
      <Paper elevation={0} sx={sectionSx}>
        <Typography
          variant="subtitle1"
          fontWeight={800}
          sx={{
            color: '#fff',
            mb: 2,
            letterSpacing: 1,
            fontSize: 15,
            display: 'inline-flex',
            alignItems: 'center',
            px: 1.5,
            py: 0.5,
            bgcolor: '#232936',
            borderRadius: 2,
          }}
        >
          Nav
          <Tooltip title="Navigation layout options" placement="right">
            <InfoOutlinedIcon sx={{ ml: 1, fontSize: 18, color: '#7C8FAC' }} />
          </Tooltip>
        </Typography>
        <Box mt={2} mb={2}>
          <Typography variant="body2" mb={1} fontWeight={700} sx={{ color: '#B0B8C1' }}>
            Layout
          </Typography>
          <Box display="flex" gap={2} mb={2}>
            {layoutOptions.map(opt => (
              <Button
                key={opt.value}
                variant={layout === opt.value ? 'contained' : 'outlined'}
                color={layout === opt.value ? 'primary' : 'inherit'}
                sx={{
                  minWidth: 56,
                  minHeight: 44,
                  borderRadius: 2,
                  borderColor: layout === opt.value ? '#2065D1' : '#232936',
                  bgcolor: layout === opt.value ? '#222736' : 'transparent',
                  boxShadow: layout === opt.value ? '0 2px 8px 0 rgba(32,101,209,0.12)' : 'none',
                  color: layout === opt.value ? '#fff' : '#7C8FAC',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: '#232936',
                    borderColor: '#2065D1',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.5,
                }}
                onClick={() => setLayout(opt.value as LayoutType)}
              >
                {opt.icon}
                <Typography fontSize={12} fontWeight={600} sx={{ mt: 0.5 }}>
                  {opt.label}
                </Typography>
              </Button>
            ))}
          </Box>
          <Typography variant="body2" mb={1} fontWeight={700} sx={{ color: '#B0B8C1' }}>
            Color
          </Typography>
          <Box display="flex" gap={2} mb={2}>
            {colorOptions.map(opt => (
              <Button
                key={opt.value}
                variant={color === opt.value ? 'contained' : 'outlined'}
                color={color === opt.value ? 'primary' : 'inherit'}
                sx={{
                  minWidth: 56,
                  borderRadius: 2,
                  borderColor: color === opt.value ? '#2065D1' : '#232936',
                  bgcolor: color === opt.value ? '#222736' : 'transparent',
                  color: color === opt.value ? '#fff' : '#7C8FAC',
                  boxShadow: color === opt.value ? '0 2px 8px 0 rgba(32,101,209,0.12)' : 'none',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: '#232936',
                    borderColor: '#2065D1',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 0.5,
                }}
                onClick={() => setColor(opt.value as ColorType)}
              >
                {opt.icon}
                <Typography fontSize={12} fontWeight={600} sx={{ mt: 0.5 }}>
                  {opt.label}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
      </Paper>
      <Paper elevation={0} sx={sectionSx}>
        <Typography
          variant="subtitle1"
          fontWeight={800}
          sx={{
            color: '#fff',
            mb: 2,
            letterSpacing: 1,
            fontSize: 15,
            display: 'inline-flex',
            alignItems: 'center',
            px: 1.5,
            py: 0.5,
            bgcolor: '#232936',
            borderRadius: 2,
          }}
        >
          <Box component="span" sx={{ mr: 1 }}>
            <IconButton size="small" sx={{ color: '#7C8FAC', p: 0, mr: 0.5 }}>
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
          Presets
        </Typography>
        <Box mt={2} display="flex" flexWrap="wrap" gap={2} justifyContent="center">
          {presetOptions.map(opt => (
            <Button
              key={opt.value}
              variant={preset === opt.value ? 'contained' : 'outlined'}
              color={opt.color as ButtonProps['color']}
              sx={{
                minWidth: 56,
                minHeight: 44,
                borderRadius: 2,
                ...(opt.sx || {}),
                opacity: preset === opt.value ? 1 : 0.7,
                boxShadow: preset === opt.value ? '0 2px 8px 0 rgba(32,101,209,0.12)' : 'none',
                borderColor: preset === opt.value ? '#2065D1' : '#232936',
                bgcolor: preset === opt.value ? '#222736' : 'transparent',
                color: preset === opt.value ? '#fff' : '#7C8FAC',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: '#232936',
                  borderColor: '#2065D1',
                },
              }}
              onClick={() => setPreset(opt.value as PresetType)}
            />
          ))}
        </Box>
      </Paper>
    </Drawer>
  );
};

export default SettingsDrawer;
