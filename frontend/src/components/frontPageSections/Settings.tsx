'use client';

import { useThemeStore, themes, ThemeName } from '@/lib/state/store';
import { Check } from 'lucide-react';

export default function Settings() {
  const { currentTheme, setTheme } = useThemeStore();

  const handleThemeChange = (themeName: ThemeName) => {
    setTheme(themeName);

    // Apply theme colors to CSS variables
    const theme = themes[themeName];
    const root = document.documentElement;

    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  };

  return (
    <div className="flex flex-col gap-6 font-mono text-sm">
      <h2 className="text-2xl font-bold monokai-function">
        ## Settings
      </h2>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold monokai-property">
          Theme Selection
        </h3>

        <p className="text-text/70 text-xs">
          Choose your preferred color theme. Your selection will be saved locally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {Object.values(themes).map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleThemeChange(theme.name)}
              className={`
                relative rounded-lg border-2 transition-all duration-200 overflow-hidden
                ${
                  currentTheme === theme.name
                    ? 'border-primary ring-2 ring-primary/30'
                    : 'border-backgroundLight hover:border-primary/50'
                }
              `}
            >
              {/* Theme Preview Window */}
              <div
                className="p-4 text-left text-xs font-mono leading-relaxed"
                style={{
                  backgroundColor: theme.colors.background,
                  color: theme.colors.text
                }}
              >
                {/* Header with theme name and checkmark */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-current/20">
                  <div className="font-semibold text-sm" style={{ color: theme.colors.text }}>
                    {theme.displayName}
                  </div>
                  {currentTheme === theme.name && (
                    <Check className="w-4 h-4" style={{ color: theme.colors.primary }} />
                  )}
                </div>

                {/* Code Preview */}
                <div className="space-y-1">
                  <div>
                    <span style={{ color: theme.colors.primary }}>const</span>
                    {' '}
                    <span style={{ color: theme.colors.secondary }}>greeting</span>
                    {' '}
                    <span style={{ color: theme.colors.text }}>= </span>
                    <span style={{ color: theme.colors.accent }}>&quot;Hello&quot;</span>
                    <span style={{ color: theme.colors.text }}>;</span>
                  </div>
                  <div>
                    <span style={{ color: theme.colors.primary }}>function</span>
                    {' '}
                    <span style={{ color: theme.colors.secondary }}>example</span>
                    <span style={{ color: theme.colors.text }}>(</span>
                    <span style={{ color: theme.colors.cyan }}>value</span>
                    <span style={{ color: theme.colors.text }}>: </span>
                    <span style={{ color: theme.colors.purple }}>string</span>
                    <span style={{ color: theme.colors.text }}>) {'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: theme.colors.comment }}>{'// Comment'}</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: theme.colors.primary }}>return</span>
                    {' '}
                    <span style={{ color: theme.colors.cyan }}>value</span>
                    <span style={{ color: theme.colors.text }}>;</span>
                  </div>
                  <div>
                    <span style={{ color: theme.colors.text }}>{'}'}</span>
                  </div>
                </div>

                {/* Background preview bar */}
                <div className="mt-3 pt-3 border-t border-current/20 flex gap-2">
                  <div
                    className="h-4 flex-1 rounded"
                    style={{ backgroundColor: theme.colors.backgroundDark }}
                    title="Dark background"
                  />
                  <div
                    className="h-4 flex-1 rounded"
                    style={{ backgroundColor: theme.colors.background }}
                    title="Main background"
                  />
                  <div
                    className="h-4 flex-1 rounded"
                    style={{ backgroundColor: theme.colors.backgroundLight }}
                    title="Light background"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 p-4 bg-backgroundLight/50 border border-backgroundLight rounded">
        <p className="text-text/60 text-xs">
          <span className="monokai-keyword">Note:</span> Theme preferences are stored in your browser&apos;s localStorage
          and will persist across sessions.
        </p>
      </div>
    </div>
  );
}
