import { filterShortMovies } from '@/entities/movie';
import { getSavedMovies } from '@/entities/movie/api/server';
import { ShortMoviesToggle } from '@/features/filter-short-movies';
import { Footer } from '@/shared/ui';
import { SavedMoviesList } from '@/ui-pages/saved-movies/ui/SavedMoviesList';
import { Header } from '@/widgets/header';

type Props = {
  isShortOnly: boolean;
};

export async function SavedMoviesPage({ isShortOnly }: Props) {
  const savedMovies = await getSavedMovies();

  const filteredMovies = isShortOnly ? filterShortMovies(savedMovies) : savedMovies;

  return (
    <div className="page-root">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        {/* Form and input search movie */}
        <div className="mb-[40px]">
          <ShortMoviesToggle />
        </div>
        <div className="flex-1">
          <SavedMoviesList movies={filteredMovies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
