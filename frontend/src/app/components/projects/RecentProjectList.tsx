"use client";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import useProjects from "@/lib/hooks/useProjects";

export default function RecentProjectList() {
  const { projectData, loading } = useProjects();

  if (loading || projectData.projects.length === 0) {
    return (
      <div>
        {loading && <h1>Loading...</h1>}
        {!loading && projectData.projects.length === 0 && (
          <h1>No projects found</h1>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {projectData.projects.map((project) => (
        <Link
          key={project.slug.current}
          href={`/projects/${project.slug.current}`}
        >
          <div className="hover:bg-primary hover:bg-opacity-20 duration-150 flex flex-row rounded-lg gap-2">
            <div>
              <h1 className="font-bold cursor-pointer hover:text-accent">
                {project.title}
              </h1>
              <h1>{project.description}</h1>
              {project.url && (
                <Link href={project.url}>
                  <h1 className="cursor-pointer hover:text-accent font-bold">
                    Check out the demo
                  </h1>
                </Link>
              )}
              {project.github && (
                <Link href={project.github}>
                  <FaGithub
                    size={32}
                    className="hover:text-accent duration-75 ease-in-out"
                  />
                </Link>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags &&
                  project.tags.map((tag: string) => (
                    <h1
                      key={tag}
                      className="bg-secondary text-secondary bg-opacity-10 rounded-md p-1 w-fit h-fit"
                    >
                      {tag}
                    </h1>
                  ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
