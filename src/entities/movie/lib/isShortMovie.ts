import { Movie } from '@/entities/movie/model/types';

export const SHORT_MOVIE_MAX_DURATION = 40;

type MovieWithDuration = Pick<Movie, 'duration'>;

export function isShortMovie(movie: MovieWithDuration): boolean {
  return movie.duration <= SHORT_MOVIE_MAX_DURATION;
}
