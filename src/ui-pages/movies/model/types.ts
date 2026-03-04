import { BeatfilmMovie } from '@/entities/movie';

export type BeatfilmMovieWithSaved = BeatfilmMovie & {
  isSaved: boolean;
};
