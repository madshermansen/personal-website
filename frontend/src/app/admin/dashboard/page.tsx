"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { use, useEffect, useState } from "react";
import InsertProject from "./insertProject";
import useAuthStore from "@/lib/state/authStore";
import { enqueueSnackbar } from "notistack";

export default function Page() {
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
    <main className="flex w-screen h-screen justify-center items-center flex-col">
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
        className="bg-primary font-bold montserrat text-black hover:bg-active"
        onClick={async () => {
          if (authToken === undefined) {
            enqueueSnackbar("Unauthorized", { variant: "error" });
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
    </main>
  );
}
