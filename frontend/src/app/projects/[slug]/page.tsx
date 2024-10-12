"use client"
import { getProjectByID } from "@/app/components/projects/getProjects";
import { QueryResultRow } from "@vercel/postgres";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: number } }) {

    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState<QueryResultRow | null>(null);

    useEffect(() => {
        getProjectByID(params.slug).then((project) => {
            setProject(project);
            setLoading(false);
        }
        );
    }, [params.slug]);


  return (
    <div>
        {loading && <h1>Loading...</h1>}
        {!loading && project && (
            <div>
            <h1>{project.title}</h1>
            <h1>{project.description}</h1>
            <h1>{project.demo_url}</h1>
            <h1>{project.github_url}</h1>
            <h1>{project.tags}</h1>
            </div>
        )}
    </div>
  );
}
