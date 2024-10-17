"use client";
import { FaGithub } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
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
          <div className="duration-150 flex flex-row rounded-lg gap-2 border-white border" key={project.slug.current}>
            <div className="w-full">
              <div className="p-2 w-full border-b">
                <h1 className="font-bold cursor-pointer hover:text-accent duration-75">
                  <Link href={`/projects/${project.slug.current}`}>{project.title}</Link>
                </h1>
                <h1>{project.description}</h1>
                <div className="flex flex-wrap gap-2 pt-2">
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
              <div className="p-2 flex gap-2">
              {project.github && (
                <Link href={project.github}>
                  <FaGithub
                    size={32}
                    className="hover:text-accent duration-75 ease-in-out"
                  />
                </Link>
              )}
              {project.url && (
                <Link href={project.url}>
                  <FaCirclePlay
                    size={32}
                    className="hover:text-accent duration-75 ease-in-out"
                  />
                </Link>
              )}
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}
