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
        <Card key={project.id} className="ease-in-out bg-background">
          <CardHeader>
            <CardTitle className="text-2xl text-text hover:text-accent duration-75 cursor-pointer" onClick={() => console.log(project.title, "clicked")}>{project.title}</CardTitle>
            <CardDescription className="text-text">{project.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
