import { getBeatfilmMovies, getSavedMovies } from '@/entities/movie/api/server';
import { Footer } from '@/shared/ui';
import { mergeBeatfilmWithSaved } from '@/ui-pages/movies/lib/mergeBeatfilmWithSaved';
import { MoviesList } from '@/ui-pages/movies/ui/MoviesList';
import { Header } from '@/widgets/header';

export async function MoviesPage() {
  const beatfilmMovies = await getBeatfilmMovies();
  const savedMovies = await getSavedMovies();

  // TODO: rename to moviesForRender
  const movies = mergeBeatfilmWithSaved({ beatfilmMovies, savedMovies });

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 text-black dark:text-white">
      <div className="container mx-auto flex min-h-screen flex-col">
        <Header isAuthorized />
        {/* Form and input search movie */}
        {/* Switcher короткого кино */}
        <div className="flex-1">
          <MoviesList movies={movies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
