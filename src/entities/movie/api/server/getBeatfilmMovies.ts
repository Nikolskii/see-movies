import { cache } from 'react';

import { BeatfilmMovie } from '@/entities/movie/model/types';
import { apiFetch } from '@/shared/api';
import { NOMOREPARTIES_API_URL } from '@/shared/config/env';

// TODO: проверить по логам на бэк, что запрос закеширован

const BEATFILM_REVALIDATE_SECONDS = 60 * 60 * 24;

export const getBeatfilmMovies = cache(async () => {
  return apiFetch<BeatfilmMovie[]>(
    '/beatfilm-movies',
    {
      method: 'GET',
      credentials: 'omit',
      next: { revalidate: BEATFILM_REVALIDATE_SECONDS },
    },
    NOMOREPARTIES_API_URL
  );
});
