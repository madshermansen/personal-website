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
    <div className="h-full p-6 overflow-y-auto">
      <div className="max-w-6xl">
        {/* Header section */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-text mb-2">Settings</h1>
          <p className="text-text/60 text-sm font-mono">Preferences · Color Theme</p>
        </div>

        {/* Theme section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-backgroundLight">
            <h2 className="text-base font-semibold text-text">Color Theme</h2>
            <span className="text-xs text-text/50 font-mono">
              ({Object.values(themes).length} available)
            </span>
          </div>

          <p className="text-text/60 text-sm mb-6 font-mono">
            Select your preferred color theme. Changes are saved automatically.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.values(themes).map((theme) => (
              <button
                key={theme.name}
                onClick={() => handleThemeChange(theme.name)}
                className={`
                  group relative text-left transition-all duration-150
                  ${
                    currentTheme === theme.name
                      ? 'scale-[1.02]'
                      : 'hover:scale-[1.01]'
                  }
                `}
              >
                {/* Theme card */}
                <div
                  className={`
                    relative overflow-hidden rounded border
                    ${
                      currentTheme === theme.name
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-backgroundLight hover:border-text/30'
                    }
                  `}
                  style={{
                    backgroundColor: theme.colors.backgroundDark,
                  }}
                >
                  {/* Selection indicator */}
                  {currentTheme === theme.name && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                  )}

                  {/* Header */}
                  <div
                    className="px-4 py-3 flex items-center justify-between border-b"
                    style={{
                      backgroundColor: theme.colors.backgroundDark,
                      borderColor: theme.colors.backgroundLight,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: theme.colors.text }}
                      >
                        {theme.displayName}
                      </span>
                      {currentTheme === theme.name && (
                        <div className="flex items-center gap-1">
                          <Check
                            className="w-3.5 h-3.5"
                            style={{ color: theme.colors.primary }}
                          />
                          <span
                            className="text-xs font-mono"
                            style={{ color: theme.colors.primary }}
                          >
                            Active
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Code preview */}
                  <div
                    className="px-4 py-4 font-mono text-xs leading-relaxed"
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.text,
                    }}
                  >
                    {/* Line 1 */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>1</span>
                      <div>
                        <span style={{ color: theme.colors.primary }}>interface</span>
                        {' '}
                        <span style={{ color: theme.colors.purple }}>Theme</span>
                        {' '}
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>{'{'}</span>
                      </div>
                    </div>

                    {/* Line 2 */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>2</span>
                      <div className="pl-4">
                        <span style={{ color: theme.colors.cyan }}>name</span>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>: </span>
                        <span style={{ color: theme.colors.primary }}>string</span>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>;</span>
                      </div>
                    </div>

                    {/* Line 3 */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>3</span>
                      <div className="pl-4">
                        <span style={{ color: theme.colors.cyan }}>colors</span>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>: </span>
                        <span style={{ color: theme.colors.purple }}>ColorScheme</span>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>;</span>
                      </div>
                    </div>

                    {/* Line 4 */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>4</span>
                      <div>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>{'}'}</span>
                      </div>
                    </div>

                    {/* Empty line */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>5</span>
                      <div></div>
                    </div>

                    {/* Line 6 - Comment */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>6</span>
                      <div>
                        <span style={{ color: theme.colors.comment }}>
                          {'// Apply theme'}
                        </span>
                      </div>
                    </div>

                    {/* Line 7 */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>7</span>
                      <div>
                        <span style={{ color: theme.colors.primary }}>const</span>
                        {' '}
                        <span style={{ color: theme.colors.secondary }}>applyTheme</span>
                        {' '}
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>=</span>
                        {' '}
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>(</span>
                        <span style={{ color: theme.colors.cyan }}>theme</span>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>:</span>
                        {' '}
                        <span style={{ color: theme.colors.purple }}>Theme</span>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>) </span>
                        <span style={{ color: theme.colors.primary }}>=&gt;</span>
                        {' '}
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>{'{'}</span>
                      </div>
                    </div>

                    {/* Line 8 */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>8</span>
                      <div className="pl-4">
                        <span style={{ color: theme.colors.primary }}>return</span>
                        {' '}
                        <span style={{ color: theme.colors.accent }}>&quot;{theme.displayName}&quot;</span>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>;</span>
                      </div>
                    </div>

                    {/* Line 9 */}
                    <div className="flex gap-3">
                      <span style={{ color: theme.colors.comment, opacity: 0.5 }}>9</span>
                      <div>
                        <span style={{ color: theme.colors.text, opacity: 0.7 }}>{'}'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Color palette footer */}
                  <div
                    className="px-4 py-2 border-t flex items-center gap-1.5"
                    style={{
                      backgroundColor: theme.colors.backgroundDark,
                      borderColor: theme.colors.backgroundLight,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-sm border border-black/20"
                      style={{ backgroundColor: theme.colors.primary }}
                      title="Primary"
                    />
                    <div
                      className="w-3 h-3 rounded-sm border border-black/20"
                      style={{ backgroundColor: theme.colors.secondary }}
                      title="Secondary"
                    />
                    <div
                      className="w-3 h-3 rounded-sm border border-black/20"
                      style={{ backgroundColor: theme.colors.accent }}
                      title="Accent"
                    />
                    <div
                      className="w-3 h-3 rounded-sm border border-black/20"
                      style={{ backgroundColor: theme.colors.cyan }}
                      title="Cyan"
                    />
                    <div
                      className="w-3 h-3 rounded-sm border border-black/20"
                      style={{ backgroundColor: theme.colors.purple }}
                      title="Purple"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Info section */}
        <div className="mt-8 p-4 bg-backgroundLight/30 border border-backgroundLight/50 rounded text-xs text-text/60 font-mono">
          <span className="text-text/80">💡 Tip:</span> Your theme preference is automatically saved
          to localStorage and will persist across browser sessions.
        </div>
      </div>
    </div>
  );
}
