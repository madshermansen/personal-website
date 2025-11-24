// Easter eggs and hidden commands

import { asciiArt } from './asciiArt';
import { AchievementManager } from './achievements';

const achievementManager = new AchievementManager();

export interface EasterEggResponse {
  message: string;
  achievement?: string;
  special?: boolean;
}

// Check for easter eggs in user input
export const checkEasterEggs = (input: string): EasterEggResponse | null => {
  const lower = input.toLowerCase().trim();

  // NTNU references
  if (lower.includes('ntnu') || lower.includes('trondheim') || lower.includes('norwegian university')) {
    const achievement = achievementManager.unlockAchievement('found_ntnu');
    return {
      message: asciiArt.ntnu + '\n\n' +
        'Ah, NTNU! Where the code is as cold as the Norwegian winter, but the learning is warm! ❄️\n' +
        'Fun fact: Mads is currently crushing it as a Teaching Assistant there while pursuing his MSc in Software Systems. 🎓',
      achievement: achievement?.id,
      special: true,
    };
  }

  // Tokyo references
  if (lower.includes('tokyo') || lower.includes('japan') || lower.includes('日本') || lower.includes('東京')) {
    const achievement = achievementManager.unlockAchievement('found_tokyo');
    return {
      message: asciiArt.tokyo + '\n\n' +
        'こんにちは! Tokyo, where tradition meets innovation! 🗼\n' +
        'Mads had the incredible opportunity to study at Tokyo University of Marine Science and Technology during his exchange program. ' +
        'Imagine debugging code while admiring Mount Fuji! 🗻',
      achievement: achievement?.id,
      special: true,
    };
  }

  // Calisthenics references
  if (lower.includes('calisthenics') || lower.includes('workout') || lower.includes('gains') ||
      lower.includes('muscle') || lower.includes('exercise')) {
    const achievement = achievementManager.unlockAchievement('found_calisthenics');
    return {
      message: asciiArt.calisthenics + '\n\n' +
        'Drop and give me 20 push-ups! 💪\n' +
        'Mads believes in building both mental and physical strength. When he\'s not writing clean code, ' +
        'he\'s doing muscle-ups and handstands. Who needs a gym when you have gravity and determination?\n' +
        'Remember: const muscles = await Promise.all(reps.map(rep => train()));',
      achievement: achievement?.id,
      special: true,
    };
  }

  // Norway references
  if (lower.includes('norway') || lower.includes('norge') || lower.includes('norwegian') ||
      lower.includes('viking') || lower.includes('fjord')) {
    const achievement = achievementManager.unlockAchievement('found_norway');
    return {
      message: asciiArt.norway + '\n\n' +
        'Velkommen! From the land of fjords, midnight sun, and excellent welfare! 🇳🇴\n' +
        'Norway: Where the coffee is strong, the code is clean, and the work-life balance is actually real.\n' +
        'Random Norwegian phrase: "Det er ikke gull alt som glimrer" (All that glitters is not gold)',
      achievement: achievement?.id,
      special: true,
    };
  }

  // Coffee references
  if (lower.includes('coffee') || lower.includes('caffeine') || lower.includes('☕')) {
    const achievement = achievementManager.unlockAchievement('coffee_lover');
    return {
      message: asciiArt.coffee + '\n\n' +
        'Coffee: The most important dependency in any developer\'s package.json ☕\n' +
        '// TODO: Refactor code after coffee\n' +
        'Error: CoffeeNotFoundException - Please refill cup before continuing',
      achievement: achievement?.id,
      special: true,
    };
  }

  // React references
  if (lower.includes('react') || lower.match(/\busereact\b/) || lower.includes('component') ||
      lower.includes('hooks')) {
    const achievement = achievementManager.unlockAchievement('react_master');
    return {
      message: asciiArt.react + '\n\n' +
        'React: Making UIs great since 2013! ⚛️\n' +
        'useState, useEffect, useCallback, useMemo, useReducer...\n' +
        'So many hooks, so little time!\n\n' +
        'Mads\' favorite quote: "In React we trust, in props we pass, in state we must!"',
      achievement: achievement?.id,
      special: true,
    };
  }

  // TypeScript references
  if (lower.includes('typescript') || lower.includes('type safety') || lower.includes('types')) {
    const achievement = achievementManager.unlockAchievement('type_safety');
    return {
      message: asciiArt.typescript + '\n\n' +
        'TypeScript: Because "undefined is not a function" is so 2015 📘\n' +
        'Any is scary. Unknown is better. Proper types are best!\n\n' +
        'type Developer = { coffee: Coffee; skills: Skill[]; bugs: "none" | "all"; }',
      achievement: achievement?.id,
      special: true,
    };
  }

  // Konami code
  if (lower === 'up up down down left right left right b a' ||
      lower === 'konami' ||
      lower === '↑↑↓↓←→←→ba') {
    const achievement = achievementManager.unlockAchievement('konami_code');
    return {
      message: '🎮 KONAMI CODE ACTIVATED! 🎮\n\n' +
        '30 extra lives granted!\n' +
        '...in a web portfolio. So that\'s pretty useless.\n' +
        'But hey, you\'re officially a gaming legend! 👾\n\n' +
        'Achievement unlocked: Old School Gamer',
      achievement: achievement?.id,
      special: true,
    };
  }

  // Matrix reference
  if (lower.includes('matrix') || lower.includes('red pill') || lower.includes('blue pill') ||
      lower.includes('neo')) {
    const achievement = achievementManager.unlockAchievement('matrix_mode');
    return {
      message: asciiArt.matrix + '\n\n' +
        'Wake up, Neo... 🔴💊\n' +
        'The Matrix has you...\n' +
        'Follow the white rabbit.\n\n' +
        'You take the blue pill, the story ends. You take the red pill, you stay in Wonderland, ' +
        'and I show you how deep the React component tree goes.',
      achievement: achievement?.id,
      special: true,
    };
  }

  // Secret command
  if (lower === 'secret' || lower === 'secrets' || lower === 'hidden') {
    return {
      message: asciiArt.secret + '\n\n' +
        '🔍 SECRET COMMANDS TO TRY:\n\n' +
        '• Try words related to Mads\' background\n' +
        '• Type places he\'s lived or studied\n' +
        '• Mention his hobbies and interests\n' +
        '• Classic gaming references work too!\n' +
        '• Coffee is always a good idea ☕\n' +
        '• Tech stack keywords might reveal something...\n\n' +
        'Hint: Think about Norway, Japan, fitness, and code!',
      special: true,
    };
  }

  // Fun responses for common things
  if (lower === 'sudo' || lower.startsWith('sudo ')) {
    return {
      message: '🔐 Nice try! But this terminal runs on TypeScript, not sudo privileges.\n' +
        'You don\'t need root access to explore easter eggs! 😄',
      special: false,
    };
  }

  if (lower === 'hack' || lower === 'hack the planet') {
    return {
      message: '💻 HACK THE PLANET! 💻\n\n' +
        'Mess with the best, die like the rest!\n' +
        '(But seriously, this is just a portfolio site. No hacking needed!) 😎',
      special: false,
    };
  }

  if (lower === 'pwd') {
    return {
      message: '/home/visitor/mads-portfolio/terminal\n' +
        'You are here, in the terminal of possibilities! ✨',
      special: false,
    };
  }

  if (lower === 'ls' || lower === 'dir') {
    return {
      message: 'about.tsx\neducation.md\nprojects.tsx\nwork.md\nskills.ts\ncontact.yml\nsecrets.hidden 👀\n\n' +
        'Use the file explorer to open these files!',
      special: false,
    };
  }

  if (lower === 'whoami' || lower === 'who am i') {
    return {
      message: 'You are a curious visitor exploring Mads Hermansen\'s portfolio!\n' +
        'Keep exploring to learn more about his journey from Norway to Tokyo and beyond! 🌏',
      special: false,
    };
  }

  if (lower.includes('joke') || lower === 'tell me a joke') {
    const jokes = [
      'Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛',
      'How many programmers does it take to change a light bulb?\nNone, that\'s a hardware problem! 💡',
      'Why did the developer go broke?\nBecause he used up all his cache! 💸',
      'What\'s a programmer\'s favorite place to hang out?\nThe Foo Bar! 🍺',
      'Why do Java developers wear glasses?\nBecause they can\'t C#! 👓',
      'A SQL query walks into a bar, walks up to two tables and asks...\n"Can I join you?" 🍻',
    ];
    return {
      message: jokes[Math.floor(Math.random() * jokes.length)],
      special: false,
    };
  }

  return null;
};
