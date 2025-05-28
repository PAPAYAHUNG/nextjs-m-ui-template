import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type LayoutType = 'sidebar' | 'topbar' | 'mixed';
export type ColorType = 'integrate' | 'apparent';
export type PresetType = 'green' | 'blue' | 'purple' | 'orange' | 'red';
export type FontType = 'publicSans' | 'inter' | 'dmSans' | 'nunitoSans';

interface Settings {
  mode: boolean;
  contrast: boolean;
  rtl: boolean;
  compact: boolean;
  layout: LayoutType;
  color: ColorType;
  preset: PresetType;
  font: FontType;
  fontSize: number;
  setMode: (v: boolean) => void;
  setContrast: (v: boolean) => void;
  setRtl: (v: boolean) => void;
  setCompact: (v: boolean) => void;
  setLayout: (v: LayoutType) => void;
  setColor: (v: ColorType) => void;
  setPreset: (v: PresetType) => void;
  setFont: (v: FontType) => void;
  setFontSize: (v: number) => void;
}

const SettingsContext = createContext<Settings | undefined>(undefined);

const STORAGE_KEY = 'app-settings';

const defaultSettings = {
  mode: false,
  contrast: false,
  rtl: false,
  compact: false,
  layout: 'sidebar' as LayoutType,
  color: 'integrate' as ColorType,
  preset: 'green' as PresetType,
  font: 'publicSans' as FontType,
  fontSize: 16,
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState(defaultSettings.mode);
  const [contrast, setContrast] = useState(defaultSettings.contrast);
  const [rtl, setRtl] = useState(defaultSettings.rtl);
  const [compact, setCompact] = useState(defaultSettings.compact);
  const [layout, setLayout] = useState<LayoutType>(defaultSettings.layout);
  const [color, setColor] = useState<ColorType>(defaultSettings.color);
  const [preset, setPreset] = useState<PresetType>(defaultSettings.preset);
  const [font, setFont] = useState<FontType>(defaultSettings.font);
  const [fontSize, setFontSize] = useState<number>(defaultSettings.fontSize);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (typeof parsed.mode === 'boolean') setMode(parsed.mode);
        if (typeof parsed.contrast === 'boolean') setContrast(parsed.contrast);
        if (typeof parsed.rtl === 'boolean') setRtl(parsed.rtl);
        if (typeof parsed.compact === 'boolean') setCompact(parsed.compact);
        if (typeof parsed.layout === 'string') setLayout(parsed.layout);
        if (typeof parsed.color === 'string') setColor(parsed.color);
        if (typeof parsed.preset === 'string') setPreset(parsed.preset);
        if (typeof parsed.font === 'string') setFont(parsed.font);
        if (typeof parsed.fontSize === 'number') setFontSize(parsed.fontSize);
      } catch {}
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const settings = {
      mode,
      contrast,
      rtl,
      compact,
      layout,
      color,
      preset,
      font,
      fontSize,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [mode, contrast, rtl, compact, layout, color, preset, font, fontSize]);

  return (
    <SettingsContext.Provider
      value={{
        mode,
        contrast,
        rtl,
        compact,
        layout,
        color,
        preset,
        font,
        fontSize,
        setMode,
        setContrast,
        setRtl,
        setCompact,
        setLayout,
        setColor,
        setPreset,
        setFont,
        setFontSize,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within a SettingsProvider');
  return ctx;
};
