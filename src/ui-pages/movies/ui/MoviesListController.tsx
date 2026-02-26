'use client';

// TODO: как не делать весь список клиентским?

import { useMutation } from '@tanstack/react-query';

import {
  BeatfilmMovie,
  formatDuration,
  getNomorepartiesImageUrl,
  MovieCard,
} from '@/entities/movie';
import {
  saveMovie as saveMovieMutation,
  SaveMovieRequest,
  SaveMovieResponse,
} from '@/features/save-movie';
import { ApiError } from '@/shared/api';

type Props = {
  movies: BeatfilmMovie[];
};

export function MoviesListController({ movies }: Props) {
  const saveMovie = useMutation<SaveMovieResponse, ApiError, SaveMovieRequest>({
    mutationFn: saveMovieMutation,
  });

  return (
    <>
      {movies.map((movie) => {
        // TODO: актуализировать thumbnail
        return (
          <MovieCard
            key={movie.id}
            name={movie.nameRU}
            trailerLink={movie.trailerLink}
            duration={formatDuration(movie.duration)}
            image={{
              alternativeText: movie.image.alternativeText || 'Обложка фильма',
              link: getNomorepartiesImageUrl(movie.image.url),
            }}
            action={{
              type: 'save',
              onClick: () => {
                saveMovie.mutate({
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
                });
              },
            }}
          />
        );
      })}
    </>
  );
}
