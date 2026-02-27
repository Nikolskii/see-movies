import { SavedMovie } from '@/entities/movie';
import { apiFetch } from '@/shared/api';

export type DeleteMovieRequest = {
  movieId: string;
};

export function deleteMovie(request: DeleteMovieRequest) {
  return apiFetch<SavedMovie>(`/movies/${request.movieId}`, {
    method: 'DELETE',
  });
}
