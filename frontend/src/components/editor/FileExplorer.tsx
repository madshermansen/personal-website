"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, FileCode, Briefcase, GraduationCap, Mail, FolderOpen, ChevronRight, ChevronDown } from "lucide-react";

interface FileExplorerProps {
  activeFile: string;
  onFileSelect: (file: string) => void;
  width?: number;
  onWidthChange?: (width: number) => void;
}

interface FileItemProps {
  name: string;
  icon: React.ReactNode;
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
      <span className="flex-shrink-0">{icon}</span>
      <span className="truncate">{name}</span>
    </div>
  );
}

interface FolderProps {
  name: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Folder({ name, children, defaultOpen = false }: FolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-primary/10 transition-all duration-200 font-mono text-sm text-text/70 group"
      >
        {isOpen ? (
          <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
        )}
        <FolderOpen className="w-4 h-4 flex-shrink-0 text-accent/70 group-hover:text-accent" />
        <span className="truncate">{name}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default function FileExplorer({ activeFile, onFileSelect, width = 220, onWidthChange }: FileExplorerProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const handleDragStart = (_: any, info: any) => {
    setIsDragging(true);
    setDragStart(width);
  };

  const handleDrag = (_: any, info: any) => {
    if (onWidthChange) {
      const newWidth = Math.max(180, Math.min(400, dragStart + info.offset.x));
      onWidthChange(newWidth);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="h-full bg-black/30 border-r border-primary/30 flex flex-col overflow-y-auto relative"
      style={{ width: `${width}px` }}
    >
      <div className="px-3 py-2 border-b border-primary/20 text-xs uppercase tracking-wider text-text/50 font-mono">
        Portfolio
      </div>

      <div className="flex-1">
        <FileItem
          name="README.md"
          icon={<FileText className="w-4 h-4 text-blue-400/70" />}
          active={activeFile === 'readme'}
          onClick={() => onFileSelect('readme')}
        />

        <FileItem
          name="about.tsx"
          icon={<FileCode className="w-4 h-4 text-cyan-400/70" />}
          active={activeFile === 'about'}
          onClick={() => onFileSelect('about')}
        />

        <FileItem
          name="skills.ts"
          icon={<FileCode className="w-4 h-4 text-blue-400/70" />}
          active={activeFile === 'skills'}
          onClick={() => onFileSelect('skills')}
        />

        <Folder name="experience/" defaultOpen={true}>
          <FileItem
            name="work.py"
            icon={<Briefcase className="w-4 h-4 text-orange-400/70" />}
            active={activeFile === 'work'}
            onClick={() => onFileSelect('work')}
            indent={1}
          />
          <FileItem
            name="education.py"
            icon={<GraduationCap className="w-4 h-4 text-green-400/70" />}
            active={activeFile === 'education'}
            onClick={() => onFileSelect('education')}
            indent={1}
          />
        </Folder>

        <Folder name="projects/" defaultOpen={true}>
          <FileItem
            name="index.tsx"
            icon={<FileCode className="w-4 h-4 text-cyan-400/70" />}
            active={activeFile === 'projects'}
            onClick={() => onFileSelect('projects')}
            indent={1}
          />
          <FileItem
            name="recent.ts"
            icon={<FileCode className="w-4 h-4 text-blue-400/70" />}
            active={activeFile === 'recent'}
            onClick={() => onFileSelect('recent')}
            indent={1}
          />
        </Folder>

        <FileItem
          name="contact.yml"
          icon={<Mail className="w-4 h-4 text-yellow-400/70" />}
          active={activeFile === 'contact'}
          onClick={() => onFileSelect('contact')}
        />
      </div>

      {/* Drag Handle */}
      {onWidthChange && (
        <motion.div
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className={`absolute top-0 right-0 bottom-0 w-1 cursor-col-resize group hover:w-1.5 transition-all
            ${isDragging ? 'bg-primary w-1.5' : 'bg-transparent hover:bg-primary/50'}`}
        >
          <div className="absolute inset-y-0 -right-1 w-3" />
        </motion.div>
      )}
    </div>
  );
}
