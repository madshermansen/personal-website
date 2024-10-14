"use client";
import { QueryResultRow } from "@vercel/postgres";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useProjectStore } from "@/lib/state/store";
import { getProjects } from "@/sanity/lib/client";

export default function RecentProjectList() {

  const { projectData, setProjectData } = useProjectStore();

  useEffect(() => {
    if (projectData.fetchedAt > Date.now() - 1000 * 60 * 60) {return}
    if (projectData.projects.length > 0) {return}

    const projects = getProjects()

    setProjectData({ projects, fetchedAt: Date.now() });
    
  });

  if (projectData.projects.length < 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {projectData.projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.id}`}>
          <div
            key={project.id}
            className="hover:bg-primary hover:bg-opacity-20 duration-150 flex flex-row rounded-lg gap-2"
          >
            <div>
              <h1 className="font-bold cursor-pointer hover:text-accent">
                {project.title}
              </h1>
              <h1>{project.description}</h1>
              {project.demo_url && (
                <Link href={project.demo_url}>
                  <h1 className="cursor-pointer hover:text-accent font-bold">
                    Check out the demo
                  </h1>
                </Link>
              )}
              {project.github_url && (
                <Link href={project.github_url}>
                  <FaGithub
                    size={32}
                    className="hover:text-accent duration-75 ease-in-out"
                  />
                </Link>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags &&
                  project.tags.split(",").map((tag: string) => (
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
