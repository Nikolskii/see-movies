type Movie = {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  trailerLink: string;
  thumbnail: string;
  nameRU: string;
  nameEN: string;
};

export type BeatfilmMovie = Movie & {
  id: number;
  image: {
    url: string;
    alternativeText: string;
  };
};

export type SavedMovie = Movie & {
  image: string;
  movieId: number;
  _id: string;
};

export type MovieCardAction =
  | { type: 'save'; onClick: () => void }
  | { type: 'delete'; onClick: () => void }
  | { type: 'saved' };
