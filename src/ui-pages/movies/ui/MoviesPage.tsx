import { getBeatfilmMovies, getSavedMovies } from '@/entities/movie/api/server';
import { Footer } from '@/shared/ui';
import { mergeBeatfilmWithSaved } from '@/ui-pages/movies/lib/mergeBeatfilmWithSaved';
import { MoviesListController } from '@/ui-pages/movies/ui/MoviesListController';
import { Header } from '@/widgets/header';

export async function MoviesPage() {
  const beatfilmMovies = await getBeatfilmMovies();
  const savedMovies = await getSavedMovies();

  // TODO: rename to moviesForRender
  const movies = mergeBeatfilmWithSaved({ beatfilmMovies, savedMovies });

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Header isAuthorized />
        {/* Form and input search movie */}
        {/* Switcher короткого кино */}
        <MoviesListController movies={movies} />
        <Footer />
      </div>
    </div>
  );
}
