import { filterMovies } from '@/entities/movie';
import { getSavedMovies } from '@/entities/movie/api/server';
import { SavedMoviesList } from '@/ui-pages/saved-movies/ui/SavedMoviesList';

type Props = {
  isShortOnly: boolean;
  searchQuery: string;
};

export async function SavedMoviesContent({ isShortOnly, searchQuery }: Props) {
  const savedMovies = await getSavedMovies();
  const filteredMovies = filterMovies({ movies: savedMovies, query: searchQuery, isShortOnly });

  return <SavedMoviesList movies={filteredMovies} />;
}
