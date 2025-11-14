import AboutContent from "./fileContents/AboutContent";
import ReadmeContent from "./fileContents/ReadmeContent";
import Experience from "../frontPageSections/Experience";
import RecentProjects from "../frontPageSections/RecentProjects";
import Contact from "../frontPageSections/Contact";
import SplitScreenLayout from "./SplitScreenLayout";
import AboutOutput from "./outputs/AboutOutput";
import SkillsOutput from "./outputs/SkillsOutput";

interface EditorContentProps {
  activeFile: string;
}

// Skills code content component
const SkillsCodeContent = () => (
  <div className="font-mono text-sm leading-relaxed">
    <div className="mb-2">
      <span className="monokai-keyword">const</span>{" "}
      <span className="monokai-value">skills</span>{" "}
      <span className="text-text/70">= {"{"}</span>
    </div>
    <div className="ml-4">
      <div className="mb-2">
        <span className="monokai-property">frontend</span>
        <span className="text-text/70">: [</span>
      </div>
      <div className="ml-4 mb-2">
        <span className="monokai-string">&quot;React&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Next.js&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;TypeScript&quot;</span>
        <span className="text-text/70">,</span>
        <br />
        <span className="monokai-string">&quot;Tailwind CSS&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Framer Motion&quot;</span>
      </div>
      <div className="mb-2">
        <span className="text-text/70">],</span>
      </div>

      <div className="mb-2 mt-4">
        <span className="monokai-property">backend</span>
        <span className="text-text/70">: [</span>
      </div>
      <div className="ml-4 mb-2">
        <span className="monokai-string">&quot;Node.js&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Express&quot;</span>
        <span className="text-text/70">,</span>
        <br />
        <span className="monokai-string">&quot;MySQL&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Planetscale&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Sanity CMS&quot;</span>
      </div>
      <div className="mb-2">
        <span className="text-text/70">],</span>
      </div>

      <div className="mb-2 mt-4">
        <span className="monokai-property">mobile</span>
        <span className="text-text/70">: [</span>
      </div>
      <div className="ml-4 mb-2">
        <span className="monokai-string">&quot;React Native&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Expo&quot;</span>
        <span className="text-text/70">,</span>
        <br />
        <span className="monokai-string">&quot;iOS&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Android&quot;</span>
      </div>
      <div className="mb-2">
        <span className="text-text/70">],</span>
      </div>

      <div className="mb-2 mt-4">
        <span className="monokai-property">tools</span>
        <span className="text-text/70">: [</span>
      </div>
      <div className="ml-4 mb-2">
        <span className="monokai-string">&quot;Git&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;VS Code&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Figma&quot;</span>
        <span className="text-text/70">,</span>
        <br />
        <span className="monokai-string">&quot;Vercel&quot;</span>
        <span className="text-text/70">, </span>
        <span className="monokai-string">&quot;Zendesk&quot;</span>
      </div>
      <div className="mb-2">
        <span className="text-text/70">]</span>
      </div>
    </div>
    <div>
      <span className="text-text/70">{"};"}</span>
    </div>
  </div>
);

export default function EditorContent({ activeFile }: EditorContentProps) {
  const renderContent = () => {
    switch (activeFile) {
      case 'readme':
        return <ReadmeContent />;
      case 'about':
        return (
          <SplitScreenLayout
            fileName="about.tsx"
            codeContent={<AboutContent />}
            outputContent={<AboutOutput />}
          />
        );
      case 'skills':
        return (
          <SplitScreenLayout
            fileName="skills.ts"
            codeContent={<SkillsCodeContent />}
            outputContent={<SkillsOutput />}
          />
        );
      case 'work':
      case 'education':
        return <Experience />;
      case 'projects':
      case 'recent':
        return <RecentProjects />;
      case 'contact':
        return <Contact />;
      default:
        return <ReadmeContent />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {renderContent()}
    </div>
  );
}
