import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function StickyInfo() {
  return (
    <nav className="lg:w-1/3 lg:min-w-fit lg:sticky top-8 gap-2 flex flex-col p-2 lg:max-h-screen">
      <div>
        <h1 className="text-6xl font-bold glow-primary">Mads Hermansen</h1>
        <h1 className="text-3xl text-accent">Fullstack Developer</h1>
      </div>

      <div className="flex flex-col">
        <Link
          href="#about"
          className="hover:text-accent duration-75 ease-in-out"
        >
          About Me
        </Link>
        <Link
          href="#experience"
          className="hover:text-accent duration-75 ease-in-out"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="hover:text-accent duration-75 ease-in-out"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-accent duration-75 ease-in-out"
        >
          Contact
        </Link>
      </div>

      <div className="flex flex-row gap-2">
        <Link href="https://github.com/madshermansen">
          <FaGithub
            size={32}
            className="hover:text-accent duration-75 ease-in-out"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/mdhermansen/">
          <FaLinkedin
            size={32}
            className="hover:text-accent duration-75 ease-in-out"
          />
        </Link>
      </div>

      <div className="h-1 w-full bg-secondary rounded-full lg:hidden mt-2"></div>
    </nav>
  );
}
