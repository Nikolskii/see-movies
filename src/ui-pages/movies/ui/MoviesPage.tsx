import { filterMovies, mergeBeatfilmWithSaved } from '@/entities/movie';
import { getBeatfilmMovies, getSavedMovies } from '@/entities/movie/api/server';
import { Footer } from '@/shared/ui';
import { MoviesList } from '@/ui-pages/movies/ui/MoviesList';
import { Header } from '@/widgets/header';
import { MoviesSearch } from '@/widgets/movies-search';

type Props = {
  isShortOnly: boolean;
  searchQuery: string;
};

export async function MoviesPage({ isShortOnly, searchQuery }: Props) {
  const beatfilmMovies = await getBeatfilmMovies();
  const savedMovies = await getSavedMovies();

  const mergedMovies = mergeBeatfilmWithSaved({ beatfilmMovies, savedMovies });
  const filteredMovies = filterMovies({ movies: mergedMovies, query: searchQuery, isShortOnly });

  return (
    <div className="page-root">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        <MoviesSearch />
        <div className="flex-1">
          <MoviesList movies={filteredMovies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
