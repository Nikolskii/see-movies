import { User } from '@/entities/user/model/types';
import { apiFetch } from '@/shared/api';
import { getCookieHeader } from '@/shared/lib/server/getCookieHeader';

// TODO: кешировать запрос?

export async function getMe() {
  const cookieHeader = await getCookieHeader();

  return apiFetch<User>('/users/me', {
    method: 'GET',
    headers: { cookie: cookieHeader },
  });
}
