import AboutCodeContent from "./fileContents/AboutCodeContent";
import ReadmeCodeContent from "./fileContents/ReadmeCodeContent";
import SkillsCodeContent from "./fileContents/SkillsCodeContent";
import ExperienceCodeContent from "./fileContents/ExperienceCodeContent";
import ProjectsCodeContent from "./fileContents/ProjectsCodeContent";
import ContactCodeContent from "./fileContents/ContactCodeContent";
import Settings from "../frontPageSections/Settings";
import SplitScreenLayout from "./SplitScreenLayout";
import AboutOutput from "./outputs/AboutOutput";
import SkillsOutput from "./outputs/SkillsOutput";
import ReadmeOutput from "./outputs/ReadmeOutputLatex";
import ExperienceOutput from "./outputs/ExperienceOutput";
import ProjectsOutput from "./outputs/ProjectsOutput";
import ContactOutput from "./outputs/ContactOutput";

interface EditorContentProps {
  activeFile: string;
}

export default function EditorContent({ activeFile }: EditorContentProps) {
  const renderContent = () => {
    switch (activeFile) {
      case 'readme':
        return (
          <SplitScreenLayout
            fileName="README.md"
            codeContent={<ReadmeCodeContent />}
            outputContent={<ReadmeOutput />}
            lineCount={46}
          />
        );
      case 'about':
        return (
          <SplitScreenLayout
            fileName="about.tsx"
            codeContent={<AboutCodeContent />}
            outputContent={<AboutOutput />}
            lineCount={63}
          />
        );
      case 'skills':
        return (
          <SplitScreenLayout
            fileName="skills.ts"
            codeContent={<SkillsCodeContent />}
            outputContent={<SkillsOutput />}
            lineCount={52}
          />
        );
      case 'work':
        return (
          <SplitScreenLayout
            fileName="work.py"
            codeContent={<ExperienceCodeContent type="work" />}
            outputContent={<ExperienceOutput type="work" />}
            lineCount={69}
          />
        );
      case 'education':
        return (
          <SplitScreenLayout
            fileName="education.py"
            codeContent={<ExperienceCodeContent type="education" />}
            outputContent={<ExperienceOutput type="education" />}
            lineCount={52}
          />
        );
      case 'projects':
      case 'recent':
        return (
          <SplitScreenLayout
            fileName="projects.tsx"
            codeContent={<ProjectsCodeContent />}
            outputContent={<ProjectsOutput />}
            lineCount={55}
          />
        );
      case 'contact':
        return (
          <SplitScreenLayout
            fileName="contact.yml"
            codeContent={<ContactCodeContent />}
            outputContent={<ContactOutput />}
            lineCount={36}
          />
        );
      case 'settings':
        return <Settings />;
      default:
        return (
          <SplitScreenLayout
            fileName="README.md"
            codeContent={<ReadmeCodeContent />}
            outputContent={<ReadmeOutput />}
            lineCount={46}
          />
        );
    }
  };

  return (
    <div className="flex-1 h-full">
      {renderContent()}
    </div>
  );
}
