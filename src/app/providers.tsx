import { ThemeProvider } from '@/shared/providers';

export function AppProviders({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

type Props = {
  children: React.ReactNode;
};
