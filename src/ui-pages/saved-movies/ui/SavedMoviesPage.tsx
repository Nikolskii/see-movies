import { getSavedMovies } from '@/entities/movie/api/server';
import { Footer } from '@/shared/ui';
import { SavedMoviesList } from '@/ui-pages/saved-movies/ui/SavedMoviesList';
import { Header } from '@/widgets/header';

export async function SavedMoviesPage() {
  const savedMovies = await getSavedMovies();

  return (
    <div className="page-root">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        {/* Form and input search movie */}
        {/* Switcher короткого кино */}
        <div className="flex-1">
          <SavedMoviesList movies={savedMovies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
