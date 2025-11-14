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
  const [openFiles, setOpenFiles] = useState([
    { name: 'README.md', icon: '📄', key: 'readme' },
    { name: 'about.tsx', icon: '⚛️', key: 'about' }
  ]);

  const handleFileSelect = (fileKey: string) => {
    setActiveFile(fileKey);

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
    <main className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* Icon Sidebar */}
        <IconSidebar activeView={activeView} onViewChange={setActiveView} />

        {/* File Explorer */}
        {activeView === 'explorer' && (
          <FileExplorer activeFile={activeFile} onFileSelect={handleFileSelect} />
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
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
