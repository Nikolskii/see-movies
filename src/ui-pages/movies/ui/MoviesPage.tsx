import { getBeatfilmMovies } from '@/entities/movie/api/server';
import { Header } from '@/widgets';

export async function MoviesPage() {
  const beatfilmMovies = await getBeatfilmMovies();

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Header isAuthorized />
      </div>
    </div>
  );
}
