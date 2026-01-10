import { QueryProvider, ThemeProvider } from '@/shared/providers';

export function AppProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}

type Props = {
  children: React.ReactNode;
};
