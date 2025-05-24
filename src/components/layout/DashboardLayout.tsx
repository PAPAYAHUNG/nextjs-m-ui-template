"use client";
import { ReactNode } from "react";
import Sidebar from "../common/Sidebar";
import TopBar from "../common/TopBar";
import { Box } from "@mui/material";

interface DashboardLayoutProps {
  children: ReactNode;
  params: { lang: "en" | "fr" | "vi" | "zh" | "ar" };
  dictionary: Record<string, string | Record<string, string>>;
}

export default function DashboardLayout({
  children,
  dictionary,
}: DashboardLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar dictionary={dictionary} />
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
