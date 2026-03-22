import { isShortMovie } from '@/entities/movie/lib/isShortMovie';

export function filterShortMovies<T extends { duration: number }>(movies: T[]) {
  return movies.filter(isShortMovie);
}
