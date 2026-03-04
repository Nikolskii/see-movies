import { cache } from 'react';

import { User } from '@/entities/user/model/types';
import { apiFetch } from '@/shared/api';
import { getCookieHeader } from '@/shared/lib/server';

// TODO: кешировать запрос?

export const getUser = cache(async () => {
  const cookieHeader = await getCookieHeader();

  return apiFetch<User>('/users/me', {
    method: 'GET',
    headers: { cookie: cookieHeader },
  });
});
