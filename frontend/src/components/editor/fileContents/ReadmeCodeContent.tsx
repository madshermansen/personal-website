import Link from "next/link";

export default function ReadmeCodeContent() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      {/* Header comment */}
      <div className="mb-4">
        <span className="monokai-comment">{'/**'}</span>
        <div className="monokai-comment"> * README.md - Personal introduction and portfolio overview</div>
        <div className="monokai-comment"> * @author Mads Hermansen</div>
        <span className="monokai-comment">{' */'}</span>
      </div>

      {/* Markdown content as code */}
      <div className="mb-4">
        <span className="monokai-keyword"># Mads Hermansen</span>
      </div>

      <div className="mb-6">
        <span className="text-textMuted">Full Stack Developer • Masters Student • Tech Enthusiast</span>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">## 👋 About Me</span>
      </div>

      <div className="mb-6 text-text/80 leading-relaxed">
        <p>
          Hey there! I&apos;m Mads (or 金羝威), a tech enthusiast currently diving into my
          Masters in Software Engineering at NTNU. I&apos;m all about learning new things
          and collaborating on exciting projects, and I&apos;ve found my sweet spot in
          full-stack development, especially on the mobile side.
        </p>
        <p className="mt-2">
          I&apos;m currently contributing to the mobile development efforts at the start-up{" "}
          <Link href="https://ssesh.no" className="monokai-string hover:monokai-property transition-colors font-semibold">
            [ssesh](https://ssesh.no)
          </Link>
          . When I&apos;m not coding or studying, you&apos;ll likely find me hanging out
          with friends or doing some calisthenics.
        </p>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">## 🛠️ Tech Stack</span>
      </div>

      <div className="mb-6 ml-4">
        <div className="mb-2">
          <span className="monokai-property">**Frontend:**</span>{" "}
          <span className="text-textMuted">React, Next.js, TypeScript, Tailwind CSS</span>
        </div>
        <div className="mb-2">
          <span className="monokai-property">**Backend:**</span>{" "}
          <span className="text-textMuted">Node.js, Express, MySQL, Planetscale</span>
        </div>
        <div className="mb-2">
          <span className="monokai-property">**Mobile:**</span>{" "}
          <span className="text-textMuted">React Native, Expo</span>
        </div>
        <div className="mb-2">
          <span className="monokai-property">**Tools:**</span>{" "}
          <span className="text-textMuted">Git, VS Code, Figma, Vercel</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">## 🎓 Education</span>
      </div>

      <div className="mb-6 ml-4">
        <div className="mb-2">
          <span className="monokai-string">### Masters in Software Systems</span>
        </div>
        <div className="text-textMuted text-xs mb-1">
          Norwegian University of Science and Technology (NTNU)
        </div>
        <div className="text-comment text-xs">
          <span className="monokai-comment">// July 2024 - Present</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">## 📫 Get In Touch</span>
      </div>

      <div className="mb-6 ml-4">
        <div className="mb-2">
          <span className="monokai-property">- GitHub:</span>{" "}
          <Link href="https://github.com/madshermansen" className="monokai-string hover:text-accent transition-colors">
            [@madshermansen](https://github.com/madshermansen)
          </Link>
        </div>
        <div className="mb-2">
          <span className="monokai-property">- LinkedIn:</span>{" "}
          <Link href="https://www.linkedin.com/in/mdhermansen/" className="monokai-string hover:text-accent transition-colors">
            [mdhermansen](https://linkedin.com/in/mdhermansen)
          </Link>
        </div>
        <div className="mb-2">
          <span className="monokai-property">- Email:</span>{" "}
          <Link href="mailto:mdj.hermansen@gmail.com" className="monokai-string hover:text-accent transition-colors">
            mdj.hermansen@gmail.com
          </Link>
        </div>
      </div>

      <div className="mb-4">
        <span className="monokai-keyword">## 💡 Explore More</span>
      </div>

      <div className="ml-4 text-textMuted text-sm">
        <p>
          Check out the files in the sidebar to learn more about my work, skills, and projects!
        </p>
      </div>

      <div className="mt-8">
        <span className="monokai-comment">---</span>
      </div>

      <div className="mt-4 text-xs text-comment">
        <span className="monokai-comment">// Made with ❤️ using Next.js, TypeScript, and Tailwind CSS</span>
      </div>
    </div>
  );
}
