export default function EducationOutput() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="font-mono text-sm">
        <h2 className="text-2xl font-bold monokai-function mb-6">
          ## Education
        </h2>

        <div className="flex flex-col gap-6">
          {education.map(
            (exp) => (
              <div key={exp.title} className="flex flex-col gap-2 p-4 bg-primary/5 border-l-4 border-primary/50 rounded">
                <p className="text-xs monokai-comment">
                  {exp.startDate} - {exp.endDate}
                </p>
                <h3 className="text-lg font-semibold monokai-string">
                  {exp.title}
                </h3>
                <p className="monokai-property text-sm">
                  @ {exp.company}
                </p>
                <p className="text-text/80 leading-relaxed">
                  {exp.description}
                </p>
                {exp.tools.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs bg-secondary/10 monokai-value border border-secondary/30 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

interface ExperienceProps {
  startDate: string;
  endDate: string;
  title: string;
  type: string;
  description: string;
  company: string;
  tools: string[];
}

const education: ExperienceProps[] = [
  {
    startDate: "July 2024",
    endDate: "Present",
    title: "Masters in Informatics, Software Systems",
    type: "Education",
    description:
      "Master's degree in informatics with a specialization in software systems.",
    company: "Norwegian University of Science and Technology",
    tools: [
      "Software Engineering",
      "Databases",
      "Algorithms",
      "Web Development",
    ],
  },
];
