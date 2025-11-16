"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, X } from "lucide-react";

interface TerminalViewProps {
  width?: number;
}

interface Message {
  type: 'user' | 'ai' | 'system';
  content: string;
  timestamp: Date;
}

// Simple AI response logic
const getAIResponse = (userInput: string): string => {
  const input = userInput.toLowerCase().trim();

  // Greetings
  if (input.match(/^(hi|hello|hey|greetings)/)) {
    return "Hello! I'm a simple AI assistant. I can help you with basic information about this portfolio. Try asking me about skills, experience, or projects!";
  }

  // Skills
  if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
    return "This portfolio showcases skills in:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Animations: Framer Motion\n• State Management: Zustand\n• CMS: Sanity\n• Deployment: Vercel";
  }

  // About
  if (input.includes('about') || input.includes('who are you')) {
    return "This is a professional portfolio website built with a VS Code-style interface. It features a split-screen editor view with code on the left and live preview on the right. Navigate using the sidebar to explore different sections!";
  }

  // Projects
  if (input.includes('project')) {
    return "You can view projects by clicking on the Projects icon in the sidebar, or opening the 'projects' files from the file explorer. The portfolio showcases various development projects.";
  }

  // Experience/Work
  if (input.includes('experience') || input.includes('work')) {
    return "Check out the work experience by opening 'work.md' from the file explorer. It contains detailed information about professional experience and roles.";
  }

  // Education
  if (input.includes('education') || input.includes('study') || input.includes('degree')) {
    return "Educational background is available in the 'education.md' file. Open it from the file explorer to see details about degrees and certifications.";
  }

  // Contact
  if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
    return "Contact information can be found by clicking the User icon at the bottom of the sidebar, or by opening 'contact.yml' from the file explorer.";
  }

  // Help
  if (input.includes('help') || input === '?') {
    return "Available commands:\n• Ask about: skills, projects, experience, education, contact\n• Type 'clear' to clear the terminal\n• Navigate using the sidebar icons\n• Open files from the File Explorer";
  }

  // Clear
  if (input === 'clear') {
    return "__CLEAR__";
  }

  // Default response
  const responses = [
    "I'm not sure about that. Try asking about skills, projects, experience, or education!",
    "Interesting question! For specific information, try exploring the files in the sidebar.",
    "I don't have information about that. Type 'help' to see what I can assist with.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

export default function TerminalView({ width = 220 }: TerminalViewProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'system',
      content: 'Terminal AI v1.0.0 - Type "help" for available commands',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsProcessing(true);

    // Simulate processing delay for more realistic AI feel
    setTimeout(() => {
      const response = getAIResponse(input);

      if (response === "__CLEAR__") {
        setMessages([{
          type: 'system',
          content: 'Terminal cleared',
          timestamp: new Date()
        }]);
      } else {
        const aiMessage: Message = {
          type: 'ai',
          content: response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      }

      setIsProcessing(false);
      inputRef.current?.focus();
    }, 300 + Math.random() * 500); // Random delay between 300-800ms
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const handleClearTerminal = () => {
    setMessages([{
      type: 'system',
      content: 'Terminal cleared',
      timestamp: new Date()
    }]);
  };

  return (
    <div
      className="h-full bg-black/30 border-r border-primary/30 flex flex-col"
      style={{ width: `${width}px` }}
    >
      {/* Header */}
      <div className="px-3 py-2 border-b border-primary/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-primary/70" />
          <span className="text-xs uppercase tracking-wider text-text/50 font-mono">
            Terminal AI
          </span>
        </div>
        <button
          onClick={handleClearTerminal}
          className="text-text/40 hover:text-text/70 transition-colors"
          title="Clear terminal"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 font-mono text-xs">
        {messages.map((message, index) => (
          <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-200">
            {message.type === 'system' && (
              <div className="text-yellow-400/60 text-[10px]">
                [{formatTime(message.timestamp)}] {message.content}
              </div>
            )}
            {message.type === 'user' && (
              <div>
                <div className="text-green-400/70 text-[10px] mb-0.5">
                  [{formatTime(message.timestamp)}] user@portfolio:~$
                </div>
                <div className="text-text/90 pl-2">{message.content}</div>
              </div>
            )}
            {message.type === 'ai' && (
              <div>
                <div className="text-blue-400/70 text-[10px] mb-0.5 flex items-center gap-1">
                  <Terminal className="w-2.5 h-2.5" />
                  [{formatTime(message.timestamp)}] AI:
                </div>
                <div className="text-text/80 pl-2 whitespace-pre-line">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
        {isProcessing && (
          <div className="text-blue-400/50 text-[10px] animate-pulse">
            AI is thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-primary/20 p-3">
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex items-center gap-2">
            <span className="text-green-400/70 text-[10px] font-mono shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isProcessing}
              className="flex-1 bg-black/40 border border-primary/30 rounded px-2 py-1.5 text-xs font-mono text-text placeholder:text-text/40 focus:outline-none focus:border-primary/60 focus:bg-black/60 transition-all disabled:opacity-50"
              autoFocus
            />
            <button
              type="submit"
              disabled={!input.trim() || isProcessing}
              className="text-primary/70 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              title="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>

      {/* Footer Info */}
      <div className="px-3 py-2 border-t border-primary/20 text-[10px] text-text/40 font-mono">
        Type 'help' for commands
      </div>
    </div>
  );
}
