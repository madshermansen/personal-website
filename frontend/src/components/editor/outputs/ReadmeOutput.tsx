import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function ReadmeOutput() {
  return (
    <div className="font-mono text-sm leading-relaxed max-w-none">
      {/* Main heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Mads Hermansen</h1>
        <p className="text-lg text-cyan">Full Stack Developer • Masters Student • Tech Enthusiast</p>
      </div>

      {/* About Me section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-4">👋 About Me</h2>
        <div className="text-text leading-relaxed space-y-3">
          <p>
            Hey there! I&apos;m Mads (or 金羝威), a tech enthusiast currently diving into my
            Masters in Software Engineering at NTNU. I&apos;m all about learning new things
            and collaborating on exciting projects, and I&apos;ve found my sweet spot in
            full-stack development, especially on the mobile side.
          </p>
          <p>
            I&apos;m currently contributing to the mobile development efforts at the start-up{" "}
            <Link href="https://ssesh.no" className="text-accent hover:text-secondary transition-colors font-semibold underline">
              ssesh
            </Link>
            . When I&apos;m not coding or studying, you&apos;ll likely find me hanging out
            with friends or doing some calisthenics.
          </p>
        </div>
      </div>

      {/* Tech Stack section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-4">🛠️ Tech Stack</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-cyan font-semibold min-w-[90px]">Frontend:</span>
            <span className="text-text">React, Next.js, TypeScript, Tailwind CSS</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan font-semibold min-w-[90px]">Backend:</span>
            <span className="text-text">Node.js, Express, MySQL, Planetscale</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan font-semibold min-w-[90px]">Mobile:</span>
            <span className="text-text">React Native, Expo</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-cyan font-semibold min-w-[90px]">Tools:</span>
            <span className="text-text">Git, VS Code, Figma, Vercel</span>
          </div>
        </div>
      </div>

      {/* Education section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-4">🎓 Education</h2>
        <div className="p-4 bg-backgroundLight border-l-4 border-primary rounded">
          <h3 className="text-base font-semibold text-accent mb-2">Masters in Software Systems</h3>
          <p className="text-textMuted text-sm mb-1">Norwegian University of Science and Technology (NTNU)</p>
          <p className="text-comment text-xs">July 2024 - Present</p>
        </div>
      </div>

      {/* Contact section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-4">📫 Get In Touch</h2>
        <div className="flex flex-col gap-3">
          <Link
            href="https://github.com/madshermansen"
            className="flex items-center gap-3 text-cyan hover:text-accent transition-colors group"
          >
            <FaGithub className="w-5 h-5" />
            <span>@madshermansen</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mdhermansen/"
            className="flex items-center gap-3 text-cyan hover:text-accent transition-colors group"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>mdhermansen</span>
          </Link>
          <Link
            href="mailto:mdj.hermansen@gmail.com"
            className="flex items-center gap-3 text-cyan hover:text-accent transition-colors group"
          >
            <Mail className="w-5 h-5" />
            <span>mdj.hermansen@gmail.com</span>
          </Link>
        </div>
      </div>

      {/* Explore more section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-4">💡 Explore More</h2>
        <div className="p-4 bg-backgroundLight border border-border rounded">
          <p className="text-textMuted">
            Check out the files in the sidebar to learn more about my work, skills, and projects!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-comment text-center">
          Made with ❤️ using Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </div>
  );
}
