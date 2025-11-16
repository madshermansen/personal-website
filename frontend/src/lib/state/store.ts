import { Project } from "@/sanity/types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProjectStore {
  projectData: {
    projects: Project[];
    fetchedAt: number;
  };
  setProjectData: (projectData: Project[]) => void;
}

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set) => ({
      projectData: { projects: [], fetchedAt: 0 },
      setProjectData: (projects: Project[]) =>
        set({ projectData: { projects, fetchedAt: Date.now() } }),
    }),
    {
      name: "project-storage",
      storage: createJSONStorage(() => sessionStorage), // Use sessionStorage
    }
  )
);

// Theme definitions
export type ThemeName = 'tokyo-night' | 'synthwave' | 'cyberpunk' | 'gruvbox' | 'one-dark' | 'night-owl' | 'monokai-pro' | 'palenight';

export interface Theme {
  name: ThemeName;
  displayName: string;
  colors: {
    background: string;
    backgroundDark: string;
    backgroundLight: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
    cyan: string;
    purple: string;
    comment: string;
  };
}

export const themes: Record<ThemeName, Theme> = {
  'tokyo-night': {
    name: 'tokyo-night',
    displayName: 'Tokyo Night',
    colors: {
      background: '#1a1b26',
      backgroundDark: '#16161e',
      backgroundLight: '#24283b',
      text: '#c0caf5',
      primary: '#bb9af7',
      secondary: '#9ece6a',
      accent: '#e0af68',
      cyan: '#7dcfff',
      purple: '#bb9af7',
      comment: '#565f89',
    },
  },
  'synthwave': {
    name: 'synthwave',
    displayName: 'Synthwave \'84',
    colors: {
      background: '#2b213a',
      backgroundDark: '#241b2f',
      backgroundLight: '#34294f',
      text: '#f0eff1',
      primary: '#ff7edb',
      secondary: '#72f1b8',
      accent: '#fede5d',
      cyan: '#36f9f6',
      purple: '#b893ce',
      comment: '#848bbd',
    },
  },
  'cyberpunk': {
    name: 'cyberpunk',
    displayName: 'Cyberpunk',
    colors: {
      background: '#000b1e',
      backgroundDark: '#000814',
      backgroundLight: '#0a1929',
      text: '#00ff9f',
      primary: '#ff0080',
      secondary: '#00ff9f',
      accent: '#ffff00',
      cyan: '#00d9ff',
      purple: '#df00ff',
      comment: '#005f73',
    },
  },
  'gruvbox': {
    name: 'gruvbox',
    displayName: 'Gruvbox Dark',
    colors: {
      background: '#282828',
      backgroundDark: '#1d2021',
      backgroundLight: '#3c3836',
      text: '#ebdbb2',
      primary: '#fb4934',
      secondary: '#b8bb26',
      accent: '#fabd2f',
      cyan: '#8ec07c',
      purple: '#d3869b',
      comment: '#928374',
    },
  },
  'one-dark': {
    name: 'one-dark',
    displayName: 'One Dark Pro',
    colors: {
      background: '#282c34',
      backgroundDark: '#21252b',
      backgroundLight: '#2c313c',
      text: '#abb2bf',
      primary: '#c678dd',
      secondary: '#98c379',
      accent: '#e5c07b',
      cyan: '#56b6c2',
      purple: '#c678dd',
      comment: '#5c6370',
    },
  },
  'night-owl': {
    name: 'night-owl',
    displayName: 'Night Owl',
    colors: {
      background: '#011627',
      backgroundDark: '#010e1a',
      backgroundLight: '#152c3b',
      text: '#d6deeb',
      primary: '#c792ea',
      secondary: '#addb67',
      accent: '#ecc48d',
      cyan: '#7fdbca',
      purple: '#c792ea',
      comment: '#637777',
    },
  },
  'monokai-pro': {
    name: 'monokai-pro',
    displayName: 'Monokai Pro',
    colors: {
      background: '#2D2A2E',
      backgroundDark: '#221F22',
      backgroundLight: '#3E3B3F',
      text: '#FCFCFA',
      primary: '#FF6188',
      secondary: '#A9DC76',
      accent: '#FFD866',
      cyan: '#78DCE8',
      purple: '#AB9DF2',
      comment: '#727072',
    },
  },
  'palenight': {
    name: 'palenight',
    displayName: 'Material Palenight',
    colors: {
      background: '#292d3e',
      backgroundDark: '#1f2233',
      backgroundLight: '#34324a',
      text: '#a6accd',
      primary: '#c792ea',
      secondary: '#c3e88d',
      accent: '#ffcb6b',
      cyan: '#89ddff',
      purple: '#c792ea',
      comment: '#676e95',
    },
  },
};

interface ThemeStore {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentTheme: 'monokai-pro',
      setTheme: (theme: ThemeName) => set({ currentTheme: theme }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
);