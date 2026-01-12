'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// TODO: разобраться, как работает useTheme
export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Чтобы избежать ошибок гидрации — рендерим UI только после маунта
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const current = resolvedTheme ?? theme;

  const isDark = current === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="bg-light-700 dark:bg-dark-700 action-fade cursor-pointer rounded-md border-none px-2 py-1"
    >
      {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-slate-700" />}
    </button>
  );
}
