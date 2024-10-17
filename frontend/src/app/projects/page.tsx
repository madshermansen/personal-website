"use client"
import useProjects from "@/lib/hooks/useProjects";

export default function Projects() {
  const { projectData, loading } = useProjects();

  return (
    <main>
      <h1>Projects</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {projectData.projects.map((project) => (
            <li key={project.slug.current}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}

    </main>
  );
}
