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