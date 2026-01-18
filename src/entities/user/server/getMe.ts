import { cookies } from 'next/headers';

import { User } from '@/entities/user/api/getUser';
import { apiFetch, request } from '@/shared/api';

export async function getMe() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  return request(() =>
    apiFetch<User>('/users/me', {
      method: 'GET',
      headers: { cookie: cookieHeader },
    })
  );
}
