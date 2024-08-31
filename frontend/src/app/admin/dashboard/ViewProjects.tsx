import useAuthStore from "@/lib/state/authStore";
import { useEffect, useState } from "react";
import selectProjects from "./dbUtils/selectProjects";
import { QueryResultRow } from "@vercel/postgres";
import { enqueueSnackbar } from "notistack";
import { Button } from "@/components/ui/button";
import { deleteProject } from "./dbUtils/editProject";

export default function ViewProjects() {
  const { authToken } = useAuthStore();

  const [projects, setProjects] = useState<QueryResultRow>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!loaded) {
        const response = await selectProjects();
        if (response.error) {
          enqueueSnackbar(response.error, { variant: "error" });
        } else {
          if (response.project) {
            setProjects(response.project);
            setLoaded(true);
          }
        }
      }
    }
    fetchData();
  }),
    [];

  return (
    <div>
      <h1>Projects</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 bg-background text-left font-bold">Title</th>
            <th className="p-4 bg-background text-left font-bold">
              Description
            </th>
            <th className="p-4 bg-background text-left font-bold">Image</th>
            <th className="p-4 bg-background text-left font-bold">Demo</th>
            <th className="p-4 bg-background text-left font-bold">GitHub</th>
            <th className="p-4 bg-background text-left font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project: any) => (
            <tr key={project.id} className="border-b hover:bg-accent">
              <td className="p-4">{project.title || "NULL"}</td>
              <td className="p-4">{project.description || "NULL"}</td>
              <td className="p-4">
                {project.image_url && (
                  <a
                    href={project.image_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Image
                  </a>
                )}
                {!project.image_url && "NULL"}
              </td>
              <td className="p-4">
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                )}
                {!project.demo_url && "NULL"}
              </td>
              <td className="p-4">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
                {!project.github_url && "NULL"}
              </td>
              <td className="p-4">
                <Button className="bg-primary font-bold montserrat text-black hover:bg-active w-full">
                  Edit
                </Button>
                <Button
                  className="bg-primary font-bold montserrat text-black hover:bg-active w-full"
                  onClick={async () => {
                    if (authToken === undefined) {
                      enqueueSnackbar("Unauthorized", { variant: "warning" });
                      return;
                    }
                    const result = await deleteProject(authToken, project.id);
                    if (result.error) {
                      enqueueSnackbar(result.error, { variant: "error" });
                      return;
                    }
                    if (result.project) {
                      enqueueSnackbar("Project deleted", { variant: "success" });
                      setProjects(projects.filter((p: any) => p.id !== project.id));
                    }
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
