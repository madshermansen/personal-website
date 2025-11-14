import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ReadmeContent() {
  return (
    <div className="font-mono text-sm leading-relaxed max-w-none">
      <h1 className="text-4xl font-bold monokai-keyword mb-2"># Mads Hermansen</h1>
      <p className="text-lg monokai-property mb-8">Full Stack Developer • Masters Student • Tech Enthusiast</p>

      <div className="h-6" />

      <h2 className="text-2xl font-bold monokai-function mb-3">## 👋 About Me</h2>
      <p className="text-text/80 leading-relaxed mb-6">
        Hey there! I&#39;m Mads (or 金羝威), a tech enthusiast currently diving into my Masters in Software Engineering at NTNU.
        I&#39;m all about learning new things and collaborating on exciting projects, and I&#39;ve found my sweet spot in full-stack development,
        especially on the mobile side. I&#39;m currently contributing to the mobile development efforts at the start-up{" "}
        <Link href="https://ssesh.no" className="monokai-string hover:monokai-property transition-colors font-semibold">
          ssesh
        </Link>
        . When I&#39;m not coding or studying, you&#39;ll likely find me hanging out with friends or doing some calisthenics.
      </p>

      <h2 className="text-2xl font-bold monokai-function mb-3">## 🛠️ Tech Stack</h2>
      <div className="mb-6 leading-loose">
        <p className="mb-2">
          <strong className="monokai-property">Frontend:</strong> <span className="text-text/70">React, Next.js, TypeScript, Tailwind CSS</span>
        </p>
        <p className="mb-2">
          <strong className="monokai-property">Backend:</strong> <span className="text-text/70">Node.js, Express, MySQL, Planetscale</span>
        </p>
        <p className="mb-2">
          <strong className="monokai-property">Mobile:</strong> <span className="text-text/70">React Native, Expo</span>
        </p>
        <p>
          <strong className="monokai-property">Tools:</strong> <span className="text-text/70">Git, VS Code, Figma, Vercel</span>
        </p>
      </div>

      <h2 className="text-2xl font-bold monokai-function mb-3">## 🎓 Education</h2>
      <div className="mb-6">
        <div className="p-4 bg-primary/5 border-l-4 border-primary/50 rounded">
          <h3 className="text-base font-semibold monokai-string mb-1">Masters in Software Systems</h3>
          <p className="text-text/70 text-sm">Norwegian University of Science and Technology (NTNU)</p>
          <p className="text-text/50 text-xs mt-1">July 2024 - Present</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold monokai-function mb-3">## 📫 Get In Touch</h2>
      <div className="flex gap-4 mb-6">
        <Link
          href="https://github.com/madshermansen"
          className="flex items-center gap-2 monokai-property hover:monokai-string transition-colors"
        >
          <FaGithub size={18} />
          <span>@madshermansen</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mdhermansen/"
          className="flex items-center gap-2 monokai-property hover:monokai-string transition-colors"
        >
          <FaLinkedin size={18} />
          <span>mdhermansen</span>
        </Link>
      </div>

      <div className="mt-8 p-4 bg-secondary/5 border border-secondary/30 rounded">
        <p className="text-xs text-text/60">
          💡 <strong className="monokai-function">Tip:</strong> Explore the files in the sidebar to learn more about my work, skills, and projects!
        </p>
      </div>
    </div>
  );
}
