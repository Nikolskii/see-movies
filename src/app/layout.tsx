import '../shared/styles/globals.css';

import type { Metadata } from 'next';

import { AppProviders } from '@/app/providers';

export const metadata: Metadata = {
  title: 'See Movies',
  description: 'Сохранение любимых фильмов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
        <div id="drawer-root" />
      </body>
    </html>
  );
}
