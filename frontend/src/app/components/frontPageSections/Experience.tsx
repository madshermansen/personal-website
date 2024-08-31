import Link from "next/link";

export default function Experience() {
    return (
        <div>
          <h1 id="experience" className="font-semibold">
            EXPERIENCE
          </h1>
          <Link href="/resume.pdf" className="font-bold text-accent">View my resume</Link>

        </div>
      );
}