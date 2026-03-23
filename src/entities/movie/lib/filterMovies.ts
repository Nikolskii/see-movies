import { isShortMovie } from '@/entities/movie/lib/isShortMovie';

type FilterableMovie = {
  duration: number;
  nameRU: string;
  nameEN?: string | null;
};

type FilterMoviesParams<T extends FilterableMovie> = {
  movies: T[];
  query?: string;
  isShortOnly?: boolean;
};

function normalizeSearchValue(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function matchesMovieQuery(movie: FilterableMovie, normalizedQuery: string) {
  if (!normalizedQuery) {
    return true;
  }

  return [movie.nameRU, movie.nameEN ?? ''].some((movieName) =>
    normalizeSearchValue(movieName).includes(normalizedQuery)
  );
}

export function filterMovies<T extends FilterableMovie>({
  movies,
  query = '',
  isShortOnly = false,
}: FilterMoviesParams<T>) {
  const normalizedQuery = normalizeSearchValue(query);

  return movies.filter((movie) => {
    const matchesQuery = matchesMovieQuery(movie, normalizedQuery);
    const matchesShortFilter = !isShortOnly || isShortMovie(movie);

    return matchesQuery && matchesShortFilter;
  });
}

