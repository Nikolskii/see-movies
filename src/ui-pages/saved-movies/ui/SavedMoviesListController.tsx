'use client';

// TODO: как не делать весь список клиентским?
// TODO: обработать ошибки мутаций
// TODO: актуализировать thumbnail

// TODO: передавать action слотами

import { useMutation } from '@tanstack/react-query';

import { formatDuration, getNomorepartiesImageUrl, MovieCard, SavedMovie } from '@/entities/movie';
import { deleteMovie as deleteMovieMutation, DeleteMovieRequest } from '@/features/delete-movie';
import { ApiError } from '@/shared/api';
import { MoviesGrid } from '@/widgets/movies-grid';

type Props = {
  movies: SavedMovie[];
};

export function SavedMoviesListController({ movies }: Props) {
  const deleteMovie = useMutation<SavedMovie, ApiError, DeleteMovieRequest>({
    mutationFn: deleteMovieMutation,
  });

  return (
    <MoviesGrid>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie._id}
            name={movie.nameRU}
            trailerLink={movie.trailerLink}
            duration={formatDuration(movie.duration)}
            image={movie.image}
            action={{ type: 'delete', onClick: () => deleteMovie.mutate({ movieId: movie._id }) }}
          />
        );
      })}
    </MoviesGrid>
  );
}
