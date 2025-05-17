import { usePathname } from 'next/navigation';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, Box, Chip, Badge, Tooltip } from '@mui/material';
import sidebarConfig from './sidebarConfig';

const drawerWidth = 260;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#181C24',
          color: '#fff',
          borderRight: 'none',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Logo */}
        <Box sx={{ p: 3, pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/logo.svg" alt="Logo" style={{ height: 32 }} />
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <Box sx={{ flex: 1, overflowY: 'auto', pt: 1 }}>
          {sidebarConfig.map((section) => (
            <Box key={section.subheader} sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#7C8FAC', pl: 3, mb: 1, letterSpacing: 1, fontWeight: 700 }}>
                {section.subheader}
              </Typography>
              <List disablePadding>
                {section.items.map((item) => {
                  const isActive = pathname.startsWith(item.path || '/');
                  return (
                    <Tooltip key={item.label} title={item.caption || ''} placement="right" arrow disableHoverListener={!item.caption}>
                      <span>
                        <ListItem disablePadding sx={{ opacity: item.disabled ? 0.5 : 1 }}>
                          <ListItemButton
                            selected={isActive}
                            disabled={item.disabled}
                            sx={{
                              borderRadius: 2,
                              mx: 1,
                              my: 0.5,
                              backgroundColor: isActive ? 'rgba(32,101,209,0.12)' : 'transparent',
                              '&.Mui-selected': {
                                backgroundColor: '#222736',
                                color: '#00AB55',
                              },
                            }}
                          >
                            <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>{item.icon}</ListItemIcon>
                            <ListItemText
                              primary={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <span>{item.label}</span>
                                  {item.chipLabel && (
                                    <Chip
                                      label={item.chipLabel}
                                      size="small"
                                      color={item.chipColor || 'default'}
                                      sx={{ ml: 1, fontWeight: 700, fontSize: 10 }}
                                    />
                                  )}
                                </Box>
                              }
                              secondary={item.caption}
                              secondaryTypographyProps={{ sx: { fontSize: 10, color: '#7C8FAC' } }}
                            />
                            {item.badge && (
                              <Badge
                                badgeContent={item.badge}
                                color={item.badgeColor || 'error'}
                                sx={{ ml: 2 }}
                              />
                            )}
                          </ListItemButton>
                        </ListItem>
                      </span>
                    </Tooltip>
                  );
                })}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
} 