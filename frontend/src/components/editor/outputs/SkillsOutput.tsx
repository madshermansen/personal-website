export default function SkillsOutput() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express", "MySQL", "Planetscale", "Sanity CMS"],
    mobile: ["React Native", "Expo", "iOS", "Android"],
    tools: ["Git", "VS Code", "Figma", "Vercel", "Zendesk"]
  };

  const categoryColors = {
    frontend: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
    backend: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400" },
    mobile: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400" },
    tools: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" }
  };

  return (
    <div className="max-w-4xl">
      {/* Browser-like card */}
      <div className="bg-black/40 backdrop-blur-sm border border-primary/30 rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-6 py-6 border-b border-primary/30">
          <h1 className="text-2xl font-bold text-primary mb-1">Technical Skills</h1>
          <p className="text-sm text-text/60 font-mono">console.log(skills)</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {Object.entries(skills).map(([category, items]) => {
            const colors = categoryColors[category as keyof typeof categoryColors];
            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-lg font-semibold capitalize text-primary">
                    {category}
                  </h2>
                  <div className="flex-1 h-px bg-primary/20" />
                  <span className="text-xs text-text/40 font-mono">{items.length} skills</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {items.map((skill, index) => (
                    <div
                      key={skill}
                      className={`${colors.bg} border ${colors.border} rounded-lg p-3 hover:scale-105 transition-transform cursor-default`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex flex-col gap-1">
                        <span className={`text-sm font-medium ${colors.text}`}>
                          {skill}
                        </span>
                        <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colors.bg} opacity-60`}
                            style={{ width: `${75 + Math.random() * 25}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Summary Stats */}
          <div className="mt-8 pt-6 border-t border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">
                  {skills.frontend.length}
                </div>
                <div className="text-xs text-text/60 uppercase tracking-wider">Frontend</div>
              </div>
              <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  {skills.backend.length}
                </div>
                <div className="text-xs text-text/60 uppercase tracking-wider">Backend</div>
              </div>
              <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  {skills.mobile.length}
                </div>
                <div className="text-xs text-text/60 uppercase tracking-wider">Mobile</div>
              </div>
              <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="text-3xl font-bold text-orange-400 mb-1">
                  {skills.tools.length}
                </div>
                <div className="text-xs text-text/60 uppercase tracking-wider">Tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
