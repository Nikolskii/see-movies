import { formatDuration, getNomorepartiesImageUrl, MovieCard } from '@/entities/movie';
import { getBeatfilmMovies } from '@/entities/movie/api/server';
import { Header } from '@/widgets';

export async function MoviesPage() {
  const beatfilmMovies = await getBeatfilmMovies();

  return (
    <div className="dark:bg-dark-900 bg-color-light-900 min-h-screen text-black dark:text-white">
      <div className="container mx-auto">
        <Header isAuthorized />
        <div>
          {beatfilmMovies.map(({ id, nameRU, trailerLink, duration, image }) => {
            return (
              <MovieCard
                key={id}
                name={nameRU}
                trailerLink={trailerLink}
                duration={formatDuration(duration)}
                handleCardClick={() => {}}
                image={{
                  alternativeText: image.alternativeText || 'Обложка фильма',
                  link: getNomorepartiesImageUrl(image.url),
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
