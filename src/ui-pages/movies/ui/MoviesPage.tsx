import { filterShortMovies, mergeBeatfilmWithSaved } from '@/entities/movie';
import { getBeatfilmMovies, getSavedMovies } from '@/entities/movie/api/server';
import { ShortMoviesToggle } from '@/features/filter-short-movies';
import { Footer } from '@/shared/ui';
import { MoviesList } from '@/ui-pages/movies/ui/MoviesList';
import { Header } from '@/widgets/header';

type Props = {
  isShortOnly: boolean;
};

export async function MoviesPage({ isShortOnly }: Props) {
  const beatfilmMovies = await getBeatfilmMovies();
  const savedMovies = await getSavedMovies();

  const mergedMovies = mergeBeatfilmWithSaved({ beatfilmMovies, savedMovies });
  const filteredMovies = isShortOnly ? filterShortMovies(mergedMovies) : mergedMovies;

  //   const filteredMovies = filterMovies({
  //   movies: mergedMovies,
  //   query: searchQuery,
  //   isShortOnly,
  // });

  // const visibleMovies = filteredMovies.slice(0, visibleCount);

  return (
    <div className="page-root">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        <div className="mb-[40px]">
          <ShortMoviesToggle />
        </div>
        <div className="flex-1">
          <MoviesList movies={filteredMovies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
