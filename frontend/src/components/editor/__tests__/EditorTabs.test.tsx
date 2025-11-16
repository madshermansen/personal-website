import { render, screen, fireEvent } from '@testing-library/react';
import EditorTabs from '../EditorTabs';

describe('EditorTabs', () => {
  const mockFiles = [
    { name: 'README.md', icon: <>📄</>, key: 'readme' },
    { name: 'about.tsx', icon: <>⚛️</>, key: 'about' },
    { name: 'skills.ts', icon: <>🔧</>, key: 'skills' },
  ];

  const mockOnTabClick = jest.fn();
  const mockOnTabClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all open files', () => {
    render(
      <EditorTabs
        activeFile="readme"
        openFiles={mockFiles}
        onTabClick={mockOnTabClick}
      />
    );

    expect(screen.getByText('README.md')).toBeInTheDocument();
    expect(screen.getByText('about.tsx')).toBeInTheDocument();
    expect(screen.getByText('skills.ts')).toBeInTheDocument();
  });

  it('highlights the active file', () => {
    render(
      <EditorTabs
        activeFile="about"
        openFiles={mockFiles}
        onTabClick={mockOnTabClick}
      />
    );

    const activeTab = screen.getByText('about.tsx').parentElement;
    expect(activeTab).toHaveClass('bg-primary/15');
    expect(activeTab).toHaveClass('text-primary');
  });

  it('calls onTabClick when a tab is clicked', () => {
    render(
      <EditorTabs
        activeFile="readme"
        openFiles={mockFiles}
        onTabClick={mockOnTabClick}
      />
    );

    fireEvent.click(screen.getByText('about.tsx'));
    expect(mockOnTabClick).toHaveBeenCalledWith('about');
    expect(mockOnTabClick).toHaveBeenCalledTimes(1);
  });

  it('displays close button when onTabClose is provided', () => {
    render(
      <EditorTabs
        activeFile="readme"
        openFiles={mockFiles}
        onTabClick={mockOnTabClick}
        onTabClose={mockOnTabClose}
      />
    );

    const closeButtons = screen.getAllByRole('button');
    expect(closeButtons).toHaveLength(mockFiles.length);
  });

  it('does not display close button when onTabClose is not provided', () => {
    render(
      <EditorTabs
        activeFile="readme"
        openFiles={mockFiles}
        onTabClick={mockOnTabClick}
      />
    );

    const closeButtons = screen.queryAllByRole('button');
    expect(closeButtons).toHaveLength(0);
  });

  it('calls onTabClose when close button is clicked', () => {
    render(
      <EditorTabs
        activeFile="readme"
        openFiles={mockFiles}
        onTabClick={mockOnTabClick}
        onTabClose={mockOnTabClose}
      />
    );

    const closeButtons = screen.getAllByRole('button');
    fireEvent.click(closeButtons[1]); // Close the 'about' tab

    expect(mockOnTabClose).toHaveBeenCalledWith('about');
    expect(mockOnTabClick).not.toHaveBeenCalled(); // Should not trigger tab click
  });

  it('stops propagation when close button is clicked', () => {
    render(
      <EditorTabs
        activeFile="readme"
        openFiles={mockFiles}
        onTabClick={mockOnTabClick}
        onTabClose={mockOnTabClose}
      />
    );

    const closeButtons = screen.getAllByRole('button');
    fireEvent.click(closeButtons[0]);

    // onTabClick should not be called because stopPropagation prevents it
    expect(mockOnTabClick).not.toHaveBeenCalled();
    expect(mockOnTabClose).toHaveBeenCalledTimes(1);
  });
});
