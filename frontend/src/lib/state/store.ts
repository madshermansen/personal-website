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
export type ThemeName = 'monokai-pro' | 'dark' | 'light' | 'nord' | 'dracula';

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
  'dark': {
    name: 'dark',
    displayName: 'Dark',
    colors: {
      background: '#1E1E1E',
      backgroundDark: '#121212',
      backgroundLight: '#2D2D2D',
      text: '#D4D4D4',
      primary: '#569CD6',
      secondary: '#4EC9B0',
      accent: '#DCDCAA',
      cyan: '#4FC1FF',
      purple: '#C586C0',
      comment: '#6A9955',
    },
  },
  'light': {
    name: 'light',
    displayName: 'Light',
    colors: {
      background: '#FFFFFF',
      backgroundDark: '#F3F3F3',
      backgroundLight: '#FAFAFA',
      text: '#000000',
      primary: '#0066CC',
      secondary: '#008000',
      accent: '#795E26',
      cyan: '#0070C1',
      purple: '#AF00DB',
      comment: '#008000',
    },
  },
  'nord': {
    name: 'nord',
    displayName: 'Nord',
    colors: {
      background: '#2E3440',
      backgroundDark: '#242933',
      backgroundLight: '#3B4252',
      text: '#ECEFF4',
      primary: '#88C0D0',
      secondary: '#A3BE8C',
      accent: '#EBCB8B',
      cyan: '#8FBCBB',
      purple: '#B48EAD',
      comment: '#616E88',
    },
  },
  'dracula': {
    name: 'dracula',
    displayName: 'Dracula',
    colors: {
      background: '#282A36',
      backgroundDark: '#1E1F29',
      backgroundLight: '#343746',
      text: '#F8F8F2',
      primary: '#FF79C6',
      secondary: '#50FA7B',
      accent: '#F1FA8C',
      cyan: '#8BE9FD',
      purple: '#BD93F9',
      comment: '#6272A4',
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