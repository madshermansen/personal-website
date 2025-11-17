"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, X, Trophy, Sparkles } from "lucide-react";
import { executeCommand, getCommandSuggestions } from "@/lib/terminal/commands";
import { checkEasterEggs } from "@/lib/terminal/easterEggs";
import { AchievementManager } from "@/lib/terminal/achievements";
import { asciiArt } from "@/lib/terminal/asciiArt";
import { useTerminalAI } from "@/lib/terminal/useTerminalAI";
import TerminalSettings from "./TerminalSettings";

interface TerminalViewProps {
  width?: number;
}

interface Message {
  type: 'user' | 'ai' | 'system' | 'achievement';
  content: string;
  timestamp: Date;
}

const achievementManager = new AchievementManager();

export default function TerminalView({ width = 220 }: TerminalViewProps) {
  const { settings, updateSettings, isLocalMode } = useTerminalAI();

  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'system',
      content: asciiArt.welcome,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showAchievements, setShowAchievements] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update suggestions as user types
  useEffect(() => {
    if (input && !input.includes(' ')) {
      const sug = getCommandSuggestions(input);
      setSuggestions(sug);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const userInput = input.trim();
    const userMessage: Message = {
      type: 'user',
      content: userInput,
      timestamp: new Date()
    };

    // Add to history
    setCommandHistory(prev => [...prev, userInput]);
    setHistoryIndex(-1);

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setSuggestions([]);
    setIsProcessing(true);

    // Track for achievements
    achievementManager.incrementCommandCount();
    achievementManager.addUniqueCommand(userInput.split(' ')[0].toLowerCase());

    // Simulate processing delay
    setTimeout(() => {
      // First check for easter eggs
      const easterEgg = checkEasterEggs(userInput);

      if (easterEgg) {
        const aiMessage: Message = {
          type: 'ai',
          content: easterEgg.message,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);

        // Show achievement notification if unlocked
        if (easterEgg.achievement) {
          setTimeout(() => {
            const achievement = achievementManager.getAchievements()
              .find(a => a.id === easterEgg.achievement && a.unlocked);

            if (achievement) {
              const achievementMsg: Message = {
                type: 'achievement',
                content: `${achievement.icon} Achievement Unlocked: ${achievement.title}\n${achievement.description}`,
                timestamp: new Date()
              };
              setMessages(prev => [...prev, achievementMsg]);
            }
          }, 500);
        }
      } else {
        // Execute command
        const result = executeCommand(userInput);

        if (result.clear) {
          setMessages([{
            type: 'system',
            content: result.content,
            timestamp: new Date()
          }]);
        } else {
          const aiMessage: Message = {
            type: result.type === 'error' ? 'system' : 'ai',
            content: result.content,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, aiMessage]);
        }
      }

      setIsProcessing(false);
      inputRef.current?.focus();
    }, 300 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setSuggestions([]);
    }
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
      content: 'Terminal cleared - Type "help" to get started',
      timestamp: new Date()
    }]);
  };

  const allAchievements = achievementManager.getAchievements();
  const unlockedCount = allAchievements.filter(a => a.unlocked).length;

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
            Terminal AI v2.0
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TerminalSettings
            settings={settings}
            onSettingsChange={updateSettings}
          />
          <button
            onClick={() => setShowAchievements(!showAchievements)}
            className="text-text/40 hover:text-primary/70 transition-colors relative"
            title={`Achievements (${unlockedCount}/${allAchievements.length})`}
          >
            <Trophy className="w-3.5 h-3.5" />
            {unlockedCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[8px] bg-primary/80 text-black rounded-full w-3 h-3 flex items-center justify-center font-bold">
                {unlockedCount}
              </span>
            )}
          </button>
          <button
            onClick={handleClearTerminal}
            className="text-text/40 hover:text-text/70 transition-colors"
            title="Clear terminal"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Achievements Panel */}
      {showAchievements && (
        <div className="border-b border-primary/20 bg-black/40 p-3 max-h-48 overflow-y-auto">
          <div className="text-xs text-primary/70 mb-2 font-mono flex items-center gap-1">
            <Trophy className="w-3 h-3" />
            <span>ACHIEVEMENTS ({unlockedCount}/{allAchievements.length})</span>
          </div>
          <div className="space-y-2">
            {allAchievements.filter(a => a.unlocked).map(achievement => (
              <div
                key={achievement.id}
                className="text-[10px] bg-primary/10 border border-primary/30 rounded p-2"
              >
                <div className="flex items-center gap-1 mb-0.5">
                  <span>{achievement.icon}</span>
                  <span className="text-primary font-mono">{achievement.title}</span>
                </div>
                <div className="text-text/60">{achievement.description}</div>
              </div>
            ))}
            {unlockedCount === 0 && (
              <div className="text-[10px] text-text/40 italic">
                No achievements yet. Start exploring! 🎮
              </div>
            )}
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 font-mono text-xs">
        {messages.map((message, index) => (
          <div key={index} className="animate-in fade-in slide-in-from-bottom-2 duration-200">
            {message.type === 'system' && (
              <div className="text-yellow-400/60 text-[10px] whitespace-pre-line">
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
            {message.type === 'achievement' && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2 animate-in zoom-in duration-300">
                <div className="text-yellow-400 text-[10px] mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span className="font-bold">ACHIEVEMENT UNLOCKED!</span>
                </div>
                <div className="text-yellow-300/90 text-[10px] whitespace-pre-line">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
        {isProcessing && (
          <div className="text-blue-400/50 text-[10px] animate-pulse flex items-center gap-1">
            <Terminal className="w-2.5 h-2.5 animate-pulse" />
            <span>Processing...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="px-3 py-1 border-t border-primary/20 bg-black/40">
          <div className="text-[10px] text-text/40 font-mono">
            Suggestions: {suggestions.join(', ')}
            <span className="ml-2 text-text/30">(Press Tab)</span>
          </div>
        </div>
      )}

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
              onKeyDown={handleKeyDown}
              placeholder="Type 'help' or explore..."
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
        <div className="flex items-center justify-between">
          <span>Type &apos;help&apos; or &apos;secrets&apos;</span>
          <span className="flex items-center gap-1">
            <Trophy className="w-2.5 h-2.5" />
            {unlockedCount}/{allAchievements.length}
          </span>
        </div>
      </div>
    </div>
  );
}
