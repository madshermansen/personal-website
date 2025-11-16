import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function ReadmeOutput() {
  return (
    <div className="bg-gray-500 min-h-full p-12">
      {/* LaTeX-style PDF document */}
      <div className="max-w-[8.5in] mx-auto bg-white shadow-2xl border border-gray-400 min-h-screen" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
        {/* Document content with LaTeX-style margins (1 inch) */}
        <div className="p-16">
          {/* LaTeX-style header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black mb-2" style={{ letterSpacing: '0.05em' }}>
              MADS HERMANSEN
            </h1>
            <div className="h-0.5 bg-black w-full my-3"></div>
            <div className="text-sm text-gray-700 space-y-1">
              <p>Full Stack Developer • Masters Student • Tech Enthusiast</p>
              <p>
                <Mail className="inline w-3 h-3 mr-1" />
                <Link href="mailto:mdj.hermansen@gmail.com" className="hover:underline">
                  mdj.hermansen@gmail.com
                </Link>
                {" • "}
                Trondheim, Norway
              </p>
              <p className="text-xs mt-2">
                <Link href="https://github.com/madshermansen" className="hover:underline mr-3">
                  github.com/madshermansen
                </Link>
                <Link href="https://linkedin.com/in/mdhermansen" className="hover:underline">
                  linkedin.com/in/mdhermansen
                </Link>
              </p>
            </div>
            <div className="h-0.5 bg-black w-full mt-3"></div>
          </div>

          {/* Education Section - LaTeX style */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Education
            </h2>
            <div className="ml-0">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <p className="font-bold text-black">Norwegian University of Science and Technology (NTNU)</p>
                  <p className="italic text-gray-800">Master of Science in Software Systems</p>
                </div>
                <div className="text-right text-sm text-gray-700">
                  <p>Trondheim, Norway</p>
                  <p className="italic">2024 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                <li>Specializing in advanced software engineering, system architecture, and development methodologies</li>
                <li>Focus on full-stack and mobile application development</li>
              </ul>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Experience
            </h2>
            <div className="ml-0">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <p className="font-bold text-black">Mobile Developer</p>
                  <p className="italic text-gray-800">
                    <Link href="https://ssesh.no" className="hover:underline">
                      ssesh
                    </Link>
                  </p>
                </div>
                <div className="text-right text-sm text-gray-700">
                  <p>Trondheim, Norway</p>
                  <p className="italic">2024 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                <li>Contributing to mobile application development using React Native and Expo</li>
                <li>Developing digital infrastructure and backend systems for startup operations</li>
                <li>Collaborating with cross-functional teams on innovative product features</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Technical Skills
            </h2>
            <div className="ml-0 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-y-2 gap-x-4">
                <div className="font-bold text-black">Frontend:</div>
                <div className="text-gray-800">React, Next.js, TypeScript, Tailwind CSS, Framer Motion</div>

                <div className="font-bold text-black">Backend:</div>
                <div className="text-gray-800">Node.js, Express, MySQL, Planetscale, Sanity CMS</div>

                <div className="font-bold text-black">Mobile:</div>
                <div className="text-gray-800">React Native, Expo, iOS, Android</div>

                <div className="font-bold text-black">Tools:</div>
                <div className="text-gray-800">Git, VS Code, Figma, Vercel, Zendesk</div>

                <div className="font-bold text-black">Languages:</div>
                <div className="text-gray-800">JavaScript, TypeScript, Python, SQL</div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Notable Projects
            </h2>
            <div className="ml-0 space-y-3">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-bold text-black">Personal Portfolio Website</p>
                  <p className="text-sm italic text-gray-700">2024</p>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Built with Next.js, TypeScript, and Tailwind CSS featuring VS Code-inspired interface</li>
                  <li>Implemented Monokai Pro theme with split-screen code editor layout</li>
                  <li>Integrated Sanity CMS for dynamic project management</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <p className="font-bold text-black">Mobile Application Development</p>
                  <p className="text-sm italic text-gray-700">2024</p>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Developed cross-platform mobile applications using React Native and Expo</li>
                  <li>Implemented backend APIs with Node.js and Express for mobile data synchronization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Additional Information
            </h2>
            <div className="ml-0 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-y-2 gap-x-4">
                <div className="font-bold text-black">Interests:</div>
                <div className="text-gray-800">Calisthenics, Open Source Contributions, Continuous Learning, Technology Innovation</div>

                <div className="font-bold text-black">Languages:</div>
                <div className="text-gray-800">English (Fluent), Norwegian (Fluent)</div>
              </div>
            </div>
          </section>

          {/* References Section - LaTeX classic */}
          <section className="mb-4">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              References
            </h2>
            <p className="text-sm italic text-gray-700 ml-0">Available upon request</p>
          </section>

          {/* Footer - LaTeX style page numbering */}
          <div className="mt-12 pt-4 border-t border-gray-400 flex justify-between items-center text-xs text-gray-500">
            <div>
              <p className="italic">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div>
              <p>Page 1 of 1</p>
            </div>
          </div>

          {/* LaTeX signature */}
          <div className="text-center mt-2">
            <p className="text-xs text-gray-400" style={{ fontFamily: 'Computer Modern, serif' }}>
              Typeset with L<span className="text-[0.7em] relative" style={{ top: '0.15em' }}>A</span>T<span className="text-[0.8em] relative" style={{ top: '-0.15em' }}>E</span>X
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
