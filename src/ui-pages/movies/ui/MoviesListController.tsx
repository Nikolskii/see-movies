'use client';

// TODO: как не делать весь список клиентским?
// TODO: обработать ошибки мутаций
// TODO: актуализировать thumbnail

// TODO: передавать action слотами

import { useMutation } from '@tanstack/react-query';

import {
  BeatfilmMovie,
  formatDuration,
  getNomorepartiesImageUrl,
  MovieCard,
  SavedMovie,
} from '@/entities/movie';
import { deleteMovie as deleteMovieMutation, DeleteMovieRequest } from '@/features/delete-movie';
import { saveMovie as saveMovieMutation, SaveMovieRequest } from '@/features/save-movie';
import { ApiError } from '@/shared/api';
import { BeatfilmMovieWithSaved } from '@/ui-pages/movies/model/types';
import { MoviesGrid } from '@/widgets/movies-grid';

type Props = {
  movies: BeatfilmMovieWithSaved[];
};

export function MoviesListController({ movies }: Props) {
  const saveMovie = useMutation<SavedMovie, ApiError, SaveMovieRequest>({
    mutationFn: saveMovieMutation,
  });

  const deleteMovie = useMutation<SavedMovie, ApiError, DeleteMovieRequest>({
    mutationFn: deleteMovieMutation,
  });
  // { type: 'delete', onClick: () => deleteMovie.mutate({ movieId: movie._id }) }

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
            action={
              movie.isSaved
                ? { type: 'saved' }
                : {
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
                  }
            }
          />
        );
      })}
    </MoviesGrid>
  );
}
