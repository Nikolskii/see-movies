import { getSavedMovies } from '@/entities/movie/api/server';
import { Footer } from '@/shared/ui';
import { SavedMoviesListController } from '@/ui-pages/saved-movies/ui/SavedMoviesListController';
import { Header } from '@/widgets/header';

export async function SavedMoviesPage() {
  const savedMovies = await getSavedMovies();

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Header isAuthorized />
        {/* Form and input search movie */}
        {/* Switcher короткого кино */}
        <SavedMoviesListController movies={savedMovies} />
        <Footer />
      </div>
    </div>
  );
}
