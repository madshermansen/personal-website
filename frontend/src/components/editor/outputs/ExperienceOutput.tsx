interface ExperienceOutputProps {
  type: 'work' | 'education';
}

interface ExperienceItem {
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string;
  tools: string[];
}

const workExperience: ExperienceItem[] = [
  {
    startDate: "June 2024",
    endDate: "October 2024",
    title: "Full Stack Developer",
    company: "ssesh",
    description:
      "Developing a mobile app, digital infrastructure, website, and backend for a startup company.",
    tools: [
      "Expo",
      "React Native",
      "TypeScript",
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
    company: "NTNU - Institutt for elektroniske systemer (IE)",
    description:
      "Assisted students in understanding topics in cryptography and network security, offering personalized guidance and support during workshops and labs.",
    tools: [],
  },
  {
    startDate: "July 2020",
    endDate: "June 2021",
    title: "IT Helpdesk",
    company: "International School of Stavanger",
    description:
      "Volunteer position for helping the IT staff set up projectors, answering support tickets, setting up new devices or any other tech related problems.",
    tools: ["Zendesk", "Windows", "MacOS"],
  },
];

const education: ExperienceItem[] = [
  {
    startDate: "July 2024",
    endDate: "Present",
    title: "Masters in Informatics, Software Systems",
    company: "Norwegian University of Science and Technology",
    description:
      "Master's degree in informatics with a specialization in software systems.",
    tools: [
      "Software Engineering",
      "Databases",
      "Algorithms",
      "Web Development",
    ],
  },
];

export default function ExperienceOutput({ type }: ExperienceOutputProps) {
  const data = type === 'work' ? workExperience : education;
  const title = type === 'work' ? 'Work Experience' : 'Education';
  const labelText = type === 'work' ? 'Technologies' : 'Focus Areas';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="font-mono">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold monokai-function mb-2 flex items-center gap-3">
            <span className="text-primary">{type === 'work' ? '💼' : '🎓'}</span>
            {title}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-8 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full border-4 border-background hidden md:block group-hover:scale-150 transition-transform duration-300 group-hover:bg-secondary"></div>

                {/* Card */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1">
                  {/* Date badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs monokai-comment font-medium">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.startDate} - {item.endDate}
                    </span>
                    {index === 0 && (
                      <span className="px-2 py-1 bg-secondary/20 border border-secondary/40 rounded text-xs monokai-value font-semibold">
                        {type === 'work' ? 'Latest' : 'Current'}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold monokai-string mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>

                  {/* Company/Institution */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 monokai-property" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="monokai-property text-base font-medium">
                      {item.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-text/90 leading-relaxed mb-5 text-sm">
                    {item.description}
                  </p>

                  {/* Tools/Focus areas */}
                  {item.tools.length > 0 && (
                    <div>
                      <p className="text-xs monokai-comment uppercase tracking-wider mb-3 font-semibold">
                        {labelText}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="group/tag relative px-3 py-1.5 text-xs bg-gradient-to-r from-secondary/10 to-primary/10 monokai-value border border-secondary/30 rounded-md hover:border-secondary/60 transition-all duration-200 hover:shadow-md hover:scale-105 font-medium"
                          >
                            <span className="relative z-10">{tool}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-md opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200"></span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer stats */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-2xl font-bold monokai-function">{data.length}</p>
              <p className="text-xs monokai-comment mt-1">{type === 'work' ? 'Positions' : 'Qualifications'}</p>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/20">
              <p className="text-2xl font-bold monokai-value">
                {data.reduce((acc, item) => acc + item.tools.length, 0)}
              </p>
              <p className="text-xs monokai-comment mt-1">{type === 'work' ? 'Technologies Used' : 'Focus Areas'}</p>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-2xl font-bold monokai-string">{data[0].endDate}</p>
              <p className="text-xs monokai-comment mt-1">{type === 'work' ? 'Latest Until' : 'Currently Enrolled'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
