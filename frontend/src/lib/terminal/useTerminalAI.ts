import { useState, useCallback } from 'react';

export type AIMode = 'local' | 'openai' | 'groq' | 'anthropic';

export interface AISettings {
  mode: AIMode;
  model: string;
}

const defaultSettings: AISettings = {
  mode: 'local',
  model: 'gpt-3.5-turbo',
};

export function useTerminalAI() {
  const [settings, setSettings] = useState<AISettings>(() => {
    if (typeof window === 'undefined') return defaultSettings;

    const stored = localStorage.getItem('terminal_ai_settings');
    return stored ? JSON.parse(stored) : defaultSettings;
  });

  const updateSettings = useCallback((newSettings: Partial<AISettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      if (typeof window !== 'undefined') {
        localStorage.setItem('terminal_ai_settings', JSON.stringify(updated));
      }
      return updated;
    });
  }, []);

  const sendMessage = useCallback(
    async (message: string) => {
      if (settings.mode === 'local') {
        // Local mode is handled by the component directly
        return null;
      }

      try {
        // Call the API endpoint for external AI
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: message }],
            model: settings.model,
          }),
        });

        if (!response.ok) {
          throw new Error('API request failed');
        }

        const data = await response.json();

        // Check if we should fall back to local
        if (data.useLocal) {
          return null; // Signal to use local mode
        }

        return data.message || null;
      } catch (error) {
        console.error('Failed to send message:', error);
        return null; // Fall back to local
      }
    },
    [settings.mode, settings.model]
  );

  return {
    settings,
    updateSettings,
    sendMessage,
    isLocalMode: settings.mode === 'local',
  };
}

export const availableModels: Record<AIMode, string[]> = {
  local: ['Local AI'],
  openai: ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-turbo'],
  groq: ['mixtral-8x7b', 'llama2-70b'],
  anthropic: ['claude-3-haiku', 'claude-3-sonnet', 'claude-3-opus'],
};

export const modeDescriptions: Record<AIMode, string> = {
  local: 'Built-in AI with easter eggs and achievements (Free)',
  openai: 'OpenAI GPT models (Requires API key)',
  groq: 'Groq fast inference (Requires API key)',
  anthropic: 'Anthropic Claude models (Requires API key)',
};
