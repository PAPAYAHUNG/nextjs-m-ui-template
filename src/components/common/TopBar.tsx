'use client';
import { AppBar, Toolbar, Box, Typography, IconButton, InputBase, Badge, Avatar, Menu, MenuItem, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ background: '#212531', boxShadow: 'none', borderBottom: '1px solid #23283B', zIndex: 1201 }}>
      <Toolbar sx={{ minHeight: 64, px: 3, justifyContent: 'space-between' }}>
        {/* Team Selector */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            avatar={<Avatar src="/team1.svg" sx={{ width: 24, height: 24 }} />}
            label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="body2" sx={{ fontWeight: 700, color: '#fff' }}>Team 1</Typography>
              <Chip label="Free" size="small" sx={{ ml: 1, fontSize: 10, height: 20, background: '#23283B', color: '#B0B8C1', fontWeight: 700 }} />
              <ArrowDropDownIcon sx={{ color: '#B0B8C1', ml: 0.5 }} />
            </Box>}
            sx={{ background: '#23283B', color: '#fff', height: 40, borderRadius: 2, px: 1.5, fontWeight: 700 }}
            clickable
          />
        </Box>

        {/* Search, Language, Notifications, Settings, User */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search */}
          <Box sx={{ display: 'flex', alignItems: 'center', background: '#23283B', borderRadius: 2, px: 1.5, py: 0.5, mr: 1 }}>
            <SearchIcon sx={{ color: '#B0B8C1', mr: 1 }} />
            <InputBase
              placeholder="⌘K"
              sx={{ color: '#fff', fontSize: 14, width: 60 }}
              inputProps={{ 'aria-label': 'search' }}
              disabled
            />
          </Box>

          {/* Language Switcher */}
          <LanguageSwitcher/>
          {/* <LanguageSwitcher /> */}

          {/* Notifications */}
          <IconButton sx={{ color: '#fff' }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Group/Status */}
          <IconButton sx={{ color: '#fff' }}>
            <GroupIcon />
          </IconButton>
          <FiberManualRecordIcon sx={{ color: '#FF5630', fontSize: 14, ml: -1, mr: 1 }} />

          {/* Settings */}
          <IconButton sx={{ color: '#fff' }}>
            <SettingsIcon />
          </IconButton>

          {/* User Avatar */}
          <IconButton onClick={handleMenu} sx={{ ml: 1, p: 0.5 }}>
            <Avatar src="/avatar.png" sx={{ width: 36, height: 36, border: '2px solid #23283B' }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 