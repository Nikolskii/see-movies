import { redirect } from 'next/navigation';

import { UserProvider } from '@/entities/user';
import { getUser } from '@/entities/user/api/server';
import { tryApi } from '@/shared/api';
import { getAuthToken } from '@/shared/lib/server';
import { routes } from '@/shared/routes';

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jwt = await getAuthToken();
  if (!jwt) redirect(routes.signin);

  const user = await tryApi(getUser);
  if (!user.ok) redirect(routes.signin);

  return <UserProvider initialUser={user.data}>{children}</UserProvider>;
}
