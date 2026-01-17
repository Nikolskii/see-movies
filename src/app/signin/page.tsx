import { redirect } from 'next/navigation';

import { getAuthToken } from '@/shared/lib/server';
import { routes } from '@/shared/routes';
import { SigninPage } from '@/ui-pages/signin';

export default async function Page() {
  const jwt = await getAuthToken();
  if (jwt) redirect(routes.movies);

  return <SigninPage />;
}
