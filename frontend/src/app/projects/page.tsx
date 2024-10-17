"use client";
import useProjects from "@/lib/hooks/useProjects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Projects() {

  const { projectData, loading } = useProjects();
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>Projects</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Github URL</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          {projectData.projects.map((project) => (
            <tr
              key={project.slug.current}
            >
              <td className="hover:text-accent font-bold"><Link href={
                `/projects/${project.slug.current}`
              }>{project.title}</Link></td>
              <td>{project.description}</td>
              <td>
                {project.tags &&
                  project.tags.map((tag: string) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
              </td>
              <td>
                <Link href={project.github}>
                  <FaGithub />
                </Link>
              </td>
              <td>
                {project.url && (
                  <Link href={project.url}>
                    Demo
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}