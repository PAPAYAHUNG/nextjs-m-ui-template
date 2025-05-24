'use client';
import { usePathname, useRouter } from 'next/navigation';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
  Chip,
  Badge,
  Tooltip,
  Collapse,
} from '@mui/material';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import sidebarConfig, { SidebarItem } from '../layout/sidebarConfig';
import Image from 'next/image';

const drawerWidth = 260;

function getDictValue(dictionary: Record<string, unknown>, key: string): string {
  const keys = key.split('.');
  let result: unknown = dictionary;
  for (const k of keys) {
    if (typeof result === 'object' && result !== null && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return '';
    }
  }
  return typeof result === 'string' ? result : '';
}

export default function Sidebar({ dictionary }: { dictionary: Record<string, unknown> }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleItemClick = (item: SidebarItem) => {
    if (item.children && item.children.length > 0) {
      setOpenItems(prev => ({
        ...prev,
        [item.label]: !prev[item.label],
      }));
    } else if (item.path) {
      const path = item.path.startsWith('/') ? item.path : `/${item.path}`;
      router.push(path);
    }
  };

  const renderMenuItem = (item: SidebarItem, level = 0) => {
    const isActive = pathname?.startsWith(item.path || '/');
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openItems[item.label];

    return (
      <Tooltip
        key={item.label}
        title={item.caption ? getDictValue(dictionary, item.caption) : ''}
        placement="right"
        arrow
        disableHoverListener={!item.caption}
      >
        <span>
          <ListItem disablePadding sx={{ opacity: item.disabled ? 0.5 : 1 }}>
            <ListItemButton
              selected={isActive}
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
              sx={{
                borderRadius: 2,
                mx: 1,
                my: 0.5,
                pl: level * 2 + 2,
                backgroundColor: isActive ? 'rgba(32,101,209,0.12)' : 'transparent',
                '&.Mui-selected': {
                  backgroundColor: '#222736',
                  color: '#00AB55',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                {item.icon && <item.icon />}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <span>{getDictValue(dictionary, item.label)}</span>
                    {item.chipLabel && (
                      <Chip
                        label={getDictValue(dictionary, item.chipLabel)}
                        size="small"
                        color={item.chipColor || 'default'}
                        sx={{ ml: 1, fontWeight: 700, fontSize: 10 }}
                      />
                    )}
                  </Box>
                }
                secondary={item.caption ? getDictValue(dictionary, item.caption) : undefined}
                secondaryTypographyProps={{ sx: { fontSize: 10, color: '#7C8FAC' } }}
              />
              {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
              {item.badge && (
                <Badge
                  badgeContent={item.badge}
                  color={item.badgeColor || 'error'}
                  sx={{ ml: 2 }}
                />
              )}
            </ListItemButton>
          </ListItem>
          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.children?.map(child => renderMenuItem(child, level + 1))}
              </List>
            </Collapse>
          )}
        </span>
      </Tooltip>
    );
  };

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
          <Image src="/logo.svg" alt="Logo" width={32} height={32} priority />
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <Box sx={{ flex: 1, overflowY: 'auto', pt: 1 }}>
          {sidebarConfig.map(section => (
            <Box key={section.subheader} sx={{ mb: 2 }}>
              <Typography
                variant="caption"
                sx={{ color: '#7C8FAC', pl: 3, mb: 1, letterSpacing: 1, fontWeight: 700 }}
              >
                {getDictValue(dictionary, section.subheader)}
              </Typography>
              <List disablePadding>{section.items.map(item => renderMenuItem(item))}</List>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
