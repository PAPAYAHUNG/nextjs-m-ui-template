"use client"; // Mark as client component since it uses client-side hooks

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Use your required codes and labels
const languages = [
  { code: "en-US", label: "English", flag: "🇬🇧" },
  { code: "vi-VN", label: "Vietnamese", flag: "🇻🇳" },
  { code: "fr-FR", label: "Français", flag: "🇫🇷" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const currentLocale = pathname.split("/")[1] || "en-US";
  const currentLang =
    languages.find((l) => l.code === currentLocale) || languages[0];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          borderRadius: "50%",
          minWidth: 40,
          p: 0,
          bgcolor: "background.paper",
          boxShadow: 1,
        }}
      >
        <span
          style={{ fontSize: 22 }}
          className="flex items-center justify-center"
        >
          {currentLang.flag}
        </span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: { borderRadius: 3, minWidth: 180, p: 1 },
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === currentLocale}
            onClick={() => handleLanguageChange(lang.code)}
            sx={{ borderRadius: 2, mb: 0.5 }}
          >
            <ListItemIcon>
              <span style={{ fontSize: 22 }}>{lang.flag}</span>
            </ListItemIcon>
            <ListItemText>{lang.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
