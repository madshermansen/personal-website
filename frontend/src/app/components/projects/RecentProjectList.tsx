"use client";
import { QueryResultRow, sql } from "@vercel/postgres";
import { use, useEffect, useState } from "react";
import { getProjects } from "./getProjects";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecentProjectList() {
  const [Loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<QueryResultRow[]>([]);

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
      setLoading(false);
      console.log(projects);
    });
  }, []);

  if (Loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <div className="flex flex-col gap-2">
      {projects.map((project) => (
        <div key={project.id}>
            <h1>{project.name}</h1>
            <h1>{project.description}</h1>
            <h1>{project.image_url}</h1>
            <h1>{project.demo_url}</h1>
            <h1>{project.github_url}</h1>
        </div>
      ))}
    </div>
  );
}
