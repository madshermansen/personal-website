interface EditorTabsProps {
  activeFile: string;
  openFiles: Array<{name: string, icon: string, key: string}>;
  onTabClick: (key: string) => void;
  onTabClose?: (key: string) => void;
}

export default function EditorTabs({ activeFile, openFiles, onTabClick, onTabClose }: EditorTabsProps) {
  return (
    <>
      {openFiles.map((file) => (
        <div
          key={file.key}
          onClick={() => onTabClick(file.key)}
          className={`flex items-center gap-2 px-4 py-2 border-r border-primary/10 border-b-2 cursor-pointer transition-all duration-200 font-mono text-sm whitespace-nowrap
            ${activeFile === file.key
              ? 'bg-primary/15 text-primary border-b-primary'
              : 'text-text/70 hover:bg-primary/10 hover:text-accent border-b-transparent'}`}
        >
          <span>{file.icon}</span>
          <span>{file.name}</span>
          {onTabClose && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(file.key);
              }}
              className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          )}
        </div>
      ))}
    </>
  );
}
