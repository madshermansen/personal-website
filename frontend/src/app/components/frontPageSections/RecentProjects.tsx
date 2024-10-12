import Link from "next/link";
import RecentProjectList from "../projects/RecentProjectList";

export default function RecentProjects() {
  return (
    <div className="flex gap-2 flex-col">
      <h1 id="projects" className="font-semibold text-2xl">
        RECENT PROJECTS
      </h1>
      <hr className="border-accent border-2" />
      <RecentProjectList />
      <h1>
      <Link href="/projects" className="font-bold hover:text-accent duration-75">View Project Archive →</Link>
      </h1>
    </div>
  );
}
