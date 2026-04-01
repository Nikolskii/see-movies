import { filterMovies } from '@/entities/movie';
import { getSavedMovies } from '@/entities/movie/api/server';
import { ShortMoviesToggle } from '@/features/filter-short-movies';
import { SearchMoviesForm } from '@/features/search-movies';
import { Footer } from '@/shared/ui';
import { SavedMoviesList } from '@/ui-pages/saved-movies/ui/SavedMoviesList';
import { Header } from '@/widgets/header';

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
        <div className="mb-[40px] px-[14px] pt-[80px] md:px-[30px] lg:px-[70px]">
          <div className="flex flex-col gap-[45px] border-b border-light-700 pb-[40px] sm:gap-[30px] dark:border-dark-700">
            <SearchMoviesForm />
            <ShortMoviesToggle />
          </div>
        </div>
        <div className="flex-1">
          <SavedMoviesList movies={filteredMovies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
