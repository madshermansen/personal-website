import { useEffect, useState } from "react";
import { useProjectStore } from "../state/store";
import { getProjects } from "@/sanity/lib/client";

export default function useProjects() {
  const { projectData, setProjectData } = useProjectStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const oneHour = 1000 * 60 * 60;

    function fetchAndSetProjects() {
      getProjects().then((projects) => {
        console.log(projects);
        setProjectData(projects);
        setLoading(false);
      });
    }

    const isCacheValid = projectData.fetchedAt > Date.now() - oneHour;

    if (projectData.projects.length === 0 || !isCacheValid) {
      fetchAndSetProjects();
    } else {
      setLoading(false);
    }
  });

  return { projectData, loading };
}
