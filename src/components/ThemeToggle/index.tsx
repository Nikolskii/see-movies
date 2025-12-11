'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// TODO: разобраться, как работает useTheme
// TODO: вынести кнопку в header?
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
      className="bg-light-700 dark:bg-dark-700 dark:border-dark-600 mt-20 rounded-md border px-3 py-1 text-sm text-black dark:text-white"
    >
      {isDark ? 'Светлая тема' : 'Тёмная тема'}
    </button>
  );
}
