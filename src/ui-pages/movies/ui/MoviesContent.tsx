import { filterMovies, mergeBeatfilmWithSaved } from '@/entities/movie';
import { getBeatfilmMovies, getSavedMovies } from '@/entities/movie/api/server';

import { MoviesList } from './MoviesList';

type Props = {
  isShortOnly: boolean;
  searchQuery: string;
};

export async function MoviesContent({ isShortOnly, searchQuery }: Props) {
  const beatfilmMovies = await getBeatfilmMovies();
  const savedMovies = await getSavedMovies();

  const mergedMovies = mergeBeatfilmWithSaved({ beatfilmMovies, savedMovies });
  const filteredMovies = filterMovies({ movies: mergedMovies, query: searchQuery, isShortOnly });

  return <MoviesList movies={filteredMovies} />;
}

