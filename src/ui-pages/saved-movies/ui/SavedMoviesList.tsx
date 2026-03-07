import { formatDuration, MovieCard, SavedMovie } from '@/entities/movie';
import { DeleteMovieButton } from '@/features/delete-movie';
import { MoviesGrid } from '@/widgets/movies-grid';

type Props = {
  movies: SavedMovie[];
};

export function SavedMoviesList({ movies }: Props) {
  return (
    <MoviesGrid>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          name={movie.nameRU}
          trailerLink={movie.trailerLink}
          duration={formatDuration(movie.duration)}
          image={movie.image}
          actionSlot={<DeleteMovieButton movieId={movie._id} movieName={movie.nameRU} />}
        />
      ))}
    </MoviesGrid>
  );
}
