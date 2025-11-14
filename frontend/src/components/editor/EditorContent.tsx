import AboutContent from "./fileContents/AboutContent";
import ReadmeContent from "./fileContents/ReadmeContent";
import Experience from "../frontPageSections/Experience";
import RecentProjects from "../frontPageSections/RecentProjects";
import Contact from "../frontPageSections/Contact";

interface EditorContentProps {
  activeFile: string;
}

export default function EditorContent({ activeFile }: EditorContentProps) {
  const renderContent = () => {
    switch (activeFile) {
      case 'readme':
        return <ReadmeContent />;
      case 'about':
        return <AboutContent />;
      case 'work':
      case 'education':
        return <Experience />;
      case 'projects':
      case 'recent':
        return <RecentProjects />;
      case 'contact':
        return <Contact />;
      case 'skills':
        return (
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
                <span className="monokai-string">"React"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Next.js"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"TypeScript"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="monokai-string">"Tailwind CSS"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Framer Motion"</span>
              </div>
              <div className="mb-2">
                <span className="text-text/70">],</span>
              </div>

              <div className="mb-2 mt-4">
                <span className="monokai-property">backend</span>
                <span className="text-text/70">: [</span>
              </div>
              <div className="ml-4 mb-2">
                <span className="monokai-string">"Node.js"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Express"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="monokai-string">"MySQL"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Planetscale"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Sanity CMS"</span>
              </div>
              <div className="mb-2">
                <span className="text-text/70">],</span>
              </div>

              <div className="mb-2 mt-4">
                <span className="monokai-property">mobile</span>
                <span className="text-text/70">: [</span>
              </div>
              <div className="ml-4 mb-2">
                <span className="monokai-string">"React Native"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Expo"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="monokai-string">"iOS"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Android"</span>
              </div>
              <div className="mb-2">
                <span className="text-text/70">],</span>
              </div>

              <div className="mb-2 mt-4">
                <span className="monokai-property">tools</span>
                <span className="text-text/70">: [</span>
              </div>
              <div className="ml-4 mb-2">
                <span className="monokai-string">"Git"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"VS Code"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Figma"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="monokai-string">"Vercel"</span>
                <span className="text-text/70">, </span>
                <span className="monokai-string">"Zendesk"</span>
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
      default:
        return <ReadmeContent />;
    }
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {renderContent()}
    </div>
  );
}
