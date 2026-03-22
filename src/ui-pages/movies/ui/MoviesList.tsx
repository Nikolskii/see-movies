import Image from 'next/image';

import {
  BeatfilmMovieWithSaved,
  formatDuration,
  getNomorepartiesImageUrl,
  MovieCard,
} from '@/entities/movie';
import { SaveMovieButton } from '@/features/save-movie';
import { MoviesGrid } from '@/widgets/movies-grid';

type Props = {
  movies: BeatfilmMovieWithSaved[];
};

export function MoviesList({ movies }: Props) {
  return (
    <MoviesGrid>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            name={movie.nameRU}
            trailerLink={movie.trailerLink}
            duration={formatDuration(movie.duration)}
            image={getNomorepartiesImageUrl(movie.image.url)}
            actionSlot={
              movie.isSaved ? (
                <div
                  className="duration-base flex h-[21px] w-[21px] items-center justify-center rounded-[30px] bg-pink-500 transition-opacity group-hover:opacity-60"
                  role="status"
                  aria-label={`Фильм ${movie.nameRU} сохранен`}
                >
                  <Image alt="Сохранено" aria-hidden width={9} height={6} src="/icons/check.svg" />
                </div>
              ) : (
                <SaveMovieButton
                  movie={{
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: getNomorepartiesImageUrl(movie.image.url),
                    trailerLink: movie.trailerLink,
                    thumbnail: getNomorepartiesImageUrl(movie.image.url),
                    movieId: movie.id,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN,
                  }}
                />
              )
            }
          />
        );
      })}
    </MoviesGrid>
  );
}
