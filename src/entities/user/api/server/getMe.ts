import { User } from '@/entities/user/model/types';
import { apiFetch, request } from '@/shared/api';
import { getCookieHeader } from '@/shared/lib/server/getCookieHeader';
// TODO: кешировать запрос

export async function getMe() {
  const cookieHeader = await getCookieHeader();

  return request(() =>
    apiFetch<User>('/users/me', {
      method: 'GET',
      headers: { cookie: cookieHeader },
    })
  );
}
