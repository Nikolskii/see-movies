import { getBeatfilmMovies } from '@/entities/movie/api/server';
import { Footer } from '@/shared/ui';
import { MoviesListController } from '@/ui-pages/movies/ui/MoviesListController';
import { Header } from '@/widgets';

export async function MoviesPage() {
  const beatfilmMovies = await getBeatfilmMovies();

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Header isAuthorized />
        {/* Form and input search movie */}
        {/* Switcher короткого кино */}
        <div className="flex flex-wrap justify-center gap-10 px-2.5 md:gap-x-[30px] md:gap-y-[45px] xl:gap-y-[60px]">
          <MoviesListController movies={beatfilmMovies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
