import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

export default function ReadmeOutput() {
  return (
    <div className="bg-backgroundDark min-h-full">
      {/* PDF-like document container */}
      <div className="max-w-4xl mx-auto bg-background shadow-2xl min-h-screen">
        {/* Document content with padding like a PDF */}
        <div className="p-12">
          {/* Header / Title Section */}
          <div className="mb-10 pb-6 border-b-2 border-primary/30">
            <h1 className="text-5xl font-bold text-primary mb-3 tracking-tight">
              Mads Hermansen
            </h1>
            <p className="text-xl text-cyan mb-4">
              Full Stack Developer • Masters Student • Tech Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-textMuted">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link href="mailto:mdj.hermansen@gmail.com" className="hover:text-accent transition-colors">
                  mdj.hermansen@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Trondheim, Norway</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded"></span>
              Professional Summary
            </h2>
            <div className="pl-5 text-text leading-relaxed space-y-3">
              <p>
                Tech enthusiast currently pursuing a Masters in Software Engineering at the Norwegian
                University of Science and Technology (NTNU). Passionate about learning new technologies
                and collaborating on innovative projects, with a strong focus on full-stack development
                and mobile applications.
              </p>
              <p>
                Currently contributing to mobile development at ssesh, a startup company, while continuously
                expanding technical expertise through academic research and hands-on project work.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded"></span>
              Education
            </h2>
            <div className="pl-5">
              <div className="bg-backgroundLight p-5 rounded-lg border-l-4 border-primary">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-accent flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Masters in Software Systems
                    </h3>
                    <p className="text-text mt-1">Norwegian University of Science and Technology (NTNU)</p>
                  </div>
                  <div className="flex items-center gap-2 text-textMuted text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - Present</span>
                  </div>
                </div>
                <p className="text-textMuted text-sm mt-3">
                  Specializing in advanced software engineering practices, system architecture,
                  and cutting-edge development methodologies.
                </p>
              </div>
            </div>
          </section>

          {/* Current Work */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded"></span>
              Current Work
            </h2>
            <div className="pl-5">
              <div className="bg-backgroundLight p-5 rounded-lg border-l-4 border-cyan">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-accent flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Mobile Developer
                    </h3>
                    <Link
                      href="https://ssesh.no"
                      className="text-cyan hover:text-accent transition-colors font-semibold"
                    >
                      ssesh
                    </Link>
                  </div>
                </div>
                <p className="text-textMuted text-sm mt-3">
                  Contributing to mobile application development, digital infrastructure, and backend systems
                  for an innovative startup company.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded"></span>
              Technical Skills
            </h2>
            <div className="pl-5 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-cyan font-bold mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-backgroundDark text-accent text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-cyan font-bold mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MySQL', 'Planetscale'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-backgroundDark text-accent text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-cyan font-bold mb-3">Mobile Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Expo', 'iOS', 'Android'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-backgroundDark text-accent text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-cyan font-bold mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'VS Code', 'Figma', 'Vercel'].map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-backgroundDark text-accent text-sm rounded-full border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Personal Interests */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded"></span>
              Interests & Activities
            </h2>
            <div className="pl-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-backgroundLight p-4 rounded-lg">
                  <p className="text-text">🏋️ Calisthenics & Fitness</p>
                </div>
                <div className="bg-backgroundLight p-4 rounded-lg">
                  <p className="text-text">👥 Socializing with Friends</p>
                </div>
                <div className="bg-backgroundLight p-4 rounded-lg">
                  <p className="text-text">💻 Open Source Projects</p>
                </div>
                <div className="bg-backgroundLight p-4 rounded-lg">
                  <p className="text-text">📚 Continuous Learning</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Links */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-secondary rounded"></span>
              Connect With Me
            </h2>
            <div className="pl-5">
              <div className="bg-backgroundLight p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="https://github.com/madshermansen"
                    target="_blank"
                    className="flex flex-col items-center gap-2 p-4 bg-backgroundDark rounded-lg hover:bg-background transition-all group border border-border hover:border-cyan"
                  >
                    <FaGithub className="w-8 h-8 text-cyan group-hover:text-accent transition-colors" />
                    <span className="text-sm text-textMuted group-hover:text-text">@madshermansen</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mdhermansen/"
                    target="_blank"
                    className="flex flex-col items-center gap-2 p-4 bg-backgroundDark rounded-lg hover:bg-background transition-all group border border-border hover:border-cyan"
                  >
                    <FaLinkedin className="w-8 h-8 text-cyan group-hover:text-accent transition-colors" />
                    <span className="text-sm text-textMuted group-hover:text-text">mdhermansen</span>
                  </Link>
                  <Link
                    href="mailto:mdj.hermansen@gmail.com"
                    className="flex flex-col items-center gap-2 p-4 bg-backgroundDark rounded-lg hover:bg-background transition-all group border border-border hover:border-cyan"
                  >
                    <Mail className="w-8 h-8 text-cyan group-hover:text-accent transition-colors" />
                    <span className="text-sm text-textMuted group-hover:text-text">Email Me</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-6 border-t border-border">
            <div className="bg-backgroundLight p-4 rounded-lg border-l-4 border-secondary">
              <p className="text-sm text-textMuted">
                💡 <span className="text-secondary font-semibold">Tip:</span> Explore the files in the sidebar
                to learn more about my work experience, projects, and technical skills!
              </p>
            </div>
          </div>

          {/* Document Footer */}
          <div className="mt-8 text-center text-xs text-comment">
            <p>Generated with Next.js, TypeScript, and Tailwind CSS</p>
            <p className="mt-1">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
