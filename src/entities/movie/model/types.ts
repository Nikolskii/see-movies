export type BeatfilmMovie = {
  country: string;
  id: number;
  nameRU: string;
  trailerLink: string;
  duration: number;
  image: {
    url: string;
    alternativeText: string;
  };
};

export type MovieCardAction =
  | { type: 'save'; onClick: () => void }
  | { type: 'delete'; onClick: () => void }
  | { type: 'saved' };
