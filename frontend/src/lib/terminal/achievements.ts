// Achievement system for terminal

export interface Achievement {
  id: string;
  title: string;
  description: string;
  secret: boolean;
  unlocked: boolean;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 'first_command',
    title: 'Hello World',
    description: 'Execute your first command',
    secret: false,
    unlocked: false,
    icon: '👋',
  },
  {
    id: 'found_ntnu',
    title: 'NTNU Pride',
    description: 'Discovered the NTNU easter egg',
    secret: true,
    unlocked: false,
    icon: '🎓',
  },
  {
    id: 'found_tokyo',
    title: 'Tokyo Drift',
    description: 'Found the Tokyo reference',
    secret: true,
    unlocked: false,
    icon: '🗾',
  },
  {
    id: 'found_calisthenics',
    title: 'Gains Hunter',
    description: 'Discovered the workout easter egg',
    secret: true,
    unlocked: false,
    icon: '💪',
  },
  {
    id: 'found_norway',
    title: 'Viking Spirit',
    description: 'Found the Norway tribute',
    secret: true,
    unlocked: false,
    icon: '🇳🇴',
  },
  {
    id: 'konami_code',
    title: 'Old School Gamer',
    description: 'Entered the Konami code',
    secret: true,
    unlocked: false,
    icon: '🎮',
  },
  {
    id: 'matrix_mode',
    title: 'Neo',
    description: 'Entered the Matrix',
    secret: true,
    unlocked: false,
    icon: '🔴',
  },
  {
    id: 'coffee_lover',
    title: 'Caffeine Powered',
    description: 'You understand the importance of coffee',
    secret: true,
    unlocked: false,
    icon: '☕',
  },
  {
    id: 'react_master',
    title: 'React Enthusiast',
    description: 'Showed your React knowledge',
    secret: true,
    unlocked: false,
    icon: '⚛️',
  },
  {
    id: 'type_safety',
    title: 'TypeScript Advocate',
    description: 'Embraced type safety',
    secret: true,
    unlocked: false,
    icon: '📘',
  },
  {
    id: 'secret_hunter',
    title: 'Secret Hunter',
    description: 'Found all secret commands',
    secret: true,
    unlocked: false,
    icon: '🔍',
  },
  {
    id: 'completionist',
    title: 'Completionist',
    description: 'Unlocked all achievements',
    secret: false,
    unlocked: false,
    icon: '🏆',
  },
  {
    id: 'persistent',
    title: 'Persistent Explorer',
    description: 'Used the terminal 50 times',
    secret: false,
    unlocked: false,
    icon: '🔥',
  },
  {
    id: 'curious',
    title: 'Curious Mind',
    description: 'Tried 10 different commands',
    secret: false,
    unlocked: false,
    icon: '🧠',
  },
];

export class AchievementManager {
  private storageKey = 'terminal_achievements';
  private commandCountKey = 'terminal_command_count';
  private uniqueCommandsKey = 'terminal_unique_commands';

  getAchievements(): Achievement[] {
    if (typeof window === 'undefined') return achievements;

    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      const unlockedIds = JSON.parse(stored) as string[];
      return achievements.map(a => ({
        ...a,
        unlocked: unlockedIds.includes(a.id),
      }));
    }
    return achievements;
  }

  unlockAchievement(id: string): Achievement | null {
    if (typeof window === 'undefined') return null;

    const currentAchievements = this.getAchievements();
    const achievement = currentAchievements.find(a => a.id === id);

    if (!achievement || achievement.unlocked) return null;

    const unlockedIds = currentAchievements
      .filter(a => a.unlocked)
      .map(a => a.id);

    unlockedIds.push(id);
    localStorage.setItem(this.storageKey, JSON.stringify(unlockedIds));

    // Check for completionist achievement
    if (unlockedIds.length === achievements.length - 1) {
      this.unlockAchievement('completionist');
    }

    return { ...achievement, unlocked: true };
  }

  incrementCommandCount(): void {
    if (typeof window === 'undefined') return;

    const count = this.getCommandCount() + 1;
    localStorage.setItem(this.commandCountKey, count.toString());

    if (count === 1) {
      this.unlockAchievement('first_command');
    } else if (count >= 50) {
      this.unlockAchievement('persistent');
    }
  }

  addUniqueCommand(command: string): void {
    if (typeof window === 'undefined') return;

    const commands = this.getUniqueCommands();
    if (!commands.includes(command)) {
      commands.push(command);
      localStorage.setItem(this.uniqueCommandsKey, JSON.stringify(commands));

      if (commands.length >= 10) {
        this.unlockAchievement('curious');
      }
    }
  }

  private getCommandCount(): number {
    if (typeof window === 'undefined') return 0;
    const count = localStorage.getItem(this.commandCountKey);
    return count ? parseInt(count, 10) : 0;
  }

  private getUniqueCommands(): string[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(this.uniqueCommandsKey);
    return stored ? JSON.parse(stored) : [];
  }

  resetAchievements(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.commandCountKey);
    localStorage.removeItem(this.uniqueCommandsKey);
  }
}
