"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";

interface Message {
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
}

interface TerminalProps {
  width?: number;
  onWidthChange?: (width: number) => void;
}

// Lightweight AI responses based on keywords
const getAIResponse = (input: string): string => {
  const lowerInput = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|greetings)/.test(lowerInput)) {
    return "Hello! I'm a simple AI assistant. How can I help you today?";
  }

  // Help command
  if (lowerInput === 'help' || lowerInput === '?') {
    return "Available commands:\n• help - Show this help message\n• about - Learn about this terminal\n• skills - View portfolio skills\n• projects - List projects\n• contact - Get contact info\n• clear - Clear terminal (not implemented)\n• date - Show current date\n• time - Show current time\n\nOr just chat with me!";
  }

  // About
  if (lowerInput === 'about') {
    return "This is a lightweight AI terminal built into the portfolio sidebar. It uses simple pattern matching to provide responses. Try asking about projects, skills, or just chat!";
  }

  // Date and time
  if (lowerInput === 'date') {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  if (lowerInput === 'time') {
    return new Date().toLocaleTimeString('en-US');
  }

  // Skills
  if (lowerInput.includes('skill')) {
    return "Key Skills:\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, Python\n• Design: Tailwind CSS, UI/UX\n• Tools: Git, VS Code, Linux\n\nType 'projects' to see what I've built!";
  }

  // Projects
  if (lowerInput.includes('project')) {
    return "Recent Projects:\n• Personal Portfolio (This site!)\n• Web Applications\n• Open Source Contributions\n\nClick the file explorer to view detailed project info.";
  }

  // Contact
  if (lowerInput.includes('contact')) {
    return "Want to get in touch? Click the user icon at the bottom of the sidebar to view contact information!";
  }

  // Clear command (just acknowledge it)
  if (lowerInput === 'clear' || lowerInput === 'cls') {
    return "Clear command received. (Note: Terminal clear will be implemented soon!)";
  }

  // Questions about AI capabilities
  if (lowerInput.includes('who are you') || lowerInput.includes('what are you')) {
    return "I'm a lightweight AI assistant built into this portfolio terminal. I use pattern matching to understand and respond to your messages!";
  }

  // Questions
  if (lowerInput.includes('how are you')) {
    return "I'm running smoothly! Thanks for asking. How can I assist you?";
  }

  if (lowerInput.includes('name')) {
    return "I'm the Portfolio Terminal AI - a simple but helpful assistant!";
  }

  // Programming questions
  if (lowerInput.includes('code') || lowerInput.includes('program')) {
    return "I notice you're interested in programming! This portfolio showcases various coding projects. Check the file explorer for code examples.";
  }

  // Thank you
  if (lowerInput.includes('thank')) {
    return "You're welcome! Feel free to ask anything else.";
  }

  // Goodbye
  if (/^(bye|goodbye|see you|exit|quit)/.test(lowerInput)) {
    return "Goodbye! The terminal will stay open. Come back anytime!";
  }

  // Generic responses based on patterns
  if (lowerInput.includes('?')) {
    return "That's an interesting question! Try typing 'help' to see what I can assist with, or explore the portfolio files in the explorer.";
  }

  if (lowerInput.split(' ').length > 10) {
    return "I appreciate the detailed message! While I'm a simple AI, I'm here to help you navigate this portfolio. Try asking about skills, projects, or contact info!";
  }

  // Default response
  const defaultResponses = [
    "Interesting! Type 'help' to see what I can do.",
    "I'm not sure about that, but I can help you explore this portfolio!",
    "Hmm, I don't have a specific response for that. Try 'help' for available commands.",
    "I'm a simple AI, but I can tell you about skills, projects, and more. Type 'help'!",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

export default function Terminal({ width = 280, onWidthChange }: TerminalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'system',
      content: 'Portfolio Terminal v1.0.0\nType "help" for available commands.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isResizing, setIsResizing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Get AI response
    const aiResponse = getAIResponse(input);

    // Add AI response after a brief delay
    setTimeout(() => {
      const aiMessage: Message = {
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 300);

    setInput('');
  };

  // Handle resizing
  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!onWidthChange) return;
      const newWidth = e.clientX - 60; // Subtract icon sidebar width
      const clampedWidth = Math.min(Math.max(newWidth, 200), 500);
      onWidthChange(clampedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, onWidthChange]);

  return (
    <div
      ref={terminalRef}
      className="h-full bg-black/60 border-r border-primary/30 flex flex-col relative select-none"
      style={{ width: `${width}px`, minWidth: '200px', maxWidth: '500px' }}
    >
      {/* Header */}
      <div className="px-3 py-2 border-b border-primary/30 flex items-center gap-2">
        <TerminalIcon className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-text/90">TERMINAL</span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 font-mono text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className="space-y-1">
            {msg.type === 'user' && (
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary break-words">{msg.content}</span>
              </div>
            )}
            {msg.type === 'ai' && (
              <div className="text-secondary/90 whitespace-pre-line break-words pl-6">
                {msg.content}
              </div>
            )}
            {msg.type === 'system' && (
              <div className="text-text/50 whitespace-pre-line break-words text-xs">
                {msg.content}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-primary/30 p-2">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-text text-sm font-mono outline-none placeholder:text-text/30"
            autoComplete="off"
          />
        </form>
      </div>

      {/* Resize Handle */}
      {onWidthChange && (
        <div
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-primary/50 transition-colors"
          onMouseDown={() => setIsResizing(true)}
        />
      )}
    </div>
  );
}
