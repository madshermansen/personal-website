"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { use, useEffect, useState } from "react";
import InsertProject from "./insertProject";
import useAuthStore from "@/lib/state/authStore";
import { enqueueSnackbar } from "notistack";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function AddProjects() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image_url, setImageUrl] = useState<string>("");
  const [demo_url, setDemoUrl] = useState<string>("");
  const [github_url, setGithubUrl] = useState<string>("");

  const { authToken } = useAuthStore();

  useEffect(() => {
    if (authToken === undefined) {
      console.error("Unauthorized");
    }
  }, [authToken]);

  return (
    <Card className="w-1/2 border-zinc-400 bg-background p-4">
        <CardTitle className="text-white">Add A New Project</CardTitle>
        <CardDescription className="text-white">Add a new project to the portfolio</CardDescription>
      <Input placeholder="Title" className="text-white border-zinc-400 my-2" />
      <Textarea
        placeholder="Description"
        className="text-white border-zinc-400 my-2 bg-background"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Input
        placeholder="Image URL"
        className="text-white border-zinc-400 my-2 bg-background"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Input
        placeholder="Demo URL"
        className="text-white border-zinc-400 my-2"
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
      <Input
        placeholder="Github URL"
        className="text-white border-zinc-400 my-2"
        onChange={(e) => {
          setDemoUrl(e.target.value);
        }}
      />
      <Button
        className="bg-primary font-bold montserrat text-black hover:bg-active w-full"
        onClick={async () => {
          if (authToken === undefined) {
            enqueueSnackbar("Unauthorized", { variant: "warning" });
            return;
          }
          const result = await InsertProject(
            authToken,
            title,
            description,
            image_url,
            demo_url,
            github_url
          );
          if (result.error) {
            enqueueSnackbar(result.error, { variant: "error" });
            return;
          }
          if (result.project) {
            enqueueSnackbar("Project added", { variant: "success" });
          }
        }}
      >
        Add Project
      </Button>
    </Card>
  );
}
