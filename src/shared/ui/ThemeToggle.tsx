'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Переключить тему"
      className="bg-light-700 dark:bg-dark-700 action-fade cursor-pointer rounded-md border-none px-2 py-1"
    >
      <Sun className="hidden text-yellow-400 dark:block" />
      <Moon className="block text-slate-700 dark:hidden" />
    </button>
  );
}
