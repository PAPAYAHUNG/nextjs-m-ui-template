import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, Box, Chip, Badge, Tooltip, IconButton, Collapse } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import sidebarConfig, { SidebarItem } from '../layout/sidebarConfig';

const drawerWidth = 260;
const miniWidth = 80;

function isChildActive(children: SidebarItem[] = [], pathname: string) {
  return children.some((child) =>
    child.path && pathname.startsWith(child.path)
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleToggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? miniWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? miniWidth : drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#181C24',
          color: '#fff',
          borderRight: 'none',
          transition: 'width 0.2s',
          overflowX: 'hidden',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Logo and Collapse Button */}
        <Box sx={{ p: 3, pb: 2, display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'space-between' }}>
          <img src="/logo.svg" alt="Logo" style={{ height: 32 }} />
          <IconButton onClick={() => setCollapsed((c) => !c)} sx={{ ml: collapsed ? 0 : 1, color: '#7C8FAC' }}>
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <Box sx={{ flex: 1, overflowY: 'auto', pt: 1 }}>
          {sidebarConfig.map((section) => (
            <Box key={section.subheader} sx={{ mb: 2 }}>
              {!collapsed && (
                <Typography variant="caption" sx={{ color: '#7C8FAC', pl: 3, mb: 1, letterSpacing: 1, fontWeight: 700 }}>
                  {section.subheader}
                </Typography>
              )}
              <List disablePadding>
                {section.items.map((item) => {
                  const isActive = pathname.startsWith(item.path || '/');
                  const Icon = item.icon;
                  const hasChildren = item.children && item.children.length > 0;
                  const childActive = hasChildren && isChildActive(item.children, pathname);
                  const expanded = openMenus[item.label] || childActive;
                  const listItem = (
                    <ListItemButton
                      selected={isActive || childActive}
                      disabled={item.disabled}
                      onClick={hasChildren && !collapsed ? () => handleToggleMenu(item.label) : undefined}
                      sx={{
                        borderRadius: 2,
                        mx: 1,
                        my: 0.5,
                        backgroundColor: (isActive || childActive) ? 'rgba(32,101,209,0.12)' : 'transparent',
                        '&.Mui-selected': {
                          backgroundColor: '#222736',
                          color: '#00AB55',
                        },
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        minHeight: 48,
                        px: collapsed ? 0 : 2,
                      }}
                    >
                      <ListItemIcon sx={{ color: 'inherit', minWidth: 36, justifyContent: 'center' }}><Icon /></ListItemIcon>
                      {!collapsed && (
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
                      )}
                      {item.badge && !collapsed && (
                        <Badge
                          badgeContent={item.badge}
                          color={item.badgeColor || 'error'}
                          sx={{ ml: 2 }}
                        />
                      )}
                      {hasChildren && !collapsed && (
                        expanded ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />
                      )}
                    </ListItemButton>
                  );
                  return (
                    <Tooltip key={item.label} title={collapsed ? item.label : item.caption || ''} placement="right" arrow disableHoverListener={!collapsed && !item.caption}>
                      <span>
                        <ListItem disablePadding sx={{ opacity: item.disabled ? 0.5 : 1, flexDirection: 'column', alignItems: 'stretch' }}>
                          {listItem}
                          {hasChildren && !collapsed && (
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {item.children!.map((child) => {
                                  const ChildIcon = child.icon;
                                  const childIsActive = pathname.startsWith(child.path || '/');
                                  return (
                                    <ListItemButton
                                      key={child.label}
                                      selected={childIsActive}
                                      disabled={child.disabled}
                                      sx={{
                                        pl: 6,
                                        borderRadius: 2,
                                        mx: 1,
                                        my: 0.5,
                                        backgroundColor: childIsActive ? 'rgba(32,101,209,0.12)' : 'transparent',
                                        '&.Mui-selected': {
                                          backgroundColor: '#222736',
                                          color: '#00AB55',
                                        },
                                      }}
                                    >
                                      {ChildIcon && <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}><ChildIcon /></ListItemIcon>}
                                      <ListItemText primary={child.label} />
                                      {child.badge && (
                                        <Badge
                                          badgeContent={child.badge}
                                          color={child.badgeColor || 'error'}
                                          sx={{ ml: 2 }}
                                        />
                                      )}
                                    </ListItemButton>
                                  );
                                })}
                              </List>
                            </Collapse>
                          )}
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