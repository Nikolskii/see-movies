'use client';

// TODO: как не делать весь список клиентским?

import {
  BeatfilmMovie,
  formatDuration,
  getNomorepartiesImageUrl,
  MovieCard,
} from '@/entities/movie';

type Props = {
  movies: BeatfilmMovie[];
};

export function MoviesListController({ movies }: Props) {
  return (
    <div>
      {movies.map(({ id, nameRU, trailerLink, duration, image }) => {
        return (
          <MovieCard
            key={id}
            name={nameRU}
            trailerLink={trailerLink}
            duration={formatDuration(duration)}
            image={{
              alternativeText: image.alternativeText || 'Обложка фильма',
              link: getNomorepartiesImageUrl(image.url),
            }}
            action={{
              type: 'save',
              onClick: () => console.log('handle save click'),
            }}
          />
        );
      })}
    </div>
  );
}
