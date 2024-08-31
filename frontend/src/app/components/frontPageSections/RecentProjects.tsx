import Link from "next/link";
import RecentProjectList from "../projects/RecentProjectList";

export default function RecentProjects() {
  return (
    <div>
      <h1 id="projects" className="font-semibold">
        RECENT PROJECTS
      </h1>
      <RecentProjectList />
      <h1>
        View all my projects{" "}
        <Link href="/projects" className="font-bold text-accent">here</Link>
      </h1>
    </div>
  );
}
