"use client";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import useProjects from "@/lib/hooks/useProjects";

export default function RecentProjectList() {
  const { projectData, loading } = useProjects();

  if (loading || projectData.projects.length === 0) {
    return (
      <div className="font-mono text-sm">
        {loading && <p className="monokai-comment">// Loading projects...</p>}
        {!loading && projectData.projects.length === 0 && (
          <p className="monokai-comment">// No projects found</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {projectData.projects.map((project) => (
        <Link key={project.slug.current} href={`/projects/${project.slug.current}`}>
          <div className="flex flex-col gap-2 p-4 bg-primary/5 border-l-4 border-primary/50 rounded hover:bg-primary/10 hover:border-primary transition-all duration-300">
            <h3 className="text-lg font-semibold monokai-string">
              {project.title}
            </h3>

            <p className="text-text/80 leading-relaxed text-sm">
              {project.description}
            </p>

            {project.url && (
              <Link href={project.url} className="monokai-property hover:monokai-string transition-colors text-sm">
                → Live Demo
              </Link>
            )}

            {project.github && (
              <Link href={project.github} className="flex items-center gap-2 monokai-property hover:monokai-string transition-colors">
                <FaGithub size={18} />
                <span className="text-sm">View Source</span>
              </Link>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary/10 monokai-value border border-secondary/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
