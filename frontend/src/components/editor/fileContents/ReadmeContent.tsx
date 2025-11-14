import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ReadmeContent() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold text-accent mb-4"># Mads Hermansen</h1>
      <p className="text-xl text-secondary mb-8">Full Stack Developer • Masters Student • Tech Enthusiast</p>

      <div className="h-8" />

      <h2 className="text-2xl font-bold text-secondary mb-3">## 👋 About Me</h2>
      <p className="text-text/80 leading-relaxed mb-6">
        Hey there! I'm Mads (or 金羝威), a tech enthusiast currently diving into my Masters in Software Engineering at NTNU.
        I'm all about learning new things and collaborating on exciting projects, and I've found my sweet spot in full-stack development,
        especially on the mobile side. I'm currently contributing to the mobile development efforts at the start-up{" "}
        <Link href="https://ssesh.no" className="text-primary hover:text-accent transition-colors font-semibold">
          ssesh
        </Link>
        . When I'm not coding or studying, you'll likely find me hanging out with friends or doing some calisthenics.
      </p>

      <h2 className="text-2xl font-bold text-secondary mb-3">## 🛠️ Tech Stack</h2>
      <div className="mb-6">
        <p className="text-text/80 mb-2">
          <strong className="text-secondary">Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS
        </p>
        <p className="text-text/80 mb-2">
          <strong className="text-secondary">Backend:</strong> Node.js, Express, MySQL, Planetscale
        </p>
        <p className="text-text/80 mb-2">
          <strong className="text-secondary">Mobile:</strong> React Native, Expo
        </p>
        <p className="text-text/80">
          <strong className="text-secondary">Tools:</strong> Git, VS Code, Figma, Vercel
        </p>
      </div>

      <h2 className="text-2xl font-bold text-secondary mb-3">## 🎓 Education</h2>
      <div className="mb-6">
        <div className="p-4 bg-primary/5 border-l-4 border-primary rounded">
          <h3 className="text-lg font-semibold text-accent mb-1">Masters in Software Systems</h3>
          <p className="text-text/70">Norwegian University of Science and Technology (NTNU)</p>
          <p className="text-text/50 text-sm">July 2024 - Present</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-secondary mb-3">## 📫 Get In Touch</h2>
      <div className="flex gap-4 mb-6">
        <Link
          href="https://github.com/madshermansen"
          className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
        >
          <FaGithub size={20} />
          <span>@madshermansen</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mdhermansen/"
          className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
        >
          <FaLinkedin size={20} />
          <span>mdhermansen</span>
        </Link>
      </div>

      <div className="mt-8 p-4 bg-secondary/5 border border-secondary/30 rounded">
        <p className="text-sm text-text/60">
          💡 <strong className="text-secondary">Tip:</strong> Explore the files in the sidebar to learn more about my work, skills, and projects!
        </p>
      </div>
    </div>
  );
}
