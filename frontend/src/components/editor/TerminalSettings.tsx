"use client";

import { Settings, Check } from "lucide-react";
import { useState } from "react";
import {
  AIMode,
  AISettings,
  availableModels,
  modeDescriptions,
} from "@/lib/terminal/useTerminalAI";

interface TerminalSettingsProps {
  settings: AISettings;
  onSettingsChange: (settings: Partial<AISettings>) => void;
}

export default function TerminalSettings({
  settings,
  onSettingsChange,
}: TerminalSettingsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const modes: AIMode[] = ["local", "openai", "groq", "anthropic"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text/40 hover:text-primary/70 transition-colors"
        title="AI Settings"
      >
        <Settings className="w-3.5 h-3.5" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Settings Panel */}
          <div className="absolute right-0 top-8 z-50 w-64 bg-black/95 border border-primary/30 rounded-lg shadow-2xl shadow-primary/20 p-3">
            <div className="text-xs font-mono text-primary/70 mb-3 flex items-center gap-2">
              <Settings className="w-3 h-3" />
              <span>AI SETTINGS</span>
            </div>

            {/* AI Mode Selection */}
            <div className="space-y-2 mb-4">
              <div className="text-[10px] text-text/50 mb-1">AI Mode:</div>
              {modes.map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    onSettingsChange({ mode });
                    if (mode !== "local") {
                      const models = availableModels[mode];
                      if (models.length > 0) {
                        onSettingsChange({ mode, model: models[0] });
                      }
                    }
                  }}
                  className={`w-full text-left px-2 py-1.5 rounded text-[10px] font-mono transition-colors ${
                    settings.mode === mode
                      ? "bg-primary/20 border border-primary/40 text-primary"
                      : "bg-black/40 border border-primary/20 text-text/70 hover:bg-primary/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="uppercase">{mode}</span>
                    {settings.mode === mode && (
                      <Check className="w-3 h-3 text-primary" />
                    )}
                  </div>
                  <div className="text-[9px] text-text/50 mt-0.5">
                    {modeDescriptions[mode]}
                  </div>
                </button>
              ))}
            </div>

            {/* Model Selection (for non-local modes) */}
            {settings.mode !== "local" && (
              <div className="space-y-2 border-t border-primary/20 pt-3">
                <div className="text-[10px] text-text/50 mb-1">Model:</div>
                {availableModels[settings.mode].map((model) => (
                  <button
                    key={model}
                    onClick={() => onSettingsChange({ model })}
                    className={`w-full text-left px-2 py-1 rounded text-[10px] font-mono transition-colors ${
                      settings.model === model
                        ? "bg-primary/20 border border-primary/40 text-primary"
                        : "bg-black/40 border border-primary/20 text-text/70 hover:bg-primary/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{model}</span>
                      {settings.model === model && (
                        <Check className="w-3 h-3 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Info for external modes */}
            {settings.mode !== "local" && (
              <div className="mt-3 pt-3 border-t border-primary/20 text-[9px] text-yellow-400/60">
                ⚠️ Requires API key in environment variables
              </div>
            )}

            {/* Local mode benefits */}
            {settings.mode === "local" && (
              <div className="mt-3 pt-3 border-t border-primary/20 text-[9px] text-green-400/60">
                ✨ Free, fast, with easter eggs & achievements!
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
