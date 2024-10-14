import { create } from "zustand";

interface ProjectStore {
  projectData: {projects: any[], fetchedAt: number};
  setProjectData: (projectData: any) => void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  projectData: {projects: [], fetchedAt: Date.now()},
  setProjectData: (projectData: any) => set({ projectData }),
}));
