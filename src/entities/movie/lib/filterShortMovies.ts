import { isShortMovie } from '@/entities/movie/lib/isShortMovie';
import { BeatfilmMovieWithSaved, SavedMovie } from '@/entities/movie/model/types';

export function filterShortMovies(movies: BeatfilmMovieWithSaved[] | SavedMovie[]) {
  return movies.filter(isShortMovie);
}
