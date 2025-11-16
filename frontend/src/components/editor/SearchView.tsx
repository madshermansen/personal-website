"use client";

import { useState, useMemo } from "react";
import { Search, FileText, FileCode, Briefcase, GraduationCap, Mail, X } from "lucide-react";

interface SearchViewProps {
  onFileSelect: (file: string) => void;
  width?: number;
}

interface FileResult {
  key: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const availableFiles: FileResult[] = [
  {
    key: 'readme',
    name: 'README.md',
    description: 'Overview and introduction',
    icon: <FileText className="w-4 h-4 text-blue-400/70" />,
    path: './'
  },
  {
    key: 'about',
    name: 'about.tsx',
    description: 'Personal information and background',
    icon: <FileCode className="w-4 h-4 text-cyan-400/70" />,
    path: './'
  },
  {
    key: 'skills',
    name: 'skills.ts',
    description: 'Technical skills and proficiencies',
    icon: <FileCode className="w-4 h-4 text-blue-400/70" />,
    path: './'
  },
  {
    key: 'work',
    name: 'work.md',
    description: 'Work experience and employment history',
    icon: <Briefcase className="w-4 h-4 text-orange-400/70" />,
    path: './experience/'
  },
  {
    key: 'education',
    name: 'education.md',
    description: 'Educational background and certifications',
    icon: <GraduationCap className="w-4 h-4 text-green-400/70" />,
    path: './experience/'
  },
  {
    key: 'projects',
    name: 'index.tsx',
    description: 'Portfolio projects and work samples',
    icon: <FileCode className="w-4 h-4 text-cyan-400/70" />,
    path: './projects/'
  },
  {
    key: 'recent',
    name: 'recent.ts',
    description: 'Recent projects and activities',
    icon: <FileCode className="w-4 h-4 text-blue-400/70" />,
    path: './projects/'
  },
  {
    key: 'contact',
    name: 'contact.yml',
    description: 'Contact information and social links',
    icon: <Mail className="w-4 h-4 text-yellow-400/70" />,
    path: './'
  }
];

export default function SearchView({ onFileSelect, width = 220 }: SearchViewProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter files based on search query
  const filteredFiles = useMemo(() => {
    if (!searchQuery.trim()) {
      return availableFiles;
    }

    const query = searchQuery.toLowerCase();
    return availableFiles.filter(file =>
      file.name.toLowerCase().includes(query) ||
      file.description.toLowerCase().includes(query) ||
      file.path.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div
      className="h-full bg-black/30 border-r border-primary/30 flex flex-col"
      style={{ width: `${width}px` }}
    >
      {/* Header */}
      <div className="px-3 py-2 border-b border-primary/20 text-xs uppercase tracking-wider text-text/50 font-mono">
        Search
      </div>

      {/* Search Input */}
      <div className="p-3 border-b border-primary/20">
        <div className="relative">
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text/50">
            <Search className="w-3.5 h-3.5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search files..."
            className="w-full bg-black/40 border border-primary/30 rounded px-8 py-1.5 text-xs font-mono text-text placeholder:text-text/40 focus:outline-none focus:border-primary/60 focus:bg-black/60 transition-all"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-text/50 hover:text-text transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="px-3 py-1.5 text-xs text-text/50 font-mono border-b border-primary/10">
        {filteredFiles.length} {filteredFiles.length === 1 ? 'result' : 'results'} in {availableFiles.length} files
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto">
        {filteredFiles.length > 0 ? (
          <div>
            {filteredFiles.map((file) => (
              <div
                key={file.key}
                onClick={() => onFileSelect(file.key)}
                className="group cursor-pointer hover:bg-primary/10 transition-all duration-200 border-l-2 border-transparent hover:border-primary px-2.5 py-1.5"
              >
                {/* File Name and Path - Single Line */}
                <div className="flex items-center gap-1.5">
                  <span className="flex-shrink-0">{file.icon}</span>
                  <div className="flex items-baseline gap-1.5 min-w-0 flex-1">
                    <span className="font-mono text-[11px] text-text/90 group-hover:text-primary transition-colors truncate">
                      {file.name}
                    </span>
                    <span className="font-mono text-[9px] text-text/40 truncate">
                      {file.path}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="ml-[22px] text-[10px] text-text/50 mt-0.5 truncate">
                  {file.description}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-text/40 px-4 text-center">
            <Search className="w-8 h-8 mb-2 opacity-30" />
            <p className="text-xs font-mono">No files found</p>
            <p className="text-[10px] mt-1">Try a different search term</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {searchQuery && filteredFiles.length > 0 && (
        <div className="px-3 py-2 border-t border-primary/20 text-[10px] text-text/40 font-mono">
          Press Enter or click to open
        </div>
      )}
    </div>
  );
}
