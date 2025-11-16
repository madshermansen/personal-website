import Link from "next/link";
import RecentProjectList from "../projects/RecentProjectList";

export default function RecentProjects() {
  return (
    <div className="flex flex-col gap-6 font-mono text-sm">
      <h2 className="text-2xl font-bold monokai-function">
        ## Recent Projects
      </h2>

      <RecentProjectList />

      <Link
        href="/projects"
        className="monokai-property hover:monokai-string transition-colors underline mt-2"
      >
        → View Project Archive
      </Link>
    </div>
  );
}
