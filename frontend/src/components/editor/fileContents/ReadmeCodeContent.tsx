import Link from "next/link";

export default function ReadmeCodeContent() {
  return (
    <div className="font-mono text-xs whitespace-nowrap">
      <div className="leading-relaxed"><span className="monokai-comment">{'/**'}</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * README.md - Personal introduction and portfolio overview</span></div>
      <div className="leading-relaxed"><span className="monokai-comment"> * @author Mads Hermansen</span></div>
      <div className="leading-relaxed"><span className="monokai-comment">{' */'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword"># Mads Hermansen</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="text-textMuted">Full Stack Developer • Masters Student • Tech Enthusiast</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">## 👋 About Me</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="text-text/80">Hey there! I&apos;m Mads, looking for a software development position to apply</span></div>
      <div className="leading-relaxed"><span className="text-text/80">knowledge and skills in building exciting projects. I enjoy discovering new</span></div>
      <div className="leading-relaxed"><span className="text-text/80">technologies and improving my abilities, while using learned skills to create</span></div>
      <div className="leading-relaxed"><span className="text-text/80">meaningful work. Strong experience with React, React Native, TypeScript, and</span></div>
      <div className="leading-relaxed"><span className="text-text/80">web technologies through University education and previous role as Full Stack</span></div>
      <div className="leading-relaxed"><span className="text-text/80">Developer at{" "}<Link href="https://ssesh.no" className="monokai-string hover:monokai-property transition-colors font-semibold">ssesh</Link>.</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="text-text/80">Currently pursuing MSc in Software Systems at NTNU with an exchange semester</span></div>
      <div className="leading-relaxed"><span className="text-text/80">at Tokyo University of Marine Science and Technology. Working as Teaching</span></div>
      <div className="leading-relaxed"><span className="text-text/80">Assistant for Web Development and Informatics Project courses at NTNU.</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">## 🛠️ Tech Stack</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">**Frontend:**</span>{" "}<span className="text-textMuted">React, Next.js, TypeScript, Tailwind CSS</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">**Backend:**</span>{" "}<span className="text-textMuted">Node.js, Express, MySQL, Planetscale</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">**Mobile:**</span>{" "}<span className="text-textMuted">React Native, Expo</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">**Tools:**</span>{" "}<span className="text-textMuted">Git, VS Code, Figma, Vercel</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">## 🎓 Education</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-string">### MSc Informatics: Software Systems</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-textMuted text-xs">Norwegian University of Science and Technology (NTNU)</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{'// June 2024 - June 2026'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-string">### Exchange Semester - Maritime Technology and Logistics</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-textMuted text-xs">Tokyo University of Marine Science and Technology</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{'// October 2024 - July 2025'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-string">### BSc Informatics</span></div>
      <div className="ml-4 leading-relaxed"><span className="text-textMuted text-xs">Norwegian University of Science and Technology (NTNU)</span></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-comment">{'// August 2021 - June 2024'}</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">## 📫 Get In Touch</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">- GitHub:</span>{" "}<Link href="https://github.com/madshermansen" className="monokai-string hover:text-accent transition-colors">[@madshermansen](https://github.com/madshermansen)</Link></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">- LinkedIn:</span>{" "}<Link href="https://www.linkedin.com/in/mdhermansen/" className="monokai-string hover:text-accent transition-colors">[mdhermansen](https://linkedin.com/in/mdhermansen)</Link></div>
      <div className="ml-4 leading-relaxed"><span className="monokai-property">- Email:</span>{" "}<Link href="mailto:mdj.hermansen@gmail.com" className="monokai-string hover:text-accent transition-colors">mdj.hermansen@gmail.com</Link></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-keyword">## 💡 Explore More</span></div>
      <div className="leading-relaxed"></div>
      <div className="ml-4 leading-relaxed"><span className="text-textMuted text-sm">Check out the files in the sidebar to learn more about my work, skills, and projects!</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment">---</span></div>
      <div className="leading-relaxed"></div>
      <div className="leading-relaxed"><span className="monokai-comment text-xs">{'// Made with ❤️ using Next.js, TypeScript, and Tailwind CSS'}</span></div>
    </div>
  );
}
