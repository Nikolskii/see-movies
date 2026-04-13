import { cache } from 'react';

import { SavedMovie } from '@/entities/movie/model/types';
import { apiFetch } from '@/shared/api';
import { getCookieHeader } from '@/shared/lib/server';

export const getSavedMovies = cache(async () => {
  const cookieHeader = await getCookieHeader();

  return apiFetch<SavedMovie[]>('/movies', {
    method: 'GET',
    headers: { cookie: cookieHeader },
  });
});
