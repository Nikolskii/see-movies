import { SavedMovie } from '@/entities/movie';
import { apiFetch } from '@/shared/api';

export type SaveMovieRequest = Omit<SavedMovie, '_id'>;

export function saveMovie(body: SaveMovieRequest) {
  return apiFetch<SavedMovie>('/movies', {
    method: 'POST',
    json: body,
  });
}
