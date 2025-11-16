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

// Comprehensive AI responses based on pattern matching
const getAIResponse = (input: string): string => {
  const lowerInput = input.toLowerCase().trim();

  // === GREETINGS & PLEASANTRIES ===
  if (/^(hi|hello|hey|greetings|yo|sup|howdy|hiya)/.test(lowerInput)) {
    const greetings = [
      "Hello! I'm your portfolio AI assistant. How can I help you today?",
      "Hey there! Ready to explore this portfolio? Ask me anything!",
      "Hi! I'm here to help you navigate and learn about this portfolio.",
      "Greetings! Type 'help' to see what I can do, or just start chatting!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (/^(good morning|good afternoon|good evening)/.test(lowerInput)) {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! Ready to start the day exploring this portfolio?";
    if (hour < 18) return "Good afternoon! How can I assist you today?";
    return "Good evening! What brings you here tonight?";
  }

  // === HELP & INFORMATION ===
  if (lowerInput === 'help' || lowerInput === '?' || lowerInput === 'commands') {
    return "Available commands:\n• help - Show this help message\n• about - Learn about this terminal\n• skills - View technical skills\n• projects - List projects\n• experience - View work history\n• education - Academic background\n• contact - Get contact info\n• date/time - Current date/time\n• joke - Tell a programming joke\n• quote - Inspirational quote\n• tips - Development tips\n\nOr ask me anything about the portfolio!";
  }

  if (lowerInput === 'about' || lowerInput === 'info') {
    return "This is an interactive AI terminal built with React and TypeScript! It uses pattern matching to understand your queries and provide helpful responses. I can answer questions about skills, projects, experience, and more. Try exploring the file tree or just chat with me!";
  }

  // === SKILLS & TECHNOLOGIES ===
  if (lowerInput.includes('skill')) {
    return "Technical Skills:\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Backend: Node.js, Python, REST APIs\n• Tools: Git, VS Code, Linux, Docker\n• Design: UI/UX, Responsive Design, Framer Motion\n• State Management: Zustand, Context API\n• CMS: Sanity, Headless CMS\n\nType 'projects' to see these skills in action!";
  }

  // Technology-specific questions
  if (lowerInput.includes('react')) {
    return "React is heavily used in this portfolio! This entire interface is built with React 18 and Next.js 14. Check out the code files in the explorer to see component patterns, hooks, and modern React practices.";
  }

  if (lowerInput.includes('typescript')) {
    return "TypeScript is the language of choice here! It provides type safety and better developer experience. All components use TypeScript interfaces and types for props and state management.";
  }

  if (lowerInput.includes('next.js') || lowerInput.includes('nextjs')) {
    return "This portfolio is built with Next.js 14! It uses the App Router, server components where appropriate, and benefits from Next.js's optimization features like automatic code splitting and image optimization.";
  }

  if (lowerInput.includes('tailwind')) {
    return "Tailwind CSS powers all the styling! The custom theme includes Monokai Pro colors, custom animations, and a VS Code-inspired aesthetic. Utility-first CSS makes development fast and maintainable.";
  }

  if (lowerInput.includes('zustand')) {
    return "Zustand handles state management for theme settings and preferences. It's lightweight, simple, and perfect for this portfolio's needs without the complexity of Redux.";
  }

  // === PROJECTS ===
  if (lowerInput.includes('project')) {
    return "Notable Projects:\n• Interactive Portfolio (This site!) - Next.js, React, TypeScript\n• VS Code-style Editor Interface - Custom components with drag-and-drop\n• AI Terminal Assistant - Pattern matching chatbot\n• Theme System - Dynamic theming with Zustand\n\nClick files in the explorer for detailed project information!";
  }

  // === EXPERIENCE & WORK ===
  if (lowerInput.includes('experience') || lowerInput.includes('work history') || lowerInput.includes('job')) {
    return "Professional Experience:\nClick on 'work.md' in the file explorer to view detailed work history, roles, and accomplishments. You can also ask about specific technologies or industries!";
  }

  if (lowerInput.includes('education') || lowerInput.includes('school') || lowerInput.includes('university') || lowerInput.includes('degree')) {
    return "Education Background:\nCheck out 'education.md' in the file explorer for academic credentials, certifications, and continuous learning journey. Education is just the beginning - real growth comes from building!";
  }

  // === HIRING & AVAILABILITY ===
  if (lowerInput.includes('hire') || lowerInput.includes('available') || lowerInput.includes('looking for work')) {
    return "Interested in working together? Click the contact icon (user icon at the bottom) to get in touch! I'm always open to discussing interesting opportunities and collaborations.";
  }

  if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
    return "The README.md file in the explorer shows a formatted resume/CV! Click on it to see a professional LaTeX-style PDF layout with all the details.";
  }

  // === CONTACT ===
  if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach out')) {
    return "Let's connect! Click the user icon at the bottom of the sidebar to view contact information including email, social links, and other ways to get in touch.";
  }

  if (lowerInput.includes('github')) {
    return "Check out the contact section for GitHub links! You'll find repositories, contributions, and code examples showcasing various projects and technologies.";
  }

  if (lowerInput.includes('linkedin')) {
    return "LinkedIn profile link is available in the contact section! Connect to see professional experience, recommendations, and network.";
  }

  // === DATE & TIME ===
  if (lowerInput === 'date' || lowerInput === 'today') {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  if (lowerInput === 'time' || lowerInput === 'clock') {
    return new Date().toLocaleTimeString('en-US');
  }

  if (lowerInput.includes('timezone') || lowerInput.includes('time zone')) {
    return `Current timezone offset: UTC${new Date().getTimezoneOffset() / -60 >= 0 ? '+' : ''}${new Date().getTimezoneOffset() / -60}\nLocal time: ${new Date().toLocaleTimeString('en-US')}`;
  }

  // === FUN COMMANDS ===
  if (lowerInput === 'joke') {
    const jokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "Why did the developer go broke? Because they used up all their cache!",
      "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
      "Why do Java developers wear glasses? Because they can't C#!",
      "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?'",
      "Why did the programmer quit their job? Because they didn't get arrays!",
      "What's a programmer's favorite hangout place? Foo Bar!",
      "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  if (lowerInput === 'quote' || lowerInput === 'inspire me') {
    const quotes = [
      "\"Code is like humor. When you have to explain it, it's bad.\" - Cory House",
      "\"First, solve the problem. Then, write the code.\" - John Johnson",
      "\"The best error message is the one that never shows up.\" - Thomas Fuchs",
      "\"Simplicity is the soul of efficiency.\" - Austin Freeman",
      "\"Make it work, make it right, make it fast.\" - Kent Beck",
      "\"Clean code always looks like it was written by someone who cares.\" - Robert C. Martin",
      "\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" - Martin Fowler",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  if (lowerInput === 'tips' || lowerInput === 'advice') {
    const tips = [
      "💡 Tip: Write tests first, code second. Your future self will thank you!",
      "💡 Tip: Code reviews aren't about finding faults - they're about sharing knowledge!",
      "💡 Tip: The best code is code you don't have to write. Use libraries wisely!",
      "💡 Tip: Comment why, not what. The code shows what, but only you know why!",
      "💡 Tip: Git commit early, commit often. Your work should tell a story!",
      "💡 Tip: Take breaks! Some of the best debugging happens away from the keyboard.",
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  }

  // === PERSONALITY & CONVERSATION ===
  if (lowerInput.includes('who are you') || lowerInput.includes('what are you')) {
    return "I'm a lightweight AI assistant built into this portfolio terminal using TypeScript and pattern matching! Think of me as a helpful guide to navigate this portfolio. I'm not a real AI like ChatGPT - just clever pattern recognition!";
  }

  if (lowerInput.includes('how are you') || lowerInput.includes('how do you do')) {
    return "I'm running smoothly! All systems operational. Thanks for asking! How can I help you explore this portfolio?";
  }

  if (lowerInput.includes('your name') || lowerInput === 'name') {
    return "I'm the Portfolio Terminal AI - you can call me PTerm! I'm here to help you explore and learn about this portfolio.";
  }

  if (lowerInput.includes('smart') || lowerInput.includes('intelligent')) {
    return "I'm as smart as my pattern matching allows! I use clever if-statements and regex to understand your queries. Not quite HAL 9000, but I try my best!";
  }

  if (lowerInput.includes('love you') || lowerInput.includes('like you')) {
    return "Aww, that's sweet! I appreciate you too! Now, how can I help you explore this portfolio? 😊";
  }

  // === PROGRAMMING & DEVELOPMENT ===
  if (lowerInput.includes('code') || lowerInput.includes('program') || lowerInput.includes('develop')) {
    return "Programming is what this portfolio is all about! Explore the code files in the file tree to see real implementations of React components, TypeScript patterns, and modern web development practices.";
  }

  if (lowerInput.includes('bug') || lowerInput.includes('debug')) {
    return "Debugging is 90% of programming! This portfolio uses TypeScript to catch bugs early, ESLint for code quality, and React's strict mode to identify issues during development.";
  }

  if (lowerInput.includes('best practice') || lowerInput.includes('clean code')) {
    return "Best practices used here:\n• TypeScript for type safety\n• Component composition over inheritance\n• Custom hooks for reusable logic\n• Semantic HTML and accessibility\n• Performance optimization with React.memo\n• Git for version control\n\nCheck the code files to see these in action!";
  }

  if (lowerInput.includes('frontend') || lowerInput.includes('front-end')) {
    return "Frontend development is the focus! This portfolio showcases modern frontend skills including React, Next.js, responsive design, animations, state management, and creating intuitive user interfaces.";
  }

  if (lowerInput.includes('backend') || lowerInput.includes('back-end')) {
    return "While this portfolio focuses on frontend, backend skills include Node.js, REST API development, database design, and server-side logic. The portfolio uses Sanity CMS as a headless backend!";
  }

  if (lowerInput.includes('design') || lowerInput.includes('ui') || lowerInput.includes('ux')) {
    return "Design is crucial! This portfolio features:\n• VS Code-inspired interface\n• Monokai Pro color scheme\n• Responsive layouts\n• Smooth animations with Framer Motion\n• Accessibility considerations\n• User-friendly navigation\n\nGood design is invisible!";
  }

  // === LEARNING & GROWTH ===
  if (lowerInput.includes('learn') || lowerInput.includes('studying')) {
    return "Continuous learning is key in tech! This portfolio demonstrates skills learned through practice, documentation, tutorials, and real-world projects. Always be building!";
  }

  if (lowerInput.includes('beginner') || lowerInput.includes('junior')) {
    return "Everyone starts somewhere! The best way to learn is by building projects like this portfolio. Start small, stay curious, and don't be afraid to make mistakes.";
  }

  // === TERMINAL SPECIFIC ===
  if (lowerInput === 'clear' || lowerInput === 'cls') {
    return "Clear command received! (Note: Terminal clear will be implemented soon. For now, just keep scrolling!)";
  }

  if (lowerInput.includes('how does this work') || lowerInput.includes('how did you build')) {
    return "This terminal uses React hooks for state management, pattern matching for understanding input, and simple if-statements to provide responses! Check out Terminal.tsx in the codebase to see the implementation.";
  }

  // === GRATITUDE ===
  if (lowerInput.includes('thank')) {
    return "You're very welcome! Happy to help. Feel free to explore more or ask anything else!";
  }

  if (lowerInput.includes('awesome') || lowerInput.includes('cool') || lowerInput.includes('nice') || lowerInput.includes('great')) {
    return "Thanks! Glad you like it! This portfolio was built with care and attention to detail. Explore the code to see how it all works!";
  }

  // === GOODBYES ===
  if (/^(bye|goodbye|see you|exit|quit|later|cya)/.test(lowerInput)) {
    return "Goodbye! Thanks for chatting. The terminal stays open if you need me. Come back anytime!";
  }

  // === QUESTIONS ===
  if (lowerInput.includes('why') && lowerInput.includes('?')) {
    return "Great question! The 'why' is often more important than the 'how'. This portfolio exists to showcase skills, creativity, and attention to detail. What specifically would you like to know more about?";
  }

  if (lowerInput.includes('when') && lowerInput.includes('?')) {
    return "Time is relative in development! This portfolio is continuously evolving. Check the git commits for a timeline of features and improvements.";
  }

  if (lowerInput.includes('where') && lowerInput.includes('?')) {
    return "You're here! In the portfolio terminal. Use the file explorer on the left to navigate, or ask me about specific topics like skills, projects, or experience.";
  }

  if (lowerInput.includes('what') && lowerInput.includes('stack')) {
    return "Tech Stack:\n• Frontend: React 18, Next.js 14, TypeScript\n• Styling: Tailwind CSS 3.4\n• Animations: Framer Motion 11.2\n• State: Zustand 4.5\n• CMS: Sanity 3.60\n• Deploy: Vercel\n\nModern, fast, and maintainable!";
  }

  // === EASTER EGGS ===
  if (lowerInput === 'konami code' || lowerInput === 'up up down down left right left right b a') {
    return "🎮 You found it! The Konami Code! You get... absolutely nothing except this message. But hey, you tried!";
  }

  if (lowerInput.includes('42')) {
    return "42 - The Answer to the Ultimate Question of Life, the Universe, and Everything! Now if only we knew the question...";
  }

  if (lowerInput === 'sudo make me a sandwich') {
    return "Okay. *makes you a sandwich* 🥪 (You used sudo, so I have no choice!)";
  }

  if (lowerInput.includes('matrix')) {
    return "Wake up, Neo... The Matrix has you... Follow the white rabbit. 🐰";
  }

  // === GENERIC PATTERNS ===
  if (lowerInput.includes('?')) {
    return "That's an interesting question! Try typing 'help' to see available commands, or ask about skills, projects, experience, or technologies. I'm here to help!";
  }

  if (lowerInput.split(' ').length > 15) {
    return "I appreciate the detailed message! While I'm pattern-based, I love the enthusiasm. Try asking specific questions about skills, projects, experience, or just type 'help' for commands!";
  }

  if (lowerInput.length < 3) {
    return "Hmm, that's pretty short! Try asking a question or type 'help' to see what I can do.";
  }

  // === DEFAULT RESPONSES ===
  const defaultResponses = [
    "Interesting! Try asking about 'skills', 'projects', 'experience', or type 'help' for all commands.",
    "I'm not quite sure about that, but I can help you explore this portfolio! Try 'help' for options.",
    "Hmm, I don't have a specific response for that. Ask me about technologies, projects, or type 'joke' for fun!",
    "That's a new one! I'm a simple AI, but I know about skills, projects, and more. Type 'help'!",
    "Good question! While I might not understand everything, I can definitely help with portfolio info. Try 'skills' or 'projects'!",
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
