import { FileText, FileCode, Briefcase, GraduationCap, Mail } from "lucide-react";

export type FileKey = 'readme' | 'about' | 'skills' | 'work' | 'education' | 'projects' | 'recent' | 'contact';

export interface FileInfo {
  name: string;
  icon: React.ReactNode;
  key: FileKey;
}

const fileIconConfig: Record<FileKey, { name: string; icon: React.ReactNode }> = {
  readme: {
    name: 'README.md',
    icon: <FileText className="w-4 h-4 text-blue-400/70" />
  },
  about: {
    name: 'about.tsx',
    icon: <FileCode className="w-4 h-4 text-cyan-400/70" />
  },
  skills: {
    name: 'skills.ts',
    icon: <FileCode className="w-4 h-4 text-blue-400/70" />
  },
  work: {
    name: 'work.md',
    icon: <Briefcase className="w-4 h-4 text-orange-400/70" />
  },
  education: {
    name: 'education.md',
    icon: <GraduationCap className="w-4 h-4 text-green-400/70" />
  },
  projects: {
    name: 'index.tsx',
    icon: <FileCode className="w-4 h-4 text-cyan-400/70" />
  },
  recent: {
    name: 'recent.ts',
    icon: <FileCode className="w-4 h-4 text-blue-400/70" />
  },
  contact: {
    name: 'contact.yml',
    icon: <Mail className="w-4 h-4 text-yellow-400/70" />
  },
};

export function getFileInfo(key: FileKey): FileInfo {
  return {
    ...fileIconConfig[key],
    key,
  };
}
