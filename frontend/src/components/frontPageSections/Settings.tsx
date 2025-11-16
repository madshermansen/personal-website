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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {Object.values(themes).map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleThemeChange(theme.name)}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200
                ${
                  currentTheme === theme.name
                    ? 'border-primary bg-primary/10'
                    : 'border-backgroundLight bg-backgroundLight/30 hover:border-primary/50 hover:bg-primary/5'
                }
              `}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 text-left">
                  <div className="font-semibold text-base mb-2">
                    {theme.displayName}
                  </div>

                  {/* Theme color preview */}
                  <div className="flex gap-1.5 flex-wrap">
                    {Object.entries(theme.colors)
                      .filter(([key]) => ['primary', 'secondary', 'accent', 'cyan', 'purple'].includes(key))
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="w-6 h-6 rounded border border-text/20"
                          style={{ backgroundColor: value }}
                          title={key}
                        />
                      ))}
                  </div>
                </div>

                {currentTheme === theme.name && (
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                )}
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
