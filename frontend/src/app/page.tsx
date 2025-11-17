"use client";

import { useState } from "react";
import IconSidebar from "../components/editor/IconSidebar";
import FileExplorer from "../components/editor/FileExplorer";
import SearchView from "../components/editor/SearchView";
import TerminalView from "../components/editor/TerminalView";
import EditorTabs from "../components/editor/EditorTabs";
import EditorContent from "../components/editor/EditorContent";
import StatusBar from "../components/editor/StatusBar";
import { getFileInfo, type FileInfo, type FileKey } from "../utils/fileIcons";

export default function Home() {
  const [activeView, setActiveView] = useState('explorer');
  const [activeFile, setActiveFile] = useState('readme');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(220);
  const [openFiles, setOpenFiles] = useState<FileInfo[]>([
    getFileInfo('readme'),
    getFileInfo('about')
  ]);

  const handleFileSelect = (fileKey: string) => {
    setActiveFile(fileKey);
    setMobileMenuOpen(false);

    if (!openFiles.find(f => f.key === fileKey)) {
      const fileInfo = getFileInfo(fileKey as FileKey);
      if (fileInfo) {
        setOpenFiles([...openFiles, fileInfo]);
      }
    }
  };

  const handleViewChange = (view: string) => {
    setActiveView(view);
    // For non-file views, also update activeFile
    if (view === 'settings' || view === 'contact' || view === 'projects') {
      setActiveFile(view);
      setMobileMenuOpen(false);
    }
  };

  const handleTabClose = (fileKey: string) => {
    const newOpenFiles = openFiles.filter(f => f.key !== fileKey);
    setOpenFiles(newOpenFiles);

    if (fileKey === activeFile && newOpenFiles.length > 0) {
      setActiveFile(newOpenFiles[0].key);
    }
  };

  return (
    <main className="h-screen w-screen flex flex-col fixed inset-0 bg-background">
      <div className="flex-1 flex overflow-hidden relative">
        {/* Desktop: Icon Sidebar */}
        <div className="hidden lg:block">
          <IconSidebar activeView={activeView} onViewChange={handleViewChange} />
        </div>

        {/* Desktop: File Explorer */}
        {activeView === 'explorer' && (
          <div className="hidden lg:block">
            <FileExplorer
              activeFile={activeFile}
              onFileSelect={handleFileSelect}
              width={sidebarWidth}
              onWidthChange={setSidebarWidth}
            />
          </div>
        )}

        {/* Desktop: Search View */}
        {activeView === 'search' && (
          <div className="hidden lg:block">
            <SearchView
              onFileSelect={handleFileSelect}
              width={sidebarWidth}
            />
          </div>
        )}

        {/* Desktop: Terminal View */}
        {activeView === 'terminal' && (
          <div className="hidden lg:block">
            <TerminalView
              width={sidebarWidth}
            />
          </div>
        )}

        {/* Mobile: Sidebar Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebars Container */}
            <div className="lg:hidden fixed inset-y-0 left-0 z-50 flex">
              <div className="bg-black border-r border-primary/30">
                <IconSidebar activeView={activeView} onViewChange={handleViewChange} />
              </div>
              {activeView === 'explorer' && (
                <div className="bg-background border-r border-primary/30">
                  <FileExplorer activeFile={activeFile} onFileSelect={handleFileSelect} />
                </div>
              )}
              {activeView === 'search' && (
                <div className="bg-background border-r border-primary/30">
                  <SearchView onFileSelect={handleFileSelect} />
                </div>
              )}
              {activeView === 'terminal' && (
                <div className="bg-background border-r border-primary/30">
                  <TerminalView />
                </div>
              )}
            </div>
          </>
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          {/* Mobile Menu Button - Integrated into tabs bar */}
          <div className="flex items-center bg-black/30 border-b border-primary/20">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-12 h-10 border-r border-primary/20 hover:bg-primary/10 transition-colors"
            >
              <span className="text-lg">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>

            {/* Tabs */}
            <div className="flex-1 flex overflow-x-auto">
              <EditorTabs
                activeFile={activeFile}
                openFiles={openFiles}
                onTabClick={setActiveFile}
                onTabClose={handleTabClose}
              />
            </div>
          </div>

          {/* Content Area - Fixed height to prevent shake */}
          <div className="flex-1 overflow-y-auto">
            <EditorContent activeFile={activeFile} />
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar activeFile={activeFile} />
    </main>
  );
}
