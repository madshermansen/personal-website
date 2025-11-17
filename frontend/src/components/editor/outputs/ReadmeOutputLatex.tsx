import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function ReadmeOutput() {
  return (
    <div className="bg-[#0d1117] min-h-full">
      {/* Markdown-style document container */}
      <div className="max-w-4xl mx-auto bg-[#0d1117] min-h-screen">
        {/* Markdown content with proper spacing */}
        <div className="px-8 py-10">
          {/* Markdown-style header */}
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-[#c9d1d9] mb-4 pb-2 border-b border-[#21262d]">
              Mads Hermansen
            </h1>
            <p className="text-xl text-[#8b949e] mb-6">
              Full Stack Developer • Masters Student • Tech Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 text-[#58a6ff]">
              <Link href="mailto:mdj.hermansen@gmail.com" className="hover:underline flex items-center gap-1">
                <Mail className="inline w-4 h-4" />
                mdj.hermansen@gmail.com
              </Link>
              <span className="text-[#8b949e]">•</span>
              <span className="text-[#8b949e]">Trondheim, Norway</span>
              <span className="text-[#8b949e]">•</span>
              <Link href="https://github.com/madshermansen" target="_blank" className="hover:underline flex items-center gap-1">
                <FaGithub className="w-4 h-4" />
                GitHub
              </Link>
              <span className="text-[#8b949e]">•</span>
              <Link href="https://linkedin.com/in/mdhermansen" target="_blank" className="hover:underline flex items-center gap-1">
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#c9d1d9] mb-4 pb-2 border-b border-[#21262d]">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-semibold text-[#c9d1d9]">Norwegian University of Science and Technology (NTNU)</p>
                  <p className="text-[#8b949e]">Master of Science in Software Systems</p>
                </div>
                <div className="text-right text-sm text-[#8b949e]">
                  <p>Trondheim, Norway</p>
                  <p>2024 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-5 mt-2 text-[#8b949e] space-y-1">
                <li>Specializing in advanced software engineering, system architecture, and development methodologies</li>
                <li>Focus on full-stack and mobile application development</li>
              </ul>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#c9d1d9] mb-4 pb-2 border-b border-[#21262d]">
              Experience
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-semibold text-[#c9d1d9]">Mobile Developer</p>
                  <p className="text-[#8b949e]">
                    <Link href="https://ssesh.no" className="text-[#58a6ff] hover:underline">
                      ssesh
                    </Link>
                  </p>
                </div>
                <div className="text-right text-sm text-[#8b949e]">
                  <p>Trondheim, Norway</p>
                  <p>2024 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-5 mt-2 text-[#8b949e] space-y-1">
                <li>Contributing to mobile application development using React Native and Expo</li>
                <li>Developing digital infrastructure and backend systems for startup operations</li>
                <li>Collaborating with cross-functional teams on innovative product features</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#c9d1d9] mb-4 pb-2 border-b border-[#21262d]">
              Technical Skills
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-[#58a6ff] font-semibold">Frontend:</span>
                <span className="text-[#8b949e] ml-2">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</span>
              </div>
              <div>
                <span className="text-[#58a6ff] font-semibold">Backend:</span>
                <span className="text-[#8b949e] ml-2">Node.js, Express, MySQL, Planetscale, Sanity CMS</span>
              </div>
              <div>
                <span className="text-[#58a6ff] font-semibold">Mobile:</span>
                <span className="text-[#8b949e] ml-2">React Native, Expo, iOS, Android</span>
              </div>
              <div>
                <span className="text-[#58a6ff] font-semibold">Tools:</span>
                <span className="text-[#8b949e] ml-2">Git, VS Code, Figma, Vercel, Zendesk</span>
              </div>
              <div>
                <span className="text-[#58a6ff] font-semibold">Languages:</span>
                <span className="text-[#8b949e] ml-2">JavaScript, TypeScript, Python, SQL</span>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#c9d1d9] mb-4 pb-2 border-b border-[#21262d]">
              Notable Projects
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-lg font-semibold text-[#c9d1d9]">Personal Portfolio Website</p>
                  <p className="text-sm text-[#8b949e]">2024</p>
                </div>
                <ul className="list-disc list-inside ml-5 text-[#8b949e] space-y-1">
                  <li>Built with Next.js, TypeScript, and Tailwind CSS featuring VS Code-inspired interface</li>
                  <li>Implemented Monokai Pro theme with split-screen code editor layout</li>
                  <li>Integrated Sanity CMS for dynamic project management</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-lg font-semibold text-[#c9d1d9]">Mobile Application Development</p>
                  <p className="text-sm text-[#8b949e]">2024</p>
                </div>
                <ul className="list-disc list-inside ml-5 text-[#8b949e] space-y-1">
                  <li>Developed cross-platform mobile applications using React Native and Expo</li>
                  <li>Implemented backend APIs with Node.js and Express for mobile data synchronization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#c9d1d9] mb-4 pb-2 border-b border-[#21262d]">
              Additional Information
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-[#58a6ff] font-semibold">Interests:</span>
                <span className="text-[#8b949e] ml-2">Calisthenics, Open Source Contributions, Continuous Learning, Technology Innovation</span>
              </div>
              <div>
                <span className="text-[#58a6ff] font-semibold">Languages:</span>
                <span className="text-[#8b949e] ml-2">English (Fluent), Norwegian (Fluent)</span>
              </div>
            </div>
          </section>

          {/* References Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#c9d1d9] mb-4 pb-2 border-b border-[#21262d]">
              References
            </h2>
            <p className="text-[#8b949e]">Available upon request</p>
          </section>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-[#21262d]">
            <div className="bg-[#161b22] rounded-lg p-4 border border-[#30363d]">
              <p className="text-sm text-[#8b949e] text-center">
                💡 <span className="text-[#58a6ff] font-semibold">Tip:</span> Explore the files in the sidebar to learn more about my work experience, projects, and technical skills!
              </p>
            </div>
            <div className="mt-6 text-center text-xs text-[#484f58]">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              <p className="mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
