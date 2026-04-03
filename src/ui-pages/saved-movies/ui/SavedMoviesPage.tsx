import { filterMovies } from '@/entities/movie';
import { getSavedMovies } from '@/entities/movie/api/server';
import { Footer } from '@/shared/ui';
import { SavedMoviesList } from '@/ui-pages/saved-movies/ui/SavedMoviesList';
import { Header } from '@/widgets/header';
import { MoviesSearch } from '@/widgets/movies-search';

type Props = {
  isShortOnly: boolean;
  searchQuery: string;
};

export async function SavedMoviesPage({ isShortOnly, searchQuery }: Props) {
  const savedMovies = await getSavedMovies();

  const filteredMovies = filterMovies({ movies: savedMovies, query: searchQuery, isShortOnly });

  return (
    <div className="page-root">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        <MoviesSearch />
        <div className="flex-1">
          <SavedMoviesList movies={filteredMovies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
