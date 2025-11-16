import Experience from "@/components/frontPageSections/Experience";

export default function WorkOutput() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="font-mono text-sm">
        {/* Only show work experience section */}
        <h2 className="text-2xl font-bold monokai-function mb-6">
          ## Work Experience
        </h2>

        <div className="flex flex-col gap-6">
          {experience.map(
            (exp) =>
              exp.type === "Work" && (
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

const experience: ExperienceProps[] = [
  {
    startDate: "June 2024",
    endDate: "October 2024",
    title: "Full Stack Developer",
    type: "Work",
    description:
      "Developing a mobile app, digital infrastructure, website, and backend for a startup company.",
    company: "ssesh",
    tools: [
      "Expo",
      "React Native",
      "Typescript",
      "Express",
      "MySQL",
      "Planetscale",
      "iOS",
      "Android",
    ],
  },
  {
    startDate: "January 2024",
    endDate: "May 2024",
    title: "Teaching Assistant",
    type: "Work",
    description:
      "Assisted students in understanding topics in cryptography and network security, offering personalized guidance and support during workshops and labs.",
    company: "NTNU - Institutt for elektroniske systemer (IE)",
    tools: [],
  },
  {
    startDate: "July 2020",
    endDate: "June 2021",
    title: "IT Helpdesk",
    type: "Work",
    description:
      "Volunteer position for helping the IT staff set up projectors, answering support tickets, setting up new devices or any other tech related problems",
    company: "International School of Stavanger",
    tools: ["Zendesk", "Windows", "MacOS"],
  },
];
