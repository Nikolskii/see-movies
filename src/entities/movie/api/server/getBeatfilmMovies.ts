import { cache } from 'react';

import { BeatfilmMovie } from '@/entities/movie/model/types';
import { apiFetch } from '@/shared/api';
import { NOMOREPARTIES_API_URL } from '@/shared/config/env';

// TODO: кешировать запрос SSG или ISR

export const getBeatfilmMovies = cache(async () => {
  return apiFetch<BeatfilmMovie[]>(
    '/beatfilm-movies',
    {
      method: 'GET',
    },
    NOMOREPARTIES_API_URL
  );
});
