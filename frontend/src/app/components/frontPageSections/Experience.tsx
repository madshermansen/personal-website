import Link from "next/link";

interface ExperienceProps {
  startDate: string;
  endDate: string;
  title: string;
  type: string;
  description: string;
  company: string;
  tools: string[];
}

export default function Experience() {
  const experience: ExperienceProps[] = [
    {
      startDate: "June 2024",
      endDate: "Present",
      title: "Full Stack Developer",
      type: "Work",
      description: "Developing a mobile app, digital infrastructure, website, and backend for a startup company.",
      company: "ssesh",
      tools: ["Expo", "React Native", "Typescript", "Express", "MySQL", "Planetscale", "IOS", "Android"],
    },
    {
      startDate: "July 2024",
      endDate: "Present",
      title: "Masters in Informatics, Software Systems",
      type: "Education",
      description:
        "Master's degree in informatics with a specialization in software systems.",
      company: "Norwegian University of Science and Technology",
      tools: ["Software Engineering", "Databases", "Algorithms", "Web Development"],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 id="experience" className="font-semibold">
        WORK EXPERIENCE
      </h1>
      <div className="flex flex-col gap-8">
        {experience.map(
          (exp) =>
            exp.type === "Work" && (
              <div key={exp.title} className="flex flex-col">
                <p className="font-bold text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </p>
                <h2 className="font-bold text-xl">
                  {exp.company}: {exp.title}
                </h2>
                <p className="text-gray-400">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <h1
                      key={tool}
                      className="bg-secondary text-secondary bg-opacity-10 rounded-md p-1 w-fit h-fit"
                    >
                      {tool}
                    </h1>
                  ))}
                </div>
              </div>
            )
        )}
      </div>

      <h1 id="experience" className="font-semibold">
        EDUCATION EXPERIENCE
      </h1>
      <div className="flex flex-col gap-8">
        {experience.map(
          (exp) =>
            exp.type === "Education" && (
              <div key={exp.title} className="flex flex-col">
                <p className="font-bold text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </p>
                <h2 className="font-bold text-xl">
                  {exp.company}: {exp.title}
                </h2>
                <p className="text-gray-400">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <h1
                      key={tool}
                      className="bg-secondary text-secondary bg-opacity-10 rounded-md p-1 w-fit h-fit"
                    >
                      {tool}
                    </h1>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
      <Link
        href="/resume.pdf"
        className="font-bold hover:text-accent duration-75"
      >
        View Resume →
      </Link>
    </div>
  );
}
