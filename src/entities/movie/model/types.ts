// TODO: использовать общий тип Movie
export type BeatfilmMovie = {
  country: string;
  id: number;
  nameRU: string;
  trailerLink: string;
  duration: number;
  director: string;
  year: number;
  description: string;
  nameRu: string;
  nameEN: string;
  image: {
    url: string;
    alternativeText: string;
  };
};

export type MovieCardAction =
  | { type: 'save'; onClick: () => void }
  | { type: 'delete'; onClick: () => void }
  | { type: 'saved' };
