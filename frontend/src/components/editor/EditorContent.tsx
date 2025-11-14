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
          <div className="font-mono text-sm">
            <div className="mb-2">
              <span className="text-accent">const</span>{" "}
              <span className="text-secondary">skills</span>{" "}
              <span className="text-text/70">= {"{"}</span>
            </div>
            <div className="ml-4">
              <div className="mb-2">
                <span className="text-accent">frontend</span>
                <span className="text-text/70">: [</span>
              </div>
              <div className="ml-4 mb-2">
                <span className="text-primary">"React"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Next.js"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"TypeScript"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="text-primary">"Tailwind CSS"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Framer Motion"</span>
              </div>
              <div className="mb-2">
                <span className="text-text/70">],</span>
              </div>

              <div className="mb-2 mt-4">
                <span className="text-accent">backend</span>
                <span className="text-text/70">: [</span>
              </div>
              <div className="ml-4 mb-2">
                <span className="text-primary">"Node.js"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Express"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="text-primary">"MySQL"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Planetscale"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Sanity CMS"</span>
              </div>
              <div className="mb-2">
                <span className="text-text/70">],</span>
              </div>

              <div className="mb-2 mt-4">
                <span className="text-accent">mobile</span>
                <span className="text-text/70">: [</span>
              </div>
              <div className="ml-4 mb-2">
                <span className="text-primary">"React Native"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Expo"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="text-primary">"iOS"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Android"</span>
              </div>
              <div className="mb-2">
                <span className="text-text/70">],</span>
              </div>

              <div className="mb-2 mt-4">
                <span className="text-accent">tools</span>
                <span className="text-text/70">: [</span>
              </div>
              <div className="ml-4 mb-2">
                <span className="text-primary">"Git"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"VS Code"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Figma"</span>
                <span className="text-text/70">,</span>
                <br />
                <span className="text-primary">"Vercel"</span>
                <span className="text-text/70">, </span>
                <span className="text-primary">"Zendesk"</span>
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
