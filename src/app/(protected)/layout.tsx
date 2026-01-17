import { redirect } from 'next/navigation';

import { getAuthToken } from '@/shared/lib/server';
import { routes } from '@/shared/routes';

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jwt = await getAuthToken();

  if (!jwt) redirect(routes.signin);

  return children;
}
