import { cache } from 'react';

import { BeatfilmMovie } from '@/entities/movie/model/types';
import { apiFetch } from '@/shared/api';

const API_NOMOREPARTIES_URL = process.env.NEXT_PUBLIC_NOMOREPARTIES_URL;

if (!API_NOMOREPARTIES_URL) {
  throw new Error('NEXT_PUBLIC_NOMOREPARTIES_URL is not defined');
}

// TODO: кешировать запрос SSG или ISR

export const getBeatfilmMovies = cache(async () => {
  return apiFetch<BeatfilmMovie[]>(
    '/beatfilm-movies',
    {
      method: 'GET',
    },
    API_NOMOREPARTIES_URL
  );
});
