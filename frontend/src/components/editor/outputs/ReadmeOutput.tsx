import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";

export default function ReadmeOutput() {
  return (
    <div className="bg-gray-400 min-h-full p-8">
      {/* PDF document with white background and border */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl border-8 border-gray-300 min-h-screen">
        {/* Document content with padding like a PDF */}
        <div className="p-16">
          {/* Header / Title Section */}
          <div className="mb-10 pb-6 border-b-4 border-gray-900">
            <h1 className="text-6xl font-bold text-gray-900 mb-3 tracking-tight">
              Mads Hermansen
            </h1>
            <p className="text-2xl text-gray-700 mb-4 font-light">
              Full Stack Developer • Masters Student • Tech Enthusiast
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link href="mailto:mdj.hermansen@gmail.com" className="hover:text-blue-600 transition-colors">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Professional Summary
            </h2>
            <div className="pl-6 text-gray-800 leading-relaxed space-y-4 text-justify">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Education
            </h2>
            <div className="pl-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-8 border-blue-600">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      Masters in Software Systems
                    </h3>
                    <p className="text-gray-800 font-medium">Norwegian University of Science and Technology (NTNU)</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - Present</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Specializing in advanced software engineering practices, system architecture,
                  and cutting-edge development methodologies.
                </p>
              </div>
            </div>
          </section>

          {/* Current Work */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Current Work
            </h2>
            <div className="pl-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-8 border-green-600">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-2">
                      <Briefcase className="w-6 h-6 text-green-600" />
                      Mobile Developer
                    </h3>
                    <Link
                      href="https://ssesh.no"
                      className="text-blue-600 hover:text-blue-800 transition-colors font-semibold text-lg"
                    >
                      ssesh
                    </Link>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Contributing to mobile application development, digital infrastructure, and backend systems
                  for an innovative startup company.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Technical Skills
            </h2>
            <div className="pl-6 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-blue-700 font-bold mb-3 text-lg">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-blue-100 text-blue-900 text-sm font-medium rounded-md border-2 border-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-green-700 font-bold mb-3 text-lg">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MySQL', 'Planetscale'].map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-green-100 text-green-900 text-sm font-medium rounded-md border-2 border-green-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-purple-700 font-bold mb-3 text-lg">Mobile Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React Native', 'Expo', 'iOS', 'Android'].map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-100 text-purple-900 text-sm font-medium rounded-md border-2 border-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-orange-700 font-bold mb-3 text-lg">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'VS Code', 'Figma', 'Vercel'].map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-orange-100 text-orange-900 text-sm font-medium rounded-md border-2 border-orange-300"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Interests & Activities
            </h2>
            <div className="pl-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-300">
                  <p className="text-gray-800 font-medium">🏋️ Calisthenics & Fitness</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-300">
                  <p className="text-gray-800 font-medium">👥 Socializing with Friends</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-300">
                  <p className="text-gray-800 font-medium">💻 Open Source Projects</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border-2 border-gray-300">
                  <p className="text-gray-800 font-medium">📚 Continuous Learning</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Links */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded"></span>
              Connect With Me
            </h2>
            <div className="pl-6">
              <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    href="https://github.com/madshermansen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:bg-blue-50 transition-all group border-2 border-gray-300 hover:border-blue-500"
                  >
                    <FaGithub className="w-10 h-10 text-gray-800 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">@madshermansen</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/mdhermansen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:bg-blue-50 transition-all group border-2 border-gray-300 hover:border-blue-500"
                  >
                    <FaLinkedin className="w-10 h-10 text-gray-800 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">mdhermansen</span>
                  </Link>
                  <Link
                    href="mailto:mdj.hermansen@gmail.com"
                    className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg hover:bg-blue-50 transition-all group border-2 border-gray-300 hover:border-blue-500"
                  >
                    <Mail className="w-10 h-10 text-gray-800 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">Email Me</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 pt-6 border-t-2 border-gray-300">
            <div className="bg-blue-50 p-5 rounded-lg border-l-8 border-blue-600">
              <p className="text-sm text-gray-700">
                💡 <span className="text-blue-700 font-bold">Tip:</span> Explore the files in the sidebar
                to learn more about my work experience, projects, and technical skills!
              </p>
            </div>
          </div>

          {/* Document Footer */}
          <div className="mt-10 text-center text-xs text-gray-500 space-y-1">
            <p className="font-medium">Generated with Next.js, TypeScript, and Tailwind CSS</p>
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            <p className="pt-4 text-gray-400">Page 1 of 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
