import { apiFetch } from '@/shared/api';

export type SaveMovieRequest = {
  country: string;
  director: string;
  duration: number;
  year: number;
  description: string;
  image: string;
  trailerLink: string;
  thumbnail: string;
  movieId: number;
  nameRU: string;
  nameEN: string;
};

export type SaveMovieResponse = {
  country: string;
  director: string;
  duration: number;
  year: number;
  description: string;
  image: string;
  trailerLink: string;
  thumbnail: string;
  owner: string;
  movieId: number;
  nameRU: string;
  nameEN: string;
  _id: string;
};

export function saveMovie(body: SaveMovieRequest) {
  return apiFetch<SaveMovieResponse>('/movies', {
    method: 'POST',
    json: body,
  });
}
