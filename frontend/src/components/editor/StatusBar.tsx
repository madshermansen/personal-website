interface StatusBarProps {
  activeFile: string;
  lineCount?: number;
}

export default function StatusBar({ activeFile, lineCount = 0 }: StatusBarProps) {
  const getFileType = (file: string) => {
    const types: Record<string, string> = {
      readme: 'Markdown',
      about: 'TypeScript React',
      skills: 'TypeScript',
      work: 'Markdown',
      education: 'Markdown',
      projects: 'TypeScript React',
      recent: 'TypeScript',
      contact: 'YAML'
    };
    return types[file] || 'Text';
  };

  return (
    <div className="h-8 bg-primary/10 border-t border-primary/30 flex items-center justify-between px-4 text-xs font-mono text-text/60">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-primary">●</span>
          <span>main</span>
        </div>
        <div className="flex items-center gap-2">
          <span>0</span>
          <span>✓</span>
        </div>
        <div className="flex items-center gap-2">
          <span>0</span>
          <span>⚠</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span>{getFileType(activeFile)}</span>
        <span>UTF-8</span>
        {lineCount > 0 && <span>Ln {lineCount}</span>}
      </div>
    </div>
  );
}
