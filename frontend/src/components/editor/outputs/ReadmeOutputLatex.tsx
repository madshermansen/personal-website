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
                +47 482 94 974
              </p>
              <p>
                Tormods gata 3A, 7030 Trondheim, Norway
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

          {/* Professional Summary Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed">
              Looking for a software development position to apply knowledge and skills in building exciting projects.
              Enjoys discovering new technologies and improving abilities, while using learned skills to create meaningful work.
              Has strong experience with React, React Native, TypeScript, and web technologies through University education
              and role as Full Stack Developer at ssesh. Experienced with cloud services for hosting and streamlining development processes.
              Generally flexible when coming into roles, particularly interested in collaborative environments with back-and-forth learning opportunities.
              Seeking to continue growing as a developer while contributing to meaningful projects.
            </p>
          </section>

          {/* Education Section - LaTeX style */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Education
            </h2>
            <div className="ml-0 space-y-3">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">Norwegian University of Science and Technology (NTNU)</p>
                    <p className="italic text-gray-800">Master of Science in Informatics: Software Systems</p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Trondheim, Norway</p>
                    <p className="italic">June 2024 – June 2026</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Specializing in advanced software engineering, system architecture, and development methodologies</li>
                  <li>Focus on full-stack and mobile application development</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">Tokyo University of Marine Science and Technology</p>
                    <p className="italic text-gray-800">Exchange Semester - Maritime Technology and Logistics</p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Tokyo, Japan</p>
                    <p className="italic">October 2024 – July 2025</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">Norwegian University of Science and Technology (NTNU)</p>
                    <p className="italic text-gray-800">Bachelor of Science in Informatics</p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Trondheim, Norway</p>
                    <p className="italic">August 2021 – June 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Experience
            </h2>
            <div className="ml-0 space-y-3">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">Teaching Assistant - Web Development & Informatics Project</p>
                    <p className="italic text-gray-800">
                      NTNU Institutt for elektroniske systemer
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Trondheim, Norway</p>
                    <p className="italic">August 2025 – November 2025</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Guides student teams through project development and delivery processes</li>
                  <li>Provides real-time support and answers technical questions during lab sessions</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">Full Stack Developer</p>
                    <p className="italic text-gray-800">
                      <Link href="https://ssesh.no" className="hover:underline">
                        ssesh
                      </Link>
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Trondheim, Norway</p>
                    <p className="italic">June 2024 – October 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Developed mobile application for student productivity using React Native, TypeScript, and Expo</li>
                  <li>Built and maintained server infrastructure and backend systems for production deployment</li>
                  <li>Delivered full-stack solutions from database design to user interface implementation</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">Teaching Assistant - Cryptography and Network Security</p>
                    <p className="italic text-gray-800">
                      NTNU Institutt for elektroniske systemer
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Trondheim, Norway</p>
                    <p className="italic">January 2024 – May 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Taught cryptography and network security concepts during workshops and labs</li>
                  <li>Evaluated student assignments and provided constructive feedback</li>
                </ul>
              </div>
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

          {/* Volunteer Positions Section */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-2 border-b border-black pb-1">
              Volunteer Positions
            </h2>
            <div className="ml-0 space-y-3">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">Linjeforeningen Online - Applikasjonskomiteen</p>
                    <p className="italic text-gray-800">Student organization for Informatics students at NTNU</p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Trondheim, Norway</p>
                    <p className="italic">September 2023 – Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Contributed to developing mobile app for streamlined event registration and student event management</li>
                  <li>Led web development training sessions for new members to build essential technical skills</li>
                  <li>Organized inclusive social events to boost student engagement and committee participation</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-bold text-black">NTNUI Calisthenics</p>
                    <p className="italic text-gray-800">Student sports organization</p>
                  </div>
                  <div className="text-right text-sm text-gray-700">
                    <p>Trondheim, Norway</p>
                    <p className="italic">January 2023 – September 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-800 leading-relaxed">
                  <li>Participated in bodyweight training sessions and built connections within student fitness community</li>
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
