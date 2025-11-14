"use client";

import { useState } from "react";

interface FileExplorerProps {
  activeFile: string;
  onFileSelect: (file: string) => void;
}

interface FileItemProps {
  name: string;
  icon: string;
  active: boolean;
  onClick: () => void;
  indent?: number;
}

function FileItem({ name, icon, active, onClick, indent = 0 }: FileItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 cursor-pointer transition-all duration-200 font-mono text-sm
        ${active ? 'bg-primary/20 text-primary border-l-2 border-primary' : 'text-text/70 hover:bg-primary/10 hover:text-accent'}`}
      style={{ paddingLeft: `${12 + indent * 15}px` }}
    >
      <span className="text-base">{icon}</span>
      <span>{name}</span>
    </div>
  );
}

interface FolderProps {
  name: string;
  icon: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Folder({ name, icon, children, defaultOpen = false }: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary/10 transition-all duration-200 font-mono text-sm text-text/70"
      >
        <span className="text-xs">{isOpen ? '▼' : '▶'}</span>
        <span className="text-base">{icon}</span>
        <span>{name}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default function FileExplorer({ activeFile, onFileSelect }: FileExplorerProps) {
  return (
    <div className="w-[220px] bg-black/30 border-r border-primary/30 flex flex-col overflow-y-auto">
      <div className="px-3 py-2 border-b border-primary/20 text-xs uppercase tracking-wider text-text/50 font-mono">
        Portfolio
      </div>

      <div className="flex-1">
        <FileItem
          name="README.md"
          icon="📄"
          active={activeFile === 'readme'}
          onClick={() => onFileSelect('readme')}
        />

        <FileItem
          name="about.tsx"
          icon="⚛️"
          active={activeFile === 'about'}
          onClick={() => onFileSelect('about')}
        />

        <FileItem
          name="skills.ts"
          icon="📄"
          active={activeFile === 'skills'}
          onClick={() => onFileSelect('skills')}
        />

        <Folder name="experience/" icon="📁" defaultOpen={true}>
          <FileItem
            name="work.md"
            icon="💼"
            active={activeFile === 'work'}
            onClick={() => onFileSelect('work')}
            indent={1}
          />
          <FileItem
            name="education.md"
            icon="🎓"
            active={activeFile === 'education'}
            onClick={() => onFileSelect('education')}
            indent={1}
          />
        </Folder>

        <Folder name="projects/" icon="📁" defaultOpen={true}>
          <FileItem
            name="index.tsx"
            icon="⚛️"
            active={activeFile === 'projects'}
            onClick={() => onFileSelect('projects')}
            indent={1}
          />
          <FileItem
            name="recent.ts"
            icon="📄"
            active={activeFile === 'recent'}
            onClick={() => onFileSelect('recent')}
            indent={1}
          />
        </Folder>

        <FileItem
          name="contact.yml"
          icon="📧"
          active={activeFile === 'contact'}
          onClick={() => onFileSelect('contact')}
        />
      </div>
    </div>
  );
}
