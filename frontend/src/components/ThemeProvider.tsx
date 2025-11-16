'use client';

import { useEffect } from 'react';
import { useThemeStore, themes } from '@/lib/state/store';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    // Apply theme colors to CSS variables
    const theme = themes[currentTheme];
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [currentTheme]);

  return <>{children}</>;
}
