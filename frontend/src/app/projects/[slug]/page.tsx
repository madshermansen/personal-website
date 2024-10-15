"use client";
import useProjects from "@/lib/hooks/useProjects";
import { FaGithub } from "react-icons/fa";

export default function Page({ params }: { params: { slug: string } }) {
  const { projectData, loading } = useProjects();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!loading && projectData.projects.length === 0) {
    return <h1>No projects found</h1>;
  }

  // Find the project by slug  console.log(projectData.projects);

  const project = projectData.projects.find(
    (project) => project.slug.current === params.slug,
  );

  // Handle case where project is not found
  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.url && (
        <a href={project.url}>
          <h1>Check out the demo</h1>
        </a>
      )}
      {project.github && (
        <a href={project.github}>
          <FaGithub size={32} />
        </a>
      )}
      <div>
        {project.tags &&
          project.tags.map((tag: string) => <h1 key={tag}>{tag}</h1>)}
      </div>
    </div>
  );
}
