'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

// TODO: разобраться, как работает ThemeProvider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class" // next-themes будет ставить класс на <html>, например "dark"
      defaultTheme="light" // можешь заменить на "system", если хочешь по системе
      enableSystem={true}
      storageKey="theme" // ключ в localStorage
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
