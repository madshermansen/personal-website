"use client";

import { useState } from "react";
import IconSidebar from "../components/editor/IconSidebar";
import FileExplorer from "../components/editor/FileExplorer";
import EditorTabs from "../components/editor/EditorTabs";
import EditorContent from "../components/editor/EditorContent";
import StatusBar from "../components/editor/StatusBar";

export default function Home() {
  const [activeView, setActiveView] = useState('explorer');
  const [activeFile, setActiveFile] = useState('readme');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFiles, setOpenFiles] = useState([
    { name: 'README.md', icon: '📄', key: 'readme' },
    { name: 'about.tsx', icon: '⚛️', key: 'about' }
  ]);

  const handleFileSelect = (fileKey: string) => {
    setActiveFile(fileKey);
    setMobileMenuOpen(false); // Close mobile menu after selection

    // Add file to open tabs if not already open
    const fileConfig: Record<string, {name: string, icon: string}> = {
      readme: { name: 'README.md', icon: '📄' },
      about: { name: 'about.tsx', icon: '⚛️' },
      skills: { name: 'skills.ts', icon: '📄' },
      work: { name: 'work.md', icon: '💼' },
      education: { name: 'education.md', icon: '🎓' },
      projects: { name: 'index.tsx', icon: '⚛️' },
      recent: { name: 'recent.ts', icon: '📄' },
      contact: { name: 'contact.yml', icon: '📧' }
    };

    if (!openFiles.find(f => f.key === fileKey) && fileConfig[fileKey]) {
      setOpenFiles([...openFiles, { ...fileConfig[fileKey], key: fileKey }]);
    }
  };

  const handleTabClose = (fileKey: string) => {
    const newOpenFiles = openFiles.filter(f => f.key !== fileKey);
    setOpenFiles(newOpenFiles);

    // If closing active tab, switch to another tab
    if (fileKey === activeFile && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[0].key);
    }
  };

  return (
    <main className="h-screen flex flex-col fixed inset-0">
      {/* Mobile hamburger menu */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center bg-primary/20 border border-primary/30 rounded-md"
      >
        <span className="text-xl">{mobileMenuOpen ? '×' : '☰'}</span>
      </button>

      <div className="flex-1 flex overflow-hidden">
        {/* Icon Sidebar - Hidden on mobile unless menu is open */}
        <div className={`${mobileMenuOpen ? 'fixed inset-y-0 left-0 z-40' : 'hidden'} lg:block`}>
          <IconSidebar activeView={activeView} onViewChange={setActiveView} />
        </div>

        {/* File Explorer - Hidden on mobile unless menu is open */}
        {activeView === 'explorer' && (
          <div className={`${mobileMenuOpen ? 'fixed inset-y-0 left-[60px] z-40' : 'hidden'} lg:block`}>
            <FileExplorer activeFile={activeFile} onFileSelect={handleFileSelect} />
          </div>
        )}

        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <EditorTabs
            activeFile={activeFile}
            openFiles={openFiles}
            onTabClick={setActiveFile}
            onTabClose={handleTabClose}
          />

          <EditorContent activeFile={activeFile} />
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar activeFile={activeFile} />
    </main>
  );
}
