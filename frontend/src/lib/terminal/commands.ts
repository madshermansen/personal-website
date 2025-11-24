// Terminal command system

import { asciiArt } from './asciiArt';
import { AchievementManager } from './achievements';

const achievementManager = new AchievementManager();

export interface CommandResponse {
  type: 'normal' | 'error' | 'system' | 'special';
  content: string;
  clear?: boolean;
}

export interface Command {
  name: string;
  description: string;
  usage?: string;
  aliases?: string[];
  hidden?: boolean;
  execute: (args: string[]) => CommandResponse;
}

// Define all available commands
export const commands: Command[] = [
  {
    name: 'help',
    description: 'Show available commands',
    aliases: ['?', 'commands'],
    execute: () => {
      const visibleCommands = commands.filter(cmd => !cmd.hidden);
      let helpText = '📚 AVAILABLE COMMANDS:\n\n';

      visibleCommands.forEach(cmd => {
        const aliases = cmd.aliases ? ` (${cmd.aliases.join(', ')})` : '';
        helpText += `  ${cmd.name}${aliases}\n`;
        helpText += `    ${cmd.description}\n`;
        if (cmd.usage) {
          helpText += `    Usage: ${cmd.usage}\n`;
        }
        helpText += '\n';
      });

      helpText += '\n💡 Tip: Try typing random things to discover easter eggs!\n';
      helpText += '🎮 Type "secrets" to get hints about hidden commands';

      return { type: 'normal', content: helpText };
    },
  },
  {
    name: 'about',
    description: 'Learn about Mads',
    execute: () => ({
      type: 'normal',
      content: '👨‍💻 MADS HERMANSEN\n\n' +
        'Full Stack Developer passionate about creating meaningful software.\n\n' +
        '🎓 Education:\n' +
        '  • MSc in Software Systems at NTNU (In Progress)\n' +
        '  • Exchange at Tokyo University of Marine Science and Technology\n\n' +
        '💼 Currently:\n' +
        '  • Teaching Assistant at NTNU\n' +
        '  • Building cool projects with React, TypeScript, and Next.js\n\n' +
        '🌟 Interests:\n' +
        '  • Web Development\n' +
        '  • Calisthenics\n' +
        '  • Discovering new technologies\n' +
        '  • Collaborative learning\n\n' +
        'Use the file explorer to see more details!',
    }),
  },
  {
    name: 'skills',
    description: 'View technical skills',
    aliases: ['tech', 'stack'],
    execute: () => ({
      type: 'normal',
      content: '🛠️  TECHNICAL SKILLS\n\n' +
        '⚡ Frontend:\n' +
        '  • React & React Native\n' +
        '  • Next.js\n' +
        '  • TypeScript\n' +
        '  • Tailwind CSS\n\n' +
        '⚙️  Backend:\n' +
        '  • Node.js\n' +
        '  • Express\n' +
        '  • MySQL\n\n' +
        '📱 Mobile:\n' +
        '  • React Native\n' +
        '  • Expo\n\n' +
        '🚀 Tools & More:\n' +
        '  • Git & GitHub\n' +
        '  • Vercel\n' +
        '  • Sanity CMS\n' +
        '  • Framer Motion',
    }),
  },
  {
    name: 'projects',
    description: 'List featured projects',
    execute: () => ({
      type: 'normal',
      content: '🚀 FEATURED PROJECTS\n\n' +
        'Check out the Projects section in the sidebar to see:\n' +
        '  • Web applications\n' +
        '  • Mobile apps\n' +
        '  • Full-stack solutions\n' +
        '  • Creative experiments\n\n' +
        'Each project showcases different skills and technologies!\n' +
        'Click the Projects icon (📁) in the sidebar to explore.',
    }),
  },
  {
    name: 'contact',
    description: 'Get contact information',
    aliases: ['email', 'reach'],
    execute: () => ({
      type: 'normal',
      content: '📬 GET IN TOUCH\n\n' +
        '📧 Email: mdj.hermansen@gmail.com\n' +
        '🐙 GitHub: @madshermansen\n' +
        '💼 LinkedIn: Connect via the contact section\n\n' +
        'Open contact.yml from the file explorer for more ways to connect!',
    }),
  },
  {
    name: 'achievements',
    description: 'View your unlocked achievements',
    aliases: ['trophies', 'badges'],
    execute: () => {
      const allAchievements = achievementManager.getAchievements();
      const unlocked = allAchievements.filter(a => a.unlocked);
      const total = allAchievements.length;

      let response = `🏆 ACHIEVEMENTS (${unlocked.length}/${total})\n\n`;

      if (unlocked.length === 0) {
        response += 'No achievements unlocked yet!\n';
        response += 'Start exploring to unlock achievements! 🎮';
      } else {
        unlocked.forEach(achievement => {
          response += `${achievement.icon} ${achievement.title}\n`;
          response += `   ${achievement.description}\n\n`;
        });

        if (unlocked.length < total) {
          const remaining = total - unlocked.length;
          response += `\n🔒 ${remaining} more achievement${remaining === 1 ? '' : 's'} to unlock!`;
        } else {
          response += '\n🎉 CONGRATULATIONS! You\'ve unlocked everything!';
        }
      }

      return { type: 'normal', content: response };
    },
  },
  {
    name: 'clear',
    description: 'Clear the terminal',
    aliases: ['cls'],
    execute: () => ({
      type: 'system',
      content: 'Terminal cleared',
      clear: true,
    }),
  },
  {
    name: 'theme',
    description: 'Info about changing themes',
    execute: () => ({
      type: 'normal',
      content: '🎨 THEME SYSTEM\n\n' +
        'This portfolio supports multiple color themes!\n\n' +
        'To change themes:\n' +
        '  1. Look for the palette icon (🎨) in the sidebar\n' +
        '  2. Or check the settings/theme section\n\n' +
        'Available themes include:\n' +
        '  • Tokyo Night\n' +
        '  • Synthwave\n' +
        '  • Cyberpunk\n' +
        '  • Gruvbox\n' +
        '  • And more!\n\n' +
        'Find your favorite vibe! ✨',
    }),
  },
  {
    name: 'time',
    description: 'Show current time',
    aliases: ['date'],
    execute: () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      return {
        type: 'normal',
        content: `🕐 ${timeString}\n📅 ${dateString}`,
      };
    },
  },
  {
    name: 'echo',
    description: 'Echo back your message',
    usage: 'echo <message>',
    execute: (args) => ({
      type: 'normal',
      content: args.length > 0 ? args.join(' ') : '',
    }),
  },
  {
    name: 'quote',
    description: 'Get an inspiring developer quote',
    aliases: ['inspire', 'wisdom'],
    execute: () => {
      const quotes = [
        '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
        '"Make it work, make it right, make it fast." - Kent Beck',
        '"The best error message is the one that never shows up." - Thomas Fuchs',
        '"Talk is cheap. Show me the code." - Linus Torvalds',
        '"Simplicity is the soul of efficiency." - Austin Freeman',
        '"Before software can be reusable it first has to be usable." - Ralph Johnson',
      ];

      return {
        type: 'normal',
        content: '💭 ' + quotes[Math.floor(Math.random() * quotes.length)],
      };
    },
  },
  {
    name: 'version',
    description: 'Show terminal version',
    aliases: ['v'],
    execute: () => ({
      type: 'normal',
      content: '⚡ Terminal AI v2.0.0 Enhanced Edition\n' +
        'Built with React, TypeScript, and ❤️\n' +
        'Features: Commands, Easter Eggs, Achievements, and more!\n\n' +
        'Type "help" to see what you can do!',
    }),
  },
  {
    name: 'reset',
    description: 'Reset all achievements (careful!)',
    hidden: true,
    execute: () => {
      achievementManager.resetAchievements();
      return {
        type: 'system',
        content: '🔄 All achievements have been reset.\n' +
          'Start your journey again from scratch! 🎮',
      };
    },
  },
];

// Find and execute a command
export const executeCommand = (input: string): CommandResponse => {
  const parts = input.trim().split(/\s+/);
  const commandName = parts[0].toLowerCase();
  const args = parts.slice(1);

  const command = commands.find(
    cmd => cmd.name === commandName || cmd.aliases?.includes(commandName)
  );

  if (command) {
    return command.execute(args);
  }

  return {
    type: 'error',
    content: `Command not found: ${commandName}\nType 'help' to see available commands.`,
  };
};

// Get command suggestions for autocomplete
export const getCommandSuggestions = (partial: string): string[] => {
  if (!partial) return [];

  const lower = partial.toLowerCase();
  const suggestions: string[] = [];

  commands.forEach(cmd => {
    if (!cmd.hidden && cmd.name.startsWith(lower)) {
      suggestions.push(cmd.name);
    }
    cmd.aliases?.forEach(alias => {
      if (alias.startsWith(lower)) {
        suggestions.push(alias);
      }
    });
  });

  return [...new Set(suggestions)].sort();
};
