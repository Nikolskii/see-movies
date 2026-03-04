import { BeatfilmMovie, SavedMovie } from '@/entities/movie';
import { BeatfilmMovieWithSaved } from '@/ui-pages/movies/model/types';

type Params = {
  beatfilmMovies: BeatfilmMovie[];
  savedMovies: SavedMovie[];
};

export function mergeBeatfilmWithSaved({
  beatfilmMovies,
  savedMovies,
}: Params): BeatfilmMovieWithSaved[] {
  const savedIds = new Set(savedMovies.map((movie) => movie.movieId));

  return beatfilmMovies.map((movie) => ({
    ...movie,
    isSaved: savedIds.has(movie.id),
  }));
}
