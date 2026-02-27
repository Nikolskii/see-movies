import { cache } from 'react';

import { SavedMovie } from '@/entities/movie/model/types';
import { apiFetch } from '@/shared/api';

// TODO: кешировать запрос?

export const getBeatfilmMovies = cache(async () => {
  return apiFetch<SavedMovie[]>('/movies', {
    method: 'GET',
  });
});
