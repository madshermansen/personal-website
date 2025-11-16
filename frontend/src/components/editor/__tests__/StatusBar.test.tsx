import { render, screen } from '@testing-library/react';
import StatusBar from '../StatusBar';

describe('StatusBar', () => {
  it('renders the status bar with default props', () => {
    render(<StatusBar activeFile="readme" />);

    expect(screen.getByText('main')).toBeInTheDocument();
    expect(screen.getByText('Markdown')).toBeInTheDocument();
    expect(screen.getByText('UTF-8')).toBeInTheDocument();
  });

  it('displays line count when provided', () => {
    render(<StatusBar activeFile="readme" lineCount={42} />);

    expect(screen.getByText('Ln 42')).toBeInTheDocument();
  });

  it('does not display line count when not provided', () => {
    render(<StatusBar activeFile="readme" />);

    expect(screen.queryByText(/Ln/)).not.toBeInTheDocument();
  });

  it('displays correct file type for different files', () => {
    const { rerender } = render(<StatusBar activeFile="readme" />);
    expect(screen.getByText('Markdown')).toBeInTheDocument();

    rerender(<StatusBar activeFile="about" />);
    expect(screen.getByText('TypeScript React')).toBeInTheDocument();

    rerender(<StatusBar activeFile="skills" />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    rerender(<StatusBar activeFile="contact" />);
    expect(screen.getByText('YAML')).toBeInTheDocument();
  });

  it('displays "Text" for unknown file types', () => {
    render(<StatusBar activeFile="unknown" />);

    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('displays git status indicators', () => {
    render(<StatusBar activeFile="readme" />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('✓')).toBeInTheDocument();
    expect(screen.getByText('⚠')).toBeInTheDocument();
  });
});
