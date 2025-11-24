import Link from "next/link";

export default function AboutOutput() {
  return (
    <div className="max-w-3xl">
      {/* Browser-like card */}
      <div className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-4 sm:px-6 py-6 sm:py-8 border-b border-primary/30">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Mads Hermansen</h1>
          <p className="text-lg sm:text-xl text-secondary">Full Stack Developer</p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Bio */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary/70 mb-2 font-mono">About</h2>
            <p className="text-text/90 leading-relaxed">
              Looking for a software development position to apply knowledge and skills in building exciting projects. Strong experience with React, React Native, TypeScript, and web technologies
            </p>
          </div>

          {/* Current Work */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary/70 mb-2 font-mono">Current Work</h2>
            <p className="text-text/90">
              Teaching Assistant at NTNU, pursuing MSc in Software Systems with exchange at Tokyo University of Marine Science and Technology
            </p>
          </div>

          {/* Passion */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary/70 mb-2 font-mono">Passion</h2>
            <p className="text-text/90 leading-relaxed">
              Discovering new technologies, collaborative environments with back-and-forth learning opportunities, and creating meaningful work
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary/70 mb-3 font-mono">Skills</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-xs text-accent/80 mb-1.5 font-mono">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs text-accent/80 mb-1.5 font-mono">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MySQL"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs text-accent/80 mb-1.5 font-mono">Mobile</h3>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Expo"].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded text-sm text-primary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary/70 mb-2 font-mono">Hobbies</h2>
            <div className="flex flex-wrap gap-2">
              {["Hanging with friends", "Calisthenics"].map(hobby => (
                <span key={hobby} className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded text-sm text-secondary">
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary/70 mb-2 font-mono">Education</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-lg text-accent mb-1">Masters in Software Systems</p>
              <p className="text-text/70 mb-2">NTNU</p>
              <span className="inline-block px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-400">
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
