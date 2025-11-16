import AboutContent from "./fileContents/AboutContent";
import ReadmeCodeContent from "./fileContents/ReadmeCodeContent";
import WorkCodeContent from "./fileContents/WorkCodeContent";
import EducationCodeContent from "./fileContents/EducationCodeContent";
import ProjectsCodeContent from "./fileContents/ProjectsCodeContent";
import ContactCodeContent from "./fileContents/ContactCodeContent";
import SplitScreenLayout from "./SplitScreenLayout";
import AboutOutput from "./outputs/AboutOutput";
import SkillsOutput from "./outputs/SkillsOutput";
import ReadmeOutput from "./outputs/ReadmeOutputLatex";
import WorkOutput from "./outputs/WorkOutput";
import EducationOutput from "./outputs/EducationOutput";
import ProjectsOutput from "./outputs/ProjectsOutput";
import ContactOutput from "./outputs/ContactOutput";

interface EditorContentProps {
  activeFile: string;
}

// Skills code content component
const SkillsCodeContent = () => (
  <div className="font-mono text-sm leading-relaxed whitespace-nowrap">
    <div className="mb-4">
      <span className="monokai-comment">{'/**'}</span>
      <div className="monokai-comment"> * Technical skills and tools proficiency</div>
      <div className="monokai-comment"> * @module Skills</div>
      <span className="monokai-comment">{' */'}</span>
    </div>

    <div className="mb-4">
      <span className="monokai-keyword">type</span>{" "}
      <span className="monokai-value">SkillCategory</span>{" "}
      <span className="text-text/70">= </span>
      <span className="monokai-string">&apos;frontend&apos;</span>
      <span className="text-text/70"> | </span>
      <span className="monokai-string">&apos;backend&apos;</span>
      <span className="text-text/70"> | </span>
      <span className="monokai-string">&apos;mobile&apos;</span>
      <span className="text-text/70"> | </span>
      <span className="monokai-string">&apos;tools&apos;</span>
      <span className="text-text/70">;</span>
    </div>

    <div className="mb-4">
      <span className="monokai-keyword">interface</span>{" "}
      <span className="monokai-value">TechnicalSkills</span>{" "}
      <span className="text-text/70">{"{"}</span>
      <div className="ml-4">
        <div><span className="monokai-property">frontend</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
        <div><span className="monokai-property">backend</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
        <div><span className="monokai-property">mobile</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
        <div><span className="monokai-property">tools</span><span className="text-text/70">:</span> <span className="monokai-keyword">readonly string</span><span className="text-text/70">[];</span></div>
      </div>
      <span className="text-text/70">{"}"}</span>
    </div>

    <div className="mb-4">
      <span className="monokai-comment">{'/**'}</span>
      <div className="monokai-comment"> * Complete technical skill set organized by category</div>
      <div className="monokai-comment"> * @constant</div>
      <span className="monokai-comment">{' */'}</span>
    </div>

    <div className="mb-2">
      <span className="monokai-keyword">export const</span>{" "}
      <span className="monokai-value">skills</span>
      <span className="text-text/70">:</span>{" "}
      <span className="monokai-value">TechnicalSkills</span>{" "}
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
    <div className="mb-2">
      <span className="text-text/70">{"} as const;"}</span>
    </div>

    <div className="mb-4 mt-6">
      <span className="monokai-comment">{'/**'}</span>
      <div className="monokai-comment"> * Get all skills from a specific category</div>
      <div className="monokai-comment"> * @param category - The skill category to retrieve</div>
      <div className="monokai-comment"> * @returns Array of skills in the specified category</div>
      <span className="monokai-comment">{' */'}</span>
    </div>

    <div className="mb-2">
      <span className="monokai-keyword">export const</span>{" "}
      <span className="monokai-function">getSkillsByCategory</span>{" "}
      <span className="text-text/70">= (</span>
    </div>
    <div className="ml-4 mb-2">
      <span className="monokai-property">category</span>
      <span className="text-text/70">:</span>{" "}
      <span className="monokai-value">SkillCategory</span>
    </div>
    <div className="mb-2">
      <span className="text-text/70">):</span>{" "}
      <span className="monokai-keyword">readonly string</span>
      <span className="text-text/70">[] </span>
      <span className="monokai-operator">=&gt;</span>{" "}
      <span className="text-text/70">{"{"}</span>
    </div>
    <div className="ml-4 mb-2">
      <span className="monokai-keyword">return</span>{" "}
      <span className="monokai-value">skills</span>
      <span className="text-text/70">[</span>
      <span className="monokai-property">category</span>
      <span className="text-text/70">];</span>
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
        return (
          <SplitScreenLayout
            fileName="README.md"
            codeContent={<ReadmeCodeContent />}
            outputContent={<ReadmeOutput />}
            lineCount={80}
          />
        );
      case 'about':
        return (
          <SplitScreenLayout
            fileName="about.tsx"
            codeContent={<AboutContent />}
            outputContent={<AboutOutput />}
            lineCount={120}
          />
        );
      case 'skills':
        return (
          <SplitScreenLayout
            fileName="skills.ts"
            codeContent={<SkillsCodeContent />}
            outputContent={<SkillsOutput />}
            lineCount={100}
          />
        );
      case 'work':
        return (
          <SplitScreenLayout
            fileName="work.ts"
            codeContent={<WorkCodeContent />}
            outputContent={<WorkOutput />}
            lineCount={120}
          />
        );
      case 'education':
        return (
          <SplitScreenLayout
            fileName="education.ts"
            codeContent={<EducationCodeContent />}
            outputContent={<EducationOutput />}
            lineCount={70}
          />
        );
      case 'projects':
      case 'recent':
        return (
          <SplitScreenLayout
            fileName="projects.tsx"
            codeContent={<ProjectsCodeContent />}
            outputContent={<ProjectsOutput />}
            lineCount={110}
          />
        );
      case 'contact':
        return (
          <SplitScreenLayout
            fileName="contact.yml"
            codeContent={<ContactCodeContent />}
            outputContent={<ContactOutput />}
            lineCount={35}
          />
        );
      default:
        return (
          <SplitScreenLayout
            fileName="README.md"
            codeContent={<ReadmeCodeContent />}
            outputContent={<ReadmeOutput />}
            lineCount={80}
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
